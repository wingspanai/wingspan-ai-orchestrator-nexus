
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUnifiedIntelligenceStore } from '@/store/unifiedIntelligenceStore';
import { TrendingUp, AlertCircle, CheckCircle, Target } from 'lucide-react';

export function ExecutiveOverviewPanel() {
  const { performanceDimensions, liveMetrics } = useUnifiedIntelligenceStore();

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Holistic Company Performance</CardTitle>
          <CardDescription className="text-slate-400">
            Real-time performance across all business dimensions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              {performanceDimensions.map((dimension) => (
                <div key={dimension.name} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-sm text-white">{dimension.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-slate-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${(dimension.score / 100) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-white w-8">{dimension.score}</span>
                    {dimension.score >= dimension.target ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <Target className="w-4 h-4 text-yellow-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-red-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white">Market Share Opportunity</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Market share 7 points below target - competitor analysis shows vulnerability in their enterprise segment
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 text-xs h-6">
                      View Strategy
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white">Operational Excellence</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Operational efficiency exceeding all benchmarks - $2.3M annual savings achieved
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 text-xs h-6">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-700/50 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-white">Innovation Pipeline</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Innovation score trending up - 3 new products in pipeline showing strong market fit
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 text-xs h-6">
                      View Pipeline
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Live Business Metrics</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-green-300 border-green-500/30">
              Live
            </Badge>
            <Badge variant="outline" className="text-slate-400">Updated every 30s</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {liveMetrics.map((metric) => (
              <div key={metric.title} className="p-4 bg-slate-700/50 rounded-lg">
                <h4 className="text-sm font-medium text-slate-300 mb-2">{metric.title}</h4>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                {metric.change && (
                  <div className="text-sm text-green-400 mb-2">{metric.change}</div>
                )}
                {metric.target && (
                  <div className="text-xs text-slate-400">Target: {metric.target}</div>
                )}
                {metric.benchmark && (
                  <div className="text-xs text-slate-400">{metric.benchmark}</div>
                )}
                {metric.pace && (
                  <div className="text-xs text-blue-400">{metric.pace}</div>
                )}
                
                {/* Simple sparkline visualization */}
                <div className="mt-2 h-8 flex items-end gap-1">
                  {metric.sparkline.map((value, index) => (
                    <div
                      key={index}
                      className="bg-blue-500 w-2 rounded-t"
                      style={{ 
                        height: `${(value / Math.max(...metric.sparkline)) * 100}%`,
                        minHeight: '2px'
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
