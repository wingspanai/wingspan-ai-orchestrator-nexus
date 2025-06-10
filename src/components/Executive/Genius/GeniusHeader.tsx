
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGeniusStore } from '@/store/geniusStore';
import { Brain, DollarSign, Shield, Target, TrendingUp } from 'lucide-react';

export function GeniusHeader() {
  const { overallAccuracy, dailyRevenuImpact, riskMitigated, opportunitiesIdentified, activeEngines } = useGeniusStore();

  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">AI Genius Dashboard</h1>
              <p className="text-purple-100">Actionable Business Intelligence - Make Data-Driven Decisions</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-green-500/20 text-green-100 border-green-500/50">
              {activeEngines} Active Engines
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/50">
              {opportunitiesIdentified} Active Opportunities
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-100 border-purple-500/50">
              94.2% Accuracy
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">{dailyRevenuImpact}</div>
              <div className="text-xs text-purple-100">Daily Revenue Impact</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">{riskMitigated}</div>
              <div className="text-xs text-purple-100">Risk Mitigated</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-6 w-6 text-orange-400" />
              </div>
              <div className="text-2xl font-bold text-white">{opportunitiesIdentified}</div>
              <div className="text-xs text-purple-100">Opportunities</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">{overallAccuracy}%</div>
              <div className="text-xs text-purple-100">Overall Accuracy</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
