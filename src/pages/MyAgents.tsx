
import React, { useState } from "react";
import { MainLayout } from "@/components/Layout/MainLayout";
import { MyAgentsHeader } from "@/components/MyAgents/MyAgentsHeader";
import { AgentControlCenter } from "@/components/MyAgents/AgentControlCenter";
import { DeployedAgentsGrid } from "@/components/MyAgents/DeployedAgentsGrid";
import { HealthMonitorSection } from "@/components/MyAgents/HealthMonitorSection";
import { AgentConfigurationPanel } from "@/components/MyAgents/AgentConfigurationPanel";
import { AnalyticsView } from "@/components/MyAgents/AnalyticsView";
import { ActivityLogsModal } from "@/components/MyAgents/ActivityLogsModal";

const MyAgents = () => {
  const [view, setView] = useState('grid');
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [showLogs, setShowLogs] = useState(false);

  // Mock data for deployed agents
  const deployedAgents = [
    {
      id: '1',
      name: 'Revenue Intelligence Agent',
      category: 'Sales & CRM',
      status: 'running',
      icon: 'TrendingUp',
      gradient: 'purple-blue',
      tasksToday: 47,
      successRate: 94,
      avgResponseTime: 2.3,
      taskTrend: 12,
      hourlyActivity: [12, 8, 15, 23, 18, 31, 25, 19, 22, 28, 15, 33],
      primaryInsight: {
        type: 'success',
        icon: 'CheckCircle',
        message: 'Identified 5 high-value opportunities worth $280K'
      },
      recentActivities: [
        { id: '1', timestamp: new Date(), description: 'Analyzed 23 deals in pipeline' },
        { id: '2', timestamp: new Date(), description: 'Generated forecast report' },
        { id: '3', timestamp: new Date(), description: 'Updated lead scores for 156 prospects' }
      ],
      deployedAt: new Date('2024-01-15'),
      lastActive: new Date(),
      monthlyValue: 45000
    },
    {
      id: '2',
      name: 'Customer Support Bot',
      category: 'Customer Service',
      status: 'running',
      icon: 'MessageCircle',
      gradient: 'blue-turquoise',
      tasksToday: 124,
      successRate: 87,
      avgResponseTime: 1.8,
      taskTrend: 8,
      hourlyActivity: [45, 52, 38, 29, 31, 67, 58, 43, 39, 52, 46, 71],
      primaryInsight: {
        type: 'warning',
        icon: 'AlertTriangle',
        message: 'Response time increased 15% due to complex queries'
      },
      recentActivities: [
        { id: '1', timestamp: new Date(), description: 'Resolved 89 support tickets' },
        { id: '2', timestamp: new Date(), description: 'Escalated 3 complex issues' },
        { id: '3', timestamp: new Date(), description: 'Updated knowledge base with 12 new articles' }
      ],
      deployedAt: new Date('2024-02-01'),
      lastActive: new Date(),
      monthlyValue: 28000
    },
    {
      id: '3',
      name: 'Invoice Processing Agent',
      category: 'Finance',
      status: 'paused',
      icon: 'FileText',
      gradient: 'green-emerald',
      tasksToday: 0,
      successRate: 98,
      avgResponseTime: 0.9,
      taskTrend: -100,
      hourlyActivity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      primaryInsight: {
        type: 'info',
        icon: 'Pause',
        message: 'Agent paused for scheduled maintenance'
      },
      recentActivities: [
        { id: '1', timestamp: new Date(), description: 'Processed 156 invoices before maintenance' },
        { id: '2', timestamp: new Date(), description: 'Detected 3 duplicate payments' },
        { id: '3', timestamp: new Date(), description: 'Generated monthly reconciliation report' }
      ],
      deployedAt: new Date('2024-01-20'),
      lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000),
      monthlyValue: 32000
    }
  ];

  const totalAgents = deployedAgents.length;
  const activeAgents = deployedAgents.filter(a => a.status === 'running').length;
  const pausedAgents = deployedAgents.filter(a => a.status === 'paused').length;

  return (
    <MainLayout>
      <div className="space-y-6">
        <MyAgentsHeader 
          totalAgents={totalAgents}
          activeAgents={activeAgents}
          pausedAgents={pausedAgents}
          runningTasks={171}
          taskGrowth={15}
          timeSaved={23.5}
          fteEquivalent={2.8}
          monthlyROI={105000}
          roiMultiple={3.2}
        />

        <AgentControlCenter
          selectedAgents={selectedAgents}
          view={view}
          onViewChange={setView}
        />

        {view === 'grid' && (
          <DeployedAgentsGrid
            agents={deployedAgents}
            selectedAgents={selectedAgents}
            onSelectAgent={setSelectedAgents}
            onConfigureAgent={(agent) => {
              setSelectedAgent(agent);
              setShowConfig(true);
            }}
            onViewLogs={(agent) => {
              setSelectedAgent(agent);
              setShowLogs(true);
            }}
          />
        )}

        {view === 'analytics' && (
          <AnalyticsView agents={deployedAgents} />
        )}

        <HealthMonitorSection agents={deployedAgents} />

        <AgentConfigurationPanel
          agent={selectedAgent}
          show={showConfig}
          onClose={() => setShowConfig(false)}
        />

        <ActivityLogsModal
          agent={selectedAgent}
          show={showLogs}
          onClose={() => setShowLogs(false)}
        />
      </div>
    </MainLayout>
  );
};

export default MyAgents;
