import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from a CMS or API
  const blogPost = {
    id: slug,
    title: 'The Ultimate Guide to Digital Transformation in 2024',
    excerpt: 'Discover how businesses are leveraging cutting-edge web technologies to create powerful online identities that drive growth and customer engagement.',
    content: `
      <p>In today's rapidly evolving digital landscape, having a strong online presence isn't just an advantage—it's essential for survival and growth. Digital transformation has become the cornerstone of business success, enabling companies to reach wider audiences, streamline operations, and create meaningful connections with their customers.</p>

      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation is the process of integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.</p>

      <h2>The Power of a Strong Online Identity</h2>
      <p>Your online identity is more than just a website—it's the digital representation of your brand, values, and promise to customers. At ${siteConfig.company.name}, we understand that crafting powerful online identities requires a deep understanding of both technology and human psychology.</p>

      <h3>Key Components of Digital Success</h3>
      <ul>
        <li><strong>Responsive Web Design:</strong> Ensuring your website looks and functions perfectly across all devices</li>
        <li><strong>User Experience (UX):</strong> Creating intuitive, engaging experiences that convert visitors into customers</li>
        <li><strong>Performance Optimization:</strong> Fast-loading websites that keep users engaged and improve search rankings</li>
        <li><strong>SEO Strategy:</strong> Making your business discoverable when customers are searching for solutions</li>
        <li><strong>Content Strategy:</strong> Providing valuable, relevant content that establishes your expertise</li>
      </ul>

      <h2>Modern Web Technologies Driving Success</h2>
      <p>The web development landscape has evolved dramatically, with new technologies enabling faster, more interactive, and more secure web applications. Technologies like React, modern CSS frameworks, and cloud-based solutions are revolutionizing how businesses connect with their audiences.</p>

      <h3>Why Choose Modern Solutions?</h3>
      <p>Modern web technologies offer several advantages:</p>
      <ul>
        <li>Faster development cycles</li>
        <li>Better performance and user experience</li>
        <li>Improved security and reliability</li>
        <li>Enhanced mobile responsiveness</li>
        <li>Better search engine optimization</li>
      </ul>

      <h2>The ${siteConfig.company.name} Approach</h2>
      <p>Our mission is simple: ${siteConfig.company.mission} We believe that every business deserves a digital presence that not only looks stunning but also drives real results.</p>

      <p>We combine cutting-edge technology with strategic thinking to create solutions that:</p>
      <ul>
        <li>Reflect your brand's unique identity</li>
        <li>Engage your target audience effectively</li>
        <li>Drive conversions and business growth</li>
        <li>Scale with your business needs</li>
      </ul>

      <h2>Getting Started with Digital Transformation</h2>
      <p>Ready to transform your digital presence? Here's how to begin:</p>
      <ol>
        <li><strong>Audit Your Current Presence:</strong> Evaluate your existing digital assets</li>
        <li><strong>Define Your Goals:</strong> What do you want to achieve online?</li>
        <li><strong>Understand Your Audience:</strong> Who are you trying to reach?</li>
        <li><strong>Choose the Right Technologies:</strong> Select tools that align with your goals</li>
        <li><strong>Plan for Growth:</strong> Build solutions that can scale with your success</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Digital transformation isn't just about technology—it's about reimagining how your business connects with the world. With the right strategy, tools, and partner, you can create a powerful online identity that drives real business results.</p>

      <p>At ${siteConfig.company.name}, we're here to help you navigate this transformation and build the digital presence your business deserves.</p>
    `,
    category: 'Strategy',
    author: 'macro presence Team',
    date: '2024-01-15',
    readTime: '8 min read',
    image: '/placeholder.svg',
    tags: ['Digital Strategy', 'Web Development', 'Business Growth', 'Technology', 'Brand Identity']
  };

  const relatedPosts = [
    {
      id: 'responsive-design-best-practices',
      title: 'Responsive Design Best Practices That Convert Visitors',
      category: 'Design',
      readTime: '6 min read'
    },
    {
      id: 'modern-web-technologies-2024',
      title: 'Modern Web Technologies Shaping Business Success',
      category: 'Technology',
      readTime: '10 min read'
    },
    {
      id: 'brand-identity-digital-age',
      title: 'Building Powerful Brand Identity in the Digital Age',
      category: 'Branding',
      readTime: '7 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <header className="mx-auto max-w-4xl px-6 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary">{blogPost.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(blogPost.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {blogPost.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {blogPost.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-foreground">{blogPost.author}</div>
                <div className="text-sm text-muted-foreground">Team {siteConfig.company.name}</div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mx-auto max-w-4xl px-6 mb-12">
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Call to Action */}
              <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-primary" />
                    Ready to Transform Your Digital Presence?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Let {siteConfig.company.name} help you craft a powerful online identity that drives real business results.
                    Our expert team is ready to turn your digital vision into reality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/onboarding">
                      <Button className="btn-primary">
                        Start Your Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/pricing">
                      <Button variant="outline">
                        View Pricing
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      In This Article
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      <a href="#what-is-digital-transformation" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        What is Digital Transformation?
                      </a>
                      <a href="#power-of-online-identity" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        The Power of Online Identity
                      </a>
                      <a href="#modern-web-technologies" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Modern Web Technologies
                      </a>
                      <a href="#our-approach" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Our Approach
                      </a>
                      <a href="#getting-started" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Getting Started
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Company Highlight */}
                <Card className="bg-gradient-to-b from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                      Why Choose {siteConfig.company.name}?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Expert team with proven track record</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Modern technologies and best practices</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Focus on business results</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Comprehensive support and guidance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Separator className="my-12" />

      {/* Related Posts */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;