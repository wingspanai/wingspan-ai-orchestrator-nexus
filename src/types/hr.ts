
export interface Employee {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  title: string;
  department: string;
  location: string;
  hireDate: Date;
  managerId?: string;
  directReports: string[];
  status: 'active' | 'inactive' | 'on-leave';
  salary: number;
  performanceScore?: number;
  engagementScore?: number;
  skills: Array<{
    name: string;
    level: number; // 1-5
  }>;
}

export interface Team {
  id: string;
  name: string;
  lead: Employee;
  members: Employee[];
  department: string;
  color: string;
  icon: string;
  engagementScore: number;
  performanceScore: number;
  retentionRate: number;
  retentionTrend: number;
  memberCount: number;
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  reviewerId: string;
  period: string;
  status: 'not-started' | 'in-progress' | 'completed';
  rating: 'exceeds' | 'meets' | 'developing' | 'needs-improvement';
  goals: Array<{
    id: string;
    title: string;
    progress: number;
    status: 'completed' | 'in-progress' | 'not-started' | 'at-risk';
  }>;
  createdAt: Date;
  dueDate: Date;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  status: 'open' | 'closed' | 'on-hold';
  applicants: number;
  daysOpen: number;
  hiringManager: string;
  budget: {
    min: number;
    max: number;
  };
}

export interface HRInsight {
  id: string;
  category: 'retention' | 'performance' | 'engagement' | 'compensation';
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  affectedEmployees: Employee[];
  confidence: number;
  timestamp: Date;
}

export interface EngagementData {
  score: number;
  trend: number;
  drivers: Array<{
    name: string;
    score: number;
    impact: 'high' | 'medium' | 'low';
  }>;
  feedback: Array<{
    id: string;
    content: string;
    sentiment: 'positive' | 'neutral' | 'negative';
    anonymous: boolean;
    employee?: string;
    tags: string[];
    timestamp: Date;
  }>;
}
