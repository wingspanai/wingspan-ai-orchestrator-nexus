
import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Calendar, Activity, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PeopleDashboard = () => {
  const subDomains = [
    {
      id: 1,
      title: "Human Resources",
      healthScore: 91,
      primaryMetric: "87%",
      trend: 4,
      path: "/hr",
      icon: Users,
      description: "Employee management and organizational health"
    },
    {
      id: 2,
      title: "Performance Management",
      healthScore: 88,
      primaryMetric: "94%",
      trend: 7,
      path: "/hr/performance",
      icon: Target,
      description: "Goal tracking and performance analytics"
    },
    {
      id: 3,
      title: "Talent Acquisition",
      healthScore: 85,
      primaryMetric: "15 Hires",
      trend: 25,
      path: "/hr/talent",
      icon: Search,
      description: "Recruitment and onboarding optimization"
    },
    {
      id: 4,
      title: "Engagement & Culture",
      healthScore: 93,
      primaryMetric: "91%",
      trend: 3,
      path: "/hr/engagement",
      icon: Activity,
      description: "Employee satisfaction and culture metrics"
    }
  ];

  const teamMetrics = [
    { name: "Employee Satisfaction", value: "91%", change: 4, status: "up" },
    { name: "Retention Rate", value: "95%", change: 2, status: "up" },
    { name: "Productivity Index", value: "108%", change: 15, status: "up" },
    { name: "Time to Hire", value: "18 days", change: -12, status: "down" }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Command Center</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>People & Culture</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Domain Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold font-display text-gradient">
                  People & Culture
                </h1>
                <p className="text-muted-foreground">
                  Employee engagement, talent management, and organizational health
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">87</div>
            <div className="text-sm text-muted-foreground">Health Score</div>
          </div>
        </div>

        {/* Sub-Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subDomains.map((domain) => (
            <Card key={domain.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <domain.icon className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">{domain.title}</CardTitle>
                  </div>
                  <Badge variant="secondary">
                    {domain.healthScore}% Health
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{domain.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{domain.primaryMetric}</div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">+{domain.trend}%</span>
                  </div>
                </div>

                <Button asChild variant="ghost" className="w-full justify-between group">
                  <Link to={domain.path}>
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Metrics & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600" />
                Team Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{metric.name}</h4>
                    <p className="text-sm text-muted-foreground">{metric.value}</p>
                  </div>
                  <div className={`flex items-center gap-1 ${metric.status === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">{metric.change > 0 ? '+' : ''}{metric.change}%</span>
                  </div>
                </div>
              ))}
              <Button asChild className="w-full mt-4">
                <Link to="/hr">
                  View Detailed HR Analytics
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>People Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/hr/talent">
                  <Search className="mr-2 h-4 w-4" />
                  Start Recruitment Process
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/hr/performance">
                  <Target className="mr-2 h-4 w-4" />
                  Performance Reviews
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  Team Calendar Intelligence
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default PeopleDashboard;
