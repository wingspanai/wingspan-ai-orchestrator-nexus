
import React, { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { MeetingIntelligenceHeader } from '@/components/Calendar/MeetingIntelligenceHeader';
import { IntelligentCalendarView } from '@/components/Calendar/IntelligentCalendarView';
import { MeetingAnalytics } from '@/components/Calendar/MeetingAnalytics';
import { AIOptimizationPanel } from '@/components/Calendar/AIOptimizationPanel';
import { MeetingTemplates } from '@/components/Calendar/MeetingTemplates';

const CalendarIntelligence = () => {
  const [dateRange, setDateRange] = useState('mtd');
  const [calendarView, setCalendarView] = useState('week');
  const [showOptimizations, setShowOptimizations] = useState(true);

  return (
    <MainLayout>
      <div className="space-y-6">
        <MeetingIntelligenceHeader 
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />
        
        <IntelligentCalendarView 
          view={calendarView}
          onViewChange={setCalendarView}
        />
        
        <MeetingAnalytics />
        
        {showOptimizations && (
          <AIOptimizationPanel 
            onClose={() => setShowOptimizations(false)}
          />
        )}
        
        <MeetingTemplates />
      </div>
    </MainLayout>
  );
};

export default CalendarIntelligence;
