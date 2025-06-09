
export interface ZKProof {
  id: string;
  name: string;
  type: 'privacy' | 'access-control' | 'audit-trail' | 'compliance';
  status: 'verified' | 'pending' | 'failed';
  verificationTime: number;
  requirement: string;
  framework: string;
  timestamp: Date;
  proofSystem: 'groth16' | 'plonk' | 'stark';
  securityLevel: number;
}

export interface ComplianceFramework {
  id: string;
  name: string;
  type: 'regulatory' | 'industry' | 'custom';
  status: 'compliant' | 'non-compliant' | 'pending';
  requirements: FrameworkRequirement[];
  complianceScore: number;
}

export interface FrameworkRequirement {
  id: string;
  name: string;
  proofId: string;
  status: 'compliant' | 'non-compliant' | 'pending';
  lastVerified: Date;
}

export interface AuditSession {
  id: string;
  auditor: string;
  type: string;
  status: 'active' | 'completed' | 'pending';
  startDate: Date;
  endDate: Date;
  progress: number;
  itemsReviewed: number;
  totalItems: number;
  pendingRequests: VerificationRequest[];
}

export interface VerificationRequest {
  id: string;
  type: string;
  proof: string;
  requestedBy: string;
  timestamp: Date;
  status: 'pending' | 'approved' | 'denied';
}

export interface PrivacyAssessment {
  id: string;
  project: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  dataTypes: string[];
  purpose: string;
  mitigations: string[];
  status: 'draft' | 'review' | 'approved' | 'rejected';
}

export interface ComplianceRule {
  id: string;
  name: string;
  active: boolean;
  triggers: string[];
  actions: string[];
  executions: number;
  successRate: string;
  avgTime: string;
}

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  impact: string;
  effort: string;
  category: 'automation' | 'privacy' | 'security' | 'compliance';
}

export interface ZKMetric {
  title: string;
  value: string;
  subtext: string;
  trend?: string;
  icon: React.ReactNode;
  certifications?: string[];
  streak?: string;
  efficiency?: string;
  savings?: string;
}
