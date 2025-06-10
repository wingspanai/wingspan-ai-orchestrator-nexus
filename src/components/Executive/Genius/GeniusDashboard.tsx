
import { GeniusHeader } from './GeniusHeader';
import { PredictionEnginesGrid } from './PredictionEnginesGrid';
import { AccuracyVisualization } from './AccuracyVisualization';
import { ExpertFrameworksPanel } from './ExpertFrameworksPanel';
import { RealtimePredictions } from './RealtimePredictions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, TrendingUp, Users, Zap } from 'lucide-react';

export function GeniusDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <GeniusHeader />
      
      <div className="p-6 space-y-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="engines" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Prediction Engines
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="experts" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Expert Frameworks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PredictionEnginesGrid />
              </div>
              <div className="space-y-6">
                <RealtimePredictions />
                <ExpertFrameworksPanel />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="engines">
            <PredictionEnginesGrid detailed />
          </TabsContent>

          <TabsContent value="analytics">
            <AccuracyVisualization />
          </TabsContent>

          <TabsContent value="experts">
            <ExpertFrameworksPanel detailed />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
