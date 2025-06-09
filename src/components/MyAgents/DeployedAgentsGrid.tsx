
import React from "react";
import { DeployedAgentCard } from "./DeployedAgentCard";

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

interface DeployedAgentsGridProps {
  agents: Agent[];
  selectedAgents: string[];
  onSelectAgent: (agentIds: string[]) => void;
  onConfigureAgent: (agent: Agent) => void;
  onViewLogs: (agent: Agent) => void;
}

export function DeployedAgentsGrid({
  agents,
  selectedAgents,
  onSelectAgent,
  onConfigureAgent,
  onViewLogs
}: DeployedAgentsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent) => (
        <DeployedAgentCard
          key={agent.id}
          agent={agent}
          isSelected={selectedAgents.includes(agent.id)}
          onSelect={(selected) => {
            if (selected) {
              onSelectAgent([...selectedAgents, agent.id]);
            } else {
              onSelectAgent(selectedAgents.filter(id => id !== agent.id));
            }
          }}
          onConfigure={() => onConfigureAgent(agent)}
          onViewLogs={() => onViewLogs(agent)}
        />
      ))}
    </div>
  );
}
