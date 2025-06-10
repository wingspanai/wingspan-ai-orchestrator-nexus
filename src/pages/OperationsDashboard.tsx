
import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Bot, Settings, Server, Activity, Plug, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const OperationsDashboard = () => {
  const subDomains = [
    {
      id: 1,
      title: "AI Operations Center",
      healthScore: 96,
      primaryMetric: "47 Agents",
      trend: 12,
      path: "/ai-health",
      icon: Activity,
      description: "AI agent performance and health monitoring"
    },
    {
      id: 2,
      title: "Agent Management",
      healthScore: 94,
      primaryMetric: "12.8K Tasks",
      trend: 34,
      path: "/my-agents",
      icon: Bot,
      description: "Deploy and manage AI agents across workflows"
    },
    {
      id: 3,
      title: "Infrastructure",
      healthScore: 89,
      primaryMetric: "99.98%",
      trend: 2,
      path: "/infrastructure",
      icon: Server,
      description: "System performance and infrastructure monitoring"
    },
    {
      id: 4,
      title: "Enterprise Resilience",
      healthScore: 91,
      primaryMetric: "Zero Downtime",
      trend: 5,
      path: "/resilience",
      icon: RefreshCw,
      description: "Self-healing systems and disaster recovery"
    }
  ];

  const systemHealth = [
    { name: "AI Agent Network", status: "healthy", uptime: "99.97%" },
    { name: "Data Processing", status: "healthy", uptime: "99.94%" },
    { name: "Integration Layer", status: "monitoring", uptime: "99.89%" },
    { name: "Security Systems", status: "healthy", uptime: "100%" }
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
              <BreadcrumbPage>Operations Excellence</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Domain Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold font-display text-gradient">
                  Operations Excellence
                </h1>
                <p className="text-muted-foreground">
                  AI operations, infrastructure, and system optimization
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-600">94</div>
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
                    <domain.icon className="h-5 w-5 text-orange-600" />
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

        {/* System Health & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-600" />
                System Health Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemHealth.map((system, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{system.name}</h4>
                    <p className="text-sm text-muted-foreground">Uptime: {system.uptime}</p>
                  </div>
                  <Badge 
                    variant={system.status === 'healthy' ? 'default' : 'secondary'}
                    className={system.status === 'healthy' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}
                  >
                    {system.status}
                  </Badge>
                </div>
              ))}
              <Button asChild className="w-full mt-4">
                <Link to="/infrastructure">
                  View Full System Monitor
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operations Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/agents">
                  <Bot className="mr-2 h-4 w-4" />
                  Deploy New AI Agent
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/integrations">
                  <Plug className="mr-2 h-4 w-4" />
                  Manage Integrations
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/resilience">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  System Resilience
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default OperationsDashboard;
