
import React from "react";
import { 
  Pause, Play, Settings, MoreVertical, FileText, RefreshCw, 
  Copy, Trash2, TrendingUp, MessageCircle, CheckCircle, 
  AlertTriangle, Activity 
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Agent {
  id: string;
  name: string;
  category: string;
  status: string;
  icon: string;
  gradient: string;
  tasksToday: number;
  successRate: number;
  avgResponseTime: number;
  taskTrend: number;
  hourlyActivity: number[];
  primaryInsight: {
    type: string;
    icon: string;
    message: string;
  };
  recentActivities: Array<{
    id: string;
    timestamp: Date;
    description: string;
  }>;
  deployedAt: Date;
  lastActive: Date;
  monthlyValue: number;
}

interface DeployedAgentCardProps {
  agent: Agent;
  isSelected: boolean;
  onSelect: (selected: boolean) => void;
  onConfigure: () => void;
  onViewLogs: () => void;
}

const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType<any> } = {
    TrendingUp,
    MessageCircle,
    FileText,
    Activity
  };
  return icons[iconName] || Activity;
};

const getInsightIcon = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType<any> } = {
    CheckCircle,
    AlertTriangle,
    Pause
  };
  return icons[iconName] || CheckCircle;
};

export function DeployedAgentCard({
  agent,
  isSelected,
  onSelect,
  onConfigure,
  onViewLogs
}: DeployedAgentCardProps) {
  const IconComponent = getIcon(agent.icon);
  const InsightIcon = getInsightIcon(agent.primaryInsight.icon);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatRelativeTime = (date: Date) => {
    const diffMs = Date.now() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <Card className={`relative transition-all duration-200 hover:shadow-lg ${isSelected ? 'ring-2 ring-ai-primary' : ''}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`relative ${agent.status === 'running' ? 'animate-pulse-ai' : ''}`}>
              <div className={`w-2 h-2 rounded-full absolute -top-1 -right-1 z-10 ${
                agent.status === 'running' ? 'bg-green-500' : 
                agent.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-500'
              }`} />
              <div className="p-2 rounded-lg ai-gradient">
                <IconComponent className="h-4 w-4 text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">{agent.name}</h3>
              <p className="text-sm text-muted-foreground">{agent.category}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {/* Toggle agent */}}
            >
              {agent.status === 'running' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={onConfigure}>
              <Settings className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onViewLogs}>
                  <FileText className="h-4 w-4 mr-2" />
                  View Logs
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Restart
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="h-4 w-4 mr-2" />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Performance Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-lg font-semibold">{agent.tasksToday}</p>
            <p className="text-xs text-muted-foreground">Tasks Today</p>
            <p className={`text-xs ${agent.taskTrend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {agent.taskTrend > 0 ? '↑' : '↓'} {Math.abs(agent.taskTrend)}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">{agent.successRate}%</p>
            <p className="text-xs text-muted-foreground">Success Rate</p>
            <Progress value={agent.successRate} className="h-1 mt-1" />
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">{agent.avgResponseTime}s</p>
            <p className="text-xs text-muted-foreground">Avg Response</p>
            <p className={`text-xs ${agent.avgResponseTime < 5 ? 'text-green-600' : 'text-red-600'}`}>
              {agent.avgResponseTime < 5 ? 'Fast' : 'Slow'}
            </p>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">24h Activity</p>
          </div>
          <div className="flex items-end gap-1 h-10">
            {agent.hourlyActivity.map((value, index) => (
              <div
                key={index}
                className="bg-ai-primary/70 rounded-sm flex-1"
                style={{ height: `${(value / Math.max(...agent.hourlyActivity)) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Agent Insights */}
        <div className={`p-3 rounded-lg ${
          agent.primaryInsight.type === 'success' ? 'bg-green-50 dark:bg-green-950' :
          agent.primaryInsight.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-950' :
          'bg-blue-50 dark:bg-blue-950'
        }`}>
          <div className="flex items-start gap-2">
            <InsightIcon className={`h-4 w-4 mt-0.5 ${
              agent.primaryInsight.type === 'success' ? 'text-green-600' :
              agent.primaryInsight.type === 'warning' ? 'text-yellow-600' :
              'text-blue-600'
            }`} />
            <p className="text-sm">{agent.primaryInsight.message}</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Recent Activity</p>
            <Button variant="ghost" size="sm" onClick={onViewLogs}>
              View all →
            </Button>
          </div>
          <div className="space-y-1">
            {agent.recentActivities.slice(0, 3).map((activity) => (
              <div key={activity.id} className="flex items-start gap-2 text-xs">
                <span className="text-muted-foreground min-w-fit">
                  {formatTime(activity.timestamp)}
                </span>
                <span className="text-muted-foreground">{activity.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border text-xs text-muted-foreground">
          <div>
            <p className="font-medium">Deployed</p>
            <p>{formatDate(agent.deployedAt)}</p>
          </div>
          <div>
            <p className="font-medium">Last Active</p>
            <p>{formatRelativeTime(agent.lastActive)}</p>
          </div>
          <div>
            <p className="font-medium">Monthly Value</p>
            <p>${agent.monthlyValue.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
