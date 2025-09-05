import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileTabBar from './MobileTabBar';
import WhatsAppButton from '../WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showMobileTabBar?: boolean;
  showWhatsApp?: boolean;
}

const Layout = ({ children, showFooter = true, showMobileTabBar = true, showWhatsApp = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 overflow-x-hidden pt-16">
        {children}
      </main>

      {showFooter && <Footer />}
      {showMobileTabBar && <MobileTabBar />}
      {showWhatsApp && <WhatsAppButton />}
    </div>
  );
};

export default Layout;