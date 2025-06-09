
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Megaphone, Rocket } from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';
import { PositioningStrategy } from './PositioningStrategy';
import { PricingStrategy } from './PricingStrategy';
import { ChannelStrategy } from './ChannelStrategy';

export function GoToMarketContent() {
  const { activeTab } = useGTMStore();

  const renderTabContent = () => {
    switch (activeTab) {
      case 'positioning':
        return <PositioningStrategy />;
      case 'pricing':
        return <PricingStrategy />;
      case 'channels':
        return <ChannelStrategy />;
      case 'campaign':
        return (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Megaphone className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Campaign Planning</h3>
                <p className="text-muted-foreground">
                  Integrated campaign planning and content creation hub coming soon
                </p>
              </div>
            </CardContent>
          </Card>
        );
      case 'launch':
        return (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Rocket className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Launch Execution</h3>
                <p className="text-muted-foreground">
                  Launch control center with real-time monitoring coming soon
                </p>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[600px]">
      {renderTabContent()}
    </div>
  );
}
