
import React from "react";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnalyticsViewProps {
  agents: any[];
}

export function AnalyticsView({ agents }: AnalyticsViewProps) {
  // Mock analytics data
  const totalTasksCompleted = 15_847;
  const taskCompletionGrowth = 23;
  const avgSuccessRate = 91;
  const successRateChange = 4;
  const totalTimeSaved = 342;
  const dollarValueSaved = 156_000;
  const totalROI = 487_000;
  const roiMultiple = 3.2;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Agent Performance Analytics</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Last 30 Days</Badge>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Total Tasks Completed</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{totalTasksCompleted.toLocaleString()}</p>
              <p className="text-xs text-green-600">+{taskCompletionGrowth}% vs previous period</p>
            </div>
            {/* Mini chart placeholder */}
            <div className="mt-3 h-12 flex items-end gap-1">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className="bg-ai-primary/70 rounded-sm flex-1"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Average Success Rate</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{avgSuccessRate}%</p>
              <p className="text-xs text-green-600">+{successRateChange}% change</p>
            </div>
            {/* Mini chart placeholder */}
            <div className="mt-3 h-12 flex items-end gap-1">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className="bg-blue-500/70 rounded-sm flex-1"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{totalTimeSaved} hrs</p>
              <p className="text-xs text-muted-foreground">${dollarValueSaved.toLocaleString()} value generated</p>
            </div>
            {/* Mini chart placeholder */}
            <div className="mt-3 h-12 flex items-end gap-1">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className="bg-green-500/70 rounded-sm flex-1"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">ROI Generated</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-2xl font-bold">${totalROI.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">{roiMultiple}x return on investment</p>
            </div>
            {/* Mini chart placeholder */}
            <div className="mt-3 h-12 flex items-end gap-1">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className="bg-purple-500/70 rounded-sm flex-1"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Agent Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agents.map((agent) => (
                <div key={agent.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg ai-gradient">
                      <span className="text-white text-xs">AI</span>
                    </div>
                    <div>
                      <p className="font-medium">{agent.name}</p>
                      <p className="text-sm text-muted-foreground">{agent.tasksToday} tasks today</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{agent.successRate}%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sales & CRM</span>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Customer Service</span>
                  <span className="text-sm font-medium">32%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Finance</span>
                  <span className="text-sm font-medium">23%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
