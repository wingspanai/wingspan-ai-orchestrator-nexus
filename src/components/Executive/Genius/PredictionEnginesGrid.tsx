
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useGeniusStore } from '@/store/geniusStore';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Zap, Brain, TrendingUp, AlertCircle } from 'lucide-react';

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

  return (
    <div className={`grid gap-4 ${detailed ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
      {predictionEngines.map((engine) => (
        <Card key={engine.id} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-white text-lg">{engine.name}</CardTitle>
                <div className="flex items-center gap-2">
                  {getStatusIcon(engine.status)}
                  <Badge className={getStatusColor(engine.status)}>
                    {engine.status.charAt(0).toUpperCase() + engine.status.slice(1)}
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
              <div>
                <div className="text-sm text-slate-400">Predictions Today</div>
                <div className="font-semibold text-blue-400">{engine.predictionsToday.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-slate-400">Algorithm</div>
                <div className="font-semibold text-purple-400 text-xs">{engine.algorithmType}</div>
              </div>
            </div>

            {detailed && (
              <div className="pt-2 border-t border-slate-700">
                <div className="text-sm text-slate-400 mb-2">Expert Frameworks</div>
                <div className="flex flex-wrap gap-1">
                  {engine.expertFrameworks.map((framework, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
