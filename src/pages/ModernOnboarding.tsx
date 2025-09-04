import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    ChevronRight,
    ChevronLeft,
    Building2,
    Globe,
    CheckCircle,
    ArrowRight,
    User,
    Mail,
    Phone,
    FileText,
    Target,
    Clock,
    DollarSign,
    Zap,
    Star,
    Crown,
    Briefcase,
    MousePointer,
    Layers,
    ShoppingCart,
    Smartphone,
    Monitor,
    Users,
    Check,
    Plus,
    X,
    Calculator,
    Lightbulb,
    Package,
    Settings,
    Shield
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

// Plans configuration matching CleanPricing.tsx
const PRICING_PLANS = {
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
                icon: Building2
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

// Add-ons matching CleanPricing.tsx
const ADD_ONS = [
    { id: "mobile-app", name: "Mobile App", price: 99999, description: "Native iOS/Android app development", category: "development", icon: Smartphone },
    { id: "additional-pages", name: "Additional Pages", price: 1499, description: "Per additional page beyond included", category: "content", icon: FileText },
    { id: "custom-integration", name: "Custom Integration", price: 9999, description: "Third-party API or service integration", category: "integration", icon: Settings },
    { id: "admin-dashboard", name: "Admin Dashboard", price: 14999, description: "Custom admin panel for content management", category: "development", icon: Monitor },
    { id: "multi-language", name: "Multi-language Support", price: 7999, description: "Multiple language versions of your site", category: "enhancement", icon: Globe },
    { id: "payments", name: "Payments Integration", price: 19999, description: "Integration with popular payment gateways", category: "integration", icon: ShoppingCart },
    { id: "redesign", name: "Redesign Existing Site", price: 24999, description: "Complete visual redesign of your current website with modern UI/UX", category: "enhancement", icon: Star },
    { id: "enhance", name: "Enhance Existing Site", price: 14999, description: "Add new features and functionality to your existing website", category: "enhancement", icon: Plus },
    { id: "seo", name: "SEO Optimization", price: 7999, description: "Complete SEO setup with meta tags, sitemap, and search engine optimization", category: "marketing", icon: Target },
    { id: "performance", name: "Performance Optimization", price: 5999, description: "Speed optimization, image compression, and performance improvements", category: "enhancement", icon: Zap },
    { id: "database", name: "Database Integration", price: 12999, description: "Custom database setup with CRUD operations and data management", category: "development", icon: Package },
    { id: "email-marketing", name: "Email Marketing Setup", price: 4999, description: "Newsletter signup, email automation, and marketing integrations", category: "marketing", icon: Mail },
    { id: "analytics", name: "Analytics & Tracking", price: 3999, description: "Google Analytics, conversion tracking, and detailed reporting setup", category: "marketing", icon: Target },
    { id: "security", name: "Security Hardening", price: 6999, description: "SSL certificates, security headers, and vulnerability protection", category: "enhancement", icon: Shield }
];

const ModernOnboarding = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const preSelectedPlan = searchParams.get('plan');
    const preSelectedCategory = searchParams.get('category') || 'professional';

    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(preSelectedPlan || '');
    const [selectedCategory, setSelectedCategory] = useState(preSelectedCategory);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
    const [showAddOnDetails, setShowAddOnDetails] = useState(false);
    const [addOnsOnlyMode, setAddOnsOnlyMode] = useState(false);

    const [formData, setFormData] = useState({
        // Contact Information
        contact_name: '',
        contact_email: '',
        contact_phone: '',
        company_name: '',
        company_size: '',
        industry: '',

        // Project Details
        project_title: '',
        project_description: '',
        target_audience: '',
        existing_website_url: '',
        has_existing_branding: false,

        // Timeline & Budget
        preferred_timeline: '',
        launch_date: '',
        budget_flexibility: false,

        // Additional Requirements
        special_requirements: '',
        referral_source: ''
    });

    // Auto-select plan and category when coming from pricing page
    useEffect(() => {
        if (preSelectedPlan) {
            setSelectedPlan(preSelectedPlan);
            // Find the category for the pre-selected plan
            const planCategory = Object.entries(PRICING_PLANS).find(([category, categoryData]) =>
                categoryData.plans.some(plan => plan.id === preSelectedPlan)
            );
            if (planCategory) {
                setSelectedCategory(planCategory[0]);
            }
        }
    }, [preSelectedPlan]);

    const totalSteps = 5;
    const progress = (currentStep / totalSteps) * 100;

    const formatPrice = (price: number) => {
        if (price === 0) return "Custom Quote";
        return `₹${price.toLocaleString()}`;
    };

    const calculateTotal = () => {
        let total = 0;

        // Add selected plan price
        if (selectedPlan) {
            const plan = getAllPlans().find(p => p.id === selectedPlan);
            if (plan && plan.price > 0) {
                total += plan.price;
            }
        }

        // Add selected add-ons
        selectedAddOns.forEach(addonId => {
            const addon = ADD_ONS.find(a => a.id === addonId);
            if (addon) {
                total += addon.price;
            }
        });

        return total;
    };

    const getAllPlans = () => {
        return [
            ...PRICING_PLANS.starter.plans,
            ...PRICING_PLANS.professional.plans,
            ...PRICING_PLANS.enterprise.plans
        ];
    };

    const getSelectedPlan = () => {
        return getAllPlans().find(p => p.id === selectedPlan);
    };

    const handleAddOnToggle = (addonId: string) => {
        setSelectedAddOns(prev =>
            prev.includes(addonId)
                ? prev.filter(id => id !== addonId)
                : [...prev, addonId]
        );
    }; const validateStep = (step: number) => {
        switch (step) {
            case 1:
                // Allow proceeding if either a plan is selected OR add-ons only mode is enabled
                return selectedPlan !== '' || addOnsOnlyMode;
            case 2:
                // Add-ons are optional, but if in add-ons only mode, at least one add-on should be selected
                return addOnsOnlyMode ? selectedAddOns.length > 0 : true;
            case 3:
                return formData.contact_name && formData.contact_email && formData.project_title;
            case 4:
                return formData.project_description && formData.target_audience;
            case 5:
                return formData.preferred_timeline;
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        } else {
            toast({
                title: "Please complete all required fields",
                description: "Fill in all required information before proceeding.",
                variant: "destructive"
            });
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = async () => {
        if (!validateStep(currentStep)) {
            toast({
                title: "Please complete all required fields",
                description: "Fill in all required information before submitting.",
                variant: "destructive"
            });
            return;
        }

        setIsSubmitting(true);

        const submissionData = {
            selected_plan: selectedPlan,
            selected_addons: selectedAddOns,
            total_price: calculateTotal(),
            ...formData,
            submission_timestamp: new Date().toISOString()
        };

        try {
            // Simulate form submission delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            toast({
                title: "Project Submitted Successfully!",
                description: "We'll review your requirements and get back to you within 24 hours.",
            });

            // Redirect to success page
            navigate('/thank-you?type=onboarding&plan=' + selectedPlan);
        } catch (error) {
            toast({
                title: "Submission Failed",
                description: "Please try again or contact us directly.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-foreground mb-2">Choose Your Plan</h2>
                            <p className="text-muted-foreground">Select a new website plan or enhance your existing website</p>
                        </div>

                        {/* Add-ons Only Option */}
                        <div className="mb-6">
                            <Card
                                className={`cursor-pointer transition-all hover:shadow-lg border-2 ${addOnsOnlyMode
                                    ? 'ring-2 ring-amber-500 bg-amber-50 border-amber-300'
                                    : 'border-amber-200 bg-amber-50/50 hover:border-amber-400 hover:bg-amber-50'
                                    }`}
                                onClick={() => {
                                    setAddOnsOnlyMode(!addOnsOnlyMode);
                                    if (!addOnsOnlyMode) {
                                        setSelectedPlan(''); // Clear plan selection when enabling add-ons only
                                    }
                                }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start gap-3">
                                            <Package className="w-6 h-6 text-amber-600 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-semibold text-amber-900">Add-ons Only</h3>
                                                <p className="text-sm text-amber-700">
                                                    I have an existing website and only need additional services
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${addOnsOnlyMode
                                            ? 'bg-amber-500 border-amber-500'
                                            : 'border-amber-400'
                                            }`}>
                                            {addOnsOnlyMode && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {!addOnsOnlyMode && (
                            <>
                                <div className="text-center mb-4">
                                    <h3 className="text-lg font-semibold">New Website Plans</h3>
                                    <p className="text-sm text-muted-foreground">Choose a plan for your new website project</p>
                                </div>

                                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                                    <TabsList className="grid grid-cols-3 w-full mb-8">
                                        <TabsTrigger value="starter">Starter</TabsTrigger>
                                        <TabsTrigger value="professional">Professional</TabsTrigger>
                                        <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
                                    </TabsList>

                                    {Object.entries(PRICING_PLANS).map(([category, categoryData]) => (
                                        <TabsContent key={category} value={category} className="space-y-4">
                                            <div className="text-center mb-6">
                                                <h3 className="text-xl font-semibold">{categoryData.title}</h3>
                                                <p className="text-muted-foreground text-sm">{categoryData.description}</p>
                                            </div>

                                            <div className="grid gap-6 md:grid-cols-2">
                                                {categoryData.plans.map((plan) => {
                                                    const Icon = plan.icon;
                                                    return (
                                                        <Card
                                                            key={plan.id}
                                                            className={`cursor-pointer transition-all hover:shadow-lg ${selectedPlan === plan.id
                                                                ? 'ring-2 ring-primary bg-primary/5'
                                                                : 'hover:border-primary/50'
                                                                } ${plan.popular ? 'border-primary' : ''}`}
                                                            onClick={() => setSelectedPlan(plan.id)}
                                                        >
                                                            <CardHeader className="text-center">
                                                                {plan.popular && (
                                                                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                                                                        Most Popular
                                                                    </Badge>
                                                                )}
                                                                <Icon className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                                                                <CardTitle className="text-xl">{plan.name}</CardTitle>
                                                                <div className="text-3xl font-bold text-primary">
                                                                    {formatPrice(plan.price)}
                                                                </div>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Delivery: {plan.delivery}
                                                                </p>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <ul className="space-y-2 text-sm">
                                                                    {plan.features.map((feature, index) => (
                                                                        <li key={index} className="flex items-start gap-2">
                                                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                                            <span>{feature}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </CardContent>
                                                        </Card>
                                                    );
                                                })}
                                            </div>
                                        </TabsContent>
                                    ))}
                                </Tabs>
                            </>
                        )}

                        {addOnsOnlyMode && (
                            <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
                                <Lightbulb className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                                <h3 className="font-semibold text-amber-900 mb-1">Add-ons Only Mode</h3>
                                <p className="text-sm text-amber-700">
                                    Perfect! You can select from our add-on services in the next step to enhance your existing website.
                                </p>
                            </div>
                        )}
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-foreground mb-2">
                                {addOnsOnlyMode ? "Select Add-on Services" : "Enhance Your Project"}
                            </h2>
                            <p className="text-muted-foreground">
                                {addOnsOnlyMode
                                    ? "Choose from our premium add-on services to enhance your existing website"
                                    : "Add optional services to expand your project capabilities"
                                }
                            </p>
                        </div>

                        {!addOnsOnlyMode && (
                            <div className="mb-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">Selected Plan</h3>
                                    <Button variant="outline" size="sm" onClick={() => setCurrentStep(1)}>
                                        Change Plan
                                    </Button>
                                </div>
                                {getSelectedPlan() && (
                                    <Card className="mt-2">
                                        <CardContent className="p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold">{getSelectedPlan()?.name}</h4>
                                                    <p className="text-sm text-muted-foreground">{getSelectedPlan()?.delivery}</p>
                                                </div>
                                                <div className="text-lg font-bold text-primary">
                                                    {formatPrice(getSelectedPlan()?.price || 0)}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        )}

                        {addOnsOnlyMode && (
                            <div className="mb-6">
                                <Card className="bg-amber-50 border-amber-200">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-3">
                                            <Package className="w-5 h-5 text-amber-600" />
                                            <div>
                                                <h4 className="font-semibold text-amber-900">Add-ons Only Mode</h4>
                                                <p className="text-sm text-amber-700">
                                                    Enhancing your existing website with additional services
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold">Add-on Services</h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowAddOnDetails(!showAddOnDetails)}
                                >
                                    {showAddOnDetails ? 'Hide Details' : 'Show Details'}
                                </Button>
                            </div>

                            {/* Smart tip for add-on selection */}
                            {!addOnsOnlyMode && selectedPlan && (
                                <Card className="bg-amber-50 border-amber-200">
                                    <CardContent className="p-4">
                                        <div className="flex items-start gap-3">
                                            <Lightbulb className="w-5 h-5 text-amber-600 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-amber-900 mb-1">💡 Smart Tip</h4>
                                                <p className="text-sm text-amber-700 mb-1">
                                                    Your selected plan may already include some features similar to these add-ons.
                                                </p>
                                                <p className="text-xs text-amber-600">
                                                    💬 <em>Don't worry! We'll review your selection and recommend the best approach during our consultation to avoid any duplicate costs.</em>
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            <div className="grid gap-4 md:grid-cols-2">
                                {ADD_ONS.map((addon) => {
                                    const Icon = addon.icon;
                                    const isSelected = selectedAddOns.includes(addon.id);

                                    return (
                                        <Card
                                            key={addon.id}
                                            className={`cursor-pointer transition-all hover:shadow-md ${isSelected
                                                ? 'ring-2 ring-primary bg-primary/5'
                                                : 'hover:border-primary/50'
                                                }`}
                                            onClick={() => handleAddOnToggle(addon.id)}
                                        >
                                            <CardContent className="p-4">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-start gap-3 flex-1">
                                                        <Icon className="w-5 h-5 text-primary mt-1" />
                                                        <div className="flex-1">
                                                            <h4 className="font-semibold text-sm">{addon.name}</h4>
                                                            {showAddOnDetails && (
                                                                <p className="text-xs text-muted-foreground mt-1">
                                                                    {addon.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-bold text-primary">
                                                            {formatPrice(addon.price)}
                                                        </span>
                                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${isSelected
                                                            ? 'bg-primary border-primary'
                                                            : 'border-muted-foreground'
                                                            }`}>
                                                            {isSelected && <Check className="w-3 h-3 text-white" />}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>

                            {selectedAddOns.length > 0 && (
                                <Card className="bg-accent/50">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold">Selected Add-ons ({selectedAddOns.length})</span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setSelectedAddOns([])}
                                            >
                                                Clear All
                                            </Button>
                                        </div>
                                        <div className="text-sm text-muted-foreground mt-1">
                                            {selectedAddOns.map(id => ADD_ONS.find(a => a.id === id)?.name).join(', ')}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-foreground mb-2">Contact Information</h2>
                            <p className="text-muted-foreground">Tell us about yourself and your company</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="contact_name">Full Name *</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="contact_name"
                                        placeholder="Enter your full name"
                                        className="pl-10"
                                        value={formData.contact_name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, contact_name: e.target.value }))}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contact_email">Email Address *</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="contact_email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className="pl-10"
                                        value={formData.contact_email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, contact_email: e.target.value }))}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="contact_phone">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="contact_phone"
                                        placeholder="+91 9876543210"
                                        className="pl-10"
                                        value={formData.contact_phone}
                                        onChange={(e) => setFormData(prev => ({ ...prev, contact_phone: e.target.value }))}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company_name">Company Name</Label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="company_name"
                                        placeholder="Your company name"
                                        className="pl-10"
                                        value={formData.company_name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, company_name: e.target.value }))}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company_size">Company Size</Label>
                                <Select value={formData.company_size} onValueChange={(value) => setFormData(prev => ({ ...prev, company_size: value }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select company size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="freelancer">Freelancer / Solo</SelectItem>
                                        <SelectItem value="small">Small (2-10 employees)</SelectItem>
                                        <SelectItem value="medium">Medium (11-50 employees)</SelectItem>
                                        <SelectItem value="large">Large (51-200 employees)</SelectItem>
                                        <SelectItem value="enterprise">Enterprise (200+ employees)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="industry">Industry</Label>
                                <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your industry" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="technology">Technology & Software</SelectItem>
                                        <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                                        <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                                        <SelectItem value="education">Education & Training</SelectItem>
                                        <SelectItem value="finance">Finance & Banking</SelectItem>
                                        <SelectItem value="realestate">Real Estate</SelectItem>
                                        <SelectItem value="consulting">Consulting & Services</SelectItem>
                                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="project_title">Project Title *</Label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="project_title"
                                    placeholder="What would you like to call this project?"
                                    className="pl-10"
                                    value={formData.project_title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, project_title: e.target.value }))}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-foreground mb-2">Project Details</h2>
                            <p className="text-muted-foreground">Help us understand your vision and requirements</p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="project_description">Project Description *</Label>
                                <Textarea
                                    id="project_description"
                                    placeholder="Describe your project goals, key features you need, and what success looks like for you..."
                                    className="min-h-[120px]"
                                    value={formData.project_description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, project_description: e.target.value }))}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="target_audience">Target Audience *</Label>
                                <Textarea
                                    id="target_audience"
                                    placeholder="Who are your customers? What age group, interests, or demographics?"
                                    className="min-h-[80px]"
                                    value={formData.target_audience}
                                    onChange={(e) => setFormData(prev => ({ ...prev, target_audience: e.target.value }))}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="existing_website_url">Current Website (if any)</Label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="existing_website_url"
                                        placeholder="https://your-current-website.com"
                                        className="pl-10"
                                        value={formData.existing_website_url}
                                        onChange={(e) => setFormData(prev => ({ ...prev, existing_website_url: e.target.value }))}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="has_existing_branding"
                                    checked={formData.has_existing_branding}
                                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, has_existing_branding: checked === true }))}
                                />
                                <Label htmlFor="has_existing_branding">
                                    I have existing branding (logo, colors, style guide)
                                </Label>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="special_requirements">Special Requirements or Notes</Label>
                                <Textarea
                                    id="special_requirements"
                                    placeholder="Any specific requirements, integrations, or concerns we should know about..."
                                    className="min-h-[80px]"
                                    value={formData.special_requirements}
                                    onChange={(e) => setFormData(prev => ({ ...prev, special_requirements: e.target.value }))}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-foreground mb-2">Timeline & Final Details</h2>
                            <p className="text-muted-foreground">When do you need this completed?</p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-4">
                                <Label>Preferred Timeline *</Label>
                                <RadioGroup value={formData.preferred_timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, preferred_timeline: value }))}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="asap" id="timeline-asap" />
                                        <Label htmlFor="timeline-asap">As soon as possible</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="1-month" id="timeline-1month" />
                                        <Label htmlFor="timeline-1month">Within 1 month</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="2-3-months" id="timeline-2-3months" />
                                        <Label htmlFor="timeline-2-3months">2-3 months</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="flexible" id="timeline-flexible" />
                                        <Label htmlFor="timeline-flexible">Flexible timeline</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="launch_date">Specific Launch Date (Optional)</Label>
                                <Input
                                    id="launch_date"
                                    type="date"
                                    value={formData.launch_date}
                                    onChange={(e) => setFormData(prev => ({ ...prev, launch_date: e.target.value }))}
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="budget_flexibility"
                                    checked={formData.budget_flexibility}
                                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, budget_flexibility: checked === true }))}
                                />
                                <Label htmlFor="budget_flexibility">
                                    I have flexibility in budget for additional features
                                </Label>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="referral_source">How did you hear about us?</Label>
                                <Select value={formData.referral_source} onValueChange={(value) => setFormData(prev => ({ ...prev, referral_source: value }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select source" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="google">Google Search</SelectItem>
                                        <SelectItem value="social-media">Social Media</SelectItem>
                                        <SelectItem value="referral">Friend/Colleague Referral</SelectItem>
                                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                                        <SelectItem value="advertising">Online Advertising</SelectItem>
                                        <SelectItem value="website">Your Website</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Project Summary */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold mb-4">Project Summary</h3>
                                <Card className="bg-accent/30">
                                    <CardContent className="p-6 space-y-4">
                                        {!addOnsOnlyMode && getSelectedPlan() && (
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">Selected Plan:</span>
                                                <span>{getSelectedPlan()?.name}</span>
                                            </div>
                                        )}

                                        {addOnsOnlyMode && (
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">Service Type:</span>
                                                <span>Add-ons Only (Existing Website Enhancement)</span>
                                            </div>
                                        )}

                                        {selectedAddOns.length > 0 && (
                                            <div>
                                                <span className="font-medium">Add-ons ({selectedAddOns.length}):</span>
                                                <ul className="mt-1 text-sm text-muted-foreground">
                                                    {selectedAddOns.map(id => {
                                                        const addon = ADD_ONS.find(a => a.id === id);
                                                        return (
                                                            <li key={id} className="flex justify-between">
                                                                <span>• {addon?.name}</span>
                                                                <span>{formatPrice(addon?.price || 0)}</span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        )}

                                        {addOnsOnlyMode && selectedAddOns.length === 0 && (
                                            <div className="text-center text-muted-foreground">
                                                <p>No add-ons selected yet</p>
                                                <p className="text-sm">Go back to step 2 to select services</p>
                                            </div>
                                        )}

                                        <hr className="border-border" />

                                        <div className="flex justify-between items-center text-lg font-bold">
                                            <span>Total Investment:</span>
                                            <span className="text-primary">
                                                {calculateTotal() > 0 ? formatPrice(calculateTotal()) :
                                                    (addOnsOnlyMode && selectedAddOns.length === 0) ? "₹0" : "Custom Quote"}
                                            </span>
                                        </div>

                                        <div className="text-sm text-muted-foreground">
                                            <div>Contact: {formData.contact_name}</div>
                                            <div>Email: {formData.contact_email}</div>
                                            <div>Project: {formData.project_title}</div>
                                            <div>Timeline: {formData.preferred_timeline.replace('-', ' ')}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                    <Lightbulb className="w-4 h-4 text-blue-600" />
                                    What happens next?
                                </h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• We'll review your requirements within 24 hours</li>
                                    <li>• Our team will prepare a detailed project proposal</li>
                                    <li>• We'll schedule a call to discuss your project</li>
                                    <li>• Once approved, we'll start development immediately</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <Layout>
            <Helmet>
                <title>Modern Project Onboarding | Presence as a Service</title>
                <meta name="description" content="Start your project with our comprehensive onboarding process. Choose your plan, add services, and provide project details." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Progress Header */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-2xl font-bold text-foreground">Project Onboarding</h1>
                                <Badge variant="outline">Step {currentStep} of {totalSteps}</Badge>
                            </div>
                            <Progress value={progress} className="h-3" />

                            {calculateTotal() > 0 && (
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Estimated Investment:</span>
                                    <span className="text-lg font-bold text-primary">{formatPrice(calculateTotal())}</span>
                                </div>
                            )}
                        </div>

                        {/* Main Content */}
                        <Card className="border-border shadow-xl">
                            <CardContent className="p-8">
                                {renderStepContent()}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                                    <Button
                                        variant="outline"
                                        onClick={prevStep}
                                        disabled={currentStep === 1}
                                        className="flex items-center gap-2"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Previous
                                    </Button>

                                    {currentStep < totalSteps ? (
                                        <Button
                                            onClick={nextStep}
                                            disabled={!validateStep(currentStep)}
                                            className="flex items-center gap-2"
                                        >
                                            Next
                                            <ChevronRight className="w-4 h-4" />
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={!validateStep(currentStep) || isSubmitting}
                                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                                        >
                                            {isSubmitting ? (
                                                "Submitting..."
                                            ) : (
                                                <>
                                                    Submit Project
                                                    <ArrowRight className="w-4 h-4" />
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ModernOnboarding;
