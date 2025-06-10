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
import ReportBuilder from "./pages/ReportBuilder";
import NotFound from "./pages/NotFound";
import StrategicPlanning from "./pages/StrategicPlanning";
import AIHealthDashboard from "./pages/AIHealthDashboard";
import KnowledgeManagement from "./pages/KnowledgeManagement";
import ProductLaunchDashboard from "./pages/ProductLaunchDashboard";
import HRDashboard from "./pages/HRDashboard";
import LegalDashboard from "./pages/LegalDashboard";
import ITInfrastructureDashboard from "./pages/ITInfrastructureDashboard";
import EnterpriseResilienceDashboard from "./pages/EnterpriseResilienceDashboard";
import ZeroKnowledgeComplianceDashboard from "./pages/ZeroKnowledgeComplianceDashboard";
import UnifiedIntelligenceDashboard from "./pages/UnifiedIntelligenceDashboard";
import SpecialistLLMDashboard from "./pages/SpecialistLLMDashboard";
import GeniusDashboard from "./pages/GeniusDashboard";
import SettingsPage from "./pages/SettingsPage";

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
          <Route path="/product-launch" element={<ProductLaunchDashboard />} />
          <Route path="/product-launch/ideation" element={<ProductLaunchDashboard />} />
          <Route path="/product-launch/development" element={<ProductLaunchDashboard />} />
          <Route path="/product-launch/go-to-market" element={<ProductLaunchDashboard />} />
          <Route path="/product-launch/launch" element={<ProductLaunchDashboard />} />
          <Route path="/product-launch/performance" element={<ProductLaunchDashboard />} />
          <Route path="/executive" element={<ExecutiveOverview />} />
          <Route path="/executive/unified-intelligence" element={<UnifiedIntelligenceDashboard />} />
          <Route path="/executive/genius-dashboard" element={<GeniusDashboard />} />
          <Route path="/business-overview" element={<BusinessOverview />} />
          <Route path="/hr" element={<HRDashboard />} />
          <Route path="/hr/performance" element={<HRDashboard />} />
          <Route path="/hr/talent" element={<HRDashboard />} />
          <Route path="/hr/engagement" element={<HRDashboard />} />
          <Route path="/agents" element={<AIAgentStore />} />
          <Route path="/my-agents" element={<MyAgents />} />
          <Route path="/trust" element={<TrustDashboard />} />
          <Route path="/specialists" element={<SpecialistLLMDashboard />} />
          <Route path="/integrations" element={<IntegrationHub />} />
          <Route path="/competitive" element={<CompetitiveIntelligence />} />
          <Route path="/finance" element={<FinancialDashboard />} />
          <Route path="/calendar" element={<CalendarIntelligence />} />
          <Route path="/security" element={<SecurityAuditDashboard />} />
          <Route path="/legal" element={<LegalDashboard />} />
          <Route path="/legal/zero-knowledge" element={<ZeroKnowledgeComplianceDashboard />} />
          <Route path="/infrastructure" element={<ITInfrastructureDashboard />} />
          <Route path="/resilience" element={<EnterpriseResilienceDashboard />} />
          <Route path="/reports" element={<ReportBuilder />} />
          <Route path="/strategic-planning" element={<StrategicPlanning />} />
          <Route path="/ai-health" element={<AIHealthDashboard />} />
          <Route path="/knowledge" element={<KnowledgeManagement />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
