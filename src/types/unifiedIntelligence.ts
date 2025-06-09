
import { LucideIcon } from 'lucide-react';

export interface ExecutiveMetric {
  title: string;
  value: string;
  target?: string;
  achievement?: string;
  trend: string;
  icon: LucideIcon;
  aiInsight: string;
  benchmark?: string;
  savings?: string;
  percentile?: string;
  retention?: string;
  movement?: string;
  marketShare?: string;
  score?: string;
  issues?: string;
}

export interface AIAgent {
  name: string;
  status: 'active' | 'alert' | 'inactive';
  impact: 'critical' | 'high' | 'medium' | 'low';
}

export interface CategoryPerformance {
  name: string;
  agents: number;
  insights: number;
  topInsights: string[];
  activeAgents: AIAgent[];
}

export interface CriticalAlert {
  id: string;
  agent: string;
  message: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  time: string;
}

export interface PredictionFactor {
  impact: 'positive' | 'negative';
  strength: 'high' | 'medium' | 'low';
  description: string;
}

export interface CompetitorMove {
  id: string;
  competitor: string;
  action: string;
  probability: number;
  impact: 'high' | 'medium' | 'low';
}

export interface MarketTrend {
  id: string;
  name: string;
  strength: number;
  timeToMainstream: string;
  opportunity: number;
}

export interface StrategicOpportunity {
  id: string;
  title: string;
  description: string;
  value: string;
  impact: 'high' | 'medium' | 'low';
  agents: string[];
  successFactors: Array<{ name: string; achieved: boolean }>;
  discovered: string;
  validated: string;
  decisionDue: string;
}

export interface PendingDecision {
  id: string;
  title: string;
  context: string;
  deadline: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  stakeholders: Array<{ name: string; impact: 'high' | 'medium' | 'low' }>;
  options: DecisionOption[];
}

export interface DecisionOption {
  id: string;
  name: string;
  pros: string[];
  cons: string[];
  aiRecommendation: string;
  recommendationStrength: 'strong' | 'moderate' | 'weak';
  supportingAgents: Array<{ name: string; opinion: string }>;
}

export interface LiveMetric {
  title: string;
  value: string;
  target?: string;
  change?: string;
  sparkline: number[];
  pace?: string;
  peak?: string;
  benchmark?: string;
  resolution?: string;
  status?: string;
  uptime?: string;
  efficiency?: string;
  runway?: string;
  forecast?: string;
  percentile?: string;
}

export interface PerformanceDimension {
  name: string;
  score: number;
  target: number;
}

export interface InsightShare {
  id: string;
  from: string;
  to: string;
  insight: string;
  impact: string;
}
