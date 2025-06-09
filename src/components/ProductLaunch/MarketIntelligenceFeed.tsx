
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, AlertTriangle, Info, Users } from 'lucide-react';
import { useGTMStore } from '@/store/gtmStore';

export function MarketIntelligenceFeed() {
  const { marketIntel } = useGTMStore();

  const getIcon = (type: string) => {
    switch (type) {
      case 'competitor': return <AlertTriangle className="w-4 h-4" />;
      case 'market-shift': return <TrendingUp className="w-4 h-4" />;
      case 'insight': return <Info className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  const getBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive' as const;
      case 'medium': return 'default' as const;
      case 'low': return 'secondary' as const;
      default: return 'secondary' as const;
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffMins < 60) {
      return `${diffMins} min ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    }
    return timestamp.toLocaleDateString();
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Market Intelligence
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {marketIntel.map((item) => (
            <div key={item.id} className="border-l-4 border-l-primary pl-4 space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant={getBadgeVariant(item.priority)}>
                  {item.badge}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {formatTimeAgo(item.timestamp)}
                </span>
              </div>
              <p className="text-sm">{item.content}</p>
              {item.priority === 'high' && (
                <Button size="sm" className="mt-2">
                  Analyze Impact
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Target Audience Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Users className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Audience engagement heatmap and insights coming soon
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Competitor Movements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">Competitor A</span>
                <span className="text-xs text-muted-foreground">1h ago</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Price reduction announcement
              </p>
              <Badge variant="outline" className="text-xs mt-1">Price Change</Badge>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">Competitor B</span>
                <span className="text-xs text-muted-foreground">3h ago</span>
              </div>
              <p className="text-xs text-muted-foreground">
                New feature launch detected
              </p>
              <Badge variant="outline" className="text-xs mt-1">Product Update</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
