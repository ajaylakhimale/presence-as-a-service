import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, Shield, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { siteConfig } from '@/config/site';

const TermsOfService = () => {
    const lastUpdated = "September 3, 2025";

    return (
        <Layout>
            <Helmet>
                <title>Terms of Service | {siteConfig.fullName}</title>
                <meta
                    name="description"
                    content="Read our Terms of Service to understand the agreement between you and our web development services. Clear terms, fair policies, and transparent conditions."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <ParticleEffect />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20">
                                <ScrollText className="w-4 h-4 mr-2" />
                                Legal Information
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent mb-6">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                            Please read these Terms of Service carefully before using our web development services.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Last Updated:</strong> {lastUpdated}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Agreement Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                                    1. Agreement to Terms
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    By accessing and using the services provided by {siteConfig.fullName} ("we," "us," or "our"),
                                    you accept and agree to be bound by the terms and provision of this agreement.
                                </p>
                                <p className="text-muted-foreground">
                                    If you do not agree to abide by the above, please do not use our services. These terms apply
                                    to all visitors, users, and others who access or use our web development services.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Services Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Users className="w-6 h-6 mr-3 text-primary" />
                                    2. Description of Services
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    {siteConfig.fullName} provides web development services including but not limited to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                    <li>Custom website design and development</li>
                                    <li>Web application development</li>
                                    <li>E-commerce solutions</li>
                                    <li>Content management systems</li>
                                    <li>Website maintenance and support</li>
                                    <li>SEO optimization services</li>
                                    <li>Performance optimization</li>
                                    <li>Technical consultation</li>
                                </ul>
                                <p className="text-muted-foreground">
                                    We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Payment Terms */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Clock className="w-6 h-6 mr-3 text-primary" />
                                    3. Payment Terms and Pricing
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">3.1 Pricing Structure</h4>
                                    <p className="text-muted-foreground">
                                        All prices quoted are estimates based on project requirements. Final pricing will be
                                        confirmed in a detailed project proposal before work begins.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">3.2 Payment Schedule</h4>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                                        <li>50% deposit required to commence work</li>
                                        <li>25% upon project milestone completion</li>
                                        <li>25% upon final delivery and client approval</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">3.3 Late Payments</h4>
                                    <p className="text-muted-foreground">
                                        Invoices not paid within 30 days of the due date may incur a late fee of 1.5% per month.
                                        Work may be suspended on accounts with overdue balances.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Client Responsibilities */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Shield className="w-6 h-6 mr-3 text-primary" />
                                    4. Client Responsibilities
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    As a client, you agree to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                    <li>Provide accurate and complete project requirements</li>
                                    <li>Supply necessary content, images, and materials in a timely manner</li>
                                    <li>Provide feedback and approvals within agreed timeframes</li>
                                    <li>Ensure you have rights to all content provided to us</li>
                                    <li>Make payments according to the agreed schedule</li>
                                    <li>Communicate changes or modifications in writing</li>
                                    <li>Test and approve deliverables within specified timeframes</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Intellectual Property */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Shield className="w-6 h-6 mr-3 text-primary" />
                                    5. Intellectual Property Rights
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">5.1 Client Ownership</h4>
                                    <p className="text-muted-foreground">
                                        Upon full payment, clients own the custom code and design created specifically for their project.
                                        This includes custom graphics, layouts, and functionality developed exclusively for the client.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">5.2 Third-Party Components</h4>
                                    <p className="text-muted-foreground">
                                        Projects may include third-party frameworks, libraries, or plugins subject to their respective licenses.
                                        We do not claim ownership of these components.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">5.3 Portfolio Rights</h4>
                                    <p className="text-muted-foreground">
                                        We reserve the right to showcase completed projects in our portfolio and marketing materials,
                                        unless specifically requested otherwise in writing.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Warranties and Disclaimers */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                                    6. Warranties and Disclaimers
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">6.1 Service Warranty</h4>
                                    <p className="text-muted-foreground">
                                        We warrant that our services will be performed in a professional manner in accordance with
                                        industry standards. We provide a 30-day warranty on delivered work for bug fixes and issues
                                        directly related to our development.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">6.2 Disclaimer</h4>
                                    <p className="text-muted-foreground">
                                        Except as expressly stated herein, our services are provided "as is" without warranty of any kind,
                                        either express or implied, including but not limited to the implied warranties of merchantability
                                        and fitness for a particular purpose.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Limitation of Liability */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Shield className="w-6 h-6 mr-3 text-primary" />
                                    7. Limitation of Liability
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    In no event shall {siteConfig.fullName} be liable for any indirect, incidental, special,
                                    consequential, or punitive damages, including without limitation, loss of profits, data,
                                    use, goodwill, or other intangible losses.
                                </p>
                                <p className="text-muted-foreground">
                                    Our total liability for any claim arising out of or relating to these terms or our services
                                    shall not exceed the amount paid by you for the specific service giving rise to the claim.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Termination */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                                    8. Termination
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Either party may terminate a project with 7 days written notice. Upon termination:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                    <li>Client is responsible for payment of all work completed up to termination date</li>
                                    <li>We will deliver all completed work and project files</li>
                                    <li>Any deposits paid are non-refundable</li>
                                    <li>Outstanding invoices become immediately due</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Changes to Terms */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Clock className="w-6 h-6 mr-3 text-primary" />
                                    9. Changes to Terms
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We reserve the right to modify these terms at any time. Updated terms will be posted on
                                    our website with a new "Last Updated" date. Continued use of our services after changes
                                    constitutes acceptance of the new terms.
                                </p>
                                <p className="text-muted-foreground">
                                    For significant changes, we will make reasonable efforts to notify active clients via email.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <Card className="border border-border/50 bg-gradient-to-br from-primary/10 via-accent-brand/5 to-primary/10">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Users className="w-6 h-6 mr-3 text-primary" />
                                    10. Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="space-y-2 text-muted-foreground">
                                    <p><strong>Email:</strong> {siteConfig.contact.email}</p>
                                    <p><strong>Phone:</strong> {siteConfig.contact.phone}</p>
                                    <p><strong>Address:</strong> {siteConfig.contact.address}</p>
                                </div>
                                <p className="text-sm text-muted-foreground mt-4">
                                    These terms constitute the entire agreement between you and {siteConfig.fullName}
                                    regarding the use of our services.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TermsOfService;
