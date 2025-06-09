
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useResilienceStore } from '@/store/resilienceStore';
import { TrendingUp, Zap, AlertTriangle } from 'lucide-react';

export function RealTimeMonitoring() {
  const { detectedAnomalies, systemHealth } = useResilienceStore();

  return (
    <div className="space-y-6">
      {/* System Metrics Grid */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">System Performance Heatmap</CardTitle>
            <CardDescription className="text-slate-400">
              Real-time health monitoring across all systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {systemHealth.map((system) => (
                <div key={system.id} className="space-y-2">
                  <div className="text-sm font-medium text-white truncate">
                    {system.name}
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    <div className="h-8 rounded bg-slate-700 flex items-center justify-center">
                      <span className={`text-xs font-mono ${
                        system.health >= 95 ? 'text-green-400' :
                        system.health >= 85 ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {system.health}%
                      </span>
                    </div>
                  </div>
                  {system.selfHealing && (
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-xs">
                      Self-Healing
                    </Badge>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                <Zap className="w-4 h-4 mr-2" />
                AI Optimize Thresholds
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Anomaly Detection Stream</CardTitle>
            <CardDescription className="text-slate-400">
              Real-time anomaly detection and resolution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {detectedAnomalies.map((anomaly) => (
                <div key={anomaly.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className={`w-4 h-4 ${
                      anomaly.severity === 'critical' ? 'text-red-400' :
                      anomaly.severity === 'high' ? 'text-orange-400' :
                      'text-yellow-400'
                    }`} />
                    <div>
                      <div className="text-sm font-medium text-white">
                        {anomaly.system}
                      </div>
                      <div className="text-xs text-slate-400">
                        {anomaly.description}
                      </div>
                    </div>
                  </div>
                  {anomaly.autoResolved && (
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      Auto-Resolved
                    </Badge>
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-slate-700">
              <div className="text-center">
                <div className="text-lg font-bold text-white">147</div>
                <div className="text-xs text-slate-400">Detected</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">142</div>
                <div className="text-xs text-slate-400">Auto-Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400">3</div>
                <div className="text-xs text-slate-400">False Positives</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">97.9%</div>
                <div className="text-xs text-slate-400">Accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Critical Path Analysis */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Business Critical Path Analysis</CardTitle>
          <CardDescription className="text-slate-400">
            Real-time monitoring of business-critical workflows and dependencies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-600 rounded-lg">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">Dependency graph visualization would go here</p>
              <p className="text-sm text-slate-500 mt-2">
                Interactive visualization of system dependencies and critical paths
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
