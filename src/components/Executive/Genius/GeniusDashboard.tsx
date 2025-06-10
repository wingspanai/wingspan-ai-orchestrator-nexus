
import { GeniusHeader } from './GeniusHeader';
import { PredictionEnginesGrid } from './PredictionEnginesGrid';
import { AccuracyVisualization } from './AccuracyVisualization';
import { ExpertFrameworksPanel } from './ExpertFrameworksPanel';
import { RealtimePredictions } from './RealtimePredictions';
import { ActionableInsightsPanel } from './ActionableInsightsPanel';
import { BusinessImpactSummary } from './BusinessImpactSummary';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, TrendingUp, Users, Zap, Target, AlertTriangle } from 'lucide-react';

export function GeniusDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <GeniusHeader />
      
      <div className="p-6 space-y-6">
        <Tabs defaultValue="insights" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800 border-slate-700">
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Actionable Insights
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Business Impact
            </TabsTrigger>
            <TabsTrigger value="engines" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Prediction Engines
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Performance Analytics
            </TabsTrigger>
            <TabsTrigger value="experts" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Expert Frameworks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <ActionableInsightsPanel />
              </div>
              <div className="space-y-6">
                <RealtimePredictions />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-6">
            <BusinessImpactSummary />
          </TabsContent>

          <TabsContent value="engines" className="space-y-6">
            <PredictionEnginesGrid detailed />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <AccuracyVisualization />
          </TabsContent>

          <TabsContent value="experts" className="space-y-6">
            <ExpertFrameworksPanel detailed />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
