import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { ShoppingCart, Settings, BarChart3, Users, CreditCard, Package, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceRetail = () => {
  const examples = [
    {
      icon: Settings,
      title: "Product Configurator",
      description: "Custom product builder with real-time pricing and 3D visualization capabilities.",
      features: ["Real-time pricing", "3D product preview", "Custom options", "Bulk ordering"]
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Complete inventory tracking with automated reordering and multi-warehouse support.",
      features: ["Multi-warehouse", "Auto-reordering", "Stock alerts", "Batch tracking"]
    },
    {
      icon: Users,
      title: "Vendor Dashboard",
      description: "Comprehensive seller portal with analytics, order management, and commission tracking.",
      features: ["Sales analytics", "Order processing", "Commission reports", "Product management"]
    },
    {
      icon: BarChart3,
      title: "Analytics Platform",
      description: "Advanced e-commerce analytics with customer insights and performance metrics.",
      features: ["Customer insights", "Sales reports", "Performance metrics", "ROI tracking"]
    },
    {
      icon: CreditCard,
      title: "POS Integration",
      description: "Unified point-of-sale system connecting online and offline sales channels.",
      features: ["Omnichannel sync", "Payment processing", "Customer profiles", "Loyalty programs"]
    }
  ];

  const benefits = [
    "Seamless omnichannel experience",
    "Automated inventory management",
    "Advanced customer analytics",
    "Scalable payment processing",
    "Real-time order tracking",
    "Multi-vendor marketplace support"
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center mb-6">
            <ShoppingCart className="h-16 w-16 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            E-Commerce & Retail{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Build powerful e-commerce platforms that drive sales, manage inventory, and deliver exceptional customer experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" asChild>
              <Link to="/onboarding">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
              E-Commerce Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive platforms for modern retail businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <example.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{example.description}</p>
                  <ul className="space-y-2">
                    {example.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our E-Commerce Solutions?
            </h2>
            <p className="text-xl text-muted-foreground">
              Built for growth, conversion, and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your <span className="text-primary">E-Commerce</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build an e-commerce platform that converts visitors into customers and grows with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/onboarding">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/industries">← Back to Industries</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EcommerceRetail;