
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Smartphone, Monitor, Globe, Zap, RefreshCw, BarChart3, Workflow, Star, Users, TrendingUp, ExternalLink, Play, Sparkles, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { Helmet } from 'react-helmet-async';

const ConnectedSystems = () => {

  const systemParts = [
    {
      icon: Globe,
      title: 'Web App',
      description: 'Responsive web application built with modern React, accessible on any device through browsers.',
      features: ['Progressive Web App (PWA)', 'Offline functionality', 'Cross-browser compatibility', 'SEO optimized']
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Native iOS and Android apps built with Flutter for maximum performance and platform integration.',
      features: ['App Store distribution', 'Push notifications', 'Device camera & GPS', 'Biometric authentication']
    },
    {
      icon: Monitor,
      title: 'Desktop App',
      description: 'Cross-platform desktop application using Electron or PWA technology for Windows, Mac, and Linux.',
      features: ['Native OS integration', 'Offline capabilities', 'File system access', 'System notifications']
    },
    {
      icon: Workflow,
      title: 'Integrations & Automations',
      description: 'Seamless connections to your existing tools and automated workflows to streamline operations.',
      features: ['Third-party API integrations', 'Automated workflows', 'Real-time synchronization', 'Custom connectors']
    }
  ];

  const benefits = [
    {
      icon: RefreshCw,
      title: 'Real-time Sync',
      description: 'All platforms stay perfectly synchronized with instant data updates across every device.',
    },
    {
      icon: Users,
      title: 'Multi-platform Reach',
      description: 'Reach customers wherever they are - web, mobile, or desktop - with a consistent experience.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Built-in',
      description: 'Comprehensive analytics and reporting across all platforms with unified dashboards.',
    },
    {
      icon: Zap,
      title: 'One-click Integrations',
      description: 'Connect with popular tools like Stripe, Salesforce, Slack, and hundreds of others instantly.',
    },
    {
      icon: Workflow,
      title: 'Automated Workflows',
      description: 'Set up powerful automations that work across all platforms without manual intervention.',
    },
    {
      icon: Sparkles,
      title: 'Future-Ready',
      description: 'Built with scalable architecture that grows with your business and adapts to new technologies.',
    }
  ];

  const plans = [
    {
      id: 'launch',
      name: 'Launch',
      icon: Zap,
      price: 'From $2,999',
      period: 'one-time',
      description: 'Perfect for startups and small businesses getting started',
      color: 'border-primary',
      features: [
        'Web App (Progressive Web App)',
        'Mobile App (iOS & Android)',
        'Basic integrations (3 included)',
        'User authentication',
        'Basic analytics',
        'Standard support',
        'App store submission',
        '30-day warranty'
      ],
      deliveryTime: '4-6 weeks',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: Sparkles,
      price: 'From $7,999',
      period: 'one-time',
      description: 'For growing businesses that need advanced features',
      color: 'border-accent-brand',
      features: [
        'Everything in Launch',
        'Desktop App (Windows, Mac, Linux)',
        'Advanced integrations (10 included)',
        'Admin dashboard',
        'Advanced analytics & reporting',
        'Push notifications',
        'API access',
        'Priority support',
        '90-day warranty',
        'Custom branding'
      ],
      deliveryTime: '6-10 weeks',
      popular: true
    },
    {
      id: 'omni',
      name: 'OmniSuite',
      icon: Crown,
      price: 'Custom Quote',
      period: 'pricing',
      description: 'Enterprise solution with unlimited possibilities',
      color: 'border-purple-500',
      features: [
        'Everything in Pro',
        'Unlimited integrations',
        'Custom workflows & automations',
        'White-label solution',
        'Enterprise security',
        'Dedicated account manager',
        'Custom training',
        'SLA guarantee',
        '1-year warranty',
        'Ongoing maintenance included'
      ],
      deliveryTime: '10-16 weeks',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Do I need coding knowledge to manage my connected system?',
      answer: 'No coding knowledge required! We provide intuitive admin dashboards and comprehensive training. Our systems are designed for business owners and their teams to manage content, users, and basic settings without technical expertise.'
    },
    {
      question: 'Will my app be available on App Store and Google Play?',
      answer: 'Yes! We handle the entire app store submission process for both iOS App Store and Google Play Store. This includes preparing app store assets, descriptions, and managing the review process.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We support 500+ integrations including Stripe, PayPal, Salesforce, HubSpot, Mailchimp, Slack, Zoom, Google Workspace, Microsoft 365, and many more. Custom API integrations are also available.'
    },
    {
      question: 'How much does it cost to launch?',
      answer: 'Our Launch package starts at $2,999 for a complete connected system including web and mobile apps. Pricing varies based on features and complexity. Enterprise solutions are custom-priced.'
    },
    {
      question: 'How long does development take?',
      answer: 'Launch package: 4-6 weeks. Pro package: 6-10 weeks. OmniSuite: 10-16 weeks. Timeline depends on complexity and your feedback during the development process.'
    },
    {
      question: 'What happens after launch?',
      answer: 'We provide ongoing support, maintenance, and updates. All packages include warranty periods, and we offer flexible maintenance plans for long-term partnerships.'
    }
  ];

  const comparison = [
    {
      feature: 'Platform Coverage',
      regular: 'Web only',
      connected: 'Web + Mobile + Desktop'
    },
    {
      feature: 'Data Synchronization',
      regular: 'Manual updates',
      connected: 'Real-time sync across all platforms'
    },
    {
      feature: 'User Experience',
      regular: 'Inconsistent across devices',
      connected: 'Unified experience everywhere'
    },
    {
      feature: 'Integrations',
      regular: 'Limited, custom-coded',
      connected: '500+ pre-built integrations'
    },
    {
      feature: 'Analytics',
      regular: 'Basic web analytics',
      connected: 'Comprehensive cross-platform insights'
    },
    {
      feature: 'Maintenance',
      regular: 'Platform-specific updates',
      connected: 'Centralized management'
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Connected Systems — Web + App + Automation | MacroPresence</title>
        <meta name="description" content="Build fully connected platforms — website, mobile, desktop — integrated with automations and analytics. Start your ecosystem today." />
        <meta property="og:title" content="Connected Systems — Web + App + Automation | MacroPresence" />
        <meta property="og:description" content="Build fully connected platforms — website, mobile, desktop — integrated with automations and analytics. Start your ecosystem today." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Connected Systems — Web + App + Automation" />
        <meta name="twitter:description" content="Build fully connected platforms — website, mobile, desktop — integrated with automations and analytics. Start your ecosystem today." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-brand))_0%,transparent_50%)] opacity-10" />

        {/* Particle Effects */}
        <ParticleEffect />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-8 animate-fade-in-up">
              <Sparkles className="h-4 w-4 mr-2" />
              Revolutionary Connected Ecosystem
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 animate-fade-in-up [animation-delay:0.1s]">
              <span className="block bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent">
                One Business.
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent-brand to-foreground bg-clip-text text-transparent">
                One Ecosystem.
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mt-4 text-muted-foreground font-medium">
                Every Platform.
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
              Get a custom-built website, mobile app, and desktop app — all perfectly synchronized with
              backend services, automations, and analytics. From screen to screen, your brand stays strong.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:0.3s] mb-16">
              <Link to="/connected-systems/quote">
                <Button className="btn-primary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get a Quote
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/onboarding">
                <Button className="btn-accent text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start My Project
                  <Play className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>

            {/* Ecosystem Visual */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-in-up [animation-delay:0.4s] max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300">
                <Globe className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">Web App</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300">
                <Smartphone className="h-8 w-8 text-accent-brand mb-2" />
                <span className="text-sm font-medium">Mobile App</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300">
                <Monitor className="h-8 w-8 text-success mb-2" />
                <span className="text-sm font-medium">Desktop App</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300">
                <Workflow className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">Automations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Connected Systems Means */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">What Connected Systems Means</h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              You run the business. We build the system. Four integrated platforms working as one unified ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {systemParts.map((part, index) => {
              const Icon = part.icon;
              return (
                <Card key={part.title} className="card-elevated hover:scale-105 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-title-3">{part.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-muted-foreground mb-4">{part.description}</p>
                    <ul className="space-y-2">
                      {part.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Regular Site vs. Connected System</h2>
            <p className="text-body text-muted-foreground">
              See the difference our connected approach makes for your business
            </p>
          </div>

          <div className="card-elevated overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left p-6 text-headline">Feature</th>
                    <th className="text-center p-6 text-headline">Regular Website</th>
                    <th className="text-center p-6 text-headline bg-primary/10">Connected System</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={item.feature} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                      <td className="p-6 font-medium">{item.feature}</td>
                      <td className="p-6 text-center text-muted-foreground">{item.regular}</td>
                      <td className="p-6 text-center bg-success/10 text-success font-medium">{item.connected}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Love This */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Why Businesses Love Connected Systems</h2>
            <p className="text-body text-muted-foreground">
              Powerful benefits that transform how your business operates and grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-4 p-6 rounded-2xl border border-border/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-headline font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-body text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Choose Your Connected System</h2>
            <p className="text-body text-muted-foreground">
              Transparent pricing for every business size — from startup to enterprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={plan.id}
                  className={`card-elevated relative ${plan.popular ? 'ring-2 ring-accent-brand' : ''} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent-brand text-accent-brand-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${plan.color}`}>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-title-3">{plan.name}</CardTitle>
                    <div className="text-title-2 font-bold text-primary">{plan.price}</div>
                    <p className="text-subhead text-muted-foreground">{plan.description}</p>
                    <div className="text-callout text-accent-brand">
                      ⚡ {plan.deliveryTime}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-subhead">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={plan.price === 'Custom Quote' ? '/connected-systems/quote' : '/onboarding'}>
                      <Button className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                        {plan.price === 'Custom Quote' ? 'Get Quote' : 'Start Project'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="card-elevated p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <Badge className="mb-4">Success Story</Badge>
                <h3 className="text-title-2 mb-4">TechStart Inc. 3x'd Their Revenue</h3>
                <p className="text-body text-muted-foreground mb-6">
                  "MacroPresence built us a connected system that transformed our business. Our customers can now
                  access our platform on web, mobile, and desktop with perfect synchronization. Sales increased
                  300% in the first 6 months."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">👩‍💼</div>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-success/10 rounded-2xl">
                  <div className="text-3xl font-bold text-success">300%</div>
                  <div className="text-sm text-muted-foreground">Revenue Growth</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-2xl">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center p-4 bg-accent-brand/10 rounded-2xl">
                  <div className="text-3xl font-bold text-accent-brand">98%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center p-4 bg-success/10 rounded-2xl">
                  <div className="text-3xl font-bold text-success">4.9</div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Frequently Asked Questions</h2>
            <p className="text-body text-muted-foreground">
              Everything you need to know about connected systems
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-surface p-6 rounded-2xl border">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-headline font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-body text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent-brand/5 to-primary/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title-1 mb-6">
            Your business deserves to be everywhere.
            <br />
            Let's build your connected system today.
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the revolution of businesses that don't just exist online — they dominate every platform
            with seamless, synchronized experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/connected-systems/quote">
              <Button className="btn-primary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get Free Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button className="btn-secondary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Now
                <ExternalLink className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConnectedSystems;