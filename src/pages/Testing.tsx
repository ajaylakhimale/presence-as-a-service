import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, X, Clock, Play, TestTube, Database, Globe, Smartphone, Monitor, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { siteConfig } from '@/config/site';
import { useState, useEffect } from 'react';

// Test components
import DirectSupabaseTest from '@/components/DirectSupabaseTest';
import NewsletterSubscription from '@/components/NewsletterSubscription';

const Testing = () => {
    const [testResults, setTestResults] = useState<{ [key: string]: 'pending' | 'pass' | 'fail' }>({});
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const runTest = async (testName: string, testFn: () => Promise<boolean>) => {
        setTestResults(prev => ({ ...prev, [testName]: 'pending' }));
        try {
            const result = await testFn();
            setTestResults(prev => ({ ...prev, [testName]: result ? 'pass' : 'fail' }));
        } catch (error) {
            console.error(`Test ${testName} failed:`, error);
            setTestResults(prev => ({ ...prev, [testName]: 'fail' }));
        }
    };

    const testSiteLoad = async (): Promise<boolean> => {
        return new Promise((resolve) => {
            // Test if basic site elements are loaded
            setTimeout(() => {
                const hasTitle = document.title.length > 0;
                const hasBody = document.body.children.length > 0;
                resolve(hasTitle && hasBody);
            }, 100);
        });
    };

    const testResponsiveness = async (): Promise<boolean> => {
        return new Promise((resolve) => {
            // Test viewport responsiveness
            const viewport = window.innerWidth;
            const isMobile = viewport < 768;
            const isTablet = viewport >= 768 && viewport < 1024;
            const isDesktop = viewport >= 1024;
            resolve(isMobile || isTablet || isDesktop);
        });
    };

    const testLocalStorage = async (): Promise<boolean> => {
        try {
            const testKey = 'test_storage';
            const testValue = 'test_value';
            localStorage.setItem(testKey, testValue);
            const retrieved = localStorage.getItem(testKey);
            localStorage.removeItem(testKey);
            return retrieved === testValue;
        } catch {
            return false;
        }
    };

    const testCookies = async (): Promise<boolean> => {
        try {
            document.cookie = "test_cookie=test_value; path=/";
            const hasCookie = document.cookie.includes('test_cookie=test_value');
            // Clean up
            document.cookie = "test_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            return hasCookie;
        } catch {
            return false;
        }
    };

    const testNavigation = async (): Promise<boolean> => {
        try {
            // Test if routing is working
            const currentPath = window.location.pathname;
            return currentPath === '/testing';
        } catch {
            return false;
        }
    };

    const runAllTests = async () => {
        await runTest('Site Load', testSiteLoad);
        await runTest('Responsiveness', testResponsiveness);
        await runTest('Local Storage', testLocalStorage);
        await runTest('Cookies', testCookies);
        await runTest('Navigation', testNavigation);
    };

    const getStatusIcon = (status: 'pending' | 'pass' | 'fail') => {
        switch (status) {
            case 'pass':
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case 'fail':
                return <X className="w-5 h-5 text-red-500" />;
            default:
                return <Clock className="w-5 h-5 text-yellow-500 animate-spin" />;
        }
    };

    const getStatusColor = (status: 'pending' | 'pass' | 'fail') => {
        switch (status) {
            case 'pass':
                return 'bg-green-50 border-green-200';
            case 'fail':
                return 'bg-red-50 border-red-200';
            default:
                return 'bg-yellow-50 border-yellow-200';
        }
    };

    return (
        <Layout>
            <Helmet>
                <title>Website Testing Dashboard | {siteConfig.fullName}</title>
                <meta name="description" content="Comprehensive testing dashboard for website functionality, performance, and integrations." />
                <meta property="og:title" content={`Website Testing Dashboard | ${siteConfig.fullName}`} />
                <meta property="og:description" content="Test all website features and integrations in real-time." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="relative min-h-screen">
                <ParticleEffect />

                <div className="relative z-10 pt-20 pb-12">
                    <div className="container mx-auto px-4">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                                <TestTube className="w-4 h-4 mr-2" />
                                Development Testing Environment
                            </Badge>
                            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                                Website Testing Dashboard
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
                                Comprehensive testing suite for website functionality, integrations, and performance.
                            </p>
                            <div className="text-sm text-muted-foreground">
                                <strong>Current Time:</strong> {currentTime.toLocaleString()}
                            </div>
                        </div>

                        {/* Quick Tests */}
                        <Card className="mb-8 border-blue-200/50 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-blue-50/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Zap className="w-6 h-6 mr-3 text-blue-600" />
                                    Quick Tests
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                    {[
                                        { name: 'Site Load', desc: 'Basic site loading functionality' },
                                        { name: 'Responsiveness', desc: 'Mobile/tablet/desktop compatibility' },
                                        { name: 'Local Storage', desc: 'Browser storage functionality' },
                                        { name: 'Cookies', desc: 'Cookie management system' },
                                        { name: 'Navigation', desc: 'React Router functionality' }
                                    ].map((test) => (
                                        <Card key={test.name} className={`p-4 ${getStatusColor(testResults[test.name] || 'pending')}`}>
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-semibold">{test.name}</h4>
                                                {getStatusIcon(testResults[test.name] || 'pending')}
                                            </div>
                                            <p className="text-sm text-muted-foreground">{test.desc}</p>
                                        </Card>
                                    ))}
                                </div>
                                <Button onClick={runAllTests} className="w-full md:w-auto">
                                    <Play className="w-4 h-4 mr-2" />
                                    Run All Tests
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Database Testing */}
                        <Card className="mb-8 border-green-200/50 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-green-50/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Database className="w-6 h-6 mr-3 text-green-600" />
                                    Database Integration Tests
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <DirectSupabaseTest />
                            </CardContent>
                        </Card>

                        {/* Newsletter Testing */}
                        <Card className="mb-8 border-purple-200/50 bg-gradient-to-br from-purple-50/50 via-violet-50/30 to-purple-50/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Globe className="w-6 h-6 mr-3 text-purple-600" />
                                    Newsletter Integration Test
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-white/80 border border-purple-200 rounded-lg p-6">
                                    <NewsletterSubscription />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Device & Browser Testing */}
                        <Card className="mb-8 border-orange-200/50 bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-orange-50/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Monitor className="w-6 h-6 mr-3 text-orange-600" />
                                    Device & Browser Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Card className="p-4 bg-white/80">
                                        <h4 className="font-semibold mb-2 flex items-center">
                                            <Smartphone className="w-4 h-4 mr-2" />
                                            Screen Info
                                        </h4>
                                        <ul className="text-sm space-y-1">
                                            <li><strong>Width:</strong> {window.innerWidth}px</li>
                                            <li><strong>Height:</strong> {window.innerHeight}px</li>
                                            <li><strong>Device Pixel Ratio:</strong> {window.devicePixelRatio}</li>
                                            <li><strong>Orientation:</strong> {window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait'}</li>
                                        </ul>
                                    </Card>

                                    <Card className="p-4 bg-white/80">
                                        <h4 className="font-semibold mb-2 flex items-center">
                                            <Globe className="w-4 h-4 mr-2" />
                                            Browser Info
                                        </h4>
                                        <ul className="text-sm space-y-1">
                                            <li><strong>User Agent:</strong> {navigator.userAgent.split(' ')[0]}</li>
                                            <li><strong>Platform:</strong> {navigator.platform}</li>
                                            <li><strong>Language:</strong> {navigator.language}</li>
                                            <li><strong>Online:</strong> {navigator.onLine ? 'Yes' : 'No'}</li>
                                        </ul>
                                    </Card>

                                    <Card className="p-4 bg-white/80">
                                        <h4 className="font-semibold mb-2 flex items-center">
                                            <Monitor className="w-4 h-4 mr-2" />
                                            Location Info
                                        </h4>
                                        <ul className="text-sm space-y-1">
                                            <li><strong>URL:</strong> {window.location.href}</li>
                                            <li><strong>Protocol:</strong> {window.location.protocol}</li>
                                            <li><strong>Host:</strong> {window.location.host}</li>
                                            <li><strong>Path:</strong> {window.location.pathname}</li>
                                        </ul>
                                    </Card>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <Card className="border-gray-200/50 bg-gradient-to-br from-gray-50/50 via-slate-50/30 to-gray-50/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Globe className="w-6 h-6 mr-3 text-gray-600" />
                                    Quick Navigation Links
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {[
                                        { name: 'Home', path: '/' },
                                        { name: 'Modern Onboarding', path: '/modern-onboarding' },
                                        { name: 'Supabase Debug', path: '/supabase-debug' },
                                        { name: 'Pricing', path: '/pricing' },
                                        { name: 'About', path: '/about' },
                                        { name: 'Contact', path: '/contact' },
                                        { name: 'Terms of Service', path: '/tos' },
                                        { name: 'Privacy Policy', path: '/privacy' }
                                    ].map((link) => (
                                        <Button
                                            key={link.name}
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => window.location.href = link.path}
                                        >
                                            {link.name}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Testing;
