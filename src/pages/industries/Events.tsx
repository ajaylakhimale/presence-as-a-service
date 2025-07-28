import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Ticket, 
  Users, 
  MapPin, 
  QrCode, 
  Bell,
  CreditCard,
  BarChart3,
  ArrowRight
} from "lucide-react";

const Events = () => {
  const examples = [
    {
      icon: Calendar,
      title: "Event Management Platform",
      description: "Complete event planning with scheduling, venue management, vendor coordination, and timeline tracking",
      features: ["Event Scheduling", "Venue Management", "Vendor Coordination", "Timeline Tracking"]
    },
    {
      icon: Ticket,
      title: "Ticketing & Registration",
      description: "Online ticket sales, registration forms, payment processing, and attendee management",
      features: ["Online Tickets", "Payment Processing", "Registration Forms", "Attendee Tracking"]
    },
    {
      icon: QrCode,
      title: "Check-in & Access Control",
      description: "QR code scanning, digital tickets, access control, and real-time attendance tracking",
      features: ["QR Code Scanning", "Digital Tickets", "Access Control", "Real-time Tracking"]
    },
    {
      icon: BarChart3,
      title: "Event Analytics Dashboard",
      description: "Comprehensive analytics with attendee insights, revenue tracking, and performance metrics",
      features: ["Attendee Analytics", "Revenue Tracking", "Performance Metrics", "Custom Reports"]
    }
  ];

  const features = [
    "Multi-event management and organization",
    "Custom branding and white-label options",
    "Integration with payment gateways and CRM",
    "Mobile apps for organizers and attendees",
    "Email marketing and communication tools",
    "Waitlist management and capacity planning",
    "Speaker and session management",
    "Networking and matchmaking features"
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium">
            <Calendar className="h-4 w-4 text-primary" />
            Events & Bookings Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Create Unforgettable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Event Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Build comprehensive event management platforms with ticketing, registration, check-in systems, and analytics for memorable experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/onboarding">
                Launch Your Event Platform
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
              Event Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete platforms for event planning and management
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
              Essential Features for Event Platforms
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to create and manage successful events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                <Bell className="h-5 w-5 text-primary flex-shrink-0" />
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
            Ready to Revolutionize Your <span className="text-primary">Event Management</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build a comprehensive event platform that creates memorable experiences for all attendees.
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

export default Events;