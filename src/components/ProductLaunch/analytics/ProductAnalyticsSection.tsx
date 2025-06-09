
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  AlertCircle, 
  Clock, 
  MousePointer, 
  Calendar, 
  Users,
  Target,
  Briefcase,
  Globe,
  Zap
} from 'lucide-react';

export function ProductAnalyticsSection() {
  const [adoptionTimeframe, setAdoptionTimeframe] = useState('30days');

  // Mock data
  const featureAwareness = 85;
  const featureTrial = 68;
  const featureAdoption = 45;
  const featureRegularUse = 32;
  const featurePowerUser = 18;

  const avgSessionDuration = 24;
  const sessionDurationTrend = 8;
  const actionsPerSession = 15.3;
  const actionsTrend = 12;
  const avgDaysActive = 18;
  const daysActiveTrend = -3;
  const stickinessRatio = 42;

  const productHealthScore = 87;
  const performanceScore = 92;
  const avgLoadTime = 1.2;
  const uptime = 99.8;
  const errorRate = 0.12;
  const qualityScore = 88;
  const bugRate = 2.1;
  const codeCoverage = 87;
  const techDebtScore = 'Low';
  const satisfactionScore = 84;
  const npsScore = 68;
  const csatScore = 91;
  const supportTicketRate = 3.2;
  const businessImpactScore = 91;
  const revenueImpact = 1.8;
  const costSavings = 450;
  const marketShareGain = 2.1;

  const fastestGrowingFeatures = [
    { id: 1, name: 'AI Insights', growthRate: 45, adoption: 72 },
    { id: 2, name: 'Real-time Sync', growthRate: 38, adoption: 56 },
    { id: 3, name: 'Advanced Filters', growthRate: 28, adoption: 81 }
  ];

  const underperformingFeatures = [
    { id: 1, name: 'Data Export', primaryIssue: 'Low discoverability' },
    { id: 2, name: 'Custom Reports', primaryIssue: 'Complex UX' },
    { id: 3, name: 'Integrations Hub', primaryIssue: 'Performance issues' }
  ];

  const analyzeFeature = (featureId: number) => {
    console.log(`Analyzing feature ${featureId}...`);
  };

  return (
    <div className="space-y-6">
      {/* Feature Adoption & Usage */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Feature Adoption & Usage</CardTitle>
            <Select value={adoptionTimeframe} onValueChange={setAdoptionTimeframe}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* Adoption Funnel */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Feature Adoption Funnel</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm">Aware</div>
                <div className="flex-1 bg-muted rounded-full h-6 relative">
                  <div className="bg-blue-500 h-6 rounded-full" style={{ width: `${featureAwareness}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                    {featureAwareness}%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm">Tried</div>
                <div className="flex-1 bg-muted rounded-full h-6 relative">
                  <div className="bg-green-500 h-6 rounded-full" style={{ width: `${featureTrial}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                    {featureTrial}%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm">Adopted</div>
                <div className="flex-1 bg-muted rounded-full h-6 relative">
                  <div className="bg-purple-500 h-6 rounded-full" style={{ width: `${featureAdoption}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                    {featureAdoption}%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm">Regular</div>
                <div className="flex-1 bg-muted rounded-full h-6 relative">
                  <div className="bg-orange-500 h-6 rounded-full" style={{ width: `${featureRegularUse}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                    {featureRegularUse}%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 text-sm">Power User</div>
                <div className="flex-1 bg-muted rounded-full h-6 relative">
                  <div className="bg-red-500 h-6 rounded-full" style={{ width: `${featurePowerUser}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                    {featurePowerUser}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Performance Matrix */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Feature Performance Matrix</h4>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>High Adoption, High Satisfaction</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span>Mixed Performance</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Low Performance</span>
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Target className="h-12 w-12 mx-auto mb-2" />
                <p>Feature Performance Scatter Plot</p>
                <p className="text-sm">Adoption Rate vs Satisfaction Score</p>
              </div>
            </div>
          </div>

          {/* Feature Insights */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <h4 className="font-medium">Fastest Growing Features</h4>
              </div>
              <div className="space-y-3">
                {fastestGrowingFeatures.map(feature => (
                  <div key={feature.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{feature.name}</div>
                      <div className="text-xs text-green-600">+{feature.growthRate}%</div>
                    </div>
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${feature.adoption}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <h4 className="font-medium">Underperforming Features</h4>
              </div>
              <div className="space-y-3">
                {underperformingFeatures.map(feature => (
                  <div key={feature.id} className="flex items-center justify-between p-3 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{feature.name}</div>
                      <div className="text-xs text-red-600">{feature.primaryIssue}</div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => analyzeFeature(feature.id)}
                    >
                      Analyze
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Engagement Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>User Engagement Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">Session Duration</span>
              </div>
              <div className="text-2xl font-bold">{avgSessionDuration} min</div>
              <div className="text-sm text-green-600">+{sessionDurationTrend}% vs last period</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">Actions per Session</span>
              </div>
              <div className="text-2xl font-bold">{actionsPerSession}</div>
              <div className="text-sm text-green-600">+{actionsTrend}% vs last period</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">Days Active</span>
              </div>
              <div className="text-2xl font-bold">{avgDaysActive}/30</div>
              <div className="text-sm text-red-600">{daysActiveTrend}% vs last period</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Stickiness</span>
              </div>
              <div className="text-2xl font-bold">{stickinessRatio}%</div>
              <div className="text-xs text-muted-foreground">DAU/MAU</div>
            </div>
          </div>

          {/* User Journey Analysis */}
          <div>
            <h4 className="font-medium mb-3">User Journey Paths</h4>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Target className="h-12 w-12 mx-auto mb-2" />
                <p>Sankey Diagram - User Journey Flow</p>
                <p className="text-sm">Entry points to success metrics with drop-off analysis</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product Health Score */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Product Health Score</CardTitle>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{productHealthScore}</div>
              <div className="text-sm text-muted-foreground">/100</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Performance</div>
                <div className="text-xl font-bold text-blue-600">{performanceScore}/100</div>
                <div className="space-y-1 mt-2">
                  <div className="text-xs">Load Time: {avgLoadTime}s</div>
                  <div className="text-xs">Uptime: {uptime}%</div>
                  <div className="text-xs">Error Rate: {errorRate}%</div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Quality</div>
                <div className="text-xl font-bold text-green-600">{qualityScore}/100</div>
                <div className="space-y-1 mt-2">
                  <div className="text-xs">Bug Rate: {bugRate}/KLOC</div>
                  <div className="text-xs">Coverage: {codeCoverage}%</div>
                  <div className="text-xs">Tech Debt: {techDebtScore}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">User Satisfaction</div>
                <div className="text-xl font-bold text-purple-600">{satisfactionScore}/100</div>
                <div className="space-y-1 mt-2">
                  <div className="text-xs">NPS: {npsScore}</div>
                  <div className="text-xs">CSAT: {csatScore}%</div>
                  <div className="text-xs">Support Rate: {supportTicketRate}</div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Business Impact</div>
                <div className="text-xl font-bold text-orange-600">{businessImpactScore}/100</div>
                <div className="space-y-1 mt-2">
                  <div className="text-xs">Revenue: ${revenueImpact}M</div>
                  <div className="text-xs">Savings: ${costSavings}K</div>
                  <div className="text-xs">Market: +{marketShareGain}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Health Trends */}
          <div>
            <h4 className="font-medium mb-3">Health Score Trends</h4>
            <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Multi-line Chart - Health Component Trends</p>
                <p className="text-xs">Overall Health, Performance, Quality, Satisfaction, Business Impact</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
