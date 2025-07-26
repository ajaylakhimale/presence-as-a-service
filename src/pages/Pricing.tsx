import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Calculator, Zap, Sparkles, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Layout from '@/components/layout/Layout';

const Pricing = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [costCalculator, setCostCalculator] = useState({
    bugFixes: 0,
    contentUpdates: 0,
    newSections: 0,
    newFeatures: 0,
    seoOptimization: 0,
    emergencySupport: 0
  });

  const tiers = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'From $599',
      description: 'Perfect for small businesses and startups',
      color: 'border-primary',
      features: [
        'Landing page design',
        'Responsive layout',
        'Basic SEO setup',
        'Contact form',
        'Social media integration',
        'Mobile optimization',
        '1 revision round',
        'Email support'
      ],
      deliveryTime: '3-5 days',
      popular: false
    },
    {
      name: 'Growth',
      icon: Sparkles,
      price: 'From $1,299',
      description: 'For growing businesses needing more features',
      color: 'border-accent-brand',
      features: [
        'Multi-page website (up to 7 pages)',
        'Custom design system',
        'Advanced SEO optimization',
        'Blog/CMS integration',
        'Analytics setup',
        'Performance optimization',
        'Payment integration (basic)',
        '2 revision rounds',
        'Priority email support'
      ],
      deliveryTime: '7-10 days',
      popular: true
    },
    {
      name: 'Pro',
      icon: Crown,
      price: 'From $2,499',
      description: 'Advanced features for established businesses',
      color: 'border-success',
      features: [
        'Custom web application',
        'User authentication',
        'Database integration',
        'API development',
        'Third-party integrations',
        'Advanced analytics',
        'Security hardening',
        'Performance monitoring',
        '3 revision rounds',
        'Phone & email support'
      ],
      deliveryTime: '14-21 days',
      popular: false
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom Quote',
      description: 'Tailored solutions for large organizations',
      color: 'border-purple-500',
      features: [
        'Custom enterprise solution',
        'Scalable architecture',
        'Multi-environment setup',
        'Advanced security',
        'Team collaboration tools',
        'Custom integrations',
        'Dedicated project manager',
        'Unlimited revisions',
        '24/7 support',
        'SLA guarantee'
      ],
      deliveryTime: '4-8 weeks',
      popular: false
    }
  ];

  const addOnPricing = {
    bugFixes: { name: 'Bug Fixes', price: 75, unit: 'per fix' },
    contentUpdates: { name: 'Content Updates', price: 50, unit: 'per update' },
    newSections: { name: 'New Sections', price: 200, unit: 'per section' },
    newFeatures: { name: 'New Features', price: 400, unit: 'per feature' },
    seoOptimization: { name: 'SEO Optimization', price: 300, unit: 'per page' },
    emergencySupport: { name: 'Emergency Support', price: 150, unit: 'per hour' }
  };

  const calculateTotal = () => {
    return Object.entries(costCalculator).reduce((total, [key, value]) => {
      const pricing = addOnPricing[key as keyof typeof addOnPricing];
      return total + (pricing.price * value);
    }, 0);
  };

  const comparisonFeatures = [
    'Custom Design',
    'Responsive Layout',
    'SEO Optimization',
    'Contact Forms',
    'Social Media Integration',
    'Blog/CMS',
    'E-commerce Ready',
    'User Authentication',
    'Database Integration',
    'API Development',
    'Analytics',
    'Performance Monitoring',
    'Security Hardening',
    'Multi-language Support',
    'Advanced Integrations',
    'Dedicated Support',
    'SLA Guarantee',
    'Custom Training'
  ];

  const getFeatureSupport = (tier: string, feature: string) => {
    const tierFeatureMap: Record<string, string[]> = {
      Starter: ['Custom Design', 'Responsive Layout', 'SEO Optimization', 'Contact Forms', 'Social Media Integration'],
      Growth: ['Custom Design', 'Responsive Layout', 'SEO Optimization', 'Contact Forms', 'Social Media Integration', 'Blog/CMS', 'Analytics'],
      Pro: ['Custom Design', 'Responsive Layout', 'SEO Optimization', 'Contact Forms', 'Social Media Integration', 'Blog/CMS', 'E-commerce Ready', 'User Authentication', 'Database Integration', 'API Development', 'Analytics', 'Performance Monitoring', 'Security Hardening'],
      Enterprise: comparisonFeatures // All features
    };
    
    return tierFeatureMap[tier]?.includes(feature);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-large-title mb-6">
              Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              No hidden fees, no surprises. Choose the plan that fits your needs and scale as you grow.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => setShowComparison(!showComparison)}
                className={showComparison ? 'btn-primary' : 'btn-secondary'}
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {!showComparison ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <Card 
                    key={tier.name} 
                    className={`card-elevated relative ${tier.popular ? 'ring-2 ring-accent-brand' : ''} animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent-brand text-accent-brand-foreground">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${tier.color}`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-title-3">{tier.name}</CardTitle>
                      <div className="text-title-2 font-bold text-primary">{tier.price}</div>
                      <p className="text-subhead text-muted-foreground">{tier.description}</p>
                      <div className="text-callout text-accent-brand">
                        ⚡ {tier.deliveryTime}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-3">
                            <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-subhead">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/onboarding">
                        <Button className={tier.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                          Start Project
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            // Comparison Table
            <div className="overflow-x-auto">
              <table className="w-full border-collapse card-surface rounded-lg overflow-hidden">
                <thead className="bg-surface">
                  <tr>
                    <th className="text-left p-6 text-headline font-semibold">Features</th>
                    {tiers.map((tier) => (
                      <th key={tier.name} className="text-center p-6">
                        <div className="text-headline font-semibold">{tier.name}</div>
                        <div className="text-callout text-primary font-bold">{tier.price}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature} className={index % 2 === 0 ? 'bg-background' : 'bg-surface/50'}>
                      <td className="p-6 text-body">{feature}</td>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="text-center p-6">
                          {getFeatureSupport(tier.name, feature) ? (
                            <Check className="h-5 w-5 text-success mx-auto" />
                          ) : (
                            <div className="w-5 h-5 mx-auto bg-muted rounded-full" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-title-1 mb-4">Calculate Your Cost</h2>
            <p className="text-body text-muted-foreground">
              Estimate the cost of ongoing support and updates for your project
            </p>
          </div>

          <Card className="card-elevated">
            <CardContent className="p-8">
              <div className="space-y-8">
                {Object.entries(addOnPricing).map(([key, addon]) => (
                  <div key={key} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-headline font-semibold">{addon.name}</h4>
                        <p className="text-subhead text-muted-foreground">
                          ${addon.price} {addon.unit}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-title-3 font-bold">
                          {costCalculator[key as keyof typeof costCalculator]}
                        </div>
                        <div className="text-callout text-primary">
                          ${addon.price * costCalculator[key as keyof typeof costCalculator]}
                        </div>
                      </div>
                    </div>
                    <Slider
                      value={[costCalculator[key as keyof typeof costCalculator]]}
                      onValueChange={(value) => 
                        setCostCalculator(prev => ({ ...prev, [key]: value[0] }))
                      }
                      max={10}
                      step={1}
                      className="w-full"
                    />
                  </div>
                ))}
                
                <div className="border-t border-border-subtle pt-6">
                  <div className="flex justify-between items-center text-title-2 font-bold">
                    <span>Total Estimated Cost:</span>
                    <span className="text-primary">${calculateTotal()}</span>
                  </div>
                  <p className="text-subhead text-muted-foreground mt-2">
                    This is an estimate. Final pricing may vary based on project complexity.
                  </p>
                </div>
                
                <Link to="/onboarding">
                  <Button className="btn-primary w-full text-lg">
                    Get Accurate Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Pricing FAQ</h2>
            <p className="text-body text-muted-foreground">
              Common questions about our pricing model
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="card-surface">
              <CardContent className="p-6">
                <h3 className="text-headline font-semibold mb-2">Are there any hidden fees?</h3>
                <p className="text-body text-muted-foreground">
                  No hidden fees ever. All costs are transparent and agreed upon before work begins. 
                  You'll receive a detailed quote for your project with clear pricing for each component.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-surface">
              <CardContent className="p-6">
                <h3 className="text-headline font-semibold mb-2">Can I upgrade my plan later?</h3>
                <p className="text-body text-muted-foreground">
                  Absolutely! You can add features to your existing project at any time. 
                  We'll provide clear pricing for any additions or upgrades you need.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-surface">
              <CardContent className="p-6">
                <h3 className="text-headline font-semibold mb-2">What's included in ongoing support?</h3>
                <p className="text-body text-muted-foreground">
                  Support includes bug fixes, security updates, content changes, and technical assistance. 
                  You can purchase support credits as needed or choose a monthly support plan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-title-1 mb-6">Ready to Get Started?</h2>
          <p className="text-body mb-8 opacity-90">
            Choose your plan and start your project today. No contracts, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;