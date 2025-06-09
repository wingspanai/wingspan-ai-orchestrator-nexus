
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  Users, 
  AlertCircle, 
  Target,
  FileText,
  Calendar,
  DollarSign,
  BarChart
} from 'lucide-react';

export function ExecutiveReporting() {
  const [executiveDateRange, setExecutiveDateRange] = useState('quarter');
  const [performanceView, setPerformanceView] = useState('quarterly');

  // Mock executive data
  const revenueGrowth = 28;
  const revenueExcess = 2.4;
  const totalCustomers = 12450;
  const netNewCustomers = 1890;
  const churnRate = 6.2;
  const marketShare = 4.8;
  const marketPosition = 3;
  const currentDate = 'Dec 31, 2024';
  const arr = 42.5;
  const arrGrowth = 35;
  const ltv = 8750;
  const ltvCacRatio = 8.2;
  const currentQuarter = 4;
  const currentYear = 2024;
  const nps = 68;
  const industryNPS = 52;
  const promoters = 45;
  const passives = 38;
  const detractors = 17;
  const pmfScore = 72;
  const pmfInsight = 'Strong product-market fit with room for improvement in enterprise segment';

  const revenueAttainment = 112;
  const annualRunRate = 51.2;
  const pipelineCoverage = 3.2;
  const logoRetention = 94;
  const dollarRetention = 118;
  const expansionRate = 24;

  const strategicInitiatives = [
    {
      id: 1,
      name: 'Enterprise Market Expansion',
      owner: 'Sarah Johnson',
      progress: 78,
      projectedImpact: 15.2,
      timeline: 'Q2 2025',
      riskLevel: 'medium',
      expectedROI: 340,
      status: 'on-track',
      nextMilestone: 'Enterprise feature beta launch'
    },
    {
      id: 2,
      name: 'AI-Powered Analytics Suite',
      owner: 'Alex Chen',
      progress: 45,
      projectedImpact: 8.7,
      timeline: 'Q3 2025',
      riskLevel: 'low',
      expectedROI: 280,
      status: 'on-track',
      nextMilestone: 'ML model training completion'
    },
    {
      id: 3,
      name: 'International Expansion - EMEA',
      owner: 'Emma Davis',
      progress: 23,
      projectedImpact: 12.4,
      timeline: 'Q4 2025',
      riskLevel: 'high',
      expectedROI: 450,
      status: 'at-risk',
      nextMilestone: 'Regulatory compliance review'
    }
  ];

  const exportExecutiveReport = (format: string) => {
    console.log(`Exporting executive report as ${format}...`);
  };

  const scheduleReport = () => {
    console.log('Opening report scheduling modal...');
  };

  const getRiskIndicator = (level: string) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };
    return (
      <Badge className={colors[level as keyof typeof colors]}>
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      'on-track': 'bg-green-100 text-green-800',
      'at-risk': 'bg-red-100 text-red-800',
      'delayed': 'bg-yellow-100 text-yellow-800'
    };
    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Executive Dashboard Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Executive Dashboard</h2>
            <p className="text-slate-300">Strategic performance overview and key business metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <Select value={executiveDateRange} onValueChange={setExecutiveDateRange}>
              <SelectTrigger className="w-[150px] bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary" onClick={() => exportExecutiveReport('pdf')}>
              <FileText className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            <Button variant="secondary" onClick={scheduleReport}>
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Executive Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Key Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-green-800">
                    Revenue grew {revenueGrowth}% YoY, exceeding targets by ${revenueExcess}M
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-blue-800">
                    Customer base expanded to {totalCustomers.toLocaleString()} with {netNewCustomers.toLocaleString()} net new logos
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <div>
                  <div className="font-medium text-yellow-800">
                    Churn rate increased to {churnRate}%, requiring immediate attention
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border border-purple-200 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium text-purple-800">
                    Market share reached {marketShare}%, positioning us as #{marketPosition}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Metrics */}
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Annual Recurring Revenue</div>
                <div className="text-xs text-muted-foreground">As of {currentDate}</div>
              </div>
              <div className="text-2xl font-bold">${arr}M</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-lg font-medium text-green-600">{arrGrowth}%</span>
                <span className="text-sm text-muted-foreground">YoY Growth</span>
              </div>
              <div className="h-12 mt-2 bg-muted/30 rounded flex items-end justify-end p-2">
                <div className="text-xs text-muted-foreground">▲ Trending up</div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Customer Lifetime Value</div>
                <div className="text-xs text-muted-foreground">3-Year Average</div>
              </div>
              <div className="text-2xl font-bold">${ltv.toLocaleString()}</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-lg font-medium text-blue-600">{ltvCacRatio}:1</span>
                <span className="text-sm text-muted-foreground">LTV:CAC Ratio</span>
              </div>
              <div className="h-12 mt-2 bg-muted/30 rounded flex items-center justify-center">
                <div className="text-xs text-muted-foreground">Trend chart</div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Net Promoter Score</div>
                <div className="text-xs text-muted-foreground">Q{currentQuarter} {currentYear}</div>
              </div>
              <div className="text-2xl font-bold">{nps}</div>
              <div className="flex items-center gap-1 mb-2">
                <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                  <div className="flex h-full">
                    <div className="bg-green-500" style={{ width: `${promoters}%` }}></div>
                    <div className="bg-yellow-500" style={{ width: `${passives}%` }}></div>
                    <div className="bg-red-500" style={{ width: `${detractors}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">Industry Avg: {industryNPS}</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Product-Market Fit</div>
                <div className="text-xs text-muted-foreground">Latest Survey</div>
              </div>
              <div className="text-2xl font-bold">{pmfScore}%</div>
              <div className="text-xs text-muted-foreground mb-2">
                Would be very disappointed without product
              </div>
              <div className="text-xs text-blue-600">{pmfInsight}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Performance Overview</CardTitle>
            <Select value={performanceView} onValueChange={setPerformanceView}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="quarterly">Quarterly View</SelectItem>
                <SelectItem value="monthly">Monthly View</SelectItem>
                <SelectItem value="weekly">Weekly View</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            {/* Revenue Performance */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Revenue Performance</h4>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>Target</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Actual</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Forecast</span>
                  </div>
                </div>
              </div>
              
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-muted-foreground">
                  <BarChart className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Revenue Performance Chart</p>
                  <p className="text-xs">Target vs Actual vs Forecast</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Attainment</div>
                  <div className="font-bold text-green-600">{revenueAttainment}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Run Rate</div>
                  <div className="font-bold">${annualRunRate}M</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Pipeline Coverage</div>
                  <div className="font-bold">{pipelineCoverage}x</div>
                </div>
              </div>
            </div>

            {/* Customer Metrics */}
            <div>
              <h4 className="font-medium mb-3">Customer Metrics</h4>
              
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-muted-foreground">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Customer Metrics Chart</p>
                  <p className="text-xs">Customer Count vs Churn Rate</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Logo Retention</div>
                  <div className="font-bold text-green-600">{logoRetention}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Dollar Retention</div>
                  <div className="font-bold text-blue-600">{dollarRetention}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Expansion Rate</div>
                  <div className="font-bold text-purple-600">{expansionRate}%</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Strategic Initiatives */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic Initiatives Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strategicInitiatives.map(initiative => (
              <div key={initiative.id} className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">{initiative.name}</h4>
                    <p className="text-sm text-muted-foreground">Owner: {initiative.owner}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(initiative.status)}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium">{initiative.progress}% Complete</span>
                  </div>
                  <Progress value={initiative.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Impact</div>
                    <div className="font-bold">${initiative.projectedImpact}M</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Timeline</div>
                    <div className="font-bold">{initiative.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Risk</div>
                    <div>{getRiskIndicator(initiative.riskLevel)}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Expected ROI</div>
                    <div className="font-bold">{initiative.expectedROI}%</div>
                  </div>
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">Next Milestone: </span>
                  <span className="font-medium">{initiative.nextMilestone}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
