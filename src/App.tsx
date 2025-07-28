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
import ClientDashboard from "./pages/ClientDashboard";
import Onboarding from "./pages/Onboarding";
import Industries from "./pages/Industries";
import ConnectedSystems from "./pages/ConnectedSystems";
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
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/industries" element={<Industries />} />
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
