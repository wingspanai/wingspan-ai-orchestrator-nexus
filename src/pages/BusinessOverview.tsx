
import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { BusinessOverviewHeader } from '@/components/Business/BusinessOverviewHeader';
import { PerformanceMetricsSection } from '@/components/Business/PerformanceMetricsSection';
import { OperationalDashboard } from '@/components/Business/OperationalDashboard';
import { CustomerMarketSection } from '@/components/Business/CustomerMarketSection';
import { StrategicInitiativesSection } from '@/components/Business/StrategicInitiativesSection';
import { AIInsightsPanel } from '@/components/Business/AIInsightsPanel';

const BusinessOverview = () => {
  const [timeframe, setTimeframe] = useState('month');
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <BusinessOverviewHeader 
          timeframe={timeframe}
          onTimeframeChange={setTimeframe}
          onRefresh={handleRefresh}
        />
        
        <PerformanceMetricsSection timeframe={timeframe} />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-8">
            <OperationalDashboard />
            <CustomerMarketSection />
            <StrategicInitiativesSection />
          </div>
          
          <div className="space-y-6">
            <AIInsightsPanel />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BusinessOverview;
