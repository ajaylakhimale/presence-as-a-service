import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

/**
 * Apple HIG-inspired header.
 * Left: compact logo
 * Center: minimal, centered navigation (desktop)
 * Right: utility actions (Schedule, Get Started)
 * Mobile: hamburger with full list
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Minimal set of primary navigation items (keeps header uncluttered per HIG)
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Solutions', href: '/industries' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Secondary items shown in the mobile menu
  const secondaryNav = [
    { name: 'How it Works', href: '/how-it-works' },

    { name: 'Tech Stack', href: '/tech-stack' },

  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 w-full bg-background/60 backdrop-blur-md border-b border-border supports-[backdrop-filter]:bg-background/50"
    >
      <nav
        role="navigation"
        aria-label="Primary"
        className="mx-auto  px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center">
          {/* Left: Compact Logo */}
          <div className="flex items-center flex-1">
            <Link to="/" className="inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary rounded">
              <div className="h-8 w-8 flex items-center justify-center rounded-md bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </div>

          {/* Center: Minimal navigation (desktop) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-6" role="menubar" aria-label="Main">
              {navigation.map((item) => (
                <li key={item.name} role="none">
                  <Link
                    to={item.href}
                    role="menuitem"
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`text-sm font-medium transition-colors px-2 py-1 rounded ${isActive(item.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Utility actions */}
          <div className="flex items-center justify-end flex-1 gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/modern-onboarding">
                <Button className="btn-primary" aria-label="Get started">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded={isMenuOpen}
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile flyout */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95">
          <div className="px-4 py-4">
            <nav aria-label="Mobile">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded text-base font-medium ${isActive(item.href) ? 'bg-primary/5 text-foreground' : 'text-foreground hover:bg-muted/50'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <hr className="my-2 border-border" />
                </li>
                {secondaryNav.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="block px-3 py-2 rounded text-base font-medium text-foreground hover:bg-muted/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link to="/modern-onboarding" onClick={() => setIsMenuOpen(false)}>
                    <Button className="btn-primary w-full">Get Started</Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
