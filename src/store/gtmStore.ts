
import { create } from 'zustand';

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

export interface GTMStore {
  selectedProduct: GTMProduct | null;
  products: GTMProduct[];
  activeTab: 'positioning' | 'pricing' | 'channels' | 'campaign' | 'launch';
  
  // Positioning
  valueProposition: ValueProposition;
  primaryMessage: string;
  supportingMessages: string[];
  personas: Persona[];
  
  // Pricing
  pricingModel: 'value-based' | 'competitive' | 'cost-plus' | 'dynamic';
  pricingTiers: PricingTier[];
  optimalPrice: number;
  priceConfidence: number;
  elasticityCoefficient: number;
  
  // Channels
  channels: Channel[];
  
  // Market Intelligence
  marketIntel: MarketIntelItem[];
  
  // Actions
  setSelectedProduct: (product: GTMProduct | null) => void;
  setActiveTab: (tab: 'positioning' | 'pricing' | 'channels' | 'campaign' | 'launch') => void;
  updateValueProposition: (updates: Partial<ValueProposition>) => void;
  addSupportingMessage: (message: string) => void;
  removeSupportingMessage: (index: number) => void;
  addPricingTier: (tier: PricingTier) => void;
  updatePricingTier: (id: string, updates: Partial<PricingTier>) => void;
  generateAIPositioning: () => Promise<void>;
  runPricingSimulation: () => Promise<void>;
  optimizeChannelMix: () => Promise<void>;
}

export const useGTMStore = create<GTMStore>((set, get) => ({
  selectedProduct: null,
  products: [
    {
      id: '1',
      name: 'AI Analytics Platform',
      launchDate: '2024-07-15',
      stage: 'positioning',
      targetRevenue: 2.5,
      totalAddressableMarket: 45,
      customerAcquisitionCost: 120,
      launchReadiness: 73,
      campaignChannels: 8,
      channelsReady: 6,
      totalChannels: 8,
    },
    {
      id: '2',
      name: 'Smart CRM Integration',
      launchDate: '2024-08-20',
      stage: 'pricing',
      targetRevenue: 1.8,
      totalAddressableMarket: 28,
      customerAcquisitionCost: 85,
      launchReadiness: 45,
      campaignChannels: 6,
      channelsReady: 3,
      totalChannels: 6,
    },
  ],
  activeTab: 'positioning',
  
  valueProposition: {
    targetAudience: '',
    customerNeed: '',
    productCategory: '',
    keyBenefit: '',
    competitors: '',
    differentiator: '',
  },
  primaryMessage: '',
  supportingMessages: [],
  personas: [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Data Analyst',
      avatar: '👩‍💻',
      painPoints: ['Manual data processing', 'Lack of real-time insights', 'Complex reporting tools'],
      customMessage: 'Get instant insights without the complexity',
      preferredChannels: ['LinkedIn', 'Industry Publications', 'Webinars'],
    },
    {
      id: '2',
      name: 'Marcus Johnson',
      role: 'VP of Sales',
      avatar: '👨‍💼',
      painPoints: ['Poor pipeline visibility', 'Inefficient lead scoring', 'Fragmented data sources'],
      customMessage: 'Accelerate sales with intelligent automation',
      preferredChannels: ['Sales Events', 'Direct Outreach', 'Peer Networks'],
    },
  ],
  
  pricingModel: 'value-based',
  pricingTiers: [
    {
      id: '1',
      name: 'Starter',
      price: 49,
      period: 'month',
      featured: false,
      features: [
        { text: 'Up to 1,000 data points', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Email support', included: true },
        { text: 'Advanced AI insights', included: false },
      ],
      projectedAdoption: 35,
      projectedRevenue: 85,
    },
    {
      id: '2',
      name: 'Professional',
      price: 149,
      period: 'month',
      featured: true,
      features: [
        { text: 'Up to 10,000 data points', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Priority support', included: true },
        { text: 'AI-powered insights', included: true },
        { text: 'Custom integrations', included: true },
      ],
      projectedAdoption: 45,
      projectedRevenue: 335,
    },
    {
      id: '3',
      name: 'Enterprise',
      price: 399,
      period: 'month',
      featured: false,
      features: [
        { text: 'Unlimited data points', included: true },
        { text: 'Enterprise analytics', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Advanced AI & ML', included: true },
        { text: 'White-label options', included: true },
        { text: 'SLA guarantees', included: true },
      ],
      projectedAdoption: 20,
      projectedRevenue: 399,
    },
  ],
  optimalPrice: 149,
  priceConfidence: 87,
  elasticityCoefficient: -0.8,
  
  channels: [
    {
      id: '1',
      name: 'Content Marketing',
      icon: '📝',
      budget: 120,
      expectedROI: 340,
      cac: 45,
      healthScore: 92,
      status: 'active',
      strategy: 'Educational content to build thought leadership and drive organic discovery',
      targetLeads: 850,
      targetConversion: 12,
      targetRevenue: 380,
      tactics: [
        { id: '1', name: 'Blog Content Series', timeline: '8 weeks', owner: 'Content Team', status: 'in-progress' },
        { id: '2', name: 'Video Tutorials', timeline: '6 weeks', owner: 'Video Team', status: 'planned' },
      ],
      crmIntegrated: true,
      analyticsSetup: true,
      automationReady: true,
    },
    {
      id: '2',
      name: 'Paid Social',
      icon: '📱',
      budget: 200,
      expectedROI: 280,
      cac: 65,
      healthScore: 78,
      status: 'active',
      strategy: 'Targeted social media advertising to reach decision makers',
      targetLeads: 650,
      targetConversion: 8,
      targetRevenue: 425,
      tactics: [
        { id: '3', name: 'LinkedIn Campaign', timeline: '4 weeks', owner: 'Paid Team', status: 'completed' },
        { id: '4', name: 'Twitter Ads', timeline: '3 weeks', owner: 'Paid Team', status: 'in-progress' },
      ],
      crmIntegrated: true,
      analyticsSetup: false,
      automationReady: true,
    },
  ],
  
  marketIntel: [
    {
      id: '1',
      priority: 'high',
      type: 'competitor',
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      content: 'Competitor X just announced a similar product launching 2 weeks before our date. Recommend accelerating timeline.',
      badge: 'Urgent',
    },
    {
      id: '2',
      priority: 'medium',
      type: 'market-shift',
      timestamp: new Date(Date.now() - 60 * 60 * 1000),
      content: 'Search volume for "AI analytics" increased 45% this week. Opportunity to capitalize on growing interest.',
      badge: 'Market Shift',
    },
    {
      id: '3',
      priority: 'low',
      type: 'insight',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
      content: 'Similar products in Asian markets showing 3x higher engagement with video content vs. static images.',
      badge: 'Insight',
    },
  ],
  
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  
  updateValueProposition: (updates) => set((state) => ({
    valueProposition: { ...state.valueProposition, ...updates }
  })),
  
  addSupportingMessage: (message) => set((state) => ({
    supportingMessages: [...state.supportingMessages, message]
  })),
  
  removeSupportingMessage: (index) => set((state) => ({
    supportingMessages: state.supportingMessages.filter((_, i) => i !== index)
  })),
  
  addPricingTier: (tier) => set((state) => ({
    pricingTiers: [...state.pricingTiers, tier]
  })),
  
  updatePricingTier: (id, updates) => set((state) => ({
    pricingTiers: state.pricingTiers.map(tier => 
      tier.id === id ? { ...tier, ...updates } : tier
    )
  })),
  
  generateAIPositioning: async () => {
    const { valueProposition } = get();
    if (valueProposition.targetAudience && valueProposition.keyBenefit) {
      const generated = `For ${valueProposition.targetAudience} who ${valueProposition.customerNeed}, our ${valueProposition.productCategory} provides ${valueProposition.keyBenefit}. Unlike ${valueProposition.competitors}, our product ${valueProposition.differentiator}.`;
      set((state) => ({
        valueProposition: {
          ...state.valueProposition,
          generatedProposition: generated,
          clarityScore: Math.floor(Math.random() * 3) + 8, // 8-10
        }
      }));
    }
  },
  
  runPricingSimulation: async () => {
    // Simulate pricing optimization
    const newOptimalPrice = 149 + Math.floor(Math.random() * 40) - 20;
    const newConfidence = 80 + Math.floor(Math.random() * 15);
    set({
      optimalPrice: newOptimalPrice,
      priceConfidence: newConfidence,
    });
  },
  
  optimizeChannelMix: async () => {
    // Simulate channel optimization
    console.log('Running channel mix optimization...');
  },
}));
