
import { useState } from 'react';
import { AlertTriangle, Plus, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLegalStore } from '@/store/legalStore';

export function RiskManagementSection() {
  const { riskCategories, overallRiskScore } = useLegalStore();
  const [viewMode, setViewMode] = useState('heatmap');

  const mitigationStrategies = [
    {
      id: '1',
      riskName: 'Data Breach Risk',
      description: 'Enhanced security controls and monitoring',
      effectiveness: 85,
      progress: 65,
      startDate: new Date('2024-10-01'),
      targetDate: new Date('2024-12-31'),
      owner: {
        id: '1',
        name: 'Security Team',
        avatar: '/placeholder.svg'
      },
      milestones: [
        { label: 'Assessment', completed: true },
        { label: 'Implementation', completed: true },
        { label: 'Testing', completed: false },
        { label: 'Deployment', completed: false }
      ]
    },
    {
      id: '2',
      riskName: 'Regulatory Non-Compliance',
      description: 'Automated compliance monitoring system',
      effectiveness: 78,
      progress: 40,
      startDate: new Date('2024-11-01'),
      targetDate: new Date('2025-02-28'),
      owner: {
        id: '2',
        name: 'Compliance Officer',
        avatar: '/placeholder.svg'
      },
      milestones: [
        { label: 'Planning', completed: true },
        { label: 'Development', completed: false },
        { label: 'Testing', completed: false },
        { label: 'Rollout', completed: false }
      ]
    }
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskScoreColor = (score: number) => {
    if (score >= 70) return 'text-red-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Risk Management</h2>
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-3 py-1 rounded text-sm ${viewMode === 'heatmap' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setViewMode('heatmap')}
            >
              Heat Map
            </button>
            <button
              className={`px-3 py-1 rounded text-sm ${viewMode === 'register' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setViewMode('register')}
            >
              Register
            </button>
            <button
              className={`px-3 py-1 rounded text-sm ${viewMode === 'timeline' ? 'bg-white shadow-sm' : ''}`}
              onClick={() => setViewMode('timeline')}
            >
              Timeline
            </button>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Risk
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Enterprise Risk Heat Map</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Overall Risk Score:</span>
              <span className={`text-lg font-bold ${getRiskScoreColor(overallRiskScore)}`}>
                {overallRiskScore}/100
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {riskCategories.map((category) => (
              <div key={category.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{category.icon}</div>
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className={`text-sm font-medium ${getRiskScoreColor(category.riskScore)}`}>
                        Risk Score: {category.riskScore}
                      </div>
                    </div>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${getRiskLevelColor(category.riskLevel)}`} />
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Top Risks:</div>
                  {[
                    { name: 'Data Security Breach', probability: 25 },
                    { name: 'Vendor Contract Risk', probability: 35 },
                    { name: 'Compliance Violation', probability: 15 }
                  ].map((risk, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getRiskLevelColor('medium')}`} />
                        <span>{risk.name}</span>
                      </div>
                      <span className="text-muted-foreground">{risk.probability}%</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  View All Risks →
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Mitigation Strategies</CardTitle>
            <div className="text-sm text-muted-foreground">
              {mitigationStrategies.length}/{mitigationStrategies.length + 3} Active
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mitigationStrategies.map((strategy) => (
              <div key={strategy.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">{strategy.riskName}</div>
                    <div className="text-sm text-green-600 font-medium">
                      {strategy.effectiveness}% effective
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  {strategy.description}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Started:</span>
                    <span className="ml-2">{strategy.startDate.toLocaleDateString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Target:</span>
                    <span className="ml-2">{strategy.targetDate.toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{strategy.progress}%</span>
                  </div>
                  <Progress value={strategy.progress} className="h-2" />
                  <div className="flex items-center justify-between text-xs">
                    {strategy.milestones.map((milestone, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-gray-200'}`} />
                        <span className="mt-1 text-center">{milestone.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={strategy.owner.avatar} />
                      <AvatarFallback>{strategy.owner.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{strategy.owner.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
