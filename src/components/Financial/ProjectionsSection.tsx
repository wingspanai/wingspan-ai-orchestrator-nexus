
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, Area, AreaChart } from 'recharts';
import { Target, TrendingUp, AlertTriangle, Download } from 'lucide-react';

export const ProjectionsSection = () => {
  const [selectedScenario, setSelectedScenario] = useState('realistic');
  const [projectionHorizon, setProjectionHorizon] = useState('12');
  const [revenueGrowthRate, setRevenueGrowthRate] = useState(15);
  const [projectedChurnRate, setProjectedChurnRate] = useState(5);

  const projectionData = [
    { month: 'Jul', revenueProjection: 280000, expenseProjection: 220000, profitProjection: 60000 },
    { month: 'Aug', revenueProjection: 295000, expenseProjection: 235000, profitProjection: 60000 },
    { month: 'Sep', revenueProjection: 315000, expenseProjection: 245000, profitProjection: 70000 },
    { month: 'Oct', revenueProjection: 340000, expenseProjection: 260000, profitProjection: 80000 },
    { month: 'Nov', revenueProjection: 365000, expenseProjection: 275000, profitProjection: 90000 },
    { month: 'Dec', revenueProjection: 395000, expenseProjection: 290000, profitProjection: 105000 }
  ];

  const cashFlowProjection = [
    { category: 'Starting Cash', value: 4200 },
    { category: 'Revenue', value: 1850 },
    { category: 'Operating Expenses', value: -1420 },
    { category: 'Marketing', value: -380 },
    { category: 'Other', value: -150 },
    { category: 'Ending Cash', value: 4100 }
  ];

  const scenarios = {
    conservative: { growth: 8, churn: 7, expenses: 15 },
    realistic: { growth: 15, churn: 5, expenses: 12 },
    optimistic: { growth: 25, churn: 3, expenses: 8 }
  };

  return (
    <div className="space-y-6">
      {/* Scenario Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Financial Projections</CardTitle>
            <div className="flex gap-2">
              <select 
                className="px-3 py-1 border rounded bg-white dark:bg-gray-800"
                value={selectedScenario}
                onChange={(e) => setSelectedScenario(e.target.value)}
              >
                <option value="conservative">Conservative</option>
                <option value="realistic">Realistic</option>
                <option value="optimistic">Optimistic</option>
                <option value="custom">Custom</option>
              </select>
              <select 
                className="px-3 py-1 border rounded bg-white dark:bg-gray-800"
                value={projectionHorizon}
                onChange={(e) => setProjectionHorizon(e.target.value)}
              >
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
              </select>
            </div>
          </div>
        </CardHeader>
        {selectedScenario === 'custom' && (
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Revenue Growth Rate</label>
                <Slider
                  value={[revenueGrowthRate]}
                  onValueChange={(value) => setRevenueGrowthRate(value[0])}
                  max={50}
                  min={-10}
                  step={1}
                />
                <div className="text-sm text-muted-foreground">{revenueGrowthRate}% / month</div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Churn Rate</label>
                <Slider
                  value={[projectedChurnRate]}
                  onValueChange={(value) => setProjectedChurnRate(value[0])}
                  max={20}
                  min={0}
                  step={0.5}
                />
                <div className="text-sm text-muted-foreground">{projectedChurnRate}% / month</div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Reset to Defaults</Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Projection Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue & Expense Projection */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue & Expense Projection</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenueProjection: {
                  label: "Projected Revenue",
                  color: "hsl(var(--chart-1))",
                },
                expenseProjection: {
                  label: "Projected Expenses",
                  color: "hsl(var(--chart-2))",
                },
                profitProjection: {
                  label: "Projected Profit",
                  color: "hsl(var(--chart-3))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={projectionData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ReferenceLine x="Jul" stroke="#666" label="Today" strokeDasharray="2 2" />
                  <Area
                    type="monotone"
                    dataKey="revenueProjection"
                    stroke="#8B5CF6"
                    fill="url(#revenueGradient)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenseProjection"
                    stroke="#EF4444"
                    fill="url(#expenseGradient)"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="profitProjection"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Target className="h-8 w-8 text-green-600" />
                <div>
                  <div className="font-semibold">Profitability Target</div>
                  <div className="text-sm text-muted-foreground">Expected in 4 months (Nov 2024)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="font-semibold">Revenue Milestone</div>
                  <div className="text-sm text-muted-foreground">$5M ARR projected in 8 months</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cash Runway */}
        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Projection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">18 months</div>
                <div className="text-sm text-muted-foreground">Projected Runway</div>
              </div>
              
              <div className="space-y-2">
                {cashFlowProjection.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{item.category}</span>
                    <span className={`font-medium ${item.value > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.value > 0 ? '+' : ''}${Math.abs(item.value)}K
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Unit Economics */}
        <Card>
          <CardHeader>
            <CardTitle>Unit Economics Projection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-sm text-muted-foreground">Current CAC</div>
                  <div className="text-xl font-bold">$450</div>
                </div>
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-sm text-muted-foreground">Projected CAC</div>
                  <div className="text-xl font-bold text-green-600">$380</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-sm text-muted-foreground">Current LTV</div>
                  <div className="text-xl font-bold">$1,890</div>
                </div>
                <div className="text-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <div className="text-sm text-muted-foreground">Projected LTV</div>
                  <div className="text-xl font-bold text-indigo-600">$2,280</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
