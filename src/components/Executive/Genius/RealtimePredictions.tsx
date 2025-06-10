
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useGeniusStore } from '@/store/geniusStore';
import { Zap, TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function RealtimePredictions() {
  const { predictionEngines } = useGeniusStore();
  const [livePredictions, setLivePredictions] = useState<Array<{
    engine: string;
    prediction: string;
    confidence: number;
    trend: 'up' | 'down' | 'stable';
    timestamp: string;
    action: string;
    priority: 'high' | 'medium' | 'low';
  }>>([]);

  useEffect(() => {
    // Simulate real-time predictions with business context
    const generatePrediction = () => {
      const engine = predictionEngines[Math.floor(Math.random() * predictionEngines.length)];
      const trends = ['up', 'down', 'stable'] as const;
      const trend = trends[Math.floor(Math.random() * trends.length)];
      const priorities = ['high', 'medium', 'low'] as const;
      const priority = priorities[Math.floor(Math.random() * priorities.length)];
      
      const predictions = [
        {
          prediction: 'Customer churn risk increased 12%',
          action: 'Review retention campaigns for Q1 customers'
        },
        {
          prediction: 'Revenue opportunity: $67K in next 30 days',
          action: 'Focus sales team on identified high-CLV prospects'
        },
        {
          prediction: 'Inventory shortage risk for Product A',
          action: 'Order 15K additional units within 2 weeks'
        },
        {
          prediction: 'Competitor price change detected',
          action: 'Evaluate pricing strategy for competitive response'
        },
        {
          prediction: 'Market sentiment shifting positive',
          action: 'Accelerate marketing campaign launch'
        },
        {
          prediction: 'Sales velocity declining in Enterprise segment',
          action: 'Analyze enterprise sales process bottlenecks'
        }
      ];

      const selectedPrediction = predictions[Math.floor(Math.random() * predictions.length)];

      return {
        engine: engine.name,
        prediction: selectedPrediction.prediction,
        confidence: Math.floor(Math.random() * 20) + 80,
        trend,
        timestamp: new Date().toLocaleTimeString(),
        action: selectedPrediction.action,
        priority
      };
    };

    // Initial predictions
    setLivePredictions([
      generatePrediction(),
      generatePrediction(),
      generatePrediction(),
      generatePrediction()
    ]);

    // Update predictions every 8 seconds
    const interval = setInterval(() => {
      setLivePredictions(prev => [
        generatePrediction(),
        ...prev.slice(0, 3)
      ]);
    }, 8000);

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-100 border-red-500/50';
      case 'medium': return 'bg-yellow-500/20 text-yellow-100 border-yellow-500/50';
      case 'low': return 'bg-green-500/20 text-green-100 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-500/50';
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          Live Business Alerts
          <Badge className="bg-green-500/20 text-green-100 border-green-500/50 animate-pulse">
            LIVE
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {livePredictions.map((prediction, index) => (
          <div 
            key={index} 
            className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 animate-fade-in space-y-3"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                {getTrendIcon(prediction.trend)}
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div className="text-sm font-medium text-white">
                    {prediction.prediction}
                  </div>
                  <Badge className={getPriorityColor(prediction.priority)}>
                    {prediction.priority}
                  </Badge>
                </div>
                
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span>Source: {prediction.engine}</span>
                  <span>•</span>
                  <span>{prediction.confidence}% confidence</span>
                  <span>•</span>
                  <span>{prediction.timestamp}</span>
                </div>

                <div className="p-2 rounded bg-blue-500/10 border border-blue-500/20">
                  <div className="text-xs text-blue-300 font-medium mb-1">Recommended Action:</div>
                  <div className="text-xs text-blue-100">{prediction.action}</div>
                </div>

                <div className="flex justify-end">
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-600">
                    Take Action
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
          <div className="text-xs text-blue-100 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <strong>Smart Alerts:</strong> These real-time insights are prioritized by business impact. 
            High-priority alerts require immediate attention to prevent revenue loss or capture opportunities.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
