
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  AlertCircle, 
  TrendingUp, 
  Briefcase, 
  Globe,
  Target,
  DollarSign,
  ChevronRight
} from 'lucide-react';

export function CustomerAnalyticsSection() {
  const [segmentationMethod, setSegmentationMethod] = useState('behavior');
  const [churnModelAccuracy, setChurnModelAccuracy] = useState(89);

  // Mock data
  const churnRate = 8.5;
  const targetChurnRate = 5.0;
  const avgChurnRate = 6.2;

  const customerSegments = [
    {
      id: 'enterprise',
      name: 'Enterprise',
      size: 245,
      revenue: 1850,
      revenuePercentage: 65,
      arpu: 7551,
      arpuGrowth: 12,
      churnRate: 3.2,
      ltv: 42500,
      ltvMultiple: 12.2,
      primaryIndustry: 'Technology',
      companySize: '1000+ employees',
      primaryRegion: 'North America'
    },
    {
      id: 'midmarket',
      name: 'Mid-Market',
      size: 680,
      revenue: 785,
      revenuePercentage: 27,
      arpu: 1154,
      arpuGrowth: 8,
      churnRate: 6.8,
      ltv: 8950,
      ltvMultiple: 8.1,
      primaryIndustry: 'Healthcare',
      companySize: '100-999 employees',
      primaryRegion: 'EMEA'
    },
    {
      id: 'smb',
      name: 'Small Business',
      size: 1245,
      revenue: 230,
      revenuePercentage: 8,
      arpu: 185,
      arpuGrowth: 15,
      churnRate: 12.5,
      ltv: 1850,
      ltvMultiple: 5.2,
      primaryIndustry: 'Professional Services',
      companySize: '10-99 employees',
      primaryRegion: 'APAC'
    }
  ];

  const churnRiskDistribution = [
    { name: 'Very Low', value: 2340, percentage: 65 },
    { name: 'Low', value: 890, percentage: 25 },
    { name: 'Medium', value: 245, percentage: 7 },
    { name: 'High', value: 85, percentage: 2.5 },
    { name: 'Very High', value: 18, percentage: 0.5 }
  ];

  const highRiskCustomers = [
    {
      id: 1,
      name: 'TechCorp Industries',
      arr: 125,
      riskScore: 85,
      topRiskFactors: ['Low engagement', 'Support tickets', 'Contract renewal']
    },
    {
      id: 2,
      name: 'Global Solutions Ltd',
      arr: 89,
      riskScore: 78,
      topRiskFactors: ['Feature usage drop', 'No champion', 'Competitive eval']
    },
    {
      id: 3,
      name: 'DataFlow Systems',
      arr: 67,
      riskScore: 72,
      topRiskFactors: ['Budget concerns', 'Low adoption', 'Team turnover']
    }
  ];

  const churnDrivers = [
    { id: 1, name: 'Poor onboarding experience', impact: 35, affectedCustomers: 145 },
    { id: 2, name: 'Lack of feature adoption', impact: 28, affectedCustomers: 198 },
    { id: 3, name: 'Pricing concerns', impact: 22, affectedCustomers: 89 },
    { id: 4, name: 'Competitive pressure', impact: 15, affectedCustomers: 56 }
  ];

  const lifecycleStages = [
    {
      id: 'trial',
      name: 'Trial',
      customerCount: 1245,
      totalValue: 0,
      conversionToNext: 68,
      avgDuration: 14,
      avgValue: 0,
      avgActivities: 12,
      avgHealthScore: 45
    },
    {
      id: 'onboarding',
      name: 'Onboarding',
      customerCount: 847,
      totalValue: 0.8,
      conversionToNext: 85,
      avgDuration: 30,
      avgValue: 950,
      avgActivities: 28,
      avgHealthScore: 62
    },
    {
      id: 'active',
      name: 'Active',
      customerCount: 720,
      totalValue: 12.5,
      conversionToNext: 25,
      avgDuration: 365,
      avgValue: 17361,
      avgActivities: 156,
      avgHealthScore: 78
    },
    {
      id: 'expansion',
      name: 'Expansion',
      customerCount: 180,
      totalValue: 8.2,
      conversionToNext: 92,
      avgDuration: 90,
      avgValue: 45556,
      avgActivities: 234,
      avgHealthScore: 89
    }
  ];

  const expansionOpportunities = [
    {
      id: 1,
      customerName: 'Enterprise Corp',
      currentArr: 125,
      type: 'Seat Expansion',
      potentialValue: 45,
      probability: 78,
      signals: [
        { id: 1, icon: '👥', text: 'Team size increased 40%' },
        { id: 2, icon: '📈', text: 'Usage up 65% this quarter' },
        { id: 3, icon: '💬', text: 'Asking about enterprise features' }
      ]
    },
    {
      id: 2,
      customerName: 'TechFlow Solutions',
      currentArr: 89,
      type: 'Feature Upsell',
      potentialValue: 28,
      probability: 65,
      signals: [
        { id: 1, icon: '🔧', text: 'Requesting API access' },
        { id: 2, icon: '📊', text: 'Heavy analytics usage' },
        { id: 3, icon: '🎯', text: 'Asking about advanced features' }
      ]
    }
  ];

  const drillIntoSegment = (segmentId: string) => {
    console.log(`Drilling into segment: ${segmentId}`);
  };

  const viewSegmentDetails = (segmentId: string) => {
    console.log(`Viewing details for segment: ${segmentId}`);
  };

  const createCampaign = (segmentId: string) => {
    console.log(`Creating campaign for segment: ${segmentId}`);
  };

  const initiateRetention = (customerId: number) => {
    console.log(`Initiating retention for customer: ${customerId}`);
  };

  const pursueOpportunity = (opportunityId: number) => {
    console.log(`Pursuing opportunity: ${opportunityId}`);
  };

  const analyzeOpportunity = (opportunityId: number) => {
    console.log(`Analyzing opportunity: ${opportunityId}`);
  };

  return (
    <div className="space-y-6">
      {/* Customer Segmentation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Customer Segmentation Analysis</CardTitle>
            <Select value={segmentationMethod} onValueChange={setSegmentationMethod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="behavior">Behavioral</SelectItem>
                <SelectItem value="demographic">Demographic</SelectItem>
                <SelectItem value="value">Value-Based</SelectItem>
                <SelectItem value="lifecycle">Lifecycle Stage</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* Segment Visualization */}
          <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center text-muted-foreground">
              <Target className="h-12 w-12 mx-auto mb-2" />
              <p>Customer Segment Treemap</p>
              <p className="text-sm">Interactive segment visualization by size and value</p>
            </div>
          </div>

          {/* Segment Details */}
          <div className="grid grid-cols-1 gap-4">
            {customerSegments.map(segment => (
              <div key={segment.id} className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">{segment.name}</h4>
                    <p className="text-sm text-muted-foreground">{segment.size} customers</p>
                  </div>
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    ${segment.revenue}K revenue
                  </Badge>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Revenue Share</div>
                    <div className="text-lg font-bold">{segment.revenuePercentage}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">ARPU</div>
                    <div className="text-lg font-bold">${segment.arpu}</div>
                    <div className="text-xs text-green-600">+{segment.arpuGrowth}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Churn Rate</div>
                    <div className="text-lg font-bold">{segment.churnRate}%</div>
                    <div className={`text-xs ${segment.churnRate < avgChurnRate ? 'text-green-600' : 'text-red-600'}`}>
                      {segment.churnRate < avgChurnRate ? 'Below avg' : 'Above avg'}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LTV</div>
                    <div className="text-lg font-bold">${segment.ltv}</div>
                    <div className="text-xs text-muted-foreground">{segment.ltvMultiple}x CAC</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{segment.primaryIndustry}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{segment.companySize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{segment.primaryRegion}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" onClick={() => viewSegmentDetails(segment.id)}>
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => createCampaign(segment.id)}>
                    Target Campaign
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Churn Analysis */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Churn Analysis & Prediction</CardTitle>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Current Churn Rate</div>
              <div className={`text-2xl font-bold ${churnRate > targetChurnRate ? 'text-red-600' : 'text-green-600'}`}>
                {churnRate}%
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Churn Risk Distribution */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Churn Risk Distribution</h4>
              <div className="text-sm text-muted-foreground">Model Accuracy: {churnModelAccuracy}%</div>
            </div>
            
            <div className="grid grid-cols-5 gap-2 mb-4">
              {churnRiskDistribution.map((risk, index) => (
                <div key={risk.name} className="text-center">
                  <div className={`h-24 rounded-lg flex items-end justify-center p-2 ${
                    index === 0 ? 'bg-green-100' :
                    index === 1 ? 'bg-blue-100' :
                    index === 2 ? 'bg-yellow-100' :
                    index === 3 ? 'bg-orange-100' : 'bg-red-100'
                  }`}>
                    <div className={`text-lg font-bold ${
                      index === 0 ? 'text-green-600' :
                      index === 1 ? 'text-blue-600' :
                      index === 2 ? 'text-yellow-600' :
                      index === 3 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {risk.value}
                    </div>
                  </div>
                  <div className="text-xs mt-1">{risk.name}</div>
                  <div className="text-xs text-muted-foreground">{risk.percentage}%</div>
                </div>
              ))}
            </div>

            {/* High Risk Customers */}
            <div>
              <h5 className="font-medium mb-3 text-red-600">High Risk Customers</h5>
              <div className="space-y-3">
                {highRiskCustomers.map(customer => (
                  <div key={customer.id} className="flex items-center justify-between p-4 border border-red-200 bg-red-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">${customer.arr}K ARR</div>
                    </div>
                    <div className="text-right mr-4">
                      <div className="text-lg font-bold text-red-600">{customer.riskScore}%</div>
                      <div className="text-xs text-muted-foreground">Risk Score</div>
                    </div>
                    <div className="flex flex-wrap gap-1 mr-4">
                      {customer.topRiskFactors.map((factor, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => initiateRetention(customer.id)}
                    >
                      Save Customer
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Churn Drivers */}
          <div>
            <h4 className="font-medium mb-3">Churn Drivers Analysis</h4>
            <div className="space-y-3">
              {churnDrivers.map(driver => (
                <div key={driver.id} className="flex items-center gap-4">
                  <div className="flex-1 text-sm">{driver.name}</div>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{ width: `${driver.impact}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{driver.impact}%</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {driver.affectedCustomers} customers
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Lifecycle */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Lifecycle Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Lifecycle Stages Flow */}
          <div className="flex items-center justify-between mb-6">
            {lifecycleStages.map((stage, index) => (
              <React.Fragment key={stage.id}>
                <div className="text-center p-4 border-2 border-primary rounded-lg bg-primary/5">
                  <div className="font-semibold text-lg">{stage.name}</div>
                  <div className="text-2xl font-bold text-primary">{stage.customerCount}</div>
                  <div className="text-sm text-muted-foreground">${stage.totalValue}M value</div>
                  {index < lifecycleStages.length - 1 && (
                    <div className="text-xs text-green-600 mt-1">
                      {stage.conversionToNext}% → next
                    </div>
                  )}
                </div>
                {index < lifecycleStages.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-muted-foreground" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Stage Metrics */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {lifecycleStages.map(stage => (
              <div key={stage.id} className="p-4 border rounded-lg">
                <h5 className="font-medium mb-3">{stage.name} Metrics</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Avg Duration</div>
                    <div className="font-medium">{stage.avgDuration} days</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Avg Value</div>
                    <div className="font-medium">${stage.avgValue}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Avg Activities</div>
                    <div className="font-medium">{stage.avgActivities}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Health Score</div>
                    <div className="font-medium">{stage.avgHealthScore}/100</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expansion Opportunities */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Expansion Opportunities</h4>
              <div className="text-lg font-bold text-green-600">
                ${expansionOpportunities.reduce((sum, opp) => sum + opp.potentialValue, 0)}K potential
              </div>
            </div>

            <div className="space-y-4">
              {expansionOpportunities.map(opportunity => (
                <div key={opportunity.id} className="p-4 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium">{opportunity.customerName}</div>
                      <div className="text-sm text-muted-foreground">${opportunity.currentArr}K current ARR</div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">{opportunity.type}</Badge>
                      <div className="text-lg font-bold text-green-600">+${opportunity.potentialValue}K</div>
                      <div className="text-sm text-muted-foreground">{opportunity.probability}% likely</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-medium mb-2">Buying Signals</div>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.signals.map(signal => (
                        <div key={signal.id} className="flex items-center gap-1 text-xs bg-white px-2 py-1 rounded">
                          <span>{signal.icon}</span>
                          <span>{signal.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => pursueOpportunity(opportunity.id)}>
                      Pursue
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => analyzeOpportunity(opportunity.id)}>
                      Analyze
                    </Button>
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
