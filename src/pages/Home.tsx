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
import { Helmet } from 'react-helmet-async';

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
    'No hidden fees or surprises',
    'Pay only for what you need',
    'Fast delivery (avg 7 days)',
    'Modern tech stack',
    'Responsive design',
    'SEO optimized',
    'Ongoing support available',
    'Client dashboard included'
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
      <Helmet>
        <title>Custom Web & Mobile Solutions for Every Industry | macro presence</title>
        <meta name="description" content="Premium web agency delivering tailored digital solutions for 20+ industries. Expert UI/UX, seamless onboarding, and proven results. Get your custom quote today!" />
        <meta property="og:title" content="Custom Web & Mobile Solutions for Every Industry | macro presence" />
        <meta property="og:description" content="Premium web and mobile development for Real Estate, Law, Startups, and more." />
        <meta property="og:image" content="https://macro-presence.dev/og-image.png" />
        <meta property="og:url" content="https://macro-presence.dev/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@macro_presence" />
        <meta name="twitter:image" content="https://macro-presence.dev/og-image.png" />
      </Helmet>
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
                Your Full-Time Dev Team
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mt-4 text-muted-foreground font-medium">
                Only When You Need It.
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s] px-4">
              Custom websites and web apps, delivered fast with transparent pricing and no long-term contracts. Pay only for what you use. Scale your digital presence, on your terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:0.3s] mb-16">
              <Link to="/onboarding">
                <Button className="btn-primary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/industries">
                <Button className="btn-primary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Play className="mr-3 h-6 w-6" />
                  Explore Solutions
                </Button>
              </Link>
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
      </section>      {/* Features Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-title-1 mb-6">Why Choose WPaaS?</h2>
              <p className="text-body text-muted-foreground mb-8">
                We believe in transparent pricing, quality delivery, and flexible service that grows with your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <div key={feature} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-subhead">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-elevated p-8">
              <h3 className="text-title-3 mb-4">Ready to get started?</h3>
              <p className="text-body text-muted-foreground mb-6">
                Tell us about your project and get a custom quote in minutes.
              </p>
              <Link to="/onboarding">
                <Button className="btn-primary w-full">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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

      {/* Connected Systems Feature Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent-brand/5 to-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 animate-fade-in-up">
                <Sparkles className="h-4 w-4 mr-2" />
                Revolutionary Technology
              </Badge>
              <h2 className="text-title-1 mb-6 animate-fade-in-up [animation-delay:0.1s]">
                One Business. One Ecosystem. Every Platform.
              </h2>
              <p className="text-body text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.2s]">
                We don't just build websites — we craft a presence that dominates the digital landscape.
                Get a unified system with web app, mobile app, desktop app, and powerful automations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 animate-fade-in-up [animation-delay:0.3s]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Web App</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-brand/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-4 w-4 text-accent-brand" />
                  </div>
                  <span className="text-sm font-medium">Mobile App</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                    <Monitor className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-sm font-medium">Desktop App</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Workflow className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Automations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.4s]">
                <Link to="/connected-systems">
                  <Button className="btn-primary">
                    Explore Connected Systems
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/onboarding">
                  <Button className="btn-secondary">
                    Start My Project
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-up [animation-delay:0.5s]">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card/70 transition-all duration-300">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Globe className="h-8 w-8 text-primary mb-2" />
                      <div className="text-sm font-medium">Web Platform</div>
                      <div className="text-xs text-muted-foreground">Responsive & Fast</div>
                    </div>
                    <div className="p-4 bg-success/10 rounded-2xl">
                      <Monitor className="h-8 w-8 text-success mb-2" />
                      <div className="text-sm font-medium">Desktop App</div>
                      <div className="text-xs text-muted-foreground">Windows, Mac, Linux</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent-brand/10 rounded-2xl">
                      <Smartphone className="h-8 w-8 text-accent-brand mb-2" />
                      <div className="text-sm font-medium">Mobile Apps</div>
                      <div className="text-xs text-muted-foreground">iOS & Android</div>
                    </div>
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Workflow className="h-8 w-8 text-primary mb-2" />
                      <div className="text-sm font-medium">Integrations</div>
                      <div className="text-xs text-muted-foreground">500+ APIs</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-success rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent-brand rounded-full animate-pulse [animation-delay:0.5s]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-accent-brand relative overflow-hidden">
        {/* Background overlay for better text contrast */}
        <div className="absolute inset-0 bg-background/5 backdrop-blur-sm" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-title-1 mb-6 text-white font-bold drop-shadow-lg">Ready to Transform Your Web Presence?</h2>
          <p className="text-body mb-8 text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Join hundreds of businesses who trust WPaaS for their web development needs.
            No contracts, no surprises – just great results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-semibold backdrop-blur-sm transition-all duration-300">
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