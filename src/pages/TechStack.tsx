import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, Database, Cloud, Zap, Shield, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Layout from '@/components/layout/Layout';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techCategories = [
    { id: 'all', name: 'All Technologies', icon: Cpu },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'infra', name: 'Infrastructure', icon: Cloud },
    { id: 'cms', name: 'CMS', icon: Zap },
    { id: 'devops', name: 'DevOps', icon: Shield },
    { id: 'apis', name: 'APIs & Services', icon: ExternalLink },
  ];

  const technologies = [
    // Frontend
    {
      name: 'React',
      category: 'frontend',
      description: 'Modern JavaScript library for building user interfaces with component-based architecture',
      icon: '⚛️',
      whyUsed: 'Fast, scalable, and maintainable. Large ecosystem and excellent developer experience.',
      caseStudies: ['Landing pages', 'Web applications', 'E-commerce sites'],
      popular: true,
      officialUrl: 'https://react.dev'
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      description: 'Typed superset of JavaScript that compiles to plain JavaScript',
      icon: '📘',
      whyUsed: 'Catches errors early, improves code quality, and enhances developer productivity.',
      caseStudies: ['Large applications', 'Team projects', 'Complex business logic'],
      popular: true,
      officialUrl: 'https://www.typescriptlang.org'
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      description: 'Utility-first CSS framework for rapidly building custom designs',
      icon: '🎨',
      whyUsed: 'Rapid development, consistent design system, and excellent mobile responsiveness.',
      caseStudies: ['All projects', 'Design systems', 'Responsive layouts'],
      popular: true,
      officialUrl: 'https://tailwindcss.com'
    },
    {
      name: 'Next.js',
      category: 'frontend',
      description: 'React framework with server-side rendering and static site generation',
      icon: '▲',
      whyUsed: 'SEO-friendly, fast loading, and excellent performance out of the box.',
      caseStudies: ['Marketing sites', 'Blogs', 'E-commerce platforms'],
      popular: true,
      officialUrl: 'https://nextjs.org'
    },
    {
      name: 'Framer Motion',
      category: 'frontend',
      description: 'Production-ready motion library for React',
      icon: '🎬',
      whyUsed: 'Smooth animations, great user experience, and easy implementation.',
      caseStudies: ['Portfolio sites', 'Landing pages', 'Interactive experiences'],
      popular: false,
      officialUrl: 'https://www.framer.com/motion'
    },

    // Backend
    {
      name: 'Node.js',
      category: 'backend',
      description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      icon: '🚀',
      whyUsed: 'Fast, scalable, and uses the same language as frontend for full-stack development.',
      caseStudies: ['APIs', 'Real-time applications', 'Microservices'],
      popular: true,
      officialUrl: 'https://nodejs.org'
    },
    {
      name: 'PostgreSQL',
      category: 'backend',
      description: 'Advanced open-source relational database',
      icon: '🐘',
      whyUsed: 'Reliable, ACID compliant, and supports complex queries and data types.',
      caseStudies: ['E-commerce', 'User management', 'Analytics'],
      popular: true,
      officialUrl: 'https://www.postgresql.org'
    },
    {
      name: 'MongoDB',
      category: 'backend',
      description: 'NoSQL document database for modern applications',
      icon: '🍃',
      whyUsed: 'Flexible schema, horizontal scaling, and great for rapid development.',
      caseStudies: ['Content management', 'Real-time apps', 'Prototypes'],
      popular: false,
      officialUrl: 'https://www.mongodb.com'
    },
    {
      name: 'Prisma',
      category: 'backend',
      description: 'Next-generation ORM for Node.js and TypeScript',
      icon: '🔺',
      whyUsed: 'Type-safe database access, automatic migrations, and great developer experience.',
      caseStudies: ['Database management', 'API development', 'Data modeling'],
      popular: true,
      officialUrl: 'https://www.prisma.io'
    },

    // Infrastructure
    {
      name: 'Vercel',
      category: 'infra',
      description: 'Platform for frontend frameworks and static sites',
      icon: '▲',
      whyUsed: 'Easy deployment, excellent performance, and seamless integration with Next.js.',
      caseStudies: ['Frontend deployment', 'Static sites', 'Jamstack applications'],
      popular: true,
      officialUrl: 'https://vercel.com'
    },
    {
      name: 'Railway',
      category: 'infra',
      description: 'Platform for deploying and managing backend services',
      icon: '🚂',
      whyUsed: 'Simple deployment, automatic scaling, and great for full-stack applications.',
      caseStudies: ['API hosting', 'Database hosting', 'Full-stack apps'],
      popular: true,
      officialUrl: 'https://railway.app'
    },
    {
      name: 'AWS',
      category: 'infra',
      description: 'Amazon Web Services cloud platform',
      icon: '☁️',
      whyUsed: 'Comprehensive services, reliability, and scalability for enterprise needs.',
      caseStudies: ['Enterprise hosting', 'File storage', 'Complex infrastructure'],
      popular: false,
      officialUrl: 'https://aws.amazon.com'
    },
    {
      name: 'Cloudflare',
      category: 'infra',
      description: 'Global network for security, performance, and reliability',
      icon: '⚡',
      whyUsed: 'CDN, security, and performance optimization for better user experience.',
      caseStudies: ['Performance optimization', 'Security', 'Global distribution'],
      popular: true,
      officialUrl: 'https://www.cloudflare.com'
    },

    // CMS
    {
      name: 'Sanity',
      category: 'cms',
      description: 'Headless CMS with real-time collaboration',
      icon: '📝',
      whyUsed: 'Flexible content modeling, real-time updates, and great developer experience.',
      caseStudies: ['Blogs', 'Portfolio sites', 'Content-heavy websites'],
      popular: true,
      officialUrl: 'https://www.sanity.io'
    },
    {
      name: 'Strapi',
      category: 'cms',
      description: 'Open-source headless CMS',
      icon: '🛡️',
      whyUsed: 'Customizable, API-first, and self-hosted for better control.',
      caseStudies: ['Custom CMS needs', 'API development', 'Content management'],
      popular: false,
      officialUrl: 'https://strapi.io'
    },

    // DevOps
    {
      name: 'GitHub Actions',
      category: 'devops',
      description: 'CI/CD platform for automating workflows',
      icon: '⚙️',
      whyUsed: 'Integrated with GitHub, easy setup, and powerful automation capabilities.',
      caseStudies: ['Automated testing', 'Deployment pipelines', 'Code quality checks'],
      popular: true,
      officialUrl: 'https://github.com/features/actions'
    },
    {
      name: 'Docker',
      category: 'devops',
      description: 'Containerization platform for applications',
      icon: '🐳',
      whyUsed: 'Consistent environments, easy deployment, and scalable architecture.',
      caseStudies: ['Microservices', 'Development environments', 'Production deployment'],
      popular: false,
      officialUrl: 'https://www.docker.com'
    },

    // APIs & Services
    {
      name: 'Stripe',
      category: 'apis',
      description: 'Payment processing platform',
      icon: '💳',
      whyUsed: 'Secure, reliable, and comprehensive payment solutions with great documentation.',
      caseStudies: ['E-commerce', 'Subscriptions', 'Payment processing'],
      popular: true,
      officialUrl: 'https://stripe.com'
    },
    {
      name: 'Auth0',
      category: 'apis',
      description: 'Identity and access management platform',
      icon: '🔐',
      whyUsed: 'Secure authentication, multiple providers, and enterprise-grade security.',
      caseStudies: ['User authentication', 'SSO implementation', 'Security'],
      popular: false,
      officialUrl: 'https://auth0.com'
    },
    {
      name: 'SendGrid',
      category: 'apis',
      description: 'Email delivery service',
      icon: '📧',
      whyUsed: 'Reliable email delivery, analytics, and easy integration.',
      caseStudies: ['Transactional emails', 'Marketing campaigns', 'Notifications'],
      popular: true,
      officialUrl: 'https://sendgrid.com'
    },
    {
      name: 'Mapbox',
      category: 'apis',
      description: 'Maps and location services',
      icon: '🗺️',
      whyUsed: 'Customizable maps, accurate location data, and great performance.',
      caseStudies: ['Real estate', 'Location-based apps', 'Store locators'],
      popular: false,
      officialUrl: 'https://www.mapbox.com'
    },
  ];

  const filteredTechnologies = selectedCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  const popularTechnologies = technologies.filter(tech => tech.popular);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-large-title mb-6">
              Our <span className="text-primary">Tech Stack</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              We use modern, battle-tested technologies to build fast, secure, and scalable web solutions.
              Every tool is chosen for reliability and developer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Technologies */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Most Used Technologies</h2>
            <p className="text-body text-muted-foreground">
              Our go-to tools for most projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {popularTechnologies.map((tech, index) => (
              <TooltipProvider key={tech.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="card-elevated hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{tech.icon}</div>
                        <h3 className="text-callout font-semibold">{tech.name}</h3>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{tech.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 bg-surface border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {techCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${selectedCategory === category.id
                    ? 'btn-primary'
                    : 'btn-secondary'
                    } flex items-center space-x-2`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTechnologies.map((tech, index) => (
              <Card key={tech.name} className="card-elevated animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{tech.icon}</div>
                    <div>
                      <CardTitle className="text-title-3">{tech.name}</CardTitle>
                      {tech.popular && (
                        <Badge className="mt-1 bg-accent-brand text-accent-brand-foreground text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-body text-muted-foreground mb-4">
                    {tech.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-callout font-semibold mb-2">Why we use it:</h4>
                    <p className="text-subhead text-muted-foreground">
                      {tech.whyUsed}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-callout font-semibold mb-2">Use cases:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tech.caseStudies.map(useCase => (
                        <Badge key={useCase} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <a
                    href={tech.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="btn-secondary w-full">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Stack */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Why This Stack?</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Our technology choices are driven by performance, security, maintainability, and developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-surface text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-headline font-semibold mb-2">Performance</h3>
                <p className="text-subhead text-muted-foreground">
                  Every technology is chosen for speed and efficiency, ensuring your users get the best experience.
                </p>
              </CardContent>
            </Card>

            <Card className="card-surface text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-headline font-semibold mb-2">Security</h3>
                <p className="text-subhead text-muted-foreground">
                  Industry-standard security practices and regularly updated dependencies keep your data safe.
                </p>
              </CardContent>
            </Card>

            <Card className="card-surface text-center">
              <CardContent className="p-6">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-headline font-semibold mb-2">Maintainability</h3>
                <p className="text-subhead text-muted-foreground">
                  Clean, well-documented code using modern patterns that are easy to update and extend.
                </p>
              </CardContent>
            </Card>

            <Card className="card-surface text-center">
              <CardContent className="p-6">
                <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-headline font-semibold mb-2">Scalability</h3>
                <p className="text-subhead text-muted-foreground">
                  Built to grow with your business, from small projects to enterprise-scale applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent-brand/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-title-1 mb-6 text-foreground">Ready to Build With Modern Tech?</h2>
          <p className="text-body mb-8 text-muted-foreground max-w-2xl mx-auto">
            Let us build your next project with the latest technologies and best practices.
            Fast, secure, and built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link to="/schedule-call">
              <Button variant="outline" className="text-lg px-8 py-4">
                Discuss Technology Needs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechStack;