
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Eye, 
  MousePointer, 
  UserPlus, 
  DollarSign,
  FileText,
  Video,
  Image,
  Monitor,
  Share2,
  BarChart,
  Target
} from 'lucide-react';

export function MarketingPerformanceSection() {
  const [selectedCampaign, setSelectedCampaign] = useState('all');
  const [attributionModel, setAttributionModel] = useState('last-touch');

  // Mock data
  const impressions = 2450000;
  const impressionsGrowth = 18;
  const clicks = 98500;
  const clickThroughRate = 4.02;
  const conversions = 3420;
  const conversionRate = 3.47;
  const campaignRevenue = 485000;
  const returnOnAdSpend = 4.8;

  const campaigns = [
    { id: 'q3-launch', name: 'Q3 Product Launch' },
    { id: 'brand-awareness', name: 'Brand Awareness' },
    { id: 'demand-gen', name: 'Demand Generation' }
  ];

  const marketingChannels = [
    {
      id: 'paid-search',
      name: 'Paid Search',
      icon: '🔍',
      spend: 85000,
      impressions: 890000,
      clicks: 42500,
      conversions: 1250,
      cac: 68,
      roas: 5.2
    },
    {
      id: 'social-media',
      name: 'Social Media',
      icon: '📱',
      spend: 65000,
      impressions: 1200000,
      clicks: 38000,
      conversions: 890,
      cac: 73,
      roas: 4.1
    },
    {
      id: 'display',
      name: 'Display Ads',
      icon: '🎯',
      spend: 45000,
      impressions: 2100000,
      clicks: 18000,
      conversions: 420,
      cac: 107,
      roas: 2.8
    },
    {
      id: 'email',
      name: 'Email Marketing',
      icon: '📧',
      spend: 12000,
      impressions: 450000,
      clicks: 28500,
      conversions: 680,
      cac: 18,
      roas: 8.5
    }
  ];

  const topContent = [
    {
      id: 1,
      type: 'blog',
      title: 'Ultimate Guide to Product Analytics',
      views: 45200,
      shares: 1280,
      conversionRate: 8.5,
      roi: 340
    },
    {
      id: 2,
      type: 'video',
      title: 'Product Demo: Advanced Features',
      views: 28900,
      shares: 890,
      conversionRate: 12.3,
      roi: 520
    },
    {
      id: 3,
      type: 'webinar',
      title: 'Best Practices Webinar Series',
      views: 18500,
      shares: 450,
      conversionRate: 15.8,
      roi: 680
    }
  ];

  const touchpoints = [
    {
      id: 'organic-search',
      name: 'Organic Search',
      touches: 15420,
      influence: 28,
      avgPosition: 1.2,
      attributedRevenue: 135
    },
    {
      id: 'paid-search',
      name: 'Paid Search',
      touches: 12800,
      influence: 22,
      avgPosition: 2.1,
      attributedRevenue: 106
    },
    {
      id: 'social-media',
      name: 'Social Media',
      touches: 9850,
      influence: 18,
      avgPosition: 3.5,
      attributedRevenue: 87
    },
    {
      id: 'email',
      name: 'Email',
      touches: 8640,
      influence: 16,
      avgPosition: 4.2,
      attributedRevenue: 77
    }
  ];

  const contentRecommendations = [
    {
      id: 1,
      type: 'Blog Post',
      title: 'ROI Calculator Guide',
      reason: 'High-converting content type for your segment',
      expectedLift: 25
    },
    {
      id: 2,
      type: 'Video Tutorial',
      title: 'Feature Deep Dive Series',
      reason: 'Video content shows 40% higher engagement',
      expectedLift: 35
    },
    {
      id: 3,
      type: 'Case Study',
      title: 'Customer Success Story',
      reason: 'Social proof drives enterprise conversions',
      expectedLift: 45
    }
  ];

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const createContent = (recommendation: any) => {
    console.log(`Creating content: ${recommendation.title}`);
  };

  return (
    <div className="space-y-6">
      {/* Campaign Performance Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Campaign Performance Overview</CardTitle>
            <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Campaigns</SelectItem>
                {campaigns.map(campaign => (
                  <SelectItem key={campaign.id} value={campaign.id}>
                    {campaign.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* Campaign Metrics */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Impressions</span>
              </div>
              <div className="text-2xl font-bold">{formatNumber(impressions)}</div>
              <div className="text-sm text-green-600">+{impressionsGrowth}%</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Clicks</span>
              </div>
              <div className="text-2xl font-bold">{formatNumber(clicks)}</div>
              <div className="text-sm text-muted-foreground">CTR: {clickThroughRate}%</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <UserPlus className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Conversions</span>
              </div>
              <div className="text-2xl font-bold">{formatNumber(conversions)}</div>
              <div className="text-sm text-muted-foreground">CR: {conversionRate}%</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Revenue</span>
              </div>
              <div className="text-2xl font-bold">${formatNumber(campaignRevenue)}</div>
              <div className="text-sm text-muted-foreground">ROAS: {returnOnAdSpend}x</div>
            </div>
          </div>

          {/* Campaign Comparison Chart */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Campaign Performance Comparison</h4>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart className="h-12 w-12 mx-auto mb-2" />
                <p>Grouped Bar Chart - Campaign Metrics</p>
                <p className="text-sm">Impressions, Clicks, Conversions, Revenue by Campaign</p>
              </div>
            </div>
          </div>

          {/* Channel Performance Table */}
          <div>
            <h4 className="font-medium mb-3">Channel Performance</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Channel</th>
                    <th className="text-right p-3">Spend</th>
                    <th className="text-right p-3">Impressions</th>
                    <th className="text-right p-3">Clicks</th>
                    <th className="text-right p-3">Conversions</th>
                    <th className="text-right p-3">CAC</th>
                    <th className="text-right p-3">ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {marketingChannels.map(channel => (
                    <tr key={channel.id} className="border-b">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{channel.icon}</span>
                          <span className="font-medium">{channel.name}</span>
                        </div>
                      </td>
                      <td className="text-right p-3">${formatNumber(channel.spend)}</td>
                      <td className="text-right p-3">{formatNumber(channel.impressions)}</td>
                      <td className="text-right p-3">{formatNumber(channel.clicks)}</td>
                      <td className="text-right p-3">{formatNumber(channel.conversions)}</td>
                      <td className="text-right p-3">${channel.cac}</td>
                      <td className="text-right p-3">{channel.roas}x</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Multi-Touch Attribution */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Multi-Touch Attribution</CardTitle>
            <Select value={attributionModel} onValueChange={setAttributionModel}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-touch">Last Touch</SelectItem>
                <SelectItem value="first-touch">First Touch</SelectItem>
                <SelectItem value="linear">Linear</SelectItem>
                <SelectItem value="time-decay">Time Decay</SelectItem>
                <SelectItem value="data-driven">Data Driven</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* Customer Journey Paths */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Customer Journey Flow</h4>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Target className="h-12 w-12 mx-auto mb-2" />
                <p>Sankey Diagram - Attribution Flow</p>
                <p className="text-sm">First Touch → Conversion with touchpoint influence</p>
              </div>
            </div>
          </div>

          {/* Touchpoint Analysis */}
          <div>
            <h4 className="font-medium mb-3">Touchpoint Performance</h4>
            <div className="grid grid-cols-2 gap-4">
              {touchpoints.map(touchpoint => (
                <div key={touchpoint.id} className="p-4 border rounded-lg">
                  <div className="font-medium text-lg mb-2">{touchpoint.name}</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Touches</div>
                      <div className="font-medium">{formatNumber(touchpoint.touches)}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Influence</div>
                      <div className="font-medium">{touchpoint.influence}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Avg Position</div>
                      <div className="font-medium">{touchpoint.avgPosition}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="text-muted-foreground">Attributed Revenue: </span>
                    <span className="font-medium text-green-600">${touchpoint.attributedRevenue}K</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Content Performance Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Top Performing Content */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Top Performing Content</h4>
            <div className="space-y-4">
              {topContent.map(content => (
                <div key={content.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="p-2 bg-muted rounded-lg">
                    {content.type === 'blog' && <FileText className="w-5 h-5" />}
                    {content.type === 'video' && <Video className="w-5 h-5" />}
                    {content.type === 'infographic' && <Image className="w-5 h-5" />}
                    {content.type === 'webinar' && <Monitor className="w-5 h-5" />}
                  </div>

                  <div className="flex-1">
                    <div className="font-medium">{content.title}</div>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Eye className="w-3 h-3" />
                        {formatNumber(content.views)}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Share2 className="w-3 h-3" />
                        {formatNumber(content.shares)}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <UserPlus className="w-3 h-3" />
                        {content.conversionRate}%
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Content ROI</div>
                    <div className="text-lg font-bold text-green-600">{content.roi}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Engagement Heatmap */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Content Engagement Heatmap</h4>
            <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Target className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Engagement Heatmap</p>
                <p className="text-xs">Content Type vs Customer Segment engagement rates</p>
              </div>
            </div>
          </div>

          {/* AI Content Recommendations */}
          <div>
            <h4 className="font-medium mb-3">AI Content Recommendations</h4>
            <div className="space-y-3">
              {contentRecommendations.map(rec => (
                <div key={rec.id} className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium">{rec.title}</div>
                      <div className="text-sm text-blue-600">{rec.type}</div>
                    </div>
                    <Button size="sm" onClick={() => createContent(rec)}>
                      Create Content
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{rec.reason}</div>
                  <div className="text-sm font-medium text-green-600">
                    Expected: +{rec.expectedLift}% engagement
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
