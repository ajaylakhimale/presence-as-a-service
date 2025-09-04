import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import ParticleEffect from '@/components/ParticleEffect';
import { Link } from "react-router-dom";
import {
  Calculator,
  DollarSign,
  BarChart3,
  Shield,
  FileText,
  CreditCard,
  PieChart,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Finance = () => {
  const examples = [
    {
      icon: FileText,
      title: "Invoice & Billing System",
      description: "Automated invoice generation, payment tracking, recurring billing, and financial reporting",
      features: ["Invoice Templates", "Payment Tracking", "Recurring Billing", "Tax Calculations"]
    },
    {
      icon: PieChart,
      title: "Expense Management Platform",
      description: "Expense tracking, receipt scanning, budget management, and financial analytics",
      features: ["Receipt Scanning", "Budget Alerts", "Expense Categories", "Real-time Reports"]
    },
    {
      icon: Shield,
      title: "Insurance Management System",
      description: "Policy management, claims processing, customer portals, and agent dashboards",
      features: ["Policy Management", "Claims Processing", "Customer Portal", "Agent Tools"]
    },
    {
      icon: TrendingUp,
      title: "Investment Tracking Platform",
      description: "Portfolio management, market analysis, risk assessment, and performance tracking",
      features: ["Portfolio Analytics", "Risk Assessment", "Market Data", "Performance Reports"]
    }
  ];

  const features = [
    "Advanced financial reporting and analytics",
    "Bank integration and transaction syncing",
    "Multi-currency support and exchange rates",
    "Automated tax calculations and compliance",
    "Secure payment processing and fraud detection",
    "Client portal with real-time account access",
    "Regulatory compliance and audit trails",
    "Responsive web interface for all devices"
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
            <Calculator className="h-4 w-4 text-primary" />
            Finance & Insurance Solutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Secure Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Financial Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Build robust financial platforms with invoicing, expense tracking, insurance management, and investment tools that ensure compliance and security.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/onboarding">
                Build Your FinTech Solution
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
              Financial Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive platforms for financial services and insurance
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
              Essential Features for Financial Platforms
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for secure and compliant financial operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                <CreditCard className="h-5 w-5 text-primary flex-shrink-0" />
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
            Ready to Build Your <span className="text-primary">Financial Platform</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create a secure, compliant financial solution that drives your business forward.
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

export default Finance;