import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
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

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Corporate & Enterprise",
      description: "Employee management systems, internal communication tools, inventory tracking & dashboards",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Online appointment systems, patient portals, telemedicine platforms, hospital admin dashboards",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      description: "Custom product configurators, admin panels for inventory, vendor dashboards, analytics platforms",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      icon: GraduationCap,
      title: "Education & e-Learning",
      description: "Online learning platforms (LMS), quiz & exam dashboards, course management panels",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Fleet tracking dashboards, warehouse management systems, parcel tracking web apps",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Hospitality",
      description: "Restaurant order management, custom food ordering platforms, kitchen & inventory web apps",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      icon: Home,
      title: "Real Estate & Property",
      description: "Booking and listing dashboards, property management web apps, construction project tracking",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
    },
    {
      icon: Calculator,
      title: "Finance & Insurance",
      description: "Invoice generators, expense tracking dashboards, budget tools, insurance claim management",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    },
    {
      icon: Rocket,
      title: "Startups & SaaS",
      description: "MVP web apps, user subscription dashboards, admin analytics portals, beta testing dashboards",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      icon: Calendar,
      title: "Events & Bookings",
      description: "Event management dashboards, custom RSVP planners, booking panels, ticketing systems",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness",
      description: "Gym dashboards, diet & workout planning portals, subscription tracking, online class booking",
      image: "https://images.unsplash.com/photo-1517022812141-2362092815c9"
    },
    {
      icon: Megaphone,
      title: "Marketing & Agencies",
      description: "Client campaign dashboards, performance analytics tools, content management, social media systems",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];

  return (
    <Layout showMobileTabBar={false}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            We Build Web Apps for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Every Industry
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Explore how we solve real problems across sectors — with tailored web app solutions.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="group glassmorphism hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer border-primary/10 hover:border-primary/20"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <industry.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    <div className="w-12 h-12 rounded-full overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="pt-2">
                    <span className="text-sm text-primary/70 group-hover:text-primary font-medium transition-colors duration-300">
                      See Examples →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your <span className="text-primary">Industry-Leading</span> Solution
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to dominate your industry? Start your custom web app project today.
          </p>
          
          <Button size="lg" className="group">
            Start a Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;