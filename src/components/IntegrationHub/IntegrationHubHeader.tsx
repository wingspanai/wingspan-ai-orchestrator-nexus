
import { Search, Plus, Settings, Plug, Database, Activity, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface IntegrationHubHeaderProps {
  onAddIntegration: () => void;
}

export function IntegrationHubHeader({ onAddIntegration }: IntegrationHubHeaderProps) {
  const stats = {
    activeIntegrations: 23,
    pendingConnections: 3,
    availableIntegrations: 150,
    dataFlowRate: 1247,
    flowRateChange: 12.3,
    syncHealth: 94,
    lastSyncTime: "2 minutes ago",
    nextSyncTime: "8 minutes"
  };

  return (
    <div className="space-y-6">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Integration Hub</h1>
          <p className="text-text-secondary mt-2">
            Connect, monitor, and manage your business systems
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search integrations..."
              className="pl-10 w-80"
            />
          </div>
          <Button onClick={onAddIntegration}>
            <Plus className="h-4 w-4 mr-2" />
            Add Integration
          </Button>
          <Button variant="ghost">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Integrations</CardTitle>
            <div className="relative">
              <Plug className="h-5 w-5 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeIntegrations}</div>
            <p className="text-xs text-muted-foreground">
              {stats.pendingConnections} pending setup
            </p>
            <div className="mt-3 w-16 h-16">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  strokeDasharray={`${(stats.activeIntegrations / stats.availableIntegrations) * 100}, 100`}
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Flow Rate</CardTitle>
            <Database className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.dataFlowRate}/min</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">↑ {stats.flowRateChange}%</span> from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sync Health</CardTitle>
            <Activity className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.syncHealth}%</div>
            <Progress value={stats.syncHealth} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
            <Clock className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.lastSyncTime}</div>
            <p className="text-xs text-muted-foreground">
              Next in {stats.nextSyncTime}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
