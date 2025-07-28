import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Users, 
  BarChart3, 
  Settings, 
  Zap, 
  Globe,
  CreditCard,
  Bell,
  ArrowRight
} from "lucide-react";

const StartupsSaaS = () => {
  const examples = [
    {
      icon: Rocket,
      title: "MVP Development Platform",
      description: "Rapid prototyping and MVP development with user testing, feedback collection, and iteration tools",
      features: ["Rapid Prototyping", "User Testing", "Feedback Collection", "A/B Testing"]
    },
    {
      icon: Users,
      title: "User Management System",
      description: "Complete user authentication, subscription management, role-based access, and customer analytics",
      features: ["Authentication", "Subscription Billing", "Role Management", "User Analytics"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Dashboard",
      description: "Real-time analytics, KPI tracking, user behavior analysis, and business intelligence",
      features: ["Real-time Analytics", "KPI Dashboards", "User Behavior", "Custom Reports"]
    },
    {
      icon: Settings,
      title: "Admin Management Portal",
      description: "Comprehensive admin panel with user management, content control, system monitoring, and configuration",
      features: ["User Management", "Content Control", "System Monitoring", "Configuration"]
    }
  ];

  const features = [
    "Scalable cloud architecture and deployment",
    "Multi-tenant SaaS infrastructure",
    "Subscription billing and payment processing",
    "API development and third-party integrations",
    "Real-time notifications and communications",
    "Advanced analytics and business intelligence",
    "White-label and customization options",
    "Security compliance and data protection"
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium">
            <Rocket className="h-4 w-4 text-primary" />
            Startups & SaaS Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Launch Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Next Big Idea
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Build scalable SaaS platforms and MVPs with user management, analytics, billing, and admin portals designed for rapid growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/onboarding">
                Launch Your MVP
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SaaS Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete platforms for startups and growing SaaS businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <example.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{example.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{example.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {example.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Essential Features for SaaS Platforms
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to build and scale your SaaS business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="text-primary">Next Unicorn</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create a scalable SaaS platform that grows with your ambitious vision.
          </p>
          
          <Button size="lg" className="group" asChild>
            <Link to="/onboarding">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default StartupsSaaS;