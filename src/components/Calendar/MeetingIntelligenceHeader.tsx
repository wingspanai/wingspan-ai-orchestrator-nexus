
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  RefreshCw,
  Cpu,
  Users,
  Clock,
  Calendar,
  Target,
  Bell,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

interface MeetingIntelligenceHeaderProps {
  dateRange: string;
  onDateRangeChange: (range: string) => void;
}

export const MeetingIntelligenceHeader = ({ dateRange, onDateRangeChange }: MeetingIntelligenceHeaderProps) => {
  // Mock data - in real app this would come from props or API
  const todayMeetingCost = 2840;
  const todayAttendees = 47;
  const todayMeetingHours = 18;
  const todayMeetingCount = 12;
  const weekMeetingCost = 14200;
  const monthMeetingCost = 58600;
  const weekCostTrend = -8;
  const monthCostTrend = 12;
  const potentialSavings = 8400;
  const savableHours = 24;
  const optimizationScore = 72;
  const effectivenessScore = 78;
  const relevanceScore = 69;
  const efficiencyScore = 75;
  const calendarsSynced = true;

  return (
    <div className="space-y-6">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Meeting Intelligence</h1>
          <p className="text-muted-foreground">Optimize time, reduce costs, increase productivity</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${calendarsSynced ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm text-muted-foreground">
              {calendarsSynced ? 'All calendars synced' : 'Sync required'}
            </span>
            <Button variant="ghost" size="sm">
              <RefreshCw className="h-4 w-4" />
              Sync Now
            </Button>
          </div>
          <Button>
            <Cpu className="h-4 w-4 mr-2" />
            AI Optimize Schedule
          </Button>
        </div>
      </div>

      {/* Meeting Cost Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cost Counter Hero */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-800/20">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left">
                <p className="text-sm text-muted-foreground mb-2">Today's Meeting Cost</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl text-muted-foreground">$</span>
                  <span className="text-6xl font-bold">{todayMeetingCost.toLocaleString()}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{todayAttendees} attendees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{todayMeetingHours} hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{todayMeetingCount} meetings</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mt-6 lg:mt-0">
                <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-semibold">${weekMeetingCost.toLocaleString()}</p>
                  <div className="flex items-center justify-center gap-1 text-sm">
                    {weekCostTrend > 0 ? (
                      <TrendingUp className="h-4 w-4 text-red-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-green-500" />
                    )}
                    <span className={weekCostTrend > 0 ? 'text-red-500' : 'text-green-500'}>
                      {Math.abs(weekCostTrend)}%
                    </span>
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-2xl font-semibold">${monthMeetingCost.toLocaleString()}</p>
                  <div className="flex items-center justify-center gap-1 text-sm">
                    {monthCostTrend > 0 ? (
                      <TrendingUp className="h-4 w-4 text-red-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-green-500" />
                    )}
                    <span className={monthCostTrend > 0 ? 'text-red-500' : 'text-green-500'}>
                      {Math.abs(monthCostTrend)}%
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-800/20 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">Potential Savings</p>
                  <p className="text-2xl font-semibold text-green-600">${potentialSavings.toLocaleString()}/mo</p>
                  <p className="text-sm text-muted-foreground">{savableHours} hours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Optimization Score */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Optimization Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-gray-200"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={`${(optimizationScore / 100) * 314} 314`}
                    className="text-purple-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">{optimizationScore}</span>
                  <span className="text-sm text-muted-foreground">Score</span>
                </div>
              </div>
              
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span className="text-sm">Meeting Effectiveness</span>
                  </div>
                  <span className="text-sm font-medium">{effectivenessScore}/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Attendee Relevance</span>
                  </div>
                  <span className="text-sm font-medium">{relevanceScore}/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Time Efficiency</span>
                  </div>
                  <span className="text-sm font-medium">{efficiencyScore}/100</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
