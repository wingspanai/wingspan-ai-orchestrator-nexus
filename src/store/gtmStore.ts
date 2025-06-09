
import { create } from 'zustand';
import { CoreSlice, createCoreSlice } from './slices/coreSlice';
import { PositioningSlice, createPositioningSlice } from './slices/positioningSlice';
import { PricingSlice, createPricingSlice } from './slices/pricingSlice';
import { ChannelsSlice, createChannelsSlice } from './slices/channelsSlice';

export interface GTMStore extends CoreSlice, PositioningSlice, PricingSlice, ChannelsSlice {}

export const useGTMStore = create<GTMStore>()((...a) => ({
  ...createCoreSlice(...a),
  ...createPositioningSlice(...a),
  ...createPricingSlice(...a),
  ...createChannelsSlice(...a),
}));

// Re-export types for convenience
export type { GTMProduct, ValueProposition, PricingTier, Channel, Persona, MarketIntelItem } from './types/gtm';
