
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  TrendingUp, 
  AlertCircle, 
  BarChart, 
  ShowChart,
  ChevronRight
} from 'lucide-react';

interface PerformanceMetricsSectionProps {
  timeframe: string;
}

export function PerformanceMetricsSection({ timeframe }: PerformanceMetricsSectionProps) {
  const [viewMode, setViewMode] = useState('overview');

  // Mock department data
  const departments = [
    {
      id: 'sales',
      name: 'Sales',
      manager: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      score: 92,
      productivity: 88,
      budgetUtilization: 75,
      goalAchievement: 95,
      icon: '📈'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      manager: 'Alex Chen',
      avatar: '/avatars/alex.jpg',
      score: 89,
      productivity: 94,
      budgetUtilization: 82,
      goalAchievement: 87,
      icon: '⚙️'
    },
    {
      id: 'marketing',
      name: 'Marketing',
      manager: 'Emma Davis',
      avatar: '/avatars/emma.jpg',
      score: 85,
      productivity: 81,
      budgetUtilization: 68,
      goalAchievement: 92,
      icon: '📢'
    },
    {
      id: 'support',
      name: 'Customer Support',
      manager: 'Mike Wilson',
      avatar: '/avatars/mike.jpg',
      score: 91,
      productivity: 89,
      budgetUtilization: 71,
      goalAchievement: 96,
      icon: '🎧'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-display">Performance Metrics</h2>
        <div className="flex items-center gap-2">
          <Button 
            variant={viewMode === 'overview' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('overview')}
          >
            Overview
          </Button>
          <Button 
            variant={viewMode === 'detailed' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('detailed')}
          >
            Detailed
          </Button>
          <Button 
            variant={viewMode === 'compare' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('compare')}
          >
            Compare
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Performance Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Key Performance Indicators</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <ShowChart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg mb-4">
              <div className="text-center text-muted-foreground">
                <ShowChart className="h-12 w-12 mx-auto mb-2" />
                <p>Performance Chart Visualization</p>
                <p className="text-sm">Revenue, Growth, Efficiency Trends</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm">Revenue showing 12% improvement</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <span className="text-sm">Customer acquisition below target by 8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Department Performance</CardTitle>
              <select className="text-sm border border-border rounded px-2 py-1">
                <option>By Score</option>
                <option>By Growth</option>
                <option>By Size</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departments.map((dept) => (
                <div key={dept.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-lg">{dept.icon}</div>
                      <div>
                        <div className="font-medium">{dept.name}</div>
                        <div className="text-sm text-muted-foreground">{dept.manager}</div>
                      </div>
                    </div>
                    <Badge className="ai-gradient text-white">
                      {dept.score}/100
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Productivity</span>
                      <span>{dept.productivity}%</span>
                    </div>
                    <Progress value={dept.productivity} className="h-1.5" />
                    
                    <div className="flex items-center justify-between text-sm">
                      <span>Budget Utilization</span>
                      <span>{dept.budgetUtilization}%</span>
                    </div>
                    <Progress value={dept.budgetUtilization} className="h-1.5" />
                    
                    <div className="flex items-center justify-between text-sm">
                      <span>Goal Achievement</span>
                      <span>{dept.goalAchievement}%</span>
                    </div>
                    <Progress value={dept.goalAchievement} className="h-1.5" />
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full mt-3">
                    View Details <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
