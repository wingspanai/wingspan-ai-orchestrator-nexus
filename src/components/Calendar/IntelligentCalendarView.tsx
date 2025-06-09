
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Clock, 
  AlertTriangle, 
  Zap,
  Calendar,
  Filter
} from 'lucide-react';

interface IntelligentCalendarViewProps {
  view: string;
  onViewChange: (view: string) => void;
}

export const IntelligentCalendarView = ({ view, onViewChange }: IntelligentCalendarViewProps) => {
  const [currentPeriod, setCurrentPeriod] = useState('This Week');
  const [selectedFilters, setSelectedFilters] = useState(['All Meetings']);

  // Mock calendar data
  const calendarDays = [
    {
      date: '2024-01-15',
      number: 15,
      isToday: false,
      totalCost: 1200,
      meetings: [
        {
          id: '1',
          title: 'Sprint Planning',
          start: '09:00',
          duration: 60,
          attendeeCount: 8,
          estimatedCost: 480,
          aiClassification: 'essential',
          aiClassificationReason: 'Critical for sprint execution',
          hasOptimization: false
        },
        {
          id: '2',
          title: 'Weekly Status Update',
          start: '14:00',
          duration: 30,
          attendeeCount: 12,
          estimatedCost: 360,
          aiClassification: 'optional',
          aiClassificationReason: 'Could be replaced with async updates',
          hasOptimization: true
        }
      ],
      hasConflicts: false,
      conflictCount: 0
    },
    {
      date: '2024-01-16',
      number: 16,
      isToday: true,
      totalCost: 2840,
      meetings: [
        {
          id: '3',
          title: 'Product Review',
          start: '10:00',
          duration: 90,
          attendeeCount: 6,
          estimatedCost: 540,
          aiClassification: 'important',
          aiClassificationReason: 'Important for product direction',
          hasOptimization: false
        },
        {
          id: '4',
          title: 'All Hands Meeting',
          start: '15:00',
          duration: 60,
          attendeeCount: 50,
          estimatedCost: 2300,
          aiClassification: 'essential',
          aiClassificationReason: 'Company-wide alignment needed',
          hasOptimization: false
        }
      ],
      hasConflicts: true,
      conflictCount: 1
    },
    // Add more days...
  ];

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'essential': return 'bg-green-500';
      case 'important': return 'bg-blue-500';
      case 'optional': return 'bg-yellow-500';
      case 'wasteful': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getClassificationIcon = (classification: string) => {
    switch (classification) {
      case 'essential': return '✓';
      case 'important': return '!';
      case 'optional': return '?';
      case 'wasteful': return '✗';
      default: return '';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-muted rounded-lg p-1">
              <Button 
                variant={view === 'day' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => onViewChange('day')}
              >
                Day
              </Button>
              <Button 
                variant={view === 'week' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => onViewChange('week')}
              >
                Week
              </Button>
              <Button 
                variant={view === 'month' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => onViewChange('month')}
              >
                Month
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setCurrentPeriod('Previous Week')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="font-medium">{currentPeriod}</span>
              <Button variant="ghost" size="sm" onClick={() => setCurrentPeriod('Next Week')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                Today
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['All Meetings', 'High Cost', 'Low Value', 'Recurring', 'External'].map(filter => (
              <Badge 
                key={filter}
                variant={selectedFilters.includes(filter) ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => {
                  if (selectedFilters.includes(filter)) {
                    setSelectedFilters(selectedFilters.filter(f => f !== filter));
                  } else {
                    setSelectedFilters([...selectedFilters, filter]);
                  }
                }}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {calendarDays.map(day => (
            <div key={day.date} className={`border rounded-lg p-4 ${day.isToday ? 'border-primary bg-primary/5' : 'border-border'}`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-semibold">{day.number}</span>
                <span className="text-sm text-muted-foreground">${day.totalCost}</span>
              </div>
              
              <div className="space-y-2">
                {day.meetings.map(meeting => (
                  <div 
                    key={meeting.id}
                    className="bg-white dark:bg-gray-800 border rounded-lg p-3 cursor-pointer hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>{meeting.start}</span>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${getClassificationColor(meeting.aiClassification)}`} />
                        {meeting.hasOptimization && <Zap className="h-3 w-3 text-yellow-500" />}
                      </div>
                    </div>
                    
                    <h4 className="font-medium text-sm truncate mb-2">{meeting.title}</h4>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{meeting.attendeeCount}</span>
                        </div>
                        <span>${meeting.estimatedCost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {day.hasConflicts && (
                <div className="mt-2 flex items-center gap-1 text-xs text-amber-600">
                  <AlertTriangle className="h-3 w-3" />
                  <span>{day.conflictCount} conflicts</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Calendar Legend */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t">
          <span className="text-sm font-medium">AI Meeting Classifications:</span>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm">Essential</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-sm">Important</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-sm">Optional</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-sm">Wasteful</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
