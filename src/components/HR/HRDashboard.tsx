
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useHRStore } from '@/store/hrStore';
import { 
  Users, UserPlus, UserCheck, DollarSign, Download, Smile, 
  TrendingDown, Clock, Eye, MessageSquare, Calendar, Plus
} from 'lucide-react';
import { OrganizationSection } from './OrganizationSection';
import { PerformanceSection } from './PerformanceSection';
import { TalentAcquisitionSection } from './TalentAcquisitionSection';
import { EngagementSection } from './EngagementSection';

export function HRDashboard() {
  const {
    employees,
    engagementData,
    compensationData,
    hrInsights
  } = useHRStore();

  const [activeSection, setActiveSection] = useState('overview');

  const totalEmployees = employees.length;
  const avgTenure = 3.2;
  const turnoverRate = 8.5;
  const industryTurnover = 12.3;

  const departmentDistribution = [
    { name: 'Engineering', value: 45, color: '#8B5CF6' },
    { name: 'Sales', value: 25, color: '#3B82F6' },
    { name: 'Marketing', value: 15, color: '#10B981' },
    { name: 'Support', value: 10, color: '#F59E0B' },
    { name: 'Other', value: 5, color: '#EF4444' }
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">People & Culture</h1>
            <p className="text-muted-foreground">Build and nurture your workforce</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <Button className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Add Employee
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <UserCheck className="h-4 w-4" />
                Start Onboarding
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Run Payroll
              </Button>
            </div>
            <Button variant="ghost" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Workforce Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="relative">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Total Employees</span>
                  </div>
                  <div className="text-2xl font-bold">{totalEmployees}</div>
                  <div className="text-sm text-green-600">+5 this month</div>
                </div>
                <div className="w-16 h-16 relative">
                  {/* Mini donut chart placeholder */}
                  <div className="w-full h-full rounded-full border-4 border-primary/20 border-t-primary animate-spin opacity-60"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Smile className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Engagement Score</span>
              </div>
              <div className="text-2xl font-bold">{engagementData.score}%</div>
              <div className="text-sm text-green-600">↑ {engagementData.trend}% QoQ</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium">Turnover Rate</span>
              </div>
              <div className="text-2xl font-bold">{turnoverRate}%</div>
              <div className="text-sm text-muted-foreground">Industry avg: {industryTurnover}%</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Avg Tenure</span>
              </div>
              <div className="text-2xl font-bold">{avgTenure} years</div>
              <div className="text-sm text-green-600">Strong retention</div>
            </CardContent>
          </Card>
        </div>

        {/* Employee Sentiment Pulse */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Employee Sentiment Pulse</CardTitle>
              <span className="text-sm text-muted-foreground">Updated 2 hours ago</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smile className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Happy</span>
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Neutral</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Needs Attention</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium">Top Employee Concerns</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Work-Life Balance (12)</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Career Growth (8)</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md text-xs">Remote Work (5)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b">
        <nav className="flex space-x-8">
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'organization', label: 'Organization' },
            { key: 'performance', label: 'Performance' },
            { key: 'talent', label: 'Talent Acquisition' },
            { key: 'engagement', label: 'Engagement' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeSection === tab.key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Section Content */}
      <div className="space-y-6">
        {activeSection === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent HR Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: 'New hire started', person: 'Alex Johnson', time: '2 hours ago', type: 'hire' },
                    { action: 'Performance review completed', person: 'Sarah Chen', time: '4 hours ago', type: 'review' },
                    { action: 'Time off approved', person: 'Mike Rodriguez', time: '1 day ago', type: 'time-off' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{activity.action}</div>
                        <div className="text-sm text-muted-foreground">{activity.person}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Approve Time Off (3)
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Review Applications (12)
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Pulse Survey
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Job Posting
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
        
        {activeSection === 'organization' && <OrganizationSection />}
        {activeSection === 'performance' && <PerformanceSection />}
        {activeSection === 'talent' && <TalentAcquisitionSection />}
        {activeSection === 'engagement' && <EngagementSection />}
      </div>
    </div>
  );
}
