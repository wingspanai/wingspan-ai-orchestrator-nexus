
import React from "react";
import { Plus, Download, Settings, Bot, Activity, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MyAgentsHeaderProps {
  totalAgents: number;
  activeAgents: number;
  pausedAgents: number;
  runningTasks: number;
  taskGrowth: number;
  timeSaved: number;
  fteEquivalent: number;
  monthlyROI: number;
  roiMultiple: number;
}

export function MyAgentsHeader({
  totalAgents,
  activeAgents,
  pausedAgents,
  runningTasks,
  taskGrowth,
  timeSaved,
  fteEquivalent,
  monthlyROI,
  roiMultiple
}: MyAgentsHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-display text-gradient">
            My AI Agents
          </h1>
          <p className="text-muted-foreground mt-1">
            {totalAgents} Active Agents
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button className="ai-gradient hover:ai-gradient-hover">
            <Plus className="h-4 w-4" />
            Deploy New Agent
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4" />
            Bulk Settings
          </Button>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalAgents}</p>
                <p className="text-sm text-muted-foreground">Total Agents</p>
                <p className="text-xs text-muted-foreground">
                  {activeAgents} active, {pausedAgents} paused
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">{runningTasks}</p>
                <p className="text-sm text-muted-foreground">Running Tasks</p>
                <p className="text-xs text-muted-foreground text-green-600">
                  ↑ {taskGrowth}% from yesterday
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">{timeSaved} hrs</p>
                <p className="text-sm text-muted-foreground">Time Saved Today</p>
                <p className="text-xs text-muted-foreground">
                  Equivalent to {fteEquivalent} FTEs
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500">
                <DollarSign className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">${monthlyROI.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Monthly ROI</p>
                <p className="text-xs text-muted-foreground">
                  {roiMultiple}x return on investment
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
