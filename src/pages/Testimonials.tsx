import { useState } from 'react';
import { Star, Play, Quote, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
import { Helmet } from 'react-helmet-async';

const Testimonials = () => {
  const [filterPlan, setFilterPlan] = useState('all');
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    plan: '',
    industry: '',
    testimonial: '',
    rating: 5,
    consent: false
  });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      role: 'CEO',
      plan: 'Growth',
      industry: 'Technology',
      rating: 5,
      text: 'WPaaS delivered our landing page in just 5 days. The quality exceeded our expectations and the pricing was transparent throughout. Our conversion rate increased by 40% after launch.',
      avatar: '👩‍💻',
      type: 'text',
      featured: true
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      company: 'Local Bistro',
      role: 'Owner',
      plan: 'Starter',
      industry: 'Food & Beverage',
      rating: 5,
      text: 'Finally, a web service that understands small businesses. No long contracts, just great results when we need them. Our online reservations doubled!',
      avatar: '👨‍🍳',
      type: 'text',
      featured: false
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Design Studio',
      role: 'Creative Director',
      plan: 'Pro',
      industry: 'Creative',
      rating: 5,
      text: 'The pay-as-you-need model is perfect for our growing agency. We can scale our web presence as we grow. The design quality is exceptional.',
      avatar: '👩‍🎨',
      type: 'video',
      featured: true
    },
    {
      id: 4,
      name: 'David Park',
      company: 'E-commerce Plus',
      role: 'Founder',
      plan: 'Pro',
      industry: 'Retail',
      rating: 5,
      text: 'Our e-commerce platform increased sales by 150% in the first month. The technical execution was flawless and support has been incredible.',
      avatar: '👨‍💼',
      type: 'text',
      featured: false
    },
    {
      id: 5,
      name: 'Dr. Lisa Thompson',
      company: 'Medical Center',
      role: 'Administrator',
      plan: 'Enterprise',
      industry: 'Healthcare',
      rating: 5,
      text: 'The patient management system streamlined our operations completely. Security and compliance were handled perfectly. Highly recommended.',
      avatar: '👩‍⚕️',
      type: 'text',
      featured: true
    },
    {
      id: 6,
      name: 'Michael Green',
      company: 'Premier Realty',
      role: 'Broker',
      plan: 'Pro',
      industry: 'Real Estate',
      rating: 5,
      text: 'Best real estate platform in our area. The property search functionality and virtual tours have impressed both agents and clients.',
      avatar: '👨‍💼',
      type: 'video',
      featured: false
    }
  ];

  const plans = ['all', 'Starter', 'Growth', 'Pro', 'Enterprise'];
  const industries = ['all', 'Technology', 'Food & Beverage', 'Creative', 'Retail', 'Healthcare', 'Real Estate'];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesPlan = filterPlan === 'all' || testimonial.plan === filterPlan;
    const matchesIndustry = filterIndustry === 'all' || testimonial.industry === filterIndustry;
    return matchesPlan && matchesIndustry;
  });

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Testimonial submitted:', testimonialForm);
    // Handle form submission here
  };

  return (
    <Layout>
      <Helmet>
        <title>Client Testimonials | Trusted by Industry Leaders</title>
        <meta name="description" content="Read real reviews from satisfied clients in Real Estate, Law, Startups, and more. Discover why businesses trust us for their digital needs." />
        <meta property="og:title" content="Client Testimonials | macro presence" />
        <meta property="og:description" content="Hear from our happy clients." />
        <meta property="og:image" content="https://macro-presence.dev/og-testimonials.jpg" />
        <meta property="og:url" content="https://macro-presence.dev/testimonials" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@macro_presence" />
        <meta name="twitter:image" content="https://macro-presence.dev/og-testimonials.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 overflow-hidden">
        {/* Particle Effects */}
        <ParticleEffect />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-large-title mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              See what our clients say about working with WPaaS. Real feedback from real businesses 
              who trusted us with their web presence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="text-center">
                <div className="text-title-1 font-bold text-primary">98%</div>
                <div className="text-callout text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-title-1 font-bold text-primary">4.9</div>
                <div className="text-callout text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-title-1 font-bold text-primary">89+</div>
                <div className="text-callout text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-background border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h2 className="text-title-3">All Testimonials</h2>
            
            <div className="flex gap-4">
              <Select value={filterPlan} onValueChange={setFilterPlan}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Plan" />
                </SelectTrigger>
                <SelectContent>
                  {plans.map(plan => (
                    <SelectItem key={plan} value={plan}>
                      {plan === 'all' ? 'All Plans' : plan}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterIndustry} onValueChange={setFilterIndustry}>
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

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-primary">
                    Submit Testimonial
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Share Your Experience</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmitTestimonial} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={testimonialForm.name}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                      <Input
                        placeholder="Company"
                        value={testimonialForm.company}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, company: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Role"
                        value={testimonialForm.role}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, role: e.target.value }))}
                      />
                      <Input
                        placeholder="Email"
                        type="email"
                        value={testimonialForm.email}
                        onChange={(e) => setTestimonialForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Select value={testimonialForm.plan} onValueChange={(value) => setTestimonialForm(prev => ({ ...prev, plan: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Plan Used" />
                        </SelectTrigger>
                        <SelectContent>
                          {plans.filter(p => p !== 'all').map(plan => (
                            <SelectItem key={plan} value={plan}>{plan}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      <Select value={testimonialForm.industry} onValueChange={(value) => setTestimonialForm(prev => ({ ...prev, industry: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.filter(i => i !== 'all').map(industry => (
                            <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-subhead mb-2 block">Rating</label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setTestimonialForm(prev => ({ ...prev, rating: star }))}
                            className={`text-2xl ${star <= testimonialForm.rating ? 'text-accent-brand' : 'text-muted'}`}
                          >
                            <Star className="h-6 w-6 fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <Textarea
                      placeholder="Share your experience with WPaaS..."
                      value={testimonialForm.testimonial}
                      onChange={(e) => setTestimonialForm(prev => ({ ...prev, testimonial: e.target.value }))}
                      rows={4}
                      required
                    />
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="consent"
                        checked={testimonialForm.consent}
                        onCheckedChange={(checked) => setTestimonialForm(prev => ({ ...prev, consent: checked as boolean }))}
                      />
                      <label htmlFor="consent" className="text-subhead text-muted-foreground">
                        I consent to WPaaS using this testimonial for marketing purposes
                      </label>
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full" disabled={!testimonialForm.consent}>
                      Submit Testimonial
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title-1 mb-4">Featured Stories</h2>
            <p className="text-body text-muted-foreground">
              Highlighted testimonials from our most successful projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {filteredTestimonials.filter(t => t.featured).map((testimonial, index) => (
              <Card key={testimonial.id} className="card-elevated animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h3 className="text-headline font-semibold">{testimonial.name}</h3>
                      <p className="text-subhead text-muted-foreground">{testimonial.role}</p>
                      <p className="text-subhead text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent-brand fill-current" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">{testimonial.plan}</Badge>
                    {testimonial.type === 'video' && (
                      <Badge className="ml-2 bg-accent-brand text-accent-brand-foreground text-xs">
                        <Play className="h-3 w-3 mr-1" />
                        Video
                      </Badge>
                    )}
                  </div>
                  
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-body italic mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-title-2 mb-8 text-center">All Client Feedback</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.filter(t => !t.featured).map((testimonial, index) => (
              <Card key={testimonial.id} className="card-surface animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <h4 className="text-headline font-semibold">{testimonial.name}</h4>
                        <p className="text-subhead text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">{testimonial.plan}</Badge>
                      {testimonial.type === 'video' && (
                        <Play className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent-brand fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-body">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-title-3 mb-2">No testimonials found</h3>
              <p className="text-body text-muted-foreground mb-6">
                Try adjusting your filters to see more testimonials
              </p>
              <Button 
                onClick={() => {
                  setFilterPlan('all');
                  setFilterIndustry('all');
                }}
                className="btn-secondary"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;