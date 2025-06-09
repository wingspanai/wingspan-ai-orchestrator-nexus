
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Clock, 
  Calendar, 
  Users, 
  AlertCircle, 
  GitBranch, 
  DollarSign,
  FileText,
  BarChart,
  Map,
  Zap,
  Code,
  Palette,
  Package,
  Megaphone,
  Brain,
  RefreshCw,
  UserPlus
} from 'lucide-react';
import { useDevelopmentStore } from '@/store/developmentStore';
import { TeamCard } from './TeamCard';
import { TimelineView } from './TimelineView';
import { BlockerManagement } from './BlockerManagement';
import { QualityDashboard } from './QualityDashboard';

export function DevelopmentDashboard() {
  const {
    developmentProgress,
    daysToLaunch,
    activeTeamMembers,
    teamUtilization,
    activeBlockers,
    criticalBlockers,
    completedMilestones,
    totalMilestones,
    budgetSpent,
    budgetAllocated,
    timelineView,
    setTimelineView,
    teams,
    milestones
  } = useDevelopmentStore();

  const nextMilestone = milestones.find(m => m.status === 'pending');
  const scheduleStatus = daysToLaunch > 60 ? 'on-track' : daysToLaunch > 30 ? 'at-risk' : 'critical';

  const getMetricIcon = (type: string) => {
    switch (type) {
      case 'progress': return <Clock className="w-4 h-4" />;
      case 'schedule': return <Calendar className="w-4 h-4" />;
      case 'team': return <Users className="w-4 h-4" />;
      case 'blockers': return <AlertCircle className="w-4 h-4" />;
      case 'milestones': return <GitBranch className="w-4 h-4" />;
      case 'budget': return <DollarSign className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'text-green-600';
      case 'at-risk': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Development Command Center</h1>
            <p className="text-blue-100 mt-2">
              Cross-functional coordination, resource optimization, and intelligent progress tracking
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">
              <Users className="w-4 h-4 mr-2" />
              Resource Planner
            </Button>
            <Button variant="secondary">
              <GitBranch className="w-4 h-4 mr-2" />
              Dependencies
            </Button>
            <Button variant="secondary">
              <FileText className="w-4 h-4 mr-2" />
              Status Report
            </Button>
          </div>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {getMetricIcon('progress')}
              <div>
                <div className="text-2xl font-bold">{developmentProgress}%</div>
                <div className="text-sm text-muted-foreground">Overall Progress</div>
                <div className="text-xs text-green-600">+5% this week</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {getMetricIcon('schedule')}
              <div>
                <div className="text-2xl font-bold">{daysToLaunch}</div>
                <div className="text-sm text-muted-foreground">Days to Launch</div>
                <div className={`text-xs ${getStatusColor(scheduleStatus)}`}>
                  {scheduleStatus.replace('-', ' ')}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {getMetricIcon('team')}
              <div>
                <div className="text-2xl font-bold">{activeTeamMembers}</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
                <Progress value={teamUtilization} className="w-16 h-2 mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {getMetricIcon('blockers')}
              <div>
                <div className="text-2xl font-bold">{activeBlockers}</div>
                <div className="text-sm text-muted-foreground">Active Blockers</div>
                <div className="text-xs text-red-600">
                  {criticalBlockers} critical
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {getMetricIcon('milestones')}
              <div>
                <div className="text-2xl font-bold">{completedMilestones}/{totalMilestones}</div>
                <div className="text-sm text-muted-foreground">Milestones</div>
                <div className="text-xs text-gray-600">
                  Next: {nextMilestone?.name}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {getMetricIcon('budget')}
              <div>
                <div className="text-2xl font-bold">${budgetSpent}K</div>
                <div className="text-sm text-muted-foreground">Budget Used</div>
                <Progress value={(budgetSpent / budgetAllocated) * 100} className="w-16 h-2 mt-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Timeline View */}
        <div className="col-span-9 space-y-6">
          {/* Timeline Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Development Timeline</CardTitle>
                <div className="flex items-center gap-2">
                  <Select value={timelineView} onValueChange={(value: any) => setTimelineView(value)}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gantt">
                        <div className="flex items-center gap-2">
                          <BarChart className="w-4 h-4" />
                          Gantt Chart
                        </div>
                      </SelectItem>
                      <SelectItem value="roadmap">
                        <div className="flex items-center gap-2">
                          <Map className="w-4 h-4" />
                          Roadmap
                        </div>
                      </SelectItem>
                      <SelectItem value="sprint">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Sprint View
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <TimelineView view={timelineView} />
            </CardContent>
          </Card>

          {/* Team Coordination Hub */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Cross-Functional Team Status
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Coordination Score: 85%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {teams.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Blocker Management */}
          <BlockerManagement />

          {/* Quality Dashboard */}
          <QualityDashboard />
        </div>

        {/* Right Sidebar - AI Assistant & Quick Actions */}
        <div className="col-span-3 space-y-4">
          {/* AI Assistant */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Development AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive">Critical</Badge>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Engineering team velocity has decreased 23% this sprint. 
                    Primary cause: 3 senior developers allocated to bug fixes.
                  </p>
                  <p className="text-sm font-medium text-gray-800 mb-3">
                    Consider postponing Feature X to allocate resources back to 
                    critical path items.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Apply Fix</Button>
                    <Button size="sm" variant="outline">Analyze</Button>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Optimization</Badge>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Parallel work opportunity detected: Design mockups for 
                    Module B can start now without waiting for Module A completion.
                  </p>
                  <p className="text-sm font-medium text-green-600">
                    Could save 5 days on timeline
                  </p>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Launch Date Prediction</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Best Case:</span>
                    <span className="font-medium">Feb 28, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Likely:</span>
                    <span className="font-medium">Mar 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Worst Case:</span>
                    <span className="font-medium">Apr 2, 2024</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Report Blocker
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Schedule Review
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Update Progress
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Request Resources
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Team Updates Feed */}
          <Card>
            <CardHeader>
              <CardTitle>Team Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-100 text-blue-800">Engineering</Badge>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    <span className="text-sm font-medium">John Smith</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Completed user authentication flow. Login and registration are working with proper validation.
                  </p>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-100 text-purple-800">Design</Badge>
                    <span className="text-xs text-gray-500">4h ago</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    <span className="text-sm font-medium">Mike Johnson</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Dashboard designs are ready for developer handoff. All responsive breakpoints included.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
