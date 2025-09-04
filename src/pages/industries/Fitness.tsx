import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Dumbbell,
  Calendar,
  Users,
  Target,
  Trophy,
  Activity,
  Heart,
  Clock,
  ArrowRight
} from "lucide-react";

const Fitness = () => {
  const examples = [
    {
      icon: Dumbbell,
      title: "Gym Management System",
      description: "Complete gym operations with member management, equipment tracking, staff scheduling, and billing",
      features: ["Member Management", "Equipment Tracking", "Staff Scheduling", "Billing System"]
    },
    {
      icon: Calendar,
      title: "Class Booking Platform",
      description: "Online class scheduling, booking system, instructor management, and capacity planning",
      features: ["Class Scheduling", "Online Booking", "Instructor Portal", "Capacity Management"]
    },
    {
      icon: Target,
      title: "Personal Training Platform",
      description: "Trainer-client matching, workout planning, progress tracking, and nutrition guidance",
      features: ["Trainer Matching", "Workout Plans", "Progress Tracking", "Nutrition Guidance"]
    },
    {
      icon: Activity,
      title: "Fitness Tracking Dashboard",
      description: "Comprehensive health metrics, workout analytics, goal setting, and progress visualization",
      features: ["Health Metrics", "Workout Analytics", "Goal Setting", "Progress Reports"]
    }
  ];

  const features = [
    "Wearable device integration and data sync",
    "Nutrition planning and meal tracking",
    "Social features and community building",
    "Subscription management and billing",
    "Responsive web interface for all devices",
    "Virtual training and live streaming",
    "Challenge and competition management",
    "Detailed analytics and reporting"
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium">
            <Dumbbell className="h-4 w-4 text-primary" />
            Fitness & Wellness Solutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Power Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Fitness Journey
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Build comprehensive fitness platforms with gym management, class booking, personal training, and wellness tracking for healthier communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/onboarding">
                Build Your Fitness Platform
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
              Fitness Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete platforms for fitness centers and wellness businesses
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
              Essential Features for Fitness Platforms
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to create engaging fitness experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                <Heart className="h-5 w-5 text-primary flex-shrink-0" />
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
            Ready to Transform Your <span className="text-primary">Fitness Business</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build a comprehensive fitness platform that motivates and engages your community.
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

export default Fitness;