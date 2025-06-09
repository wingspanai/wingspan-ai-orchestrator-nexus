
import { MainLayout } from "@/components/Layout/MainLayout";
import { MetricCard } from "@/components/Dashboard/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, RefreshCw, FileDown, TrendingUp, Users, Brain, Target, DollarSign, Zap, Activity, BarChart, LineChart, ArrowLeft, Settings } from "lucide-react";
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, BarChart as RechartsBarChart, Bar, ComposedChart } from "recharts";

const ExecutiveOverview = () => {
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [dateRange, setDateRange] = useState("30d");
  const [comparing, setComparing] = useState(false);

  // Mock data for analytics
  const businessMetrics = {
    bsvi: 87.3,
    bsviChange: 12.4,
    eas: 73.2,
    paq: 94.7
  };

  const revenueData = [
    { date: "Jan", revenue: 2400, aiImpact: 15, aiContribution: 360 },
    { date: "Feb", revenue: 2800, aiImpact: 22, aiContribution: 616 },
    { date: "Mar", revenue: 3200, aiImpact: 28, aiContribution: 896 },
    { date: "Apr", revenue: 3600, aiImpact: 35, aiContribution: 1260 },
    { date: "May", revenue: 4200, aiImpact: 42, aiContribution: 1764 },
    { date: "Jun", revenue: 4800, aiImpact: 48, aiContribution: 2304 }
  ];

  const automationTrends = [
    { month: "Jan", sales: 45, marketing: 32, hr: 28, finance: 38 },
    { month: "Feb", sales: 52, marketing: 38, hr: 34, finance: 42 },
    { month: "Mar", sales: 58, marketing: 45, hr: 41, finance: 48 },
    { month: "Apr", sales: 65, marketing: 52, hr: 47, finance: 55 },
    { month: "May", sales: 72, marketing: 58, hr: 53, finance: 62 },
    { month: "Jun", sales: 78, marketing: 65, hr: 59, finance: 68 }
  ];

  const departmentAdoption = [
    { department: "Sales", adoption: 78, color: "#8B5CF6" },
    { department: "Marketing", adoption: 65, color: "#3B82F6" },
    { department: "HR", adoption: 59, color: "#10B981" },
    { department: "Finance", adoption: 68, color: "#F59E0B" },
    { department: "Operations", adoption: 82, color: "#EF4444" }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Analytics Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-display text-gradient">
              Business Analytics
            </h1>
            <p className="text-muted-foreground mt-1">
              Last updated {new Date().toLocaleTimeString()}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <FileDown className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Business Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <Badge variant="outline">Featured</Badge>
              </div>
              <CardTitle className="text-lg">Business Scaling Velocity Index (BSVI)</CardTitle>
              <CardDescription>
                Proprietary metric measuring growth acceleration
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">{businessMetrics.bsvi}</div>
                  <div className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +{businessMetrics.bsviChange}% from last period
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <div className="font-medium">Revenue</div>
                    <div className="text-green-600">+18%</div>
                  </div>
                  <div>
                    <div className="font-medium">Acquisition</div>
                    <div className="text-green-600">+24%</div>
                  </div>
                  <div>
                    <div className="font-medium">Efficiency</div>
                    <div className="text-green-600">+31%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">Employee Augmentation Score</CardTitle>
                  <CardDescription>AI enhancement of workforce</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{businessMetrics.eas}%</span>
                  <Badge className="bg-blue-100 text-blue-700">Excellent</Badge>
                </div>
                <Progress value={businessMetrics.eas} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">Predictive Accuracy Quotient</CardTitle>
                  <CardDescription>AI prediction accuracy</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-2xl font-bold">{businessMetrics.paq}%</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${businessMetrics.paq}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">Target: 90%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Featured Chart - AI Impact on Revenue */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>AI Impact on Revenue</CardTitle>
                    <CardDescription>Revenue growth and AI contribution over time</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <LineChart className="h-4 w-4 mr-2" />
                      Line
                    </Button>
                    <Button variant="ghost" size="sm">
                      <BarChart className="h-4 w-4 mr-2" />
                      Bar
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: { label: "Revenue", color: "#8B5CF6" },
                    aiContribution: { label: "AI Contribution", color: "#06B6D4" },
                    aiImpact: { label: "AI Impact %", color: "#3B82F6" }
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="revenue" orientation="left" />
                      <YAxis yAxisId="impact" orientation="right" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        yAxisId="revenue"
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        fill="var(--color-revenue)"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                      <Bar
                        yAxisId="revenue"
                        dataKey="aiContribution"
                        fill="var(--color-aiContribution)"
                        opacity={0.6}
                      />
                      <Line
                        yAxisId="impact"
                        type="monotone"
                        dataKey="aiImpact"
                        stroke="var(--color-aiImpact)"
                        strokeWidth={2}
                        dot={{ fill: "var(--color-aiImpact)", r: 4 }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="text-sm font-medium">AI Revenue Contribution</div>
                      <div className="text-lg font-bold text-purple-600">$2.3M (48%)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm font-medium">Growth Acceleration</div>
                      <div className="text-lg font-bold text-blue-600">+127%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Task Automation Trends</CardTitle>
                  <CardDescription>Automation progress by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      sales: { label: "Sales", color: "#8B5CF6" },
                      marketing: { label: "Marketing", color: "#3B82F6" },
                      hr: { label: "HR", color: "#10B981" },
                      finance: { label: "Finance", color: "#F59E0B" }
                    }}
                    className="h-[250px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={automationTrends}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="sales"
                          stackId="1"
                          stroke="var(--color-sales)"
                          fill="var(--color-sales)"
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="marketing"
                          stackId="1"
                          stroke="var(--color-marketing)"
                          fill="var(--color-marketing)"
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="hr"
                          stackId="1"
                          stroke="var(--color-hr)"
                          fill="var(--color-hr)"
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="finance"
                          stackId="1"
                          stroke="var(--color-finance)"
                          fill="var(--color-finance)"
                          fillOpacity={0.6}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Department Adoption</CardTitle>
                  <CardDescription>AI adoption rates across departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departmentAdoption.map((dept) => (
                      <div key={dept.department} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{dept.department}</span>
                          <span className="text-sm text-muted-foreground">{dept.adoption}%</span>
                        </div>
                        <Progress value={dept.adoption} className="h-2" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-green-700">Top Performers</div>
                    <div className="text-xs text-green-600 mt-1">
                      Operations (82%) • Sales (78%) • Finance (68%)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                title="Active AI Agents"
                value={47}
                change="+12"
                changeType="positive"
                period="vs last month"
                icon={<Target className="h-4 w-4 text-white" />}
              />
              <MetricCard
                title="Tasks Automated"
                value="12,847"
                change="+34%"
                changeType="positive"
                subtitle="$247K saved this month"
                icon={<Activity className="h-4 w-4 text-white" />}
              />
              <MetricCard
                title="Revenue Impact"
                value="$2.4M"
                change="+18%"
                changeType="positive"
                subtitle="AI-attributed revenue"
                icon={<DollarSign className="h-4 w-4 text-white" />}
              />
              <MetricCard
                title="Team Productivity"
                value="+67%"
                change="+12%"
                changeType="positive"
                subtitle="With AI augmentation"
                icon={<Users className="h-4 w-4 text-white" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Department Performance Comparison</CardTitle>
                <CardDescription>AI adoption and impact metrics by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {departmentAdoption.map((dept) => (
                    <div key={dept.department} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{dept.department}</h3>
                        <Badge variant="outline">{dept.adoption}% Adopted</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Tasks Automated</div>
                          <div className="font-medium">{Math.floor(Math.random() * 500) + 200}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Time Saved</div>
                          <div className="font-medium">{Math.floor(Math.random() * 100) + 50}h</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">ROI</div>
                          <div className="font-medium text-green-600">${Math.floor(Math.random() * 50) + 20}K</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>AI-generated business insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-green-700">Revenue Acceleration</div>
                          <div className="text-sm text-green-600 mt-1">
                            AI agents contributed 48% of revenue growth this quarter, 
                            accelerating from 15% in Q1 to current levels.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-blue-700">Productivity Gains</div>
                          <div className="text-sm text-blue-600 mt-1">
                            Teams using AI agents show 67% higher productivity, 
                            equivalent to adding 23 full-time employees.
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                          <div className="font-medium text-amber-700">Optimization Opportunity</div>
                          <div className="text-sm text-amber-600 mt-1">
                            Marketing department has 35% adoption rate - potential for 
                            $180K additional monthly savings with full deployment.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Predictive Forecast</CardTitle>
                  <CardDescription>30-day business projections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm text-muted-foreground">Revenue Forecast</div>
                      <div className="text-2xl font-bold">$5.8M</div>
                      <div className="text-sm text-green-600">+22% vs current run rate</div>
                      <div className="text-xs text-muted-foreground mt-1">94% confidence</div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm text-muted-foreground">AI Contribution</div>
                      <div className="text-2xl font-bold">$3.1M</div>
                      <div className="text-sm text-blue-600">53% of total revenue</div>
                      <div className="text-xs text-muted-foreground mt-1">88% confidence</div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="text-sm text-muted-foreground">Tasks Automated</div>
                      <div className="text-2xl font-bold">18,500</div>
                      <div className="text-sm text-purple-600">+44% month over month</div>
                      <div className="text-xs text-muted-foreground mt-1">91% confidence</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Drill-down Panel */}
        {selectedMetric && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedMetric(null)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Overview
                  </Button>
                  <div>
                    <CardTitle>Deep Dive: {selectedMetric.name}</CardTitle>
                    <CardDescription>Detailed analysis and breakdown</CardDescription>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                Detailed analytics view for {selectedMetric.name}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </MainLayout>
  );
};

export default ExecutiveOverview;
