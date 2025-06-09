
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Activity, Clock, Cpu, Zap, Shield, Target, Bot, Brain, AlertCircle, CheckCircle } from "lucide-react";

interface AIHealthHeaderProps {
  overallHealth: number;
  onRunDiagnostics: () => void;
}

export function AIHealthHeader({ overallHealth, onRunDiagnostics }: AIHealthHeaderProps) {
  const healthStatus = overallHealth > 90 ? 'Healthy' : overallHealth > 70 ? 'Warning' : 'Critical';
  const healthColor = overallHealth > 90 ? 'text-green-600' : overallHealth > 70 ? 'text-yellow-600' : 'text-red-600';
  
  const mockStats = {
    activeAgents: 23,
    deployedAgents: 28,
    idleAgents: 5,
    activeModels: 12,
    modelUtilization: 73,
    requestsPerMinute: 1247,
    queueDepth: 3,
    activeIncidents: 2,
    modelPerformance: 89,
    responseTimeScore: 82,
    reliabilityScore: 94,
    accuracyScore: 91
  };

  return (
    <div className="space-y-6">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">AI System Health</h1>
          <p className="text-text-secondary mt-2">
            Monitor and optimize AI performance across the platform
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 ${healthColor}`}>
            <div className={`w-3 h-3 rounded-full animate-pulse ${
              overallHealth > 90 ? 'bg-green-500' : 
              overallHealth > 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
            <span className="font-medium">{healthStatus}</span>
          </div>
          <Button onClick={onRunDiagnostics}>
            <Activity className="h-4 w-4 mr-2" />
            Run Diagnostics
          </Button>
          <Button variant="ghost">
            <Clock className="h-4 w-4 mr-2" />
            History
          </Button>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Health Score Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Overall Health Score</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
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
                  className={healthColor.replace('text-', 'text-')}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">{overallHealth}</div>
                <div className="text-sm text-muted-foreground">Health Score</div>
              </div>
            </div>
            
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">Model Performance</span>
                </div>
                <span className="text-sm font-medium">{mockStats.modelPerformance}/100</span>
              </div>
              <Progress value={mockStats.modelPerformance} className="h-2" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Response Time</span>
                </div>
                <span className="text-sm font-medium">{mockStats.responseTimeScore}/100</span>
              </div>
              <Progress value={mockStats.responseTimeScore} className="h-2" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Reliability</span>
                </div>
                <span className="text-sm font-medium">{mockStats.reliabilityScore}/100</span>
              </div>
              <Progress value={mockStats.reliabilityScore} className="h-2" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Accuracy</span>
                </div>
                <span className="text-sm font-medium">{mockStats.accuracyScore}/100</span>
              </div>
              <Progress value={mockStats.accuracyScore} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active AI Agents</CardTitle>
              <Bot className="h-5 w-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.activeAgents}</div>
              <p className="text-xs text-muted-foreground">
                {mockStats.deployedAgents} deployed • {mockStats.idleAgents} idle
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Models</CardTitle>
              <Brain className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.activeModels}</div>
              <p className="text-xs text-muted-foreground">
                {mockStats.modelUtilization}% utilization
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Request Rate</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.requestsPerMinute}/min</div>
              <p className="text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Queue: {mockStats.queueDepth} pending
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Issues</CardTitle>
              <AlertCircle className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.activeIncidents}</div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  1 critical
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  1 warning
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
