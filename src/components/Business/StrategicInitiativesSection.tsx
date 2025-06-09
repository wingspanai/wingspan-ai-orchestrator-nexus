
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Plus, 
  Filter, 
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

export function StrategicInitiativesSection() {
  const totalInitiatives = 12;
  const completedInitiatives = 4;
  const inProgressInitiatives = 6;
  const plannedInitiatives = 2;

  const priorityInitiatives = [
    {
      id: 1,
      name: 'AI Platform Integration',
      owner: { name: 'Alice Cooper', avatar: '/avatars/alice.jpg' },
      priority: 'high',
      progress: 78,
      budgetUsed: 320,
      totalBudget: 500,
      isDelayed: false,
      impactLevel: 'high',
      currentMilestone: 2,
      milestones: [
        { id: 1, name: 'Research & Planning', completed: true },
        { id: 2, name: 'Development Phase 1', completed: true },
        { id: 3, name: 'Beta Testing', completed: false },
        { id: 4, name: 'Production Rollout', completed: false }
      ]
    },
    {
      id: 2,
      name: 'Customer Portal Redesign',
      owner: { name: 'Bob Martinez', avatar: '/avatars/bob.jpg' },
      priority: 'medium',
      progress: 45,
      budgetUsed: 180,
      totalBudget: 300,
      isDelayed: true,
      impactLevel: 'medium',
      currentMilestone: 1,
      milestones: [
        { id: 1, name: 'UX Research', completed: true },
        { id: 2, name: 'Design Phase', completed: false },
        { id: 3, name: 'Development', completed: false },
        { id: 4, name: 'Launch', completed: false }
      ]
    },
    {
      id: 3,
      name: 'Mobile App Launch',
      owner: { name: 'Carol Davis', avatar: '/avatars/carol.jpg' },
      priority: 'high',
      progress: 92,
      budgetUsed: 450,
      totalBudget: 480,
      isDelayed: false,
      impactLevel: 'high',
      currentMilestone: 3,
      milestones: [
        { id: 1, name: 'Development', completed: true },
        { id: 2, name: 'Testing', completed: true },
        { id: 3, name: 'App Store Review', completed: false },
        { id: 4, name: 'Marketing Launch', completed: false }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'low':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getImpactColor = (level: string) => {
    switch (level) {
      case 'high':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'medium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-display">Strategic Initiatives</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Initiative
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Overview Ring Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Initiative Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted/20"
                  />
                  {/* Completed segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#10B981"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${(completedInitiatives / totalInitiatives) * 251} 251`}
                    strokeLinecap="round"
                  />
                  {/* In Progress segment */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#3B82F6"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${(inProgressInitiatives / totalInitiatives) * 251} 251`}
                    strokeDashoffset={-((completedInitiatives / totalInitiatives) * 251)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold font-display">{totalInitiatives}</div>
                  <div className="text-xs text-muted-foreground">Total</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-sm">Completed</span>
                </div>
                <span className="text-sm font-medium">{completedInitiatives}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm">In Progress</span>
                </div>
                <span className="text-sm font-medium">{inProgressInitiatives}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full" />
                  <span className="text-sm">Planned</span>
                </div>
                <span className="text-sm font-medium">{plannedInitiatives}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Initiative Cards */}
        <div className="lg:col-span-3 space-y-4">
          {priorityInitiatives.map((initiative) => (
            <Card key={initiative.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-semibold">{initiative.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={initiative.owner.avatar} />
                          <AvatarFallback className="text-xs">
                            {initiative.owner.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          {initiative.owner.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getPriorityColor(initiative.priority)}>
                    {initiative.priority} Priority
                  </Badge>
                </div>

                <div className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">{initiative.progress}%</span>
                    </div>
                    <Progress value={initiative.progress} className="h-2" />
                    
                    {/* Milestones */}
                    <div className="flex items-center gap-2 mt-2">
                      {initiative.milestones.map((milestone, index) => (
                        <div
                          key={milestone.id}
                          className="flex items-center gap-1"
                        >
                          {milestone.completed ? (
                            <CheckCircle className="h-3 w-3 text-green-600" />
                          ) : index === initiative.currentMilestone ? (
                            <Clock className="h-3 w-3 text-blue-600" />
                          ) : (
                            <div className="h-3 w-3 border border-gray-300 rounded-full" />
                          )}
                          <span className="text-xs text-muted-foreground">
                            {milestone.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">Budget</div>
                        <div className="text-xs text-muted-foreground">
                          ${initiative.budgetUsed}K / ${initiative.totalBudget}K
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">Timeline</div>
                        <div className={`text-xs ${
                          initiative.isDelayed ? 'text-amber-600' : 'text-green-600'
                        }`}>
                          {initiative.isDelayed ? 'Delayed' : 'On Track'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">Impact</div>
                        <Badge className={`text-xs ${getImpactColor(initiative.impactLevel)}`}>
                          {initiative.impactLevel}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <Button size="sm">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Update
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
