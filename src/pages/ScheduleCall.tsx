import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { Helmet } from 'react-helmet-async';

interface ScheduleCallProps {
    isModal?: boolean;
    onClose?: () => void;
}

const ScheduleCall = ({ isModal = false, onClose }: ScheduleCallProps) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeframe: '',
        callType: '',
        preferredDate: '',
        preferredTime: '',
        timezone: '',
        message: ''
    });

    const steps = [
        { id: 1, title: 'Personal Info', icon: User },
        { id: 2, title: 'Project Details', icon: MessageSquare },
        { id: 3, title: 'Schedule', icon: Calendar },
        { id: 4, title: 'Confirmation', icon: CheckCircle }
    ];

    const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];

    const timezones = [
        'UTC-08:00 (PST)', 'UTC-05:00 (EST)', 'UTC+00:00 (GMT)',
        'UTC+01:00 (CET)', 'UTC+05:30 (IST)', 'UTC+08:00 (CST)'
    ];

    const projectTypes = [
        'Website Development', 'Web Application', 'E-commerce Store',
        'Mobile App', 'SaaS Platform', 'Portfolio Site', 'Other'
    ];

    const budgetRanges = [
        '$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000',
        '$50,000 - $100,000', '$100,000+', 'Not sure yet'
    ];

    const timeframes = [
        'ASAP', '1-2 weeks', '1 month', '2-3 months', '3-6 months', 'Flexible'
    ];

    const callTypes = [
        { value: 'consultation', label: 'Free Consultation (30 min)', description: 'Discuss your project and get expert advice' },
        { value: 'technical', label: 'Technical Deep Dive (45 min)', description: 'Detailed technical discussion and architecture planning' },
        { value: 'demo', label: 'Product Demo (20 min)', description: 'See our work and capabilities' }
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async () => {
        // Here you would integrate with your calendar system (Calendly, Cal.com, etc.)
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Simulate API call
        setTimeout(() => {
            if (onClose) onClose();
        }, 3000);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <Label htmlFor="company">Company</Label>
                                <Input
                                    id="company"
                                    value={formData.company}
                                    onChange={(e) => handleInputChange('company', e.target.value)}
                                    placeholder="Acme Inc."
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    placeholder="john@acme.com"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="projectType">Project Type *</Label>
                                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select project type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {projectTypes.map(type => (
                                            <SelectItem key={type} value={type}>{type}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="budget">Budget Range</Label>
                                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {budgetRanges.map(range => (
                                            <SelectItem key={range} value={range}>{range}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="timeframe">Project Timeframe</Label>
                            <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="When do you need this completed?" />
                                </SelectTrigger>
                                <SelectContent>
                                    {timeframes.map(time => (
                                        <SelectItem key={time} value={time}>{time}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="message">Project Description</Label>
                            <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => handleInputChange('message', e.target.value)}
                                placeholder="Tell us about your project, goals, and any specific requirements..."
                                rows={4}
                            />
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div>
                            <Label className="text-base font-semibold mb-4 block">Select Call Type *</Label>
                            <div className="space-y-3">
                                {callTypes.map(type => (
                                    <Card
                                        key={type.value}
                                        className={`cursor-pointer transition-all duration-200 ${formData.callType === type.value
                                                ? 'ring-2 ring-primary bg-primary/5'
                                                : 'hover:bg-muted/50'
                                            }`}
                                        onClick={() => handleInputChange('callType', type.value)}
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold">{type.label}</h4>
                                                    <p className="text-sm text-muted-foreground">{type.description}</p>
                                                </div>
                                                {formData.callType === type.value && (
                                                    <CheckCircle className="h-5 w-5 text-primary" />
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="preferredDate">Preferred Date *</Label>
                                <Input
                                    id="preferredDate"
                                    type="date"
                                    value={formData.preferredDate}
                                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                            <div>
                                <Label htmlFor="timezone">Timezone *</Label>
                                <Select value={formData.timezone} onValueChange={(value) => handleInputChange('timezone', value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select timezone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {timezones.map(tz => (
                                            <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <Label className="text-base font-semibold mb-3 block">Preferred Time *</Label>
                            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                                {timeSlots.map(time => (
                                    <Button
                                        key={time}
                                        variant={formData.preferredTime === time ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => handleInputChange('preferredTime', time)}
                                        className="text-sm"
                                    >
                                        {time}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 4:
                if (isSubmitted) {
                    return (
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-title-3 font-bold mb-2">Call Scheduled Successfully!</h3>
                                <p className="text-body text-muted-foreground mb-4">
                                    We've sent a calendar invitation to <strong>{formData.email}</strong>
                                </p>
                                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                                    <p><strong>Date:</strong> {formData.preferredDate}</p>
                                    <p><strong>Time:</strong> {formData.preferredTime} ({formData.timezone})</p>
                                    <p><strong>Type:</strong> {callTypes.find(t => t.value === formData.callType)?.label}</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                You'll receive a confirmation email with the meeting link shortly.
                            </p>
                        </div>
                    );
                }

                return (
                    <div className="space-y-6">
                        <h3 className="text-title-3 font-bold">Review Your Details</h3>
                        <div className="space-y-4 bg-muted/30 rounded-lg p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div><strong>Name:</strong> {formData.name}</div>
                                <div><strong>Email:</strong> {formData.email}</div>
                                <div><strong>Company:</strong> {formData.company || 'Not specified'}</div>
                                <div><strong>Phone:</strong> {formData.phone || 'Not specified'}</div>
                                <div><strong>Project Type:</strong> {formData.projectType}</div>
                                <div><strong>Budget:</strong> {formData.budget || 'Not specified'}</div>
                                <div><strong>Timeframe:</strong> {formData.timeframe || 'Not specified'}</div>
                                <div><strong>Call Type:</strong> {callTypes.find(t => t.value === formData.callType)?.label}</div>
                                <div><strong>Date:</strong> {formData.preferredDate}</div>
                                <div><strong>Time:</strong> {formData.preferredTime}</div>
                                <div><strong>Timezone:</strong> {formData.timezone}</div>
                            </div>
                            {formData.message && (
                                <div className="pt-4 border-t border-border">
                                    <strong>Message:</strong>
                                    <p className="mt-1 text-muted-foreground">{formData.message}</p>
                                </div>
                            )}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const content = (
        <div className="space-y-8">
            {/* Steps Progress */}
            <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = step.id === currentStep;
                    const isCompleted = step.id < currentStep;

                    return (
                        <div key={step.id} className="flex items-center">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${isActive
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : isCompleted
                                        ? 'border-success bg-success text-white'
                                        : 'border-border text-muted-foreground'
                                }`}>
                                {isCompleted ? (
                                    <CheckCircle className="h-5 w-5" />
                                ) : (
                                    <Icon className="h-5 w-5" />
                                )}
                            </div>
                            <span className={`ml-2 text-sm font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {step.title}
                            </span>
                            {index < steps.length - 1 && (
                                <div className={`w-8 h-0.5 mx-4 ${isCompleted ? 'bg-success' : 'bg-border'}`} />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Step Content */}
            <Card>
                <CardHeader>
                    <CardTitle>{steps[currentStep - 1]?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {renderStepContent()}
                </CardContent>
            </Card>

            {/* Navigation */}
            {!isSubmitted && (
                <div className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={handlePrev}
                        disabled={currentStep === 1}
                    >
                        Previous
                    </Button>

                    {currentStep < 4 ? (
                        <Button
                            onClick={handleNext}
                            disabled={
                                (currentStep === 1 && (!formData.name || !formData.email)) ||
                                (currentStep === 2 && !formData.projectType) ||
                                (currentStep === 3 && (!formData.callType || !formData.preferredDate || !formData.preferredTime || !formData.timezone))
                            }
                        >
                            Next
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit}>
                            Schedule Call
                            <Calendar className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </div>
            )}
        </div>
    );

    if (isModal) {
        return content;
    }

    return (
        <Layout>
            <Helmet>
                <title>Schedule a Call - Free Consultation | WPaaS</title>
                <meta name="description" content="Schedule a free consultation with our development team. Discuss your project, get expert advice, and plan your next web application." />
                <meta property="og:title" content="Schedule a Call - Free Consultation" />
                <meta property="og:description" content="Get expert advice for your next web development project" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-hero py-24 overflow-hidden">
                <ParticleEffect />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <Badge className="mb-6 animate-fade-in-up">
                            <Phone className="h-4 w-4 mr-2" />
                            Free Consultation
                        </Badge>
                        <h1 className="text-large-title mb-6 animate-fade-in-up [animation-delay:0.1s]">
                            Schedule Your <span className="text-primary">Free Consultation</span>
                        </h1>
                        <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
                            Get expert advice on your project, discuss technical requirements, and receive a detailed proposal
                            tailored to your business needs.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up [animation-delay:0.3s]">
                            <div className="text-center">
                                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold mb-1">30-45 Minutes</h3>
                                <p className="text-sm text-muted-foreground">Comprehensive discussion</p>
                            </div>
                            <div className="text-center">
                                <User className="h-8 w-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold mb-1">Expert Team</h3>
                                <p className="text-sm text-muted-foreground">Senior developers & architects</p>
                            </div>
                            <div className="text-center">
                                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold mb-1">Free Proposal</h3>
                                <p className="text-sm text-muted-foreground">Detailed project estimate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    {content}
                </div>
            </section>
        </Layout>
    );
};

export default ScheduleCall;
