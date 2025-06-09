
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  Code, 
  Palette, 
  Package, 
  Megaphone, 
  CheckCircle,
  Users,
  Calendar
} from 'lucide-react';
import { Team, useDevelopmentStore } from '@/store/developmentStore';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  const { getTasksByTeam } = useDevelopmentStore();
  const teamTasks = getTasksByTeam(team.id);
  const recentTasks = teamTasks.slice(0, 3);

  const getTeamIcon = (teamName: string) => {
    switch (teamName) {
      case 'engineering': return <Code className="w-5 h-5" />;
      case 'design': return <Palette className="w-5 h-5" />;
      case 'product': return <Package className="w-5 h-5" />;
      case 'marketing': return <Megaphone className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 80) return 'text-green-600 bg-green-100';
    if (health >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getTeamSpecificMetrics = () => {
    switch (team.name) {
      case 'engineering':
        return (
          <>
            <div className="flex justify-between text-sm">
              <span>Sprint Progress</span>
              <span>{team.progress}%</span>
            </div>
            <Progress value={team.progress} className="h-2" />
            <div className="flex justify-between text-sm mt-2">
              <span>Code Quality</span>
              <span>85/100</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tech Debt</span>
              <span className="text-yellow-600">24h</span>
            </div>
          </>
        );
      case 'design':
        return (
          <>
            <div className="flex justify-between text-sm">
              <span>Designs Complete</span>
              <span>{team.progress}%</span>
            </div>
            <Progress value={team.progress} className="h-2" />
            <div className="flex justify-between text-sm mt-2">
              <span>User Testing</span>
              <span>7/10 sessions</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Design System</span>
              <span className="text-green-600">92% coverage</span>
            </div>
          </>
        );
      case 'product':
        return (
          <>
            <div className="flex justify-between text-sm">
              <span>Requirements</span>
              <span>{team.progress}%</span>
            </div>
            <Progress value={team.progress} className="h-2" />
            <div className="flex justify-between text-sm mt-2">
              <span>Stakeholder Alignment</span>
              <span>8/10</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Feature Prioritization</span>
              <span className="text-green-600">Completed</span>
            </div>
          </>
        );
      case 'marketing':
        return (
          <>
            <div className="flex justify-between text-sm">
              <span>Campaign Prep</span>
              <span>{team.progress}%</span>
            </div>
            <Progress value={team.progress} className="h-2" />
            <div className="flex justify-between text-sm mt-2">
              <span>Content Ready</span>
              <span>8/12 pieces</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Launch Assets</span>
              <span className="text-green-600">Ready</span>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getTeamIcon(team.name)}
            <h3 className="font-medium capitalize">{team.name}</h3>
          </div>
          <Badge className={getHealthColor(team.health)}>
            Health: {team.health}%
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Team Metrics */}
        <div className="space-y-2">
          {getTeamSpecificMetrics()}
        </div>

        {/* Recent Work */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Active Work</h4>
          {recentTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
              <div className="flex items-center gap-2">
                <CheckCircle className={`w-3 h-3 ${
                  task.status === 'done' ? 'text-green-500' : 'text-gray-400'
                }`} />
                <span className="truncate">{task.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="w-5 h-5">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-xs">
                    {task.assignee.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Badge variant="outline" className="text-xs">
                  {task.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Team Actions */}
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            View Details
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            <Calendar className="w-3 h-3 mr-1" />
            Schedule
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
