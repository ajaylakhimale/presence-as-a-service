import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  Calculator,
  Zap,
  Sparkles,
  Crown,
  Plus,
  Minus,
  Info,
  Clock,
  DollarSign,
  Filter,
  Search,
  Globe,
  Smartphone,
  Monitor,
  X,
  Menu,
  ChevronDown,
  Star,
  Users,
  Building,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Slider } from '@/components/ui/slider';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { Helmet } from 'react-helmet-async';
import {
  calculatePrice,
  formatPrice,
  getWebsiteTypesByCategory,
  getWebsiteTypeConfig,
  compareTiers,
  getEstimatedDeliveryTime,
  pricingConfig
} from '@/lib/pricing-engine';
import {
  CalculationInput,
  TierType,
  BillingCycle,
  Currency,
  DiscountType
} from '@/config/pricing-types';
import { WEBSITE_TYPES, WEBSITE_CATEGORIES } from '@/config/website-types';

const Pricing = () => {
  // Error state for debugging
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // State management
  const [selectedType, setSelectedType] = useState<string>('business_website');
  const [selectedTier, setSelectedTier] = useState<TierType>('professional');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [selectedGlobalAddons, setSelectedGlobalAddons] = useState<string[]>([]);
  const [discounts, setDiscounts] = useState<DiscountType[]>([]);
  const [currency, setCurrency] = useState<Currency>('INR');
  const [scale, setScale] = useState<Record<string, number>>({});

  // UI state
  const [showCalculator, setShowCalculator] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all_categories');

  // Mobile state
  const [showMobileCalculator, setShowMobileCalculator] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showMobilePlatforms, setShowMobilePlatforms] = useState(false);

  // Calculation results
  const [calculationResult, setCalculationResult] = useState<any>(null);

  // Calculate price whenever inputs change
  useEffect(() => {
    try {
      const input: CalculationInput = {
        typeId: selectedType,
        tier: selectedTier,
        scale,
        addons: selectedAddons,
        globalAddons: selectedGlobalAddons,
        billingCycle,
        region: currency,
        discounts
      };

      const result = calculatePrice(input);
      setCalculationResult(result);
      setHasError(false);
    } catch (error) {
      console.error('Price calculation error:', error);
      setHasError(true);
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  }, [selectedType, selectedTier, billingCycle, selectedAddons, selectedGlobalAddons, discounts, currency, scale]);

  // Initialize scale based on selected type
  useEffect(() => {
    try {
      const typeConfig = getWebsiteTypeConfig(selectedType);
      if (typeConfig) {
        setScale(typeConfig.scale.base);
      }
    } catch (error) {
      console.error('Error getting website type config:', error);
      setHasError(true);
      setErrorMessage('Failed to load website type configuration');
    }
  }, [selectedType]);

  // Mobile event listeners
  useEffect(() => {
    const handleToggleCalculator = () => setShowMobileCalculator(prev => !prev);
    const handleToggleFilters = () => setShowMobileFilters(prev => !prev);
    const handleTogglePlatforms = () => setShowMobilePlatforms(prev => !prev);

    window.addEventListener('toggleMobileCalculator', handleToggleCalculator);
    window.addEventListener('toggleMobileFilters', handleToggleFilters);
    window.addEventListener('toggleMobilePlatforms', handleTogglePlatforms);

    return () => {
      window.removeEventListener('toggleMobileCalculator', handleToggleCalculator);
      window.removeEventListener('toggleMobileFilters', handleToggleFilters);
      window.removeEventListener('toggleMobilePlatforms', handleTogglePlatforms);
    };
  }, []);

  // Sync with localStorage and dispatch events for mobile navigation
  useEffect(() => {
    // Save selected features to localStorage for mobile navigation
    localStorage.setItem('pricing-selected-features', JSON.stringify([
      ...selectedAddons,
      ...selectedGlobalAddons
    ]));

    // Dispatch custom event for mobile navigation
    window.dispatchEvent(new CustomEvent('featuresUpdated'));
  }, [selectedAddons, selectedGlobalAddons]);

  // Filter website types
  const filteredTypes = React.useMemo(() => {
    try {
      return WEBSITE_TYPES.filter(type => {
        const matchesSearch = type.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          type.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || selectedCategory === 'all_categories' || type.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
    } catch (error) {
      console.error('Error filtering website types:', error);
      return [];
    }
  }, [searchTerm, selectedCategory]);

  // Group types by category
  const groupedTypes = React.useMemo(() => {
    try {
      return getWebsiteTypesByCategory();
    } catch (error) {
      console.error('Error grouping website types:', error);
      return {};
    }
  }, []);

  const currentTypeConfig = getWebsiteTypeConfig(selectedType);
  const tierComparison = currentTypeConfig ? compareTiers(selectedType) : null;

  const handleAddonToggle = (addonId: string, isGlobal: boolean = false) => {
    if (isGlobal) {
      setSelectedGlobalAddons(prev =>
        prev.includes(addonId)
          ? prev.filter(id => id !== addonId)
          : [...prev, addonId]
      );
    } else {
      setSelectedAddons(prev =>
        prev.includes(addonId)
          ? prev.filter(id => id !== addonId)
          : [...prev, addonId]
      );
    }
  };

  const handleDiscountToggle = (discountType: DiscountType) => {
    setDiscounts(prev =>
      prev.includes(discountType)
        ? prev.filter(d => d !== discountType)
        : [...prev, discountType]
    );
  };

  const handleScaleChange = (metric: string, value: number) => {
    setScale(prev => ({ ...prev, [metric]: value }));
  };

  return (
    <Layout>
      <Helmet>
        <title>Comprehensive Pricing Plans | Presence as a Service</title>
        <meta name="description" content="Transparent, modular pricing for every type of website and web application. Essential, Professional, and Ultimate tiers with customizable features." />
      </Helmet>

      {hasError ? (
        <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 flex items-center justify-center p-8">
          <Card className="max-w-md mx-auto bg-destructive/10 border-destructive/30">
            <CardHeader>
              <CardTitle className="text-destructive">Error Loading Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">There was an issue loading the pricing configuration:</p>
              <p className="text-destructive text-sm font-mono">{errorMessage}</p>
              <Button
                onClick={() => window.location.reload()}
                className="mt-4 w-full"
              >
                Retry
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 relative overflow-hidden">
          <ParticleEffect />

          {/* Header Section */}
          <section className="relative pt-20 pb-16">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                  New Pricing Structure
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Pay Only for What You
                  <span className="bg-gradient-to-r from-primary to-accent-brand bg-clip-text text-transparent"> Build</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Transparent, modular pricing based on your exact requirements. Choose your website type,
                  select your features, and get an instant quote.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-card/50 backdrop-blur-sm border border-border p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{WEBSITE_TYPES.length}+</div>
                    <div className="text-sm text-muted-foreground">Website Types</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent-brand">3</div>
                    <div className="text-sm text-muted-foreground">Tier Options</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border p-4 rounded-lg">
                    <div className="text-2xl font-bold text-success">{pricingConfig.global_addons.length}+</div>
                    <div className="text-sm text-muted-foreground">Add-ons</div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm border border-border p-4 rounded-lg">
                    <div className="text-2xl font-bold text-warning">15%</div>
                    <div className="text-sm text-muted-foreground">Launch Discount</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="relative pb-20">
            <div className="container mx-auto px-4">

              {/* Type Selector */}
              <div className="max-w-6xl mx-auto mb-12" data-section="types">
                <div className="flex flex-col lg:flex-row gap-6">

                  {/* Filters Sidebar */}
                  <div className="lg:w-80">
                    <Card className="bg-card/80 backdrop-blur-sm border-border">
                      <CardHeader>
                        <CardTitle className="text-foreground flex items-center gap-2">
                          <Filter className="h-5 w-5" />
                          Choose Your Project
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Search */}
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder="Search website types..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-input border-border text-foreground placeholder-muted-foreground"
                          />
                        </div>

                        {/* Category Filter */}
                        <div>
                          <label className="text-sm font-medium text-gray-300 mb-2 block">Category</label>
                          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="bg-input border-border text-foreground">
                              <SelectValue placeholder="All Categories" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all_categories">All Categories</SelectItem>
                              {WEBSITE_CATEGORIES.map(category => (
                                <SelectItem key={category} value={category}>{category}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Type Selection */}
                        <div>
                          <label className="text-sm font-medium text-gray-300 mb-2 block">Website Type</label>
                          <div className="space-y-2 max-h-96 overflow-y-auto">
                            {filteredTypes.map(type => (
                              <div
                                key={type.id}
                                className={`p-3 rounded-lg cursor-pointer transition-all ${selectedType === type.id
                                  ? 'bg-blue-500/20 border border-blue-500/30'
                                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
                                  }`}
                                onClick={() => setSelectedType(type.id)}
                              >
                                <div className="text-white font-medium">{type.label}</div>
                                <div className="text-sm text-gray-400 mt-1">{type.description}</div>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                                    Complexity: {type.base_complexity_score}/10
                                  </Badge>
                                  <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                                    {type.category}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Tier Selection */}
                  <div className="flex-1" data-section="features">
                    {currentTypeConfig && (
                      <div className="space-y-6">
                        {/* Billing Toggle */}
                        <div className="flex justify-center">
                          <div className="glassmorphism p-1 rounded-lg">
                            <Tabs value={billingCycle} onValueChange={(value) => setBillingCycle(value as BillingCycle)}>
                              <TabsList className="bg-transparent">
                                <TabsTrigger value="monthly" className="data-[state=active]:bg-blue-500/20">
                                  Monthly
                                </TabsTrigger>
                                <TabsTrigger value="annual" className="data-[state=active]:bg-blue-500/20">
                                  Annual
                                  <Badge className="ml-2 bg-green-500/20 text-green-300 text-xs">
                                    Save {pricingConfig.discounts.annual_percent}%
                                  </Badge>
                                </TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </div>
                        </div>

                        {/* Tier Cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                          {Object.entries(currentTypeConfig.tiers).map(([tierKey, tier]) => {
                            const isSelected = selectedTier === tierKey;
                            const tierType = tierKey as TierType;

                            return (
                              <Card
                                key={tierKey}
                                className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${isSelected
                                  ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-950 glassmorphism-selected'
                                  : 'glassmorphism hover:glassmorphism-hover'
                                  } ${tier.badge ? 'md:-mt-4' : ''}`}
                                onClick={() => setSelectedTier(tierType)}
                              >
                                {tier.badge && (
                                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-gradient-to-r from-primary to-accent-brand text-white px-4 py-1">
                                      <Star className="w-3 h-3 mr-1" />
                                      {tier.badge}
                                    </Badge>
                                  </div>
                                )}

                                <CardHeader className="text-center">
                                  <div className="mb-4">
                                    {tierKey === 'essential' && <Zap className="w-8 h-8 mx-auto text-success" />}
                                    {tierKey === 'professional' && <Sparkles className="w-8 h-8 mx-auto text-primary" />}
                                    {tierKey === 'ultimate' && <Crown className="w-8 h-8 mx-auto text-accent-brand" />}
                                  </div>
                                  <CardTitle className="text-foreground text-xl">{tier.label}</CardTitle>
                                  <div className="space-y-2">
                                    <div className="text-3xl font-bold text-foreground">
                                      {formatPrice(tier.base_price_monthly, currency)}
                                      <span className="text-sm font-normal text-muted-foreground">/month</span>
                                    </div>
                                    {billingCycle === 'annual' && (
                                      <div className="text-sm text-success">
                                        {formatPrice(Math.round(tier.base_price_monthly * 12 * 0.8), currency)} billed annually
                                      </div>
                                    )}
                                    <div className="text-sm text-muted-foreground">
                                      Setup: {formatPrice(tier.setup_cost, currency)}
                                    </div>
                                    <div className="text-sm text-primary">
                                      <Clock className="w-4 h-4 inline mr-1" />
                                      {tier.delivery_days} days delivery
                                    </div>
                                  </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                  <ul className="space-y-2">
                                    {tier.features.slice(0, 6).map((feature, index) => (
                                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                        {feature}
                                      </li>
                                    ))}
                                    {tier.features.length > 6 && (
                                      <li className="text-sm text-primary">
                                        +{tier.features.length - 6} more features
                                      </li>
                                    )}
                                  </ul>

                                  <Button
                                    className={`w-full ${isSelected
                                      ? 'bg-primary hover:bg-primary-hover'
                                      : 'bg-secondary hover:bg-secondary-hover'
                                      }`}
                                    onClick={() => setSelectedTier(tierType)}
                                  >
                                    {isSelected ? 'Selected' : 'Select Plan'}
                                  </Button>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Calculator Section */}
              <div className="max-w-6xl mx-auto mb-12" data-section="calculator">
                <Card className="glassmorphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Price Calculator
                      {calculationResult && (
                        <Badge className="ml-auto bg-green-500/20 text-green-300 text-lg px-4 py-2">
                          {formatPrice(
                            billingCycle === 'annual'
                              ? calculationResult.effective_monthly_annual
                              : calculationResult.monthly,
                            currency
                          )}
                          <span className="text-sm">/month</span>
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {calculationResult && (
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Pricing Breakdown */}
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Pricing Breakdown</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                              <span className="text-gray-300">Base Price</span>
                              <span className="text-white">{formatPrice(calculationResult.breakdown.base_monthly, currency)}</span>
                            </div>
                            {calculationResult.breakdown.scale_additions > 0 && (
                              <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-gray-300">Scale Additions</span>
                                <span className="text-white">+{formatPrice(calculationResult.breakdown.scale_additions, currency)}</span>
                              </div>
                            )}
                            {calculationResult.breakdown.addons_monthly > 0 && (
                              <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-gray-300">Add-ons</span>
                                <span className="text-white">+{formatPrice(calculationResult.breakdown.addons_monthly, currency)}</span>
                              </div>
                            )}
                            {calculationResult.breakdown.global_addons_monthly > 0 && (
                              <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-gray-300">Global Add-ons</span>
                                <span className="text-white">+{formatPrice(calculationResult.breakdown.global_addons_monthly, currency)}</span>
                              </div>
                            )}
                            {calculationResult.breakdown.discount_amount > 0 && (
                              <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-green-300">Discount ({calculationResult.breakdown.discount_percent}%)</span>
                                <span className="text-green-300">-{formatPrice(calculationResult.breakdown.discount_amount, currency)}</span>
                              </div>
                            )}
                            <div className="flex justify-between items-center py-3 border-t border-white/20 font-semibold">
                              <span className="text-white text-lg">Total Monthly</span>
                              <span className="text-blue-400 text-lg">
                                {formatPrice(
                                  billingCycle === 'annual'
                                    ? calculationResult.effective_monthly_annual
                                    : calculationResult.monthly,
                                  currency
                                )}
                              </span>
                            </div>
                            {billingCycle === 'annual' && (
                              <div className="flex justify-between items-center py-2">
                                <span className="text-gray-300">Annual Total</span>
                                <span className="text-white">{formatPrice(calculationResult.annual, currency)}</span>
                              </div>
                            )}
                            <div className="flex justify-between items-center py-2">
                              <span className="text-gray-300">Setup Cost</span>
                              <span className="text-white">{formatPrice(calculationResult.setup_cost, currency)}</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                              <span className="text-gray-300">Estimated Delivery</span>
                              <span className="text-blue-400">{calculationResult.delivery_days} days</span>
                            </div>
                          </div>
                        </div>

                        {/* Scale Adjustments */}
                        {currentTypeConfig && (
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Scale Requirements</h3>
                            <div className="space-y-4">
                              {currentTypeConfig.scale.modifiers.map((modifier) => {
                                const baseValue = currentTypeConfig.scale.base[modifier.metric] || 0;
                                const currentValue = scale[modifier.metric] || baseValue;
                                const maxValue = baseValue * 5; // Allow up to 5x base value

                                return (
                                  <div key={modifier.metric} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                      <label className="text-sm font-medium text-gray-300 capitalize">
                                        {modifier.metric.replace('_', ' ')}
                                      </label>
                                      <span className="text-sm text-blue-400">
                                        {currentValue.toLocaleString()}
                                      </span>
                                    </div>
                                    <Slider
                                      value={[currentValue]}
                                      onValueChange={([value]) => handleScaleChange(modifier.metric, value)}
                                      min={baseValue}
                                      max={maxValue}
                                      step={modifier.step}
                                      className="w-full"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500">
                                      <span>{baseValue.toLocaleString()} (base)</span>
                                      <span>{maxValue.toLocaleString()} (max)</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                      <Button size="lg" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                        Get Started Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button size="lg" variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                        Request Custom Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Add-ons Section */}
              <div className="max-w-6xl mx-auto mb-12">
                <div className="grid lg:grid-cols-2 gap-6">

                  {/* Type-specific Add-ons */}
                  {currentTypeConfig && currentTypeConfig.addons.length > 0 && (
                    <Card className="glassmorphism border-white/10">
                      <CardHeader>
                        <CardTitle className="text-white">
                          {currentTypeConfig.label} Add-ons
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {currentTypeConfig.addons.map((addon) => (
                          <div
                            key={addon.id}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <Checkbox
                              checked={selectedAddons.includes(addon.id)}
                              onCheckedChange={() => handleAddonToggle(addon.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium text-white">{addon.label}</h4>
                                  <p className="text-sm text-gray-400 mt-1">{addon.description}</p>
                                </div>
                                <div className="text-right">
                                  <div className="font-semibold text-blue-400">
                                    {formatPrice(addon.price_monthly, currency)}/mo
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    Setup: {formatPrice(addon.setup_cost, currency)}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* Global Add-ons */}
                  <Card className="glassmorphism border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white">Global Add-ons</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {pricingConfig.global_addons.map((addon) => (
                        <div
                          key={addon.id}
                          className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <Checkbox
                            checked={selectedGlobalAddons.includes(addon.id)}
                            onCheckedChange={() => handleAddonToggle(addon.id, true)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium text-white">{addon.label}</h4>
                                <p className="text-sm text-gray-400 mt-1">{addon.description}</p>
                                <Badge variant="outline" className="mt-2 text-xs border-white/20 text-gray-300">
                                  {addon.category}
                                </Badge>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-blue-400">
                                  {addon.price_monthly > 0 ? `${formatPrice(addon.price_monthly, currency)}/mo` : 'One-time'}
                                </div>
                                <div className="text-xs text-gray-400">
                                  Setup: {formatPrice(addon.setup_cost, currency)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Discounts Section */}
              <div className="max-w-4xl mx-auto mb-12">
                <Card className="glassmorphism border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white">Available Discounts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 rounded-lg bg-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Checkbox
                            checked={discounts.includes('nonprofit')}
                            onCheckedChange={() => handleDiscountToggle('nonprofit')}
                          />
                          <span className="font-medium text-white">Non-profit</span>
                        </div>
                        <div className="text-green-400 font-semibold">{pricingConfig.discounts.nonprofit_percent}% off</div>
                        <div className="text-xs text-gray-400 mt-1">For registered non-profit organizations</div>
                      </div>

                      <div className="p-4 rounded-lg bg-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Checkbox
                            checked={discounts.includes('education')}
                            onCheckedChange={() => handleDiscountToggle('education')}
                          />
                          <span className="font-medium text-white">Education</span>
                        </div>
                        <div className="text-green-400 font-semibold">{pricingConfig.discounts.education_percent}% off</div>
                        <div className="text-xs text-gray-400 mt-1">For schools and educational institutions</div>
                      </div>

                      <div className="p-4 rounded-lg bg-white/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Checkbox
                            checked={discounts.includes('startup')}
                            onCheckedChange={() => handleDiscountToggle('startup')}
                          />
                          <span className="font-medium text-white">Startup</span>
                        </div>
                        <div className="text-green-400 font-semibold">{pricingConfig.discounts.startup_percent}% off</div>
                        <div className="text-xs text-gray-400 mt-1">For early-stage startups</div>
                      </div>

                      {pricingConfig.discounts.launch.active && (
                        <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                          <div className="flex items-center gap-2 mb-2">
                            <Checkbox
                              checked={discounts.includes('launch')}
                              onCheckedChange={() => handleDiscountToggle('launch')}
                            />
                            <span className="font-medium text-white">Launch Special</span>
                          </div>
                          <div className="text-green-400 font-semibold">{pricingConfig.discounts.launch.percent}% off</div>
                          <div className="text-xs text-gray-400 mt-1">
                            Limited time until {new Date(pricingConfig.discounts.launch.until).toLocaleDateString()}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </section>

          {/* Mobile Overlays */}
          {showMobileCalculator && (
            <div className="lg:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-end">
              <div className="w-full max-h-[80vh] bg-card rounded-t-2xl p-6 overflow-y-auto border border-border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Price Calculator</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMobileCalculator(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                {calculationResult && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">
                        {formatPrice(
                          billingCycle === 'annual'
                            ? calculationResult.effective_monthly_annual
                            : calculationResult.monthly,
                          currency
                        )}
                        <span className="text-sm">/month</span>
                      </div>
                      <div className="text-gray-400">
                        Setup: {formatPrice(calculationResult.setup_cost, currency)}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600">
                      Get Started Now
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {showMobileFilters && (
            <div className="lg:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-end">
              <div className="w-full max-h-[80vh] bg-card rounded-t-2xl p-6 overflow-y-auto border border-border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Filter Options</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMobileFilters(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Search website types..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all_categories">All Categories</SelectItem>
                        {WEBSITE_CATEGORIES.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showMobilePlatforms && (
            <div className="lg:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-end">
              <div className="w-full max-h-[60vh] bg-card rounded-t-2xl p-6 border border-border">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Platform Options</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowMobilePlatforms(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="flex flex-col items-center gap-2 p-4 h-auto border-white/20">
                    <Globe className="h-6 w-6" />
                    <span className="text-sm">Web</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center gap-2 p-4 h-auto border-white/20">
                    <Smartphone className="h-6 w-6" />
                    <span className="text-sm">Mobile</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col items-center gap-2 p-4 h-auto border-white/20">
                    <Monitor className="h-6 w-6" />
                    <span className="text-sm">Desktop</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default Pricing;
