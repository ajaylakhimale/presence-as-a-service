import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Check,
    ArrowRight,
    Zap,
    Star,
    Crown,
    ChevronDown,
    Globe,
    Smartphone,
    Monitor,
    Users,
    Building,
    Briefcase,
    ShoppingCart,
    MousePointer,
    Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';

const CleanPricing = () => {
    const [selectedCategory, setSelectedCategory] = useState<'starter' | 'professional' | 'enterprise'>('professional');

    const pricingPlans = {
        starter: {
            title: "Starter Web Solutions",
            description: "Perfect for simple web apps, landing pages, and basic functionality",
            plans: [
                {
                    id: "simple-webapp",
                    name: "Simple Web App",
                    price: 39999,
                    delivery: "1-2 weeks",
                    features: [
                        "Up to 5 pages/screens",
                        "Responsive design (mobile + desktop)",
                        "Basic user authentication",
                        "Simple forms & contact integration",
                        "Basic database (CRUD operations)",
                        "15 days post-launch support",
                        "Domain & hosting setup"
                    ],
                    popular: false,
                    icon: Globe
                },
                {
                    id: "interactive-webapp",
                    name: "Interactive Web App",
                    price: 69999,
                    delivery: "2-3 weeks",
                    features: [
                        "Up to 15 pages/components",
                        "User dashboard & profiles",
                        "Database with relationships",
                        "File upload functionality",
                        "Email notifications",
                        "Basic analytics integration",
                        "30 days post-launch support",
                        "SEO optimization"
                    ],
                    popular: true,
                    icon: MousePointer
                }
            ]
        },
        professional: {
            title: "Professional Web Apps",
            description: "Feature-rich applications with advanced functionality and integrations",
            plans: [
                {
                    id: "full-stack-app",
                    name: "Full-Stack Web App",
                    price: 129999,
                    delivery: "3-5 weeks",
                    features: [
                        "Complex multi-page application",
                        "Advanced user roles & permissions",
                        "Real-time features (notifications, updates)",
                        "Payment gateway integration",
                        "Advanced database design",
                        "Admin panel & management system",
                        "API integrations (up to 3)",
                        "3 months priority support",
                        "Performance optimization"
                    ],
                    popular: false,
                    icon: Layers
                },
                {
                    id: "advanced-platform",
                    name: "Advanced Web Platform",
                    price: 199999,
                    delivery: "5-7 weeks",
                    features: [
                        "Multi-user platform with dashboards",
                        "Complex business logic & workflows",
                        "Real-time collaboration features",
                        "Advanced reporting & analytics",
                        "Unlimited API integrations",
                        "Custom integrations & automations",
                        "Advanced security features",
                        "6 months priority support",
                        "Scalable architecture"
                    ],
                    popular: true,
                    icon: Star
                }
            ]
        },
        enterprise: {
            title: "Enterprise Web Solutions",
            description: "Large-scale, complex web applications with custom architecture",
            plans: [
                {
                    id: "enterprise-platform",
                    name: "Enterprise Platform",
                    price: 399999,
                    delivery: "8-12 weeks",
                    features: [
                        "Scalable enterprise architecture",
                        "Multi-tenant system support",
                        "Advanced security & compliance",
                        "Custom workflow automation",
                        "Enterprise system integrations",
                        "Advanced analytics & reporting",
                        "Load balancing & performance",
                        "12 months dedicated support",
                        "Team training & documentation"
                    ],
                    popular: false,
                    icon: Building
                },
                {
                    id: "fully-custom",
                    name: "Fully Custom Solution",
                    price: 0,
                    delivery: "Custom timeline",
                    features: [
                        "Completely custom web application",
                        "Unlimited complexity & features",
                        "Custom architecture design",
                        "24/7 dedicated support",
                        "SLA guarantees",
                        "Ongoing development partnership",
                        "Custom integrations & APIs",
                        "White-label solutions",
                        "Global deployment & scaling"
                    ],
                    popular: true,
                    icon: Crown,
                    custom: true
                }
            ]
        }
    };



    const addOns = [
        { name: "Mobile App", price: 99999, description: "Native iOS/Android app development" },
        { name: "Additional Pages", price: 1499, description: "Per additional page beyond included" },
        { name: "Custom Integration", price: 9999, description: "Third-party API or service integration" },
        { name: "Admin Dashboard", price: 14999, description: "Custom admin panel for content management" },
        { name: "Multi-language Support", price: 7999, description: "Multiple language versions of your site" },
        { name: "Payments Integration", price: 19999, description: "Integration with popular payment gateways" }
    ];

    const formatPrice = (price: number) => {
        if (price === 0) return "Custom Quote";
        return `₹${price.toLocaleString()}`;
    };

    const currentPlans = pricingPlans[selectedCategory];

    return (
        <Layout>
            <Helmet>
                <title>Build Your Dream Website Today | Presence as a Service</title>
                <meta name="description" content="One-time payment, lifetime ownership. Transparent pricing for websites and web applications. No hidden fees, no recurring charges. Choose your perfect plan today." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent-brand/10">
                {/* Hero Section */}
                <section className="relative pt-20 pb-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-4xl mx-auto">
                            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                                💰 Transparent Pricing
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Build Your Dream
                                <br />
                                <span className="bg-gradient-to-r from-primary via-accent-brand to-purple-500 bg-clip-text text-transparent">
                                    Website Today
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                                One-time payment, lifetime ownership. Choose your perfect plan and start building
                                your digital presence with no hidden fees or recurring charges.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Important Notice */}
                <section className="relative pb-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Card className="border-2 border-primary/20 bg-primary/5 backdrop-blur-sm">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                                💡 Important Notice
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                The prices shown below are <strong>estimated ranges</strong> based on typical project requirements.
                                                After understanding your specific project needs, our team will provide you with an <strong>exact quotation </strong>
                                                tailored to your requirements. <span className="text-primary font-medium">No payment is required to get started</span> -
                                                we'll discuss your project details first and give you a precise quote before any commitment.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Category Selection */}
                <section className="relative pb-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                {Object.entries(pricingPlans).map(([key, category]) => {
                                    const isSelected = selectedCategory === key;
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => setSelectedCategory(key as any)}
                                            className={`p-6 rounded-lg border-2 transition-all duration-200 text-left ${isSelected
                                                ? 'border-primary bg-primary/5'
                                                : 'border-border bg-card hover:border-primary/50'
                                                }`}
                                        >
                                            <h3 className={`text-lg font-semibold mb-2 ${isSelected ? 'text-primary' : 'text-foreground'
                                                }`}>
                                                {category.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {category.description}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Plans */}
                <section className="relative pb-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                {currentPlans?.plans?.map((plan, index) => {
                                    const Icon = plan.icon;
                                    const price = plan.custom ? 0 : plan.price;

                                    return (
                                        <Card
                                            key={index}
                                            className={`relative ${plan.popular
                                                ? 'border-primary shadow-lg scale-105'
                                                : 'border-border'
                                                }`}
                                        >
                                            {plan.popular && (
                                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                                                        Most Popular
                                                    </Badge>
                                                </div>
                                            )}

                                            <CardHeader className="text-center">
                                                <div className="mb-4">
                                                    <Icon className={`w-12 h-12 mx-auto ${plan.popular ? 'text-primary' : 'text-muted-foreground'
                                                        }`} />
                                                </div>
                                                <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                                                <div className="space-y-2">
                                                    <div className="text-3xl font-bold text-foreground">
                                                        {formatPrice(price)}
                                                        {!plan.custom && (
                                                            <span className="text-sm font-normal text-muted-foreground">
                                                                {" "}one-time
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="text-sm text-primary">
                                                        Delivery: {plan.delivery}
                                                    </div>
                                                </div>
                                            </CardHeader>

                                            <CardContent>
                                                <ul className="space-y-3 mb-6">
                                                    {plan.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-start gap-3">
                                                            <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Button
                                                    className="w-full"
                                                    variant={plan.popular ? "default" : "outline"}
                                                    asChild
                                                >
                                                    <Link to={plan.custom ? "/contact" : `/plan-onboarding?plan=${plan.id}`}>
                                                        {plan.custom ? "Get Custom Quote" : "Get Started"}
                                                        <ArrowRight className="w-4 h-4 ml-2" />
                                                    </Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Add-ons Section */}
                <section className="relative pb-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground mb-4">Optional Add-ons</h2>
                                <p className="text-muted-foreground">
                                    Enhance your project with these optional features
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {addOns.map((addon, index) => (
                                    <Card key={index} className="border-border">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="font-semibold text-foreground">{addon.name}</h3>
                                                <span className="text-sm font-bold text-primary">
                                                    {formatPrice(addon.price)}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{addon.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative pb-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <Card className="bg-gradient-to-r from-primary/10 to-accent-brand/10 border-primary/20">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-foreground mb-4">
                                        Need a custom solution or have questions?
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        Every project is unique. Let's discuss your specific requirements and create a solution that fits your budget and timeline.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button size="lg" variant="outline" asChild>
                                            <Link to="/contact">
                                                Ask Questions
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default CleanPricing;
