import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import ParticleEffect from '@/components/ParticleEffect';
import { Link } from 'react-router-dom';
import {
  Users,
  Zap,
  Shield,
  Heart,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Smartphone,
  Monitor,
  Server,
  HeadphonesIcon,
  ArrowRight,
  Globe,
  Code,
  Database,
  Layers,
  Target,
  Award,
  Lightbulb,
  Rocket,
  Building,
  Star
} from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: <Target className="h-6 w-6 text-primary" /> },
    { label: 'Technologies Mastered', value: '20+', icon: <Award className="h-6 w-6 text-success" /> },
    { label: 'Delivery Guarantee', value: '7 Days', icon: <Clock className="h-6 w-6 text-accent-brand" /> },
    { label: 'Code Quality', value: '100%', icon: <Star className="h-6 w-6 text-warning" /> }
  ];

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Modern Web Applications",
      description: "Progressive web apps, interactive dashboards, and scalable business platforms built with React and TypeScript"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-success" />,
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly on all devices, optimized for mobile user experience"
    },
    {
      icon: <Database className="h-8 w-8 text-accent-brand" />,
      title: "Backend & APIs",
      description: "Robust backend systems, RESTful APIs, and database architecture that scales with your business"
    },
    {
      icon: <Code className="h-8 w-8 text-warning" />,
      title: "Custom Development",
      description: "Fully custom solutions tailored to your unique business requirements and workflows"
    }
  ];

  const advantages = [
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "7-Day Delivery Guarantee",
      description: "Your web application goes live in 7 days or less, with no compromises on quality"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-success" />,
      title: "Transparent Pricing",
      description: "No hidden costs, no monthly retainers. Pay upfront for what you need, nothing more"
    },
    {
      icon: <Shield className="h-6 w-6 text-accent-brand" />,
      title: "Post-Launch Support",
      description: "15-30 days of free support after launch, plus ongoing maintenance options"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-warning" />,
      title: "Business-Focused",
      description: "We build solutions that drive growth, increase conversions, and solve real business problems"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We use modern technologies and best practices to ensure your application is fast, secure, and maintainable. Every project includes automated testing, code reviews, and performance optimization."
    },
    {
      title: "Client Partnership",
      description: "We're not just developers — we're your technology partners. We understand your business goals and provide strategic guidance to help you succeed in the digital landscape."
    },
    {
      title: "Scalable Solutions",
      description: "Whether you're a startup or an enterprise, we build applications that grow with you. Our architecture is designed to handle increased traffic and feature expansion."
    },
    {
      title: "Continuous Innovation",
      description: "We stay current with the latest technologies and trends, ensuring your application leverages the best tools available for optimal performance and user experience."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About {siteConfig.name} - Building Powerful Web Applications for Modern Businesses</title>
        <meta name="description" content="Learn about macro presence - your trusted partner for building modern web applications. We deliver high-quality, scalable solutions with our 7-day delivery guarantee." />
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
              <Building className="h-4 w-4 mr-2" />
              Building Powerful Web Applications Since 2024
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 animate-fade-in-up [animation-delay:0.1s]">
              <span className="block bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent">
                About {siteConfig.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s] px-4">
              We specialize in creating <span className="font-semibold text-foreground">modern web applications</span> that drive business growth. With our 7-day delivery guarantee and transparent pricing, we make professional web development accessible to businesses of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:0.3s] mb-16">
              <Link to="/modern-onboarding">
                <Button className="btn-primary text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Your Project
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="text-lg px-10 py-6 h-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  View Our Plans
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up [animation-delay:0.4s]">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We build modern web applications that solve real business problems and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="card-surface p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Our Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Vercel', 'Tailwind CSS', 'Next.js'].map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
            <Link to="/tech-stack">
              <Button variant="outline">
                View Full Tech Stack
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose macro presence?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine speed, quality, and transparency to deliver exceptional web applications that drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border-subtle hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from initial consultation to post-launch support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border-subtle hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our proven 5-phase process ensures your project is delivered on time, on budget, and exceeds expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {['Discovery', 'Design', 'Development', 'Deploy', 'Support'].map((phase, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border-subtle">
                <div className="text-2xl font-bold text-primary mb-2">0{index + 1}</div>
                <div className="text-sm font-medium text-foreground">{phase}</div>
              </div>
            ))}
          </div>

          <Link to="/how-it-works">
            <Button variant="outline" size="lg">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent-brand/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent-brand/10 rounded-3xl p-8 md:p-12">
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you're a startup looking to launch your first product or an established business needing a powerful web application, we're here to help you succeed.
            </p>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-success" />
                <span>7-Day Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent-brand" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-warning" />
                <span>Transparent Pricing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/modern-onboarding">
                <Button size="lg" className="btn-primary">
                  Start Your Project Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;