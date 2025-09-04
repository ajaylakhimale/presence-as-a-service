import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import ParticleEffect from '@/components/ParticleEffect';
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
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));

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
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@wpaas.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Business Ave, Suite 100",
      description: "San Francisco, CA 94105"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "24 hours",
      description: "We typically respond within"
    }
  ];

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'new-website', label: 'New Website' },
    { value: 'redesign', label: 'Website Redesign' },
    { value: 'ecommerce', label: 'E-commerce Store' },
    { value: 'web-app', label: 'Web Application' },
    { value: 'maintenance', label: 'Website Maintenance' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - {siteConfig.name}</title>
        <meta name="description" content="Get in touch with our team. We're here to help you build your perfect web presence." />
      </Helmet>

      <div className="relative min-h-screen bg-background pt-20">
        <ParticleEffect />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20">
                <MessageSquare className="w-4 h-4 mr-2" />
                Let's Connect
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent-brand bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your web presence? Let's discuss your project and see how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-fit">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {isSubmitted ? (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className="bg-background/50 border-border/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                          className="bg-background/50 border-border/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="bg-background/50 border-border/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background/50"
                        >
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Brief description of your inquiry"
                        className="bg-background/50 border-border/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        className="bg-background/50 border-border/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover text-white py-3 transition-colors duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="w-6 h-6 mr-3 text-primary" />
                    Get in touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {info.title}
                          </h3>
                          <p className="text-lg text-foreground">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border/50 bg-gradient-to-br from-primary/10 via-accent-brand/5 to-primary/10">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 mr-3 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Quick Response</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Need immediate assistance? We typically respond to inquiries within 24 hours during business days.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-primary" />
                      <span className="text-foreground">Response Time: 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-primary" />
                      <span className="text-foreground">Dedicated Support Team</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
