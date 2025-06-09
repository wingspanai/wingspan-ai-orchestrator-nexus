
import { StateCreator } from 'zustand';
import { GTMProduct, MarketIntelItem } from '../types/gtm';
import { mockProducts, mockMarketIntel } from '../data/mockData';

export interface CoreSlice {
  selectedProduct: GTMProduct | null;
  products: GTMProduct[];
  activeTab: 'positioning' | 'pricing' | 'channels' | 'campaign' | 'launch' | 'performance';
  marketIntel: MarketIntelItem[];
  
  setSelectedProduct: (product: GTMProduct | null) => void;
  setActiveTab: (tab: 'positioning' | 'pricing' | 'channels' | 'campaign' | 'launch' | 'performance') => void;
}

export const createCoreSlice: StateCreator<CoreSlice> = (set) => ({
  selectedProduct: null,
  products: mockProducts,
  activeTab: 'positioning',
  marketIntel: mockMarketIntel,
  
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setActiveTab: (tab) => set({ activeTab: tab }),
});
