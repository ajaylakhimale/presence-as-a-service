import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check, Globe, Smartphone, Monitor, Workflow } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Requirements form state type
interface RequirementsFormData {
    platforms: string[];
    features: string;
    contactName: string;
    contactEmail: string;
    company: string;
}

const ConnectedSystemsQuote = () => {
    const [formData, setFormData] = useState<RequirementsFormData>({
        platforms: [],
        features: '',
        contactName: '',
        contactEmail: '',
        company: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const platformOptions = [
        { id: 'web', label: 'Web App', icon: Globe },
        { id: 'mobile', label: 'Mobile App', icon: Smartphone },
        { id: 'desktop', label: 'Desktop App', icon: Monitor },
        { id: 'integrations', label: 'Integrations & Automations', icon: Workflow },
    ];

    const handlePlatformToggle = (id: string) => {
        setFormData(prev => ({
            ...prev,
            platforms: prev.platforms.includes(id)
                ? prev.platforms.filter(p => p !== id)
                : [...prev.platforms, id],
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        // Here you would send the form data to your backend or email service
    };

    return (
        <Layout>
            <section className="py-20 bg-gradient-to-br from-primary/5 to-accent-brand/5">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-title-1 mb-2 text-center">Get Your Connected System Requirements</h2>
                    <p className="text-body text-muted-foreground mb-8 text-center">Tell us what platforms and features you need. We'll help you build the perfect connected system for your business.</p>
                    <Card className="border-2 border-primary/20 shadow-lg">
                        <CardContent className="py-8">
                            {formSubmitted ? (
                                <div className="text-center py-12">
                                    <Check className="mx-auto h-12 w-12 text-primary mb-4" />
                                    <div className="text-xl font-semibold mb-2">Thank you!</div>
                                    <div className="text-muted-foreground">Your requirements have been submitted. We'll be in touch soon.</div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Platform selection */}
                                    <div>
                                        <Label className="block mb-2 text-base font-medium">Which platforms do you need?</Label>
                                        <div className="grid grid-cols-2 gap-4">
                                            {platformOptions.map(opt => {
                                                const Icon = opt.icon;
                                                const selected = formData.platforms.includes(opt.id);
                                                return (
                                                    <button
                                                        type="button"
                                                        key={opt.id}
                                                        onClick={() => handlePlatformToggle(opt.id)}
                                                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all w-full focus:outline-none ${selected ? 'border-primary bg-primary/5 shadow-md' : 'border-border hover:border-primary/50'}`}
                                                    >
                                                        <Icon className={`h-6 w-6 ${selected ? 'text-primary' : 'text-muted-foreground'}`} />
                                                        <span className={`font-medium ${selected ? 'text-primary' : ''}`}>{opt.label}</span>
                                                        {selected && <Check className="h-5 w-5 text-primary ml-auto" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {/* Features */}
                                    <div>
                                        <Label htmlFor="features" className="block mb-2 text-base font-medium">Describe the features you need</Label>
                                        <Textarea
                                            id="features"
                                            name="features"
                                            value={formData.features}
                                            onChange={handleInputChange}
                                            placeholder="e.g. user login, payments, analytics, push notifications, integrations..."
                                            rows={3}
                                            required
                                        />
                                    </div>
                                    {/* Contact Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="contactName" className="block mb-2">Your Name</Label>
                                            <Input
                                                id="contactName"
                                                name="contactName"
                                                value={formData.contactName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="contactEmail" className="block mb-2">Email</Label>
                                            <Input
                                                id="contactEmail"
                                                name="contactEmail"
                                                type="email"
                                                value={formData.contactEmail}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="company" className="block mb-2">Company (optional)</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="pt-4 text-center">
                                        <Button type="submit" className="btn-primary px-10 py-4 text-lg">Submit Requirements</Button>
                                    </div>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </section>
        </Layout>
    );
};

export default ConnectedSystemsQuote;
