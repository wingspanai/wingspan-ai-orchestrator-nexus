
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MainLayout } from "@/components/Layout/MainLayout";
import Index from "@/pages/Index";
import AIAgentStore from "@/pages/AIAgentStore";
import BusinessOverview from "@/pages/BusinessOverview";
import CalendarIntelligence from "@/pages/CalendarIntelligence";
import FinancialDashboard from "@/pages/FinancialDashboard";
import IntegrationHub from "@/pages/IntegrationHub";
import MyAgents from "@/pages/MyAgents";
import SecurityAuditDashboard from "@/pages/SecurityAuditDashboard";
import TrustDashboard from "@/pages/TrustDashboard";
import ReportBuilder from "@/pages/ReportBuilder";
import NotFound from "@/pages/NotFound";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout><Outlet /></MainLayout>}>
              <Route index element={<Index />} />
              <Route path="agents" element={<AIAgentStore />} />
              <Route path="business" element={<BusinessOverview />} />
              <Route path="calendar" element={<CalendarIntelligence />} />
              <Route path="financial" element={<FinancialDashboard />} />
              <Route path="integrations" element={<IntegrationHub />} />
              <Route path="my-agents" element={<MyAgents />} />
              <Route path="security" element={<SecurityAuditDashboard />} />
              <Route path="trust" element={<TrustDashboard />} />
              <Route path="report-builder" element={<ReportBuilder />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
