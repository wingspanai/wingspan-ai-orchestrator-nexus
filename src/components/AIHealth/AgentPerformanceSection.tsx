
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Grid3x3, List, Map, Filter, Bot, CheckCircle, XCircle, RefreshCw, FileText, MoreVertical, Cpu, MoreHorizontal } from "lucide-react";

interface AgentPerformanceSectionProps {
  view: string;
  onViewChange: (view: string) => void;
}

export function AgentPerformanceSection({ view, onViewChange }: AgentPerformanceSectionProps) {
  const mockAgents = [
    {
      id: 1,
      name: "Customer Support Agent",
      type: "NLP",
      status: "active",
      successRate: 94,
      avgResponseTime: 150,
      responseTrend: -5,
      tasksPerHour: 127,
      cpuUsage: 34,
      memoryUsage: 67,
      recentTasks: [
        { id: 1, name: "Customer Query", status: "success", timestamp: new Date(Date.now() - 300000) },
        { id: 2, name: "Ticket Routing", status: "success", timestamp: new Date(Date.now() - 600000) },
        { id: 3, name: "Issue Resolution", status: "failed", timestamp: new Date(Date.now() - 900000) }
      ]
    },
    {
      id: 2,
      name: "Sales Assistant",
      type: "Conversational",
      status: "active",
      successRate: 89,
      avgResponseTime: 200,
      responseTrend: 3,
      tasksPerHour: 95,
      cpuUsage: 28,
      memoryUsage: 54,
      recentTasks: [
        { id: 1, name: "Lead Qualification", status: "success", timestamp: new Date(Date.now() - 200000) },
        { id: 2, name: "Product Demo", status: "success", timestamp: new Date(Date.now() - 500000) },
        { id: 3, name: "Follow-up", status: "success", timestamp: new Date(Date.now() - 800000) }
      ]
    },
    {
      id: 3,
      name: "Data Analyst Agent",
      type: "Analytics",
      status: "idle",
      successRate: 97,
      avgResponseTime: 2400,
      responseTrend: -12,
      tasksPerHour: 8,
      cpuUsage: 12,
      memoryUsage: 23,
      recentTasks: [
        { id: 1, name: "Report Generation", status: "success", timestamp: new Date(Date.now() - 1800000) },
        { id: 2, name: "Data Processing", status: "success", timestamp: new Date(Date.now() - 3600000) },
        { id: 3, name: "Trend Analysis", status: "success", timestamp: new Date(Date.now() - 5400000) }
      ]
    }
  ];

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getResourceColor = (usage: number) => {
    if (usage >= 80) return 'bg-red-500';
    if (usage >= 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>AI Agent Performance</CardTitle>
          <div className="flex items-center gap-2">
            <div className="flex items-center border rounded-lg">
              <Button
                variant={view === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewChange('grid')}
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={view === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewChange('list')}
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={view === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewChange('map')}
              >
                <Map className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {view === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockAgents.map(agent => (
              <Card key={agent.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                        <Bot className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{agent.name}</h4>
                        <p className="text-xs text-muted-foreground">{agent.type}</p>
                      </div>
                    </div>
                    <Badge variant={agent.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                      <div className={`w-2 h-2 rounded-full mr-1 ${getStatusColor(agent.status)} ${agent.status === 'active' ? 'animate-pulse' : ''}`} />
                      {agent.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Success Rate</span>
                        <span className={`font-medium ${getScoreColor(agent.successRate)}`}>
                          {agent.successRate}%
                        </span>
                      </div>
                      <Progress value={agent.successRate} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-muted-foreground">Avg Response</div>
                        <div className="font-medium">{agent.avgResponseTime}ms</div>
                        <div className={`text-xs ${agent.responseTrend < 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {agent.responseTrend > 0 ? '↑' : '↓'} {Math.abs(agent.responseTrend)}%
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Tasks/Hour</div>
                        <div className="font-medium">{agent.tasksPerHour}</div>
                      </div>
                    </div>
                  </div>

                  {/* Resource Usage */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Resource Usage</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>CPU</span>
                        <span>{agent.cpuUsage}%</span>
                      </div>
                      <Progress value={agent.cpuUsage} className="h-1" />
                      
                      <div className="flex items-center justify-between text-sm">
                        <span>Memory</span>
                        <span>{agent.memoryUsage}%</span>
                      </div>
                      <Progress value={agent.memoryUsage} className="h-1" />
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="text-sm font-medium">Recent Activity</h5>
                      <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                        View All →
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {agent.recentTasks.slice(0, 3).map(task => (
                        <div key={task.id} className="flex items-center gap-2 text-xs">
                          <div className={`w-4 h-4 flex items-center justify-center rounded ${
                            task.status === 'success' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {task.status === 'success' ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                          </div>
                          <span className="flex-1 truncate">{task.name}</span>
                          <span className="text-muted-foreground">{formatTime(task.timestamp)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Restart
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1">
                      <FileText className="h-3 w-3 mr-1" />
                      Logs
                    </Button>
                    <Button size="sm" variant="ghost">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {view === 'map' && (
          <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Map className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Agent Topology Map</h3>
              <p className="text-muted-foreground">
                Interactive network visualization of agent connections and data flow
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
