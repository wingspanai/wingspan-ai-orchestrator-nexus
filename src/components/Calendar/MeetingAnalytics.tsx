
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Clock,
  Users,
  Target,
  TrendingUp,
  AlertCircle,
  UserPlus,
  RefreshCw,
  UserMinus,
  PieChart,
  BarChart,
  Grid3X3
} from 'lucide-react';

export const MeetingAnalytics = () => {
  const [analyticsTimeframe, setAnalyticsTimeframe] = useState('month');
  const [viewMode, setViewMode] = useState('individual');

  // Mock analytics data
  const totalMeetingHours = 124;
  const avgFocusTime = 68;
  const longestFocusBlock = 3.5;
  const meetingFragmentation = 0.75;
  const industryFocusTime = 72;
  const peakMeetingTimes = '10am-11am, 2pm-3pm';
  const focusTimeSlots = '9am-10am, 4pm-5pm';

  const meetingTypes = [
    { id: '1', name: 'Stand-ups', count: 25, hours: 12.5, cost: 1800, color: '#8B5CF6', effectivenessScore: 85 },
    { id: '2', name: 'Reviews', count: 8, hours: 24, cost: 3600, color: '#3B82F6', effectivenessScore: 78 },
    { id: '3', name: 'Planning', count: 12, hours: 36, cost: 5400, color: '#10B981', effectivenessScore: 82 },
    { id: '4', name: 'Status Updates', count: 15, hours: 22.5, cost: 3375, color: '#F59E0B', effectivenessScore: 45 },
    { id: '5', name: 'Training', count: 6, hours: 18, cost: 2700, color: '#EF4444', effectivenessScore: 92 }
  ];

  const topAttendees = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Product Manager',
      avatar: '/avatars/sarah.jpg',
      weeklyHours: 18,
      weeklyCost: 2700,
      focusTime: 52
    },
    {
      id: '2', 
      name: 'Mike Rodriguez',
      role: 'Engineering Lead',
      avatar: '/avatars/mike.jpg',
      weeklyHours: 22,
      weeklyCost: 3300,
      focusTime: 48
    },
    {
      id: '3',
      name: 'Emma Thompson',
      role: 'Designer',
      avatar: '/avatars/emma.jpg',
      weeklyHours: 14,
      weeklyCost: 2100,
      focusTime: 71
    }
  ];

  // Mock heatmap data (simplified for demo)
  const meetingLoadData = [
    [0, 1, 3, 2, 1], // 8am row
    [2, 4, 5, 4, 3], // 9am row
    [4, 6, 7, 6, 5], // 10am row
    [3, 5, 6, 5, 4], // 11am row
    [1, 2, 3, 2, 1], // 12pm row
    [2, 3, 4, 3, 2], // 1pm row
    [3, 5, 6, 5, 4], // 2pm row
    [4, 6, 7, 6, 5], // 3pm row
    [2, 4, 5, 4, 3], // 4pm row
    [1, 3, 4, 3, 2], // 5pm row
    [0, 1, 2, 1, 1]  // 6pm row
  ];

  const getHeatmapColor = (value: number) => {
    const intensity = value / 7; // Normalize to 0-1
    const opacity = Math.min(intensity, 1);
    return `rgba(139, 92, 246, ${opacity})`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Meeting Analytics</h2>
        <select 
          value={analyticsTimeframe}
          onChange={(e) => setAnalyticsTimeframe(e.target.value)}
          className="border rounded-lg px-3 py-2 bg-background"
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Meeting Load Heatmap */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Meeting Load Distribution
              <Button variant="ghost" size="sm">
                <AlertCircle className="h-4 w-4" />
              </Button>
            </CardTitle>
            <p className="text-sm text-muted-foreground">Hours spent in meetings by day and time</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="grid grid-cols-6 gap-1 text-xs text-center">
                <div></div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
              </div>
              
              {meetingLoadData.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-6 gap-1">
                  <div className="text-xs text-muted-foreground text-right pr-2">
                    {8 + rowIndex}:00
                  </div>
                  {row.map((value, colIndex) => (
                    <div
                      key={colIndex}
                      className="h-6 w-full rounded border cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: getHeatmapColor(value) }}
                      title={`${value} hours`}
                    />
                  ))}
                </div>
              ))}
            </div>
            
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                <span>Peak meeting times: {peakMeetingTimes}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-green-500" />
                <span>Best focus time slots: {focusTimeSlots}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meeting Type Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Meeting Type Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold">{totalMeetingHours}</div>
                <div className="text-sm text-muted-foreground">Total Hours</div>
              </div>
              
              <div className="space-y-3">
                {meetingTypes.map(type => (
                  <div key={type.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: type.color }}
                      />
                      <div>
                        <div className="font-medium text-sm">{type.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {type.count} meetings • {type.hours}h • ${type.cost}
                        </div>
                      </div>
                    </div>
                    <Badge variant={type.effectivenessScore > 70 ? 'default' : 'secondary'}>
                      {type.effectivenessScore}% effective
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Focus Time Analysis */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Focus Time Analysis</CardTitle>
            <div className="flex items-center bg-muted rounded-lg p-1">
              <Button 
                variant={viewMode === 'individual' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('individual')}
              >
                Individual
              </Button>
              <Button 
                variant={viewMode === 'team' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('team')}
              >
                Team
              </Button>
              <Button 
                variant={viewMode === 'department' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('department')}
              >
                Department
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{avgFocusTime}%</div>
              <div className="text-sm text-muted-foreground">Average Focus Time</div>
              <div className="text-xs text-muted-foreground mt-1">Industry avg: {industryFocusTime}%</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{longestFocusBlock}h</div>
              <div className="text-sm text-muted-foreground">Longest Focus Block</div>
              <div className="text-xs text-muted-foreground mt-1">Aim for 3-4h blocks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{meetingFragmentation}</div>
              <div className="text-sm text-muted-foreground">Day Fragmentation</div>
              <Badge variant={meetingFragmentation > 0.7 ? 'destructive' : 'default'} className="mt-1">
                {meetingFragmentation > 0.7 ? 'High' : 'Moderate'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Attendees */}
      <Card>
        <CardHeader>
          <CardTitle>Highest Meeting Load</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topAttendees.map(attendee => (
              <div key={attendee.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={attendee.avatar} />
                    <AvatarFallback>{attendee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{attendee.name}</div>
                    <div className="text-sm text-muted-foreground">{attendee.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <div className="font-medium">{attendee.weeklyHours}h</div>
                    <div className="text-muted-foreground">per week</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">${attendee.weeklyCost}</div>
                    <div className="text-muted-foreground">cost</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{attendee.focusTime}%</div>
                    <div className="text-muted-foreground">focus time</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
