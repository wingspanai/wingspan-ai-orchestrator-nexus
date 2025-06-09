
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, DollarSign, Calendar, Zap } from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';

export function GoToMarketMetrics() {
  const { selectedProduct, products } = useGTMStore();
  const currentProduct = selectedProduct || products[0];

  return (
    <div className="grid grid-cols-5 gap-4 p-6">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">${currentProduct.targetRevenue}M</div>
              <div className="text-sm text-muted-foreground">Target Revenue</div>
              <div className="text-xs text-green-600">87% confidence</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{currentProduct.totalAddressableMarket}M</div>
              <div className="text-sm text-muted-foreground">TAM Size</div>
              <div className="text-xs text-blue-600">5.2% capture</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <DollarSign className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">${currentProduct.customerAcquisitionCost}</div>
              <div className="text-sm text-muted-foreground">Target CAC</div>
              <div className="text-xs text-purple-600">LTV:CAC 8:1</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">42</div>
              <div className="text-sm text-muted-foreground">Days to Launch</div>
              <div className="text-xs text-orange-600">{currentProduct.launchReadiness}% ready</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{currentProduct.campaignChannels}</div>
              <div className="text-sm text-muted-foreground">Active Channels</div>
              <div className="text-xs text-indigo-600">
                {currentProduct.channelsReady}/{currentProduct.totalChannels} ready
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
