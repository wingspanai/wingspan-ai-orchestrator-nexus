
import { MainLayout } from "@/components/Layout/MainLayout";
import { 
  DashboardHeader,
  HealthScoreHero,
  ExecutiveMetricCard,
  InsightCard,
  ActivityItem,
  PredictionCard
} from "@/components/Dashboard/ExecutiveDashboard";
import { 
  Bot, 
  Zap, 
  Brain, 
  Activity, 
  DollarSign, 
  Package, 
  Users, 
  UserCheck,
  TrendingUp,
  Target,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExecutiveOverview = () => {
  // Sample data
  const healthComponents = [
    { label: "Financial", value: 95, trend: "+3%", icon: <DollarSign className="h-4 w-4" /> },
    { label: "Operations", value: 88, trend: "+7%", icon: <Package className="h-4 w-4" /> },
    { label: "Customer", value: 94, trend: "+2%", icon: <Users className="h-4 w-4" /> },
    { label: "Employee", value: 91, trend: "+4%", icon: <UserCheck className="h-4 w-4" /> }
  ];

  const metrics = [
    {
      title: "Active AI Agents",
      value: 47,
      change: "+12 this month",
      changeType: "positive" as const,
      icon: <Bot className="h-4 w-4" />,
      sparklineData: [20, 25, 30, 35, 42, 47]
    },
    {
      title: "Tasks Automated",
      value: "12,847",
      change: "+34%",
      changeType: "positive" as const,
      subtitle: "$247K saved this month",
      icon: <Zap className="h-4 w-4" />,
      sparklineData: [8000, 9200, 10100, 11300, 12000, 12847]
    },
    {
      title: "Prediction Accuracy",
      value: "94.2%",
      change: "+2.1%",
      changeType: "positive" as const,
      icon: <Brain className="h-4 w-4" />,
      sparklineData: [88, 90, 91, 92, 93, 94.2]
    },
    {
      title: "System Health",
      value: "99.98%",
      subtitle: "All systems operational",
      icon: <Activity className="h-4 w-4" />,
      sparklineData: [99.1, 99.5, 99.8, 99.9, 99.95, 99.98]
    }
  ];

  const insights = [
    {
      priority: "high" as const,
      title: "Revenue Opportunity Detected",
      description: "3 enterprise deals showing acceleration signals. Combined potential value: $450K",
      confidence: 0.92,
      impact: "$450K potential revenue",
      actions: [
        { label: "View Details", variant: "default" as const },
        { label: "Assign to Sales", variant: "outline" as const }
      ]
    },
    {
      priority: "medium" as const,
      title: "Cost Optimization Available",
      description: "Cloud infrastructure showing 35% underutilization. Potential savings: $24K/month",
      confidence: 0.88,
      impact: "$24K/month savings",
      actions: [
        { label: "Optimize Now", variant: "default" as const }
      ]
    },
    {
      priority: "low" as const,
      title: "Team Productivity Insight",
      description: "Engineering velocity increased 23% after AI agent deployment",
      confidence: 0.85,
      actions: [
        { label: "View Report", variant: "outline" as const }
      ]
    }
  ];

  const activities = [
    {
      timestamp: "2 min ago",
      type: "agent" as const,
      title: "Sales Pipeline Agent",
      description: "Identified 5 deals at risk worth $280K. Automated follow-up sequences initiated.",
      tags: [
        { label: "AI Agent", color: "purple" },
        { label: "Revenue", color: "green" }
      ]
    },
    {
      timestamp: "15 min ago",
      type: "integration" as const,
      title: "Salesforce Integration",
      description: "Successfully synced 1,247 records. Data quality score: 98%",
      tags: [
        { label: "Integration", color: "blue" }
      ]
    },
    {
      timestamp: "1 hour ago",
      type: "alert" as const,
      title: "Anomaly Detected",
      description: "Unusual spike in customer support tickets. EMT Agent investigating root cause.",
      tags: [
        { label: "Alert", color: "amber" }
      ]
    }
  ];

  const predictions = [
    {
      icon: <TrendingUp className="h-4 w-4" />,
      label: "Revenue Forecast",
      predictedValue: "$6.8M",
      confidence: "89% confidence",
      details: (
        <div className="text-sm text-muted-foreground">
          Based on current pipeline and AI acceleration patterns
        </div>
      )
    },
    {
      icon: <Users className="h-4 w-4" />,
      label: "Churn Risk",
      predictedValue: "3 accounts",
      confidence: "92% confidence",
      details: (
        <div className="space-y-1">
          <div className="text-sm text-red-600">Acme Corp - High Risk</div>
          <div className="text-sm text-amber-600">TechStart - Medium Risk</div>
          <div className="text-sm text-amber-600">GlobalCo - Medium Risk</div>
        </div>
      )
    },
    {
      icon: <Target className="h-4 w-4" />,
      label: "Goal Achievement",
      predictedValue: "87%",
      confidence: "94% confidence",
      details: (
        <div className="text-sm text-muted-foreground">
          Q1 objectives on track for strong completion
        </div>
      )
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        <DashboardHeader
          userName="Sarah Chen"
          activeAgents={47}
          tasksCompleted={1247}
          timeSaved={32}
        />

        <HealthScoreHero
          score={92}
          trend="+5%"
          components={healthComponents}
        />

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <ExecutiveMetricCard
              key={metric.title}
              {...metric}
              index={index}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Insights Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <InsightCard
                    key={insight.title}
                    {...insight}
                    index={index}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real-time Activity Feed */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
                  <Activity className="h-4 w-4 text-white" />
                </div>
                Live Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {activities.map((activity, index) => (
                  <ActivityItem
                    key={`${activity.timestamp}-${activity.title}`}
                    {...activity}
                    index={index}
                  />
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Load more activities
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Predictive Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
                <Target className="h-4 w-4 text-white" />
              </div>
              Predictive Insights
              <div className="ml-auto text-sm text-muted-foreground">
                Next Quarter
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {predictions.map((prediction, index) => (
                <PredictionCard
                  key={prediction.label}
                  {...prediction}
                  index={index}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ExecutiveOverview;
