
import { StateCreator } from 'zustand';
import { ValueProposition, Persona } from '../types/gtm';
import { mockPersonas } from '../data/mockData';

export interface PositioningSlice {
  valueProposition: ValueProposition;
  primaryMessage: string;
  supportingMessages: string[];
  personas: Persona[];
  
  updateValueProposition: (updates: Partial<ValueProposition>) => void;
  addSupportingMessage: (message: string) => void;
  removeSupportingMessage: (index: number) => void;
  generateAIPositioning: () => Promise<void>;
}

export const createPositioningSlice: StateCreator<PositioningSlice> = (set, get) => ({
  valueProposition: {
    targetAudience: '',
    customerNeed: '',
    productCategory: '',
    keyBenefit: '',
    competitors: '',
    differentiator: '',
    primaryMessage: '',
  },
  primaryMessage: '',
  supportingMessages: [],
  personas: mockPersonas,
  
  updateValueProposition: (updates) => set((state) => ({
    valueProposition: { ...state.valueProposition, ...updates }
  })),
  
  addSupportingMessage: (message) => set((state) => ({
    supportingMessages: [...state.supportingMessages, message]
  })),
  
  removeSupportingMessage: (index) => set((state) => ({
    supportingMessages: state.supportingMessages.filter((_, i) => i !== index)
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
});
