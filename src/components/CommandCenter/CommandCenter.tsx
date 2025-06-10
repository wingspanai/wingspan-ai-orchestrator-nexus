
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TrendingUp, TrendingDown, Building2, Settings, Users, Shield, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface QuadrantData {
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
  icon: any;
}

const quadrantData: QuadrantData[] = [
  {
    title: "Business Performance",
    primaryMetric: "$3.2M",
    trend: 12,
    status: "healthy",
    subMetrics: [
      { name: "Revenue", value: "$2.4M", change: 18 },
      { name: "Growth Rate", value: "34%", change: 12 },
      { name: "Market Share", value: "15.3%", change: 8 }
    ],
    path: "/business",
    icon: TrendingUp
  },
  {
    title: "Operations Excellence",
    primaryMetric: "94%",
    trend: 8,
    status: "attention",
    subMetrics: [
      { name: "Efficiency", value: "89%", change: 5 },
      { name: "Automation", value: "67%", change: 12 },
      { name: "Quality Score", value: "96%", change: 3 }
    ],
    path: "/operations",
    icon: Settings
  },
  {
    title: "People & Culture",
    primaryMetric: "87%",
    trend: 3,
    status: "healthy",
    subMetrics: [
      { name: "Employee Satisfaction", value: "91%", change: 4 },
      { name: "Retention Rate", value: "95%", change: 2 },
      { name: "Productivity", value: "108%", change: 15 }
    ],
    path: "/people",
    icon: Users
  },
  {
    title: "Risk & Compliance",
    primaryMetric: "Low",
    trend: 0,
    status: "healthy",
    subMetrics: [
      { name: "Security Score", value: "98%", change: 1 },
      { name: "Compliance", value: "100%", change: 0 },
      { name: "Risk Level", value: "2/10", change: -1 }
    ],
    path: "/risk",
    icon: Shield
  }
];

const criticalAlerts = [
  {
    id: 1,
    type: "opportunity" as const,
    title: "Revenue Optimization Opportunity",
    message: "AI analysis shows 23% revenue increase potential in Q4",
    urgency: "high" as const
  },
  {
    id: 2,
    type: "attention" as const,
    title: "Infrastructure Scaling Required",
    message: "Current load at 87% capacity, recommend scaling",
    urgency: "medium" as const
  }
];

export const CommandCenter = () => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-50 border-green-200';
      case 'attention': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'opportunity': return 'border-green-200 bg-green-50';
      case 'attention': return 'border-amber-200 bg-amber-50';
      case 'critical': return 'border-red-200 bg-red-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Company Health Score Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-4 rounded-2xl border">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              92
            </div>
            <div className="text-sm text-muted-foreground">Company Health Score</div>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">+5 vs last month</span>
          </div>
        </div>
      </div>

      {/* Critical Alerts Strip */}
      {criticalAlerts.length > 0 && (
        <div className="space-y-2">
          {criticalAlerts.map((alert) => (
            <Alert key={alert.id} className={getAlertColor(alert.type)}>
              <div className="flex items-center gap-3">
                {alert.type === 'opportunity' ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                )}
                <div className="flex-1">
                  <AlertDescription>
                    <span className="font-medium">{alert.title}:</span> {alert.message}
                  </AlertDescription>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </Alert>
          ))}
        </div>
      )}

      {/* Four Primary Quadrants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {quadrantData.map((quadrant) => (
          <Card 
            key={quadrant.title}
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={() => navigate(quadrant.path)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                    <quadrant.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{quadrant.title}</CardTitle>
                </div>
                <Badge className={getStatusColor(quadrant.status)}>
                  {quadrant.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Primary Metric */}
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">{quadrant.primaryMetric}</div>
                <div className={`flex items-center gap-1 ${quadrant.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {quadrant.trend > 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="font-medium">{quadrant.trend > 0 ? '+' : ''}{quadrant.trend}%</span>
                </div>
              </div>

              {/* Sub Metrics */}
              <div className="space-y-2">
                {quadrant.subMetrics.map((metric) => (
                  <div key={metric.name} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{metric.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{metric.value}</span>
                      <span className={`text-xs ${metric.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Drill Down Action */}
              <div className="pt-2 border-t">
                <Button variant="ghost" className="w-full justify-between group">
                  <span>View Detailed Analytics</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
