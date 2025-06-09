
import { useState } from "react";
import { Grid3x3, List, GitBranch, Play, Pause, MoreVertical, Eye, Settings, FileText, Zap, Unlink, ArrowUp, ArrowDown, RefreshCw, AlertCircle, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ConnectedIntegrationsSectionProps {
  viewMode: string;
  onViewModeChange: (mode: string) => void;
}

export function ConnectedIntegrationsSection({ viewMode, onViewModeChange }: ConnectedIntegrationsSectionProps) {
  const [sortBy, setSortBy] = useState("recent");

  const connectedIntegrations = [
    {
      id: 1,
      name: "Salesforce",
      category: "CRM",
      logo: "/integrations/salesforce.svg",
      status: "connected",
      syncing: true,
      recordsPushed: "1,234",
      recordsPulled: "2,567",
      syncFrequency: "15 min",
      lastSync: new Date(Date.now() - 5 * 60 * 1000),
      nextSync: new Date(Date.now() + 10 * 60 * 1000),
      errors: 0,
      uptime: 99.2,
      avgLatency: 245,
      apiCallsToday: 1847,
      apiLimit: 5000,
      activityHistory: [45, 52, 38, 67, 41, 55, 62],
      bidirectional: true,
      mappedFields: 23,
      transformations: 4
    },
    {
      id: 2,
      name: "HubSpot",
      category: "Marketing",
      logo: "/integrations/hubspot.svg",
      status: "connected",
      syncing: false,
      recordsPushed: "892",
      recordsPulled: "1,234",
      syncFrequency: "30 min",
      lastSync: new Date(Date.now() - 15 * 60 * 1000),
      nextSync: new Date(Date.now() + 15 * 60 * 1000),
      errors: 2,
      uptime: 98.7,
      avgLatency: 156,
      apiCallsToday: 756,
      apiLimit: 2500,
      activityHistory: [32, 28, 45, 39, 52, 47, 38],
      bidirectional: true,
      mappedFields: 18,
      transformations: 2
    },
    {
      id: 3,
      name: "Slack",
      category: "Communication",
      logo: "/integrations/slack.svg",
      status: "connected",
      syncing: false,
      recordsPushed: "234",
      recordsPulled: "0",
      syncFrequency: "Real-time",
      lastSync: new Date(Date.now() - 2 * 60 * 1000),
      nextSync: null,
      errors: 0,
      uptime: 99.8,
      avgLatency: 89,
      apiCallsToday: 2134,
      apiLimit: 10000,
      activityHistory: [15, 22, 18, 25, 19, 23, 21],
      bidirectional: false,
      mappedFields: 8,
      transformations: 1
    }
  ];

  const formatTime = (date: Date | null) => {
    if (!date) return "N/A";
    const now = new Date();
    const diff = Math.abs(now.getTime() - date.getTime());
    const minutes = Math.floor(diff / (1000 * 60));
    return minutes < 1 ? "Just now" : `${minutes}m ago`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-500';
      case 'syncing': return 'bg-blue-500 animate-pulse';
      case 'error': return 'bg-red-500';
      case 'warning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-text-primary">Connected Systems</h2>
        <div className="flex items-center gap-4">
          {/* View Toggle */}
          <div className="flex items-center bg-bg-secondary rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("grid")}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("list")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "flow" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("flow")}
            >
              <GitBranch className="h-4 w-4" />
            </Button>
          </div>

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Recently Active</SelectItem>
              <SelectItem value="alphabetical">Alphabetical</SelectItem>
              <SelectItem value="volume">Data Volume</SelectItem>
              <SelectItem value="health">Health Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {connectedIntegrations.map((integration) => (
          <Card key={integration.id} className="relative overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded" />
                    </div>
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getStatusColor(integration.status)}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{integration.name}</h3>
                    <p className="text-sm text-text-secondary">{integration.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button size="sm" variant="ghost">
                    {integration.syncing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="h-4 w-4 mr-2" />
                        Configure
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" />
                        View Logs
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Zap className="h-4 w-4 mr-2" />
                        Test Connection
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Unlink className="h-4 w-4 mr-2" />
                        Disconnect
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <ArrowUp className="h-3 w-3 text-green-600" />
                    <span className="text-sm font-medium">{integration.recordsPushed}</span>
                  </div>
                  <p className="text-xs text-text-secondary">Pushed</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <ArrowDown className="h-3 w-3 text-blue-600" />
                    <span className="text-sm font-medium">{integration.recordsPulled}</span>
                  </div>
                  <p className="text-xs text-text-secondary">Pulled</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <RefreshCw className="h-3 w-3 text-purple-600" />
                    <span className="text-sm font-medium">{integration.syncFrequency}</span>
                  </div>
                  <p className="text-xs text-text-secondary">Sync Rate</p>
                </div>
              </div>

              {/* Activity Chart */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 h-10">
                  {integration.activityHistory.map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-sm"
                      style={{ height: `${(value / 70) * 100}%` }}
                    />
                  ))}
                </div>
                <p className="text-xs text-text-secondary text-center">24h Activity</p>
              </div>

              {/* Sync Status */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Last Sync</span>
                  <span className="font-medium">{formatTime(integration.lastSync)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Next Sync</span>
                  <span className="font-medium">{integration.nextSync ? formatTime(integration.nextSync) : "Real-time"}</span>
                </div>
                {integration.errors > 0 && (
                  <div className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm text-red-600">{integration.errors} errors in last 24h</span>
                    <Button size="sm" variant="ghost" className="ml-auto">
                      View →
                    </Button>
                  </div>
                )}
              </div>

              {/* Data Flow Indicator */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded" />
                  <div className="flex items-center gap-1">
                    {integration.bidirectional && <ArrowUp className="h-3 w-3 text-blue-600" />}
                    <ArrowDown className="h-3 w-3 text-purple-600" />
                  </div>
                  <Database className="h-6 w-6 text-text-secondary" />
                </div>
                <p className="text-xs text-text-secondary text-center">
                  {integration.mappedFields} fields mapped • {integration.transformations} transformations
                </p>
              </div>

              {/* Footer Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/60 text-xs">
                <div className="text-center">
                  <p className="text-text-secondary">Uptime</p>
                  <p className="font-medium">{integration.uptime}%</p>
                </div>
                <div className="text-center">
                  <p className="text-text-secondary">Latency</p>
                  <p className="font-medium">{integration.avgLatency}ms</p>
                </div>
                <div className="text-center">
                  <p className="text-text-secondary">API Calls</p>
                  <p className="font-medium">{integration.apiCallsToday}/{integration.apiLimit}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
