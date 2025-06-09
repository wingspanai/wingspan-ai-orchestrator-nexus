
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ResilienceHeader } from './ResilienceHeader';
import { SystemHealthTree } from './SystemHealthTree';
import { EMTActivityFeed } from './EMTActivityFeed';
import { RealTimeMonitoring } from './RealTimeMonitoring';
import { PredictiveAnalysis } from './PredictiveAnalysis';
import { SelfHealingOperations } from './SelfHealingOperations';
import { SystemLearning } from './SystemLearning';
import { AIResilienceAssistant } from './AIResilienceAssistant';
import { Activity, TrendingUp, RefreshCw, Brain } from 'lucide-react';

export function ResilienceDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ResilienceHeader />
      
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Left Panel - System Health Tree */}
        <aside className="col-span-3">
          <SystemHealthTree />
          <EMTActivityFeed className="mt-6" />
        </aside>

        {/* Main Content - Resilience Operations */}
        <main className="col-span-9">
          <Tabs defaultValue="real-time" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
              <TabsTrigger value="real-time" className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Real-Time Monitoring
              </TabsTrigger>
              <TabsTrigger value="predictive" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Predictive Analysis
              </TabsTrigger>
              <TabsTrigger value="self-healing" className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Self-Healing Actions
              </TabsTrigger>
              <TabsTrigger value="learning" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                System Learning
              </TabsTrigger>
            </TabsList>

            <TabsContent value="real-time">
              <RealTimeMonitoring />
            </TabsContent>

            <TabsContent value="predictive">
              <PredictiveAnalysis />
            </TabsContent>

            <TabsContent value="self-healing">
              <SelfHealingOperations />
            </TabsContent>

            <TabsContent value="learning">
              <SystemLearning />
            </TabsContent>
          </Tabs>
        </main>
      </div>

      <AIResilienceAssistant />
    </div>
  );
}
