
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  DollarSign,
  TrendingUp,
  FileSpreadsheet,
  Settings,
  Droplets,
  Clock,
  Activity
} from 'lucide-react';

interface FinancialDashboardHeaderProps {
  metrics: {
    mrr: number;
    mrrChange: number;
    burnRate: number;
    cashRunway: number;
    currentCash: number;
    netCashFlow: number;
    ltvCacRatio: number;
    cacPayback: number;
  };
  dateRange: { label: string; value: string };
  onDateRangeChange: (range: { label: string; value: string }) => void;
}

export const FinancialDashboardHeader: React.FC<FinancialDashboardHeaderProps> = ({
  metrics,
  dateRange,
  onDateRangeChange
}) => {
  const cashFlowHealth = Math.min((metrics.currentCash / 5) * 100, 100);

  return (
    <div className="space-y-6">
      {/* Header Top */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Financial Intelligence
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Real-time financial insights and forecasting
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select 
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800"
            value={dateRange.value}
            onChange={(e) => onDateRangeChange({ 
              label: e.target.selectedOptions[0].text, 
              value: e.target.value 
            })}
          >
            <option value="mtd">MTD</option>
            <option value="qtd">QTD</option>
            <option value="ytd">YTD</option>
            <option value="lastQuarter">Last Quarter</option>
          </select>
          <Button variant="outline">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="ghost">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      {/* Financial Health Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cash Flow Indicator */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-800/20 border-blue-200 dark:border-blue-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-blue-600" />
              Cash Flow Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                  ${metrics.currentCash}M
                </div>
                <div className="text-sm text-muted-foreground">Cash on Hand</div>
              </div>
              <div className="text-right">
                <Badge variant={metrics.cashRunway > 12 ? "default" : "destructive"}>
                  {metrics.cashRunway} months runway
                </Badge>
              </div>
            </div>
            
            <Progress value={cashFlowHealth} className="mb-4" />
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Burn:</span>
                <span className="font-medium text-red-600">-${metrics.burnRate}K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Net Cash Flow:</span>
                <span className={`font-medium ${metrics.netCashFlow > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {metrics.netCashFlow > 0 ? '+' : ''}${metrics.netCashFlow}K
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-600" />
              Key Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                    ${metrics.mrr}M
                  </div>
                  <div className="text-sm text-muted-foreground">Monthly Recurring Revenue</div>
                  <div className="flex items-center text-xs text-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +{metrics.mrrChange}% MoM
                  </div>
                </div>
                
                <div>
                  <div className="text-xl font-bold">
                    {metrics.ltvCacRatio}:1
                  </div>
                  <div className="text-sm text-muted-foreground">LTV:CAC Ratio</div>
                  <Badge variant="secondary" className="text-xs">
                    {metrics.ltvCacRatio > 3 ? 'Healthy' : 'Needs improvement'}
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-xl font-bold">
                    {metrics.cacPayback} mo
                  </div>
                  <div className="text-sm text-muted-foreground">CAC Payback Period</div>
                  <div className="text-xs text-green-600">Improving</div>
                </div>
                
                <div>
                  <div className="text-xl font-bold">
                    ${metrics.burnRate}K
                  </div>
                  <div className="text-sm text-muted-foreground">Monthly Burn Rate</div>
                  <div className="text-xs text-green-600">Under control</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
