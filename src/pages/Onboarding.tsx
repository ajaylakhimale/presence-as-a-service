import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  ChevronRight,
  ChevronLeft,
  Building2,
  Globe,
  Settings,
  Palette,
  FileText,
  Clock,
  CheckCircle,
  Upload,
  CreditCard,
  Shield,
  Database,
  ShoppingCart,
  Calendar,
  Mail,
  MessageCircle,
  BarChart,
  Bell,
  Smartphone,
  Zap,
  Moon,
  Plus,
  Edit,
  Check,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Helmet } from 'react-helmet-async';

interface FormData {
  // Step 1: Business Overview
  businessName: string;
  businessDescription: string;
  websiteGoals: string;
  hasExistingWebsite: string;

  // Step 2: Type of Web Project
  projectTypes: string[];
  customProjectType: string;

  // Step 3: Feature Requirements
  features: string[];
  customFeature: string;
  apiIntegration: string;

  // Step 4: Design Preferences
  logo: File | null;
  colorPalette: string[];
  fontPreference: string;
  styleTheme: string;
  inspirationLinks: string;
  referenceFiles: File[];

  // Step 5: Pages Required
  pages: string[];
  customPages: string;

  // Step 6: Timeline & Budget
  timeline: string;
  budget: string;
}

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    businessDescription: '',
    websiteGoals: '',
    hasExistingWebsite: '',
    projectTypes: [],
    customProjectType: '',
    features: [],
    customFeature: '',
    apiIntegration: '',
    logo: null,
    colorPalette: [],
    fontPreference: '',
    styleTheme: '',
    inspirationLinks: '',
    referenceFiles: [],
    pages: [],
    customPages: '',
    timeline: '',
    budget: ''
  });

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem('onboarding-form-data', JSON.stringify(formData));
  }, [formData]);

  // Load saved data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('onboarding-form-data');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    localStorage.removeItem('onboarding-form-data');
    toast({
      title: "Project Brief Submitted!",
      description: "We'll review your requirements and get back to you within 24 hours.",
    });
    navigate('/client-dashboard');
  };

  const projectTypeOptions = [
    { id: 'landing', label: 'Landing Page', icon: Globe },
    { id: 'company', label: 'Company Website', icon: Building2 },
    { id: 'portfolio', label: 'Portfolio', icon: FileText },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'dashboard', label: 'Dashboard/Admin Panel', icon: BarChart },
    { id: 'booking', label: 'Booking System', icon: Calendar },
    { id: 'webapp', label: 'Custom Web App', icon: Zap },
    { id: 'other', label: 'Other', icon: Plus }
  ];

  const featureOptions = [
    { id: 'contact', label: 'Contact Form', icon: Mail },
    { id: 'auth', label: 'Authentication/Login', icon: Shield },
    { id: 'admin', label: 'Admin Panel', icon: Settings },
    { id: 'payments', label: 'Payments (Stripe, Razorpay)', icon: CreditCard },
    { id: 'booking', label: 'Booking System', icon: Calendar },
    { id: 'upload', label: 'File Upload', icon: Upload },
    { id: 'catalog', label: 'Product Catalog', icon: Database },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'seo', label: 'SEO Optimization', icon: BarChart },
    { id: 'analytics', label: 'Analytics Integration', icon: BarChart },
    { id: 'notifications', label: 'Push Notifications', icon: Bell },
    { id: 'api', label: 'API Integration', icon: Zap },
    { id: 'chat', label: 'Chat Support', icon: MessageCircle },
    { id: 'realtime', label: 'Real-time Updates', icon: Zap },
    { id: 'darkmode', label: 'Dark Mode', icon: Moon },
    { id: 'custom', label: 'Other Custom Feature', icon: Plus }
  ];

  const styleThemes = [
    { id: 'minimalistic', label: 'Minimalistic', description: 'Clean, simple, focused' },
    { id: 'corporate', label: 'Corporate', description: 'Professional, trustworthy' },
    { id: 'colorful', label: 'Colorful', description: 'Vibrant, energetic' },
    { id: 'luxury', label: 'Luxury', description: 'Premium, elegant' },
    { id: 'futuristic', label: 'Bold & Futuristic', description: 'Modern, innovative' }
  ];

  const pageOptions = [
    'Homepage', 'About Us', 'Services', 'Pricing', 'Contact',
    'FAQ', 'Blog', 'Product/Service Pages', 'Dashboard', 'Other'
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Business Overview</CardTitle>
              <p className="text-muted-foreground">Tell us about your business and vision</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="businessName" className="text-sm font-medium">Business Name *</Label>
                <Input
                  id="businessName"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="businessDescription" className="text-sm font-medium">Briefly describe your business *</Label>
                <Textarea
                  id="businessDescription"
                  placeholder="What does your business do? What products or services do you offer?"
                  value={formData.businessDescription}
                  onChange={(e) => updateFormData('businessDescription', e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="websiteGoals" className="text-sm font-medium">What do you want to achieve with this website or app? *</Label>
                <Textarea
                  id="websiteGoals"
                  placeholder="e.g., Generate leads, showcase portfolio, sell products online, improve brand presence..."
                  value={formData.websiteGoals}
                  onChange={(e) => updateFormData('websiteGoals', e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label className="text-sm font-medium mb-4 block">Do you already have a website or domain? *</Label>
                <RadioGroup
                  value={formData.hasExistingWebsite}
                  onValueChange={(value) => updateFormData('hasExistingWebsite', value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Type of Web Project</CardTitle>
              <p className="text-muted-foreground">Select all that apply to your project</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectTypeOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = formData.projectTypes.includes(option.id);
                  return (
                    <div
                      key={option.id}
                      onClick={() => {
                        const updated = isSelected
                          ? formData.projectTypes.filter(t => t !== option.id)
                          : [...formData.projectTypes, option.id];
                        updateFormData('projectTypes', updated);
                      }}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${isSelected
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border hover:border-primary/50'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`h-6 w-6 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className={`font-medium ${isSelected ? 'text-primary' : ''}`}>
                          {option.label}
                        </span>
                        {isSelected && <Check className="h-5 w-5 text-primary ml-auto" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {formData.projectTypes.includes('other') && (
                <div className="mt-6">
                  <Label htmlFor="customProjectType" className="text-sm font-medium">Describe your custom project type</Label>
                  <Input
                    id="customProjectType"
                    placeholder="Tell us about your specific project needs"
                    value={formData.customProjectType}
                    onChange={(e) => updateFormData('customProjectType', e.target.value)}
                    className="mt-2"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Feature Requirements</CardTitle>
              <p className="text-muted-foreground">Choose the features you need for your project</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {featureOptions.map((feature) => {
                  const Icon = feature.icon;
                  const isSelected = formData.features.includes(feature.id);
                  return (
                    <div
                      key={feature.id}
                      onClick={() => {
                        const updated = isSelected
                          ? formData.features.filter(f => f !== feature.id)
                          : [...formData.features, feature.id];
                        updateFormData('features', updated);
                      }}
                      className={`cursor-pointer p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${isSelected
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                        }`}
                    >
                      <Icon className={`h-5 w-5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-sm font-medium ${isSelected ? 'text-primary' : ''}`}>
                        {feature.label}
                      </span>
                      {isSelected && <Check className="h-4 w-4 text-primary ml-auto" />}
                    </div>
                  );
                })}
              </div>

              {formData.features.includes('api') && (
                <div>
                  <Label htmlFor="apiIntegration" className="text-sm font-medium">API Integration Details</Label>
                  <Input
                    id="apiIntegration"
                    placeholder="Which APIs do you need to integrate? (e.g., Payment gateway, Social media, CRM)"
                    value={formData.apiIntegration}
                    onChange={(e) => updateFormData('apiIntegration', e.target.value)}
                    className="mt-2"
                  />
                </div>
              )}

              {formData.features.includes('custom') && (
                <div>
                  <Label htmlFor="customFeature" className="text-sm font-medium">Custom Feature Description</Label>
                  <Textarea
                    id="customFeature"
                    placeholder="Describe your custom feature requirements"
                    value={formData.customFeature}
                    onChange={(e) => updateFormData('customFeature', e.target.value)}
                    className="mt-2"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Design Preferences</CardTitle>
              <p className="text-muted-foreground">Help us understand your visual preferences</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium">Upload Your Logo (Optional)</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
                  <input type="file" className="hidden" accept="image/*" />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-4 block">Style Theme *</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {styleThemes.map((theme) => (
                    <div
                      key={theme.id}
                      onClick={() => updateFormData('styleTheme', theme.id)}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.styleTheme === theme.id
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border hover:border-primary/50'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-medium ${formData.styleTheme === theme.id ? 'text-primary' : ''}`}>
                            {theme.label}
                          </h4>
                          <p className="text-sm text-muted-foreground">{theme.description}</p>
                        </div>
                        {formData.styleTheme === theme.id && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="inspirationLinks" className="text-sm font-medium">Links to websites you like (Optional)</Label>
                <Textarea
                  id="inspirationLinks"
                  placeholder="Share URLs of websites that inspire you or match your vision"
                  value={formData.inspirationLinks}
                  onChange={(e) => updateFormData('inspirationLinks', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-sm font-medium">Reference Files/Sketches (Optional)</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Upload wireframes, sketches, or design references</p>
                  <input type="file" className="hidden" multiple accept="image/*,.pdf,.doc,.docx" />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Pages Required</CardTitle>
              <p className="text-muted-foreground">Select all pages you need for your website</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {pageOptions.map((page) => {
                  const isSelected = formData.pages.includes(page);
                  return (
                    <div
                      key={page}
                      onClick={() => {
                        const updated = isSelected
                          ? formData.pages.filter(p => p !== page)
                          : [...formData.pages, page];
                        updateFormData('pages', updated);
                      }}
                      className={`cursor-pointer p-3 rounded-lg border-2 transition-all text-center ${isSelected
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                        }`}
                    >
                      <span className={`text-sm font-medium ${isSelected ? 'text-primary' : ''}`}>
                        {page}
                      </span>
                      {isSelected && (
                        <Check className="h-4 w-4 text-primary mx-auto mt-1" />
                      )}
                    </div>
                  );
                })}
              </div>

              {formData.pages.includes('Other') && (
                <div>
                  <Label htmlFor="customPages" className="text-sm font-medium">Describe other pages you need</Label>
                  <Textarea
                    id="customPages"
                    placeholder="List any additional pages you need"
                    value={formData.customPages}
                    onChange={(e) => updateFormData('customPages', e.target.value)}
                    className="mt-2"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 6:
        return (
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Timeline & Budget</CardTitle>
              <p className="text-muted-foreground">Help us understand your project timeline and budget</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium mb-4 block">Project Timeline *</Label>
                <div className="grid grid-cols-2 gap-4">
                  {['1 Week', '2–3 Weeks', '1 Month', 'Flexible'].map((option) => (
                    <div
                      key={option}
                      onClick={() => updateFormData('timeline', option)}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all text-center ${formData.timeline === option
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border hover:border-primary/50'
                        }`}
                    >
                      <span className={`font-medium ${formData.timeline === option ? 'text-primary' : ''}`}>
                        {option}
                      </span>
                      {formData.timeline === option && (
                        <Check className="h-5 w-5 text-primary mx-auto mt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium mb-4 block">Budget Range *</Label>
                <div className="grid grid-cols-2 gap-4">
                  {['Under $500', '$500–$1,000', '$1,000–$5,000', '$5,000+'].map((option) => (
                    <div
                      key={option}
                      onClick={() => updateFormData('budget', option)}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all text-center ${formData.budget === option
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border hover:border-primary/50'
                        }`}
                    >
                      <span className={`font-medium ${formData.budget === option ? 'text-primary' : ''}`}>
                        {option}
                      </span>
                      {formData.budget === option && (
                        <Check className="h-5 w-5 text-primary mx-auto mt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 7:
        return (
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Review & Submit</CardTitle>
              <p className="text-muted-foreground">Please review your project details before submitting</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Summary sections */}
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      Business Overview
                    </h4>
                    <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formData.businessName} - {formData.businessDescription.slice(0, 100)}...
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Project Type
                    </h4>
                    <Button variant="ghost" size="sm" onClick={() => setCurrentStep(2)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.projectTypes.map(type => (
                      <Badge key={type} variant="secondary">{type}</Badge>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Features ({formData.features.length})
                    </h4>
                    <Button variant="ghost" size="sm" onClick={() => setCurrentStep(3)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {formData.features.slice(0, 5).map(feature => (
                      <Badge key={feature} variant="outline" className="text-xs">{feature}</Badge>
                    ))}
                    {formData.features.length > 5 && (
                      <Badge variant="outline" className="text-xs">+{formData.features.length - 5} more</Badge>
                    )}
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Timeline & Budget
                    </h4>
                    <Button variant="ghost" size="sm" onClick={() => setCurrentStep(6)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Timeline: {formData.timeline} | Budget: {formData.budget}
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <Button
                  onClick={handleSubmit}
                  className="w-full h-12 text-lg font-medium"
                  size="lg"
                >
                  Submit My Project Brief
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  We'll review your requirements and get back to you within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Project Requirement Form | Get Your Custom Quote</title>
        <meta name="description" content="Tell us about your project. Fill out our requirement form for a tailored web or mobile solution quote." />
        <meta property="og:title" content="Project Requirement Form | macro presence" />
        <meta property="og:description" content="Share your project details for a custom proposal." />
        <meta property="og:image" content="https://macro-presence.dev/og-requirement.jpg" />
        <meta property="og:url" content="https://macro-presence.dev/onboarding" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@macro_presence" />
        <meta name="twitter:image" content="https://macro-presence.dev/og-requirement.jpg" />
      </Helmet>
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">W</span>
              </div>
              <h1 className="text-xl font-bold">WPaaS Onboarding</h1>
            </div>
            <Button variant="ghost" onClick={() => navigate('/')}>
              ← Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b bg-background/50">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {renderStep()}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Onboarding;