
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Bot, TrendingUp, TrendingDown, Zap, AlertTriangle } from 'lucide-react';

interface MetricData {
  title: string;
  value: string | number;
  change: number;
  target?: number;
  status?: 'healthy' | 'warning' | 'critical';
}

interface AgentRecommendation {
  agent: string;
  impact: string;
  confidence: number;
  deployTime: string;
  category: string;
  estimatedROI: string;
}

interface MetricWithAgentProps {
  metric: MetricData;
  recommendation?: AgentRecommendation;
  onAgentClick?: () => void;
  className?: string;
}

export function MetricWithAgent({ 
  metric, 
  recommendation, 
  onAgentClick,
  className = "" 
}: MetricWithAgentProps) {
  const [showRecommendation, setShowRecommendation] = useState(false);
  
  const isBelowTarget = metric.target && typeof metric.value === 'number' && metric.value < metric.target;
  const isNegativeTrend = metric.change < 0;
  const shouldShowAgent = recommendation && (isBelowTarget || isNegativeTrend || metric.status === 'warning');

  const getTrendIcon = () => {
    if (metric.change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (metric.change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return null;
  };

  const getTrendColor = () => {
    if (metric.change > 0) return "text-green-600";
    if (metric.change < 0) return "text-red-600";
    return "text-muted-foreground";
  };

  const getUrgencyLevel = () => {
    if (metric.status === 'critical' || (isBelowTarget && Math.abs(metric.change) > 10)) return 'high';
    if (metric.status === 'warning' || isNegativeTrend) return 'medium';
    return 'low';
  };

  return (
    <Card className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {metric.title}
          </CardTitle>
          {shouldShowAgent && (
            <div 
              className="relative cursor-pointer"
              onClick={() => setShowRecommendation(!showRecommendation)}
            >
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center animate-pulse">
                <Bot className="h-3 w-3 text-white" />
              </div>
              {getUrgencyLevel() === 'high' && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
              )}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center space-x-1">
              {getTrendIcon()}
              {metric.change !== 0 && (
                <span className={`text-sm font-semibold ${getTrendColor()}`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
              )}
            </div>
          </div>

          {metric.target && (
            <div className="text-xs text-muted-foreground">
              Target: {metric.target}
              {isBelowTarget && (
                <span className="ml-2 text-amber-600 font-medium">
                  Below target
                </span>
              )}
            </div>
          )}

          {shouldShowAgent && showRecommendation && recommendation && (
            <Alert className={`mt-4 ${
              getUrgencyLevel() === 'high' 
                ? 'bg-red-50 border-red-200' 
                : 'bg-amber-50 border-amber-200'
            }`}>
              <Bot className={`h-4 w-4 ${
                getUrgencyLevel() === 'high' ? 'text-red-600' : 'text-amber-600'
              }`} />
              <AlertDescription className="space-y-3">
                <div>
                  <p className="font-medium">AI Agent can improve this by {recommendation.impact}</p>
                  <p className="text-xs mt-1">
                    Deploy "{recommendation.agent}" • {recommendation.deployTime} setup • {recommendation.estimatedROI} ROI
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    size="sm" 
                    onClick={onAgentClick}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Zap className="mr-1 h-3 w-3" />
                    Deploy Now
                  </Button>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="outline" className="text-xs">
                    {recommendation.category}
                  </Badge>
                  <span className="text-muted-foreground">
                    {recommendation.confidence}% confidence
                  </span>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
