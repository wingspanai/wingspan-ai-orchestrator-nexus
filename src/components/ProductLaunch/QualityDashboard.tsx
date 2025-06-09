
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  Bug, 
  Shield, 
  Zap, 
  Brain,
  Target,
  TrendingUp,
  TrendingDown,
  AlertTriangle
} from 'lucide-react';
import { useDevelopmentStore } from '@/store/developmentStore';

export function QualityDashboard() {
  const { qualityMetrics } = useDevelopmentStore();

  const getScoreColor = (score: number, threshold = 80) => {
    if (score >= threshold) return 'text-green-600';
    if (score >= threshold * 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number, threshold = 80) => {
    if (score >= threshold) return 'bg-green-50 border-green-200';
    if (score >= threshold * 0.7) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const totalBugs = qualityMetrics.criticalBugs + qualityMetrics.highBugs + 
                   qualityMetrics.mediumBugs + qualityMetrics.lowBugs;

  const bugRiskAreas = [
    { module: 'User Authentication', riskLevel: 'high', predictedBugs: 3 },
    { module: 'Payment Processing', riskLevel: 'medium', predictedBugs: 2 },
    { module: 'Dashboard UI', riskLevel: 'low', predictedBugs: 1 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quality & Testing Dashboard</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Quality Score Overview */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className={`w-32 h-32 rounded-full border-8 flex items-center justify-center ${
              getScoreBackground(qualityMetrics.qualityScore)
            }`}>
              <div className="text-center">
                <div className={`text-3xl font-bold ${getScoreColor(qualityMetrics.qualityScore)}`}>
                  {qualityMetrics.qualityScore}
                </div>
                <div className="text-sm text-gray-600">Quality Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div>
                  <div className="text-2xl font-bold">{qualityMetrics.testCoverage}%</div>
                  <div className="text-sm text-gray-600">Test Coverage</div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    +5%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Bug className="w-8 h-8 text-red-600" />
                <div>
                  <div className="text-2xl font-bold">{qualityMetrics.bugDensity}</div>
                  <div className="text-sm text-gray-600">Bug Density (per KLOC)</div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingDown className="w-3 h-3" />
                    -12%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold">{qualityMetrics.securityScore}/10</div>
                  <div className="text-sm text-gray-600">Security Score</div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingUp className="w-3 h-3" />
                    +0.5
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold">{qualityMetrics.performanceScore}ms</div>
                  <div className="text-sm text-gray-600">Performance</div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <TrendingDown className="w-3 h-3" />
                    -23ms
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testing Pipeline */}
        <Card className="border">
          <CardHeader>
            <CardTitle className="text-lg">Testing Pipeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  'bg-green-100 text-green-600'
                }`}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium">Unit Tests</div>
                <div className="text-xs text-gray-500">Passed</div>
                <div className="text-xs">Coverage: 85%</div>
                <div className="text-xs">Duration: 2.3s</div>
              </div>

              <div className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  'bg-blue-100 text-blue-600'
                }`}>
                  <div className="text-sm font-bold">⟳</div>
                </div>
                <div className="text-sm font-medium">Integration Tests</div>
                <div className="text-xs text-gray-500">Running</div>
                <div className="text-xs">Progress: 67%</div>
                <div className="text-xs">ETA: 3 min</div>
              </div>

              <div className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  'bg-gray-100 text-gray-600'
                }`}>
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium">E2E Tests</div>
                <div className="text-xs text-gray-500">Pending</div>
                <div className="text-xs">Scheduled: 15:30</div>
              </div>

              <div className="text-center">
                <div className={`w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                  'bg-gray-100 text-gray-600'
                }`}>
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium">Performance</div>
                <div className="text-xs text-gray-500">Pending</div>
                <div className="text-xs">After E2E</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Test Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Automated: 145 | Manual: 23 | Rate: 86%</span>
                <Button size="sm" variant="outline">
                  <Brain className="w-4 h-4 mr-2" />
                  Generate Tests
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bug Tracking */}
        <Card className="border">
          <CardHeader>
            <CardTitle className="text-lg">Bug Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-conic from-red-500 via-orange-500 via-blue-500 to-green-500" />
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{totalBugs}</div>
                    <div className="text-xs text-gray-600">Total Bugs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <div className="text-lg font-bold text-red-600">{qualityMetrics.criticalBugs}</div>
                <div className="text-xs text-gray-600">Critical</div>
              </div>
              <div>
                <div className="text-lg font-bold text-orange-600">{qualityMetrics.highBugs}</div>
                <div className="text-xs text-gray-600">High</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-600">{qualityMetrics.mediumBugs}</div>
                <div className="text-xs text-gray-600">Medium</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-600">{qualityMetrics.lowBugs}</div>
                <div className="text-xs text-gray-600">Low</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Bug Prediction */}
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-lg text-purple-900 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Bug Prediction Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {bugRiskAreas.map((area, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded border">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`w-5 h-5 ${
                    area.riskLevel === 'high' ? 'text-red-500' :
                    area.riskLevel === 'medium' ? 'text-yellow-500' : 'text-green-500'
                  }`} />
                  <div>
                    <div className="font-medium">{area.module}</div>
                    <div className="text-sm text-gray-600">
                      {area.predictedBugs} potential bugs
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={
                    area.riskLevel === 'high' ? 'destructive' :
                    area.riskLevel === 'medium' ? 'secondary' : 'outline'
                  }>
                    {area.riskLevel} risk
                  </Badge>
                  <Button size="sm" variant="outline">
                    Review Code
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

function Clock({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}
