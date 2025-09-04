import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Users, Lock, Share2, Bell, Settings, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { siteConfig } from '@/config/site';

const PrivacyPolicy = () => {
    const lastUpdated = "September 3, 2025";

    return (
        <Layout>
            <Helmet>
                <title>Privacy Policy | {siteConfig.fullName}</title>
                <meta
                    name="description"
                    content="Learn how we collect, use, and protect your personal information. Our commitment to your privacy and data security in our web development services."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <ParticleEffect />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20">
                                <Shield className="w-4 h-4 mr-2" />
                                Privacy & Security
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                            Your privacy is important to us. This Privacy Policy explains how {siteConfig.name} collects,
                            uses, and protects your information when you use our web development services.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Last Updated:</strong> {lastUpdated}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Overview Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Shield className="w-6 h-6 mr-3 text-primary" />
                                    Our Privacy Commitment
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    At {siteConfig.name}, we are committed to protecting your privacy and ensuring the security of your personal information.
                                    We believe in transparency about how we collect, use, and share your data.
                                </p>
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg text-center">
                                        <Lock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                        <h4 className="font-semibold text-green-700 dark:text-green-300">We Don't Sell Data</h4>
                                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                                            Your personal information is never sold to third parties.
                                        </p>
                                    </div>
                                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg text-center">
                                        <Eye className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                        <h4 className="font-semibold text-blue-700 dark:text-blue-300">Understanding Use</h4>
                                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                            We use data to understand your needs and improve our services.
                                        </p>
                                    </div>
                                    <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg text-center">
                                        <Share2 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                        <h4 className="font-semibold text-purple-700 dark:text-purple-300">Portfolio Showcase</h4>
                                        <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                                            We may showcase our work with your permission.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Information Collection Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Database className="w-6 h-6 mr-3 text-primary" />
                                    Information We Collect
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                    We collect information to provide better services and communicate effectively with our clients.
                                </p>

                                <div className="space-y-6">
                                    <div className="border-l-4 border-primary pl-4">
                                        <h4 className="font-semibold text-lg mb-3">Information You Provide Directly</h4>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <h5 className="font-medium mb-2">Contact Information:</h5>
                                                <ul className="text-sm text-muted-foreground space-y-1">
                                                    <li>• Name and email address</li>
                                                    <li>• Phone number (if provided)</li>
                                                    <li>• Company/business name</li>
                                                    <li>• Mailing address (if needed)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-2">Project Information:</h5>
                                                <ul className="text-sm text-muted-foreground space-y-1">
                                                    <li>• Project requirements and goals</li>
                                                    <li>• Business industry and type</li>
                                                    <li>• Budget and timeline preferences</li>
                                                    <li>• Technical specifications</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-l-4 border-primary pl-4">
                                        <h4 className="font-semibold text-lg mb-3">Information Collected Automatically</h4>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div>
                                                <h5 className="font-medium mb-2">Website Usage:</h5>
                                                <ul className="text-sm text-muted-foreground space-y-1">
                                                    <li>• Pages visited and time spent</li>
                                                    <li>• Browser type and version</li>
                                                    <li>• Device information</li>
                                                    <li>• IP address and location</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-medium mb-2">Communication Data:</h5>
                                                <ul className="text-sm text-muted-foreground space-y-1">
                                                    <li>• Email correspondence</li>
                                                    <li>• Meeting recordings (with consent)</li>
                                                    <li>• Chat and support interactions</li>
                                                    <li>• Project documentation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* How We Use Information Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Settings className="w-6 h-6 mr-3 text-primary" />
                                    How We Use Your Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                    We use your information responsibly and only for legitimate business purposes related to providing our services.
                                </p>

                                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg flex items-center">
                                            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                                            Primary Uses
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <div>
                                                    <strong className="text-sm">Service Delivery:</strong>
                                                    <p className="text-sm text-muted-foreground">Planning, developing, and delivering your web projects according to your specifications.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <div>
                                                    <strong className="text-sm">Communication:</strong>
                                                    <p className="text-sm text-muted-foreground">Keeping you updated on project progress, sending invoices, and providing support.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <div>
                                                    <strong className="text-sm">Account Management:</strong>
                                                    <p className="text-sm text-muted-foreground">Managing your client account, processing payments, and maintaining project records.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg flex items-center">
                                            <Eye className="w-5 h-5 mr-2 text-blue-500" />
                                            Understanding & Improvement
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <div>
                                                    <strong className="text-sm">Service Improvement:</strong>
                                                    <p className="text-sm text-muted-foreground">Analyzing usage patterns to enhance our website and service offerings.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <div>
                                                    <strong className="text-sm">Industry Insights:</strong>
                                                    <p className="text-sm text-muted-foreground">Understanding market needs to develop better solutions for our clients.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                <div>
                                                    <strong className="text-sm">Quality Assurance:</strong>
                                                    <p className="text-sm text-muted-foreground">Monitoring our performance to ensure we meet our quality standards.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 flex items-center">
                                        <Share2 className="w-5 h-5 mr-2" />
                                        Portfolio & Marketing Use
                                    </h4>
                                    <p className="text-sm text-purple-700 dark:text-purple-300">
                                        We may showcase the work we've built for you in our portfolio, case studies, or marketing materials.
                                        We will always ask for your explicit permission before featuring your project publicly and will
                                        respect any confidentiality requirements you may have.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Information Sharing Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Share2 className="w-6 h-6 mr-3 text-primary" />
                                    Information Sharing & Disclosure
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center">
                                        <Lock className="w-5 h-5 mr-2" />
                                        We Do Not Sell Your Data
                                    </h4>
                                    <p className="text-sm text-red-700 dark:text-red-300">
                                        We never sell, rent, or trade your personal information to third parties for their marketing purposes.
                                        Your data is not a commodity to us—it's a trust you've placed in our care.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg">Limited Sharing Circumstances</h4>
                                    <p className="text-muted-foreground text-sm">
                                        We may share your information only in these specific, limited circumstances:
                                    </p>

                                    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                                        <div className="space-y-3">
                                            <h5 className="font-medium">With Your Consent:</h5>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Portfolio showcases (with explicit permission)</li>
                                                <li>• Case studies and testimonials</li>
                                                <li>• Marketing materials featuring your project</li>
                                                <li>• Industry presentations or conferences</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <h5 className="font-medium">Service Providers:</h5>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Hosting providers (for website deployment)</li>
                                                <li>• Payment processors (for billing)</li>
                                                <li>• Email services (for communication)</li>
                                                <li>• Analytics tools (Google Analytics)</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <h5 className="font-medium">Legal Requirements:</h5>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Court orders or legal process</li>
                                                <li>• Government regulatory requirements</li>
                                                <li>• Protection of our legal rights</li>
                                                <li>• Prevention of fraud or abuse</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <h5 className="font-medium">Business Transfers:</h5>
                                            <ul className="text-sm text-muted-foreground space-y-1">
                                                <li>• Merger or acquisition (with notice)</li>
                                                <li>• Sale of business assets</li>
                                                <li>• Bankruptcy proceedings</li>
                                                <li>• Business restructuring</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Data Security Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Lock className="w-6 h-6 mr-3 text-primary" />
                                    Data Security & Protection
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                    We implement industry-standard security measures to protect your personal information from unauthorized access,
                                    alteration, disclosure, or destruction.
                                </p>

                                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg">Technical Safeguards</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm">SSL/TLS encryption for data transmission</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm">Secure hosting with reputable providers</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm">Regular security updates and patches</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm">Firewall protection and monitoring</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg">Administrative Safeguards</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm">Limited access on a need-to-know basis</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm">Employee training on data privacy</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm">Confidentiality agreements</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                                                <span className="text-sm">Regular security audits and reviews</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Security Limitation</h4>
                                            <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                                                While we implement strong security measures, no system is 100% secure. We continually work to
                                                improve our security practices and will notify you of any significant data breaches as required by law.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Data Retention Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Database className="w-6 h-6 mr-3 text-primary" />
                                    Data Retention & Deletion
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We retain your information only as long as necessary to provide our services and comply with legal obligations.
                                </p>

                                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                                    <div className="bg-muted/30 p-4 rounded-lg text-center">
                                        <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <h4 className="font-semibold mb-2">Active Projects</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Data retained for the duration of the project plus 1 year for support purposes.
                                        </p>
                                    </div>

                                    <div className="bg-muted/30 p-4 rounded-lg text-center">
                                        <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <h4 className="font-semibold mb-2">Client Records</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Contact and project information retained for 7 years for business and tax purposes.
                                        </p>
                                    </div>

                                    <div className="bg-muted/30 p-4 rounded-lg text-center">
                                        <Bell className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <h4 className="font-semibold mb-2">Marketing Data</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Newsletter and communication preferences retained until you unsubscribe.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-semibold">Data Deletion Rights</h4>
                                    <p className="text-muted-foreground text-sm">
                                        You have the right to request deletion of your personal data. We will honor such requests except where
                                        we have legitimate business needs (such as ongoing projects) or legal obligations to retain the information.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Your Rights Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Users className="w-6 h-6 mr-3 text-primary" />
                                    Your Privacy Rights
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                    You have several rights regarding your personal information. We respect these rights and will respond
                                    to your requests in accordance with applicable law.
                                </p>

                                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg">Access & Control Rights</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <Eye className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-sm">Right to Access:</strong>
                                                    <p className="text-sm text-muted-foreground">Request a copy of the personal information we hold about you.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <Settings className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-sm">Right to Correct:</strong>
                                                    <p className="text-sm text-muted-foreground">Update or correct any inaccurate personal information.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <AlertTriangle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-sm">Right to Delete:</strong>
                                                    <p className="text-sm text-muted-foreground">Request deletion of your personal information (subject to legal requirements).</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg">Communication Rights</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <Bell className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-sm">Opt-Out:</strong>
                                                    <p className="text-sm text-muted-foreground">Unsubscribe from marketing communications at any time.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <Share2 className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-sm">Portfolio Consent:</strong>
                                                    <p className="text-sm text-muted-foreground">Control whether your project is featured in our portfolio.</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start">
                                                <FileText className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                                <div>
                                                    <strong className="text-sm">Data Portability:</strong>
                                                    <p className="text-sm text-muted-foreground">Request your data in a portable format when technically feasible.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">How to Exercise Your Rights</h4>
                                    <p className="text-sm text-blue-700 dark:text-blue-300">
                                        To exercise any of these rights, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="underline">{siteConfig.contact.email}</a>
                                        with "Privacy Request" in the subject line. We will respond within 30 days and may ask for verification of your identity.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Cookies Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Settings className="w-6 h-6 mr-3 text-primary" />
                                    Cookies & Tracking Technologies
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We use cookies and similar technologies to improve your experience on our website and understand how our services are used.
                                </p>

                                <div className="bg-muted/30 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">What We Track</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Website usage and navigation patterns</li>
                                        <li>• Form interactions and conversion rates</li>
                                        <li>• Device and browser information</li>
                                        <li>• Geographic location (general region)</li>
                                    </ul>
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    For detailed information about our cookie practices, please see our
                                    <a href="/cookie-policy" className="text-primary hover:underline ml-1">Cookie Policy</a>.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Third-Party Services Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Share2 className="w-6 h-6 mr-3 text-primary" />
                                    Third-Party Services
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We use certain third-party services to provide and improve our services. These services have their own privacy policies.
                                </p>

                                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold">Analytics & Performance</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Google Analytics (website usage)</li>
                                            <li>• Performance monitoring tools</li>
                                            <li>• Error tracking services</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold">Communication & Business</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            <li>• Email service providers</li>
                                            <li>• Payment processors</li>
                                            <li>• Cloud hosting providers</li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    We carefully select our third-party providers and require them to maintain appropriate security and privacy standards.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Contact Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                                    Contact Us About Privacy
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    If you have questions about this Privacy Policy or our privacy practices, please contact us:
                                </p>
                                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                                    <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a></p>
                                    <p><strong>Subject Line:</strong> "Privacy Inquiry"</p>
                                    <p><strong>Response Time:</strong> Within 5 business days</p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    We take privacy concerns seriously and will work with you to address any questions or issues you may have.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Policy Updates Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                                    Changes to This Policy
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                                    legal requirements, or other factors. When we make significant changes, we will notify you by:
                                </p>

                                <ul className="text-muted-foreground space-y-2">
                                    <li className="flex items-start">
                                        <Bell className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-sm">Email notification to active clients</span>
                                    </li>
                                    <li className="flex items-start">
                                        <AlertTriangle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-sm">Prominent notice on our website</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-sm">Updated "Last Modified" date on this page</span>
                                    </li>
                                </ul>

                                <p className="text-muted-foreground text-sm">
                                    Continued use of our services after changes constitutes acceptance of the updated Privacy Policy.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPolicy;
