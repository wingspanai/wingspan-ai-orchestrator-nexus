
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  Clock, 
  Users, 
  GitBranch, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  Target
} from 'lucide-react';
import { useDevelopmentStore } from '@/store/developmentStore';
import { format, differenceInDays } from 'date-fns';

interface TimelineViewProps {
  view: 'gantt' | 'roadmap' | 'sprint';
}

export function TimelineView({ view }: TimelineViewProps) {
  const { 
    tasks, 
    teams, 
    currentSprint, 
    milestones,
    getTasksByStatus,
    getCriticalPathTasks 
  } = useDevelopmentStore();

  if (view === 'gantt') {
    return <GanttView teams={teams} tasks={tasks} milestones={milestones} />;
  }

  if (view === 'sprint') {
    const todoTasks = getTasksByStatus('todo');
    const inProgressTasks = getTasksByStatus('in-progress');
    const reviewTasks = getTasksByStatus('review');
    const doneTasks = getTasksByStatus('done');

    return <SprintView 
      sprint={currentSprint}
      todoTasks={todoTasks}
      inProgressTasks={inProgressTasks}
      reviewTasks={reviewTasks}
      doneTasks={doneTasks}
    />;
  }

  return <RoadmapView tasks={tasks} milestones={milestones} />;
}

function GanttView({ teams, tasks, milestones }: any) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded" />
          <span>On Track</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded" />
          <span>At Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded" />
          <span>Behind Schedule</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded" />
          <span>Critical Path</span>
        </div>
      </div>

      {teams.map((team: any) => {
        const teamTasks = tasks.filter((task: any) => task.teamId === team.id);
        
        return (
          <Card key={team.id} className="border-l-4" style={{ borderLeftColor: getTeamColor(team.name) }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium capitalize">{team.name}</h3>
                  <Badge variant="outline">{team.utilization}% utilized</Badge>
                </div>
                <span className="text-sm text-gray-500">{teamTasks.length} tasks</span>
              </div>
              
              <div className="space-y-2">
                {teamTasks.map((task: any) => (
                  <TaskBar key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}

      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">Milestones</h3>
          <div className="space-y-2">
            {milestones.map((milestone: any) => (
              <div key={milestone.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span className="font-medium">{milestone.name}</span>
                  <Badge variant={milestone.status === 'completed' ? 'default' : 
                              milestone.status === 'at-risk' ? 'destructive' : 'secondary'}>
                    {milestone.status}
                  </Badge>
                </div>
                <span className="text-sm text-gray-500">
                  {format(milestone.date, 'MMM dd, yyyy')}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SprintView({ sprint, todoTasks, inProgressTasks, reviewTasks, doneTasks }: any) {
  return (
    <div className="space-y-6">
      {/* Sprint Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Sprint {sprint.number}</h3>
          <p className="text-sm text-gray-500">
            {format(sprint.startDate, 'MMM dd')} - {format(sprint.endDate, 'MMM dd, yyyy')}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-lg font-bold">{sprint.velocity}</div>
            <div className="text-xs text-gray-500">Velocity</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">{differenceInDays(sprint.endDate, new Date())}</div>
            <div className="text-xs text-gray-500">Days Left</div>
          </div>
        </div>
      </div>

      {/* Sprint Board */}
      <div className="grid grid-cols-4 gap-4">
        <TaskColumn title="To Do" count={todoTasks.length} tasks={todoTasks} />
        <TaskColumn title="In Progress" count={inProgressTasks.length} tasks={inProgressTasks} />
        <TaskColumn title="Review" count={reviewTasks.length} tasks={reviewTasks} />
        <TaskColumn title="Done" count={doneTasks.length} tasks={doneTasks} />
      </div>
    </div>
  );
}

function RoadmapView({ tasks, milestones }: any) {
  return (
    <div className="space-y-4">
      <div className="text-center py-8">
        <h3 className="text-lg font-semibold mb-2">Product Roadmap View</h3>
        <p className="text-gray-500">
          High-level roadmap visualization will be implemented here
        </p>
      </div>
    </div>
  );
}

function TaskBar({ task }: { task: any }) {
  const getTaskColor = () => {
    if (task.isCriticalPath) return 'bg-purple-500';
    if (task.progress >= 80) return 'bg-green-500';
    if (task.progress >= 40) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'done': return 'text-green-600';
      case 'in-progress': return 'text-blue-600';
      case 'review': return 'text-purple-600';
      case 'blocked': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="flex items-center gap-3 p-2 border rounded-lg hover:bg-gray-50">
      <div className={`w-2 h-8 rounded ${getTaskColor()}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium truncate">{task.name}</span>
          <Badge variant="outline" className={getStatusColor()}>
            {task.status}
          </Badge>
          {task.priority === 'critical' && (
            <AlertCircle className="w-4 h-4 text-red-500" />
          )}
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {task.assignee}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {format(task.endDate, 'MMM dd')}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {task.estimatedHours}h
          </div>
        </div>
      </div>
      <div className="w-20">
        <Progress value={task.progress} className="h-2" />
        <span className="text-xs text-gray-500">{task.progress}%</span>
      </div>
    </div>
  );
}

function TaskColumn({ title, count, tasks }: { title: string; count: number; tasks: any[] }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium">{title}</h4>
          <Badge variant="secondary">{count}</Badge>
        </div>
        <div className="space-y-2">
          {tasks.slice(0, 5).map((task) => (
            <div key={task.id} className="p-2 bg-gray-50 rounded text-sm">
              <div className="font-medium truncate">{task.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="w-4 h-4">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-xs">
                    {task.assignee.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-500">{task.assignee}</span>
              </div>
            </div>
          ))}
          {tasks.length > 5 && (
            <div className="text-xs text-gray-500 text-center py-2">
              +{tasks.length - 5} more tasks
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function getTeamColor(teamName: string) {
  switch (teamName) {
    case 'engineering': return '#3B82F6';
    case 'design': return '#8B5CF6';
    case 'product': return '#10B981';
    case 'marketing': return '#F59E0B';
    default: return '#6B7280';
  }
}
