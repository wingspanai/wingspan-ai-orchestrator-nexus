
export interface SystemHealth {
  id: string;
  name: string;
  type: 'infrastructure' | 'application' | 'ai-agent' | 'business';
  health: number;
  status: 'healthy' | 'monitoring' | 'self-healing' | 'critical';
  emtAgent?: string;
  selfHealing: boolean;
  components?: SystemHealth[];
  lastUpdated: Date;
}

export interface EMTActivity {
  id: string;
  agent: string;
  action: string;
  timestamp: Date;
  type: 'healing' | 'prevention' | 'learning' | 'monitoring';
  status: 'completed' | 'in-progress' | 'failed';
  system: string;
  impact: string;
}

export interface HealingProcess {
  id: string;
  name: string;
  issue: string;
  status: 'active' | 'completed' | 'failed' | 'paused';
  steps: HealingStep[];
  timeElapsed: string;
  resourcesUsed: string;
  successProbability: number;
  system: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface HealingStep {
  id: string;
  description: string;
  status: 'pending' | 'active' | 'completed' | 'failed';
  completed: boolean;
  timeEstimate: string;
}

export interface HealingPlaybook {
  id: string;
  name: string;
  description: string;
  successRate: number;
  timesUsed: number;
  avgTime: string;
  lastUpdated: string;
  triggers: string[];
  autoEnabled: boolean;
  steps: HealingStep[];
}

export interface FailurePrediction {
  id: string;
  system: string;
  type: string;
  timeToFailure: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  preventiveActions: PreventiveAction[];
  autoPreventEnabled: boolean;
  impact: string;
  probability: number;
}

export interface PreventiveAction {
  id: string;
  name: string;
  description: string;
  effort: 'low' | 'medium' | 'high';
  cost: number;
  timeToExecute: string;
  success_rate: number;
}

export interface LearningInsight {
  id: string;
  pattern: string;
  type: 'anomaly' | 'pattern' | 'optimization' | 'prediction';
  impact: string;
  application: string;
  confidence: number;
  timestamp: Date;
  approved: boolean;
  category: string;
}

export interface ResilienceMetric {
  title: string;
  value: string;
  subtext: string;
  trend?: string;
  icon: React.ReactNode;
  comparison?: string;
  estimatedSavings?: string;
  accuracy?: string;
  coverage?: string;
  roi?: string;
}

export interface CostOptimization {
  id: string;
  description: string;
  monthlySaving: number;
  implementation: string;
  effort: 'low' | 'medium' | 'high';
  category: string;
  priority: 'low' | 'medium' | 'high';
}

export interface SystemAnomaly {
  id: string;
  system: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  detectedAt: Date;
  resolved: boolean;
  autoResolved: boolean;
  pattern: number[];
  description: string;
}
