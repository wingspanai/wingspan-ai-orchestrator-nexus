
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Agent {
  id: string;
  name: string;
  tasksToday: number;
  successRate: number;
}

interface AgentPerformanceComparisonProps {
  agents: Agent[];
}

export function AgentPerformanceComparison({ agents }: AgentPerformanceComparisonProps) {
  return (
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
  );
}
