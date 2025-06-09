
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  RefreshCw,
  Target,
  DollarSign
} from 'lucide-react';

export const AIFinancialInsightsPanel = () => {
  const insights = [
    {
      id: 1,
      priority: 'high',
      category: 'Cash Flow',
      title: 'Cash Flow Optimization Opportunity',
      description: 'Implementing automated invoice collection could improve cash flow by 15-20 days.',
      confidence: 92,
      impact: '+$45K runway improvement',
      actions: [
        'Enable automated payment reminders',
        'Implement payment link automation',
        'Set up collection workflow'
      ]
    },
    {
      id: 2,
      priority: 'medium',
      category: 'Revenue',
      title: 'Pricing Optimization Detected',
      description: '68% of customers would accept a 12% price increase with minimal churn risk.',
      confidence: 87,
      impact: '+$180K ARR potential',
      actions: [
        'A/B test price increase',
        'Segment customer willingness',
        'Implement gradual rollout'
      ]
    },
    {
      id: 3,
      priority: 'low',
      category: 'Cost Efficiency',
      title: 'Vendor Consolidation Opportunity',
      description: 'Identified 4 overlapping SaaS tools that could be consolidated.',
      confidence: 94,
      impact: '+$24K savings/year',
      actions: [
        'Audit tool usage patterns',
        'Negotiate bulk discounts',
        'Implement single vendor solution'
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-800/20 border-indigo-200 dark:border-indigo-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-indigo-600" />
            AI Financial Insights
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">$249K total opportunities</Badge>
            <Button variant="ghost" size="sm">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <Card key={insight.id} className="bg-white/80 dark:bg-gray-800/80">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant={getPriorityColor(insight.priority)}>
                    {insight.priority.charAt(0).toUpperCase() + insight.priority.slice(1)} Priority
                  </Badge>
                  <Badge variant="outline">{insight.category}</Badge>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-muted-foreground">AI Confidence</div>
                  <div className="text-sm font-medium">{insight.confidence}%</div>
                </div>
                <Progress value={insight.confidence} className="h-1" />
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">{insight.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-3">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-medium">{insight.impact}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-xs font-medium text-muted-foreground">Recommended Actions:</div>
                  {insight.actions.map((action, index) => (
                    <div key={index} className="text-xs flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Implement
                  </Button>
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
