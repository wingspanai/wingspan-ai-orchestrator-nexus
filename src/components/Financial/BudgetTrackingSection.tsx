
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, TrendingUp, AlertTriangle, Download, Settings, Eye, Edit } from 'lucide-react';

export const BudgetTrackingSection = () => {
  const [budgetView, setBudgetView] = useState('summary');

  const budgetSummary = {
    revenueVsTarget: 108,
    actualRevenue: 1640,
    targetRevenue: 1520,
    expenseVsBudget: 112,
    actualExpenses: 1344,
    budgetedExpenses: 1200,
    totalVariance: -104,
    revenueVariance: 120,
    expenseVariance: -144
  };

  const budgetItems = [
    {
      id: 1,
      name: 'Sales & Marketing',
      budgeted: 420,
      actual: 465,
      variance: -45,
      variancePercent: -10.7,
      trend: [20, 25, 30, 28, 35, 40],
      status: 'over'
    },
    {
      id: 2,
      name: 'Engineering',
      budgeted: 380,
      actual: 375,
      variance: 5,
      variancePercent: 1.3,
      trend: [15, 18, 20, 22, 25, 28],
      status: 'good'
    },
    {
      id: 3,
      name: 'Operations',
      budgeted: 240,
      actual: 235,
      variance: 5,
      variancePercent: 2.1,
      trend: [10, 12, 14, 15, 16, 18],
      status: 'good'
    },
    {
      id: 4,
      name: 'General & Administrative',
      budgeted: 160,
      actual: 169,
      variance: -9,
      variancePercent: -5.6,
      trend: [8, 9, 10, 11, 12, 13],
      status: 'warning'
    }
  ];

  const getVarianceStatus = (variance: number) => {
    if (variance > 0) return 'good';
    if (variance < -20) return 'critical';
    return 'warning';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-amber-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Budget Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 border-green-200 dark:border-green-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue vs Target</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Progress value={budgetSummary.revenueVsTarget} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>${budgetSummary.actualRevenue}K</span>
                <span>/ ${budgetSummary.targetRevenue}K</span>
              </div>
              <div className="text-green-600 font-medium">{budgetSummary.revenueVsTarget}% of target</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-800/20 border-amber-200 dark:border-amber-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expense Control</CardTitle>
            <TrendingUp className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Progress value={budgetSummary.expenseVsBudget} className="h-2" />
              <div className="flex justify-between text-sm">
                <span>${budgetSummary.actualExpenses}K</span>
                <span>/ ${budgetSummary.budgetedExpenses}K</span>
              </div>
              <div className="text-amber-600 font-medium">{budgetSummary.expenseVsBudget}% of budget</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-800/20 border-red-200 dark:border-red-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Variance Alert</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-red-600">
                ${Math.abs(budgetSummary.totalVariance)}K
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Revenue:</span>
                  <span className="text-green-600">+${budgetSummary.revenueVariance}K</span>
                </div>
                <div className="flex justify-between">
                  <span>Expenses:</span>
                  <span className="text-red-600">${budgetSummary.expenseVariance}K</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Budget View Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Budget vs Actual Tracking</CardTitle>
            <div className="flex gap-2">
              <select 
                className="px-3 py-1 border rounded bg-white dark:bg-gray-800"
                value={budgetView}
                onChange={(e) => setBudgetView(e.target.value)}
              >
                <option value="summary">Summary</option>
                <option value="detailed">Detailed</option>
                <option value="variance">Variance Analysis</option>
              </select>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Budget Settings
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input 
                type="text" 
                placeholder="Search budget items..."
                className="flex-1 px-3 py-2 border rounded-md bg-white dark:bg-gray-800"
              />
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Actual</TableHead>
                  <TableHead>Variance</TableHead>
                  <TableHead>% Variance</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {budgetItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>${item.budgeted}K</TableCell>
                    <TableCell>${item.actual}K</TableCell>
                    <TableCell>
                      <span className={item.variance < 0 ? 'text-red-600' : 'text-green-600'}>
                        ${Math.abs(item.variance)}K
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={item.variance < 0 ? "destructive" : "default"}>
                        {item.variancePercent}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="w-16 h-8 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                        <span className="text-xs">📈</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
