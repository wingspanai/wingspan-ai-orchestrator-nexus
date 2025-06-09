
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, RefreshCw, TrendingUp, Users, Globe, Database, Clock, AlertTriangle } from 'lucide-react';

export function SecurityInsightsSection() {
  const insights = [
    {
      id: 1,
      priority: 'critical',
      category: 'Access Pattern',
      title: 'Unusual Access Pattern Detected',
      description: 'AI detected anomalous access patterns from user john.doe accessing financial data outside normal hours',
      confidence: 92,
      evidence: [
        'Access at 2:30 AM (usual: 9 AM - 5 PM)',
        'Location: Tokyo (usual: San Francisco)',
        '15GB downloaded (10x normal)'
      ]
    },
    {
      id: 2,
      priority: 'high',
      category: 'Configuration',
      title: 'Security Configuration Drift',
      description: '3 security configurations have drifted from baseline over the past week',
      confidence: 87,
      evidence: [
        'Firewall rules modified',
        'Password policy weakened',
        'Audit logging disabled'
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          <CardTitle>AI Security Insights</CardTitle>
        </div>
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => (
          <div key={insight.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className={getPriorityColor(insight.priority)}>
                    {insight.priority} Priority
                  </Badge>
                  <Badge variant="secondary">{insight.category}</Badge>
                  <Badge variant="outline">
                    {insight.confidence}% confidence
                  </Badge>
                </div>
                <h4 className="font-medium">{insight.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-sm font-medium">Evidence:</h5>
              <ul className="space-y-1">
                {insight.evidence.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-current rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-2 pt-2">
              {insight.priority === 'critical' && (
                <Button size="sm" variant="destructive">
                  Block User
                </Button>
              )}
              <Button size="sm">
                Investigate
              </Button>
              <Button size="sm" variant="outline">
                Dismiss
              </Button>
            </div>
          </div>
        ))}
        
        {insights.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Brain className="h-12 w-12 mx-auto mb-4" />
            <p>No security insights available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
