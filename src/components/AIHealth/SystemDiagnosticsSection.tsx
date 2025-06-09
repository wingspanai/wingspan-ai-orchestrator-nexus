
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Activity, AlertTriangle, AlertCircle, Search, Check, Wrench, RefreshCw } from "lucide-react";

interface SystemDiagnosticsSectionProps {
  autoDiagnostics: boolean;
  onToggleAutoDiagnostics: (enabled: boolean) => void;
}

export function SystemDiagnosticsSection({ autoDiagnostics, onToggleAutoDiagnostics }: SystemDiagnosticsSectionProps) {
  const mockIssues = [
    {
      id: 1,
      name: "High Memory Usage in NLP Pipeline",
      component: "Text Processing",
      severity: "warning",
      description: "Memory consumption has increased by 23% over the past hour",
      detectedAt: new Date(Date.now() - 1800000),
      impact: 65,
      affectedServices: 3,
      autoFixAvailable: true
    },
    {
      id: 2,
      name: "API Rate Limit Approaching",
      component: "OpenAI Integration",
      severity: "critical",
      description: "Current usage at 89% of daily limit",
      detectedAt: new Date(Date.now() - 900000),
      impact: 85,
      affectedServices: 7,
      autoFixAvailable: false
    }
  ];

  const mockStreamData = {
    currentLoad: 347,
    queueDepth: 12,
    activeModelCount: 8,
    isStreaming: true
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.abs(now.getTime() - date.getTime());
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (minutes < 60) {
      return `${minutes}m ago`;
    }
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default: return <AlertCircle className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>System Diagnostics</CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Switch
                checked={autoDiagnostics}
                onCheckedChange={onToggleAutoDiagnostics}
              />
              <span className="text-sm">Auto-Diagnostics {autoDiagnostics ? 'On' : 'Off'}</span>
            </div>
            <Button size="sm">
              <Activity className="h-4 w-4 mr-2" />
              Run Full Scan
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* System Health Map */}
        <div>
          <h3 className="font-medium mb-3">System Component Health</h3>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Activity className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h4 className="text-lg font-semibold mb-2">Component Health Map</h4>
              <p className="text-muted-foreground">
                Interactive treemap visualization of system component health
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Last scan: {formatTime(new Date(Date.now() - 300000))}
              </p>
            </div>
          </div>
        </div>

        {/* Active Issues */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Active Issues</h3>
            <div className="flex gap-2">
              <Badge variant="outline">All</Badge>
              <Badge variant="outline">Critical</Badge>
              <Badge variant="outline">Performance</Badge>
              <Badge variant="outline">Reliability</Badge>
            </div>
          </div>
          
          <div className="space-y-3">
            {mockIssues.map(issue => (
              <Card key={issue.id} className={`border-l-4 ${
                issue.severity === 'critical' ? 'border-l-red-500' : 
                issue.severity === 'warning' ? 'border-l-yellow-500' : 'border-l-blue-500'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {getSeverityIcon(issue.severity)}
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{issue.name}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{issue.component}</p>
                        <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Impact: {issue.impact}%</span>
                          <span>Affected: {issue.affectedServices} services</span>
                          <span>{formatTime(issue.detectedAt)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Search className="h-3 w-3 mr-1" />
                        Investigate
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Check className="h-3 w-3 mr-1" />
                        Ack
                      </Button>
                      {issue.autoFixAvailable && (
                        <Button size="sm">
                          <Wrench className="h-3 w-3 mr-1" />
                          Auto-Fix
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Real-time Performance Monitor */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Real-time Performance Monitor</h3>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${mockStreamData.isStreaming ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-sm text-muted-foreground">
                {mockStreamData.isStreaming ? 'Live' : 'Paused'}
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Real-time metrics stream</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-3">
                  <div className="text-sm text-muted-foreground">Current Load</div>
                  <div className="text-lg font-semibold">{mockStreamData.currentLoad} req/s</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <div className="text-sm text-muted-foreground">Queue Depth</div>
                  <div className={`text-lg font-semibold ${mockStreamData.queueDepth > 10 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {mockStreamData.queueDepth}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-3">
                  <div className="text-sm text-muted-foreground">Active Models</div>
                  <div className="text-lg font-semibold">{mockStreamData.activeModelCount}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
