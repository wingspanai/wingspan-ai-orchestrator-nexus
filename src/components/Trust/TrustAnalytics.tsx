
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp, AlertTriangle } from "lucide-react";

export function TrustAnalytics() {
  const trustScoreTrend = [
    { date: "Jan", score: 88 },
    { date: "Feb", score: 90 },
    { date: "Mar", score: 87 },
    { date: "Apr", score: 92 },
    { date: "May", score: 94 },
    { date: "Jun", score: 94 }
  ];

  const overrideData = [
    { name: "Automated", value: 2847, color: "#10B981" },
    { name: "Modified", value: 156, color: "#F59E0B" },
    { name: "Overridden", value: 23, color: "#EF4444" }
  ];

  const autonomyDistribution = [
    { level: "Level 1", count: 2, percentage: 15 },
    { level: "Level 2", count: 3, percentage: 23 },
    { level: "Level 3", count: 4, percentage: 31 },
    { level: "Level 4", count: 3, percentage: 23 },
    { level: "Level 5", count: 1, percentage: 8 }
  ];

  const trustFactorsMatrix = [
    { agent: "Sales Assistant", security: 98, transparency: 94, compliance: 96, control: 93 },
    { agent: "Data Analyst", security: 95, transparency: 89, compliance: 94, control: 91 },
    { agent: "Content Creator", security: 92, transparency: 88, compliance: 90, control: 94 }
  ];

  const overrideRate = 5.9;
  const trustImprovement = 6.8;
  const trustTarget = 95;

  return (
    <div className="space-y-6">
      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trust Score Trend - spans 2 columns */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Trust Score Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                score: {
                  label: "Trust Score",
                  color: "#3B82F6",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trustScoreTrend}>
                  <defs>
                    <linearGradient id="trustGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" />
                  <YAxis domain={[80, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ReferenceLine y={trustTarget} stroke="#10B981" strokeDasharray="5 5" />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#3B82F6"
                    fill="url(#trustGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex items-center gap-2 mt-4 p-3 bg-green-50 rounded-lg">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-800">
                Trust score improved by {trustImprovement}% after implementing enhanced decision transparency
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Decision Override Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Decision Override Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={overrideData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {overrideData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center">
                <div className="text-2xl font-bold text-text-primary">{overrideRate}%</div>
                <div className="text-sm text-text-secondary">Override Rate</div>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {overrideData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-text-secondary">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-text-primary">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Autonomy Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Autonomy Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                count: {
                  label: "Count",
                  color: "#8B5CF6",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={autonomyDistribution} layout="horizontal">
                  <XAxis type="number" />
                  <YAxis dataKey="level" type="category" width={60} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" fill="#8B5CF6" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
              <span className="text-sm text-purple-800">
                62% of agents operating at high autonomy levels (3+)
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Trust Factors Matrix */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Trust Factors by Agent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trustFactorsMatrix.map((agent) => (
                <div key={agent.agent} className="space-y-2">
                  <div className="font-medium text-sm text-text-primary">{agent.agent}</div>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Security</span>
                        <span>{agent.security}%</span>
                      </div>
                      <Progress value={agent.security} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Transparency</span>
                        <span>{agent.transparency}%</span>
                      </div>
                      <Progress value={agent.transparency} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Compliance</span>
                        <span>{agent.compliance}%</span>
                      </div>
                      <Progress value={agent.compliance} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Control</span>
                        <span>{agent.control}%</span>
                      </div>
                      <Progress value={agent.control} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
