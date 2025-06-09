
import { StateCreator } from 'zustand';
import { Channel } from '../types/gtm';
import { mockChannels } from '../data/mockData';

export interface ChannelsSlice {
  channels: Channel[];
  
  optimizeChannelMix: () => Promise<void>;
}

export const createChannelsSlice: StateCreator<ChannelsSlice> = () => ({
  channels: mockChannels,
  
  optimizeChannelMix: async () => {
    // Simulate channel optimization
    console.log('Running channel mix optimization...');
  },
});
