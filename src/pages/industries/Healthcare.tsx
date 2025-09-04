import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import ParticleEffect from '@/components/ParticleEffect';
import { Heart, Calendar, UserCheck, Video, BarChart3, Pill, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Healthcare = () => {
  const examples = [
    {
      icon: Calendar,
      title: "Online Appointment System",
      description: "Streamlined booking platform with calendar integration and automated reminders.",
      features: ["Online scheduling", "SMS/Email reminders", "Calendar sync", "Waitlist management"]
    },
    {
      icon: UserCheck,
      title: "Patient Portal",
      description: "Secure patient access to medical records, test results, and prescription history.",
      features: ["Medical records", "Test results", "Prescription history", "Secure messaging"]
    },
    {
      icon: Video,
      title: "Telemedicine Platform",
      description: "HIPAA-compliant video consultations with integrated payment and documentation.",
      features: ["HD video calls", "Screen sharing", "Digital prescriptions", "Session recording"]
    },
    {
      icon: BarChart3,
      title: "Hospital Admin Dashboard",
      description: "Comprehensive management system for staff, patients, and hospital operations.",
      features: ["Staff scheduling", "Patient tracking", "Resource management", "Analytics reports"]
    },
    {
      icon: Pill,
      title: "Medicine Ordering System",
      description: "Automated pharmacy management with inventory tracking and supplier integration.",
      features: ["Inventory tracking", "Auto-reordering", "Supplier management", "Expiry alerts"]
    }
  ];

  const benefits = [
    "HIPAA-compliant security standards",
    "Improved patient care and accessibility",
    "Reduced administrative overhead",
    "Real-time health data monitoring",
    "Streamlined insurance processing",
    "24/7 patient support through web portals"
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
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-16 w-16 text-primary" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Healthcare{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Revolutionize patient care with secure, compliant healthcare applications designed for modern medical practices.
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
              Healthcare Applications We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              HIPAA-compliant solutions for modern healthcare providers
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
              Why Choose Our Healthcare Solutions?
            </h2>
            <p className="text-xl text-muted-foreground">
              Built with healthcare compliance and patient care in mind
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
            Ready to Improve <span className="text-primary">Patient Care</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build a healthcare solution that puts patients first while ensuring compliance and security.
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

export default Healthcare;