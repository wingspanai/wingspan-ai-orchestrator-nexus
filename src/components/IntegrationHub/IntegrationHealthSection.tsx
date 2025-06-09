
import { RefreshCw, AlertTriangle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function IntegrationHealthSection() {
  const overallHealth = 94;
  const healthyIntegrations = 18;
  const warningIntegrations = 4;
  const criticalIntegrations = 1;

  const activeIssues = [
    {
      id: 1,
      title: "API Rate Limit Exceeded",
      description: "HubSpot integration has exceeded daily API rate limit",
      integration: "HubSpot",
      severity: "warning",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: 2,
      title: "Authentication Failed",
      description: "Salesforce connection requires re-authentication",
      integration: "Salesforce",
      severity: "critical",
      timestamp: new Date(Date.now() - 30 * 60 * 1000)
    },
    {
      id: 3,
      title: "Sync Delay Detected",
      description: "QuickBooks sync is running 15 minutes behind schedule",
      integration: "QuickBooks",
      severity: "warning",
      timestamp: new Date(Date.now() - 45 * 60 * 1000)
    }
  ];

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.abs(now.getTime() - date.getTime());
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ago`;
    }
    return `${minutes}m ago`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-text-primary">System Health Monitor</h2>
        <Button variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Health Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overall Health Score */}
        <Card>
          <CardHeader>
            <CardTitle>Overall Health</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                    opacity="0.2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${overallHealth * 2.51} 251`}
                    className="text-green-600"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{overallHealth}%</div>
                    <div className="text-sm text-muted-foreground">Health Score</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm">Healthy</span>
                </div>
                <span className="font-medium">{healthyIntegrations}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="text-sm">Warnings</span>
                </div>
                <span className="font-medium">{warningIntegrations}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-sm">Critical</span>
                </div>
                <span className="font-medium">{criticalIntegrations}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Issues */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Active Issues</CardTitle>
            <Badge variant="destructive">{activeIssues.length}</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeIssues.map((issue) => (
                <div key={issue.id} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className={`mt-0.5 ${
                    issue.severity === 'critical' 
                      ? 'text-red-600' 
                      : 'text-yellow-600'
                  }`}>
                    {issue.severity === 'critical' ? (
                      <AlertTriangle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm">{issue.title}</h4>
                    <p className="text-sm text-muted-foreground">{issue.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
                        {issue.integration}
                      </Badge>
                      <span>{formatTime(issue.timestamp)}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline">
                      Fix Now
                    </Button>
                    <Button size="sm" variant="ghost">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>API Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Calls Today</span>
                  <span className="font-medium">12,847</span>
                </div>
                <Progress value={65} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Rate Limit Status</span>
                  <span className="font-medium">73%</span>
                </div>
                <Progress value={73} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sync Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">96.8%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2.3s</div>
                <div className="text-sm text-muted-foreground">Avg Duration</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">3.2%</div>
                <div className="text-sm text-muted-foreground">Current Rate</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Threshold</span>
                  <span className="font-medium">5%</span>
                </div>
                <Progress value={64} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
