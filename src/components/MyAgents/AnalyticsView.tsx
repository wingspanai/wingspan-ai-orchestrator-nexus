
import React from "react";
import { Badge } from "@/components/ui/badge";
import { KPIGrid } from "./Analytics/KPIGrid";
import { AgentPerformanceComparison } from "./Analytics/AgentPerformanceComparison";
import { TaskDistributionChart } from "./Analytics/TaskDistributionChart";

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
      <KPIGrid
        totalTasksCompleted={totalTasksCompleted}
        taskCompletionGrowth={taskCompletionGrowth}
        avgSuccessRate={avgSuccessRate}
        successRateChange={successRateChange}
        totalTimeSaved={totalTimeSaved}
        dollarValueSaved={dollarValueSaved}
        totalROI={totalROI}
        roiMultiple={roiMultiple}
      />

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AgentPerformanceComparison agents={agents} />
        <TaskDistributionChart />
      </div>
    </div>
  );
}
