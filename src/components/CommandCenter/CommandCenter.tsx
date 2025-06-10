
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, AlertTriangle, Users, DollarSign, Activity, Shield, Zap, Bot } from 'lucide-react';

interface HealthScore {
  score: number;
  trend: number;
  status: 'healthy' | 'attention' | 'critical';
}

interface QuadrantData {
  id: string;
  title: string;
  primaryMetric: string;
  trend: number;
  status: 'healthy' | 'attention' | 'critical';
  subMetrics: Array<{
    name: string;
    value: string;
    change: number;
  }>;
  path: string;
  icon: React.ComponentType<any>;
}

interface CriticalAlert {
  id: string;
  type: 'opportunity' | 'risk' | 'urgent';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  suggestedAgents?: number;
  impact?: string;
}

export function CommandCenter() {
  const navigate = useNavigate();
  const [healthScore] = useState<HealthScore>({
    score: 92,
    trend: 5,
    status: 'healthy'
  });

  const [criticalAlerts] = useState<CriticalAlert[]>([
    {
      id: '1',
      type: 'opportunity',
      title: 'Revenue Growth Opportunity Detected',
      description: '3 deals showing acceleration signals - potential $240K increase',
      priority: 'high',
      suggestedAgents: 2,
      impact: '+12% revenue'
    },
    {
      id: '2',
      type: 'risk',
      title: 'Customer Churn Risk Alert',
      description: '2 enterprise accounts showing early warning signals',
      priority: 'high',
      suggestedAgents: 3,
      impact: '$340K at risk'
    }
  ]);

  const [quadrants] = useState<QuadrantData[]>([
    {
      id: 'business',
      title: 'Business Performance',
      primaryMetric: '$3.2M',
      trend: 12,
      status: 'healthy',
      path: '/business',
      icon: DollarSign,
      subMetrics: [
        { name: 'Revenue', value: '$3.2M', change: 12 },
        { name: 'Growth Rate', value: '34%', change: 8 },
        { name: 'Market Share', value: '12.4%', change: 3 }
      ]
    },
    {
      id: 'operations',
      title: 'Operations Excellence',
      primaryMetric: '94%',
      trend: 8,
      status: 'attention',
      path: '/operations',
      icon: Activity,
      subMetrics: [
        { name: 'Efficiency', value: '94%', change: 8 },
        { name: 'Automation', value: '76%', change: 15 },
        { name: 'Quality Score', value: '4.8/5', change: 2 }
      ]
    },
    {
      id: 'people',
      title: 'People & Culture',
      primaryMetric: '87%',
      trend: 3,
      status: 'healthy',
      path: '/people',
      icon: Users,
      subMetrics: [
        { name: 'Engagement', value: '87%', change: 3 },
        { name: 'Retention', value: '92%', change: -2 },
        { name: 'Productivity', value: '+67%', change: 12 }
      ]
    },
    {
      id: 'risk',
      title: 'Risk & Compliance',
      primaryMetric: 'Low',
      trend: 0,
      status: 'healthy',
      path: '/risk',
      icon: Shield,
      subMetrics: [
        { name: 'Security Score', value: '98.7%', change: 1 },
        { name: 'Compliance', value: '100%', change: 0 },
        { name: 'Financial Risk', value: 'Low', change: 0 }
      ]
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'attention': return 'text-amber-600 bg-amber-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'opportunity': return 'border-green-200 bg-green-50';
      case 'risk': return 'border-red-200 bg-red-50';
      case 'urgent': return 'border-amber-200 bg-amber-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Health Score Header */}
      <div className="text-center py-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">WingSpan AI Command Center</h1>
          <p className="text-purple-100">Intelligent Business Operating System</p>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <div className="text-center">
            <div className="text-6xl font-bold">{healthScore.score}</div>
            <div className="text-sm text-purple-100">Company Health Score</div>
          </div>
          <div className="flex items-center space-x-2">
            {healthScore.trend > 0 ? (
              <TrendingUp className="h-6 w-6 text-green-400" />
            ) : (
              <TrendingDown className="h-6 w-6 text-red-400" />
            )}
            <span className="text-lg font-semibold">
              {healthScore.trend > 0 ? '+' : ''}{healthScore.trend}%
            </span>
          </div>
        </div>
      </div>

      {/* Critical Alerts Strip */}
      {criticalAlerts.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Critical Insights
          </h2>
          {criticalAlerts.map(alert => (
            <Alert key={alert.id} className={getAlertColor(alert.type)}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold">{alert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                  {alert.suggestedAgents && (
                    <div className="mt-2 flex items-center gap-4">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Bot className="mr-2 h-4 w-4" />
                        View {alert.suggestedAgents} AI Solutions
                      </Button>
                      <span className="text-xs text-muted-foreground">
                        {alert.impact}
                      </span>
                    </div>
                  )}
                </div>
                <Badge className={`${alert.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`}>
                  {alert.priority.toUpperCase()}
                </Badge>
              </div>
            </Alert>
          ))}
        </div>
      )}

      {/* Four Primary Quadrants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quadrants.map(quadrant => (
          <Card 
            key={quadrant.id} 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={() => navigate(quadrant.path)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
                    <quadrant.icon className="h-6 w-6 text-white" />
                  </div>
                  {quadrant.title}
                </CardTitle>
                <Badge className={getStatusColor(quadrant.status)}>
                  {quadrant.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">{quadrant.primaryMetric}</div>
                  <div className="flex items-center space-x-1">
                    {quadrant.trend > 0 ? (
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    ) : quadrant.trend < 0 ? (
                      <TrendingDown className="h-5 w-5 text-red-600" />
                    ) : null}
                    {quadrant.trend !== 0 && (
                      <span className={`font-semibold ${quadrant.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {quadrant.trend > 0 ? '+' : ''}{quadrant.trend}%
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {quadrant.subMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{metric.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{metric.value}</span>
                        {metric.change !== 0 && (
                          <span className={`text-xs ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {metric.change > 0 ? '+' : ''}{metric.change}%
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Explore {quadrant.title}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick AI Recommendations */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-600" />
            AI-Powered Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-blue-600">23</div>
              <div className="text-sm text-muted-foreground">Optimization Opportunities</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-green-600">$2.4M</div>
              <div className="text-sm text-muted-foreground">Potential Value Creation</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-purple-600">15min</div>
              <div className="text-sm text-muted-foreground">Average Deploy Time</div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button onClick={() => navigate('/agents')} className="bg-blue-600 hover:bg-blue-700">
              <Bot className="mr-2 h-4 w-4" />
              Explore AI Agent Store
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
