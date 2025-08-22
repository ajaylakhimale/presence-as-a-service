import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, BarChart3, HelpCircle, MoreHorizontal, Filter, Calculator, Layers, Globe, Smartphone, Monitor, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

const MobileTabBar = () => {
  const location = useLocation();
  const isPricingPage = location.pathname === '/pricing';
  const [selectedCount, setSelectedCount] = useState(0);

  // Get selected features count from localStorage for pricing page
  const getSelectedFeaturesCount = () => {
    if (typeof window !== 'undefined') {
      try {
        const pricingState = localStorage.getItem('pricing-selected-features');
        return pricingState ? JSON.parse(pricingState).length : 0;
      } catch {
        return 0;
      }
    }
    return 0;
  };

  // Update count when component mounts or when localStorage changes
  useEffect(() => {
    if (isPricingPage) {
      setSelectedCount(getSelectedFeaturesCount());

      // Listen for storage changes to update count in real-time
      const handleStorageChange = () => {
        setSelectedCount(getSelectedFeaturesCount());
      };

      window.addEventListener('storage', handleStorageChange);
      // Also listen for a custom event when features are updated within the same page
      window.addEventListener('featuresUpdated', handleStorageChange);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('featuresUpdated', handleStorageChange);
      };
    }
  }, [isPricingPage]);

  // Default navigation tabs
  const defaultTabs = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Pricing', href: '/pricing', icon: CreditCard },
    { name: 'Projects', href: '/onboarding', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: HelpCircle },
    { name: 'More', href: '/about', icon: MoreHorizontal },
  ];

  // Pricing page specific tabs
  const pricingTabs = [
    { name: 'Filters', action: 'toggleFilters', icon: Filter },
    { name: 'Calculator', action: 'toggleCalculator', icon: Calculator },
    { name: 'Features', action: 'showFeatures', icon: Layers },
    { name: 'Platform', action: 'showPlatforms', icon: Globe },
    { name: 'Quote', href: '/onboarding', icon: ShoppingCart },
  ];

  const tabs = isPricingPage ? pricingTabs : defaultTabs;

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleTabClick = (tab: any) => {
    if (tab.href) {
      // Regular navigation
      return;
    }

    // Handle pricing page actions
    if (tab.action) {
      switch (tab.action) {
        case 'toggleFilters':
          // Dispatch custom event to toggle filters
          window.dispatchEvent(new CustomEvent('toggleMobileFilters'));
          break;
        case 'toggleCalculator':
          // Dispatch custom event to toggle calculator
          window.dispatchEvent(new CustomEvent('toggleMobileCalculator'));
          break;
        case 'showFeatures':
          // Scroll to features section
          const featuresSection = document.querySelector('[data-section="features"]');
          featuresSection?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'showPlatforms':
          // Dispatch custom event to show platform selector
          window.dispatchEvent(new CustomEvent('toggleMobilePlatforms'));
          break;
      }
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glassmorphism-mobile border-t border-white/20">
      <div className="grid grid-cols-5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = tab.href ? isActive(tab.href) : false;

          if (tab.href) {
            return (
              <Link
                key={tab.name}
                to={tab.href}
                className={`flex flex-col items-center justify-center py-2 px-1 transition-all duration-200 ${active
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                <Icon className={`h-5 w-5 mb-1 ${active ? 'scale-110' : ''}`} />
                <span className={`text-xs font-medium ${active ? 'text-primary' : ''}`}>
                  {tab.name}
                </span>
                {active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            );
          }

          return (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className="relative flex flex-col items-center justify-center py-2 px-1 transition-all duration-200 text-muted-foreground hover:text-foreground active:scale-95"
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">
                {tab.name}
              </span>
              {tab.name === 'Features' && selectedCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {selectedCount}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTabBar;