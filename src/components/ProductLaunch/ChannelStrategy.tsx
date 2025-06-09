
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Plus } from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';

export function ChannelStrategy() {
  const { channels, optimizeChannelMix } = useGTMStore();

  const getHealthColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planned': return 'bg-blue-100 text-blue-800';
      case 'paused': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Multi-Channel Distribution Strategy</CardTitle>
            <Button onClick={optimizeChannelMix}>
              <Brain className="w-4 h-4 mr-2" />
              Optimize Channel Mix
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            {channels.map((channel) => (
              <Card key={channel.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{channel.icon}</span>
                      <div>
                        <h3 className="font-medium">{channel.name}</h3>
                        <Badge className={getStatusColor(channel.status)}>
                          {channel.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getHealthColor(channel.healthScore)}`} />
                      <span className="text-sm text-muted-foreground">{channel.healthScore}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{channel.strategy}</p>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold">${channel.budget}K</div>
                        <div className="text-xs text-muted-foreground">Budget</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{channel.expectedROI}%</div>
                        <div className="text-xs text-muted-foreground">Expected ROI</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">${channel.cac}</div>
                        <div className="text-xs text-muted-foreground">CAC</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Target Leads: {channel.targetLeads}</span>
                        <span>Conv: {channel.targetConversion}%</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Revenue Target: ${channel.targetRevenue}K
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Key Tactics</div>
                      {channel.tactics.slice(0, 2).map((tactic) => (
                        <div key={tactic.id} className="flex items-center justify-between text-sm">
                          <span>{tactic.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {tactic.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Partner & Integration Ecosystem</CardTitle>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Partner
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Brain className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Partner Ecosystem</h3>
            <p className="text-muted-foreground">
              Partner network visualization and management coming soon
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
