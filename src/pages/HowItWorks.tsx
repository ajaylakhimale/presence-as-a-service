import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle,
    Workflow,
    Monitor,
    Code,
    Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { Helmet } from 'react-helmet-async';

const HowItWorks = () => {
    const developmentPhases = [
        {
            id: 1,
            phase: 'Discovery & Planning',
            duration: '2-3 days',
            icon: '🔍',
            description: 'We dive deep into your business requirements and create a comprehensive project blueprint.',
            activities: [
                'Stakeholder interviews and requirement gathering',
                'Technical architecture planning and technology stack selection',
                'User research and persona development',
                'Project timeline and milestone definition'
            ],
            tools: ['Figma', 'Miro', 'Notion', 'Slack']
        },
        {
            id: 2,
            phase: 'Design & Prototyping',
            duration: '3-5 days',
            icon: '🎨',
            description: 'Creating intuitive user experiences with industry-standard design practices.',
            activities: [
                'Wireframing and information architecture',
                'Visual design and brand integration',
                'Interactive prototype development',
                'Design system creation'
            ],
            tools: ['Figma', 'Adobe Creative Suite', 'Framer', 'Principle']
        },
        {
            id: 3,
            phase: 'Development & Testing',
            duration: '5-10 days',
            icon: '⚡',
            description: 'Agile development with modern tools, automated testing, and continuous integration.',
            activities: [
                'Development environment setup',
                'Frontend and backend development',
                'Database design and implementation',
                'Automated testing and quality assurance'
            ],
            tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GitHub Actions']
        },
        {
            id: 4,
            phase: 'DevOps & Deployment',
            duration: '1-2 days',
            icon: '🚀',
            description: 'Cloud infrastructure, automated deployment pipelines, and performance optimization.',
            activities: [
                'Cloud infrastructure provisioning',
                'CI/CD pipeline configuration',
                'Security implementation',
                'Performance optimization'
            ],
            tools: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Cloudflare']
        },
        {
            id: 5,
            phase: 'Launch & Support',
            duration: 'Ongoing',
            icon: '🔧',
            description: 'Go-live support, monitoring, maintenance, and continuous improvement.',
            activities: [
                'Go-live support and monitoring',
                'Performance tracking and optimization',
                'Bug fixes and maintenance',
                'Feature updates and enhancements'
            ],
            tools: ['Analytics', 'Error Tracking', 'Support Desk', 'Documentation Tools']
        }
    ];

    const qualityStandards = [
        {
            title: 'Code Quality',
            description: 'ESLint, Prettier, TypeScript strict mode, and comprehensive code reviews',
            icon: '💻'
        },
        {
            title: 'Testing Coverage',
            description: 'Unit tests, integration tests, and end-to-end testing with 90%+ coverage',
            icon: '🧪'
        },
        {
            title: 'Security',
            description: 'OWASP guidelines, security audits, and penetration testing',
            icon: '🔒'
        },
        {
            title: 'Performance',
            description: 'Core Web Vitals optimization, lazy loading, and CDN implementation',
            icon: '⚡'
        },
        {
            title: 'Accessibility',
            description: 'WCAG 2.1 compliance, screen reader support, and keyboard navigation',
            icon: '♿'
        },
        {
            title: 'Version Control',
            description: 'Git workflow, semantic versioning, and automated changelog generation',
            icon: '📋'
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>How It Works - Our Software Development Process | WPaaS</title>
                <meta name="description" content="Discover our industry-standard software development process. From discovery to deployment, learn how we build robust, scalable solutions using DevOps, automated testing, and modern development practices." />
                <meta property="og:title" content="How It Works - Software Development Process" />
                <meta property="og:description" content="Enterprise-grade development with DevOps and modern tools" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-hero py-24 overflow-hidden">
                <ParticleEffect />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <Badge className="mb-6 animate-fade-in-up">
                            <Workflow className="h-4 w-4 mr-2" />
                            Enterprise-Grade Development
                        </Badge>
                        <h1 className="text-large-title mb-6 animate-fade-in-up [animation-delay:0.1s]">
                            How We Build Your <span className="text-primary">Software Solutions</span>
                        </h1>
                        <p className="text-body text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
                            Our proven development methodology combines industry best practices, DevOps automation,
                            and agile methodologies to deliver robust, scalable software solutions that grow with your business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.3s]">
                            <Link to="/onboarding">
                                <Button className="btn-primary">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-title-1 mb-4">Our 5-Phase Development Process</h2>
                        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                            Each phase is carefully planned and executed with industry-standard tools and methodologies
                        </p>
                    </div>

                    <div className="space-y-12">
                        {developmentPhases.map((phase, index) => (
                            <div key={phase.id} className="flex flex-col lg:flex-row gap-8 items-start animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mb-4">
                                        {phase.icon}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-title-3 font-bold">Phase {phase.id}: {phase.phase}</h3>
                                        <Badge variant="secondary">{phase.duration}</Badge>
                                    </div>
                                    <p className="text-body text-muted-foreground mb-6">{phase.description}</p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-success" />
                                                Key Activities
                                            </h4>
                                            <ul className="space-y-2">
                                                {phase.activities.map((activity, activityIndex) => (
                                                    <li key={activityIndex} className="flex items-start gap-2 text-sm">
                                                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                        {activity}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                                <Code className="h-4 w-4 text-primary" />
                                                Tools & Technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {phase.tools.map((tool, toolIndex) => (
                                                    <span key={toolIndex} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Link Section */}
            <section className="py-24 bg-gradient-to-br from-primary/5 via-accent-brand/5 to-primary/10">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <Badge className="mb-6">
                        <Monitor className="h-4 w-4 mr-2" />
                        Technology Stack
                    </Badge>
                    <h2 className="text-title-1 mb-6">
                        Built with Industry-Leading Technologies
                    </h2>
                    <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We use modern, proven technologies to build scalable, maintainable solutions.
                        From React and TypeScript to cloud infrastructure and DevOps tools.
                    </p>

                    <Link to="/tech-stack">
                        <Button variant="outline" className="group">
                            Explore Our Full Tech Stack
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Quality Standards */}
            <section className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-title-1 mb-4">Quality Standards & Best Practices</h2>
                        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                            We maintain the highest standards of code quality, security, and performance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {qualityStandards.map((standard, index) => (
                            <div key={index} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="text-2xl flex-shrink-0">
                                    {standard.icon}
                                </div>
                                <div>
                                    <h3 className="text-headline font-semibold mb-2">{standard.title}</h3>
                                    <p className="text-subhead text-muted-foreground">{standard.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-surface">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h2 className="text-title-1 mb-6">
                        Ready to Experience Professional Software Development?
                    </h2>
                    <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's discuss your project and show you how our proven development process
                        can bring your ideas to life with enterprise-grade quality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/onboarding">
                            <Button className="btn-primary">
                                Start Your Project Today
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};




export default HowItWorks;
