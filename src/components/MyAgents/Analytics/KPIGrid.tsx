
import React from "react";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KPIGridProps {
  totalTasksCompleted: number;
  taskCompletionGrowth: number;
  avgSuccessRate: number;
  successRateChange: number;
  totalTimeSaved: number;
  dollarValueSaved: number;
  totalROI: number;
  roiMultiple: number;
}

export function KPIGrid({
  totalTasksCompleted,
  taskCompletionGrowth,
  avgSuccessRate,
  successRateChange,
  totalTimeSaved,
  dollarValueSaved,
  totalROI,
  roiMultiple
}: KPIGridProps) {
  return (
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
  );
}
