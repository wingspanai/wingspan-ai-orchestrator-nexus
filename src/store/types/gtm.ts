
export interface GTMProduct {
  id: string;
  name: string;
  launchDate: string;
  stage: 'positioning' | 'pricing' | 'channels' | 'campaign' | 'launch';
  targetRevenue: number;
  totalAddressableMarket: number;
  customerAcquisitionCost: number;
  launchReadiness: number;
  campaignChannels: number;
  channelsReady: number;
  totalChannels: number;
}

export interface ValueProposition {
  targetAudience: string;
  customerNeed: string;
  productCategory: string;
  keyBenefit: string;
  competitors: string;
  differentiator: string;
  primaryMessage: string;
  generatedProposition?: string;
  clarityScore?: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year' | 'one-time';
  featured: boolean;
  features: Array<{
    text: string;
    included: boolean;
    limit?: string;
  }>;
  projectedAdoption: number;
  projectedRevenue: number;
}

export interface Channel {
  id: string;
  name: string;
  icon: string;
  budget: number;
  expectedROI: number;
  cac: number;
  healthScore: number;
  status: 'active' | 'planned' | 'paused';
  strategy: string;
  targetLeads: number;
  targetConversion: number;
  targetRevenue: number;
  tactics: Array<{
    id: string;
    name: string;
    timeline: string;
    owner: string;
    status: 'completed' | 'in-progress' | 'planned';
  }>;
  crmIntegrated: boolean;
  analyticsSetup: boolean;
  automationReady: boolean;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  avatar: string;
  painPoints: string[];
  customMessage: string;
  preferredChannels: string[];
}

export interface MarketIntelItem {
  id: string;
  priority: 'high' | 'medium' | 'low';
  type: 'urgent' | 'market-shift' | 'insight' | 'competitor';
  timestamp: Date;
  content: string;
  badge: string;
}
