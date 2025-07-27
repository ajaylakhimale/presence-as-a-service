import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { 
  Rocket, 
  Brain, 
  Shield, 
  Handshake,
  Code,
  Palette,
  Database,
  ShoppingCart,
  Brush,
  Zap,
  TrendingUp,
  HeadphonesIcon,
  Star,
  ArrowRight
} from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Websites",
      description: "Tailored digital experiences that capture your brand essence"
    },
    {
      icon: Database,
      title: "Web Apps",
      description: "Powerful applications that scale with your business needs"
    },
    {
      icon: Database,
      title: "Admin Dashboards",
      description: "Intuitive control panels for seamless business management"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Conversion-optimized stores that drive revenue growth"
    },
    {
      icon: Palette,
      title: "Brand Design + UI/UX",
      description: "Visual identities that resonate and engage your audience"
    },
    {
      icon: Zap,
      title: "Performance + SEO",
      description: "Lightning-fast sites that dominate search rankings"
    },
    {
      icon: TrendingUp,
      title: "MVP Development",
      description: "Rapid prototyping to validate and launch your startup vision"
    },
    {
      icon: HeadphonesIcon,
      title: "Long-Term Support",
      description: "Continuous optimization and growth partnership"
    }
  ];

  const pillars = [
    {
      icon: Rocket,
      title: "Strategic Execution",
      description: "Every project is approached with precision and strategic thinking"
    },
    {
      icon: Brain,
      title: "Smart & Modern Design",
      description: "Cutting-edge aesthetics meet intuitive user experiences"
    },
    {
      icon: Shield,
      title: "Secure & Scalable Tech",
      description: "Built with enterprise-grade security and future-proof architecture"
    },
    {
      icon: Handshake,
      title: "Transparent Collaboration",
      description: "Open communication and partnership throughout the journey"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      quote: "MacroPresence transformed our vision into a digital masterpiece. Our conversion rate increased by 300%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      company: "Venture Capital Group",
      quote: "The team's attention to detail and strategic approach exceeded all expectations. Truly elite execution.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      company: "Global Dynamics",
      quote: "Working with MacroPresence was seamless. They delivered a platform that perfectly captures our brand.",
      rating: 5
    }
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            We don't just build websites —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              we craft a presence that dominates the digital landscape
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            At MacroPresence, your vision meets elite execution.
          </p>
          
          <Button size="lg" className="mt-8 group">
            Let's Build Yours
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="glassmorphism border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with powerful, stunning, and conversion-driven digital platforms 
                that reflect their brand and exceed their goals.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glassmorphism border-accent/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-accent">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the go-to presence architects for the next generation of 
                impactful digital brands.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-4 bg-surface/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Driven by Passion. <span className="text-primary">Backed by Process.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're a collective of visionary designers, elite developers, and strategic thinkers 
            who leverage cutting-edge AI and human creativity to deliver digital experiences 
            that set new industry standards.
          </p>
        </div>
      </section>

      {/* What We Do Best */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Strengths</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for your digital dominance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="glassmorphism hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-accent transition-colors" />
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MacroPresence */}
      <section className="py-24 px-4 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why MacroPresence?</h2>
            <p className="text-xl text-muted-foreground">
              The pillars of our excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 rounded-lg glassmorphism">
                <div className="flex-shrink-0">
                  <pillar.icon className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Success stories from our partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glassmorphism">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-primary">Powerful</span> Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            You bring the idea — we'll make it unforgettable online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Start Your Project Brief
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;