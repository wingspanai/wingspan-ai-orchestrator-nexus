
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  AlertCircle, 
  RefreshCw, 
  AlertTriangle,
  Activity,
  Cpu,
  HardDrive,
  Users,
  DollarSign,
  Zap
} from 'lucide-react';

export function OperationalDashboard() {
  // Mock system data
  const systems = [
    { id: 'api', name: 'API Gateway', status: 'operational', uptime: 99.9 },
    { id: 'database', name: 'Database', status: 'operational', uptime: 99.8 },
    { id: 'auth', name: 'Authentication', status: 'operational', uptime: 100 },
    { id: 'payment', name: 'Payment Service', status: 'warning', uptime: 98.5 },
    { id: 'analytics', name: 'Analytics', status: 'operational', uptime: 99.7 },
    { id: 'storage', name: 'File Storage', status: 'operational', uptime: 99.9 }
  ];

  const bottlenecks = [
    {
      id: 1,
      process: 'Customer Onboarding',
      impact: 'Avg. 3.2 days delay in new customer activation'
    },
    {
      id: 2,
      process: 'Invoice Processing',
      impact: '15% manual intervention required'
    }
  ];

  const overallUptime = 99.6;
  const activeIncidents = 1;
  const avgResponseTime = 245;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-display">Operational Status</h2>
        <Button variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {systems.map((system) => (
                <div key={system.id} className="p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    {system.status === 'operational' ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                    )}
                    <span className="text-sm font-medium">{system.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {system.uptime}% uptime
                  </div>
                  <Badge 
                    className={`text-xs ${
                      system.status === 'operational' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300'
                    }`}
                  >
                    {system.status}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">{overallUptime}%</div>
                <div className="text-xs text-muted-foreground">Overall Uptime</div>
              </div>
              <div className="text-center">
                <div className={`text-lg font-bold ${activeIncidents > 0 ? 'text-amber-600' : 'text-green-600'}`}>
                  {activeIncidents}
                </div>
                <div className="text-xs text-muted-foreground">Active Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold">{avgResponseTime}ms</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Efficiency */}
        <Card>
          <CardHeader>
            <CardTitle>Process Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center bg-muted/30 rounded-lg mb-4">
              <div className="text-center text-muted-foreground">
                <Activity className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Process Flow Diagram</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Identified Bottlenecks</h4>
              {bottlenecks.map((bottleneck) => (
                <div key={bottleneck.id} className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">{bottleneck.process}</div>
                      <div className="text-xs text-muted-foreground">{bottleneck.impact}</div>
                    </div>
                    <Button size="sm" variant="outline" className="ml-auto">
                      Fix →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resource Utilization */}
        <Card>
          <CardHeader>
            <CardTitle>Resource Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">Human Resources</span>
                  </div>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">
                  156/200 active • 1,248h / 1,600h
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4" />
                    <span className="text-sm font-medium">Infrastructure</span>
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">
                  CPU: 45% • Storage: 72%
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm font-medium">Budget</span>
                  </div>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <Progress value={82} className="h-2" />
                <div className="text-xs text-muted-foreground mt-1">
                  $4.1M / $5M • 73 days remaining
                </div>
              </div>
            </div>
            
            <Badge className="w-full justify-center mt-4 ai-gradient text-white">
              <Zap className="h-3 w-3 mr-1" />
              12% optimization potential identified
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
