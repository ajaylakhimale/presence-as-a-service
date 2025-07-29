import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Showcase from "./pages/Showcase";
import ProjectDetails from "./pages/ProjectDetails";
import Testimonials from "./pages/Testimonials";
import TechStack from "./pages/TechStack";
import LiveStats from "./pages/LiveStats";
import ClientLogin from "./pages/ClientLogin";
import ClientSignup from "./pages/ClientSignup";
import ClientDashboard from "./pages/ClientDashboard";
import Onboarding from "./pages/Onboarding";
import Industries from "./pages/Industries";
import ConnectedSystems from "./pages/ConnectedSystems";
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
import NotFound from "./pages/NotFound";
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/showcase/:id" element={<ProjectDetails />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/stats" element={<LiveStats />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/client-signup" element={<ClientSignup />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
