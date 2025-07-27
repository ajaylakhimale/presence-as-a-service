import { Link, useLocation } from 'react-router-dom';
import { Home, CreditCard, BarChart3, HelpCircle, MoreHorizontal } from 'lucide-react';

const MobileTabBar = () => {
  const location = useLocation();

  const tabs = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Plans', href: '/pricing', icon: CreditCard },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Support', href: '/contact', icon: HelpCircle },
    { name: 'More', href: '/more', icon: MoreHorizontal },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glassmorphism border-t border-white/10">
      <div className="grid grid-cols-5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = isActive(tab.href);
          
          return (
            <Link
              key={tab.name}
              to={tab.href}
              className={`flex flex-col items-center justify-center py-2 px-1 transition-all duration-[var(--duration-fast)] ${
                active
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className={`h-6 w-6 mb-1 ${active ? 'scale-110' : ''}`} />
              <span className={`text-xs font-medium ${active ? 'text-primary' : ''}`}>
                {tab.name}
              </span>
              {active && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTabBar;