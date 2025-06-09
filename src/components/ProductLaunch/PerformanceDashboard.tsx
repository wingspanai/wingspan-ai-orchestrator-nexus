
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Heart,
  DollarSign,
  Package,
  Megaphone,
  Brain,
  Download,
  Calendar,
  Eye,
  Share2,
  UserPlus,
  RefreshCw,
  Zap,
  Settings,
  AlertCircle,
  Clock,
  Plus
} from 'lucide-react';
import { BusinessMetricsSection } from './analytics/BusinessMetricsSection';
import { ProductAnalyticsSection } from './analytics/ProductAnalyticsSection';
import { CustomerAnalyticsSection } from './analytics/CustomerAnalyticsSection';
import { MarketingPerformanceSection } from './analytics/MarketingPerformanceSection';
import { PredictiveAnalyticsSection } from './analytics/PredictiveAnalyticsSection';
import { RealTimeMonitoring } from './analytics/RealTimeMonitoring';
import { OptimizationEngine } from './analytics/OptimizationEngine';
import { ExecutiveReporting } from './analytics/ExecutiveReporting';

type AnalyticsTab = 'business' | 'product' | 'customer' | 'marketing' | 'predictive' | 'realtime' | 'optimization' | 'executive';

export function PerformanceDashboard() {
  const [activeTab, setActiveTab] = useState<AnalyticsTab>('business');
  const [dateRange, setDateRange] = useState('30days');
  const [comparisonEnabled, setComparisonEnabled] = useState(false);
  const [comparisonPeriod, setComparisonPeriod] = useState('previous');

  // Mock data for executive summary
  const currentRevenue = 2.4;
  const revenueTrend = { direction: 'up', percentage: 12 };
  const totalUsers = 45230;
  const monthlyActiveUsers = 34;
  const dailyActiveUsers = 12;
  const userGrowthRate = 8.5;
  const marketShare = 4.2;
  const marketPosition = 3;
  const marketLeaderGap = 2.1;
  const npsScore = 68;
  const npsCategory = 'Good';
  const promoters = 45;
  const passives = 38;
  const detractors = 17;

  const handleExport = (format: string) => {
    console.log(`Exporting performance data as ${format}...`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Performance Analytics Center</h1>
            <p className="text-green-100 mt-2">
              Real-time monitoring, predictive insights, and growth optimization
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex gap-2">
              <Button variant="secondary" onClick={() => handleExport('pdf')}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="grid grid-cols-4 gap-4 p-6">
        <Card className="relative overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold">${currentRevenue}M</div>
                <div className="text-sm text-muted-foreground">Revenue Performance</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-green-600">+{revenueTrend.percentage}% vs previous</span>
                </div>
              </div>
            </div>
            <div className="h-12 mt-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded flex items-end justify-end p-2">
              <Badge variant="secondary" className="text-xs">87% confidence</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold">{totalUsers.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Users</div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="text-xs">
                    <span className="text-muted-foreground">MAU:</span> {monthlyActiveUsers}K
                  </div>
                  <div className="text-xs">
                    <span className="text-muted-foreground">DAU:</span> {dailyActiveUsers}K
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-blue-600">+{userGrowthRate}%</span>
              <span className="text-xs text-muted-foreground">Monthly Growth</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold">{marketShare}%</div>
                <div className="text-sm text-muted-foreground">Market Share</div>
                <div className="text-xs text-purple-600 mt-1">#{marketPosition} in market</div>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              {marketLeaderGap}% behind market leader
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold">{npsScore}</div>
                <div className="text-sm text-muted-foreground">Net Promoter Score</div>
                <div className="text-xs text-pink-600">{npsCategory}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 mt-4">
              <div className="text-center">
                <div className="text-xs font-medium">{promoters}%</div>
                <div className="text-xs text-green-600">Promoters</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-medium">{passives}%</div>
                <div className="text-xs text-yellow-600">Passives</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-medium">{detractors}%</div>
                <div className="text-xs text-red-600">Detractors</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6 px-6 pb-6">
        {/* Main Analytics Area */}
        <main className="col-span-9">
          {/* Analytics Tabs */}
          <div className="border-b border-border mb-6">
            <div className="flex space-x-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('business')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'business' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                Business Metrics
              </button>
              
              <button
                onClick={() => setActiveTab('product')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'product' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Package className="w-4 h-4" />
                Product Analytics
              </button>
              
              <button
                onClick={() => setActiveTab('customer')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'customer' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Users className="w-4 h-4" />
                Customer Analytics
              </button>
              
              <button
                onClick={() => setActiveTab('marketing')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'marketing' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Megaphone className="w-4 h-4" />
                Marketing Performance
              </button>
              
              <button
                onClick={() => setActiveTab('predictive')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'predictive' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Brain className="w-4 h-4" />
                Predictive Analytics
              </button>

              <button
                onClick={() => setActiveTab('realtime')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'realtime' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Zap className="w-4 h-4" />
                Real-Time
              </button>

              <button
                onClick={() => setActiveTab('optimization')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'optimization' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Optimization
              </button>

              <button
                onClick={() => setActiveTab('executive')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'executive' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileText className="w-4 h-4" />
                Executive
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'business' && <BusinessMetricsSection />}
            {activeTab === 'product' && <ProductAnalyticsSection />}
            {activeTab === 'customer' && <CustomerAnalyticsSection />}
            {activeTab === 'marketing' && <MarketingPerformanceSection />}
            {activeTab === 'predictive' && <PredictiveAnalyticsSection />}
            {activeTab === 'realtime' && <RealTimeMonitoring />}
            {activeTab === 'optimization' && <OptimizationEngine />}
            {activeTab === 'executive' && <ExecutiveReporting />}
          </div>
        </main>

        {/* Right Sidebar - Quick Insights & Actions */}
        <aside className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quick Insights
                </div>
                <Button variant="ghost" size="sm">
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-green-800 font-medium">
                        Revenue growth accelerating - 12% this month vs 8% last month
                      </p>
                      <Button variant="link" size="sm" className="p-0 h-auto text-green-600">
                        Analyze Drivers →
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-yellow-800 font-medium">
                        User engagement dropping in APAC region - down 15% this week
                      </p>
                      <Button variant="link" size="sm" className="p-0 h-auto text-yellow-600">
                        Investigate →
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Package className="w-4 h-4 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-blue-800 font-medium">
                        Feature X adoption exceeding targets - 78% vs 65% goal
                      </p>
                      <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                        View Details →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Performance Alerts
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 border border-red-200 bg-red-50 rounded">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-red-800">High Churn Alert</div>
                    <div className="text-xs text-red-600">Churn rate: 8.5% (5% threshold)</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-2 border border-yellow-200 bg-yellow-50 rounded">
                  <Clock className="w-4 h-4 text-yellow-600" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-yellow-800">API Latency</div>
                    <div className="text-xs text-yellow-600">Response time: 1.2s (1s threshold)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Automated Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium">Weekly Executive Report</div>
                  <div className="text-muted-foreground text-xs">Every Monday, 3 recipients</div>
                </div>
                
                <div className="text-sm">
                  <div className="font-medium">Monthly Board Report</div>
                  <div className="text-muted-foreground text-xs">1st of month, 8 recipients</div>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-sm font-medium mb-2">Quick Export</div>
                  <div className="grid grid-cols-1 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleExport('pdf')}>
                      <FileText className="w-3 h-3 mr-2" />
                      PDF Report
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleExport('excel')}>
                      <Download className="w-3 h-3 mr-2" />
                      Excel Data
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
