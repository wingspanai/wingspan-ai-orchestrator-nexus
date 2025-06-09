
import React from 'react';
import { Target, DollarSign, Share2, Megaphone, Rocket, BarChart } from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';

export function GoToMarketTabs() {
  const { activeTab, setActiveTab } = useGTMStore();

  const tabs = [
    { id: 'positioning', label: 'Positioning & Messaging', icon: Target },
    { id: 'pricing', label: 'Pricing Strategy', icon: DollarSign },
    { id: 'channels', label: 'Channel Strategy', icon: Share2 },
    { id: 'campaign', label: 'Campaign Planning', icon: Megaphone },
    { id: 'launch', label: 'Launch Execution', icon: Rocket },
    { id: 'performance', label: 'Performance Analytics', icon: BarChart },
  ] as const;

  return (
    <div className="border-b border-border mb-6">
      <div className="flex space-x-8">
        {tabs.map(tab => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
