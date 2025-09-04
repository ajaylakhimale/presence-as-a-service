import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Shield, Settings, AlertTriangle, CheckCircle, Eye, Clock, Database } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { siteConfig } from '@/config/site';

const CookiePolicy = () => {
    const lastUpdated = "September 3, 2025";

    return (
        <Layout>
            <Helmet>
                <title>Cookie Policy | {siteConfig.fullName}</title>
                <meta
                    name="description"
                    content="Learn about how we use cookies on our website. Understand what cookies we collect, why we use them, and how you can manage your cookie preferences."
                />
            </Helmet>

            <div className="relative min-h-screen bg-background overflow-hidden">
                <ParticleEffect />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20">
                                <Cookie className="w-4 h-4 mr-2" />
                                Privacy Information
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent mb-6">
                            Cookie Policy
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                            This Cookie Policy explains how {siteConfig.name} uses cookies and similar technologies when you visit our website.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Last Updated:</strong> {lastUpdated}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* What Are Cookies Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Cookie className="w-6 h-6 mr-3 text-primary" />
                                    What Are Cookies?
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website.
                                    They are widely used to make websites work more efficiently and to provide information to website owners.
                                </p>
                                <p className="text-muted-foreground">
                                    Cookies help us understand how you use our website, remember your preferences, and provide you with a better,
                                    more personalized experience during your visits.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Types of Cookies Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Database className="w-6 h-6 mr-3 text-primary" />
                                    Types of Cookies We Use
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-lg flex items-center">
                                            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                                            Essential Cookies
                                        </h4>
                                        <p className="text-muted-foreground text-sm">
                                            These cookies are necessary for the website to function properly. They enable basic functions
                                            like page navigation, access to secure areas, and form submissions. The website cannot function
                                            properly without these cookies.
                                        </p>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                            <li>• Session management</li>
                                            <li>• Security features</li>
                                            <li>• Form functionality</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-lg flex items-center">
                                            <Eye className="w-5 h-5 mr-2 text-blue-500" />
                                            Analytics Cookies
                                        </h4>
                                        <p className="text-muted-foreground text-sm">
                                            These cookies help us understand how visitors interact with our website by collecting and
                                            reporting information anonymously. This helps us improve our website's performance and user experience.
                                        </p>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                            <li>• Google Analytics</li>
                                            <li>• Page view statistics</li>
                                            <li>• User behavior analysis</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-lg flex items-center">
                                            <Settings className="w-5 h-5 mr-2 text-purple-500" />
                                            Functional Cookies
                                        </h4>
                                        <p className="text-muted-foreground text-sm">
                                            These cookies enable enhanced functionality and personalization. They may be set by us or by
                                            third-party providers whose services we have added to our pages.
                                        </p>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                            <li>• Language preferences</li>
                                            <li>• Theme preferences</li>
                                            <li>• Cookie consent choices</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-lg flex items-center">
                                            <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                                            Marketing Cookies
                                        </h4>
                                        <p className="text-muted-foreground text-sm">
                                            These cookies are used to deliver relevant advertisements and marketing communications.
                                            They help us measure the effectiveness of our advertising campaigns.
                                        </p>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                            <li>• Targeted advertising</li>
                                            <li>• Social media integration</li>
                                            <li>• Campaign tracking</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Third-Party Cookies Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Shield className="w-6 h-6 mr-3 text-primary" />
                                    Third-Party Cookies
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We may use third-party services that set cookies on our website. These services help us provide
                                    better functionality and understand how our website is being used.
                                </p>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-primary pl-4">
                                        <h4 className="font-semibold mb-2">Google Analytics</h4>
                                        <p className="text-muted-foreground text-sm">
                                            We use Google Analytics to understand how visitors use our website. Google Analytics uses
                                            cookies to collect information about website usage, which helps us improve our website's
                                            performance and user experience.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <h4 className="font-semibold mb-2">Social Media Platforms</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Our website may include social media features that are hosted by third-party platforms.
                                            These features may collect information about your visit and set cookies to enable proper functionality.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Cookie Duration Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Clock className="w-6 h-6 mr-3 text-primary" />
                                    Cookie Duration
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">Session Cookies</h4>
                                        <p className="text-muted-foreground text-sm">
                                            These temporary cookies are deleted when you close your browser. They are used for
                                            essential website functionality during your visit.
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">Persistent Cookies</h4>
                                        <p className="text-muted-foreground text-sm">
                                            These cookies remain on your device for a set period (usually up to 2 years) or until
                                            you delete them. They remember your preferences across visits.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Managing Cookies Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Settings className="w-6 h-6 mr-3 text-primary" />
                                    Managing Your Cookie Preferences
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    You have several options for managing cookies on our website:
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-muted/30 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Cookie Consent Banner</h4>
                                        <p className="text-muted-foreground text-sm">
                                            When you first visit our website, you'll see a cookie consent banner that allows you to
                                            accept or decline non-essential cookies. You can change your preferences at any time
                                            using the cookie settings link in our footer.
                                        </p>
                                    </div>

                                    <div className="bg-muted/30 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Browser Settings</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Most web browsers allow you to control cookies through their settings. You can typically
                                            find these options in the "Privacy" or "Security" section of your browser's preferences.
                                        </p>
                                        <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                                            <li>• Block all cookies</li>
                                            <li>• Block third-party cookies</li>
                                            <li>• Delete existing cookies</li>
                                            <li>• Receive notifications when cookies are set</li>
                                        </ul>
                                    </div>

                                    <div className="bg-muted/30 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">Opt-Out Links</h4>
                                        <p className="text-muted-foreground text-sm">
                                            For certain third-party services, you can opt out directly:
                                        </p>
                                        <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                                            <li>• <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                                            <li>• <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                                    <div className="flex items-start space-x-3">
                                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Important Note</h4>
                                            <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                                                Disabling certain cookies may affect the functionality of our website. Some features
                                                may not work properly if essential cookies are blocked.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Updates Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <AlertTriangle className="w-6 h-6 mr-3 text-primary" />
                                    Updates to This Policy
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We may update this Cookie Policy from time to time to reflect changes in our practices,
                                    technology, legal requirements, or other factors. When we make changes, we will update
                                    the "Last Updated" date at the top of this policy.
                                </p>
                                <p className="text-muted-foreground">
                                    We encourage you to review this Cookie Policy periodically to stay informed about how
                                    we use cookies and how you can manage your cookie preferences.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Contact Section */}
                        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                                    Contact Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    If you have any questions about this Cookie Policy or how we use cookies, please contact us:
                                </p>
                                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                                    <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a></p>
                                    <p><strong>Website:</strong> <a href={siteConfig.url} className="text-primary hover:underline">{siteConfig.url}</a></p>
                                    <p><strong>Company:</strong> {siteConfig.fullName}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    We're committed to protecting your privacy and will respond to your inquiries as quickly as possible.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CookiePolicy;
