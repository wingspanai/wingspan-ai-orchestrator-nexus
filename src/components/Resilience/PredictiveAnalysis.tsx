
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useResilienceStore } from '@/store/resilienceStore';
import { AlertTriangle, Clock, DollarSign, TrendingUp } from 'lucide-react';

export function PredictiveAnalysis() {
  const { failurePredictions, costOptimizations, applyCostOptimization } = useResilienceStore();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-500/20 border-red-500/50';
      case 'high':
        return 'text-orange-400 bg-orange-500/20 border-orange-500/50';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/50';
      default:
        return 'text-blue-400 bg-blue-500/20 border-blue-500/50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Failure Prediction Engine */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Predictive Failure Analysis</CardTitle>
          <CardDescription className="text-slate-400">
            AI-powered prediction of potential system failures before they occur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {failurePredictions.map((prediction) => (
              <div key={prediction.id} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    <div>
                      <h4 className="font-medium text-white">{prediction.system}</h4>
                      <p className="text-sm text-slate-400">{prediction.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-400">
                      {prediction.timeToFailure}
                    </div>
                    <div className="text-xs text-slate-400">until potential failure</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-400">Confidence</div>
                    <div className="text-lg font-bold text-white">{prediction.confidence}%</div>
                  </div>
                  <div>
                    <Badge className={getSeverityColor(prediction.severity)}>
                      {prediction.severity} Priority
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Impact</div>
                  <p className="text-sm text-white">{prediction.impact}</p>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Preventive Actions</div>
                  <div className="space-y-2">
                    {prediction.preventiveActions.map((action) => (
                      <div key={action.id} className="flex items-center justify-between p-2 bg-slate-600/30 rounded">
                        <div>
                          <div className="text-sm font-medium text-white">{action.name}</div>
                          <div className="text-xs text-slate-400">{action.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-green-400">${action.cost}</div>
                          <div className="text-xs text-slate-400">{action.timeToExecute}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch checked={prediction.autoPreventEnabled} />
                    <span className="text-sm text-white">Auto-prevention enabled</span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Execute Prevention
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Capacity Planning */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Intelligent Capacity Planning</CardTitle>
          <CardDescription className="text-slate-400">
            Predictive resource scaling based on usage patterns and business growth
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-white mb-3">Resource Utilization Forecast</h4>
              <div className="h-32 bg-slate-700/30 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-600">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">Projection Chart</p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">CPU</span>
                  <span className="text-yellow-400">Scale up in 2 weeks</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Memory</span>
                  <span className="text-green-400">Optimal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Storage</span>
                  <span className="text-orange-400">Scale up in 1 month</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-white mb-3">Business Growth Alignment</h4>
              <div className="h-32 bg-slate-700/30 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-600">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">Growth Chart</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">94%</div>
                  <div className="text-xs text-slate-400">Alignment Score</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-white mb-3">Cost Optimization</h4>
              <div className="space-y-2">
                {costOptimizations.slice(0, 3).map((optimization) => (
                  <div key={optimization.id} className="p-2 bg-slate-700/30 rounded text-sm">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-green-400 font-medium">
                        ${optimization.monthlySaving.toLocaleString()}/mo
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {optimization.priority}
                      </Badge>
                    </div>
                    <p className="text-white text-xs mb-2">{optimization.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs"
                      onClick={() => applyCostOptimization(optimization.id)}
                    >
                      Apply
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
