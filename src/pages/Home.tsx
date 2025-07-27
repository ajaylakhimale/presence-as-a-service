import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, Clock, TrendingUp, ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Layout from '@/components/layout/Layout';

const Home = () => {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    avgDelivery: 0,
    satisfaction: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targetStats = {
      projects: 247,
      clients: 89,
      avgDelivery: 7,
      satisfaction: 98
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        projects: Math.floor(targetStats.projects * progress),
        clients: Math.floor(targetStats.clients * progress),
        avgDelivery: Math.floor(targetStats.avgDelivery * progress),
        satisfaction: Math.floor(targetStats.satisfaction * progress)
      });

      if (currentStep >= steps) {
        setStats(targetStats);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      step: '01',
      title: 'Submit',
      description: 'Tell us about your project through our guided onboarding process',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Design',
      description: 'We create wireframes and designs based on your requirements',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Our team builds your web presence using modern technologies',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Deliver',
      description: 'We deploy your project and provide comprehensive handover',
      icon: '🚀'
    },
    {
      step: '05',
      title: 'Support',
      description: 'Ongoing maintenance and updates as your business grows',
      icon: '🔧'
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-brand))_0%,transparent_50%)] opacity-10" />
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary ring-1 ring-primary/20 mb-8 animate-fade-in-up">
              <Zap className="h-4 w-4 mr-2" />
              Trusted by 250+ Businesses
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up [animation-delay:0.1s]">
              <span className="block bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent">
                Pay-As-You-Need
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-4 text-muted-foreground font-medium">
                Web Presence
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
              Professional websites and web applications delivered fast, with transparent pricing 
              and no long-term contracts. Scale your web presence as your business grows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:0.3s] mb-16">
              <Link to="/onboarding">
                <Button className="btn-primary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Started Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/showcase">
                <Button className="btn-secondary text-lg px-10 py-6 h-auto hover:bg-surface/80 backdrop-blur-sm">
                  <Play className="mr-3 h-6 w-6" />
                  View Our Work
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up [animation-delay:0.4s]">
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
          
          {/* Enhanced Stats */}
          <div className="mt-24 grid grid-cols-2 gap-8 lg:grid-cols-4 animate-fade-in-up [animation-delay:0.5s]">
            <div className="text-center group">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-count-up mb-2">
                  {stats.projects}+
                </div>
                <div className="text-lg text-muted-foreground font-medium">Projects Completed</div>
                <div className="mt-2 w-full bg-border/30 rounded-full h-1">
                  <div className="bg-gradient-to-r from-primary to-primary/60 h-1 rounded-full w-4/5 transition-all duration-1000 delay-700"></div>
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent-brand to-accent-brand/60 bg-clip-text text-transparent animate-count-up mb-2">
                  {stats.clients}+
                </div>
                <div className="text-lg text-muted-foreground font-medium">Happy Clients</div>
                <div className="mt-2 w-full bg-border/30 rounded-full h-1">
                  <div className="bg-gradient-to-r from-accent-brand to-accent-brand/60 h-1 rounded-full w-3/5 transition-all duration-1000 delay-900"></div>
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold bg-gradient-to-r from-success to-success/60 bg-clip-text text-transparent animate-count-up mb-2">
                  {stats.avgDelivery}
                </div>
                <div className="text-lg text-muted-foreground font-medium">Avg Delivery Days</div>
                <div className="mt-2 w-full bg-border/30 rounded-full h-1">
                  <div className="bg-gradient-to-r from-success to-success/60 h-1 rounded-full w-1/3 transition-all duration-1000 delay-1100"></div>
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent-brand bg-clip-text text-transparent animate-count-up mb-2">
                  {stats.satisfaction}%
                </div>
                <div className="text-lg text-muted-foreground font-medium">Satisfaction Rate</div>
                <div className="mt-2 w-full bg-border/30 rounded-full h-1">
                  <div className="bg-gradient-to-r from-primary to-accent-brand h-1 rounded-full w-full transition-all duration-1000 delay-1300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">How It Works</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures fast delivery without compromising quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mb-4">
                    {step.icon}
                  </div>
                  <div className="text-caption-2 text-primary font-bold mb-2">{step.step}</div>
                  <h3 className="text-headline font-semibold mb-2">{step.title}</h3>
                  <p className="text-subhead text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-border-subtle transform translate-x-8 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-title-1 mb-6">Why Choose WPaaS?</h2>
              <p className="text-body text-muted-foreground mb-8">
                We believe in transparent pricing, quality delivery, and flexible service that grows with your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">What Our Clients Say</h2>
            <p className="text-body text-muted-foreground">
              Join hundreds of satisfied clients who trust WPaaS for their web presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* FAQ Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
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
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
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
              <Button className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 font-semibold backdrop-blur-sm" variant="outline">
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