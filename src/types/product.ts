
export type ProductStage = 'ideation' | 'development' | 'go-to-market' | 'launch' | 'live' | 'post-launch';
export type ProductCategory = 'saas' | 'hardware' | 'consumer-app' | 'enterprise-b2b' | 'marketplace' | 'platform';
export type Priority = 'critical' | 'high' | 'medium' | 'low';
export type TeamType = 'product' | 'engineering' | 'design' | 'marketing' | 'sales' | 'support';

export interface ProductMetadata {
  tags: string[];
  keywords: string[];
  targetMarket: string;
  marketSize?: {
    tam: number; // Total Addressable Market
    sam: number; // Serviceable Addressable Market
    som: number; // Serviceable Obtainable Market
  };
  competitors: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  skills: string[];
  capacity: number; // hours per week
  availability: number; // percentage available
}

export interface Team {
  id: string;
  name: string;
  type: TeamType;
  members: TeamMember[];
  capacity: {
    total: number;
    allocated: number;
    available: number;
  };
  skills: string[];
  performance: {
    velocity: number;
    qualityScore: number;
    satisfactionScore: number;
  };
}

export interface Milestone {
  id: string;
  name: string;
  description: string;
  dueDate: Date;
  status: 'not-started' | 'in-progress' | 'completed' | 'at-risk' | 'delayed';
  dependencies: string[];
  assignedTeam?: string;
  progress: number;
}

export interface Risk {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  probability: number;
  impact: string;
  mitigation: string;
  owner: string;
  status: 'open' | 'mitigating' | 'resolved';
}

export interface AIInsight {
  id: string;
  type: 'opportunity' | 'risk' | 'optimization' | 'market-signal';
  priority: Priority;
  message: string;
  confidence: number;
  suggestedActions: Array<{
    id: string;
    title: string;
    description: string;
    impact: string;
  }>;
  timestamp: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  stage: ProductStage;
  priority: Priority;
  metadata: ProductMetadata;
  teams: Team[];
  timeline: {
    startDate: Date;
    targetLaunchDate: Date;
    milestones: Milestone[];
  };
  metrics: {
    budget: number;
    burnRate: number;
    progressScore: number;
    riskScore: number;
    marketFit: number;
  };
  risks: Risk[];
  aiInsights: AIInsight[];
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}
