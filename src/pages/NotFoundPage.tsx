import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, ArrowLeft, Search, Zap, Star, Sparkles } from 'lucide-react';

const NotFoundPage = () => {
    const location = useLocation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );

        // Trigger animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, [location.pathname]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const floatingElements = Array.from({ length: 20 }, (_, i) => (
        <div
            key={i}
            className="absolute animate-pulse"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
            }}
        >
            {i % 4 === 0 && <Star className="w-3 h-3 text-primary/30" />}
            {i % 4 === 1 && <Sparkles className="w-4 h-4 text-secondary/40" />}
            {i % 4 === 2 && <Zap className="w-3 h-3 text-accent/30" />}
            {i % 4 === 3 && <div className="w-2 h-2 rounded-full bg-primary/20" />}
        </div>
    ));

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | WPaaS</title>
                <meta name="description" content="Oops! The page you're looking for doesn't exist. Let's get you back on track." />
                <meta property="og:title" content="404 - Page Not Found | WPaaS" />
                <meta property="og:description" content="Page not found - Let's get you back home" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {floatingElements}

                    {/* Animated gradient orbs */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    {/* Mouse follower effect */}
                    <div
                        className="absolute w-6 h-6 bg-primary/20 rounded-full blur-sm transition-all duration-300 ease-out pointer-events-none"
                        style={{
                            left: mousePosition.x - 12,
                            top: mousePosition.y - 12,
                            transform: 'scale(1.2)',
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
                    <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>

                        {/* 404 Number with Animation */}
                        <div className="relative mb-8">
                            <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse leading-none">
                                404
                            </h1>
                            <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-black text-primary/10 animate-ping leading-none">
                                404
                            </div>
                        </div>

                        {/* Error Message */}
                        <div className={`mb-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                Oops! Page Not Found
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                The page you're looking for seems to have vanished into the digital void.
                                <br />
                                <span className="text-primary font-semibold">Don't worry, we'll help you find your way back!</span>
                            </p>
                        </div>

                        {/* Interactive Cards */}
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>

                            {/* Go Home Card */}
                            <Card className="p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer bg-gradient-to-br from-card to-card/80 border-primary/20 hover:border-primary/40">
                                <Link to="/" className="block">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Home className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Go Home</h3>
                                        <p className="text-sm text-muted-foreground">Return to our homepage and start fresh</p>
                                    </div>
                                </Link>
                            </Card>

                            {/* Browse Services Card */}
                            <Card className="p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer bg-gradient-to-br from-card to-card/80 border-primary/20 hover:border-primary/40">
                                <Link to="/how-it-works" className="block">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Search className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Explore Services</h3>
                                        <p className="text-sm text-muted-foreground">Discover what we can build for you</p>
                                    </div>
                                </Link>
                            </Card>

                            {/* Contact Us Card */}
                            <Card className="p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer bg-gradient-to-br from-card to-card/80 border-accent/20 hover:border-accent/40">
                                <Link to="/contact" className="block">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                            <Zap className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">Get Help</h3>
                                        <p className="text-sm text-muted-foreground">Contact us if you need assistance</p>
                                    </div>
                                </Link>
                            </Card>
                        </div>

                        {/* Action Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <Button asChild size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Link to="/">
                                    <Home className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Back to Home
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Link to="/pricing">
                                    <ArrowLeft className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                    View Pricing
                                </Link>
                            </Button>
                        </div>

                        {/* Fun Message */}
                        <div className={`mt-12 transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                            <p className="text-sm text-muted-foreground italic">
                                "Even the best explorers sometimes take a wrong turn. The important thing is finding your way back."
                                <span className="block mt-2 text-primary font-medium">- WPaaS Team</span>
                            </p>
                        </div>

                        {/* Error Details for Debugging */}
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-8 p-4 bg-muted/50 rounded-lg border">
                                <p className="text-xs text-muted-foreground">
                                    <strong>Debug Info:</strong> Attempted to access: <code className="bg-muted px-1 rounded">{location.pathname}</code>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
