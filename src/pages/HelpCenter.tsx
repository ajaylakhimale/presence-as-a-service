import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    HelpCircle,
    Search,
    MessageCircle,
    Mail,
    Phone,
    Clock,
    CheckCircle,
    AlertTriangle,
    Users,
    Settings,
    CreditCard,
    Code,
    Monitor,
    FileText,
    Lightbulb,
    Zap,
    Shield,
    HeadphonesIcon
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { siteConfig } from '@/config/site';
import { useState } from 'react';

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'medium'
    });

    const categories = [
        { id: 'all', name: 'All Topics', icon: HelpCircle },
        { id: 'getting-started', name: 'Getting Started', icon: Lightbulb },
        { id: 'projects', name: 'Projects & Development', icon: Code },
        { id: 'billing', name: 'Billing & Payments', icon: CreditCard },
        { id: 'technical', name: 'Technical Support', icon: Settings },
        { id: 'account', name: 'Account Management', icon: Users },
    ];

    const faqs = [
        {
            category: 'getting-started',
            question: 'How do I get started with my web development project?',
            answer: 'Getting started is easy! First, contact us through our contact form or schedule a consultation. We\'ll discuss your project requirements, timeline, and budget. Once we understand your needs, we\'ll provide a detailed proposal and project timeline.'
        },
        {
            category: 'getting-started',
            question: 'What information do I need to provide for my project?',
            answer: 'We\'ll need details about your business, target audience, desired features, design preferences, timeline, and budget. Don\'t worry if you\'re not sure about everything - we\'ll guide you through the process during our initial consultation.'
        },
        {
            category: 'projects',
            question: 'How long does a typical web development project take?',
            answer: 'Project timelines vary based on complexity and scope. A simple business website typically takes 2-4 weeks, while complex web applications can take 8-16 weeks or more. We\'ll provide a detailed timeline during project planning.'
        },
        {
            category: 'projects',
            question: 'Can I request changes during development?',
            answer: 'Yes! We encourage feedback throughout the development process. Minor adjustments are typically included, while major scope changes may affect timeline and cost. We\'ll discuss any changes before implementing them.'
        },
        {
            category: 'projects',
            question: 'Will I own the source code and website?',
            answer: 'Absolutely! Once the project is completed and final payment is made, you own all the source code, design files, and intellectual property related to your website. We provide full ownership and can assist with hosting setup.'
        },
        {
            category: 'billing',
            question: 'What are your payment terms?',
            answer: 'We typically require 50% upfront to begin work, with the remaining balance due upon completion. For larger projects, we may arrange milestone-based payments. All payment terms are clearly outlined in your project contract.'
        },
        {
            category: 'billing',
            question: 'Do you offer refunds?',
            answer: 'Our refund policy is designed to be fair to both parties. Refunds may be available for cancellations within 48 hours before work begins. Once development starts, completed work is non-refundable. Please see our Refund Policy for complete details.'
        },
        {
            category: 'billing',
            question: 'What payment methods do you accept?',
            answer: 'We accept major credit cards, bank transfers, and online payment platforms. Payment details will be provided in your project invoice. All transactions are secure and encrypted.'
        },
        {
            category: 'technical',
            question: 'Do you provide ongoing maintenance and support?',
            answer: 'Yes! We offer various maintenance packages including security updates, content updates, performance monitoring, and technical support. We can discuss maintenance options that fit your needs and budget.'
        },
        {
            category: 'technical',
            question: 'What technologies do you use for web development?',
            answer: 'We use modern, industry-standard technologies including React, TypeScript, Node.js, and various databases. We choose the best technology stack based on your project requirements and long-term goals.'
        },
        {
            category: 'technical',
            question: 'Will my website be mobile-friendly and responsive?',
            answer: 'Absolutely! All websites we develop are fully responsive and optimized for mobile, tablet, and desktop devices. We follow mobile-first design principles to ensure excellent user experience across all platforms.'
        },
        {
            category: 'technical',
            question: 'My website is not loading or loading slowly. What should I do?',
            answer: 'If your website is not loading, try these steps: 1) Clear your browser cache and cookies, 2) Try accessing the site in an incognito/private browser window, 3) Check your internet connection, 4) Try a different browser or device. If the issue persists, contact our support team as there may be a server or hosting issue that needs our attention.'
        },
        {
            category: 'account',
            question: 'How do I access my project files and updates?',
            answer: 'We provide access to project files through secure client portals or version control systems. You\'ll receive regular updates on progress and can review work as it\'s completed.'
        },
        {
            category: 'account',
            question: 'Can I get references or see examples of your previous work?',
            answer: 'Certainly! We have a portfolio of completed projects and can provide references upon request. We respect client confidentiality, so some work may be shown without identifying information.'
        }
    ];

    const contactOptions = [
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Get help via email with detailed responses',
            contact: siteConfig.contact.email,
            responseTime: 'Within 24 hours',
            action: 'Send Email'
        },
        {
            icon: MessageCircle,
            title: 'Live Chat',
            description: 'Chat with our support team in real-time',
            contact: 'Available on website',
            responseTime: 'Immediate',
            action: 'Start Chat'
        }
    ];

    const filteredFaqs = selectedCategory === 'all'
        ? faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : faqs.filter(faq =>
            faq.category === selectedCategory &&
            (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Contact form submitted:', contactForm);
        alert('Thank you for your message! We\'ll get back to you within 24 hours.');
        setContactForm({
            name: '',
            email: '',
            subject: '',
            message: '',
            priority: 'medium'
        });
    };

    return (
        <Layout>
            <Helmet>
                <title>Help Center | {siteConfig.fullName}</title>
                <meta
                    name="description"
                    content="Find answers to common questions, get support, and resolve issues with our comprehensive help center. Contact our support team for personalized assistance."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <ParticleEffect />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20">
                                <HelpCircle className="w-4 h-4 mr-2" />
                                Support & Help
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent mb-6">
                            Help Center
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Find answers to common questions, get support for your projects, and learn how to make the most of our web development services.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search for help articles, FAQs, or topics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 pr-4 py-3 text-lg border-border/50 focus:border-primary/50 bg-card/50 backdrop-blur-sm"
                            />
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Quick Contact Options */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <HeadphonesIcon className="w-6 h-6 mr-3 text-primary" />
                                    Get Help Now
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {contactOptions.map((option, index) => (
                                        <div key={index} className="text-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                                            <option.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                            <h4 className="font-semibold mb-2">{option.title}</h4>
                                            <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                                            <p className="text-xs text-muted-foreground mb-3">
                                                <strong>Response time:</strong> {option.responseTime}
                                            </p>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    if (option.title === 'Email Support') {
                                                        window.location.href = `mailto:${option.contact}?subject=Help Center Support Request`;
                                                    } else if (option.title === 'Live Chat') {
                                                        // Placeholder for live chat functionality - could integrate with Intercom, Crisp, etc.
                                                        alert('Live chat will be available soon! For immediate assistance, please use email support.');
                                                    }
                                                }}
                                            >
                                                {option.action}
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Categories */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Settings className="w-6 h-6 mr-3 text-primary" />
                                    Browse by Category
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-3">
                                    {categories.map((category) => (
                                        <Button
                                            key={category.id}
                                            variant={selectedCategory === category.id ? "default" : "outline"}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className="flex items-center space-x-2"
                                        >
                                            <category.icon className="w-4 h-4" />
                                            <span>{category.name}</span>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* FAQ Section */}
                        <Card id="faq-section" className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <HelpCircle className="w-6 h-6 mr-3 text-primary" />
                                    Frequently Asked Questions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {filteredFaqs.length === 0 ? (
                                    <div className="text-center py-8">
                                        <AlertTriangle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                        <p className="text-muted-foreground">No FAQs found matching your search criteria.</p>
                                        <Button
                                            variant="outline"
                                            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                            className="mt-4"
                                        >
                                            Clear Filters
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {filteredFaqs.map((faq, index) => (
                                            <details
                                                key={index}
                                                className="group border border-border/30 rounded-lg p-4 hover:bg-muted/20 transition-colors"
                                            >
                                                <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg list-none">
                                                    <span className="flex items-start">
                                                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                                        {faq.question}
                                                    </span>
                                                    <span className="ml-4 text-muted-foreground group-open:rotate-180 transition-transform">
                                                        ▼
                                                    </span>
                                                </summary>
                                                <div className="mt-4 pl-8 text-muted-foreground">
                                                    {faq.answer}
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Common Issues */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Zap className="w-6 h-6 mr-3 text-primary" />
                                    Quick Solutions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                                        <Monitor className="w-8 h-8 text-green-500 mb-3" />
                                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Website Not Loading</h4>
                                        <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                                            Try clearing your browser cache, checking your internet connection, or trying a different browser.
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                setSelectedCategory('technical');
                                                setSearchQuery('website not loading');
                                                document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            Learn More
                                        </Button>
                                    </div>

                                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                        <Settings className="w-8 h-8 text-blue-500 mb-3" />
                                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Need Project Updates</h4>
                                        <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                            Contact your project manager or check your client portal for the latest project status and updates.
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                window.location.href = `mailto:${siteConfig.contact.email}?subject=Project Update Request&body=Hello, I would like to get an update on my project status. Please provide the latest information about my project progress.`;
                                            }}
                                        >
                                            Contact Team
                                        </Button>
                                    </div>

                                    <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                                        <CreditCard className="w-8 h-8 text-purple-500 mb-3" />
                                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Billing Questions</h4>
                                        <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                                            Check your email for invoices or contact our billing team for payment-related inquiries.
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                setSelectedCategory('billing');
                                                setSearchQuery('');
                                                document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            View Billing FAQ
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Form */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                                    Still Need Help?
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-8 lg:grid-cols-2">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-4">Send us a message</h4>
                                        <form onSubmit={handleContactSubmit} className="space-y-4">
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <Input
                                                    placeholder="Your Name"
                                                    value={contactForm.name}
                                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                                    required
                                                />
                                                <Input
                                                    type="email"
                                                    placeholder="Your Email"
                                                    value={contactForm.email}
                                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <Input
                                                    placeholder="Subject"
                                                    value={contactForm.subject}
                                                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                                    required
                                                />
                                                <select
                                                    value={contactForm.priority}
                                                    onChange={(e) => setContactForm({ ...contactForm, priority: e.target.value })}
                                                    className="px-3 py-2 border border-border rounded-md bg-background"
                                                >
                                                    <option value="low">Low Priority</option>
                                                    <option value="medium">Medium Priority</option>
                                                    <option value="high">High Priority</option>
                                                    <option value="urgent">Urgent</option>
                                                </select>
                                            </div>
                                            <Textarea
                                                placeholder="Describe your issue or question in detail..."
                                                value={contactForm.message}
                                                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                                rows={4}
                                                required
                                            />
                                            <Button type="submit" className="w-full">
                                                Send Message
                                            </Button>
                                        </form>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-semibold text-lg mb-4">Response Times</h4>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                                    <span className="flex items-center">
                                                        <Clock className="w-4 h-4 mr-2 text-green-500" />
                                                        Low Priority
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">48 hours</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                                    <span className="flex items-center">
                                                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                                                        Medium Priority
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">24 hours</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                                    <span className="flex items-center">
                                                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                                                        High Priority
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">4 hours</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                                    <span className="flex items-center">
                                                        <Clock className="w-4 h-4 mr-2 text-red-500" />
                                                        Urgent
                                                    </span>
                                                    <span className="text-sm text-muted-foreground">1 hour</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                            <Shield className="w-6 h-6 text-blue-500 mb-2" />
                                            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Emergency Support</h4>
                                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                                For critical website issues affecting your business, call us directly at {siteConfig.contact.phone} for immediate assistance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Resources */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <FileText className="w-6 h-6 mr-3 text-primary" />
                                    Additional Resources
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                                    <a
                                        href="/tos"
                                        className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <FileText className="w-6 h-6 text-primary mb-2" />
                                        <h4 className="font-semibold mb-1">Terms of Service</h4>
                                        <p className="text-sm text-muted-foreground">Read our complete terms and conditions</p>
                                    </a>

                                    <a
                                        href="/privacy"
                                        className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <Shield className="w-6 h-6 text-primary mb-2" />
                                        <h4 className="font-semibold mb-1">Privacy Policy</h4>
                                        <p className="text-sm text-muted-foreground">Learn how we protect your information</p>
                                    </a>

                                    <a
                                        href="/refund"
                                        className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <CreditCard className="w-6 h-6 text-primary mb-2" />
                                        <h4 className="font-semibold mb-1">Refund Policy</h4>
                                        <p className="text-sm text-muted-foreground">Understand our refund terms and process</p>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HelpCenter;
