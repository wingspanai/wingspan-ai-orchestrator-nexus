
import { StateCreator } from 'zustand';
import { PricingTier } from '../types/gtm';
import { mockPricingTiers } from '../data/mockData';

export interface PricingSlice {
  pricingModel: 'value-based' | 'competitive' | 'cost-plus' | 'dynamic';
  pricingTiers: PricingTier[];
  optimalPrice: number;
  priceConfidence: number;
  elasticityCoefficient: number;
  
  addPricingTier: (tier: PricingTier) => void;
  updatePricingTier: (id: string, updates: Partial<PricingTier>) => void;
  runPricingSimulation: () => Promise<void>;
}

export const createPricingSlice: StateCreator<PricingSlice> = (set) => ({
  pricingModel: 'value-based',
  pricingTiers: mockPricingTiers,
  optimalPrice: 149,
  priceConfidence: 87,
  elasticityCoefficient: -0.8,
  
  addPricingTier: (tier) => set((state) => ({
    pricingTiers: [...state.pricingTiers, tier]
  })),
  
  updatePricingTier: (id, updates) => set((state) => ({
    pricingTiers: state.pricingTiers.map(tier => 
      tier.id === id ? { ...tier, ...updates } : tier
    )
  })),
  
  runPricingSimulation: async () => {
    // Simulate pricing optimization
    const newOptimalPrice = 149 + Math.floor(Math.random() * 40) - 20;
    const newConfidence = 80 + Math.floor(Math.random() * 15);
    set({
      optimalPrice: newOptimalPrice,
      priceConfidence: newConfidence,
    });
  },
});
