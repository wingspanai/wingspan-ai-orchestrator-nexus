
import React, { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { FinancialDashboardHeader } from '@/components/Financial/FinancialDashboardHeader';
import { RevenueAnalyticsSection } from '@/components/Financial/RevenueAnalyticsSection';
import { ExpenseManagementSection } from '@/components/Financial/ExpenseManagementSection';
import { ProjectionsSection } from '@/components/Financial/ProjectionsSection';
import { AIFinancialInsightsPanel } from '@/components/Financial/AIFinancialInsightsPanel';
import { BudgetTrackingSection } from '@/components/Financial/BudgetTrackingSection';
import {
  DollarSign,
  TrendingUp,
  Target,
  Percent,
  Brain,
  AlertTriangle,
  FileSpreadsheet,
  Settings,
  RefreshCw
} from 'lucide-react';

const FinancialDashboard = () => {
  const [dateRange, setDateRange] = useState({ label: 'YTD', value: 'ytd' });
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data - in real app would come from API
  const financialMetrics = {
    mrr: 2.4,
    mrrChange: 12.3,
    burnRate: 180,
    cashRunway: 18,
    currentCash: 4.2,
    netCashFlow: 85,
    ltvCacRatio: 4.2,
    cacPayback: 14
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 py-8 space-y-8">
          {/* Financial Dashboard Header */}
          <FinancialDashboardHeader 
            metrics={financialMetrics}
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
          />

          {/* Navigation Tabs */}
          <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'revenue', label: 'Revenue Analytics' },
              { id: 'expenses', label: 'Expense Management' },
              { id: 'projections', label: 'Projections' },
              { id: 'budget', label: 'Budget Tracking' }
            ].map(tab => (
              <Button
                key={tab.id}
                variant={activeSection === tab.id ? "default" : "ghost"}
                onClick={() => setActiveSection(tab.id)}
                className="flex-1"
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Content Sections */}
          {activeSection === 'overview' && (
            <div className="space-y-8">
              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                      ${financialMetrics.mrr}M
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-green-600">
                      <TrendingUp className="h-3 w-3" />
                      <span>+{financialMetrics.mrrChange}% MoM</span>
                    </div>
                    <Progress value={75} className="mt-2" />
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Monthly Burn Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                      ${financialMetrics.burnRate}K
                    </div>
                    <div className="text-xs text-green-600">Under control</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {financialMetrics.cashRunway} months runway
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">LTV:CAC Ratio</CardTitle>
                    <Target className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                      {financialMetrics.ltvCacRatio}:1
                    </div>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      Healthy
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-700">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">CAC Payback</CardTitle>
                    <Percent className="h-4 w-4 text-amber-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                      {financialMetrics.cacPayback} mo
                    </div>
                    <div className="text-xs text-green-600">Improving</div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Insights Panel */}
              <AIFinancialInsightsPanel />
            </div>
          )}

          {activeSection === 'revenue' && <RevenueAnalyticsSection />}
          {activeSection === 'expenses' && <ExpenseManagementSection />}
          {activeSection === 'projections' && <ProjectionsSection />}
          {activeSection === 'budget' && <BudgetTrackingSection />}
        </div>
      </div>
    </MainLayout>
  );
};

export default FinancialDashboard;
