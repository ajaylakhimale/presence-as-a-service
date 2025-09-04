import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Shield, Clock, AlertTriangle, CheckCircle, XCircle, DollarSign, FileText } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { siteConfig } from '@/config/site';

const RefundPolicy = () => {
    const lastUpdated = "September 3, 2025";

    return (
        <Layout>
            <Helmet>
                <title>Refund Policy | {siteConfig.fullName}</title>
                <meta
                    name="description"
                    content="Understand our refund policy for web development services. Learn about eligibility criteria, refund processes, and what work is covered under our refund terms."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <ParticleEffect />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20">
                                <CreditCard className="w-4 h-4 mr-2" />
                                Payment Policy
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent mb-6">
                            Refund Policy
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                            Our refund policy is designed to be fair to both our clients and our development team.
                            Please review these terms carefully before engaging our services.
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
                                    Refund Policy Overview
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    At {siteConfig.name}, we are committed to delivering high-quality web development services.
                                    This refund policy outlines the circumstances under which refunds may be issued and the
                                    process for requesting them.
                                </p>
                                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-blue-700 dark:text-blue-300">Important Note</h4>
                                            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                                All refund requests are evaluated on a case-by-case basis. We encourage open
                                                communication to resolve any concerns before requesting a refund.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Refund Eligibility Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                                    Refund Eligibility Criteria
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted-foreground">
                                    Refunds may be considered under the following circumstances:
                                </p>

                                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-lg flex items-center">
                                            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                                            Eligible for Refund
                                        </h4>
                                        <ul className="text-muted-foreground text-sm space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Project cancellation within 48 hours of initial payment and before any work begins
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Technical impossibility to deliver the requested solution (rare cases)
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Breach of contract on our part (failure to deliver as agreed)
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Duplicate payments or billing errors
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-lg flex items-center">
                                            <XCircle className="w-5 h-5 mr-2 text-red-500" />
                                            Not Eligible for Refund
                                        </h4>
                                        <ul className="text-muted-foreground text-sm space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Any work that has been completed or partially completed by our team
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Design concepts, wireframes, or prototypes that have been delivered
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Code development, testing, or deployment work that has been performed
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Change of mind or business direction after work has commenced
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Third-party service costs (hosting, domains, licenses) already incurred
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-red-700 dark:text-red-300">No Work-Based Refunds</h4>
                                            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                                                Once our team begins work on your project (design, development, consultation, etc.),
                                                that work has value and cannot be refunded. This protects our team's time and effort.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Refund Timeline Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Clock className="w-6 h-6 mr-3 text-primary" />
                                    Refund Timeline & Process
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                                    <div className="text-center space-y-3">
                                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                            <FileText className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-semibold">1. Request Submission</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Submit your refund request via email with project details and reason for refund.
                                        </p>
                                    </div>

                                    <div className="text-center space-y-3">
                                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-semibold">2. Review Process</h4>
                                        <p className="text-sm text-muted-foreground">
                                            We review your request within 3-5 business days and respond with our decision.
                                        </p>
                                    </div>

                                    <div className="text-center space-y-3">
                                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                                            <DollarSign className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-semibold">3. Processing</h4>
                                        <p className="text-sm text-muted-foreground">
                                            If approved, refunds are processed within 7-10 business days to your original payment method.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 mt-6">
                                    <h4 className="font-semibold">Required Information for Refund Requests:</h4>
                                    <ul className="text-muted-foreground text-sm space-y-2 ml-4">
                                        <li>• Project name and contract/invoice number</li>
                                        <li>• Detailed reason for the refund request</li>
                                        <li>• Original payment method information</li>
                                        <li>• Any relevant communication or documentation</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Partial Refunds Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <DollarSign className="w-6 h-6 mr-3 text-primary" />
                                    Partial Refunds & Work Completed
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    In cases where a project is cancelled after work has begun, we operate on a "work completed" basis:
                                </p>

                                <div className="bg-muted/30 p-4 rounded-lg space-y-3">
                                    <h4 className="font-semibold">Work Valuation Principle</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Any work performed by our team has inherent value and cannot be refunded. This includes:
                                    </p>
                                    <ul className="text-muted-foreground text-sm space-y-1 ml-4">
                                        <li>• Time spent in planning and strategy sessions</li>
                                        <li>• Design concepts and mockups created</li>
                                        <li>• Code written and development work performed</li>
                                        <li>• Testing, optimization, and quality assurance</li>
                                        <li>• Project management and communication time</li>
                                    </ul>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Example: Early Cancellation</h4>
                                        <p className="text-sm text-green-700 dark:text-green-300">
                                            If you cancel within 48 hours before any work begins, you may be eligible for a full refund
                                            minus any processing fees.
                                        </p>
                                    </div>

                                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                        <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Example: Mid-Project Cancellation</h4>
                                        <p className="text-sm text-red-700 dark:text-red-300">
                                            If you cancel after work has begun, payment for all completed work is non-refundable.
                                            You will receive all work completed up to the cancellation point.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Third-Party Costs Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Shield className="w-6 h-6 mr-3 text-primary" />
                                    Third-Party Services & Costs
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Certain costs associated with your project are non-refundable due to their nature as third-party expenses:
                                </p>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold">Non-Refundable Third-Party Costs:</h4>
                                        <ul className="text-muted-foreground text-sm space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Domain name registrations
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Web hosting setup fees
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                SSL certificates
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                Premium plugins or themes
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                API access fees
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold">Why These Costs Are Non-Refundable:</h4>
                                        <p className="text-muted-foreground text-sm">
                                            These are legitimate business expenses paid to third-party providers on your behalf.
                                            Once purchased, these services and licenses cannot be returned or refunded by the providers.
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            We will always discuss these costs with you upfront and obtain approval before making
                                            any third-party purchases.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Dispute Resolution Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <FileText className="w-6 h-6 mr-3 text-primary" />
                                    Dispute Resolution
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We believe in resolving issues through open communication. If you have concerns about your project:
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 1: Direct Communication</h4>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            Contact your project manager or our support team to discuss any concerns. Most issues
                                            can be resolved through direct communication and project adjustments.
                                        </p>
                                    </div>

                                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 2: Formal Review</h4>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            If direct communication doesn't resolve the issue, we'll conduct a formal review
                                            of the project scope, deliverables, and any concerns raised.
                                        </p>
                                    </div>

                                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Step 3: Resolution Options</h4>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            Based on the review, we may offer project revisions, additional support, credit
                                            toward future services, or in eligible cases, a refund.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                                    Contact Us About Refunds
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    For refund requests or questions about this policy, please contact us:
                                </p>
                                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                                    <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a></p>
                                    <p><strong>Subject Line:</strong> "Refund Request - [Your Project Name]"</p>
                                    <p><strong>Response Time:</strong> 3-5 business days</p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Please include your project details, invoice number, and specific reason for the refund request
                                    to help us process your inquiry quickly.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Policy Updates Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                                    Policy Updates
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We may update this Refund Policy from time to time. Any changes will be posted on this page
                                    with an updated "Last Modified" date. Continued use of our services after changes constitutes
                                    acceptance of the updated policy.
                                </p>
                                <p className="text-muted-foreground">
                                    For existing projects, the refund policy in effect at the time of project commencement will apply.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RefundPolicy;
