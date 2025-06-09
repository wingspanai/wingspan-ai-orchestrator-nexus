
export interface InfrastructureNode {
  id: string;
  name: string;
  type: 'server' | 'database' | 'load-balancer' | 'router' | 'switch' | 'storage';
  status: 'healthy' | 'warning' | 'critical' | 'offline';
  location: string;
  ipAddress: string;
  cpu: number;
  memory: number;
  storage: number;
  networkIn: number;
  networkOut: number;
  uptime: number;
  alerts: Alert[];
  lastChecked: Date;
}

export interface SecurityAlert {
  id: string;
  type: 'malware' | 'intrusion' | 'vulnerability' | 'policy-violation' | 'suspicious-activity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  sourceIP: string;
  attackType: string;
  riskScore: number;
  affectedSystems: Array<{
    id: string;
    name: string;
  }>;
  timestamp: Date;
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  impact: string;
  affectedUsers: number;
  affectedServices: Array<{
    id: string;
    name: string;
    status: string;
  }>;
  assignee: {
    id: string;
    name: string;
    avatar?: string;
  };
  status: 'open' | 'investigating' | 'resolving' | 'resolved' | 'closed';
  createdAt: Date;
  resolvedAt?: Date;
  currentStep: string;
  currentStepNumber: number;
  totalSteps: number;
  age: number; // in minutes
}

export interface ResourceAllocation {
  id: string;
  type: string;
  total: number;
  utilized: number;
  available: number;
  reserved: number;
  unit: string;
  allocation: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

export interface MaintenancePrediction {
  id: string;
  system: string;
  failureType: string;
  daysUntilFailure: number;
  confidence: number;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  affectedUsers: number;
  downtime: number; // in hours
  costImpact: number;
}

export interface ComplianceFramework {
  id: string;
  name: string;
  compliance: number;
  passedControls: number;
  totalControls: number;
  lastAudit: Date;
}

export interface ServiceTicket {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  status: 'open' | 'in-progress' | 'pending' | 'resolved' | 'closed';
  requester: {
    id: string;
    name: string;
    avatar?: string;
  };
  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  preview: string;
  icon: string;
  views: number;
  helpful: number; // percentage
  category: string;
  lastUpdated: Date;
}

export interface Alert {
  id: string;
  type: 'performance' | 'capacity' | 'security' | 'availability';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  acknowledged: boolean;
}
