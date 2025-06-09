
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  RefreshCw, 
  TrendingUp, 
  Users, 
  DollarSign,
  AlertTriangle,
  Target,
  CheckCircle
} from 'lucide-react';

export function AIInsightsPanel() {
  const aiInsights = [
    {
      id: 1,
      category: 'Revenue Optimization',
      impact: 'high',
      confidence: 94,
      title: 'Pricing Strategy Opportunity',
      description: 'AI analysis suggests a 15% price increase for Enterprise tier would improve revenue by $2.1M annually with minimal churn risk.',
      dataPoints: [
        { icon: DollarSign, text: 'Current Enterprise ARPU: $12,500/month' },
        { icon: Users, text: '87% customer satisfaction above threshold' },
        { icon: TrendingUp, text: 'Competitor pricing 23% higher' }
      ],
      actions: [
        {
          id: 1,
          text: 'Implement gradual 15% price increase over 3 months',
          expectedImpact: '+$2.1M annual revenue'
        },
        {
          id: 2,
          text: 'A/B test pricing with 10% of new prospects',
          expectedImpact: 'Validate conversion impact'
        }
      ]
    },
    {
      id: 2,
      category: 'Customer Success',
      impact: 'medium',
      confidence: 87,
      title: 'Churn Risk Mitigation',
      description: 'Early warning system identified 23 enterprise customers at high churn risk based on usage patterns and support tickets.',
      dataPoints: [
        { icon: AlertTriangle, text: '23 customers flagged as high churn risk' },
        { icon: Users, text: 'Combined ARR at risk: $890K' },
        { icon: Target, text: '76% historical accuracy in predictions' }
      ],
      actions: [
        {
          id: 1,
          text: 'Deploy dedicated success manager to at-risk accounts',
          expectedImpact: '65% churn prevention rate'
        },
        {
          id: 2,
          text: 'Offer personalized training sessions',
          expectedImpact: '+40% feature adoption'
        }
      ]
    },
    {
      id: 3,
      category: 'Operational Efficiency',
      impact: 'medium',
      confidence: 91,
      title: 'Process Automation Opportunity',
      description: 'Customer onboarding process can be 60% automated, reducing time-to-value from 14 days to 5 days.',
      dataPoints: [
        { icon: CheckCircle, text: '60% of onboarding steps automatable' },
        { icon: Target, text: 'Reduce time-to-value by 64%' },
        { icon: DollarSign, text: 'Save $180K annually in manual effort' }
      ],
      actions: [
        {
          id: 1,
          text: 'Implement automated welcome sequence',
          expectedImpact: '40% faster initial setup'
        },
        {
          id: 2,
          text: 'Deploy smart configuration wizard',
          expectedImpact: '80% self-service completion'
        }
      ]
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'low':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-ai-primary" />
            <CardTitle>AI Business Insights</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Generate New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {aiInsights.map((insight) => (
            <div key={insight.id} className="p-4 border border-border rounded-lg space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{insight.category}</Badge>
                    <Badge className={getImpactColor(insight.impact)}>
                      {insight.impact} Impact
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                  <h4 className="font-semibold mb-2">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {insight.description}
                  </p>
                </div>
              </div>

              {/* Supporting Data */}
              <div>
                <h5 className="text-sm font-medium mb-2">Supporting Data</h5>
                <div className="space-y-1">
                  {insight.dataPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <point.icon className="h-3 w-3" />
                      <span>{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Actions */}
              <div>
                <h5 className="text-sm font-medium mb-2">Recommended Actions</h5>
                <div className="space-y-2">
                  {insight.actions.map((action, index) => (
                    <div key={action.id} className="flex items-start gap-3 p-2 bg-muted/50 rounded">
                      <div className="flex-shrink-0 w-5 h-5 bg-ai-primary text-white rounded-full flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">{action.text}</div>
                        <div className="text-xs text-ai-primary font-medium">
                          Expected Impact: {action.expectedImpact}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Implement
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center gap-2 pt-2 border-t">
                <Button size="sm">Explore Further</Button>
                <Button size="sm" variant="outline">Share</Button>
                <Button size="sm" variant="outline">Dismiss</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
