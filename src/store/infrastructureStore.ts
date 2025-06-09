
import { create } from 'zustand';
import { InfrastructureNode, SecurityAlert, Incident, ResourceAllocation, MaintenancePrediction, ServiceTicket } from '@/types/infrastructure';

interface InfrastructureStore {
  // System Health
  overallSystemHealth: number;
  serverHealth: number;
  cloudHealth: number;
  networkHealth: number;
  databaseHealth: number;
  uptimePercentage: number;
  totalUptime: string;
  
  // Infrastructure Resources
  infrastructureNodes: InfrastructureNode[];
  infrastructureResources: InfrastructureNode[];
  
  // Security
  securityAlerts: SecurityAlert[];
  activeThreats: number;
  blockedAttacks: number;
  suspiciousActivities: number;
  vulnerabilitiesFound: number;
  currentThreatLevel: string;
  
  // Incidents
  incidents: Incident[];
  activeIncidents: number;
  criticalIncidents: number;
  highIncidents: number;
  mediumIncidents: number;
  resolvedToday: number;
  meanTimeToResolve: number;
  
  // Resource Management
  resourceAllocation: ResourceAllocation[];
  avgCpuUtilization: number;
  storageUsed: number;
  totalStorage: number;
  storagePercentage: number;
  avgResponseTime: number;
  targetResponseTime: number;
  
  // AI Operations
  maintenancePredictions: MaintenancePrediction[];
  predictionAccuracy: number;
  autoResolvedIssues: number;
  autoResolutionRate: number;
  avgResolutionTime: number;
  
  // Service Desk
  tickets: ServiceTicket[];
  openTickets: number;
  pendingTickets: number;
  
  // Actions
  updateSystemHealth: (health: number) => void;
  addSecurityAlert: (alert: SecurityAlert) => void;
  addIncident: (incident: Incident) => void;
  updateIncident: (id: string, updates: Partial<Incident>) => void;
  resolveIncident: (id: string) => void;
  acknowledgeAlert: (alertId: string) => void;
  addMaintenancePrediction: (prediction: MaintenancePrediction) => void;
}

export const useInfrastructureStore = create<InfrastructureStore>((set, get) => ({
  // Initial state
  overallSystemHealth: 94,
  serverHealth: 96,
  cloudHealth: 92,
  networkHealth: 98,
  databaseHealth: 89,
  uptimePercentage: 99.97,
  totalUptime: "247 days, 14 hours",
  
  infrastructureNodes: [
    {
      id: '1',
      name: 'web-server-01',
      type: 'server',
      status: 'healthy',
      location: 'US-East-1',
      ipAddress: '10.0.1.100',
      cpu: 45,
      memory: 67,
      storage: 34,
      networkIn: 145,
      networkOut: 89,
      uptime: 99.99,
      alerts: [],
      lastChecked: new Date()
    },
    {
      id: '2',
      name: 'db-primary-01',
      type: 'database',
      status: 'warning',
      location: 'US-East-1',
      ipAddress: '10.0.1.200',
      cpu: 78,
      memory: 85,
      storage: 91,
      networkIn: 67,
      networkOut: 123,
      uptime: 99.95,
      alerts: [
        {
          id: 'alert-1',
          type: 'capacity',
          severity: 'medium',
          message: 'Storage usage above 90%',
          timestamp: new Date(),
          acknowledged: false
        }
      ],
      lastChecked: new Date()
    }
  ],
  
  infrastructureResources: [],
  
  securityAlerts: [
    {
      id: 'sec-1',
      type: 'intrusion',
      severity: 'high',
      title: 'Suspicious Login Attempts',
      description: 'Multiple failed login attempts detected from unknown IP addresses',
      sourceIP: '192.168.1.100',
      attackType: 'Brute Force',
      riskScore: 85,
      affectedSystems: [
        { id: '1', name: 'Authentication Server' }
      ],
      timestamp: new Date(),
      status: 'open'
    }
  ],
  
  activeThreats: 3,
  blockedAttacks: 247,
  suspiciousActivities: 12,
  vulnerabilitiesFound: 5,
  currentThreatLevel: 'Medium',
  
  incidents: [
    {
      id: 'inc-001',
      title: 'Database Performance Degradation',
      description: 'Users experiencing slow response times on main application',
      severity: 'high',
      impact: 'Performance degradation affecting 500+ users',
      affectedUsers: 547,
      affectedServices: [
        { id: 'svc-1', name: 'User Management', status: 'degraded' },
        { id: 'svc-2', name: 'Reporting System', status: 'degraded' }
      ],
      assignee: {
        id: 'user-1',
        name: 'Alice Johnson',
        avatar: '/avatars/alice.jpg'
      },
      status: 'investigating',
      createdAt: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
      currentStep: 'Root Cause Analysis',
      currentStepNumber: 2,
      totalSteps: 5,
      age: 45
    }
  ],
  
  activeIncidents: 4,
  criticalIncidents: 1,
  highIncidents: 2,
  mediumIncidents: 1,
  resolvedToday: 7,
  meanTimeToResolve: 45,
  
  resourceAllocation: [
    {
      id: '1',
      type: 'CPU',
      total: 100,
      utilized: 65,
      available: 25,
      reserved: 10,
      unit: '%',
      allocation: [
        { name: 'Web Services', value: 35, color: '#8B5CF6' },
        { name: 'Database', value: 20, color: '#3B82F6' },
        { name: 'Cache', value: 10, color: '#10B981' },
        { name: 'Available', value: 25, color: '#6B7280' },
        { name: 'Reserved', value: 10, color: '#F59E0B' }
      ]
    }
  ],
  
  avgCpuUtilization: 65,
  storageUsed: 8.5,
  totalStorage: 12,
  storagePercentage: 71,
  avgResponseTime: 145,
  targetResponseTime: 200,
  
  maintenancePredictions: [
    {
      id: 'pred-1',
      system: 'Storage Array SAN-01',
      failureType: 'Hard Drive Failure',
      daysUntilFailure: 14,
      confidence: 87,
      urgency: 'medium',
      affectedUsers: 200,
      downtime: 4,
      costImpact: 15000
    }
  ],
  
  predictionAccuracy: 89,
  autoResolvedIssues: 23,
  autoResolutionRate: 78,
  avgResolutionTime: 12,
  
  tickets: [
    {
      id: 'tkt-001',
      title: 'Password Reset Request',
      description: 'Unable to reset password using self-service portal',
      priority: 'low',
      category: 'Account Management',
      status: 'open',
      requester: {
        id: 'user-2',
        name: 'Bob Smith',
        avatar: '/avatars/bob.jpg'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  
  openTickets: 15,
  pendingTickets: 8,
  
  // Actions
  updateSystemHealth: (health) => set({ overallSystemHealth: health }),
  
  addSecurityAlert: (alert) => set((state) => ({
    securityAlerts: [alert, ...state.securityAlerts]
  })),
  
  addIncident: (incident) => set((state) => ({
    incidents: [incident, ...state.incidents],
    activeIncidents: state.activeIncidents + 1
  })),
  
  updateIncident: (id, updates) => set((state) => ({
    incidents: state.incidents.map(incident =>
      incident.id === id ? { ...incident, ...updates } : incident
    )
  })),
  
  resolveIncident: (id) => set((state) => ({
    incidents: state.incidents.map(incident =>
      incident.id === id 
        ? { ...incident, status: 'resolved' as const, resolvedAt: new Date() }
        : incident
    ),
    activeIncidents: Math.max(0, state.activeIncidents - 1),
    resolvedToday: state.resolvedToday + 1
  })),
  
  acknowledgeAlert: (alertId) => set((state) => ({
    securityAlerts: state.securityAlerts.map(alert =>
      alert.id === alertId ? { ...alert, status: 'investigating' as const } : alert
    )
  })),
  
  addMaintenancePrediction: (prediction) => set((state) => ({
    maintenancePredictions: [prediction, ...state.maintenancePredictions]
  }))
}));
