
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useHRStore } from '@/store/hrStore';
import { Bell, Award, Star } from 'lucide-react';

export function PerformanceSection() {
  const { reviewCycle, setReviewCycle, performanceDistribution } = useHRStore();
  const [selectedGoalFilter, setSelectedGoalFilter] = useState('all');

  const reviewDueDate = new Date('2025-02-15');
  const selfReviewCompletion = 85;
  const managerReviewCompletion = 72;
  const calibrationCompletion = 45;

  const totalEmployees = 150;
  const completedSelfReviews = Math.floor((selfReviewCompletion / 100) * totalEmployees);
  const completedManagerReviews = Math.floor((managerReviewCompletion / 100) * totalEmployees);
  const totalDepartments = 8;
  const completedCalibrations = Math.floor((calibrationCompletion / 100) * totalDepartments);

  const overallGoalCompletion = 78;
  const completedGoals = 124;
  const inProgressGoals = 45;
  const notStartedGoals = 18;
  const atRiskGoals = 7;

  const topPerformers = [
    { id: '1', name: 'Sarah Chen', role: 'Senior Engineer', avatar: '/placeholder.svg', goalsCompleted: 8, totalGoals: 10, completionRate: 95 },
    { id: '2', name: 'Mike Rodriguez', role: 'Engineering Manager', avatar: '/placeholder.svg', goalsCompleted: 7, totalGoals: 8, completionRate: 92 },
    { id: '3', name: 'Alex Johnson', role: 'Product Manager', avatar: '/placeholder.svg', goalsCompleted: 9, totalGoals: 11, completionRate: 89 }
  ];

  const skillGaps = [
    { id: '1', skill: 'Machine Learning', currentLevel: 2.3, requiredLevel: 4.0, gapSize: 1.7 },
    { id: '2', skill: 'Cloud Architecture', currentLevel: 3.1, requiredLevel: 4.5, gapSize: 1.4 },
    { id: '3', skill: 'Product Strategy', currentLevel: 2.8, requiredLevel: 4.0, gapSize: 1.2 }
  ];

  const CircularProgress = ({ value, size = 120, children }: { value: number; size?: number; children: React.ReactNode }) => {
    const radius = size / 2 - 10;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="text-primary transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Performance Management</h2>
        <Select value={reviewCycle} onValueChange={setReviewCycle}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="q1-2025">Q1 2025</SelectItem>
            <SelectItem value="q4-2024">Q4 2024</SelectItem>
            <SelectItem value="annual-2024">Annual 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Performance Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Distribution</CardTitle>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Exceeds ({performanceDistribution.exceeds})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Meets ({performanceDistribution.meets})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Developing ({performanceDistribution.developing})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Needs Improvement ({performanceDistribution.needsImprovement})</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center space-y-2">
                <div className="text-lg font-medium">Performance Bell Curve</div>
                <div className="text-sm text-muted-foreground">
                  Distribution visualization would be rendered here
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Review Completion Status</CardTitle>
              <div className="text-sm text-muted-foreground">
                Due: {reviewDueDate.toLocaleDateString()}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <CircularProgress value={selfReviewCompletion}>
                  <div className="text-lg font-bold">{selfReviewCompletion}%</div>
                </CircularProgress>
                <div className="space-y-1">
                  <div className="text-sm font-medium">Self Reviews</div>
                  <div className="text-xs text-muted-foreground">
                    {completedSelfReviews}/{totalEmployees}
                  </div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <CircularProgress value={managerReviewCompletion}>
                  <div className="text-lg font-bold">{managerReviewCompletion}%</div>
                </CircularProgress>
                <div className="space-y-1">
                  <div className="text-sm font-medium">Manager Reviews</div>
                  <div className="text-xs text-muted-foreground">
                    {completedManagerReviews}/{totalEmployees}
                  </div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <CircularProgress value={calibrationCompletion}>
                  <div className="text-lg font-bold">{calibrationCompletion}%</div>
                </CircularProgress>
                <div className="space-y-1">
                  <div className="text-sm font-medium">Calibrations</div>
                  <div className="text-xs text-muted-foreground">
                    {completedCalibrations}/{totalDepartments}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="flex-1" variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                Send Reminders
              </Button>
              <Button className="flex-1" variant="outline">
                View Incomplete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goals & OKRs */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Goals & OKRs</CardTitle>
            <div className="flex gap-2">
              {['All Goals', 'Company', 'Team', 'Individual'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedGoalFilter(filter.toLowerCase().replace(' ', '-'))}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedGoalFilter === filter.toLowerCase().replace(' ', '-')
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="text-lg font-medium">Overall Goal Completion</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm font-medium">{overallGoalCompletion}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${overallGoalCompletion}%` }}
                ></div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-lg font-bold text-green-600">{completedGoals}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-blue-600">{inProgressGoals}</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-gray-600">{notStartedGoals}</div>
                <div className="text-sm text-muted-foreground">Not Started</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold text-red-600">{atRiskGoals}</div>
                <div className="text-sm text-muted-foreground">At Risk</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">Top Goal Achievers</div>
              <Button variant="ghost" size="sm">View All →</Button>
            </div>
            <div className="space-y-3">
              {topPerformers.map((performer, index) => (
                <div key={performer.id} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    #{index + 1}
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                      <div className="font-medium">{performer.name}</div>
                      <div className="text-sm text-muted-foreground">{performer.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{performer.goalsCompleted}/{performer.totalGoals}</div>
                    <div className="text-sm text-muted-foreground">{performer.completionRate}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Matrix */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Critical Skill Gaps</CardTitle>
            <Button variant="outline" size="sm">
              <Star className="h-4 w-4 mr-2" />
              Add Skill
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skillGaps.map((gap) => (
              <div key={gap.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="space-y-1">
                  <div className="font-medium">{gap.skill}</div>
                  <div className="text-sm text-muted-foreground">
                    Current: {gap.currentLevel}/5 • Required: {gap.requiredLevel}/5 • Gap: {gap.gapSize}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Address Gap
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
