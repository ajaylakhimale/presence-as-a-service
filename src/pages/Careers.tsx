import { Briefcase, Heart, Users, Zap, Clock, MapPin, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { siteConfig } from '@/config/site';

const Careers = () => {
    return (
        <Layout>
            <div className="relative min-h-screen bg-background overflow-hidden">
                <ParticleEffect />

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20">
                                <Briefcase className="w-4 h-4 mr-2" />
                                Join Our Team
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent mb-6">
                            Careers at {siteConfig.fullName}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We're building the future of web development services. Join us in creating exceptional digital experiences for businesses worldwide.
                        </p>
                    </div>

                    {/* Values Section */}
                    <div className="max-w-6xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-xl">
                                        <Heart className="w-6 h-6 mr-3 text-primary" />
                                        Passion-Driven
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        We're passionate about creating beautiful, functional web experiences that make a real difference for our clients.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-xl">
                                        <Users className="w-6 h-6 mr-3 text-primary" />
                                        Collaborative Culture
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Work with a talented team of designers, developers, and strategists who support each other's growth.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-xl">
                                        <Zap className="w-6 h-6 mr-3 text-primary" />
                                        Innovation Focus
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Stay at the forefront of technology with opportunities to work on cutting-edge projects and learn new skills.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Current Openings Section */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>

                        {/* No Jobs Available Card */}
                        <Card className="border border-border/50 bg-gradient-to-br from-primary/10 via-accent-brand/5 to-primary/10 text-center p-8">
                            <CardContent className="pt-6">
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Briefcase className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">No Openings Available</h3>
                                <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                                    We're not actively hiring at the moment, but we're always interested in connecting with talented individuals who share our passion for exceptional web development.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        variant="outline"
                                        className="border-primary/20 hover:bg-primary/10"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        Submit Your Resume
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-primary/20 hover:bg-primary/10"
                                    >
                                        <Heart className="w-4 h-4 mr-2" />
                                        Follow Our Updates
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">Interested in Future Opportunities?</h3>
                        <p className="text-muted-foreground mb-6">
                            Even though we don't have current openings, we'd love to hear from you. Send us your resume and we'll keep you in mind for future positions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-primary" />
                                {siteConfig.contact.email}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-primary" />
                                We review applications monthly
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Careers;
