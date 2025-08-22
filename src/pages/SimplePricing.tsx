import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';
import ParticleEffect from '@/components/ParticleEffect';
import { Helmet } from 'react-helmet-async';

const SimplePricing = () => {
    return (
        <Layout>
            <Helmet>
                <title>Pricing Plans | Presence as a Service</title>
                <meta name="description" content="Choose the perfect plan for your web presence needs" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
                <ParticleEffect />

                {/* Header Section */}
                <section className="relative pt-20 pb-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-4xl mx-auto">
                            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                                New Pricing Structure
                            </Badge>
                            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                                Transparent, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Modular</span> Pricing
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Pay only for what you need. Scale as you grow. No hidden fees.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Tiers */}
                <section className="relative pb-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                            {/* Essential Tier */}
                            <Card className="relative bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                                <CardHeader className="text-center">
                                    <div className="mb-4">
                                        <Zap className="h-12 w-12 text-blue-400 mx-auto" />
                                    </div>
                                    <CardTitle className="text-2xl text-white">Essential</CardTitle>
                                    <p className="text-gray-400">Perfect for startups and small businesses</p>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-white">₹2,999</span>
                                        <span className="text-gray-400">/month</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Core functionality
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Basic integrations
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Email support
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Up to 10K monthly visits
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Professional Tier */}
                            <Card className="relative bg-slate-900/50 border-blue-500/50 hover:border-blue-400 transition-all duration-300 scale-105">
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <Badge className="bg-blue-500 text-white px-4 py-1">
                                        Most Popular
                                    </Badge>
                                </div>
                                <CardHeader className="text-center">
                                    <div className="mb-4">
                                        <Star className="h-12 w-12 text-blue-400 mx-auto" />
                                    </div>
                                    <CardTitle className="text-2xl text-white">Professional</CardTitle>
                                    <p className="text-gray-400">For growing businesses</p>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-white">₹9,999</span>
                                        <span className="text-gray-400">/month</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Advanced functionality
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Multiple integrations
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Priority support
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Up to 100K monthly visits
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-blue-400 mr-3" />
                                            Advanced analytics
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Ultimate Tier */}
                            <Card className="relative bg-slate-900/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                                <CardHeader className="text-center">
                                    <div className="mb-4">
                                        <Crown className="h-12 w-12 text-purple-400 mx-auto" />
                                    </div>
                                    <CardTitle className="text-2xl text-white">Ultimate</CardTitle>
                                    <p className="text-gray-400">For enterprise needs</p>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-white">₹19,999</span>
                                        <span className="text-gray-400">/month</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-purple-400 mr-3" />
                                            Unlimited customization
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-purple-400 mr-3" />
                                            White-label options
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-purple-400 mr-3" />
                                            24/7 support
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-purple-400 mr-3" />
                                            Unlimited visits
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <Check className="h-5 w-5 text-purple-400 mr-3" />
                                            Custom development
                                        </li>
                                    </ul>
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                                        Contact Sales
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* CTA Section */}
                        <div className="text-center mt-16">
                            <p className="text-gray-300 mb-6">
                                Need help choosing the right plan? Our team is here to help.
                            </p>
                            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                                Schedule a Consultation
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default SimplePricing;
