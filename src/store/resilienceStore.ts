
import { create } from 'zustand';
import { SystemHealth, EMTActivity, HealingProcess, HealingPlaybook, FailurePrediction, LearningInsight, SystemAnomaly, CostOptimization } from '@/types/resilience';

interface ResilienceStore {
  // System Health
  overallHealth: number;
  systemHealth: SystemHealth[];
  activeIncidents: number;
  autoResolvingIncidents: number;
  activeEMTAgents: number;
  totalEMTAgents: number;
  
  // Metrics
  selfHealingRate: number;
  mttrAI: number;
  mttrHuman: number;
  preventedOutages: number;
  newPatternsLearned: number;
  costSavingsYTD: number;
  roi: number;
  
  // EMT Activities
  emtActivities: EMTActivity[];
  
  // Healing Processes
  activeHealingProcesses: HealingProcess[];
  healingPlaybooks: HealingPlaybook[];
  
  // Predictions
  failurePredictions: FailurePrediction[];
  
  // Learning
  recentLearnings: LearningInsight[];
  patternAccuracy: number;
  knowledgeBaseSize: string;
  
  // Anomalies
  detectedAnomalies: SystemAnomaly[];
  
  // Cost Optimization
  costOptimizations: CostOptimization[];
  
  // Actions
  updateSystemHealth: (health: number) => void;
  addEMTActivity: (activity: EMTActivity) => void;
  startHealingProcess: (process: HealingProcess) => void;
  updateHealingProcess: (id: string, updates: Partial<HealingProcess>) => void;
  togglePlaybook: (id: string) => void;
  approveLearning: (id: string) => void;
  applyCostOptimization: (id: string) => void;
}

export const useResilienceStore = create<ResilienceStore>((set, get) => ({
  // Initial state
  overallHealth: 99.7,
  activeIncidents: 2,
  autoResolvingIncidents: 2,
  activeEMTAgents: 47,
  totalEMTAgents: 50,
  
  selfHealingRate: 92.3,
  mttrAI: 2.4,
  mttrHuman: 47,
  preventedOutages: 147,
  newPatternsLearned: 3847,
  costSavingsYTD: 4700000,
  roi: 12.3,
  
  systemHealth: [
    {
      id: 'infrastructure',
      name: 'Core Infrastructure',
      type: 'infrastructure',
      health: 98.5,
      status: 'healthy',
      selfHealing: true,
      lastUpdated: new Date(),
      components: [
        {
          id: 'databases',
          name: 'Databases',
          type: 'infrastructure',
          health: 99.2,
          status: 'healthy',
          emtAgent: 'EMT-DB-01',
          selfHealing: true,
          lastUpdated: new Date(),
          components: [
            {
              id: 'postgres-primary',
              name: 'PostgreSQL Primary',
              type: 'infrastructure',
              health: 100,
              status: 'healthy',
              selfHealing: false,
              lastUpdated: new Date()
            },
            {
              id: 'redis-cache',
              name: 'Redis Cache',
              type: 'infrastructure',
              health: 98.5,
              status: 'monitoring',
              selfHealing: true,
              lastUpdated: new Date()
            }
          ]
        }
      ]
    },
    {
      id: 'ai-agents',
      name: 'AI Agent Network',
      type: 'ai-agent',
      health: 99.1,
      status: 'healthy',
      selfHealing: true,
      lastUpdated: new Date(),
      components: [
        {
          id: 'sales-agents',
          name: 'Sales Agents',
          type: 'ai-agent',
          health: 99.3,
          status: 'healthy',
          selfHealing: true,
          lastUpdated: new Date()
        },
        {
          id: 'marketing-agents',
          name: 'Marketing Agents',
          type: 'ai-agent',
          health: 98.9,
          status: 'healthy',
          selfHealing: true,
          lastUpdated: new Date()
        }
      ]
    }
  ],
  
  emtActivities: [
    {
      id: '1',
      agent: 'EMT-DB-01',
      action: 'Optimized connection pool sizing',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      type: 'healing',
      status: 'completed',
      system: 'PostgreSQL Primary',
      impact: 'Prevented 15% performance degradation'
    },
    {
      id: '2',
      agent: 'EMT-API-01',
      action: 'Auto-scaled API servers',
      timestamp: new Date(Date.now() - 12 * 60 * 1000),
      type: 'prevention',
      status: 'completed',
      system: 'API Gateway',
      impact: 'Handled 300% traffic spike'
    }
  ],
  
  activeHealingProcesses: [
    {
      id: '1',
      name: 'Database Connection Pool Recovery',
      issue: 'Connection pool exhaustion detected',
      status: 'active',
      timeElapsed: '45s',
      resourcesUsed: '2 CPU cores, 1GB RAM',
      successProbability: 94,
      system: 'PostgreSQL',
      severity: 'medium',
      steps: [
        {
          id: '1',
          description: 'Analyze connection patterns',
          status: 'completed',
          completed: true,
          timeEstimate: '15s'
        },
        {
          id: '2',
          description: 'Optimize pool configuration',
          status: 'active',
          completed: false,
          timeEstimate: '30s'
        },
        {
          id: '3',
          description: 'Restart connection pool',
          status: 'pending',
          completed: false,
          timeEstimate: '10s'
        }
      ]
    }
  ],
  
  healingPlaybooks: [
    {
      id: '1',
      name: 'Database Connection Recovery',
      description: 'Handles database connection pool exhaustion',
      successRate: 94,
      timesUsed: 47,
      avgTime: '2.3 min',
      lastUpdated: '2 days ago',
      triggers: ['Connection timeout', 'Pool exhaustion', 'High connection count'],
      autoEnabled: true,
      steps: []
    },
    {
      id: '2',
      name: 'API Rate Limit Recovery',
      description: 'Manages API rate limiting and traffic spikes',
      successRate: 98,
      timesUsed: 123,
      avgTime: '45s',
      lastUpdated: '1 week ago',
      triggers: ['Rate limit exceeded', 'Traffic spike', 'Response time increase'],
      autoEnabled: true,
      steps: []
    }
  ],
  
  failurePredictions: [
    {
      id: '1',
      system: 'Redis Cache',
      type: 'Memory exhaustion',
      timeToFailure: '2 hours',
      confidence: 87,
      severity: 'medium',
      autoPreventEnabled: true,
      impact: 'Response time increase by 40%',
      probability: 87,
      preventiveActions: [
        {
          id: '1',
          name: 'Scale Redis cluster',
          description: 'Add 2 additional Redis nodes',
          effort: 'low',
          cost: 150,
          timeToExecute: '5 minutes',
          success_rate: 95
        },
        {
          id: '2',
          name: 'Clear cache segments',
          description: 'Remove least used cache entries',
          effort: 'low',
          cost: 0,
          timeToExecute: '30 seconds',
          success_rate: 85
        }
      ]
    }
  ],
  
  recentLearnings: [
    {
      id: '1',
      pattern: 'High CPU usage correlates with memory pressure 12 minutes before timeout',
      type: 'pattern',
      impact: 'Can prevent 85% of timeout incidents',
      application: 'Early warning system for resource scaling',
      confidence: 94,
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      approved: false,
      category: 'Performance'
    },
    {
      id: '2',
      pattern: 'Network latency spikes precede database connection issues by 5 minutes',
      type: 'prediction',
      impact: 'Enables preemptive connection pool adjustments',
      application: 'Database resilience improvements',
      confidence: 89,
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      approved: true,
      category: 'Network'
    }
  ],
  
  patternAccuracy: 99.2,
  knowledgeBaseSize: '127GB',
  
  detectedAnomalies: [
    {
      id: '1',
      system: 'API Gateway',
      type: 'Response time spike',
      severity: 'medium',
      detectedAt: new Date(Date.now() - 15 * 60 * 1000),
      resolved: true,
      autoResolved: true,
      pattern: [100, 150, 280, 450, 380, 200, 120],
      description: 'Unusual response time pattern detected during peak hours'
    }
  ],
  
  costOptimizations: [
    {
      id: '1',
      description: 'Right-size EC2 instances based on actual usage patterns',
      monthlySaving: 15000,
      implementation: 'Auto-scaling group optimization',
      effort: 'low',
      category: 'Compute',
      priority: 'high'
    },
    {
      id: '2',
      description: 'Optimize database connection pooling',
      monthlySaving: 8500,
      implementation: 'Connection pool tuning',
      effort: 'medium',
      category: 'Database',
      priority: 'medium'
    }
  ],
  
  // Actions
  updateSystemHealth: (health) => set({ overallHealth: health }),
  
  addEMTActivity: (activity) => set((state) => ({
    emtActivities: [activity, ...state.emtActivities.slice(0, 49)]
  })),
  
  startHealingProcess: (process) => set((state) => ({
    activeHealingProcesses: [process, ...state.activeHealingProcesses]
  })),
  
  updateHealingProcess: (id, updates) => set((state) => ({
    activeHealingProcesses: state.activeHealingProcesses.map(process =>
      process.id === id ? { ...process, ...updates } : process
    )
  })),
  
  togglePlaybook: (id) => set((state) => ({
    healingPlaybooks: state.healingPlaybooks.map(playbook =>
      playbook.id === id ? { ...playbook, autoEnabled: !playbook.autoEnabled } : playbook
    )
  })),
  
  approveLearning: (id) => set((state) => ({
    recentLearnings: state.recentLearnings.map(learning =>
      learning.id === id ? { ...learning, approved: true } : learning
    )
  })),
  
  applyCostOptimization: (id) => set((state) => ({
    costOptimizations: state.costOptimizations.filter(opt => opt.id !== id)
  }))
}));
