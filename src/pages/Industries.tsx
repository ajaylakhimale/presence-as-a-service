import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';
import { memo, useMemo } from 'react';
import {
  Building2,
  Heart,
  ShoppingCart,
  GraduationCap,
  Truck,
  UtensilsCrossed,
  Home,
  Calculator,
  Rocket,
  Calendar,
  Dumbbell,
  Megaphone,
  ArrowRight
} from "lucide-react";

// Define interface for industry data
interface IndustryData {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
}

// Memoized industry card component for better performance
const IndustryCard = memo(({ industry, index }: { industry: IndustryData; index: number }) => (
  <Link to={industry.link} key={industry.title}>
    <Card className="group hover:scale-[1.02] transition-transform duration-200 hover:shadow-lg cursor-pointer border border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <industry.icon className="h-8 w-8 text-primary group-hover:text-accent-brand transition-colors duration-200" />
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent-brand/10 flex items-center justify-center">
            <industry.icon className="h-5 w-5 text-primary/70" />
          </div>
        </div>

        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
          {industry.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {industry.description}
        </p>

        <div className="pt-2">
          <span className="text-sm text-primary/70 group-hover:text-primary font-medium transition-colors duration-200 flex items-center gap-1">
            See Examples
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </CardContent>
    </Card>
  </Link>
));

IndustryCard.displayName = 'IndustryCard';

const Industries = () => {
  // Memoize industries data to prevent recreation on re-renders
  const industries = useMemo(() => [
    {
      icon: Building2,
      title: "Corporate & Enterprise",
      description: "Employee management systems, internal communication tools, inventory tracking & dashboards",
      link: "/industries/corporate-enterprise"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Online appointment systems, patient portals, telemedicine platforms, hospital admin dashboards",
      link: "/industries/healthcare"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      description: "Custom product configurators, admin panels for inventory, vendor dashboards, analytics platforms",
      link: "/industries/ecommerce-retail"
    },
    {
      icon: GraduationCap,
      title: "Education & e-Learning",
      description: "Online learning platforms (LMS), quiz & exam dashboards, course management panels",
      link: "/industries/education"
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Fleet tracking dashboards, warehouse management systems, parcel tracking web apps",
      link: "/industries/logistics"
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Hospitality",
      description: "Restaurant order management, custom food ordering platforms, kitchen & inventory web apps",
      link: "/industries/food-hospitality"
    },
    {
      icon: Home,
      title: "Real Estate & Property",
      description: "Booking and listing dashboards, property management web apps, construction project tracking",
      link: "/industries/real-estate"
    },
    {
      icon: Calculator,
      title: "Finance & Insurance",
      description: "Invoice generators, expense tracking dashboards, budget tools, insurance claim management",
      link: "/industries/finance"
    },
    {
      icon: Rocket,
      title: "Startups & SaaS",
      description: "MVP web apps, user subscription dashboards, admin analytics portals, beta testing dashboards",
      link: "/industries/startups-saas"
    },
    {
      icon: Calendar,
      title: "Events & Bookings",
      description: "Event management dashboards, custom RSVP planners, booking panels, ticketing systems",
      link: "/industries/events"
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness",
      description: "Gym dashboards, diet & workout planning portals, subscription tracking, online class booking",
      link: "/industries/fitness"
    },
    {
      icon: Megaphone,
      title: "Marketing & Agencies",
      description: "Client campaign dashboards, performance analytics tools, content management, social media systems",
      link: "/industries/marketing"
    }
  ], []);

  return (
    <Layout showMobileTabBar={false}>
      <Helmet>
        <title>Industry Solutions | {siteConfig.fullName}</title>
        <meta name="description" content="Custom web applications for every industry. Explore tailored digital solutions for healthcare, e-commerce, education, logistics, and more." />
        <meta property="og:title" content={`Industry Solutions | ${siteConfig.fullName}`} />
        <meta property="og:description" content="Custom web applications for every industry" />
      </Helmet>

      {/* Hero Section - Optimized */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 min-h-screen flex items-center">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-brand))_0%,transparent_50%)] opacity-5" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary ring-1 ring-primary/20 mb-8">
              <ArrowRight className="h-4 w-4 mr-2" />
              Industry Solutions
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8">
              <span className="block bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent">
                Web Apps for Every Industry
              </span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl xl:text-6xl mt-4 text-muted-foreground font-medium">
                Tailored Digital Solutions for Your Sector
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Explore how we solve real problems across sectors — with custom web app solutions for every business type.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid - Optimized */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.title} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Simplified */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your <span className="text-primary">Industry-Leading</span> Solution
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to dominate your industry? Start your custom web app project today.
          </p>

          <Link to="/modern-onboarding">
            <Button size="lg" className="group">
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;