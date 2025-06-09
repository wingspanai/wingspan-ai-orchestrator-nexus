
import { create } from 'zustand';

export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done' | 'blocked';
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';
export type TeamRole = 'engineering' | 'design' | 'product' | 'marketing' | 'qa';
export type BlockerSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  utilization: number;
  skills: string[];
  allocations: {
    projectId: string;
    projectName: string;
    projectColor: string;
    percentage: number;
    hours: number;
  }[];
}

export interface Team {
  id: string;
  name: TeamRole;
  members: TeamMember[];
  utilization: number;
  availableHours: number;
  health: number;
  progress: number;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  progress: number;
  assignee: string;
  teamId: string;
  startDate: Date;
  endDate: Date;
  dependencies: string[];
  isCriticalPath: boolean;
  estimatedHours: number;
  actualHours?: number;
  tags: string[];
}

export interface Blocker {
  id: string;
  title: string;
  description: string;
  severity: BlockerSeverity;
  reporter: string;
  assignee?: TeamMember;
  duration: number;
  affectedItems: { id: string; name: string }[];
  createdAt: Date;
  resolvedAt?: Date;
}

export interface Milestone {
  id: string;
  name: string;
  date: Date;
  status: 'pending' | 'completed' | 'at-risk';
  progress: number;
}

export interface SprintData {
  number: number;
  startDate: Date;
  endDate: Date;
  velocity: number;
  burndownData: { date: Date; remaining: number; ideal: number }[];
}

export interface QualityMetrics {
  qualityScore: number;
  testCoverage: number;
  bugDensity: number;
  securityScore: number;
  performanceScore: number;
  criticalBugs: number;
  highBugs: number;
  mediumBugs: number;
  lowBugs: number;
}

export interface TeamUpdate {
  id: string;
  author: TeamMember;
  team: TeamRole;
  type: 'progress' | 'blocker' | 'milestone' | 'general';
  content: string;
  timestamp: Date;
  metrics?: { label: string; value: string }[];
  attachments?: { id: string; name: string; type: string }[];
}

interface DevelopmentStore {
  // State
  selectedProduct: string | null;
  timelineView: 'gantt' | 'roadmap' | 'sprint';
  teams: Team[];
  tasks: Task[];
  blockers: Blocker[];
  milestones: Milestone[];
  currentSprint: SprintData;
  qualityMetrics: QualityMetrics;
  teamUpdates: TeamUpdate[];
  
  // Progress metrics
  developmentProgress: number;
  daysToLaunch: number;
  activeTeamMembers: number;
  teamUtilization: number;
  activeBlockers: number;
  criticalBlockers: number;
  completedMilestones: number;
  totalMilestones: number;
  budgetSpent: number;
  budgetAllocated: number;
  
  // Actions
  setSelectedProduct: (productId: string) => void;
  setTimelineView: (view: 'gantt' | 'roadmap' | 'sprint') => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  addBlocker: (blocker: Omit<Blocker, 'id' | 'createdAt'>) => void;
  resolveBlocker: (blockerId: string) => void;
  addTeamUpdate: (update: Omit<TeamUpdate, 'id' | 'timestamp'>) => void;
  updateTeamUtilization: (teamId: string, utilization: number) => void;
  
  // Getters
  getTasksByTeam: (teamId: string) => Task[];
  getTasksByStatus: (status: TaskStatus) => Task[];
  getCriticalPathTasks: () => Task[];
  getBlockersByTeam: (teamId: string) => Blocker[];
}

export const useDevelopmentStore = create<DevelopmentStore>((set, get) => ({
  // Initial state
  selectedProduct: null,
  timelineView: 'gantt',
  teams: [
    {
      id: 'engineering',
      name: 'engineering',
      members: [
        {
          id: '1',
          name: 'John Smith',
          role: 'Senior Frontend Developer',
          avatar: '/placeholder.svg',
          utilization: 85,
          skills: ['React', 'TypeScript', 'Next.js'],
          allocations: [
            { projectId: '1', projectName: 'Product A', projectColor: '#3B82F6', percentage: 60, hours: 24 },
            { projectId: '2', projectName: 'Product B', projectColor: '#10B981', percentage: 25, hours: 10 }
          ]
        },
        {
          id: '2',
          name: 'Sarah Chen',
          role: 'Backend Developer',
          avatar: '/placeholder.svg',
          utilization: 92,
          skills: ['Node.js', 'Python', 'PostgreSQL'],
          allocations: [
            { projectId: '1', projectName: 'Product A', projectColor: '#3B82F6', percentage: 80, hours: 32 },
            { projectId: '2', projectName: 'Product B', projectColor: '#10B981', percentage: 12, hours: 5 }
          ]
        }
      ],
      utilization: 88,
      availableHours: 120,
      health: 85,
      progress: 67
    },
    {
      id: 'design',
      name: 'design',
      members: [
        {
          id: '3',
          name: 'Mike Johnson',
          role: 'UX Designer',
          avatar: '/placeholder.svg',
          utilization: 75,
          skills: ['Figma', 'User Research', 'Prototyping'],
          allocations: [
            { projectId: '1', projectName: 'Product A', projectColor: '#3B82F6', percentage: 50, hours: 20 },
            { projectId: '2', projectName: 'Product B', projectColor: '#10B981', percentage: 25, hours: 10 }
          ]
        }
      ],
      utilization: 75,
      availableHours: 40,
      health: 90,
      progress: 80
    },
    {
      id: 'product',
      name: 'product',
      members: [
        {
          id: '4',
          name: 'Emily Davis',
          role: 'Product Manager',
          avatar: '/placeholder.svg',
          utilization: 95,
          skills: ['Product Strategy', 'Analytics', 'Roadmapping'],
          allocations: [
            { projectId: '1', projectName: 'Product A', projectColor: '#3B82F6', percentage: 70, hours: 28 },
            { projectId: '2', projectName: 'Product B', projectColor: '#10B981', percentage: 25, hours: 10 }
          ]
        }
      ],
      utilization: 95,
      availableHours: 40,
      health: 88,
      progress: 85
    },
    {
      id: 'marketing',
      name: 'marketing',
      members: [
        {
          id: '5',
          name: 'Alex Wilson',
          role: 'Marketing Manager',
          avatar: '/placeholder.svg',
          utilization: 70,
          skills: ['Content Marketing', 'SEO', 'Analytics'],
          allocations: [
            { projectId: '1', projectName: 'Product A', projectColor: '#3B82F6', percentage: 40, hours: 16 },
            { projectId: '2', projectName: 'Product B', projectColor: '#10B981', percentage: 30, hours: 12 }
          ]
        }
      ],
      utilization: 70,
      availableHours: 40,
      health: 92,
      progress: 75
    }
  ],
  tasks: [
    {
      id: '1',
      name: 'Implement User Authentication',
      description: 'Build secure login and registration system',
      status: 'in-progress',
      priority: 'high',
      progress: 65,
      assignee: 'John Smith',
      teamId: 'engineering',
      startDate: new Date('2024-01-15'),
      endDate: new Date('2024-01-25'),
      dependencies: [],
      isCriticalPath: true,
      estimatedHours: 40,
      actualHours: 26,
      tags: ['frontend', 'security']
    },
    {
      id: '2',
      name: 'Design User Dashboard',
      description: 'Create mockups and prototypes for main dashboard',
      status: 'review',
      priority: 'high',
      progress: 90,
      assignee: 'Mike Johnson',
      teamId: 'design',
      startDate: new Date('2024-01-10'),
      endDate: new Date('2024-01-20'),
      dependencies: [],
      isCriticalPath: true,
      estimatedHours: 32,
      actualHours: 30,
      tags: ['design', 'ui/ux']
    },
    {
      id: '3',
      name: 'API Development',
      description: 'Build REST API endpoints',
      status: 'in-progress',
      priority: 'critical',
      progress: 45,
      assignee: 'Sarah Chen',
      teamId: 'engineering',
      startDate: new Date('2024-01-12'),
      endDate: new Date('2024-01-30'),
      dependencies: ['1'],
      isCriticalPath: true,
      estimatedHours: 60,
      actualHours: 27,
      tags: ['backend', 'api']
    }
  ],
  blockers: [
    {
      id: '1',
      title: 'Third-party API Rate Limiting',
      description: 'External payment provider is rate limiting our requests during testing',
      severity: 'high',
      reporter: 'Sarah Chen',
      assignee: {
        id: '4',
        name: 'Emily Davis',
        role: 'Product Manager',
        avatar: '/placeholder.svg',
        utilization: 95,
        skills: ['Product Strategy'],
        allocations: []
      },
      duration: 3,
      affectedItems: [
        { id: '3', name: 'Payment Integration' },
        { id: '4', name: 'User Onboarding' }
      ],
      createdAt: new Date('2024-01-18')
    },
    {
      id: '2',
      title: 'Design System Inconsistencies',
      description: 'Button styles not consistent across components',
      severity: 'medium',
      reporter: 'John Smith',
      duration: 1,
      affectedItems: [
        { id: '2', name: 'User Dashboard' }
      ],
      createdAt: new Date('2024-01-20')
    }
  ],
  milestones: [
    {
      id: '1',
      name: 'MVP Backend Complete',
      date: new Date('2024-02-01'),
      status: 'pending',
      progress: 67
    },
    {
      id: '2',
      name: 'UI Design Finalized',
      date: new Date('2024-01-25'),
      status: 'at-risk',
      progress: 85
    },
    {
      id: '3',
      name: 'Beta Testing Ready',
      date: new Date('2024-02-15'),
      status: 'pending',
      progress: 30
    }
  ],
  currentSprint: {
    number: 3,
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-01-29'),
    velocity: 23,
    burndownData: [
      { date: new Date('2024-01-15'), remaining: 40, ideal: 40 },
      { date: new Date('2024-01-16'), remaining: 38, ideal: 37 },
      { date: new Date('2024-01-17'), remaining: 35, ideal: 34 },
      { date: new Date('2024-01-18'), remaining: 32, ideal: 31 },
      { date: new Date('2024-01-19'), remaining: 28, ideal: 28 },
      { date: new Date('2024-01-22'), remaining: 25, ideal: 25 },
      { date: new Date('2024-01-23'), remaining: 22, ideal: 22 }
    ]
  },
  qualityMetrics: {
    qualityScore: 87,
    testCoverage: 82,
    bugDensity: 2.3,
    securityScore: 9.1,
    performanceScore: 245,
    criticalBugs: 1,
    highBugs: 3,
    mediumBugs: 8,
    lowBugs: 12
  },
  teamUpdates: [
    {
      id: '1',
      author: {
        id: '1',
        name: 'John Smith',
        role: 'Senior Frontend Developer',
        avatar: '/placeholder.svg',
        utilization: 85,
        skills: [],
        allocations: []
      },
      team: 'engineering',
      type: 'progress',
      content: 'Completed user authentication flow. Login and registration are working with proper validation.',
      timestamp: new Date('2024-01-21T10:30:00'),
      metrics: [
        { label: 'Progress', value: '65%' },
        { label: 'Tests', value: '12/15 passing' }
      ]
    },
    {
      id: '2',
      author: {
        id: '3',
        name: 'Mike Johnson',
        role: 'UX Designer',
        avatar: '/placeholder.svg',
        utilization: 75,
        skills: [],
        allocations: []
      },
      team: 'design',
      type: 'milestone',
      content: 'Dashboard designs are ready for developer handoff. All responsive breakpoints included.',
      timestamp: new Date('2024-01-21T14:15:00'),
      attachments: [
        { id: '1', name: 'dashboard-mockups.fig', type: 'figma' },
        { id: '2', name: 'design-specs.pdf', type: 'pdf' }
      ]
    }
  ],
  
  // Computed values
  developmentProgress: 72,
  daysToLaunch: 45,
  activeTeamMembers: 5,
  teamUtilization: 82,
  activeBlockers: 2,
  criticalBlockers: 0,
  completedMilestones: 0,
  totalMilestones: 3,
  budgetSpent: 125,
  budgetAllocated: 300,

  // Actions
  setSelectedProduct: (productId) => {
    set({ selectedProduct: productId });
  },

  setTimelineView: (view) => {
    set({ timelineView: view });
  },

  updateTask: (taskId, updates) => {
    set((state) => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, ...updates } : task
      )
    }));
  },

  addBlocker: (blockerData) => {
    const newBlocker: Blocker = {
      ...blockerData,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    
    set((state) => ({
      blockers: [...state.blockers, newBlocker],
      activeBlockers: state.activeBlockers + 1
    }));
  },

  resolveBlocker: (blockerId) => {
    set((state) => ({
      blockers: state.blockers.map(blocker =>
        blocker.id === blockerId
          ? { ...blocker, resolvedAt: new Date() }
          : blocker
      ).filter(blocker => !blocker.resolvedAt),
      activeBlockers: Math.max(0, state.activeBlockers - 1)
    }));
  },

  addTeamUpdate: (updateData) => {
    const newUpdate: TeamUpdate = {
      ...updateData,
      id: Date.now().toString(),
      timestamp: new Date()
    };
    
    set((state) => ({
      teamUpdates: [newUpdate, ...state.teamUpdates]
    }));
  },

  updateTeamUtilization: (teamId, utilization) => {
    set((state) => ({
      teams: state.teams.map(team =>
        team.id === teamId ? { ...team, utilization } : team
      )
    }));
  },

  // Getters
  getTasksByTeam: (teamId) => {
    return get().tasks.filter(task => task.teamId === teamId);
  },

  getTasksByStatus: (status) => {
    return get().tasks.filter(task => task.status === status);
  },

  getCriticalPathTasks: () => {
    return get().tasks.filter(task => task.isCriticalPath);
  },

  getBlockersByTeam: (teamId) => {
    const state = get();
    return state.blockers.filter(blocker =>
      blocker.affectedItems.some(item =>
        state.tasks.find(task => task.id === item.id)?.teamId === teamId
      )
    );
  }
}));
