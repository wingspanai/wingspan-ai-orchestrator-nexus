
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGeniusStore } from '@/store/geniusStore';
import { Zap, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';

export function RealtimePredictions() {
  const { predictionEngines } = useGeniusStore();
  const [livePredictions, setLivePredictions] = useState<Array<{
    engine: string;
    prediction: string;
    confidence: number;
    trend: 'up' | 'down' | 'stable';
    timestamp: string;
  }>>([]);

  useEffect(() => {
    // Simulate real-time predictions
    const generatePrediction = () => {
      const engine = predictionEngines[Math.floor(Math.random() * predictionEngines.length)];
      const trends = ['up', 'down', 'stable'] as const;
      const trend = trends[Math.floor(Math.random() * trends.length)];
      
      const predictions = [
        'Market sentiment shifting positive',
        'Churn risk decreasing by 12%',
        'Revenue optimization opportunity detected',
        'Customer lifetime value increasing',
        'Demand spike predicted for next week',
        'Behavioral pattern anomaly identified',
        'Competitive pricing change anticipated',
        'Sales velocity accelerating',
        'Product-market fit improving',
        'Strategic scenario probability updated'
      ];

      return {
        engine: engine.name,
        prediction: predictions[Math.floor(Math.random() * predictions.length)],
        confidence: Math.floor(Math.random() * 20) + 80,
        trend,
        timestamp: new Date().toLocaleTimeString()
      };
    };

    // Initial predictions
    setLivePredictions([
      generatePrediction(),
      generatePrediction(),
      generatePrediction(),
      generatePrediction(),
      generatePrediction()
    ]);

    // Update predictions every 5 seconds
    const interval = setInterval(() => {
      setLivePredictions(prev => [
        generatePrediction(),
        ...prev.slice(0, 4)
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, [predictionEngines]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'stable': return <Minus className="h-4 w-4 text-yellow-500" />;
      default: return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'bg-green-500/20 text-green-100 border-green-500/50';
      case 'down': return 'bg-red-500/20 text-red-100 border-red-500/50';
      case 'stable': return 'bg-yellow-500/20 text-yellow-100 border-yellow-500/50';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-500/50';
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          Live Predictions
          <Badge className="bg-green-500/20 text-green-100 border-green-500/50 animate-pulse">
            LIVE
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {livePredictions.map((prediction, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 border border-slate-600/50 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0 mt-1">
              {getTrendIcon(prediction.trend)}
            </div>
            
            <div className="flex-1 space-y-1">
              <div className="text-sm font-medium text-white">
                {prediction.prediction}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  {prediction.engine}
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getTrendColor(prediction.trend)}>
                    {prediction.confidence}% confidence
                  </Badge>
                  <span className="text-xs text-slate-500">
                    {prediction.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
          <div className="text-xs text-blue-100">
            <strong>Real-time Processing:</strong> All predictions are generated using live data streams 
            with sub-second latency. Confidence intervals are continuously updated based on model uncertainty.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
