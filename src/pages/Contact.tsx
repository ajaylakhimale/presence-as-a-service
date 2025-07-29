import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        projectType: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email anytime',
      value: siteConfig.contact.email,
      action: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us for immediate assistance',
      value: siteConfig.contact.phone,
      action: `tel:${siteConfig.contact.phone}`
    },
    {
      icon: MapPin,
      title: 'Address',
      description: 'Visit our office',
      value: siteConfig.contact.address,
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday - Friday',
      value: '9:00 AM - 6:00 PM EST',
      action: '#'
    }
  ];

  const projectTypes = [
    'Landing Page',
    'E-commerce Website',
    'Web Application',
    'Mobile App',
    'Redesign',
    'Maintenance & Support',
    'Custom Development',
    'Other'
  ];

  const stats = [
    { icon: MessageSquare, label: 'Avg Response Time', value: '< 2 hours' },
    { icon: Users, label: 'Satisfaction Rate', value: '98%' },
    { icon: Zap, label: 'Projects Delivered', value: '247+' }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Get in Touch | {siteConfig.name}</title>
        <meta name="description" content="Get in touch with our team for custom web solutions. Fast response times, transparent pricing, and expert consultation for your next project." />
        <meta property="og:title" content="Contact Us - Get in Touch | macro presence" />
        <meta property="og:description" content="Contact our web development team for custom solutions and expert consultation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-brand))_0%,transparent_50%)] opacity-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="inline-flex items-center rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary ring-1 ring-primary/20 mb-6">
              <MessageSquare className="h-4 w-4 mr-2" />
              Let's Talk
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to bring your digital vision to life? Let's discuss your project and 
              create something amazing together.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-card/70 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-title-2">Send us a Message</CardTitle>
                  <p className="text-body text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief subject of your inquiry"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="btn-primary w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-title-2 mb-4">Contact Information</h2>
                <p className="text-body text-muted-foreground">
                  We're here to help you succeed. Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={info.title} className="card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-headline font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>
                            <p className="text-subhead text-muted-foreground mb-2">
                              {info.description}
                            </p>
                            {info.action !== '#' ? (
                              <a 
                                href={info.action}
                                className="text-body text-primary hover:text-primary/80 transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-body text-foreground font-medium">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Contact CTA */}
              <Card className="card-elevated mt-8">
                <CardContent className="p-6 text-center">
                  <h3 className="text-title-3 mb-2">Need Immediate Help?</h3>
                  <p className="text-body text-muted-foreground mb-4">
                    For urgent inquiries, call us directly or send an email.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="btn-primary flex-1">
                      <a href={`tel:${siteConfig.contact.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href={`mailto:${siteConfig.contact.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-title-1 mb-4">Frequently Asked Questions</h2>
            <p className="text-body text-muted-foreground">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "Most projects can start within 1-2 business days after requirements are finalized."
              },
              {
                question: "Do you offer project consultations?",
                answer: "Yes! We provide free initial consultations to discuss your project needs and provide accurate estimates."
              },
              {
                question: "What's included in your pricing?",
                answer: "Our pricing includes design, development, testing, deployment, and one round of revisions."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer flexible support packages for maintenance, updates, and feature additions."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-headline font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;