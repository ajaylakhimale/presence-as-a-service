import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pricing & Plans', href: '/pricing' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Tech Stack', href: '/tech-stack' },
    { name: 'Live Stats', href: '/stats' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full glassmorphism-nav border-b border-white/10 supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span>{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-1">
          {navigation.slice(0, 6).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-item ${isActive(item.href) ? 'nav-item-active' : ''} transition-all duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link 
            to="/client-login"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Client Login
          </Link>
          <Link to="/onboarding">
            <Button className="btn-primary">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden glassmorphism-mobile border-t border-white/20">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Link 
                to="/client-login"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-white/20 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Login
              </Link>
              <Link 
                to="/onboarding"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="btn-primary w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;