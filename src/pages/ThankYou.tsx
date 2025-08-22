import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';

const ThankYou = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    const getContent = () => {
        switch (type) {
            case 'onboarding':
                return {
                    title: "Application Submitted Successfully!",
                    subtitle: "Thank you for choosing our services",
                    description: "We've received your project application and our team is already reviewing your requirements.",
                    nextSteps: [
                        "Our team will review your application within 24 hours",
                        "We'll prepare a detailed project proposal based on your requirements",
                        "You'll receive an email with next steps and project timeline",
                        "We'll schedule a consultation call to discuss your project in detail"
                    ]
                };
            case 'contact':
                return {
                    title: "Message Sent Successfully!",
                    subtitle: "We'll get back to you soon",
                    description: "Thank you for reaching out to us. Our team has received your message.",
                    nextSteps: [
                        "We'll respond to your inquiry within 24 hours",
                        "Our team will review your message carefully",
                        "You'll receive a detailed response via email",
                        "We're here to help with any questions you may have"
                    ]
                };
            default:
                return {
                    title: "Thank You!",
                    subtitle: "Your submission was successful",
                    description: "We've received your information and will be in touch soon.",
                    nextSteps: [
                        "We'll review your submission",
                        "Our team will get back to you soon",
                        "Thank you for your interest in our services"
                    ]
                };
        }
    };

    const content = getContent();

    return (
        <Layout>
            <Helmet>
                <title>Thank You | Presence as a Service</title>
                <meta name="description" content="Thank you for your submission. We'll be in touch soon." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* Success Icon */}
                        <div className="mb-8">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/20 flex items-center justify-center">
                                <CheckCircle className="w-10 h-10 text-success" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {content.title}
                            </h1>
                            <p className="text-xl text-primary font-semibold mb-4">
                                {content.subtitle}
                            </p>
                            <p className="text-muted-foreground">
                                {content.description}
                            </p>
                        </div>

                        {/* What Happens Next */}
                        <Card className="border-border shadow-lg mb-8">
                            <CardContent className="p-8">
                                <h2 className="text-xl font-semibold text-foreground mb-6">What happens next?</h2>
                                <div className="space-y-4">
                                    {content.nextSteps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-4 text-left">
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-sm font-semibold text-primary">{index + 1}</span>
                                            </div>
                                            <p className="text-muted-foreground">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <Card className="border-border shadow-lg mb-8">
                            <CardContent className="p-8">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Need immediate assistance?</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                        <Mail className="w-4 h-4" />
                                        <span>hello@presenceasaservice.com</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                        <Phone className="w-4 h-4" />
                                        <span>+91 9876543210</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>Monday - Friday, 9:00 AM - 6:00 PM IST</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Call to Action */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild>
                                    <Link to="/">
                                        Back to Home
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link to="/pricing">
                                        View Our Services
                                    </Link>
                                </Button>
                            </div>

                            {type === 'onboarding' && (
                                <p className="text-sm text-muted-foreground mt-4">
                                    In the meantime, feel free to explore our{' '}
                                    <Link to="/tech-stack" className="text-primary hover:underline">
                                        technology stack
                                    </Link>{' '}
                                    or check out our{' '}
                                    <Link to="/testimonials" className="text-primary hover:underline">
                                        client testimonials
                                    </Link>
                                    .
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ThankYou;
