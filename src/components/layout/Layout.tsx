import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileTabBar from './MobileTabBar';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showMobileTabBar?: boolean;
}

const Layout = ({ children, showFooter = true, showMobileTabBar = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      
      <main className="flex-1 pb-safe-area-inset-bottom overflow-x-hidden">
        {children}
      </main>
      
      {showFooter && <Footer />}
      {showMobileTabBar && <MobileTabBar />}
    </div>
  );
};

export default Layout;