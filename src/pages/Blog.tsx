import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { siteConfig } from '@/config/site';
import ParticleEffect from '@/components/ParticleEffect';
import Layout from '@/components/layout/Layout';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured: boolean;
  published: boolean;
  tags: string[];
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  // Default featured post
  const defaultFeaturedPost = {
    id: 'digital-transformation-2024',
    title: 'The Ultimate Guide to Digital Transformation in 2024',
    excerpt: 'Discover how businesses are leveraging cutting-edge web technologies to create powerful online identities that drive growth and customer engagement.',
    content: 'In today\'s digital landscape, having a strong online presence isn\'t just an advantage—it\'s essential for survival...',
    category: 'Strategy',
    author: 'macro presence Team',
    date: '2024-01-15',
    readTime: '8 min read',
    image: '/placeholder.svg',
    featured: true,
    published: true,
    tags: ['Digital Strategy', 'Web Development', 'Business Growth']
  };

  // Default blog posts
  const defaultBlogPosts = [

    {
      id: 'responsive-design-best-practices',
      title: 'Responsive Design Best Practices That Convert Visitors',
      excerpt: 'Learn the essential responsive design principles that create seamless user experiences across all devices.',
      content: 'In today\'s multi-device world, responsive design isn\'t just a nice-to-have—it\'s essential...',
      category: 'Design',
      author: 'Design Team',
      date: '2024-01-12',
      readTime: '6 min read',
      published: true,
      featured: false,
      tags: ['Responsive Design', 'UX/UI', 'Conversion']
    },
    {
      id: 'modern-web-technologies-2024',
      title: 'Modern Web Technologies Shaping Business Success',
      excerpt: 'Explore the latest web technologies and frameworks that are revolutionizing how businesses connect with customers.',
      content: 'The web development landscape is constantly evolving, with new technologies emerging...',
      category: 'Technology',
      author: 'Development Team',
      date: '2024-01-10',
      readTime: '10 min read',
      published: true,
      featured: false,
      tags: ['React', 'Modern Web', 'Performance']
    },
    {
      id: 'brand-identity-digital-age',
      title: 'Building Powerful Brand Identity in the Digital Age',
      excerpt: 'Discover how to craft a compelling brand identity that resonates with your audience and drives business growth.',
      content: 'In the digital age, your brand identity is more than just a logo...',
      category: 'Branding',
      author: 'Brand Strategy Team',
      date: '2024-01-08',
      readTime: '7 min read',
      published: true,
      featured: false,
      tags: ['Branding', 'Identity', 'Marketing']
    },
    {
      id: 'e-commerce-optimization-guide',
      title: 'E-commerce Optimization: From Clicks to Conversions',
      excerpt: 'Master the art of e-commerce optimization with proven strategies that turn visitors into loyal customers.',
      content: 'E-commerce optimization is the science and art of improving your online store...',
      category: 'E-commerce',
      author: 'E-commerce Team',
      date: '2024-01-05',
      readTime: '9 min read',
      published: true,
      featured: false,
      tags: ['E-commerce', 'Conversion', 'Optimization']
    },
    {
      id: 'future-of-web-development',
      title: 'The Future of Web Development: Trends to Watch',
      excerpt: 'Stay ahead of the curve with insights into emerging web development trends that will shape the industry.',
      content: 'The future of web development is exciting and full of possibilities...',
      category: 'Technology',
      author: 'Tech Research Team',
      date: '2024-01-03',
      readTime: '8 min read',
      published: true,
      featured: false,
      tags: ['Trends', 'Innovation', 'Future Tech']
    },
    {
      id: 'user-experience-psychology',
      title: 'The Psychology Behind Exceptional User Experiences',
      excerpt: 'Understand the psychological principles that drive user behavior and create engaging digital experiences.',
      content: 'Understanding the psychology behind user behavior is key to creating exceptional experiences...',
      category: 'UX/UI',
      author: 'UX Research Team',
      date: '2024-01-01',
      readTime: '6 min read',
      published: true,
      featured: false,
      tags: ['Psychology', 'User Experience', 'Engagement']
    }
  ];

  useEffect(() => {
    // Load blog posts from localStorage or use defaults
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts);
      setBlogPosts(parsedPosts.filter((post: BlogPost) => post.published));

      // Find featured post
      const featured = parsedPosts.find((post: BlogPost) => post.featured && post.published);
      setFeaturedPost(featured || defaultFeaturedPost);
    } else {
      setBlogPosts(defaultBlogPosts);
      setFeaturedPost(defaultFeaturedPost);
    }
  }, []);

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const categories = ['All', 'Strategy', 'Design', 'Technology', 'Branding', 'E-commerce', 'UX/UI'];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

          {/* Particle Effects */}
          <ParticleEffect />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Badge variant="outline" className="px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  {siteConfig.company.name} Insights
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Insights & Expertise
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover the latest trends, strategies, and insights that help businesses craft powerful online identities and drive digital success.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                  Latest Industry Trends
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  Expert Insights
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-primary" />
                  Actionable Strategies
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
              <p className="text-muted-foreground">Deep dive into our latest insights</p>
            </div>

            {featuredPost && (
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="group">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-t border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? 'default' : 'outline'}
                  size="sm"
                  className="transition-all hover:scale-105"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-muted-foreground">Stay updated with our latest insights and strategies</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4" variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group p-0">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-background to-accent/10">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Ahead of the Digital Curve
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get weekly insights on digital transformation, web development trends, and strategies to grow your online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
              />
              <Button className="btn-primary">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 1,000+ professionals who trust {siteConfig.company.name} for digital insights.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;