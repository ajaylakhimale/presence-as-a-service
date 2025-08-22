import {
    PricingConfig,
    CalculationInput,
    CalculationResult,
    ScaleCalculation,
    ValidationResult,
    TierType,
    Currency,
    DiscountType,
    BillingCycle
} from '../config/pricing-types';

// Import the pricing configuration
import pricingConfigData from '../config/pricing-config.json';

// Validate and load the pricing configuration
const pricingConfig: PricingConfig = pricingConfigData as PricingConfig;

/**
 * Calculate the total price based on input parameters
 */
export function calculatePrice(input: CalculationInput): CalculationResult {
    // Find the website type configuration
    const typeConfig = pricingConfig.types.find(type => type.id === input.typeId);
    if (!typeConfig) {
        throw new Error(`Website type "${input.typeId}" not found`);
    }

    // Get the tier configuration
    const tierConfig = typeConfig.tiers[input.tier];
    if (!tierConfig) {
        throw new Error(`Tier "${input.tier}" not found for type "${input.typeId}"`);
    }

    // Calculate base price
    let monthlyPrice = tierConfig.base_price_monthly;
    let setupCost = tierConfig.setup_cost;

    // Calculate scale additions
    const scaleAdditions = calculateScaleAdditions(typeConfig.scale, input.scale || {});
    const scaleAdditionsCost = scaleAdditions.reduce((total, calc) => total + calc.total_cost, 0);
    monthlyPrice += scaleAdditionsCost;

    // Calculate addons cost
    const addonsCost = calculateAddonsCost(typeConfig.addons, input.addons || []);
    monthlyPrice += addonsCost.monthly;
    setupCost += addonsCost.setup;

    // Calculate global addons cost
    const globalAddonsCost = calculateGlobalAddonsCost(input.globalAddons || []);
    monthlyPrice += globalAddonsCost.monthly;
    setupCost += globalAddonsCost.setup;

    // Apply currency conversion
    const currency = input.region || 'INR';
    if (currency !== 'INR') {
        const rate = pricingConfig.fx[currency];
        if (rate) {
            monthlyPrice = Math.round(monthlyPrice * rate);
            setupCost = Math.round(setupCost * rate);
        }
    }

    // Calculate discounts
    const discountResult = calculateDiscounts(monthlyPrice, input.discounts || [], input.billingCycle);
    const discountedMonthly = monthlyPrice - discountResult.amount;

    // Calculate annual pricing
    const annualPrice = discountedMonthly * 12;
    const effectiveMonthlyAnnual = input.billingCycle === 'annual'
        ? Math.round(annualPrice / 12)
        : discountedMonthly;

    // Apply psychological rounding
    const roundedMonthly = applyPsychologicalRounding(discountedMonthly);
    const roundedAnnual = applyPsychologicalRounding(annualPrice);
    const roundedSetup = applyPsychologicalRounding(setupCost);

    return {
        monthly: roundedMonthly,
        annual: roundedAnnual,
        effective_monthly_annual: Math.round(roundedAnnual / 12),
        setup_cost: roundedSetup,
        currency,
        breakdown: {
            base_monthly: tierConfig.base_price_monthly,
            scale_additions: scaleAdditionsCost,
            addons_monthly: addonsCost.monthly,
            global_addons_monthly: globalAddonsCost.monthly,
            discount_amount: discountResult.amount,
            discount_percent: discountResult.percent
        },
        delivery_days: tierConfig.delivery_days,
        limits: tierConfig.limits,
        features: tierConfig.features
    };
}

/**
 * Calculate scale-based price additions
 */
export function calculateScaleAdditions(
    scale: any,
    currentScale: Record<string, number>
): ScaleCalculation[] {
    const calculations: ScaleCalculation[] = [];

    for (const modifier of scale.modifiers) {
        const baseValue = scale.base[modifier.metric] || 0;
        const currentValue = currentScale[modifier.metric] || baseValue;

        if (currentValue > baseValue) {
            const additionalUnits = Math.ceil((currentValue - baseValue) / modifier.step);
            const totalCost = additionalUnits * modifier.price_add_monthly;

            calculations.push({
                metric: modifier.metric,
                base_value: baseValue,
                current_value: currentValue,
                additional_units: additionalUnits,
                cost_per_unit: modifier.price_add_monthly,
                total_cost: totalCost
            });
        }
    }

    return calculations;
}

/**
 * Calculate addons cost for a specific website type
 */
export function calculateAddonsCost(
    availableAddons: any[],
    selectedAddons: string[]
): { monthly: number; setup: number } {
    let monthly = 0;
    let setup = 0;

    for (const addonId of selectedAddons) {
        const addon = availableAddons.find(a => a.id === addonId);
        if (addon) {
            monthly += addon.price_monthly;
            setup += addon.setup_cost;
        }
    }

    return { monthly, setup };
}

/**
 * Calculate global addons cost
 */
export function calculateGlobalAddonsCost(
    selectedGlobalAddons: string[]
): { monthly: number; setup: number } {
    let monthly = 0;
    let setup = 0;

    for (const addonId of selectedGlobalAddons) {
        const addon = pricingConfig.global_addons.find(a => a.id === addonId);
        if (addon) {
            monthly += addon.price_monthly;
            setup += addon.setup_cost;
        }
    }

    return { monthly, setup };
}

/**
 * Calculate discounts based on type and billing cycle
 */
export function calculateDiscounts(
    basePrice: number,
    discountTypes: DiscountType[],
    billingCycle: BillingCycle
): { amount: number; percent: number } {
    let totalPercent = 0;

    // Apply billing cycle discount
    if (billingCycle === 'annual') {
        totalPercent += pricingConfig.discounts.annual_percent;
    }

    // Apply other discounts
    for (const discountType of discountTypes) {
        switch (discountType) {
            case 'nonprofit':
                totalPercent += pricingConfig.discounts.nonprofit_percent;
                break;
            case 'education':
                totalPercent += pricingConfig.discounts.education_percent;
                break;
            case 'startup':
                totalPercent += pricingConfig.discounts.startup_percent;
                break;
            case 'launch':
                if (pricingConfig.discounts.launch.active) {
                    const launchDate = new Date(pricingConfig.discounts.launch.until);
                    if (new Date() <= launchDate) {
                        totalPercent += pricingConfig.discounts.launch.percent;
                    }
                }
                break;
        }
    }

    // Cap total discount at 50%
    totalPercent = Math.min(totalPercent, 50);

    const discountAmount = Math.round(basePrice * (totalPercent / 100));
    return { amount: discountAmount, percent: totalPercent };
}

/**
 * Apply psychological pricing rounding
 */
export function applyPsychologicalRounding(price: number): number {
    const { strategy, endings } = pricingConfig.rounding;

    if (strategy !== 'psychological') {
        return Math.round(price);
    }

    // Find the appropriate ending based on price magnitude
    let targetEnding = 99; // default

    if (price < 1000) {
        targetEnding = 9;
    } else if (price < 10000) {
        targetEnding = 99;
    } else {
        targetEnding = 999;
    }

    // Round to nearest appropriate ending
    const magnitude = targetEnding === 9 ? 10 : targetEnding === 99 ? 100 : 1000;
    const rounded = Math.floor(price / magnitude) * magnitude + targetEnding;

    return rounded;
}

/**
 * Format price with currency symbol
 */
export function formatPrice(amount: number, currency: Currency = 'INR'): string {
    const symbols: Record<Currency, string> = {
        INR: '₹',
        USD: '$',
        EUR: '€',
        GBP: '£'
    };

    const symbol = symbols[currency];

    // Format with Indian number system for INR
    if (currency === 'INR') {
        return `${symbol}${amount.toLocaleString('en-IN')}`;
    }

    return `${symbol}${amount.toLocaleString()}`;
}

/**
 * Get website type configuration by ID
 */
export function getWebsiteTypeConfig(typeId: string) {
    return pricingConfig.types.find(type => type.id === typeId);
}

/**
 * Get all website types grouped by category
 */
export function getWebsiteTypesByCategory(): Record<string, any[]> {
    const grouped: Record<string, any[]> = {};

    for (const type of pricingConfig.types) {
        if (!grouped[type.category]) {
            grouped[type.category] = [];
        }
        grouped[type.category].push(type);
    }

    return grouped;
}

/**
 * Validate pricing configuration
 */
export function validatePricingConfig(): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
        // Validate currency configuration
        if (!pricingConfig.currency) {
            errors.push('Currency is required');
        }

        // Validate exchange rates
        if (!pricingConfig.fx || Object.keys(pricingConfig.fx).length === 0) {
            errors.push('Exchange rates are required');
        }

        // Validate website types
        if (!pricingConfig.types || pricingConfig.types.length === 0) {
            errors.push('At least one website type is required');
        }

        // Validate each website type
        for (const type of pricingConfig.types) {
            if (!type.tiers.essential || !type.tiers.professional || !type.tiers.ultimate) {
                errors.push(`Website type "${type.id}" must have all three tiers`);
            }

            // Check tier pricing logic
            const essential = type.tiers.essential?.base_price_monthly || 0;
            const professional = type.tiers.professional?.base_price_monthly || 0;
            const ultimate = type.tiers.ultimate?.base_price_monthly || 0;

            if (essential >= professional || professional >= ultimate) {
                warnings.push(`Website type "${type.id}" tier pricing should increase: Essential < Professional < Ultimate`);
            }
        }

        // Validate global addons
        for (const addon of pricingConfig.global_addons) {
            if (!addon.id || !addon.label) {
                errors.push('Global addons must have id and label');
            }
        }

    } catch (error) {
        errors.push(`Configuration validation error: ${error}`);
    }

    return {
        isValid: errors.length === 0,
        errors,
        warnings
    };
}

/**
 * Get estimated delivery time for a configuration
 */
export function getEstimatedDeliveryTime(input: CalculationInput): number {
    const typeConfig = getWebsiteTypeConfig(input.typeId);
    if (!typeConfig) return 30; // default

    const tierConfig = typeConfig.tiers[input.tier];
    let baseDays = tierConfig.delivery_days;

    // Add time for addons
    const addonCount = (input.addons?.length || 0) + (input.globalAddons?.length || 0);
    const addonDays = addonCount * 3; // 3 days per addon

    // Add time for scale complexity
    const scaleComplexity = Object.keys(input.scale || {}).length;
    const scaleDays = scaleComplexity * 2; // 2 days per scale factor

    return baseDays + addonDays + scaleDays;
}

/**
 * Compare tiers for a website type
 */
export function compareTiers(typeId: string): Record<TierType, any> {
    const typeConfig = getWebsiteTypeConfig(typeId);
    if (!typeConfig) {
        throw new Error(`Website type "${typeId}" not found`);
    }

    return {
        essential: {
            ...typeConfig.tiers.essential,
            value_score: calculateValueScore(typeConfig.tiers.essential.base_price_monthly, typeConfig.tiers.essential.features.length)
        },
        professional: {
            ...typeConfig.tiers.professional,
            value_score: calculateValueScore(typeConfig.tiers.professional.base_price_monthly, typeConfig.tiers.professional.features.length)
        },
        ultimate: {
            ...typeConfig.tiers.ultimate,
            value_score: calculateValueScore(typeConfig.tiers.ultimate.base_price_monthly, typeConfig.tiers.ultimate.features.length)
        }
    };
}

/**
 * Calculate value score for tier comparison
 */
function calculateValueScore(price: number, featureCount: number): number {
    return Math.round((featureCount / price) * 10000);
}

// Export the configuration for external use
export { pricingConfig };
