import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
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
  ArrowRight
} from "lucide-react";
import { Helmet } from 'react-helmet-async';

const About = () => {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Full-Time Tech Team",
      description: "Complete development capabilities without the full-time cost"
    },
    {
      icon: <Zap className="h-6 w-6 text-accent-brand" />,
      title: "Ship Fast",
      description: "We deliver your vision quickly with reliable maintenance"
    },
    {
      icon: <Shield className="h-6 w-6 text-success" />,
      title: "14 Days Free Support",
      description: "Comprehensive post-launch support included"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-muted-foreground" />,
      title: "Pay Per Update",
      description: "No monthly retainers or bloated plans"
    }
  ];

  const platforms = [
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Web Apps",
      description: "Responsive, fast web applications"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions"
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Desktop Apps",
      description: "Powerful desktop applications"
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backends",
      description: "Scalable backend systems and APIs"
    }
  ];

  const values = [
    {
      title: "Outcome-Focused",
      description: "We care about your results as much as you do. Your growth is our success."
    },
    {
      title: "Connected Systems",
      description: "We build complete, integrated solutions that work seamlessly together."
    },
    {
      title: "On-Demand Scaling",
      description: "Scale your development capacity up or down based on your needs."
    },
    {
      title: "Long-Term Partnership",
      description: "We're committed to your growth journey, not just project completion."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>About Us - WPaaS | Your On-Demand Product Team</title>
        <meta name="description" content="We're not just developers. We are your full-time tech team — without the full-time cost. Building complete, connected systems for startups and businesses." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent-brand/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/30">
            More Than a Service — We're Your Tech Team
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 animate-fade-in-up">
            Your On-Demand
            <span className="block text-primary">Product Team</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up">
            We're not just developers. We are your <span className="font-semibold text-foreground">full-time tech team</span> — without the full-time cost.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="btn-primary">
              Start Building Today
            </Button>
            <Button variant="outline" size="lg">
              See How We Work
            </Button>
          </div>
        </div>
      </section>

      {/* What We Are For You */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What We Are for You
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A tech ally, growth partner, and full-scale on-demand product team that delivers outcomes, not just code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                We Build Complete, Connected Systems
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">Web, mobile, and desktop apps</span> that work together seamlessly
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">Robust backends and APIs</span> that scale with your growth
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">Integrated solutions</span> that solve real business problems
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <Card key={index} className="card-surface p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 flex justify-center">
                    {platform.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{platform.title}</h4>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="card-surface p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                How We Work With You
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-accent-brand mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">Ship your vision fast</span> with reliable maintenance and scaling
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <HeadphonesIcon className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">14 days of free post-launch support</span> to ensure everything works perfectly
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">No monthly retainers or bloated plans</span> — just pay per update, per fix, or per feature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We Care About the Outcome as Much as You Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When you grow, we grow with you. We're truly aligned with your vision and committed to long-term growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 border border-border-subtle hover:shadow-lg transition-all duration-300">
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

      {/* Outcome Promise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary/10 to-accent-brand/10 rounded-3xl p-8 md:p-12">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Product Team — Available On Demand
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not just another development service. We're your dedicated product team, 
              aligned with your vision and committed to your success. Available when you need us, 
              scaling with your growth, and always focused on delivering real outcomes.
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <span>Growth-Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent-brand" />
                <span>Always Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Reliable Partner</span>
              </div>
            </div>
            
            <p className="text-lg font-semibold text-foreground">
              Ready to see what's possible when you have the right tech team on your side?
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent-brand text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your vision deserves a team that cares about the outcome. Let's discuss how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;