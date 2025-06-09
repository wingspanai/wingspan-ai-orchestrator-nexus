
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Brain,
  TrendingUp,
  Clock,
  Users,
  Merge,
  MessageSquare,
  CheckCircle,
  DollarSign,
  X
} from 'lucide-react';

interface AIOptimizationPanelProps {
  onClose: () => void;
}

export const AIOptimizationPanel = ({ onClose }: AIOptimizationPanelProps) => {
  const aiConfidence = 89;
  const consolidationSavings = 12;
  const consolidationCostSavings = 4800;
  const asyncSavings = 8;
  const durationReduction = 15;

  const consolidatableMeetings = 6;
  const meetingGroups = [
    {
      id: '1',
      title: 'Status Updates',
      meetings: [
        { id: '1', name: 'Engineering Standup', attendees: 8, duration: 15 },
        { id: '2', name: 'Product Sync', attendees: 6, duration: 30 },
        { id: '3', name: 'Design Review', attendees: 5, duration: 30 }
      ],
      suggestedDuration: 45,
      suggestedCadence: 'daily'
    }
  ];

  const asyncCandidates = 8;
  const asyncSuggestions = [
    {
      id: '1',
      meetingName: 'Weekly Status Update',
      frequency: '3x/week',
      duration: 30,
      asyncFormat: 'Slack status updates with weekly summary',
      timeSaved: 6,
      attendeeCount: 12
    },
    {
      id: '2',
      meetingName: 'Progress Check-ins',
      frequency: '2x/week', 
      duration: 20,
      asyncFormat: 'Dashboard updates with exception reporting',
      timeSaved: 3.2,
      attendeeCount: 8
    }
  ];

  const shortenableMeetings = 12;
  const durationSuggestions = [
    {
      id: '1',
      meetingName: 'Sprint Retrospective',
      currentDuration: 60,
      suggestedDuration: 45,
      reasoning: 'Meeting consistently ends 15 minutes early'
    },
    {
      id: '2',
      meetingName: 'Weekly Planning',
      currentDuration: 90,
      suggestedDuration: 75,
      reasoning: 'Agenda items completed in 75 minutes on average'
    }
  ];

  const noMeetingDayAnalysis = [
    { day: 'Monday', feasibilityScore: 65 },
    { day: 'Tuesday', feasibilityScore: 45 },
    { day: 'Wednesday', feasibilityScore: 82 },
    { day: 'Thursday', feasibilityScore: 35 },
    { day: 'Friday', feasibilityScore: 90 }
  ];

  const recommendedDay = 'Friday';
  const noMeetingDayHours = 6;
  const productivityIncrease = 23;
  const noMeetingDaySavings = 12;

  return (
    <Card className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-800/20 border-indigo-200 dark:border-indigo-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-indigo-600" />
            <CardTitle>AI Meeting Optimization</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">AI Confidence</span>
              <Progress value={aiConfidence} className="w-20 h-2" />
              <span className="text-sm font-medium">{aiConfidence}%</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* High Priority: Meeting Consolidation */}
          <Card className="bg-white/80 dark:bg-gray-800/80">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="destructive">High Impact</Badge>
                <div className="flex gap-2">
                  <Badge variant="secondary">Save {consolidationSavings}h/week</Badge>
                  <Badge variant="outline">${consolidationCostSavings}/month</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Meeting Consolidation Opportunity</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI has identified {consolidatableMeetings} meetings that can be merged without impacting outcomes
              </p>
              
              {meetingGroups.map(group => (
                <div key={group.id} className="border rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{group.title}</h4>
                    <span className="text-xs text-muted-foreground">{group.meetings.length} meetings</span>
                  </div>
                  
                  <div className="space-y-1 mb-3">
                    {group.meetings.map(meeting => (
                      <div key={meeting.id} className="flex items-center justify-between text-xs">
                        <span>{meeting.name}</span>
                        <span className="text-muted-foreground">
                          {meeting.attendees} attendees • {meeting.duration}min
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                    <Merge className="h-3 w-3" />
                    <span>
                      Merge into single {group.suggestedDuration}min {group.suggestedCadence} meeting
                    </span>
                  </div>
                </div>
              ))}
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  Implement Consolidation
                </Button>
                <Button variant="ghost" size="sm">
                  Review Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Medium Priority: Async Collaboration */}
          <Card className="bg-white/80 dark:bg-gray-800/80">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge>Medium Impact</Badge>
                <Badge variant="secondary">Save {asyncSavings}h/week</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Async Collaboration Opportunities</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {asyncCandidates} status update meetings can be replaced with async updates
              </p>
              
              <div className="space-y-3 mb-4">
                {asyncSuggestions.map(suggestion => (
                  <div key={suggestion.id} className="border rounded-lg p-3">
                    <div className="font-medium text-sm mb-1">{suggestion.meetingName}</div>
                    <div className="text-xs text-muted-foreground mb-2">
                      Currently: {suggestion.frequency} • {suggestion.duration}min
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs bg-green-50 dark:bg-green-900/20 p-2 rounded mb-2">
                      <MessageSquare className="h-3 w-3" />
                      <span>Replace with: {suggestion.asyncFormat}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>Save {suggestion.timeSaved}h/month</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>Free up {suggestion.attendeeCount} people</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button size="sm" className="w-full">
                Implement Async Changes
              </Button>
            </CardContent>
          </Card>

          {/* Low Priority: Duration Optimization */}
          <Card className="bg-white/80 dark:bg-gray-800/80">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline">Quick Win</Badge>
                <Badge variant="secondary">Reduce by {durationReduction}%</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Meeting Duration Optimization</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI analysis shows {shortenableMeetings} meetings consistently end early and can be shortened
              </p>
              
              <div className="space-y-3 mb-4">
                {durationSuggestions.map(suggestion => (
                  <div key={suggestion.id} className="border rounded-lg p-3">
                    <div className="font-medium text-sm mb-2">{suggestion.meetingName}</div>
                    
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <span className="text-muted-foreground">{suggestion.currentDuration}min</span>
                      <span>→</span>
                      <span className="font-medium">{suggestion.suggestedDuration}min</span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">{suggestion.reasoning}</p>
                  </div>
                ))}
              </div>
              
              <Button size="sm" variant="outline" className="w-full">
                Apply Duration Changes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* No-Meeting Day Analysis */}
        <Card className="mt-6 bg-white/80 dark:bg-gray-800/80">
          <CardHeader>
            <CardTitle className="text-lg">No-Meeting Day Feasibility</CardTitle>
            <p className="text-sm text-muted-foreground">
              AI analysis of implementing company-wide no-meeting days
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4 mb-6">
              {noMeetingDayAnalysis.map(day => (
                <div key={day.day} className="text-center">
                  <div className="text-sm font-medium mb-2">{day.day}</div>
                  <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg relative overflow-hidden">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400 transition-all"
                      style={{ height: `${day.feasibilityScore}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{day.feasibilityScore}%</div>
                </div>
              ))}
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold">Recommended: No-Meeting {recommendedDay}s</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span>{noMeetingDayHours}h of focus time recovered per person</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span>{productivityIncrease}% expected productivity increase</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span>${noMeetingDaySavings}K monthly cost savings</span>
                </div>
              </div>
              
              <Button className="mt-4">
                Implement No-Meeting {recommendedDay}s
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
