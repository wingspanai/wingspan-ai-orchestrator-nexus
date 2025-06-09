
import { create } from 'zustand';

export type IdeaStage = 'raw' | 'researching' | 'validating' | 'validated';
export type IdeaCategory = 'saas' | 'hardware' | 'marketplace' | 'platform' | 'consumer-app' | 'enterprise-b2b';

export interface Idea {
  id: string;
  title: string;
  description: string;
  category: IdeaCategory;
  stage: IdeaStage;
  submitter: string;
  votes: number;
  createdAt: Date;
  updatedAt?: Date;
  
  // Research data
  researchProgress?: number;
  marketSizeCompleted?: boolean;
  competitorAnalysisCompleted?: boolean;
  customerResearchCompleted?: boolean;
  technicalFeasibilityCompleted?: boolean;
  estimatedTAM?: number;
  mainRisk?: string;
  
  // Validation data
  validationStatus?: string;
  daysInValidation?: number;
  surveyResponses?: number;
  interestScore?: number;
  mvpSignups?: number;
  
  // Validated data
  marketValidationScore?: number;
  technicalFeasibilityScore?: number;
  businessCaseScore?: number;
  
  // Metadata
  tags?: string[];
  assignedTo?: string;
  priority?: 'low' | 'medium' | 'high' | 'critical';
}

export interface GeneratedIdea {
  id: string;
  title: string;
  rationale: string;
  marketScore: number;
  category: IdeaCategory;
}

interface IdeationStore {
  ideas: Idea[];
  generatedIdeas: GeneratedIdea[];
  isLoading: boolean;
  selectedIdea: Idea | null;
  
  // Actions
  addIdea: (ideaData: Partial<Idea>) => void;
  updateIdea: (id: string, updates: Partial<Idea>) => void;
  deleteIdea: (id: string) => void;
  selectIdea: (idea: Idea | null) => void;
  moveIdeaToStage: (id: string, stage: IdeaStage) => void;
  voteOnIdea: (id: string) => void;
  generateAIIdeas: (type: string) => Promise<void>;
  saveGeneratedIdea: (generatedIdea: GeneratedIdea) => void;
  
  // Getters
  getIdeasByStage: (stage: IdeaStage) => Idea[];
  getIdeasByCategory: (category: IdeaCategory) => Idea[];
  getTopIdeas: (limit: number) => Idea[];
}

export const useIdeationStore = create<IdeationStore>((set, get) => ({
  ideas: [
    {
      id: '1',
      title: 'AI-Powered Customer Support Chatbot',
      description: 'An intelligent chatbot that can handle customer inquiries using natural language processing and learn from interactions.',
      category: 'saas',
      stage: 'raw',
      submitter: 'John Doe',
      votes: 8,
      createdAt: new Date('2024-01-15'),
      tags: ['AI', 'Customer Support', 'Automation'],
      priority: 'high'
    },
    {
      id: '2',
      title: 'Smart Home Energy Management System',
      description: 'A device that optimizes home energy consumption by learning usage patterns and automatically adjusting devices.',
      category: 'hardware',
      stage: 'researching',
      submitter: 'Jane Smith',
      votes: 12,
      createdAt: new Date('2024-01-10'),
      researchProgress: 65,
      marketSizeCompleted: true,
      competitorAnalysisCompleted: true,
      customerResearchCompleted: false,
      technicalFeasibilityCompleted: false,
      estimatedTAM: 15000,
      mainRisk: 'High manufacturing costs',
      tags: ['IoT', 'Energy', 'Smart Home'],
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Freelancer Marketplace for Creative Services',
      description: 'A platform connecting businesses with creative freelancers, featuring AI-powered matching and project management tools.',
      category: 'marketplace',
      stage: 'validating',
      submitter: 'Mike Johnson',
      votes: 15,
      createdAt: new Date('2024-01-05'),
      validationStatus: 'In Progress',
      daysInValidation: 21,
      surveyResponses: 78,
      interestScore: 7.8,
      mvpSignups: 156,
      tags: ['Marketplace', 'Freelancing', 'Creative Services'],
      priority: 'high'
    },
    {
      id: '4',
      title: 'B2B Document Automation Platform',
      description: 'Automate document generation, approval workflows, and digital signatures for enterprise clients.',
      category: 'enterprise-b2b',
      stage: 'validated',
      submitter: 'Sarah Wilson',
      votes: 20,
      createdAt: new Date('2023-12-20'),
      marketValidationScore: 87,
      technicalFeasibilityScore: 92,
      businessCaseScore: 85,
      tags: ['B2B', 'Automation', 'Documents'],
      priority: 'critical'
    }
  ],
  generatedIdeas: [],
  isLoading: false,
  selectedIdea: null,

  addIdea: (ideaData) => {
    const newIdea: Idea = {
      id: Date.now().toString(),
      title: ideaData.title || '',
      description: ideaData.description || '',
      category: ideaData.category || 'saas',
      stage: ideaData.stage || 'raw',
      submitter: ideaData.submitter || 'Current User',
      votes: ideaData.votes || 0,
      createdAt: ideaData.createdAt || new Date(),
      tags: ideaData.tags || [],
      priority: ideaData.priority || 'medium'
    };

    set((state) => ({
      ideas: [...state.ideas, newIdea]
    }));
  },

  updateIdea: (id, updates) => {
    set((state) => ({
      ideas: state.ideas.map(idea =>
        idea.id === id
          ? { ...idea, ...updates, updatedAt: new Date() }
          : idea
      )
    }));
  },

  deleteIdea: (id) => {
    set((state) => ({
      ideas: state.ideas.filter(idea => idea.id !== id),
      selectedIdea: state.selectedIdea?.id === id ? null : state.selectedIdea
    }));
  },

  selectIdea: (idea) => {
    set({ selectedIdea: idea });
  },

  moveIdeaToStage: (id, stage) => {
    set((state) => ({
      ideas: state.ideas.map(idea =>
        idea.id === id
          ? { ...idea, stage, updatedAt: new Date() }
          : idea
      )
    }));
  },

  voteOnIdea: (id) => {
    set((state) => ({
      ideas: state.ideas.map(idea =>
        idea.id === id
          ? { ...idea, votes: idea.votes + 1, updatedAt: new Date() }
          : idea
      )
    }));
  },

  generateAIIdeas: async (type) => {
    set({ isLoading: true });
    
    // Simulate AI idea generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockGeneratedIdeas: GeneratedIdea[] = [
      {
        id: Date.now().toString() + '1',
        title: 'AI-Powered Code Review Assistant',
        rationale: 'Market gap in automated code quality assurance for small development teams',
        marketScore: 8.5,
        category: 'saas'
      },
      {
        id: Date.now().toString() + '2', 
        title: 'Virtual Reality Meeting Rooms',
        rationale: 'Growing demand for immersive remote collaboration tools',
        marketScore: 7.2,
        category: 'platform'
      },
      {
        id: Date.now().toString() + '3',
        title: 'Sustainable Packaging Marketplace',
        rationale: 'Increasing regulatory pressure and consumer demand for eco-friendly packaging',
        marketScore: 9.1,
        category: 'marketplace'
      }
    ];

    set((state) => ({
      generatedIdeas: [...state.generatedIdeas, ...mockGeneratedIdeas],
      isLoading: false
    }));
  },

  saveGeneratedIdea: (generatedIdea) => {
    const newIdea: Idea = {
      id: generatedIdea.id,
      title: generatedIdea.title,
      description: generatedIdea.rationale,
      category: generatedIdea.category,
      stage: 'raw',
      submitter: 'AI Generator',
      votes: 0,
      createdAt: new Date(),
      tags: ['AI Generated'],
      priority: 'medium'
    };

    set((state) => ({
      ideas: [...state.ideas, newIdea],
      generatedIdeas: state.generatedIdeas.filter(idea => idea.id !== generatedIdea.id)
    }));
  },

  getIdeasByStage: (stage) => {
    return get().ideas.filter(idea => idea.stage === stage);
  },

  getIdeasByCategory: (category) => {
    return get().ideas.filter(idea => idea.category === category);
  },

  getTopIdeas: (limit) => {
    return get().ideas
      .sort((a, b) => b.votes - a.votes)
      .slice(0, limit);
  }
}));
