import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import CookieConsentBanner from "./components/CookieConsentBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import CleanPricing from "./pages/CleanPricing";
import PlanOnboarding from "./pages/PlanOnboarding";
import ThankYou from "./pages/ThankYou";
import Showcase from "./pages/Showcase";
import ProjectDetails from "./pages/ProjectDetails";
import Testimonials from "./pages/Testimonials";
import TechStack from "./pages/TechStack";
import LiveStats from "./pages/LiveStats";
import ClientLogin from "./pages/ClientLogin";
import ClientSignup from "./pages/ClientSignup";
import ClientDashboard from "./pages/ClientDashboard";
import Industries from "./pages/Industries";
import ConnectedSystems from "./pages/ConnectedSystems";
// Import database test
import './lib/database-test';
import ConnectedSystemsQuote from "./pages/ConnectedSystemsQuote";
import HowItWorks from "./pages/HowItWorks";
import CorporateEnterprise from "./pages/industries/CorporateEnterprise";
import Healthcare from "./pages/industries/Healthcare";
import EcommerceRetail from "./pages/industries/EcommerceRetail";
import Education from "./pages/industries/Education";
import Logistics from "./pages/industries/Logistics";
import FoodHospitality from "./pages/industries/FoodHospitality";
import RealEstate from "./pages/industries/RealEstate";
import Finance from "./pages/industries/Finance";
import StartupsSaaS from "./pages/industries/StartupsSaaS";
import Events from "./pages/industries/Events";
import Fitness from "./pages/industries/Fitness";
import Marketing from "./pages/industries/Marketing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogAdmin from "./pages/BlogAdmin";
import Contact from "./pages/Contact";
import ScheduleCall from "./pages/ScheduleCall";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from 'react';
import { autoRetryPendingSubmissions } from './lib/pending-submissions';

const queryClient = new QueryClient();

const App = () => {
  // Auto-retry pending submissions on app load and periodically
  useEffect(() => {
    // Initial retry attempt
    setTimeout(() => {
      autoRetryPendingSubmissions();
    }, 5000); // Wait 5 seconds after app loads

    // Set up periodic retry (every 2 minutes)
    const interval = setInterval(() => {
      autoRetryPendingSubmissions();
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CustomCursor />
          <CookieConsentBanner />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<CleanPricing />} />
              {/* <Route path="/showcase" element={<Showcase />} /> */}
              {/* <Route path="/showcase/:id" element={<ProjectDetails />} /> */}
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/tech-stack" element={<TechStack />} />
              <Route path="/stats" element={<LiveStats />} />
              <Route path="/client-login" element={<ClientLogin />} />
              <Route path="/client-signup" element={<ClientSignup />} />
              <Route path="/client-dashboard" element={<ClientDashboard />} />
              <Route path="/plan-onboarding" element={<PlanOnboarding />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/corporate-enterprise" element={<CorporateEnterprise />} />
              <Route path="/industries/healthcare" element={<Healthcare />} />
              <Route path="/industries/ecommerce-retail" element={<EcommerceRetail />} />
              <Route path="/industries/education" element={<Education />} />
              <Route path="/industries/logistics" element={<Logistics />} />
              <Route path="/industries/food-hospitality" element={<FoodHospitality />} />
              <Route path="/industries/real-estate" element={<RealEstate />} />
              <Route path="/industries/finance" element={<Finance />} />
              <Route path="/industries/startups-saas" element={<StartupsSaaS />} />
              <Route path="/industries/events" element={<Events />} />
              <Route path="/industries/fitness" element={<Fitness />} />
              <Route path="/industries/marketing" element={<Marketing />} />
              <Route path="/connected-systems" element={<ConnectedSystems />} />
              <Route path="/connected-systems/quote" element={<ConnectedSystemsQuote />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blogAdmin" element={<BlogAdmin />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/schedule-call" element={<ScheduleCall />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
