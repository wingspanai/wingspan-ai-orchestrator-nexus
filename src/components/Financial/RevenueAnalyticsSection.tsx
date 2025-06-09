
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, BarChart, PieChart, Users, DollarSign } from 'lucide-react';

export const RevenueAnalyticsSection = () => {
  const [revenueView, setRevenueView] = useState('overview');

  const revenueData = [
    { month: 'Jan', revenue: 180000, target: 170000, newRevenue: 45000 },
    { month: 'Feb', revenue: 195000, target: 185000, newRevenue: 52000 },
    { month: 'Mar', revenue: 210000, target: 200000, newRevenue: 48000 },
    { month: 'Apr', revenue: 235000, target: 220000, newRevenue: 65000 },
    { month: 'May', revenue: 250000, target: 240000, newRevenue: 58000 },
    { month: 'Jun', revenue: 275000, target: 260000, newRevenue: 72000 }
  ];

  const revenueDrivers = [
    {
      name: 'New Customers',
      revenue: 180,
      percentage: 35,
      trend: 15,
      icon: Users
    },
    {
      name: 'Expansion',
      revenue: 145,
      percentage: 28,
      trend: 22,
      icon: TrendingUp
    },
    {
      name: 'Renewals',
      revenue: 165,
      percentage: 32,
      trend: 8,
      icon: DollarSign
    },
    {
      name: 'Churn',
      revenue: -25,
      percentage: -5,
      trend: -12,
      icon: Users,
      negative: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Revenue Overview Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Revenue Trend Analysis</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Revenue</Button>
              <Button variant="ghost" size="sm">Bookings</Button>
              <Button variant="ghost" size="sm">Collections</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
              target: {
                label: "Target",
                color: "hsl(var(--chart-2))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8B5CF6"
                  fill="url(#revenueGradient)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#10B981"
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div>
                <div className="font-semibold">Revenue growing 18% MoM</div>
                <div className="text-sm text-muted-foreground">On track to exceed quarterly target by $45K</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <BarChart className="h-8 w-8 text-blue-600" />
              <div>
                <div className="font-semibold">Expansion revenue up 22%</div>
                <div className="text-sm text-muted-foreground">Upsells contributing 28% of new revenue</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Drivers */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Drivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {revenueDrivers.map((driver, index) => (
              <Card key={index} className={driver.negative ? "border-red-200 dark:border-red-800" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <driver.icon className={`h-5 w-5 ${driver.negative ? 'text-red-600' : 'text-blue-600'}`} />
                    <Badge variant={driver.trend > 0 ? "default" : "destructive"}>
                      {driver.trend > 0 ? '+' : ''}{driver.trend}%
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="font-semibold">{driver.name}</div>
                    <div className={`text-lg font-bold ${driver.negative ? 'text-red-600' : 'text-green-600'}`}>
                      {driver.negative ? '-' : ''}${Math.abs(driver.revenue)}K
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {driver.percentage}% of total
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
