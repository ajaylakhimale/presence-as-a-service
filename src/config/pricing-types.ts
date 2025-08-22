import { z } from 'zod';

// Zod schemas for validation
export const ScaleModifierSchema = z.object({
    metric: z.string(),
    step: z.number(),
    price_add_monthly: z.number()
});

export const ScaleSchema = z.object({
    base: z.record(z.number()),
    modifiers: z.array(ScaleModifierSchema)
});

export const TierLimitsSchema = z.object({
    pages: z.number().optional(),
    monthly_visits: z.number(),
    admins: z.number(),
    integrations_included: z.number(),
    languages_included: z.number(),
    storage_gb: z.number(),
    support_response_hours: z.number(),
    products: z.number().optional(),
    orders_monthly: z.number().optional(),
    payment_gateways: z.number().optional(),
    students: z.number().optional(),
    courses: z.number().optional(),
    instructors: z.number().optional(),
    leads_monthly: z.number().optional(),
    projects: z.number().optional()
});

export const TierSchema = z.object({
    label: z.string(),
    badge: z.string().optional(),
    base_price_monthly: z.number(),
    setup_cost: z.number(),
    delivery_days: z.number(),
    features: z.array(z.string()),
    limits: TierLimitsSchema
});

export const AddonSchema = z.object({
    id: z.string(),
    label: z.string(),
    description: z.string(),
    price_monthly: z.number(),
    setup_cost: z.number()
});

export const GlobalAddonSchema = z.object({
    id: z.string(),
    label: z.string(),
    description: z.string(),
    unit: z.string(),
    price_monthly: z.number(),
    setup_cost: z.number(),
    category: z.string()
});

export const WebsiteTypeConfigSchema = z.object({
    id: z.string(),
    label: z.string(),
    category: z.string(),
    description: z.string(),
    scale: ScaleSchema,
    tiers: z.object({
        essential: TierSchema,
        professional: TierSchema,
        ultimate: TierSchema
    }),
    addons: z.array(AddonSchema)
});

export const DiscountsSchema = z.object({
    annual_percent: z.number(),
    nonprofit_percent: z.number(),
    education_percent: z.number(),
    startup_percent: z.number(),
    launch: z.object({
        active: z.boolean(),
        percent: z.number(),
        until: z.string()
    })
});

export const PricingConfigSchema = z.object({
    currency: z.string(),
    fx: z.record(z.number()),
    rounding: z.object({
        strategy: z.string(),
        endings: z.array(z.number())
    }),
    discounts: DiscountsSchema,
    global_addons: z.array(GlobalAddonSchema),
    types: z.array(WebsiteTypeConfigSchema)
});

// TypeScript types derived from schemas
export type ScaleModifier = z.infer<typeof ScaleModifierSchema>;
export type Scale = z.infer<typeof ScaleSchema>;
export type TierLimits = z.infer<typeof TierLimitsSchema>;
export type Tier = z.infer<typeof TierSchema>;
export type Addon = z.infer<typeof AddonSchema>;
export type GlobalAddon = z.infer<typeof GlobalAddonSchema>;
export type WebsiteTypeConfig = z.infer<typeof WebsiteTypeConfigSchema>;
export type Discounts = z.infer<typeof DiscountsSchema>;
export type PricingConfig = z.infer<typeof PricingConfigSchema>;

// Tier types
export type TierType = 'essential' | 'professional' | 'ultimate';

// Billing cycle types
export type BillingCycle = 'monthly' | 'annual';

// Discount types
export type DiscountType = 'annual' | 'nonprofit' | 'education' | 'startup' | 'launch';

// Currency types
export type Currency = 'INR' | 'USD' | 'EUR' | 'GBP';

// Calculation input interface
export interface CalculationInput {
    typeId: string;
    tier: TierType;
    scale?: Record<string, number>;
    addons?: string[];
    globalAddons?: string[];
    billingCycle: BillingCycle;
    region?: Currency;
    discounts?: DiscountType[];
}

// Calculation result interface
export interface CalculationResult {
    monthly: number;
    annual: number;
    effective_monthly_annual: number;
    setup_cost: number;
    currency: Currency;
    breakdown: {
        base_monthly: number;
        scale_additions: number;
        addons_monthly: number;
        global_addons_monthly: number;
        discount_amount: number;
        discount_percent: number;
    };
    delivery_days: number;
    limits: TierLimits;
    features: string[];
}

// Scale calculation result
export interface ScaleCalculation {
    metric: string;
    base_value: number;
    current_value: number;
    additional_units: number;
    cost_per_unit: number;
    total_cost: number;
}

// Validation result
export interface ValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}
