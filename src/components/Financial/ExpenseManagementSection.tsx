
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChartContainer } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Edit, Download, Brain, Target, Clock } from 'lucide-react';

export const ExpenseManagementSection = () => {
  const totalExpenses = 450;
  const budgetedExpenses = 420;
  const expenseVariance = ((totalExpenses - budgetedExpenses) / budgetedExpenses) * 100;

  const expenseCategories = [
    { name: 'Payroll', amount: 180, percentage: 40, color: '#8B5CF6', trend: 5 },
    { name: 'Infrastructure', amount: 90, percentage: 20, color: '#3B82F6', trend: -2 },
    { name: 'Marketing', amount: 72, percentage: 16, color: '#06B6D4', trend: 15 },
    { name: 'Sales', amount: 54, percentage: 12, color: '#10B981', trend: 8 },
    { name: 'Operations', amount: 36, percentage: 8, color: '#F59E0B', trend: -5 },
    { name: 'Other', amount: 18, percentage: 4, color: '#EF4444', trend: 0 }
  ];

  const optimizations = [
    {
      id: 1,
      category: 'Infrastructure',
      title: 'Cloud Cost Optimization',
      description: 'Right-size underutilized cloud instances and implement auto-scaling policies.',
      savings: 24,
      impact: 'medium',
      effort: 3,
      timeToImplement: '2-3 weeks',
      steps: [
        'Audit current cloud usage patterns',
        'Identify underutilized resources',
        'Implement auto-scaling policies',
        'Set up cost monitoring alerts'
      ]
    },
    {
      id: 2,
      category: 'Software',
      title: 'SaaS License Consolidation',
      description: 'Consolidate overlapping software licenses and negotiate volume discounts.',
      savings: 18,
      impact: 'high',
      effort: 2,
      timeToImplement: '1-2 weeks',
      steps: [
        'Audit all SaaS subscriptions',
        'Identify redundant tools',
        'Negotiate with vendors',
        'Implement usage monitoring'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Expense Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Total Expenses Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Total Operating Expenses</CardTitle>
              <Badge variant="outline">This Quarter</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-3xl font-bold">${totalExpenses}K</div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Actual: ${totalExpenses}K</span>
                  <span>Budget: ${budgetedExpenses}K</span>
                </div>
                <Progress value={(totalExpenses / budgetedExpenses) * 100} />
              </div>
              
              <div className={`text-sm ${expenseVariance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                {expenseVariance > 0 ? 'Over' : 'Under'} budget by ${Math.abs(totalExpenses - budgetedExpenses)}K
                ({Math.abs(expenseVariance).toFixed(1)}%)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expense Categories Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Amount",
                },
              }}
            >
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="amount"
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value}K`, 'Amount']} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <div className="space-y-2 mt-4">
              {expenseCategories.map((category) => (
                <div key={category.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span>{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>${category.amount}K</span>
                    <Badge variant={category.trend > 0 ? "destructive" : "default"}>
                      {category.trend > 0 ? '+' : ''}{category.trend}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Cost Optimization Recommendations */}
      <Card className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-800/20 border-purple-200 dark:border-purple-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              AI Cost Optimization Recommendations
            </CardTitle>
            <Badge variant="secondary">$42K identified</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {optimizations.map((optimization) => (
              <Card key={optimization.id} className="bg-white/80 dark:bg-gray-800/80">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{optimization.category}</Badge>
                    <Badge variant="default">${optimization.savings}K/year</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">{optimization.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{optimization.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="text-xs font-medium text-muted-foreground">Implementation Steps:</div>
                    {optimization.steps.map((step, index) => (
                      <div key={index} className="text-xs flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 text-xs font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-muted-foreground">Effort Required</div>
                      <Progress value={(optimization.effort / 5) * 100} className="w-20 h-1" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Time to Implement</div>
                      <div className="text-sm font-medium">{optimization.timeToImplement}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Implement
                    </Button>
                    <Button variant="ghost" size="sm">
                      Schedule
                    </Button>
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
