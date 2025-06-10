
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useGeniusStore } from '@/store/geniusStore';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Zap, Brain, TrendingUp, AlertCircle, Info, Target } from 'lucide-react';

interface PredictionEnginesGridProps {
  detailed?: boolean;
}

export function PredictionEnginesGrid({ detailed = false }: PredictionEnginesGridProps) {
  const { predictionEngines } = useGeniusStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Zap className="h-4 w-4 text-green-500" />;
      case 'optimizing': return <TrendingUp className="h-4 w-4 text-blue-500" />;
      case 'learning': return <Brain className="h-4 w-4 text-purple-500" />;
      case 'maintenance': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default: return <Zap className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-100 border-green-500/50';
      case 'optimizing': return 'bg-blue-500/20 text-blue-100 border-blue-500/50';
      case 'learning': return 'bg-purple-500/20 text-purple-100 border-purple-500/50';
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-100 border-yellow-500/50';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-500/50';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-orange-500/20 text-orange-100 border-orange-500/50';
      case 'medium': return 'bg-yellow-500/20 text-yellow-100 border-yellow-500/50';
      case 'low': return 'bg-green-500/20 text-green-100 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-500/50';
    }
  };

  return (
    <div className={`grid gap-6 ${detailed ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
      {predictionEngines.map((engine) => (
        <Card key={engine.id} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <CardTitle className="text-white text-lg">{engine.name}</CardTitle>
                <div className="flex items-center gap-2">
                  {getStatusIcon(engine.status)}
                  <Badge className={getStatusColor(engine.status)}>
                    {engine.status.charAt(0).toUpperCase() + engine.status.slice(1)}
                  </Badge>
                  <Badge className={getPriorityColor(engine.actionPriority)}>
                    {engine.actionPriority} priority
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-400">{engine.accuracy}%</div>
                <div className="text-xs text-slate-400">±{engine.deviation}%</div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Business Impact */}
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <div className="text-sm font-medium text-blue-300 mb-1">Business Impact</div>
              <div className="text-sm text-blue-100">{engine.businessImpact}</div>
            </div>

            {/* Recommended Action */}
            <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <div className="text-sm font-medium text-orange-300 mb-1">Recommended Action</div>
              <div className="text-sm text-orange-100">{engine.recommendedAction}</div>
            </div>

            {/* How it Works */}
            {detailed && (
              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div className="text-sm font-medium text-purple-300 mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  How It Works
                </div>
                <div className="text-sm text-purple-100 mb-3">{engine.howItWorks}</div>
                <div className="space-y-2">
                  <div className="text-xs text-purple-200">Key Factors:</div>
                  <div className="flex flex-wrap gap-1">
                    {engine.keyFactors.map((factor, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-purple-500/30 text-purple-200">
                        {factor}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Accuracy Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Accuracy Target</span>
                <span className="text-slate-400">{engine.targetAccuracy[0]}% - {engine.targetAccuracy[1]}%</span>
              </div>
              <Progress 
                value={(engine.accuracy - engine.targetAccuracy[0]) / (engine.targetAccuracy[1] - engine.targetAccuracy[0]) * 100} 
                className="h-2"
              />
            </div>

            {/* Real-time Trend */}
            <div className="space-y-2">
              <div className="text-sm text-slate-300">7-Day Accuracy Trend</div>
              <ChartContainer
                config={{ accuracy: { label: "Accuracy", color: "#8B5CF6" } }}
                className="h-16"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engine.realTimeData.map((value, index) => ({ day: index + 1, accuracy: value }))}>
                    <Line
                      type="monotone"
                      dataKey="accuracy"
                      stroke="var(--color-accuracy)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-700">
              <div>
                <div className="text-sm text-slate-400">Last Prediction</div>
                <div className="font-semibold text-slate-200">{engine.lastPrediction}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400">Confidence</div>
                <div className="font-semibold text-green-400">{engine.confidenceLevel}%</div>
              </div>
            </div>

            {/* Business Value */}
            <div className="pt-2 border-t border-slate-700">
              <div className="text-sm text-slate-400 mb-1">Business Value</div>
              <div className="text-sm font-medium text-green-300">{engine.businessValue}</div>
            </div>

            {/* Action Button */}
            <Button 
              className={`w-full ${
                engine.actionPriority === 'high' ? 'bg-orange-600 hover:bg-orange-700' : 
                'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <Target className="h-4 w-4 mr-2" />
              View Detailed Analysis
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
