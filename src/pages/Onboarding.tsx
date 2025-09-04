import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Onboarding = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: '',
        projectDescription: '',
        budget: '',
        timeline: '',
        services: [] as string[],
        websiteUrl: '',
        specialRequirements: ''
    });

    const serviceOptions = [
        'Web Development',
        'UI/UX Design',
        'E-commerce Solution',
        'Mobile App Development',
        'SEO Optimization',
        'Content Management System',
        'Custom Integrations',
        'Maintenance & Support'
    ];

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate form submission delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            toast({
                title: "Onboarding Complete!",
                description: "Thank you for your submission. We'll be in touch soon.",
            });

            navigate('/thank-you');
        } catch (error) {
            toast({
                title: "Submission Failed",
                description: "Please try again or contact us directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Client Onboarding - WPaaS</title>
                <meta name="description" content="Complete your project onboarding with WPaaS. Provide your project details and requirements to get started." />
            </Helmet>

            <div className="min-h-screen bg-background pt-20">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Welcome to <span className="text-primary">WPaaS</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Let's get your project started! Please provide us with some details about your business and requirements.
                            </p>
                        </div>

                        {/* Onboarding Form */}
                        <Card className="shadow-xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                    Project Onboarding Form
                                </CardTitle>
                                <CardDescription>
                                    This information helps us create the perfect solution for your business.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Business Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="businessName">Business Name *</Label>
                                            <Input
                                                id="businessName"
                                                type="text"
                                                value={formData.businessName}
                                                onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                                                required
                                                placeholder="Your business name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="contactPerson">Contact Person *</Label>
                                            <Input
                                                id="contactPerson"
                                                type="text"
                                                value={formData.contactPerson}
                                                onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                                                required
                                                placeholder="Your full name"
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                required
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    {/* Business Type */}
                                    <div className="space-y-2">
                                        <Label htmlFor="businessType">Business Type</Label>
                                        <Select value={formData.businessType} onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your business type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="corporate">Corporate Enterprise</SelectItem>
                                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                                <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                                                <SelectItem value="education">Education</SelectItem>
                                                <SelectItem value="logistics">Logistics & Transportation</SelectItem>
                                                <SelectItem value="food">Food & Hospitality</SelectItem>
                                                <SelectItem value="realestate">Real Estate</SelectItem>
                                                <SelectItem value="finance">Finance & Banking</SelectItem>
                                                <SelectItem value="startup">Startups & SaaS</SelectItem>
                                                <SelectItem value="events">Events & Entertainment</SelectItem>
                                                <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                                                <SelectItem value="marketing">Marketing & Advertising</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Project Description */}
                                    <div className="space-y-2">
                                        <Label htmlFor="projectDescription">Project Description *</Label>
                                        <Textarea
                                            id="projectDescription"
                                            value={formData.projectDescription}
                                            onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                                            required
                                            placeholder="Describe your project goals, target audience, and key features you need..."
                                            rows={4}
                                        />
                                    </div>

                                    {/* Services Needed */}
                                    <div className="space-y-3">
                                        <Label>Services Needed</Label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {serviceOptions.map((service) => (
                                                <div key={service} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={service}
                                                        checked={formData.services.includes(service)}
                                                        onCheckedChange={() => handleServiceToggle(service)}
                                                    />
                                                    <Label htmlFor={service} className="text-sm">{service}</Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Budget and Timeline */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="budget">Budget Range</Label>
                                            <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select budget range" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                                                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                                    <SelectItem value="over-50k">Over $50,000</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="timeline">Project Timeline</Label>
                                            <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select timeline" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="asap">ASAP</SelectItem>
                                                    <SelectItem value="1-month">Within 1 month</SelectItem>
                                                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                                                    <SelectItem value="3-6-months">3-6 months</SelectItem>
                                                    <SelectItem value="flexible">Flexible</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Current Website */}
                                    <div className="space-y-2">
                                        <Label htmlFor="websiteUrl">Current Website (if any)</Label>
                                        <Input
                                            id="websiteUrl"
                                            type="url"
                                            value={formData.websiteUrl}
                                            onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
                                            placeholder="https://yourwebsite.com"
                                        />
                                    </div>

                                    {/* Special Requirements */}
                                    <div className="space-y-2">
                                        <Label htmlFor="specialRequirements">Special Requirements or Additional Notes</Label>
                                        <Textarea
                                            id="specialRequirements"
                                            value={formData.specialRequirements}
                                            onChange={(e) => setFormData(prev => ({ ...prev, specialRequirements: e.target.value }))}
                                            placeholder="Any specific requirements, integrations, or concerns we should know about..."
                                            rows={3}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-6">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full md:w-auto"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                "Submitting..."
                                            ) : (
                                                <>
                                                    Complete Onboarding
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Onboarding;