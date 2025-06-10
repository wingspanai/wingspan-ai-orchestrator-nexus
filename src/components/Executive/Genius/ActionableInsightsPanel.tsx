
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useGeniusStore } from '@/store/geniusStore';
import { AlertTriangle, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';

export function ActionableInsightsPanel() {
  const { actionableInsights } = useGeniusStore();

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'high': return <TrendingUp className="h-5 w-5 text-orange-500" />;
      case 'medium': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'low': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-100 border-red-500/50';
      case 'high': return 'bg-orange-500/20 text-orange-100 border-orange-500/50';
      case 'medium': return 'bg-yellow-500/20 text-yellow-100 border-yellow-500/50';
      case 'low': return 'bg-green-500/20 text-green-100 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-500/50';
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          Priority Actions Required
          <Badge className="bg-orange-500/20 text-orange-100 border-orange-500/50">
            {actionableInsights.filter(insight => insight.priority === 'critical' || insight.priority === 'high').length} High Priority
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {actionableInsights.map((insight, index) => (
          <div 
            key={index} 
            className="p-6 rounded-lg bg-slate-700/30 border border-slate-600/50 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {getPriorityIcon(insight.priority)}
                <div>
                  <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
                  <p className="text-sm text-slate-400">Source: {insight.source}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={getPriorityColor(insight.priority)}>
                  {insight.priority.toUpperCase()}
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/50">
                  {insight.confidence}% confidence
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-slate-300 font-medium">Business Impact</div>
                <div className="text-slate-100">{insight.impact}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-slate-300 font-medium">Recommended Action</div>
                <div className="text-slate-100">{insight.action}</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-600">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-slate-300">Act by: {insight.timeframe}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-300">{insight.potentialRevenue}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                  Learn More
                </Button>
                <Button 
                  size="sm" 
                  className={`${
                    insight.priority === 'critical' ? 'bg-red-600 hover:bg-red-700' : 
                    insight.priority === 'high' ? 'bg-orange-600 hover:bg-orange-700' : 
                    'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Take Action
                </Button>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30">
          <div className="text-sm text-green-100">
            <strong>AI Recommendation Engine:</strong> These insights are generated by analyzing patterns across 
            customer behavior, market conditions, and competitive intelligence. Acting on high-priority items 
            within their timeframes can result in significant revenue protection and growth opportunities.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
