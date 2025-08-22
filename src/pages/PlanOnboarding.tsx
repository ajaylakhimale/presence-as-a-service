import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    ChevronRight,
    ChevronLeft,
    Building2,
    Globe,
    Calendar as CalendarIcon,
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
    Briefcase
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/lib/supabase';
import { submitFormSafely } from '@/lib/form-handler';
import Layout from '@/components/layout/Layout';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Plan configurations
const PLAN_CONFIGS = {
    'basic-website': {
        name: 'Basic Website',
        price: '₹15,999',
        icon: Globe,
        color: 'text-primary',
        features: ['Landing page or simple website (up to 5 pages)', 'Mobile responsive design', 'Basic SEO optimization'],
        specificFields: ['pages_needed', 'content_ready', 'design_preferences']
    },
    'professional-site': {
        name: 'Professional Site',
        price: '₹29,999',
        icon: Star,
        color: 'text-primary',
        features: ['Multi-page website (up to 15 pages)', 'Custom design & branding', 'Blog integration'],
        specificFields: ['pages_needed', 'content_ready', 'design_preferences', 'blog_requirements', 'cms_needed']
    },
    'business-standard': {
        name: 'Business Standard',
        price: '₹49,999',
        icon: Building2,
        color: 'text-primary',
        features: ['Complete business website', 'E-commerce functionality', 'Customer management system'],
        specificFields: ['ecommerce_products', 'payment_methods', 'shipping_zones', 'inventory_management']
    },
    'business-pro': {
        name: 'Business Pro',
        price: '₹79,999',
        icon: Briefcase,
        color: 'text-primary',
        features: ['Advanced e-commerce platform', 'Multi-vendor marketplace capability', 'Marketing automation'],
        specificFields: ['ecommerce_products', 'vendor_management', 'marketing_integrations', 'automation_needs']
    },
    'enterprise-platform': {
        name: 'Enterprise Platform',
        price: '₹1,49,999',
        icon: Building2,
        color: 'text-primary',
        features: ['Custom enterprise application', 'Advanced user management', 'Security compliance'],
        specificFields: ['user_count', 'security_requirements', 'compliance_needs', 'integrations_needed']
    },
    'enterprise-custom': {
        name: 'Enterprise Custom',
        price: 'Custom Quote',
        icon: Crown,
        color: 'text-primary',
        features: ['Fully custom solution', 'Unlimited integrations', 'On-site consultation'],
        specificFields: ['custom_requirements', 'technical_specifications', 'team_size', 'budget_range']
    },
    'connected-launch': {
        name: 'Connected Launch Package',
        price: '₹1,49,999',
        icon: Zap,
        color: 'text-primary',
        features: ['Web App + Mobile App + Basic Admin Dashboard'],
        specificFields: ['platforms_needed', 'app_store_requirements', 'user_authentication', 'integrations_needed']
    },
    'connected-pro': {
        name: 'Connected Pro Suite',
        price: '₹2,99,999',
        icon: Star,
        color: 'text-primary',
        features: ['Web + Mobile + Desktop + Advanced Admin Dashboard'],
        specificFields: ['platforms_needed', 'desktop_os', 'advanced_features', 'integrations_needed', 'notifications']
    },
    'connected-enterprise': {
        name: 'Connected Enterprise',
        price: 'Custom Quote',
        icon: Crown,
        color: 'text-primary',
        features: ['Unlimited integrations', 'White-label solution', 'Enterprise security'],
        specificFields: ['enterprise_requirements', 'security_compliance', 'white_label_needs', 'team_training']
    }
};

const PlanOnboarding = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const planType = searchParams.get('plan');
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        // Contact Information
        contact_name: '',
        contact_email: '',
        contact_phone: '',
        company_name: '',

        // Project Details
        project_title: '',
        project_description: '',
        target_audience: '',
        existing_website_url: '',
        has_existing_branding: false,

        // Timeline & Budget
        preferred_timeline: '',
        specific_date: null,
        additional_budget_available: false,
        additional_budget_amount: '',

        // Plan-specific requirements
        specific_requirements: {}
    });

    const planConfig = planType ? PLAN_CONFIGS[planType] : null;
    const totalSteps = 4;
    const progress = (currentStep / totalSteps) * 100;

    useEffect(() => {
        if (!planType || !planConfig) {
            toast({
                title: "Invalid Plan",
                description: "Please select a valid plan from our pricing page.",
                variant: "destructive"
            });
            navigate('/pricing');
        }
    }, [planType, planConfig, navigate]);

    if (!planConfig) {
        return null;
    }

    const Icon = planConfig.icon;

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSpecificRequirementChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            specific_requirements: {
                ...prev.specific_requirements,
                [field]: value
            }
        }));
    };

    const validateStep = (step: number) => {
        switch (step) {
            case 1:
                return formData.contact_name && formData.contact_email && formData.project_title;
            case 2:
                return formData.project_description && formData.target_audience;
            case 3:
                return formData.preferred_timeline;
            case 4:
                return true; // Review step
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
            plan_type: planType,
            plan_price: planConfig.price,
            ...formData,
            specific_date: formData.specific_date ? format(formData.specific_date, 'yyyy-MM-dd') : null
        };

        try {
            const { data, error } = await supabase
                .from('plan_onboarding_forms')
                .insert([submissionData]);

            if (error) {
                throw error;
            }

            toast({
                title: "Application Submitted Successfully!",
                description: "We'll review your requirements and get back to you within 24 hours.",
            });

            // Redirect to success page or thank you page
            navigate('/thank-you?type=onboarding');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: "Submission Error",
                description: "There was an error submitting your application. Please try again.",
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
                        <div className="text-center mb-6">
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center`}>
                                <Icon className={`w-8 h-8 ${planConfig.color}`} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">{planConfig.name}</h2>
                            <p className="text-lg text-primary font-semibold">{planConfig.price}</p>
                            <div className="flex flex-wrap gap-2 justify-center mt-4">
                                {planConfig.features.slice(0, 3).map((feature, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div>
                                <Label htmlFor="contact_name">Full Name *</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="contact_name"
                                        placeholder="Enter your full name"
                                        className="pl-10"
                                        value={formData.contact_name}
                                        onChange={(e) => handleInputChange('contact_name', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="contact_email">Email Address *</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="contact_email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className="pl-10"
                                        value={formData.contact_email}
                                        onChange={(e) => handleInputChange('contact_email', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="contact_phone">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="contact_phone"
                                        placeholder="+91 9876543210"
                                        className="pl-10"
                                        value={formData.contact_phone}
                                        onChange={(e) => handleInputChange('contact_phone', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="company_name">Company/Organization Name</Label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="company_name"
                                        placeholder="Your company name"
                                        className="pl-10"
                                        value={formData.company_name}
                                        onChange={(e) => handleInputChange('company_name', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="project_title">Project Title *</Label>
                                <div className="relative">
                                    <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="project_title"
                                        placeholder="What would you like to call this project?"
                                        className="pl-10"
                                        value={formData.project_title}
                                        onChange={(e) => handleInputChange('project_title', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-foreground">Project Details</h2>
                            <p className="text-muted-foreground">Tell us about your vision and requirements</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="project_description">Project Description *</Label>
                                <Textarea
                                    id="project_description"
                                    placeholder="Describe your project goals, features you need, and what success looks like for you..."
                                    className="min-h-[120px]"
                                    value={formData.project_description}
                                    onChange={(e) => handleInputChange('project_description', e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="target_audience">Target Audience *</Label>
                                <Textarea
                                    id="target_audience"
                                    placeholder="Who are your customers? What age group, interests, or demographics?"
                                    className="min-h-[80px]"
                                    value={formData.target_audience}
                                    onChange={(e) => handleInputChange('target_audience', e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="existing_website_url">Existing Website (if any)</Label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="existing_website_url"
                                        placeholder="https://your-current-website.com"
                                        className="pl-10"
                                        value={formData.existing_website_url}
                                        onChange={(e) => handleInputChange('existing_website_url', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="has_existing_branding"
                                    checked={formData.has_existing_branding}
                                    onCheckedChange={(checked) => handleInputChange('has_existing_branding', checked)}
                                />
                                <Label htmlFor="has_existing_branding">
                                    I have existing branding (logo, colors, style guide)
                                </Label>
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-foreground">Timeline & Budget</h2>
                            <p className="text-muted-foreground">When do you need this completed?</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label>Preferred Timeline *</Label>
                                <RadioGroup
                                    value={formData.preferred_timeline}
                                    onValueChange={(value) => handleInputChange('preferred_timeline', value)}
                                    className="mt-2"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="asap" id="timeline-asap" />
                                        <Label htmlFor="timeline-asap">As soon as possible</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="flexible" id="timeline-flexible" />
                                        <Label htmlFor="timeline-flexible">I'm flexible with timing</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="specific-date" id="timeline-specific" />
                                        <Label htmlFor="timeline-specific">I have a specific deadline</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {formData.preferred_timeline === 'specific-date' && (
                                <div>
                                    <Label>Specific Deadline</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "w-full justify-start text-left font-normal",
                                                    !formData.specific_date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {formData.specific_date ? format(formData.specific_date, "PPP") : "Pick a date"}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={formData.specific_date}
                                                onSelect={(date) => handleInputChange('specific_date', date)}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            )}

                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="additional_budget_available"
                                        checked={formData.additional_budget_available}
                                        onCheckedChange={(checked) => handleInputChange('additional_budget_available', checked)}
                                    />
                                    <Label htmlFor="additional_budget_available">
                                        I have additional budget available for extra features
                                    </Label>
                                </div>

                                {formData.additional_budget_available && (
                                    <div>
                                        <Label htmlFor="additional_budget_amount">Additional Budget Range</Label>
                                        <RadioGroup
                                            value={formData.additional_budget_amount}
                                            onValueChange={(value) => handleInputChange('additional_budget_amount', value)}
                                            className="mt-2"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="10k-25k" id="budget-10k" />
                                                <Label htmlFor="budget-10k">₹10,000 - ₹25,000</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="25k-50k" id="budget-25k" />
                                                <Label htmlFor="budget-25k">₹25,000 - ₹50,000</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="50k-100k" id="budget-50k" />
                                                <Label htmlFor="budget-50k">₹50,000 - ₹1,00,000</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="100k+" id="budget-100k" />
                                                <Label htmlFor="budget-100k">₹1,00,000+</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <div className="text-center mb-6">
                            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-success" />
                            <h2 className="text-2xl font-bold text-foreground">Review & Submit</h2>
                            <p className="text-muted-foreground">Please review your information before submitting</p>
                        </div>

                        <div className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Icon className={`w-5 h-5 ${planConfig.color}`} />
                                        {planConfig.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Price:</span>
                                            <span className="font-semibold">{planConfig.price}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Contact:</span>
                                            <span>{formData.contact_name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Email:</span>
                                            <span>{formData.contact_email}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Project:</span>
                                            <span>{formData.project_title}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Timeline:</span>
                                            <span className="capitalize">{formData.preferred_timeline.replace('-', ' ')}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="bg-muted/30 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">What happens next?</h4>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• We'll review your requirements within 24 hours</li>
                                    <li>• Our team will prepare a detailed project proposal</li>
                                    <li>• We'll schedule a call to discuss the project</li>
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
                <title>{`${planConfig.name} Onboarding | Presence as a Service`}</title>
                <meta name="description" content={`Start your ${planConfig.name} project. Quick onboarding process to get your project started.`} />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Progress Header */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-2xl font-bold text-foreground">Project Onboarding</h1>
                                <Badge variant="outline">Step {currentStep} of {totalSteps}</Badge>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>

                        {/* Main Content */}
                        <Card className="border-border shadow-lg">
                            <CardContent className="p-8">
                                {renderStepContent()}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between mt-8">
                                    <Button
                                        variant="outline"
                                        onClick={prevStep}
                                        disabled={currentStep === 1}
                                    >
                                        <ChevronLeft className="w-4 h-4 mr-2" />
                                        Previous
                                    </Button>

                                    {currentStep < totalSteps ? (
                                        <Button onClick={nextStep}>
                                            Next
                                            <ChevronRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    ) : (
                                        <Button onClick={handleSubmit} disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                            <ArrowRight className="w-4 h-4 ml-2" />
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

export default PlanOnboarding;
