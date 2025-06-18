import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Target, Rocket, Building2, FileText, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BusinessDashboard = () => {
  const subDomains = [
    {
      id: 1,
      title: "Financial Performance",
      healthScore: 95,
      primaryMetric: "$2.4M",
      trend: 18,
      path: "/finance",
      icon: DollarSign,
      description: "Revenue, expenses, and profitability analytics"
    },
    {
      id: 2,
      title: "Strategic Initiatives",
      healthScore: 88,
      primaryMetric: "12 Active",
      trend: 25,
      path: "/strategic-planning",
      icon: Target,
      description: "Goal tracking and strategic planning"
    },
    {
      id: 3,
      title: "Product Innovation",
      healthScore: 92,
      primaryMetric: "5 Launches",
      trend: 40,
      path: "/product-launch",
      icon: Rocket,
      description: "Product development and go-to-market"
    },
    {
      id: 4,
      title: "Market Intelligence",
      healthScore: 85,
      primaryMetric: "15.3%",
      trend: 8,
      path: "/competitive",
      icon: TrendingUp,
      description: "Competitive analysis and market insights"
    }
  ];

  const opportunities = [
    {
      title: "Q4 Revenue Acceleration",
      impact: "23% potential increase",
      confidence: 87,
      description: "AI analysis identifies untapped market segments"
    },
    {
      title: "Product Bundle Optimization",
      impact: "$340K annual savings",
      confidence: 92,
      description: "Cross-selling opportunities in existing customer base"
    }
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
              <BreadcrumbPage>Business Performance</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Domain Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold font-display text-gradient">
                  Business Performance
                </h1>
                <p className="text-muted-foreground">
                  Revenue, growth, and strategic business analytics
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">95</div>
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
                    <domain.icon className="h-5 w-5 text-blue-600" />
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

        {/* Opportunities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Growth Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {opportunities.map((opp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{opp.title}</h4>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {opp.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{opp.description}</p>
                  <p className="text-sm font-medium text-green-600">{opp.impact}</p>
                </div>
              ))}
              <Button className="w-full mt-4">
                Explore AI Recommendations
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/reports">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Business Report
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/strategic-planning">
                  <Target className="mr-2 h-4 w-4" />
                  Update Strategic Goals
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/competitive">
                  <Search className="mr-2 h-4 w-4" />
                  Market Analysis
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default BusinessDashboard;
