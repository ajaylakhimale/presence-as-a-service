import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Filter, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Layout from '@/components/layout/Layout';

const Showcase = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: 'TechStart Landing Page',
      description: 'Modern SaaS landing page with animated hero section and conversion-optimized design',
      image: '/placeholder.svg',
      industry: 'Technology',
      type: 'Landing Page',
      tech: ['React', 'TypeScript', 'Tailwind'],
      client: 'TechStart Inc.',
      quote: 'Exceeded our expectations in design and performance',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '4 days'
    },
    {
      id: 2,
      title: 'Local Bistro Website',
      description: 'Restaurant website with online reservations and menu management',
      image: '/placeholder.svg',
      industry: 'Food & Beverage',
      type: 'Business Website',
      tech: ['React', 'Node.js', 'Stripe'],
      client: 'Local Bistro',
      quote: 'Our online reservations increased by 200%',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '6 days'
    },
    {
      id: 3,
      title: 'Design Agency Portfolio',
      description: 'Creative portfolio showcasing design work with smooth animations',
      image: '/placeholder.svg',
      industry: 'Creative',
      type: 'Portfolio',
      tech: ['React', 'Framer Motion', 'Sanity'],
      client: 'Design Studio',
      quote: 'Beautiful design that perfectly represents our brand',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '8 days'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment processing and inventory management',
      image: '/placeholder.svg',
      industry: 'Retail',
      type: 'E-commerce',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      client: 'Fashion Boutique',
      quote: 'Sales increased 150% since launch',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '14 days'
    },
    {
      id: 5,
      title: 'Healthcare Dashboard',
      description: 'Patient management system with secure data handling and analytics',
      image: '/placeholder.svg',
      industry: 'Healthcare',
      type: 'Web Application',
      tech: ['React', 'Node.js', 'MongoDB', 'Auth0'],
      client: 'Medical Center',
      quote: 'Streamlined our patient management completely',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '21 days'
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      description: 'Property listing site with advanced search and virtual tours',
      image: '/placeholder.svg',
      industry: 'Real Estate',
      type: 'Web Application',
      tech: ['React', 'TypeScript', 'Mapbox', 'Cloudinary'],
      client: 'Premier Realty',
      quote: 'Best real estate platform in our area',
      rating: 5,
      liveUrl: '#',
      deliveryTime: '18 days'
    }
  ];

  const industries = ['all', 'Technology', 'Food & Beverage', 'Creative', 'Retail', 'Healthcare', 'Real Estate'];
  const types = ['all', 'Landing Page', 'Business Website', 'Portfolio', 'E-commerce', 'Web Application'];
  const technologies = ['all', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'Stripe', 'MongoDB', 'PostgreSQL'];

  const filteredProjects = projects.filter(project => {
    const matchesIndustry = selectedIndustry === 'all' || project.industry === selectedIndustry;
    const matchesType = selectedType === 'all' || project.type === selectedType;
    const matchesTech = selectedTech === 'all' || project.tech.includes(selectedTech);
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesIndustry && matchesType && matchesTech && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-large-title mb-6">
              Our <span className="text-primary">Showcase</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our recent projects across different industries and technologies. 
              See what we can build for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-background border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex items-center space-x-2 flex-1">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-sm"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Site Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTech} onValueChange={setSelectedTech}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  {technologies.map(tech => (
                    <SelectItem key={tech} value={tech}>
                      {tech === 'all' ? 'All Tech' : tech}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 text-subhead text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="card-elevated hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="p-0">
                  <div className="aspect-video bg-surface rounded-t-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-title-3 font-semibold">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.deliveryTime}
                    </Badge>
                  </div>
                  
                  <p className="text-body text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">{project.industry}</Badge>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map(tech => (
                      <Badge key={tech} className="text-xs bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mb-4 p-3 bg-surface rounded-lg">
                    <div className="flex items-center mb-2">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent-brand fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-subhead italic">
                      "{project.quote}"
                    </blockquote>
                    <div className="text-caption-2 text-muted-foreground mt-1">
                      — {project.client}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to={`/showcase/${project.id}`} className="flex-1">
                      <Button className="btn-secondary w-full">
                        View Details
                      </Button>
                    </Link>
                    <Button className="btn-primary px-3" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-title-3 mb-2">No projects found</h3>
              <p className="text-body text-muted-foreground mb-6">
                Try adjusting your filters to see more projects
              </p>
              <Button 
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedType('all');
                  setSelectedTech('all');
                  setSearchQuery('');
                }}
                className="btn-secondary"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title-1 mb-6">Want One Like This?</h2>
          <p className="text-body mb-8 opacity-90">
            Every project is unique, but we can create something similar for your business. 
            Let's discuss your specific needs and requirements.
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

export default Showcase;