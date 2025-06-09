
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUnifiedIntelligenceStore } from '@/store/unifiedIntelligenceStore';
import { TrendingUp, Target, AlertTriangle } from 'lucide-react';

export function PredictiveInsightsPanel() {
  const { competitorMoves, marketTrends } = useUnifiedIntelligenceStore();

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">AI-Powered Predictive Analytics</CardTitle>
          <CardDescription className="text-slate-400">
            Machine learning predictions from aggregated agent intelligence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Revenue Forecast</h4>
              <div className="h-64 bg-slate-700/50 rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                  <p className="text-slate-300">Interactive revenue prediction chart</p>
                  <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-500/30">
                    87% Confidence
                  </Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Drivers</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium text-green-300">High Impact</span>
                  </div>
                  <p className="text-sm text-slate-300">New product launch showing 40% higher engagement</p>
                </div>
                
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">Medium Impact</span>
                  </div>
                  <p className="text-sm text-slate-300">Sales pipeline 23% stronger than last quarter</p>
                </div>
                
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-300">Low Risk</span>
                  </div>
                  <p className="text-sm text-slate-300">Economic headwinds in APAC region</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Predicted Competitor Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {competitorMoves.map((move) => (
                <div key={move.id} className="p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{move.competitor}</span>
                    <Badge className={
                      move.impact === 'high' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                      move.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-300 border-blue-500/30'
                    }>
                      {move.impact} impact
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-300 mb-2">{move.action}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{move.probability}% probability</span>
                    <Button size="sm" variant="outline" className="text-xs h-6">
                      Plan Response
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Emerging Market Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {marketTrends.map((trend) => (
                <div key={trend.id} className="p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{trend.name}</span>
                    <div className="text-right">
                      <div className="text-sm font-medium text-blue-400">{trend.opportunity}%</div>
                      <div className="text-xs text-slate-400">opportunity</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{trend.timeToMainstream}</span>
                    <div className="w-16 h-2 bg-slate-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${trend.strength}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
