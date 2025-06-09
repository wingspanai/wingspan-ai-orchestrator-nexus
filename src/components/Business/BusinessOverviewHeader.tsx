
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Download, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Activity, 
  Package, 
  Target,
  Lock,
  CheckCircle
} from 'lucide-react';

interface BusinessOverviewHeaderProps {
  timeframe: string;
  onTimeframeChange: (timeframe: string) => void;
  onRefresh: () => void;
}

export function BusinessOverviewHeader({ 
  timeframe, 
  onTimeframeChange, 
  onRefresh 
}: BusinessOverviewHeaderProps) {
  // Mock data - in real app, this would come from props or context
  const businessHealthScore = 87;
  const revenue = 12.4;
  const revenueChange = 8.3;
  const activeCustomers = 2847;
  const customerGrowth = 156;
  const activeProjects = 23;
  const onTrackProjects = 18;
  const atRiskProjects = 3;
  const delayedProjects = 2;
  const goalCompletion = 74;
  const completedGoals = 12;
  const totalGoals = 16;

  const healthFactors = [
    { icon: DollarSign, name: 'Financial Health', score: 92, color: 'text-purple-600' },
    { icon: Users, name: 'Customer Satisfaction', score: 89, color: 'text-blue-600' },
    { icon: TrendingUp, name: 'Growth Trajectory', score: 84, color: 'text-green-600' },
    { icon: Activity, name: 'Operational Efficiency', score: 83, color: 'text-amber-600' }
  ];

  const timeframeOptions = [
    { label: 'Today', value: 'today' },
    { label: 'This Week', value: 'week' },
    { label: 'This Month', value: 'month' },
    { label: 'This Quarter', value: 'quarter' },
    { label: 'This Year', value: 'year' }
  ];

  return (
    <div className="space-y-6">
      {/* Header Top */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-gradient">
            Business Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Real-time company performance and insights
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <select 
            value={timeframe}
            onChange={(e) => onTimeframeChange(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg bg-background"
          >
            {timeframeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
          
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Business Health Score */}
        <Card className="xl:col-span-1 gradient-border">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted/20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#healthGradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${businessHealthScore * 2.51} 251`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--ai-primary))" />
                      <stop offset="100%" stopColor="hsl(var(--ai-secondary))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold font-display text-gradient">
                    {businessHealthScore}
                  </div>
                  <div className="text-xs text-muted-foreground">Health Score</div>
                </div>
              </div>
              
              <Badge className="ai-gradient text-white">
                <TrendingUp className="h-3 w-3 mr-1" />
                +4% MoM
              </Badge>
            </div>
            
            <div className="mt-6 space-y-3">
              {healthFactors.map((factor) => (
                <div key={factor.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <factor.icon className={`h-4 w-4 ${factor.color}`} />
                    <span className="text-sm">{factor.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full ai-gradient rounded-full transition-all duration-500"
                        style={{ width: `${factor.score}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-8">{factor.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Revenue */}
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-ai-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold font-display">
                  ${revenue}M
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +{revenueChange}%
                  </Badge>
                  <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Target: $15M
                </div>
                <Progress value={82} className="h-1" />
              </div>
            </CardContent>
          </Card>

          {/* Active Customers */}
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Customers
              </CardTitle>
              <Users className="h-4 w-4 text-ai-secondary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold font-display">
                  {activeCustomers.toLocaleString()}
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    +{customerGrowth} new
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  2.1% churn rate
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects & Goals */}
          <div className="space-y-4">
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Projects
                </CardTitle>
                <Package className="h-4 w-4 text-ai-tertiary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold font-display mb-2">
                  {activeProjects}
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="text-green-600">{onTrackProjects} on track</span>
                  <span className="text-amber-600">{atRiskProjects} at risk</span>
                  <span className="text-red-600">{delayedProjects} delayed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Goal Completion
                </CardTitle>
                <Target className="h-4 w-4 text-ai-primary" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="transparent"
                        className="text-muted/20"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="hsl(var(--ai-primary))"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={`${goalCompletion * 2.51} 251`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                      {goalCompletion}%
                    </div>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium">{completedGoals}/{totalGoals}</div>
                    <div className="text-muted-foreground">completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
