# Comprehensive Pricing System Documentation

## Overview

This document explains the comprehensive, scalable pricing system implemented for Presence as a Service. The system features a modular, three-tier approach (Essential, Professional, Ultimate) with transparent pricing based on exact requirements.

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Pricing Taxonomy](#pricing-taxonomy)
3. [Pricing Logic](#pricing-logic)
4. [Configuration Management](#configuration-management)
5. [User Interface](#user-interface)
6. [API Reference](#api-reference)
7. [Testing](#testing)
8. [Deployment](#deployment)

## System Architecture

### Components Overview

```
src/
├── config/
│   ├── pricing-config.json      # Centralized pricing configuration
│   ├── pricing-types.ts         # TypeScript types and Zod schemas
│   └── website-types.ts         # Website taxonomy and categories
├── lib/
│   └── pricing-engine.ts        # Core pricing calculation engine
├── components/
│   └── AdminPanel.tsx          # Configuration management UI
├── pages/
│   └── NewPricing.tsx          # Main pricing page
└── tests/
    └── pricing-engine.test.ts  # Comprehensive unit tests
```

## Pricing Taxonomy

### Website Categories

The system supports **50+ website types** across **15 categories**:

- **Business & Corporate**: Business websites, corporate sites, landing pages
- **E-commerce & Retail**: Online stores, marketplaces, auction sites
- **Content & Media**: Blogs, news portals, magazines
- **Portfolio & Creative**: Portfolios, photography sites, art galleries
- **Education & Learning**: LMS, online courses, educational portals
- **Healthcare & Medical**: Medical practices, hospitals, telemedicine
- **Real Estate**: Property portals, management systems
- **Booking & Services**: Appointment systems, hotel booking, events
- **Social & Community**: Forums, social networks, membership sites
- **SaaS & Web Applications**: Marketing sites, dashboards, CRM systems
- **Entertainment & Media**: Streaming platforms, podcasts, gaming
- **Directory & Listing**: Business directories, job boards, event listings
- **Non-profit & Government**: Non-profit sites, government portals
- **Marketing**: Landing pages, campaign sites
- **Personal & Lifestyle**: Personal blogs, recipes, wedding sites

### Website Type Schema

Each website type includes:

```typescript
interface WebsiteType {
  id: string;                    // Unique identifier
  label: string;                 // Display name
  description: string;           // Brief description
  category: string;              // Category classification
  typical_tech: string[];        // Common technologies
  core_features: string[];       // Standard features
  optional_addons: string[];     // Available upgrades
  complexity_drivers: string[];  // Factors affecting complexity
  base_complexity_score: number; // 1-10 complexity rating
}
```

## Pricing Logic

### Three-Tier System

#### Essential Tier
- **Target**: Startups, small businesses, MVP projects
- **Features**: Core functionality, basic integrations
- **Limitations**: Page limits, basic support, essential features only
- **Price Range**: ₹2,999 - ₹19,999/month

#### Professional Tier (Most Popular)
- **Target**: Growing businesses, established companies
- **Features**: Advanced functionality, multiple integrations
- **Benefits**: Priority support, advanced analytics, workflow features
- **Price Range**: ₹5,999 - ₹39,999/month

#### Ultimate Tier
- **Target**: Enterprise, complex requirements
- **Features**: Unlimited customization, white-label options
- **Benefits**: 24/7 support, SLA guarantees, custom development
- **Price Range**: ₹11,999 - ₹79,999/month

### Pricing Formula

```typescript
Total Price = Base Price + Scale Additions + Add-ons - Discounts
```

#### Base Price Calculation
- Determined by website type complexity (1-10 scale)
- Tier multiplier (Essential: 1x, Professional: 2-3x, Ultimate: 4-6x)
- Regional adjustments via exchange rates

#### Scale Modifiers
Dynamic pricing based on usage metrics:
- **Monthly Visits**: Additional cost per 10K visits
- **Storage**: Additional cost per GB
- **Users/Admins**: Additional cost per user
- **Products/Content**: Additional cost per item
- **Languages**: Additional cost per language

#### Add-ons
Two types of add-ons:
1. **Type-specific**: Unique to each website type
2. **Global**: Available across all types

#### Discount System
Stackable discounts (capped at 50%):
- **Annual Billing**: 20% discount
- **Non-profit**: 15% discount
- **Education**: 25% discount
- **Startup**: 10% discount
- **Launch Promo**: 15% discount (time-limited)

### Currency Support

- **Primary**: INR (Indian Rupees)
- **Secondary**: USD, EUR, GBP
- **Conversion**: Real-time FX rates with psychological rounding

### Psychological Pricing

Automatic rounding to create appealing price points:
- Under ₹1,000: Rounds to x9 (₹999)
- ₹1,000-₹10,000: Rounds to x99 (₹2,999)
- Over ₹10,000: Rounds to x999 (₹12,999)

## Configuration Management

### Central Configuration (pricing-config.json)

```json
{
  "currency": "INR",
  "fx": {
    "USD": 0.012,
    "EUR": 0.011,
    "GBP": 0.0095
  },
  "rounding": {
    "strategy": "psychological",
    "endings": [9, 99, 999]
  },
  "discounts": {
    "annual_percent": 20,
    "nonprofit_percent": 15,
    "education_percent": 25,
    "startup_percent": 10,
    "launch": {
      "active": true,
      "percent": 15,
      "until": "2025-12-31"
    }
  },
  "global_addons": [...],
  "types": [...]
}
```

### Validation System

Zod schemas ensure configuration integrity:
- **Type checking**: All values have correct types
- **Business logic**: Tier pricing increases correctly
- **Required fields**: Essential fields are present
- **Constraints**: Values within acceptable ranges

### Admin Panel Features

- **Live Preview**: Real-time price calculation
- **Configuration Editor**: Modify all pricing parameters
- **Validation**: Instant feedback on configuration validity
- **Import/Export**: JSON configuration management
- **Version Control**: Track configuration changes

## User Interface

### Main Pricing Page Features

1. **Type Selector**: 
   - Searchable list of website types
   - Category filtering
   - Complexity indicators

2. **Tier Comparison**:
   - Side-by-side tier cards
   - Feature comparisons
   - Value scoring

3. **Interactive Calculator**:
   - Real-time price updates
   - Scale adjustments with sliders
   - Add-on selection
   - Discount application

4. **Mobile Optimization**:
   - Context-aware navigation
   - Touch-friendly overlays
   - Progressive disclosure

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Comprehensive screen reader support
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Logical tab order

## API Reference

### Core Functions

#### `calculatePrice(input: CalculationInput): CalculationResult`
Main pricing calculation function.

**Parameters:**
```typescript
interface CalculationInput {
  typeId: string;              // Website type ID
  tier: TierType;              // essential | professional | ultimate
  scale?: Record<string, number>; // Scale requirements
  addons?: string[];           // Selected add-ons
  globalAddons?: string[];     // Selected global add-ons
  billingCycle: BillingCycle; // monthly | annual
  region?: Currency;           // INR | USD | EUR | GBP
  discounts?: DiscountType[];  // Applied discounts
}
```

**Returns:**
```typescript
interface CalculationResult {
  monthly: number;             // Monthly price
  annual: number;              // Annual price
  effective_monthly_annual: number; // Effective monthly when billed annually
  setup_cost: number;          // One-time setup cost
  currency: Currency;          // Currency used
  breakdown: {                 // Price breakdown
    base_monthly: number;
    scale_additions: number;
    addons_monthly: number;
    global_addons_monthly: number;
    discount_amount: number;
    discount_percent: number;
  };
  delivery_days: number;       // Estimated delivery time
  limits: TierLimits;         // Tier limitations
  features: string[];         // Included features
}
```

#### `formatPrice(amount: number, currency: Currency): string`
Formats price with appropriate currency symbol and locale.

#### `getWebsiteTypeConfig(typeId: string): WebsiteTypeConfig | undefined`
Retrieves configuration for a specific website type.

#### `validatePricingConfig(): ValidationResult`
Validates the current pricing configuration.

### Usage Examples

```typescript
// Basic price calculation
const input: CalculationInput = {
  typeId: 'ecommerce_store',
  tier: 'professional',
  billingCycle: 'annual',
  region: 'INR',
  discounts: ['startup']
};

const result = calculatePrice(input);
console.log(`Price: ${formatPrice(result.monthly, 'INR')}/month`);

// With scale and add-ons
const complexInput: CalculationInput = {
  typeId: 'lms',
  tier: 'ultimate',
  scale: {
    students: 1000,
    courses: 50,
    instructors: 25
  },
  addons: ['live_streaming', 'ai_proctoring'],
  globalAddons: ['priority_support', 'advanced_analytics'],
  billingCycle: 'annual',
  region: 'USD',
  discounts: ['education', 'annual']
};

const complexResult = calculatePrice(complexInput);
```

## Testing

### Test Coverage

The system includes comprehensive unit tests covering:

- **Price Calculations**: All pricing scenarios
- **Edge Cases**: Invalid inputs, zero values, maximum scales
- **Currency Conversion**: Multi-currency support
- **Discount Application**: Single and multiple discounts
- **Configuration Validation**: Schema validation
- **Complex Scenarios**: Real-world use cases

### Running Tests

```bash
npm install -D vitest @vitest/ui
npm run test
```

### Test Scenarios

1. **Basic Calculations**: Standard pricing for each tier
2. **Scale Additions**: Dynamic pricing based on usage
3. **Discount Application**: Various discount combinations
4. **Currency Conversion**: Multi-currency pricing
5. **Edge Cases**: Boundary conditions and error handling
6. **Integration**: End-to-end pricing workflows

## Deployment

### Environment Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Build System**:
   ```bash
   npm run build
   ```

3. **Run Tests**:
   ```bash
   npm run test
   ```

4. **Start Development**:
   ```bash
   npm run dev
   ```

### Configuration Management

1. **Production Config**: Update `pricing-config.json` for production
2. **Environment Variables**: Set up environment-specific variables
3. **Monitoring**: Implement pricing calculation monitoring
4. **Caching**: Consider caching for frequently calculated prices

### Performance Considerations

- **Calculation Caching**: Cache results for identical inputs
- **Lazy Loading**: Load configuration on demand
- **Debounced Updates**: Debounce real-time calculations
- **Code Splitting**: Split pricing logic into separate chunks

## Maintenance

### Adding New Website Types

1. Add type definition to `website-types.ts`
2. Add pricing configuration to `pricing-config.json`
3. Update tests with new scenarios
4. Validate configuration with admin panel

### Modifying Pricing

1. Use admin panel for real-time previews
2. Export configuration for backup
3. Validate changes before deployment
4. Monitor impact on existing quotes

### Updating Exchange Rates

1. Configure automatic rate updates
2. Monitor currency fluctuations
3. Apply rate limits for stability
4. Notify users of significant changes

## Best Practices

1. **Single Source of Truth**: All pricing in configuration file
2. **Validation**: Always validate configuration changes
3. **Testing**: Test all pricing scenarios thoroughly
4. **Documentation**: Keep pricing logic documented
5. **Monitoring**: Track pricing calculation performance
6. **User Experience**: Prioritize transparent, clear pricing

## Support and Troubleshooting

### Common Issues

1. **Configuration Errors**: Use validation system
2. **Calculation Errors**: Check input parameters
3. **Performance Issues**: Implement caching
4. **UI Issues**: Verify responsive design

### Getting Help

- Check unit tests for usage examples
- Use admin panel for configuration debugging
- Review validation messages for errors
- Consult this documentation for implementation details

---

This pricing system provides a comprehensive, scalable foundation for transparent, modular pricing that grows with your business needs while maintaining clarity and user trust.
