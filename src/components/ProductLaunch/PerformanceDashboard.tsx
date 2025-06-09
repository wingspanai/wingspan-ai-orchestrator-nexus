
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Brain,
  Download,
  FileText,
  RefreshCw,
  Zap,
  Settings,
  Edit,
  Table,
  Eye
} from 'lucide-react';
import { BusinessMetricsSection } from './analytics/BusinessMetricsSection';
import { ProductAnalyticsSection } from './analytics/ProductAnalyticsSection';
import { CustomerAnalyticsSection } from './analytics/CustomerAnalyticsSection';
import { MarketingPerformanceSection } from './analytics/MarketingPerformanceSection';
import { PredictiveAnalyticsSection } from './analytics/PredictiveAnalyticsSection';

type AnalyticsTab = 'business' | 'product' | 'customer' | 'marketing' | 'predictive';

export function PerformanceDashboard() {
  const [activeTab, setActiveTab] = useState<AnalyticsTab>('business');
  const [dateRange, setDateRange] = useState('30days');
  const [comparisonEnabled, setComparisonEnabled] = useState(false);

  // Mock data
  const currentRevenue = 2.8;
  const revenueTrend = { direction: 'up', percentage: 15 };
  const totalUsers = 125000;
  const monthlyActiveUsers = 45;
  const dailyActiveUsers = 12;
  const userGrowthRate = 22;
  const marketShare = 8.3;
  const marketPosition = 3;
  const npsScore = 67;
  const npsCategory = 'Good';
  const promoters = 45;
  const passives = 44;
  const detractors = 11;

  const performanceAlerts = [
    {
      id: '1',
      type: 'Revenue Spike',
      severity: 'high',
      message: 'Revenue increased 23% above normal patterns',
      triggeredAt: new Date(Date.now() - 2 * 60 * 1000),
      metric: 'Daily Revenue',
      currentValue: '$45.2K',
      threshold: '$36.7K'
    },
    {
      id: '2',
      type: 'Churn Alert',
      severity: 'medium',
      message: 'Enterprise churn rate elevated this week',
      triggeredAt: new Date(Date.now() - 15 * 60 * 1000),
      metric: 'Weekly Churn',
      currentValue: '3.2%',
      threshold: '2.5%'
    }
  ];

  const scheduledReports = [
    {
      id: '1',
      name: 'Weekly Executive Summary',
      schedule: 'Mondays 9AM',
      recipientCount: 5
    },
    {
      id: '2',
      name: 'Monthly Performance Review',
      schedule: '1st of month',
      recipientCount: 12
    }
  ];

  const acknowledgeAlert = (alertId: string) => {
    console.log('Acknowledging alert:', alertId);
  };

  const snoozeAlert = (alertId: string) => {
    console.log('Snoozing alert:', alertId);
  };

  const configureAlerts = () => {
    console.log('Configuring alerts...');
  };

  const editReport = (reportId: string) => {
    console.log('Editing report:', reportId);
  };

  const exportData = (format: string) => {
    console.log('Exporting data as:', format);
  };

  const refreshInsights = () => {
    console.log('Refreshing insights...');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'business':
        return <BusinessMetricsSection />;
      case 'product':
        return <ProductAnalyticsSection />;
      case 'customer':
        return <CustomerAnalyticsSection />;
      case 'marketing':
        return <MarketingPerformanceSection />;
      case 'predictive':
        return <PredictiveAnalyticsSection />;
      default:
        return null;
    }
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
          <div className="flex items-center gap-2">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="7days">7 Days</SelectItem>
                <SelectItem value="30days">30 Days</SelectItem>
                <SelectItem value="quarter">Quarter</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="grid grid-cols-4 gap-4 p-6">
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">${currentRevenue}M</div>
                <div className="text-sm text-muted-foreground">Revenue Performance</div>
                <div className="text-xs text-green-600">
                  +{revenueTrend.percentage}% vs. last period
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalUsers.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">User Growth</div>
                <div className="text-xs text-blue-600">
                  MAU: {monthlyActiveUsers}K | DAU: {dailyActiveUsers}K
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{marketShare}%</div>
                <div className="text-sm text-muted-foreground">Market Penetration</div>
                <div className="text-xs text-purple-600">#{marketPosition} position</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{npsScore}</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                <div className="text-xs text-orange-600">{npsCategory} NPS</div>
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
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('business')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
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
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'product' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Target className="w-4 h-4" />
                Product Analytics
              </button>
              
              <button
                onClick={() => setActiveTab('customer')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
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
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'marketing' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Eye className="w-4 h-4" />
                Marketing Performance
              </button>
              
              <button
                onClick={() => setActiveTab('predictive')}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'predictive' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Brain className="w-4 h-4" />
                Predictive Analytics
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </main>

        {/* Right Sidebar - Quick Insights & Actions */}
        <aside className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Quick Insights
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={refreshInsights}>
                <RefreshCw className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mt-1" />
                    <div>
                      <p className="text-sm text-green-800">
                        Revenue growth accelerating - 15% this month vs 8% last month
                      </p>
                      <Button variant="link" size="sm" className="text-green-600 p-0 h-auto">
                        Analyze Drivers →
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-blue-600 mt-1" />
                    <div>
                      <p className="text-sm text-blue-800">
                        User engagement up 22% in mobile app
                      </p>
                      <Button variant="link" size="sm" className="text-blue-600 p-0 h-auto">
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
              <CardTitle>Performance Alerts</CardTitle>
              <Button variant="ghost" size="sm" onClick={configureAlerts}>
                <Settings className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {performanceAlerts.map(alert => (
                  <div key={alert.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-sm">{alert.type}</span>
                      <span className="text-xs text-muted-foreground">
                        {alert.triggeredAt.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                    <div className="text-xs text-muted-foreground mb-3">
                      {alert.metric}: {alert.currentValue} ({alert.threshold} threshold)
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => acknowledgeAlert(alert.id)}>
                        Acknowledge
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => snoozeAlert(alert.id)}>
                        Snooze
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Automated Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Scheduled Reports</h4>
                  <div className="space-y-2">
                    {scheduledReports.map(report => (
                      <div key={report.id} className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <div className="text-sm font-medium">{report.name}</div>
                          <div className="text-xs text-muted-foreground">{report.schedule}</div>
                          <div className="text-xs text-muted-foreground">
                            {report.recipientCount} recipients
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => editReport(report.id)}>
                          <Edit className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Quick Export</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => exportData('pdf')}>
                      <FileText className="w-4 h-4 mr-2" />
                      PDF Report
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => exportData('excel')}>
                      <Table className="w-4 h-4 mr-2" />
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
