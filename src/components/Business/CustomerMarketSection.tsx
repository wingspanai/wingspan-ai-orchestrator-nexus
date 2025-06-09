
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Eye,
  ChevronRight,
  Star,
  MessageSquare
} from 'lucide-react';

export function CustomerMarketSection() {
  // Mock customer feedback data
  const recentFeedback = [
    {
      id: 1,
      customer: {
        name: 'John Smith',
        company: 'TechCorp Inc.',
        avatar: '/avatars/john.jpg'
      },
      content: 'The new features have significantly improved our workflow efficiency.',
      sentiment: 'positive',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      id: 2,
      customer: {
        name: 'Sarah Johnson',
        company: 'DataFlow Solutions',
        avatar: '/avatars/sarah2.jpg'
      },
      content: 'Could use better integration with third-party tools.',
      sentiment: 'neutral',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
    },
    {
      id: 3,
      customer: {
        name: 'Mike Chen',
        company: 'GrowthLabs',
        avatar: '/avatars/mike2.jpg'
      },
      content: 'Outstanding customer support and product quality!',
      sentiment: 'positive',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000) // 8 hours ago
    }
  ];

  const formatTimeAgo = (timestamp: Date) => {
    const hours = Math.floor((Date.now() - timestamp.getTime()) / (1000 * 60 * 60));
    return `${hours}h ago`;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-display">Customer & Market Insights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Health Matrix */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Customer Health Matrix</CardTitle>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" className="text-xs">Health Score</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center bg-muted/30 rounded-lg mb-4">
              <div className="text-center text-muted-foreground">
                <Target className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Customer Health Scatter Plot</p>
                <p className="text-xs">Engagement vs Satisfaction</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-green-50 dark:bg-green-950/20 rounded">
                <div className="text-lg font-bold text-green-600">142</div>
                <div className="text-xs text-muted-foreground">Champions</div>
                <div className="text-xs font-medium">58%</div>
              </div>
              <div className="text-center p-2 bg-amber-50 dark:bg-amber-950/20 rounded">
                <div className="text-lg font-bold text-amber-600">67</div>
                <div className="text-xs text-muted-foreground">At Risk</div>
                <div className="text-xs font-medium">27%</div>
              </div>
              <div className="text-center p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
                <div className="text-lg font-bold text-blue-600">38</div>
                <div className="text-xs text-muted-foreground">Stable</div>
                <div className="text-xs font-medium">15%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Position */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Market Position</CardTitle>
              <Badge variant="outline">Q4 2024</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center bg-muted/30 rounded-lg mb-4">
              <div className="text-center text-muted-foreground">
                <Eye className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Market Share Chart</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Market Share</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">23.5%</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +2.1%
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Win Rate</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">67%</span>
                  <span className="text-xs text-muted-foreground">Industry: 54%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Brand Strength</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">84/100</span>
                  <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-ai-primary rounded-full" style={{ width: '84%' }} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Feedback */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Feedback</CardTitle>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentFeedback.map((feedback) => (
                <div key={feedback.id} className="p-3 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={feedback.customer.avatar} />
                        <AvatarFallback>{feedback.customer.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{feedback.customer.name}</div>
                        <div className="text-xs text-muted-foreground">{feedback.customer.company}</div>
                      </div>
                    </div>
                    <Badge 
                      className={`text-xs ${
                        feedback.sentiment === 'positive' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : feedback.sentiment === 'negative'
                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                      }`}
                    >
                      {feedback.sentiment}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    "{feedback.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {formatTimeAgo(feedback.timestamp)}
                    </span>
                    <Button size="sm" variant="ghost">
                      Respond →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <div className="flex h-2 rounded-full overflow-hidden">
                <div className="bg-green-500" style={{ width: '72%' }} />
                <div className="bg-gray-300" style={{ width: '18%' }} />
                <div className="bg-red-500" style={{ width: '10%' }} />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>• Positive 72%</span>
                <span>• Neutral 18%</span>
                <span>• Negative 10%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
