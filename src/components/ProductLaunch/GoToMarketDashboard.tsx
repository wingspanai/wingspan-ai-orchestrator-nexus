
import React from 'react';
import { useGTMStore } from '@/store/gtmStore';
import { GoToMarketHeader } from './GoToMarketHeader';
import { GoToMarketMetrics } from './GoToMarketMetrics';
import { GoToMarketTabs } from './GoToMarketTabs';
import { GoToMarketContent } from './GoToMarketContent';
import { MarketIntelligenceFeed } from './MarketIntelligenceFeed';
import { PerformanceDashboard } from './PerformanceDashboard';

export function GoToMarketDashboard() {
  const { activeTab } = useGTMStore();

  // If Performance tab is selected, render the full PerformanceDashboard
  if (activeTab === 'performance') {
    return <PerformanceDashboard />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <GoToMarketHeader />

      {/* Overview Metrics */}
      <GoToMarketMetrics />

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6 px-6 pb-6">
        {/* Main Strategy Canvas */}
        <main className="col-span-9">
          {/* Strategy Tabs */}
          <GoToMarketTabs />

          {/* Tab Content */}
          <GoToMarketContent />
        </main>

        {/* Right Sidebar - Market Intelligence */}
        <aside className="col-span-3">
          <MarketIntelligenceFeed />
        </aside>
      </div>
    </div>
  );
}
