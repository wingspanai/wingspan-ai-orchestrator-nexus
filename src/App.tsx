import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExecutiveOverview from "./pages/ExecutiveOverview";
import BusinessOverview from "./pages/BusinessOverview";
import AIAgentStore from "./pages/AIAgentStore";
import MyAgents from "./pages/MyAgents";
import TrustDashboard from "./pages/TrustDashboard";
import IntegrationHub from "./pages/IntegrationHub";
import CompetitiveIntelligence from "./pages/CompetitiveIntelligence";
import FinancialDashboard from "./pages/FinancialDashboard";
import CalendarIntelligence from "./pages/CalendarIntelligence";
import SecurityAuditDashboard from "./pages/SecurityAuditDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/executive" element={<ExecutiveOverview />} />
          <Route path="/business-overview" element={<BusinessOverview />} />
          <Route path="/agents" element={<AIAgentStore />} />
          <Route path="/my-agents" element={<MyAgents />} />
          <Route path="/trust" element={<TrustDashboard />} />
          <Route path="/integrations" element={<IntegrationHub />} />
          <Route path="/competitive" element={<CompetitiveIntelligence />} />
          <Route path="/finance" element={<FinancialDashboard />} />
          <Route path="/calendar" element={<CalendarIntelligence />} />
          <Route path="/security" element={<SecurityAuditDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
