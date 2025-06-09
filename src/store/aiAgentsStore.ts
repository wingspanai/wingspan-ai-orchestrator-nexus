
import { create } from 'zustand';

interface AIAgent {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'paused' | 'inactive';
  description: string;
  capabilities: string[];
  metrics: {
    managed: number;
    successRate: number;
    timeSaved: number;
  };
  recentActions: Array<{
    id: string;
    time: string;
    text: string;
  }>;
  featured?: boolean;
}

interface AgentMetrics {
  totalDecisionsMade: number;
  decisionSuccessRate: number;
  automatedTasks: number;
  timeSavedHours: number;
  valueGenerated: number;
  automationROI: number;
  issuesPrevented: number;
  preventionAccuracy: number;
  stakeholdersSaved: number;
  efficiencyGain: number;
}

interface AgentActivity {
  id: string;
  agent: string;
  type: string;
  description: string;
  timestamp: string;
  impact?: number;
}

interface SystemHealth {
  responseTime: number;
  accuracy: number;
  load: number;
}

interface AIAgentsState {
  agents: AIAgent[];
  agentMetrics: AgentMetrics;
  agentActivities: AgentActivity[];
  systemHealth: SystemHealth;
  activeAgents: AIAgent[];
  automationEnabled: boolean;
  toggleAutomation: () => void;
  createAgent: (agent: any) => void;
  configureAgent: (agentId: string) => void;
}

export const useAIAgentsStore = create<AIAgentsState>((set, get) => ({
  agents: [
    {
      id: 'launch-coordinator',
      name: 'Launch Coordinator',
      type: 'coordinator',
      status: 'active',
      description: 'Orchestrates entire product launch lifecycle, coordinating between teams, managing timelines, and ensuring launch readiness.',
      capabilities: ['Timeline optimization', 'Resource allocation', 'Risk assessment', 'Stakeholder communication'],
      metrics: {
        managed: 12,
        successRate: 94,
        timeSaved: 15
      },
      recentActions: [
        { id: '1', time: '2 min ago', text: 'Detected resource conflict, reallocated team members' },
        { id: '2', time: '15 min ago', text: 'Scheduled cross-functional sync for critical milestone' }
      ],
      featured: true
    },
    {
      id: 'market-intelligence',
      name: 'Market Intelligence',
      type: 'intelligence',
      status: 'active',
      description: 'Continuously monitors market conditions, competitor activities, and customer sentiment to provide real-time strategic insights.',
      capabilities: ['Competitor monitoring', 'Trend detection', 'Sentiment analysis', 'Opportunity identification'],
      metrics: {
        managed: 245,
        successRate: 89,
        timeSaved: 32
      },
      recentActions: [
        { id: '1', time: '5 min ago', text: 'Detected new competitor pricing strategy' },
        { id: '2', time: '1 hour ago', text: 'Identified emerging market trend in SaaS space' }
      ]
    },
    {
      id: 'customer-success',
      name: 'Customer Success AI',
      type: 'customer-success',
      status: 'active',
      description: 'Proactively identifies at-risk customers, recommends retention strategies, and automates engagement workflows.',
      capabilities: ['Churn prediction', 'Health scoring', 'Engagement automation', 'Upsell identification'],
      metrics: {
        managed: 156,
        successRate: 92,
        timeSaved: 28
      },
      recentActions: [
        { id: '1', time: '10 min ago', text: 'Prevented churn for high-value customer account' },
        { id: '2', time: '30 min ago', text: 'Identified upsell opportunity worth $50K' }
      ]
    },
    {
      id: 'development-optimizer',
      name: 'Development Optimizer',
      type: 'development',
      status: 'active',
      description: 'Optimizes development workflows, predicts bottlenecks, and automatically adjusts resources to maintain velocity.',
      capabilities: ['Sprint planning', 'Bottleneck detection', 'Resource balancing', 'Quality assurance'],
      metrics: {
        managed: 8,
        successRate: 96,
        timeSaved: 42
      },
      recentActions: [
        { id: '1', time: '20 min ago', text: 'Optimized sprint allocation based on team capacity' },
        { id: '2', time: '1 hour ago', text: 'Detected potential bottleneck in API development' }
      ]
    },
    {
      id: 'revenue-optimizer',
      name: 'Revenue Optimizer',
      type: 'revenue',
      status: 'active',
      description: 'Dynamically optimizes pricing, identifies expansion opportunities, and maximizes revenue across all channels.',
      capabilities: ['Dynamic pricing', 'Upsell targeting', 'Discount optimization', 'Channel performance'],
      metrics: {
        managed: 89,
        successRate: 87,
        timeSaved: 18
      },
      recentActions: [
        { id: '1', time: '45 min ago', text: 'Adjusted pricing for enterprise tier (+12% revenue)' },
        { id: '2', time: '2 hours ago', text: 'Optimized discount strategy for Q4 campaign' }
      ]
    },
    {
      id: 'content-generator',
      name: 'Content Generator',
      type: 'content',
      status: 'active',
      description: 'Automatically generates marketing content, product descriptions, and documentation based on product features and target audience.',
      capabilities: ['Blog generation', 'Social media content', 'Email campaigns', 'Documentation'],
      metrics: {
        managed: 324,
        successRate: 91,
        timeSaved: 65
      },
      recentActions: [
        { id: '1', time: '1 hour ago', text: 'Generated 5 blog posts for product launch campaign' },
        { id: '2', time: '3 hours ago', text: 'Created email sequence for customer onboarding' }
      ]
    }
  ],

  agentMetrics: {
    totalDecisionsMade: 1247,
    decisionSuccessRate: 91,
    automatedTasks: 834,
    timeSavedHours: 200,
    valueGenerated: 450,
    automationROI: 320,
    issuesPrevented: 23,
    preventionAccuracy: 94,
    stakeholdersSaved: 89,
    efficiencyGain: 35
  },

  agentActivities: [
    {
      id: '1',
      agent: 'Launch Coordinator',
      type: 'Optimization',
      description: 'Optimized launch timeline to avoid competitor conflict',
      timestamp: '2 min ago',
      impact: 12
    },
    {
      id: '2',
      agent: 'Market Intelligence',
      type: 'Alert',
      description: 'Competitor price drop detected - recommended strategy update',
      timestamp: '15 min ago',
      impact: -5
    },
    {
      id: '3',
      agent: 'Customer Success',
      type: 'Intervention',
      description: 'Prevented customer churn through proactive engagement',
      timestamp: '1 hour ago',
      impact: 25
    },
    {
      id: '4',
      agent: 'Revenue Optimizer',
      type: 'Pricing',
      description: 'Dynamic pricing adjustment increased conversion by 8%',
      timestamp: '2 hours ago',
      impact: 8
    }
  ],

  systemHealth: {
    responseTime: 42,
    accuracy: 94,
    load: 68
  },

  automationEnabled: true,

  get activeAgents() {
    return get().agents.filter(agent => agent.status === 'active');
  },

  toggleAutomation: () => set(state => ({ 
    automationEnabled: !state.automationEnabled 
  })),

  createAgent: (agentData) => set(state => ({
    agents: [...state.agents, {
      ...agentData,
      status: 'inactive',
      metrics: {
        managed: 0,
        successRate: 0,
        timeSaved: 0
      },
      recentActions: []
    }]
  })),

  configureAgent: (agentId) => {
    // Implementation for agent configuration
    console.log('Configuring agent:', agentId);
  }
}));
