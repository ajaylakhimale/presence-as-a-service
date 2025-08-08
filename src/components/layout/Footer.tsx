import { Link } from 'react-router-dom';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/config/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Showcase', href: '/showcase' },
      { name: 'Tech Stack', href: '/tech-stack' },
      { name: 'Live Stats', href: '/stats' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Testimonials', href: '/testimonials' },
      // { name: 'Client Login', href: '/auth/login' },
      { name: 'System Status', href: '/status' },
    ],
    Legal: [
      { name: 'Terms of Service', href: '/tos' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: siteConfig.links.twitter, icon: Twitter },
    { name: 'GitHub', href: siteConfig.links.github, icon: Github },
    { name: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
    { name: 'Email', href: `mailto:${siteConfig.links.email}`, icon: Mail },
  ];

  return (
    <footer className="bg-surface border-t border-border-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-2xl bg-gradient-hero p-8 text-center">
          <h3 className="text-title-2 mb-4">Stay Updated</h3>
          <p className="text-body text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest updates on new features, case studies, and web development trends.
          </p>
          <div className="flex max-w-md mx-auto space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="btn-primary">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-foreground mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-body text-muted-foreground mb-6 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-headline font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border-subtle pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-subhead text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/tos"
              className="text-subhead text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-subhead text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/cookies"
              className="text-subhead text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;