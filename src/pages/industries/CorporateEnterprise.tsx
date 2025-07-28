import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Building2, Users, MessageSquare, ClipboardList, CreditCard, UserCheck, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateEnterprise = () => {
  const examples = [
    {
      icon: Users,
      title: "Employee Management System",
      description: "Comprehensive HR dashboard with employee profiles, performance tracking, and leave management.",
      features: ["Employee directory", "Performance reviews", "Time tracking", "Leave calendar"]
    },
    {
      icon: MessageSquare,
      title: "Internal Communication Hub",
      description: "Centralized platform for company announcements, team messaging, and document sharing.",
      features: ["Real-time messaging", "File sharing", "Department channels", "Announcement boards"]
    },
    {
      icon: ClipboardList,
      title: "Inventory Tracking Dashboard",
      description: "Real-time inventory management with automated alerts and supply chain optimization.",
      features: ["Stock monitoring", "Automated alerts", "Supplier management", "Cost analytics"]
    },
    {
      icon: CreditCard,
      title: "Payroll Management Platform",
      description: "Automated payroll processing with tax calculations and direct deposit integration.",
      features: ["Automated calculations", "Tax compliance", "Direct deposits", "Pay stub generation"]
    },
    {
      icon: UserCheck,
      title: "Client Portal & CRM",
      description: "Customer relationship management with project tracking and communication tools.",
      features: ["Client profiles", "Project timelines", "Invoice tracking", "Support tickets"]
    }
  ];

  const benefits = [
    "Streamline operations across departments",
    "Reduce manual administrative work",
    "Improve employee satisfaction",
    "Enhanced data security and compliance",
    "Real-time analytics and reporting",
    "Scalable solutions that grow with your business"
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-16 w-16 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Corporate & Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Transform your enterprise operations with custom web applications designed for scale, security, and efficiency.
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
              Enterprise Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              Custom applications tailored to your enterprise needs
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
              Why Choose Our Enterprise Solutions?
            </h2>
            <p className="text-xl text-muted-foreground">
              Built for the demands of modern enterprise environments
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
            Ready to Transform Your <span className="text-primary">Enterprise</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your specific requirements and build a solution that scales with your business.
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

export default CorporateEnterprise;