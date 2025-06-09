
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useHRStore } from '@/store/hrStore';
import { Clock, DollarSign, Star, Target } from 'lucide-react';

export function TalentAcquisitionSection() {
  const { recruitingMetrics, openPositions } = useHRStore();
  const [recruitingPeriod, setRecruitingPeriod] = useState('current-month');

  const pipelineStages = [
    { id: 'applications', name: 'Applications', candidates: recruitingMetrics.totalApplications, avgTime: 0, conversion: 24 },
    { id: 'screened', name: 'Screened', candidates: recruitingMetrics.screenedCandidates, avgTime: 2, conversion: 44 },
    { id: 'phone', name: 'Phone Interview', candidates: recruitingMetrics.phoneInterviews, avgTime: 5, conversion: 38 },
    { id: 'onsite', name: 'Technical/Onsite', candidates: recruitingMetrics.onsiteInterviews, avgTime: 8, conversion: 35 },
    { id: 'offers', name: 'Offers', candidates: recruitingMetrics.offersMade, avgTime: 12, conversion: 67 },
    { id: 'hired', name: 'Hired', candidates: recruitingMetrics.hired, avgTime: 0, conversion: 100 }
  ];

  const declineReasons = [
    { id: '1', reason: 'Compensation', percentage: 45 },
    { id: '2', reason: 'Company Culture Fit', percentage: 25 },
    { id: '3', reason: 'Remote Work Policy', percentage: 20 },
    { id: '4', reason: 'Career Growth', percentage: 10 }
  ];

  const recruitingSources = [
    { id: '1', name: 'LinkedIn', icon: '💼', candidates: 245, hired: 12, conversion: 4.9, costPerHire: 3200, qualityScore: 8.5 },
    { id: '2', name: 'Employee Referrals', icon: '👥', candidates: 89, hired: 18, conversion: 20.2, costPerHire: 1500, qualityScore: 9.2 },
    { id: '3', name: 'Indeed', icon: '🔍', candidates: 312, hired: 8, conversion: 2.6, costPerHire: 2800, qualityScore: 6.8 },
    { id: '4', name: 'University Partnerships', icon: '🎓', candidates: 67, hired: 15, conversion: 22.4, costPerHire: 2100, qualityScore: 8.8 }
  ];

  const overallConversion = Math.round((recruitingMetrics.hired / recruitingMetrics.totalApplications) * 100 * 10) / 10;

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Talent Acquisition</h2>
        <Select value={recruitingPeriod} onValueChange={setRecruitingPeriod}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current-month">Current Month</SelectItem>
            <SelectItem value="current-quarter">Current Quarter</SelectItem>
            <SelectItem value="ytd">Year to Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Recruiting Pipeline */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recruiting Funnel</CardTitle>
            <div className="text-sm font-medium">
              Overall Conversion: {overallConversion}%
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Funnel Visualization */}
            <div className="space-y-2">
              {pipelineStages.map((stage, index) => {
                const width = Math.max((stage.candidates / recruitingMetrics.totalApplications) * 100, 10);
                return (
                  <div key={stage.id} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{stage.name}</span>
                      <span>{stage.candidates} candidates</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 rounded h-8 flex items-center">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded h-8 flex items-center justify-center text-white text-xs font-medium"
                          style={{ width: `${width}%`, minWidth: '60px' }}
                        >
                          {stage.conversion > 0 && `${stage.conversion}%`}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stage Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {pipelineStages.map((stage) => (
                <div key={stage.id} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium mb-1">{stage.name}</div>
                  <div className="space-y-1">
                    <div className="text-lg font-bold">{stage.candidates}</div>
                    {stage.avgTime > 0 && (
                      <div className="text-xs text-muted-foreground">{stage.avgTime}d avg</div>
                    )}
                    {stage.conversion < 100 && (
                      <div className="text-xs font-medium text-blue-600">{stage.conversion}%</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recruiting Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Time to Fill</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold">{recruitingMetrics.avgTimeToFill} days</div>
              <div className="text-sm text-muted-foreground">Target: 25 days</div>
              <div className="h-8 bg-gray-50 rounded flex items-center justify-center text-xs">
                Trend chart placeholder
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <span className="font-medium">Cost per Hire</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold">${recruitingMetrics.avgCostPerHire.toLocaleString()}</div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Sourcing</span>
                  <span>$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Agency</span>
                  <span>$4,200</span>
                </div>
                <div className="flex justify-between">
                  <span>Internal</span>
                  <span>$1,800</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">Quality of Hire</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold">8.4/10</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div>Performance: 8.5/10</div>
                <div>Retention: 8.8/10</div>
                <div>Manager Satisfaction: 7.9/10</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-500" />
              <span className="font-medium">Offer Acceptance</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold">{recruitingMetrics.offerAcceptance}%</div>
              <div className="space-y-1">
                <div className="text-sm font-medium">Top Decline Reasons</div>
                {declineReasons.slice(0, 2).map((reason) => (
                  <div key={reason.id} className="flex justify-between text-xs">
                    <span>{reason.reason}</span>
                    <span>{reason.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Source Effectiveness */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Source Effectiveness</CardTitle>
            <div className="flex gap-2">
              {['All Sources', 'Job Boards', 'Referrals', 'Direct', 'Agencies'].map((filter) => (
                <button
                  key={filter}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Source</th>
                  <th className="text-left py-3 px-4">Candidates</th>
                  <th className="text-left py-3 px-4">Hired</th>
                  <th className="text-left py-3 px-4">Conversion</th>
                  <th className="text-left py-3 px-4">Cost/Hire</th>
                  <th className="text-left py-3 px-4">Quality Score</th>
                </tr>
              </thead>
              <tbody>
                {recruitingSources.map((source) => (
                  <tr key={source.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{source.icon}</span>
                        <span className="font-medium">{source.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{source.candidates}</td>
                    <td className="py-3 px-4">{source.hired}</td>
                    <td className="py-3 px-4">
                      <span className={`font-medium ${source.conversion > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                        {source.conversion}%
                      </span>
                    </td>
                    <td className="py-3 px-4">${source.costPerHire.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{source.qualityScore}/10</span>
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          source.qualityScore >= 8 ? 'bg-green-100 text-green-800' :
                          source.qualityScore >= 7 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {source.qualityScore >= 8 ? 'High' : source.qualityScore >= 7 ? 'Medium' : 'Low'}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Open Positions */}
      <Card>
        <CardHeader>
          <CardTitle>Open Positions ({openPositions.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {openPositions.map((position) => (
              <div key={position.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="font-medium">{position.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {position.department} • {position.location} • {position.type}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="font-medium">{position.applicants}</div>
                    <div className="text-xs text-muted-foreground">Applicants</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{position.daysOpen}d</div>
                    <div className="text-xs text-muted-foreground">Days Open</div>
                  </div>
                  <button className="text-primary hover:underline text-sm">View →</button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
