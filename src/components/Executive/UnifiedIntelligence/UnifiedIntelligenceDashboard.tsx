
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UnifiedIntelligenceHeader } from './UnifiedIntelligenceHeader';
import { ExecutiveSummarySection } from './ExecutiveSummarySection';
import { AIAgentNetworkPanel } from './AIAgentNetworkPanel';
import { ExecutiveOverviewPanel } from './ExecutiveOverviewPanel';
import { PredictiveInsightsPanel } from './PredictiveInsightsPanel';
import { CrossFunctionalPanel } from './CrossFunctionalPanel';
import { StrategicOpportunitiesPanel } from './StrategicOpportunitiesPanel';
import { DecisionSupportPanel } from './DecisionSupportPanel';
import { AIExecutiveAssistant } from './AIExecutiveAssistant';
import { Building, TrendingUp, Network, Target, Brain } from 'lucide-react';

export function UnifiedIntelligenceDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <UnifiedIntelligenceHeader />
      <ExecutiveSummarySection />
      
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Left Panel - AI Agent Network */}
        <aside className="col-span-3">
          <AIAgentNetworkPanel />
        </aside>

        {/* Main Content - Intelligence Views */}
        <main className="col-span-9">
          <Tabs defaultValue="executive-overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-slate-800 border-slate-700">
              <TabsTrigger value="executive-overview" className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Executive Overview
              </TabsTrigger>
              <TabsTrigger value="predictive-insights" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Predictive Insights
              </TabsTrigger>
              <TabsTrigger value="cross-functional" className="flex items-center gap-2">
                <Network className="w-4 h-4" />
                Cross-Functional
              </TabsTrigger>
              <TabsTrigger value="strategic-opportunities" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Opportunities
              </TabsTrigger>
              <TabsTrigger value="decision-support" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Decision Support
              </TabsTrigger>
            </TabsList>

            <TabsContent value="executive-overview">
              <ExecutiveOverviewPanel />
            </TabsContent>

            <TabsContent value="predictive-insights">
              <PredictiveInsightsPanel />
            </TabsContent>

            <TabsContent value="cross-functional">
              <CrossFunctionalPanel />
            </TabsContent>

            <TabsContent value="strategic-opportunities">
              <StrategicOpportunitiesPanel />
            </TabsContent>

            <TabsContent value="decision-support">
              <DecisionSupportPanel />
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <AIExecutiveAssistant />
    </div>
  );
}
