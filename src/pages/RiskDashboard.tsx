
import { MainLayout } from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ShieldCheck, AlertTriangle, Key, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const RiskDashboard = () => {
  const subDomains = [
    {
      id: 1,
      title: "AI Trust & Governance",
      healthScore: 96,
      primaryMetric: "High Trust",
      trend: 3,
      path: "/trust",
      icon: Shield,
      description: "AI decision transparency and ethical oversight"
    },
    {
      id: 2,
      title: "Security Operations",
      healthScore: 98,
      primaryMetric: "Zero Breaches",
      trend: 2,
      path: "/security",
      icon: ShieldCheck,
      description: "Cybersecurity monitoring and threat detection"
    },
    {
      id: 3,
      title: "Legal & Compliance",
      healthScore: 94,
      primaryMetric: "100%",
      trend: 1,
      path: "/legal",
      icon: FileText,
      description: "Regulatory compliance and legal risk management"
    },
    {
      id: 4,
      title: "Zero-Knowledge Systems",
      healthScore: 97,
      primaryMetric: "Fully Compliant",
      trend: 5,
      path: "/legal/zero-knowledge",
      icon: Key,
      description: "Privacy-preserving compliance and verification"
    }
  ];

  const riskAlerts = [
    {
      level: "low",
      title: "Routine Security Audit Due",
      description: "Quarterly security review scheduled for next week",
      action: "Schedule Review"
    },
    {
      level: "medium", 
      title: "Compliance Documentation Update",
      description: "New regulations require policy updates by month-end",
      action: "Review Requirements"
    }
  ];

  const complianceStatus = [
    { framework: "SOC 2 Type II", status: "compliant", lastAudit: "Q2 2024" },
    { framework: "GDPR", status: "compliant", lastAudit: "Q1 2024" },
    { framework: "ISO 27001", status: "compliant", lastAudit: "Q3 2024" },
    { framework: "HIPAA", status: "reviewing", lastAudit: "Q4 2023" }
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
              <BreadcrumbPage>Risk & Compliance</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Domain Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold font-display text-gradient">
                  Risk & Compliance
                </h1>
                <p className="text-muted-foreground">
                  Security, governance, and regulatory compliance management
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">Low Risk</div>
            <div className="text-sm text-muted-foreground">Risk Level</div>
          </div>
        </div>

        {/* Sub-Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subDomains.map((domain) => (
            <Card key={domain.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <domain.icon className="h-5 w-5 text-purple-600" />
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
                    <ShieldCheck className="h-4 w-4" />
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

        {/* Risk Alerts & Compliance Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Risk Alerts & Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {riskAlerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  alert.level === 'low' ? 'bg-blue-50 border-blue-200' : 'bg-amber-50 border-amber-200'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{alert.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      {alert.action}
                    </Button>
                  </div>
                </div>
              ))}
              <Button asChild className="w-full mt-4">
                <Link to="/security">
                  View All Security Alerts
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                Compliance Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {complianceStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{item.framework}</h4>
                    <p className="text-sm text-muted-foreground">Last audit: {item.lastAudit}</p>
                  </div>
                  <Badge 
                    variant={item.status === 'compliant' ? 'default' : 'secondary'}
                    className={item.status === 'compliant' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
              <Button asChild variant="outline" className="w-full mt-4">
                <Link to="/legal">
                  Compliance Dashboard
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default RiskDashboard;
