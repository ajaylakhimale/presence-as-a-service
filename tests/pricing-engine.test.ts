import { describe, test, expect } from 'vitest';
import {
    calculatePrice,
    formatPrice,
    applyPsychologicalRounding,
    calculateDiscounts,
    getWebsiteTypeConfig,
    validatePricingConfig
} from '../src/lib/pricing-engine';
import { CalculationInput, BillingCycle, Currency, DiscountType } from '../src/config/pricing-types';

describe('Pricing Engine', () => {
    describe('calculatePrice', () => {
        test('calculates basic business website price correctly', () => {
            const input: CalculationInput = {
                typeId: 'business_website',
                tier: 'professional',
                billingCycle: 'monthly',
                region: 'INR',
                discounts: []
            };

            const result = calculatePrice(input);

            expect(result).toBeDefined();
            expect(result.monthly).toBeGreaterThan(0);
            expect(result.currency).toBe('INR');
            expect(result.breakdown.base_monthly).toBe(9999);
        });

        test('applies annual discount correctly', () => {
            const monthlyInput: CalculationInput = {
                typeId: 'business_website',
                tier: 'essential',
                billingCycle: 'monthly',
                region: 'INR',
                discounts: []
            };

            const annualInput: CalculationInput = {
                ...monthlyInput,
                billingCycle: 'annual'
            };

            const monthlyResult = calculatePrice(monthlyInput);
            const annualResult = calculatePrice(annualInput);

            expect(annualResult.effective_monthly_annual).toBeLessThan(monthlyResult.monthly);
            expect(annualResult.breakdown.discount_percent).toBe(20); // 20% annual discount
        });

        test('calculates scale additions correctly', () => {
            const input: CalculationInput = {
                typeId: 'ecommerce_store',
                tier: 'professional',
                scale: {
                    monthly_visits: 100000, // 4x base (25000)
                    products: 200 // 2x base (100)
                },
                billingCycle: 'monthly',
                region: 'INR',
                discounts: []
            };

            const result = calculatePrice(input);

            expect(result.breakdown.scale_additions).toBeGreaterThan(0);
            // Should add cost for additional visits and products
        });

        test('applies multiple discounts correctly', () => {
            const input: CalculationInput = {
                typeId: 'business_website',
                tier: 'professional',
                billingCycle: 'annual',
                region: 'INR',
                discounts: ['nonprofit', 'launch']
            };

            const result = calculatePrice(input);

            expect(result.breakdown.discount_percent).toBe(50); // 20% annual + 15% nonprofit + 15% launch
            expect(result.breakdown.discount_amount).toBeGreaterThan(0);
        });

        test('handles currency conversion', () => {
            const inrInput: CalculationInput = {
                typeId: 'business_website',
                tier: 'essential',
                billingCycle: 'monthly',
                region: 'INR',
                discounts: []
            };

            const usdInput: CalculationInput = {
                ...inrInput,
                region: 'USD'
            };

            const inrResult = calculatePrice(inrInput);
            const usdResult = calculatePrice(usdInput);

            expect(usdResult.monthly).toBeLessThan(inrResult.monthly);
            expect(usdResult.currency).toBe('USD');
            expect(inrResult.currency).toBe('INR');
        });

        test('calculates addons correctly', () => {
            const input: CalculationInput = {
                typeId: 'business_website',
                tier: 'essential',
                addons: ['advanced_cms', 'live_chat'],
                globalAddons: ['priority_support', 'ssl_certificate'],
                billingCycle: 'monthly',
                region: 'INR',
                discounts: []
            };

            const result = calculatePrice(input);

            expect(result.breakdown.addons_monthly).toBeGreaterThan(0);
            expect(result.breakdown.global_addons_monthly).toBeGreaterThan(0);
        });
    });

    describe('formatPrice', () => {
        test('formats INR prices correctly', () => {
            expect(formatPrice(10000, 'INR')).toBe('₹10,000');
            expect(formatPrice(100000, 'INR')).toBe('₹1,00,000');
            expect(formatPrice(1000000, 'INR')).toBe('₹10,00,000');
        });

        test('formats USD prices correctly', () => {
            expect(formatPrice(100, 'USD')).toBe('$100');
            expect(formatPrice(10000, 'USD')).toBe('$10,000');
        });

        test('formats EUR prices correctly', () => {
            expect(formatPrice(100, 'EUR')).toBe('€100');
            expect(formatPrice(10000, 'EUR')).toBe('€10,000');
        });
    });

    describe('applyPsychologicalRounding', () => {
        test('rounds small amounts to 9', () => {
            expect(applyPsychologicalRounding(505)).toBe(509);
            expect(applyPsychologicalRounding(712)).toBe(719);
        });

        test('rounds medium amounts to 99', () => {
            expect(applyPsychologicalRounding(1250)).toBe(1299);
            expect(applyPsychologicalRounding(5420)).toBe(5499);
        });

        test('rounds large amounts to 999', () => {
            expect(applyPsychologicalRounding(12500)).toBe(12999);
            expect(applyPsychologicalRounding(45000)).toBe(45999);
        });
    });

    describe('calculateDiscounts', () => {
        test('calculates single discount correctly', () => {
            const result = calculateDiscounts(10000, ['nonprofit'], 'monthly');
            expect(result.percent).toBe(15);
            expect(result.amount).toBe(1500);
        });

        test('calculates multiple discounts correctly', () => {
            const result = calculateDiscounts(10000, ['nonprofit', 'education'], 'annual');
            expect(result.percent).toBe(50); // 20% annual + 15% nonprofit + 25% education, capped at 50%
            expect(result.amount).toBe(5000);
        });

        test('caps total discount at 50%', () => {
            const result = calculateDiscounts(10000, ['nonprofit', 'education', 'startup'], 'annual');
            expect(result.percent).toBe(50); // Should be capped
            expect(result.amount).toBe(5000);
        });
    });

    describe('getWebsiteTypeConfig', () => {
        test('returns correct config for valid type', () => {
            const config = getWebsiteTypeConfig('business_website');
            expect(config).toBeDefined();
            expect(config?.id).toBe('business_website');
            expect(config?.label).toBe('Business Website');
            expect(config?.tiers.essential).toBeDefined();
            expect(config?.tiers.professional).toBeDefined();
            expect(config?.tiers.ultimate).toBeDefined();
        });

        test('returns undefined for invalid type', () => {
            const config = getWebsiteTypeConfig('invalid_type');
            expect(config).toBeUndefined();
        });
    });

    describe('validatePricingConfig', () => {
        test('validates pricing configuration', () => {
            const result = validatePricingConfig();
            expect(result.isValid).toBe(true);
            expect(result.errors).toHaveLength(0);
        });
    });

    describe('Edge Cases', () => {
        test('handles invalid website type gracefully', () => {
            const input: CalculationInput = {
                typeId: 'invalid_type',
                tier: 'professional',
                billingCycle: 'monthly',
                region: 'INR',
                discounts: []
            };

            expect(() => calculatePrice(input)).toThrow('Website type "invalid_type" not found');
        });

        test('handles zero scale values', () => {
            const input: CalculationInput = {
                typeId: 'business_website',
                tier: 'essential',
                scale: {
                    monthly_visits: 0,
                    pages: 0
                },
                billingCycle: 'monthly',
                region: 'INR',
                discounts: []
            };

            const result = calculatePrice(input);
            expect(result).toBeDefined();
            expect(result.breakdown.scale_additions).toBe(0);
        });

        test('handles empty addons array', () => {
            const input: CalculationInput = {
                typeId: 'business_website',
                tier: 'essential',
                addons: [],
                globalAddons: [],
                billingCycle: 'monthly',
                region: 'INR',
                discounts: []
            };

            const result = calculatePrice(input);
            expect(result.breakdown.addons_monthly).toBe(0);
            expect(result.breakdown.global_addons_monthly).toBe(0);
        });
    });

    describe('Complex Scenarios', () => {
        test('calculates enterprise e-commerce with all features', () => {
            const input: CalculationInput = {
                typeId: 'ecommerce_store',
                tier: 'ultimate',
                scale: {
                    monthly_visits: 500000,
                    products: 1000,
                    orders_monthly: 1000,
                    admins: 10
                },
                addons: ['multi_vendor', 'subscription_billing', 'advanced_shipping'],
                globalAddons: ['priority_support', 'advanced_analytics', 'white_label'],
                billingCycle: 'annual',
                region: 'INR',
                discounts: ['startup']
            };

            const result = calculatePrice(input);

            expect(result).toBeDefined();
            expect(result.monthly).toBeGreaterThan(50000);
            expect(result.breakdown.scale_additions).toBeGreaterThan(0);
            expect(result.breakdown.addons_monthly).toBeGreaterThan(0);
            expect(result.breakdown.global_addons_monthly).toBeGreaterThan(0);
            expect(result.breakdown.discount_percent).toBe(30); // 20% annual + 10% startup
        });

        test('calculates LMS with educational discount', () => {
            const input: CalculationInput = {
                typeId: 'lms',
                tier: 'professional',
                scale: {
                    students: 1000,
                    courses: 50,
                    instructors: 25
                },
                addons: ['live_streaming', 'ai_proctoring'],
                globalAddons: ['advanced_analytics'],
                billingCycle: 'annual',
                region: 'INR',
                discounts: ['education']
            };

            const result = calculatePrice(input);

            expect(result).toBeDefined();
            expect(result.breakdown.discount_percent).toBe(45); // 20% annual + 25% education
            expect(result.delivery_days).toBeGreaterThan(50);
        });
    });
});
