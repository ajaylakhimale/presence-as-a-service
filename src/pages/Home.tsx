import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, Clock, TrendingUp, ChevronDown, Play, Globe, Smartphone, Monitor, Workflow, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import GuaranteeBanner from '@/components/GuaranteeBanner';
import SupportHighlight from '@/components/SupportHighlight';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { trackButtonClick } from '@/components/GoogleAnalytics';

const Home = () => {
  const stats = {
    projects: 247,
    clients: 89,
    avgDelivery: 7,
    satisfaction: 98
  };

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Requirements gathering, architecture design, and project planning using industry-standard methodologies',
      icon: '🔍',
      tools: ['Figma', 'Miro', 'Notion'],
      duration: '2-3 days'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'UI/UX design, wireframing, and interactive prototypes with design system creation',
      icon: '🎨',
      tools: ['Figma', 'Adobe Creative Suite', 'Framer'],
      duration: '3-5 days'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with CI/CD pipelines, automated testing, and code quality assurance',
      icon: '⚡',
      tools: ['React', 'TypeScript', 'GitHub Actions', 'Jest'],
      duration: '5-10 days'
    },
    {
      step: '04',
      title: 'DevOps & Deployment',
      description: 'Cloud infrastructure setup, automated deployment, monitoring, and performance optimization',
      icon: '🚀',
      tools: ['Vercel', 'AWS', 'Docker', 'Monitoring'],
      duration: '1-2 days'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Go-live support, performance monitoring, maintenance, and continuous improvement',
      icon: '🔧',
      tools: ['Analytics', 'Error Tracking', 'Support Tools'],
      duration: 'Ongoing'
    }
  ];

  const features = [
    'flexible upfront costs - pay as we build your tech',
    '7-day delivery guarantee',
    '99.9% uptime with enterprise hosting',
    'Conversion-optimized designs that sell',
    'Mobile-first responsive layouts',
    'SEO that ranks #1 on Google',
    '24/7 priority support included',
    'Full source code ownership'
  ];

  const whyChooseFeatures = [
    {
      icon: '⚡',
      title: 'Rapid Launch',
      description: 'Your site goes live in 7 days or less',
      highlight: '7-day delivery',
      stats: 'Timeline varies by project'
    },
    {
      icon: '💰',
      title: 'Clear Pricing',
      description: 'No hidden costs, no surprises, no subscriptions',
      highlight: 'Upfront quotes',
      stats: 'No additional fees'
    },
    {
      icon: '📈',
      title: 'Demonstrated Success',
      description: 'Our sites convert up to 3x better than average',
      highlight: '3x conversion rate',
      stats: '98% client satisfaction'
    },
    {
      icon: '🎯',
      title: 'Industry Focus',
      description: 'Tailored solutions for over 20 industries',
      highlight: '20+ sectors served',
      stats: 'Hundreds of projects delivered'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      quote: 'WPaaS delivered our landing page in just 5 days. The quality exceeded our expectations and the pricing was transparent throughout.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'Marcus Johnson',
      company: 'Local Bistro',
      quote: 'Finally, a web service that understands small businesses. No long contracts, just great results when we need them.',
      rating: 5,
      avatar: '👨‍🍳'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Design Studio',
      quote: 'The pay-as-you-need model is perfect for our growing agency. We can scale our web presence as we grow.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const faqs = [
    {
      question: 'How does the pay-as-you-need pricing work?',
      answer: 'You only pay for the specific features and services you need. Our pricing is transparent with no hidden fees. Start with a basic package and add features as your business grows.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern, industry-standard technologies including React, TypeScript, Tailwind CSS, Node.js, and various cloud platforms. View our complete tech stack for details.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are delivered within 7-14 days depending on complexity. Simple landing pages can be completed in 3-5 days, while complex web applications may take 2-4 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer flexible support packages including bug fixes, content updates, feature additions, and emergency support. You can purchase support credits as needed.'
    },
    {
      question: 'Can I see examples of your work?',
      answer: 'Absolutely! Check out our showcase page to see recent projects across different industries and complexity levels.'
    },
    {
      question: 'What if I need changes after the project is delivered?',
      answer: 'We include one round of revisions with every project. Additional changes can be requested through our support system with transparent pricing for each update.'
    }
  ];

  return (
    <Layout>
      <SEO
        title={seoConfig.pages.home.title}
        description={seoConfig.pages.home.description}
        keywords={seoConfig.pages.home.keywords}
        canonicalUrl={seoConfig.pages.home.canonicalUrl}
        structuredData={seoConfig.schemas.service}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-brand))_0%,transparent_50%)] opacity-10" />

        {/* Particle Effects */}
        <ParticleEffect />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary ring-1 ring-primary/20 mb-8 animate-fade-in-up">
              <Zap className="h-4 w-4 mr-2" />
              Trusted Platform
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 animate-fade-in-up [animation-delay:0.1s]">
              <span className="block bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent">
                Professional Web Development Services
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mt-4 text-muted-foreground font-medium">
                7-Day Delivery Guarantee
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s] px-4">
              Get your custom website or web application delivered in just 7 days. Expert React development, transparent pricing, no contracts required. <strong>30-day money-back guarantee</strong> and <strong>15 days of free support</strong> included.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:0.3s] mb-8">
              <Link to="/modern-onboarding">
                <Button
                  className="btn-primary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => trackButtonClick('hero_get_started', 'home_hero')}
                >
                  Get Started Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <WhatsAppButton
                variant="inline"
                className="text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                message="Hi! I saw your website and I'm interested in getting a professional website built. Can we discuss my project requirements?"
                onClick={() => trackButtonClick('hero_whatsapp', 'home_hero')}
              />
            </div>

            {/* Guarantee and Support Highlights */}
            <div className="space-y-6 mb-12 animate-fade-in-up [animation-delay:0.4s]">
              <GuaranteeBanner variant="hero" />
              <SupportHighlight variant="hero" />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground animate-fade-in-up [animation-delay:0.4s] px-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                No Hidden Fees
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent-brand" />
                7-Day Average Delivery
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                98% Satisfaction Rate
              </div>
            </div>
          </div>

          {/* Enhanced Stats - Hidden */}
          {false && (
            <div className="mt-24 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4 animate-fade-in-up [animation-delay:0.5s] px-4">
              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-count-up mb-2">
                    {stats.projects}+
                  </div>
                  <div className="text-sm sm:text-lg text-muted-foreground font-medium">Projects Completed</div>
                  <div className="mt-2 w-full bg-border/30 rounded-full h-1">
                    <div className="bg-gradient-to-r from-primary to-primary/60 h-1 rounded-full w-4/5 transition-all duration-1000 delay-700"></div>
                  </div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-accent-brand to-accent-brand/60 bg-clip-text text-transparent animate-count-up mb-2">
                    {stats.clients}+
                  </div>
                  <div className="text-sm sm:text-lg text-muted-foreground font-medium">Happy Clients</div>
                  <div className="mt-2 w-full bg-border/30 rounded-full h-1">
                    <div className="bg-gradient-to-r from-accent-brand to-accent-brand/60 h-1 rounded-full w-3/5 transition-all duration-1000 delay-900"></div>
                  </div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-success to-success/60 bg-clip-text text-transparent animate-count-up mb-2">
                    {stats.avgDelivery}
                  </div>
                  <div className="text-sm sm:text-lg text-muted-foreground font-medium">Avg Delivery Days</div>
                  <div className="mt-2 w-full bg-border/30 rounded-full h-1">
                    <div className="bg-gradient-to-r from-success to-success/60 h-1 rounded-full w-1/3 transition-all duration-1000 delay-1100"></div>
                  </div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent-brand bg-clip-text text-transparent animate-count-up mb-2">
                    {stats.satisfaction}%
                  </div>
                  <div className="text-sm sm:text-lg text-muted-foreground font-medium">Satisfaction Rate</div>
                  <div className="mt-2 w-full bg-border/30 rounded-full h-1">
                    <div className="bg-gradient-to-r from-primary to-accent-brand h-1 rounded-full w-full transition-all duration-1000 delay-1300"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 animate-fade-in-up">
              <Workflow className="h-4 w-4 mr-2" />
              Our Development Process
            </Badge>
            <h2 className="text-title-1 mb-4 animate-fade-in-up [animation-delay:0.1s]">
              How It Works
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
              Our streamlined process ensures fast delivery without compromising quality
            </p>
          </div>

          <div className="relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-8 relative mb-12">
              {processSteps.map((step, index) => (
                <div key={step.step} className="text-center animate-fade-in-up relative group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mb-4 relative z-10 border-4 border-background group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="text-caption-2 text-primary font-bold mb-2">{step.step}</div>
                    <h3 className="text-headline font-semibold mb-2">{step.title}</h3>
                    <p className="text-subhead text-muted-foreground mb-3">{step.description}</p>

                    {/* Duration and tools in subtle style */}
                    <div className="space-y-2 opacity-75 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {step.duration}
                      </div>
                      <div className="flex flex-wrap justify-center gap-1">
                        {step.tools.slice(0, 2).map((tool, toolIndex) => (
                          <span key={toolIndex} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                        {step.tools.length > 2 && (
                          <span className="text-xs text-muted-foreground">
                            +{step.tools.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/how-it-works">
                <Button variant="outline" className="group animate-fade-in-up [animation-delay:0.6s]">
                  Learn More About Our Process
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>      {/* Why Choose WPaaS Section - Redesigned for Conversion */}
      <section className="py-24 bg-gradient-to-br from-surface via-surface-secondary to-muted relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_25%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent-brand))_0%,transparent_25%)] opacity-5" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-6">
              Why 95% of Our Clients Choose Us Again?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join industry leaders who've transformed their business with our proven web solutions.
              <span className="text-foreground font-semibold">No long term contracts, No surprises. Just results.</span>
            </p>
          </div>

          {/* Main Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyChooseFeatures.map((feature, index) => (
              <Card key={feature.title} className="card-elevated hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{feature.description}</p>
                  <div className="bg-primary/10 rounded-lg p-2 mb-2">
                    <div className="text-primary font-bold text-sm">{feature.highlight}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{feature.stats}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Proof & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits List */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                What Makes Us Different?
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={feature} className="flex items-start space-x-4 animate-fade-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center group-hover:bg-success/30 transition-colors">
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 p-6 bg-accent-brand/10 rounded-xl border border-accent-brand/20">
                <div className="flex items-center justify-between text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent-brand">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-brand">&lt;2s</div>
                    <div className="text-sm text-muted-foreground">Load Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-brand">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-brand">A+</div>
                    <div className="text-sm text-muted-foreground">Security</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="relative">
              {/* Main CTA Card */}
              <Card className="card-elevated bg-gradient-to-br from-primary to-primary-hover text-primary-foreground p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

                <CardContent className="relative z-10 p-0">
                  <div className="mb-6">
                    <Badge className="bg-white/20 text-white border-white/30 mb-4">
                      🚀 Limited Time: 20% Off First Project
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Business?</h3>
                    <p className="text-primary-foreground/90 mb-6">
                      Join 250+ successful businesses who chose us for their digital transformation.
                      Get a custom quote in under 5 minutes.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link to="/onboarding" className="block">
                      <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        Start Your Project Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/pricing" className="block">
                      <Button variant="outline" className="w-full border-white/30 text-white bg-white/10 hover:bg-white/20 font-medium">
                        View Transparent Pricing
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Elements */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-center space-x-6 text-sm text-primary-foreground/80">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Project-based work
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        7-day delivery
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Free revisions
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {false && (
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-title-1 mb-4">What Our Clients Say</h2>
              <p className="text-body text-muted-foreground">
                Join hundreds of satisfied clients who trust WPaaS for their web presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="card-elevated animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent-brand fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-body mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <div className="text-headline font-semibold">{testimonial.name}</div>
                        <div className="text-subhead text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/testimonials">
                <Button className="btn-secondary">
                  View All Testimonials
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Frequently Asked Questions</h2>
            <p className="text-body text-muted-foreground">
              Everything you need to know about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-surface p-6">
                <AccordionTrigger className="text-left text-headline hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-surface via-surface-secondary to-muted relative overflow-hidden">
        {/* Background overlay for subtle depth */}
        <div className="absolute inset-0 bg-primary/5" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-title-1 mb-6 text-foreground font-bold">Ready to Transform Your Web Presence?</h2>
          <p className="text-body mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses who trust WPaaS for their web development needs.
            No contracts, no surprises – just great results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button className="btn-primary text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 font-semibold transition-all duration-300">
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;