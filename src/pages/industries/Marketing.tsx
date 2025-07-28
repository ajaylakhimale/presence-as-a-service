import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Megaphone, 
  BarChart3, 
  Users, 
  Calendar, 
  Target, 
  Globe,
  Mail,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const Marketing = () => {
  const examples = [
    {
      icon: BarChart3,
      title: "Campaign Management Platform",
      description: "Multi-channel campaign creation, management, tracking, and optimization with real-time analytics",
      features: ["Campaign Builder", "Multi-channel Management", "Real-time Analytics", "A/B Testing"]
    },
    {
      icon: Users,
      title: "Client Dashboard & CRM",
      description: "Client relationship management with project tracking, communication tools, and performance reporting",
      features: ["Client CRM", "Project Tracking", "Communication Hub", "Performance Reports"]
    },
    {
      icon: Globe,
      title: "Social Media Management",
      description: "Unified social media scheduling, content creation, engagement tracking, and audience analytics",
      features: ["Content Scheduling", "Engagement Tracking", "Audience Analytics", "Social Listening"]
    },
    {
      icon: Mail,
      title: "Email Marketing Platform",
      description: "Email campaign creation, automation, segmentation, and detailed performance analytics",
      features: ["Email Automation", "Audience Segmentation", "Template Builder", "Performance Analytics"]
    }
  ];

  const features = [
    "Multi-client workspace and white-label options",
    "Advanced analytics and ROI tracking",
    "Social media scheduling and monitoring",
    "Lead generation and nurturing automation",
    "Content management and collaboration tools",
    "Integration with major marketing platforms",
    "Custom reporting and client presentations",
    "Team collaboration and project management"
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium">
            <Megaphone className="h-4 w-4 text-primary" />
            Marketing & Agencies Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Amplify Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Marketing Impact
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Build powerful marketing platforms with campaign management, client dashboards, analytics, and automation tools to drive exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="/onboarding">
                Scale Your Agency
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
              Marketing Solutions We Build
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive platforms for marketing agencies and professionals
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
              Essential Features for Marketing Platforms
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to run a successful marketing agency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
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
            Ready to Supercharge Your <span className="text-primary">Marketing Agency</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build a comprehensive marketing platform that delivers exceptional results for your clients.
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

export default Marketing;