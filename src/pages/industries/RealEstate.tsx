import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import ParticleEffect from '@/components/ParticleEffect';
import { Link } from "react-router-dom";
import { 
  Home, 
  Search, 
  Calendar, 
  BarChart3, 
  Users, 
  MapPin,
  DollarSign,
  Key,
  ArrowRight
} from "lucide-react";

const RealEstate = () => {
  const examples = [
    {
      icon: Search,
      title: "Property Listing Platform",
      description: "Advanced property search with filters, virtual tours, neighborhood data, and lead generation",
      features: ["Advanced Search", "Virtual Tours", "Lead Capture", "CRM Integration"]
    },
    {
      icon: Calendar,
      title: "Property Management System",
      description: "Tenant management, rent collection, maintenance tracking, and financial reporting",
      features: ["Tenant Portal", "Rent Collection", "Maintenance Requests", "Financial Reports"]
    },
    {
      icon: BarChart3,
      title: "Real Estate Analytics",
      description: "Market analysis, property valuations, investment tracking, and performance dashboards",
      features: ["Market Trends", "ROI Tracking", "Valuation Tools", "Investment Analysis"]
    },
    {
      icon: Users,
      title: "Agent & Broker Platform",
      description: "CRM for agents, commission tracking, client management, and transaction workflow",
      features: ["Client CRM", "Commission Tracking", "Document Management", "Transaction Pipeline"]
    }
  ];

  const features = [
    "MLS integration and data synchronization",
    "Virtual property tours and 3D walkthroughs",
    "Automated property valuation models (AVM)",
    "Tenant screening and background checks",
    "Online rent collection and payment processing",
    "Maintenance request and work order management",
    "Lead generation and nurturing campaigns",
    "Mobile apps for agents and property managers"
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
        
        {/* Particle Effects */}
        <ParticleEffect />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium">
            <Home className="h-4 w-4 text-primary" />
            Real Estate & Property Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Real Estate Business
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Build powerful real estate platforms with property listings, management tools, analytics, and CRM systems to dominate your market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/onboarding">
                Build Your Platform
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
              Real Estate Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive platforms for modern real estate professionals
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
              Essential Features for Real Estate Platforms
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to excel in the real estate industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                <Key className="h-5 w-5 text-primary flex-shrink-0" />
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
            Ready to Dominate Your <span className="text-primary">Real Estate Market</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build a comprehensive real estate platform that sets you apart from the competition.
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

export default RealEstate;