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
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-large-title mb-6 animate-fade-in-up">
              <span className="block">Pay-As-You-Need</span>
              <span className="block text-primary">Web Presence</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
              Professional websites and web applications delivered fast, with transparent pricing 
              and no long-term contracts. Scale your web presence as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
              <Link to="/onboarding">
                <Button className="btn-primary text-lg px-8 py-4">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/showcase">
                <Button className="btn-secondary text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4 animate-fade-in-up [animation-delay:0.6s]">
            <div className="text-center">
              <div className="text-title-1 font-bold text-primary animate-count-up">
                {stats.projects}+
              </div>
              <div className="text-callout text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-title-1 font-bold text-primary animate-count-up">
                {stats.clients}+
              </div>
              <div className="text-callout text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-title-1 font-bold text-primary animate-count-up">
                {stats.avgDelivery}
              </div>
              <div className="text-callout text-muted-foreground">Avg Delivery Days</div>
            </div>
            <div className="text-center">
              <div className="text-title-1 font-bold text-primary animate-count-up">
                {stats.satisfaction}%
              </div>
              <div className="text-callout text-muted-foreground">Satisfaction Rate</div>
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
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-title-1 mb-6">Ready to Transform Your Web Presence?</h2>
          <p className="text-body mb-8 opacity-90">
            Join hundreds of businesses who trust WPaaS for their web development needs. 
            No contracts, no surprises – just great results.
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