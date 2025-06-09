
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  DollarSign, 
  TrendingUp, 
  ShoppingCart, 
  Repeat,
  Brain,
  BarChart,
  Target
} from 'lucide-react';

export function BusinessMetricsSection() {
  const [revenueSegment, setRevenueSegment] = useState('all');
  const [showForecast, setShowForecast] = useState(true);

  // Mock data
  const monthlyRecurringRevenue = 420;
  const mrrGrowth = 12;
  const annualRecurringRevenue = 5.2;
  const arrGrowth = 28;
  const averageRevenuePerUser = 89;
  const arpuGrowth = 7;
  const customerLifetimeValue = 1450;
  const ltvCacRatio = 8.2;

  const grossMargin = 82;
  const industryGrossMargin = 75;
  const operatingMargin = 15;
  const operatingMarginTrend = '+3%';
  const ebitda = 2.1;
  const ebitdaGrowth = 45;
  const burnRate = 350;
  const runway = 18;

  const customerAcquisitionCost = 175;
  const paybackPeriod = 6;
  const lifetimeValue = 1450;

  return (
    <div className="space-y-6">
      {/* Revenue Analytics */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Revenue Analytics</CardTitle>
            <div className="flex items-center gap-2">
              <Select value={revenueSegment} onValueChange={setRevenueSegment}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Revenue</SelectItem>
                  <SelectItem value="product">By Product</SelectItem>
                  <SelectItem value="region">By Region</SelectItem>
                  <SelectItem value="channel">By Channel</SelectItem>
                  <SelectItem value="customer">By Customer Type</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Revenue Chart Placeholder */}
          <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center text-muted-foreground">
              <BarChart className="h-12 w-12 mx-auto mb-2" />
              <p>Revenue Analytics Chart</p>
              <p className="text-sm">Interactive revenue visualization with forecasting</p>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">MRR</span>
              </div>
              <div className="text-2xl font-bold">${monthlyRecurringRevenue}K</div>
              <div className="text-sm text-green-600">+{mrrGrowth}% MoM</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">ARR</span>
              </div>
              <div className="text-2xl font-bold">${annualRecurringRevenue}M</div>
              <div className="text-sm text-blue-600">+{arrGrowth}% YoY</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium">ARPU</span>
              </div>
              <div className="text-2xl font-bold">${averageRevenuePerUser}</div>
              <div className="text-sm text-purple-600">+{arpuGrowth}% QoQ</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Repeat className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium">LTV</span>
              </div>
              <div className="text-2xl font-bold">${customerLifetimeValue}</div>
              <div className="text-sm text-orange-600">LTV:CAC {ltvCacRatio}:1</div>
            </div>
          </div>

          {/* Revenue Drivers */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Revenue Drivers Analysis</h3>
              <Button variant="outline" size="sm">
                <Brain className="w-4 h-4 mr-2" />
                Analyze Drivers
              </Button>
            </div>
            
            <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Target className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Waterfall Chart - Revenue Drivers</p>
                <p className="text-xs">New Customers, Expansion, Churn, Pricing Changes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profitability Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Profitability Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Gross Margin</div>
              <div className="text-2xl font-bold text-green-600">{grossMargin}%</div>
              <div className="text-xs text-muted-foreground">Industry: {industryGrossMargin}%</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Operating Margin</div>
              <div className="text-2xl font-bold">{operatingMargin}%</div>
              <div className="text-xs text-green-600">{operatingMarginTrend}</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">EBITDA</div>
              <div className="text-2xl font-bold">${ebitda}M</div>
              <div className="text-xs text-green-600">+{ebitdaGrowth}% YoY</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Burn Rate</div>
              <div className="text-2xl font-bold">${burnRate}K/mo</div>
              <div className="text-xs text-blue-600">{runway} months runway</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Cost Breakdown Chart */}
            <div>
              <h4 className="font-medium mb-3">Cost Breakdown</h4>
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BarChart className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">Donut Chart - Cost Categories</p>
                  <p className="text-xs">R&D, Sales & Marketing, Operations, G&A</p>
                </div>
              </div>
            </div>

            {/* Cost Efficiency Metrics */}
            <div>
              <h4 className="font-medium mb-3">Cost Efficiency</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Sales Efficiency</span>
                  <span className="text-sm font-medium">2.3x</span>
                  <span className="text-xs text-green-600">+15% improved</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">R&D Productivity</span>
                  <span className="text-sm font-medium">$1.2M/eng</span>
                  <span className="text-xs text-green-600">+8% improved</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Marketing ROI</span>
                  <span className="text-sm font-medium">4.5x</span>
                  <span className="text-xs text-green-600">+22% improved</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Unit Economics */}
      <Card>
        <CardHeader>
          <CardTitle>Unit Economics</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Unit Economics Flow */}
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">CAC</div>
              <div className="text-xl font-bold">${customerAcquisitionCost}</div>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Payback Period</div>
              <div className="text-xl font-bold">{paybackPeriod} months</div>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="text-center p-4 border-2 border-primary rounded-lg bg-primary/5">
              <div className="text-sm text-muted-foreground">LTV</div>
              <div className="text-xl font-bold text-primary">${lifetimeValue}</div>
            </div>
          </div>

          {/* Cohort Analysis */}
          <div>
            <h4 className="font-medium mb-3">Cohort Retention Analysis</h4>
            <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Cohort Retention Heatmap</p>
                <p className="text-xs">Monthly retention rates by acquisition cohort</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
