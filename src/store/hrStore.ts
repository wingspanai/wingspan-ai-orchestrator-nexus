
import { create } from 'zustand';
import { Employee, Team, PerformanceReview, JobPosition, HRInsight, EngagementData } from '@/types/hr';

interface HRState {
  // Employee Management
  employees: Employee[];
  teams: Team[];
  selectedEmployee: Employee | null;
  
  // Performance Management
  performanceReviews: PerformanceReview[];
  reviewCycle: string;
  performanceDistribution: Record<string, number>;
  
  // Talent Acquisition
  openPositions: JobPosition[];
  recruitingMetrics: {
    totalApplications: number;
    screenedCandidates: number;
    phoneInterviews: number;
    onsiteInterviews: number;
    offersMade: number;
    hired: number;
    avgTimeToFill: number;
    avgCostPerHire: number;
    offerAcceptance: number;
  };
  
  // Engagement & Culture
  engagementData: EngagementData;
  cultureMetrics: {
    wellbeingScore: number;
    inclusionScore: number;
    innovationScore: number;
    recognitionScore: number;
  };
  
  // AI Insights
  hrInsights: HRInsight[];
  
  // Compensation
  compensationData: {
    monthlyPayroll: number;
    avgSalary: number;
    benefitsCost: number;
    equityGranted: number;
    payEquityScore: number;
  };
  
  // Actions
  setSelectedEmployee: (employee: Employee | null) => void;
  updateEmployee: (id: string, updates: Partial<Employee>) => void;
  addEmployee: (employee: Employee) => void;
  removeEmployee: (id: string) => void;
  setReviewCycle: (cycle: string) => void;
  addHRInsight: (insight: HRInsight) => void;
  dismissInsight: (id: string) => void;
  updateEngagementScore: (score: number) => void;
}

export const useHRStore = create<HRState>((set, get) => ({
  employees: [
    {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah.chen@company.com',
      avatar: '/placeholder.svg',
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco',
      hireDate: new Date('2022-01-15'),
      managerId: '2',
      directReports: [],
      status: 'active',
      salary: 165000,
      performanceScore: 4.2,
      engagementScore: 85,
      skills: [
        { name: 'React', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'Node.js', level: 3 }
      ]
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      email: 'michael.rodriguez@company.com',
      avatar: '/placeholder.svg',
      title: 'Engineering Manager',
      department: 'Engineering',
      location: 'Austin',
      hireDate: new Date('2020-03-10'),
      directReports: ['1', '3'],
      status: 'active',
      salary: 180000,
      performanceScore: 4.5,
      engagementScore: 90,
      skills: [
        { name: 'Leadership', level: 5 },
        { name: 'Python', level: 4 },
        { name: 'Architecture', level: 4 }
      ]
    }
  ],
  
  teams: [
    {
      id: '1',
      name: 'Frontend Team',
      lead: {
        id: '2',
        name: 'Michael Rodriguez',
        email: 'michael.rodriguez@company.com',
        avatar: '/placeholder.svg',
        title: 'Engineering Manager',
        department: 'Engineering',
        location: 'Austin',
        hireDate: new Date('2020-03-10'),
        directReports: ['1', '3'],
        status: 'active',
        salary: 180000,
        skills: []
      },
      members: [],
      department: 'Engineering',
      color: '#8B5CF6',
      icon: '💻',
      engagementScore: 87,
      performanceScore: 92,
      retentionRate: 95,
      retentionTrend: 2,
      memberCount: 8
    }
  ],
  
  selectedEmployee: null,
  
  performanceReviews: [],
  reviewCycle: 'q1-2025',
  performanceDistribution: {
    exceeds: 15,
    meets: 70,
    developing: 12,
    needsImprovement: 3
  },
  
  openPositions: [
    {
      id: '1',
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'full-time',
      status: 'open',
      applicants: 47,
      daysOpen: 12,
      hiringManager: 'Michael Rodriguez',
      budget: { min: 140000, max: 180000 }
    }
  ],
  
  recruitingMetrics: {
    totalApplications: 847,
    screenedCandidates: 203,
    phoneInterviews: 89,
    onsiteInterviews: 34,
    offersMade: 12,
    hired: 8,
    avgTimeToFill: 32,
    avgCostPerHire: 8500,
    offerAcceptance: 75
  },
  
  engagementData: {
    score: 82,
    trend: 3,
    drivers: [
      { name: 'Work-Life Balance', score: 88, impact: 'high' },
      { name: 'Career Growth', score: 75, impact: 'high' },
      { name: 'Compensation', score: 85, impact: 'medium' },
      { name: 'Management', score: 80, impact: 'high' }
    ],
    feedback: []
  },
  
  cultureMetrics: {
    wellbeingScore: 8.2,
    inclusionScore: 8.8,
    innovationScore: 7.5,
    recognitionScore: 8.1
  },
  
  hrInsights: [
    {
      id: '1',
      category: 'retention',
      priority: 'high',
      title: 'Flight Risk Detected',
      description: '3 high-performing engineers show indicators of potential departure',
      affectedEmployees: [],
      confidence: 85,
      timestamp: new Date()
    }
  ],
  
  compensationData: {
    monthlyPayroll: 2.4,
    avgSalary: 125,
    benefitsCost: 28,
    equityGranted: 15.5,
    payEquityScore: 94
  },
  
  setSelectedEmployee: (employee) => set({ selectedEmployee: employee }),
  
  updateEmployee: (id, updates) => set((state) => ({
    employees: state.employees.map(emp => 
      emp.id === id ? { ...emp, ...updates } : emp
    )
  })),
  
  addEmployee: (employee) => set((state) => ({
    employees: [...state.employees, employee]
  })),
  
  removeEmployee: (id) => set((state) => ({
    employees: state.employees.filter(emp => emp.id !== id)
  })),
  
  setReviewCycle: (cycle) => set({ reviewCycle: cycle }),
  
  addHRInsight: (insight) => set((state) => ({
    hrInsights: [insight, ...state.hrInsights]
  })),
  
  dismissInsight: (id) => set((state) => ({
    hrInsights: state.hrInsights.filter(insight => insight.id !== id)
  })),
  
  updateEngagementScore: (score) => set((state) => ({
    engagementData: { ...state.engagementData, score }
  }))
}));
