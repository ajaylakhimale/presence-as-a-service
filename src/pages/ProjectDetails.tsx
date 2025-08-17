import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Star, Calendar, Clock, Users, Code, Palette, Zap, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Layout from '@/components/layout/Layout';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Mock project data - in a real app, this would come from an API
  const projectsData = [
    {
      id: 1,
      title: 'TechStart Landing Page',
      description: 'Modern SaaS landing page with animated hero section and conversion-optimized design',
      fullDescription: 'A comprehensive landing page for TechStart Inc., a SaaS company specializing in project management tools. The project focused on creating a high-converting landing page that effectively communicates the product value proposition and drives user sign-ups.',
      images: [
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg'
      ],
      industry: 'Technology',
      type: 'Landing Page',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      client: 'TechStart Inc.',
      clientInfo: {
        name: 'Sarah Chen',
        role: 'CEO & Founder',
        company: 'TechStart Inc.',
        avatar: '/placeholder.svg'
      },
      quote: 'Exceeded our expectations in design and performance. The conversion rate increased by 40% within the first month.',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '4 days',
      startDate: '2024-01-15',
      endDate: '2024-01-19',
      team: ['Frontend Developer', 'UI/UX Designer', 'Project Manager'],
      features: [
        'Responsive design for all devices',
        'Animated hero section with interactive elements',
        'Conversion-optimized call-to-action buttons',
        'Integration with analytics and tracking',
        'SEO optimization for better search rankings',
        'Fast loading times (< 2 seconds)',
        'Contact form with validation',
        'Social media integration'
      ],
      challenges: [
        'Tight deadline of 4 days',
        'Complex animations without affecting performance',
        'Ensuring cross-browser compatibility',
        'Optimizing for mobile conversion rates'
      ],
      solutions: [
        'Used modern build tools for faster development',
        'Implemented lazy loading for animations',
        'Extensive testing across different browsers',
        'Mobile-first design approach with conversion optimization'
      ],
      results: [
        '40% increase in conversion rate',
        '60% improvement in page load speed',
        '95% mobile usability score',
        '100% client satisfaction'
      ],
      process: [
        {
          phase: 'Discovery',
          description: 'Understanding client needs and target audience',
          duration: '1 day',
          deliverables: ['Requirements document', 'Wireframes', 'Project timeline']
        },
        {
          phase: 'Design',
          description: 'Creating visual designs and user experience',
          duration: '1 day',
          deliverables: ['UI mockups', 'Design system', 'Interactive prototypes']
        },
        {
          phase: 'Development',
          description: 'Building the website with modern technologies',
          duration: '1.5 days',
          deliverables: ['Responsive website', 'Performance optimization', 'Cross-browser testing']
        },
        {
          phase: 'Launch',
          description: 'Deployment and final testing',
          duration: '0.5 days',
          deliverables: ['Live website', 'Analytics setup', 'Client training']
        }
      ]
    },
    {
      id: 2,
      title: 'Local Bistro Website',
      description: 'Restaurant website with online reservations and menu management',
      fullDescription: 'A comprehensive website for Local Bistro, a popular restaurant chain. The project included an online reservation system, menu management, and customer review integration to enhance the dining experience.',
      images: [
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg'
      ],
      industry: 'Food & Beverage',
      type: 'Business Website',
      tech: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Express'],
      client: 'Local Bistro',
      clientInfo: {
        name: 'Marcus Johnson',
        role: 'Owner',
        company: 'Local Bistro',
        avatar: '/placeholder.svg'
      },
      quote: 'Our online reservations increased by 200% and customer engagement has never been higher.',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '6 days',
      startDate: '2024-02-01',
      endDate: '2024-02-07',
      team: ['Full-stack Developer', 'UI/UX Designer', 'Backend Developer'],
      features: [
        'Online reservation system',
        'Dynamic menu management',
        'Customer review integration',
        'Mobile-responsive design',
        'Payment processing integration',
        'Admin dashboard for restaurant staff',
        'Real-time availability updates',
        'Email notification system'
      ],
      challenges: [
        'Integrating with existing POS system',
        'Handling high traffic during peak hours',
        'Ensuring data security for customer information',
        'Creating an intuitive reservation flow'
      ],
      solutions: [
        'Built custom API integration with POS system',
        'Implemented caching and load balancing',
        'Used secure payment processing with Stripe',
        'Designed user-friendly reservation interface'
      ],
      results: [
        '200% increase in online reservations',
        '30% reduction in phone call volume',
        'Improved customer satisfaction scores',
        'Streamlined restaurant operations'
      ],
      process: [
        {
          phase: 'Planning',
          description: 'Understanding restaurant operations and requirements',
          duration: '1 day',
          deliverables: ['Requirements analysis', 'System architecture', 'Integration plan']
        },
        {
          phase: 'Design',
          description: 'Creating user-friendly interfaces for customers and staff',
          duration: '1.5 days',
          deliverables: ['Customer interface designs', 'Admin dashboard mockups', 'User flow diagrams']
        },
        {
          phase: 'Development',
          description: 'Building the full-stack application',
          duration: '3 days',
          deliverables: ['Frontend application', 'Backend API', 'Database setup', 'Payment integration']
        },
        {
          phase: 'Testing & Launch',
          description: 'Testing and deployment',
          duration: '0.5 days',
          deliverables: ['Live website', 'Staff training', 'Documentation']
        }
      ]
    },
    {
      id: 3,
      title: 'Design Agency Portfolio',
      description: 'Creative portfolio showcasing design work with smooth animations',
      fullDescription: 'A stunning portfolio website for Design Studio, showcasing their creative work with smooth animations and interactive elements. The project focused on creating an immersive experience that highlights their design expertise.',
      images: [
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg'
      ],
      industry: 'Creative',
      type: 'Portfolio',
      tech: ['React', 'Framer Motion', 'Sanity CMS', 'TypeScript', 'Tailwind CSS'],
      client: 'Design Studio',
      clientInfo: {
        name: 'Emily Rodriguez',
        role: 'Creative Director',
        company: 'Design Studio',
        avatar: '/placeholder.svg'
      },
      quote: 'Beautiful design that perfectly represents our brand. The animations and interactions are exactly what we wanted.',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '8 days',
      startDate: '2024-03-01',
      endDate: '2024-03-09',
      team: ['Frontend Developer', 'UI/UX Designer', 'Motion Designer'],
      features: [
        'Interactive portfolio gallery',
        'Smooth page transitions',
        'Content management system',
        'Project case studies',
        'Team member profiles',
        'Contact form with validation',
        'Blog section',
        'Social media integration'
      ],
      challenges: [
        'Creating smooth animations without performance issues',
        'Managing large image galleries efficiently',
        'Ensuring accessibility with complex animations',
        'Integrating content management system'
      ],
      solutions: [
        'Used Framer Motion for optimized animations',
        'Implemented lazy loading and image optimization',
        'Added proper ARIA labels and keyboard navigation',
        'Built custom Sanity CMS integration'
      ],
      results: [
        '50% increase in portfolio views',
        'Improved user engagement metrics',
        'Faster content updates for the team',
        'Enhanced brand perception'
      ],
      process: [
        {
          phase: 'Discovery',
          description: 'Understanding brand identity and portfolio requirements',
          duration: '1 day',
          deliverables: ['Brand analysis', 'Content strategy', 'User experience plan']
        },
        {
          phase: 'Design',
          description: 'Creating visual designs and animation concepts',
          duration: '2 days',
          deliverables: ['Visual designs', 'Animation storyboards', 'Interaction prototypes']
        },
        {
          phase: 'Development',
          description: 'Building the interactive portfolio',
          duration: '4 days',
          deliverables: ['Interactive website', 'CMS integration', 'Animation implementation']
        },
        {
          phase: 'Content & Launch',
          description: 'Content migration and final testing',
          duration: '1 day',
          deliverables: ['Live portfolio', 'Content migration', 'Performance optimization']
        }
      ]
    }
  ];

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id || '0'));
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-title-1 mb-4">Project Not Found</h1>
          <p className="text-body text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')} className="btn-primary">
            Back to Home
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 hover:bg-surface"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{project.industry}</Badge>
                <Badge variant="outline">{project.type}</Badge>
                <Badge variant="outline">{project.deliveryTime}</Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {project.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>Started {new Date(project.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span>Completed in {project.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span>{project.team.length} team members</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
                <Link to="/onboarding">
                  <Button className="btn-secondary">
                    Start Similar Project
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-surface rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-1 mb-12 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="aspect-video bg-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-title-1 mb-8">Project Overview</h2>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-title-2 mb-6 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-12">
                <h3 className="text-title-2 mb-6 flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  Development Process
                </h3>
                <div className="space-y-6">
                  {project.process.map((phase: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        {index < project.process.length - 1 && (
                          <div className="w-0.5 h-12 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-headline font-semibold">{phase.phase}</h4>
                          <Badge variant="secondary">{phase.duration}</Badge>
                        </div>
                        <p className="text-body text-muted-foreground mb-3">{phase.description}</p>
                        <div className="text-sm text-muted-foreground">
                          <strong>Deliverables:</strong> {phase.deliverables.join(', ')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="mb-12">
                <h3 className="text-title-2 mb-6">Challenges & Solutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-headline font-semibold mb-4 text-destructive">Challenges</h4>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-body">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-headline font-semibold mb-4 text-success">Solutions</h4>
                    <ul className="space-y-3">
                      {project.solutions.map((solution: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-body">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-title-2 mb-6 flex items-center gap-2">
                  <Palette className="h-6 w-6 text-primary" />
                  Results & Impact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((result: string, index: number) => (
                    <div key={index} className="bg-card p-4 rounded-lg border border-border-subtle">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-body font-medium">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Client Info */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-headline font-semibold mb-4">Client</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {project.clientInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-headline font-semibold">{project.clientInfo.name}</div>
                      <div className="text-subhead text-muted-foreground">{project.clientInfo.role}</div>
                      <div className="text-subhead text-muted-foreground">{project.clientInfo.company}</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent-brand fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-body italic text-muted-foreground">
                    "{project.quote}"
                  </blockquote>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-headline font-semibold mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <Badge key={tech} className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Team */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-headline font-semibold mb-4">Team</h3>
                  <div className="space-y-3">
                    {project.team.map((member: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-body">{member}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Stats */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-headline font-semibold mb-4">Project Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-body text-muted-foreground">Duration</span>
                      <span className="text-body font-semibold">{project.deliveryTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body text-muted-foreground">Team Size</span>
                      <span className="text-body font-semibold">{project.team.length} members</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body text-muted-foreground">Technologies</span>
                      <span className="text-body font-semibold">{project.tech.length} used</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body text-muted-foreground">Client Rating</span>
                      <div className="flex items-center gap-1">
                        <span className="text-body font-semibold">{project.rating}/5</span>
                        <Star className="h-4 w-4 text-accent-brand fill-current" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title-1 mb-6">Ready to Start Your Project?</h2>
          <p className="text-body mb-8 opacity-90">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4" variant="outline">
                Discuss Your Needs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetails; 