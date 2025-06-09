
import { create } from 'zustand';
import { Contract, ComplianceFramework, Policy, LegalMatter, RiskItem, ComplianceAlert, LegalInsight } from '@/types/legal';

interface LegalState {
  // Contracts
  contracts: Contract[];
  activeContracts: number;
  expiringContracts: number;
  pendingReview: number;
  totalContractValue: number;
  
  // Compliance
  complianceScore: number;
  complianceFrameworks: ComplianceFramework[];
  regulatoryCompliance: number;
  gdprCompliance: number;
  soxCompliance: number;
  hipaaCompliance: number;
  
  // Policies
  policies: Policy[];
  totalPolicies: number;
  publishedPolicies: number;
  draftPolicies: number;
  acknowledgedRate: number;
  overdueReviews: number;
  
  // Legal Matters
  legalMatters: LegalMatter[];
  activeLegalMatters: number;
  totalExposure: number;
  totalReserves: number;
  winRate: number;
  
  // Risk Management
  riskItems: RiskItem[];
  overallRiskScore: number;
  riskCategories: Array<{
    id: string;
    name: string;
    icon: string;
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
    riskScore: number;
    topRisks: RiskItem[];
  }>;
  
  // Alerts & Insights
  complianceAlerts: ComplianceAlert[];
  legalInsights: LegalInsight[];
  openIssues: number;
  criticalIssues: number;
  
  // Actions
  addContract: (contract: Contract) => void;
  updateContract: (id: string, updates: Partial<Contract>) => void;
  deleteContract: (id: string) => void;
  addPolicy: (policy: Policy) => void;
  updatePolicy: (id: string, updates: Partial<Policy>) => void;
  addLegalMatter: (matter: LegalMatter) => void;
  updateLegalMatter: (id: string, updates: Partial<LegalMatter>) => void;
  addRiskItem: (risk: RiskItem) => void;
  updateRiskItem: (id: string, updates: Partial<RiskItem>) => void;
  dismissAlert: (id: string) => void;
  addLegalInsight: (insight: LegalInsight) => void;
}

export const useLegalStore = create<LegalState>((set, get) => ({
  contracts: [
    {
      id: '1',
      name: 'Software License Agreement - Microsoft',
      type: 'license',
      counterparty: { id: 'ms', name: 'Microsoft Corporation' },
      value: 250000,
      status: 'active',
      startDate: new Date('2024-01-01'),
      expiryDate: new Date('2025-12-31'),
      daysUntilExpiry: 365,
      recurring: true,
      lastUpdated: new Date('2024-01-01'),
      version: '1.0',
      searchableTerms: ['software', 'license', 'enterprise'],
      extractedClauses: ['termination', 'liability', 'payment terms']
    },
    {
      id: '2',
      name: 'Service Agreement - AWS',
      type: 'service',
      counterparty: { id: 'aws', name: 'Amazon Web Services' },
      value: 500000,
      status: 'active',
      startDate: new Date('2024-03-01'),
      expiryDate: new Date('2025-03-01'),
      daysUntilExpiry: 180,
      recurring: true,
      lastUpdated: new Date('2024-03-01'),
      version: '2.1',
      searchableTerms: ['cloud', 'hosting', 'infrastructure'],
      extractedClauses: ['sla', 'data protection', 'pricing']
    }
  ],
  
  activeContracts: 45,
  expiringContracts: 8,
  pendingReview: 12,
  totalContractValue: 12.5,
  
  complianceScore: 87,
  complianceFrameworks: [
    {
      id: 'gdpr',
      name: 'GDPR',
      region: 'European Union',
      icon: '🇪🇺',
      complianceScore: 92,
      totalRequirements: 45,
      compliantItems: 41,
      inProgress: 3,
      nonCompliant: 1,
      categories: [
        { id: 'consent', name: 'Consent Management', compliance: 95 },
        { id: 'data', name: 'Data Protection', compliance: 88 },
        { id: 'breach', name: 'Breach Notification', compliance: 100 },
        { id: 'rights', name: 'Individual Rights', compliance: 85 }
      ]
    },
    {
      id: 'sox',
      name: 'Sarbanes-Oxley',
      region: 'United States',
      icon: '🇺🇸',
      complianceScore: 89,
      totalRequirements: 32,
      compliantItems: 28,
      inProgress: 3,
      nonCompliant: 1,
      categories: [
        { id: 'controls', name: 'Internal Controls', compliance: 91 },
        { id: 'reporting', name: 'Financial Reporting', compliance: 87 },
        { id: 'audit', name: 'Audit Requirements', compliance: 90 }
      ]
    }
  ],
  
  regulatoryCompliance: 87,
  gdprCompliance: 92,
  soxCompliance: 89,
  hipaaCompliance: 85,
  
  policies: [
    {
      id: '1',
      name: 'Data Privacy Policy',
      category: 'Privacy',
      status: 'published',
      version: '2.1',
      lastUpdated: new Date('2024-01-15'),
      acknowledgmentRate: 95,
      acknowledgedCount: 285,
      targetAudience: 300,
      needsReview: false
    },
    {
      id: '2',
      name: 'Code of Conduct',
      category: 'Ethics',
      status: 'published',
      version: '1.5',
      lastUpdated: new Date('2023-12-01'),
      acknowledgmentRate: 88,
      acknowledgedCount: 264,
      targetAudience: 300,
      needsReview: true
    }
  ],
  
  totalPolicies: 24,
  publishedPolicies: 20,
  draftPolicies: 4,
  acknowledgedRate: 91,
  overdueReviews: 3,
  
  legalMatters: [
    {
      id: '1',
      caseNumber: 'LM-2024-001',
      title: 'Patent Infringement Claim',
      type: 'litigation',
      priority: 'high',
      stage: 'discovery',
      opposingParty: 'TechCorp Inc.',
      leadCounsel: 'Jane Smith, Esq.',
      filedDate: new Date('2024-02-15'),
      exposure: 2.5,
      costsToDate: 150,
      reserve: 1.0
    }
  ],
  
  activeLegalMatters: 7,
  totalExposure: 5.2,
  totalReserves: 2.8,
  winRate: 78,
  
  riskItems: [
    {
      id: '1',
      name: 'Data Breach Risk',
      category: 'Cybersecurity',
      level: 'high',
      probability: 25,
      impact: 85,
      riskScore: 72,
      mitigation: {
        strategy: 'Enhanced Security Controls',
        effectiveness: 85,
        progress: 65,
        owner: {
          id: 'security-lead',
          name: 'Security Team Lead'
        }
      }
    }
  ],
  
  overallRiskScore: 42,
  riskCategories: [
    {
      id: 'cyber',
      name: 'Cybersecurity',
      icon: '🔒',
      riskLevel: 'high',
      riskScore: 72,
      topRisks: []
    },
    {
      id: 'regulatory',
      name: 'Regulatory',
      icon: '📋',
      riskLevel: 'medium',
      riskScore: 45,
      topRisks: []
    },
    {
      id: 'operational',
      name: 'Operational',
      icon: '⚙️',
      riskLevel: 'medium',
      riskScore: 38,
      topRisks: []
    }
  ],
  
  complianceAlerts: [
    {
      id: '1',
      type: 'deadline',
      severity: 'high',
      title: 'GDPR Annual Report Due',
      description: 'Annual data protection report due to supervisory authority',
      framework: 'GDPR',
      dueDate: new Date('2024-12-31'),
      status: 'open'
    }
  ],
  
  legalInsights: [
    {
      id: '1',
      category: 'contract',
      priority: 'high',
      title: 'Contract Renewal Opportunity',
      description: 'Analysis suggests favorable terms for early renewal of key vendor contracts',
      confidence: 85,
      timestamp: new Date(),
      recommendations: [
        'Negotiate volume discounts',
        'Extend term for better rates',
        'Add performance incentives'
      ]
    }
  ],
  
  openIssues: 23,
  criticalIssues: 3,
  
  addContract: (contract) => set((state) => ({
    contracts: [...state.contracts, contract]
  })),
  
  updateContract: (id, updates) => set((state) => ({
    contracts: state.contracts.map(contract =>
      contract.id === id ? { ...contract, ...updates } : contract
    )
  })),
  
  deleteContract: (id) => set((state) => ({
    contracts: state.contracts.filter(contract => contract.id !== id)
  })),
  
  addPolicy: (policy) => set((state) => ({
    policies: [...state.policies, policy]
  })),
  
  updatePolicy: (id, updates) => set((state) => ({
    policies: state.policies.map(policy =>
      policy.id === id ? { ...policy, ...updates } : policy
    )
  })),
  
  addLegalMatter: (matter) => set((state) => ({
    legalMatters: [...state.legalMatters, matter]
  })),
  
  updateLegalMatter: (id, updates) => set((state) => ({
    legalMatters: state.legalMatters.map(matter =>
      matter.id === id ? { ...matter, ...updates } : matter
    )
  })),
  
  addRiskItem: (risk) => set((state) => ({
    riskItems: [...state.riskItems, risk]
  })),
  
  updateRiskItem: (id, updates) => set((state) => ({
    riskItems: state.riskItems.map(risk =>
      risk.id === id ? { ...risk, ...updates } : risk
    )
  })),
  
  dismissAlert: (id) => set((state) => ({
    complianceAlerts: state.complianceAlerts.filter(alert => alert.id !== id)
  })),
  
  addLegalInsight: (insight) => set((state) => ({
    legalInsights: [insight, ...state.legalInsights]
  }))
}));
