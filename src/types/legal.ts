
export interface Contract {
  id: string;
  name: string;
  type: 'vendor' | 'customer' | 'employment' | 'nda' | 'license' | 'service';
  counterparty: {
    id: string;
    name: string;
    logo?: string;
  };
  value: number;
  status: 'draft' | 'review' | 'negotiation' | 'approval' | 'executed' | 'active' | 'expired';
  startDate: Date;
  expiryDate: Date;
  daysUntilExpiry: number;
  recurring: boolean;
  lastUpdated: Date;
  version: string;
  searchableTerms: string[];
  extractedClauses: string[];
}

export interface ComplianceFramework {
  id: string;
  name: string;
  region: string;
  icon: string;
  complianceScore: number;
  totalRequirements: number;
  compliantItems: number;
  inProgress: number;
  nonCompliant: number;
  categories: Array<{
    id: string;
    name: string;
    compliance: number;
  }>;
}

export interface Policy {
  id: string;
  name: string;
  category: string;
  status: 'draft' | 'published' | 'archived' | 'under-review';
  version: string;
  lastUpdated: Date;
  acknowledgmentRate: number;
  acknowledgedCount: number;
  targetAudience: number;
  needsReview: boolean;
}

export interface LegalMatter {
  id: string;
  caseNumber: string;
  title: string;
  type: 'litigation' | 'investigation' | 'claim' | 'regulatory';
  priority: 'low' | 'medium' | 'high' | 'critical';
  stage: 'filed' | 'discovery' | 'trial' | 'settlement' | 'resolution';
  opposingParty: string;
  leadCounsel: string;
  filedDate: Date;
  exposure: number;
  costsToDate: number;
  reserve: number;
}

export interface RiskItem {
  id: string;
  name: string;
  category: string;
  level: 'low' | 'medium' | 'high' | 'critical';
  probability: number;
  impact: number;
  riskScore: number;
  mitigation?: {
    strategy: string;
    effectiveness: number;
    progress: number;
    owner: {
      id: string;
      name: string;
      avatar?: string;
    };
  };
}

export interface ComplianceAlert {
  id: string;
  type: 'deadline' | 'violation' | 'review' | 'update';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  framework?: string;
  contract?: Contract;
  dueDate?: Date;
  status: 'open' | 'in-progress' | 'resolved' | 'dismissed';
}

export interface LegalInsight {
  id: string;
  category: 'contract' | 'compliance' | 'risk' | 'litigation';
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  confidence: number;
  timestamp: Date;
  recommendations: string[];
}
