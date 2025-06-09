
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  DollarSign, 
  Zap,
  Target,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';

export function OptimizationEngine() {
  const [optimizationScore, setOptimizationScore] = useState(78);
  const [scoreImprovement, setScoreImprovement] = useState(12);
  const [totalOptimizationImpact, setTotalOptimizationImpact] = useState(4.2);

  // Mock data
  const revenueOptimizations = [
    {
      id: 1,
      title: 'Dynamic Pricing Optimization',
      description: 'Implement AI-driven dynamic pricing based on market demand, customer segment, and competitive positioning.',
      impact: 380,
      effort: 'medium',
      confidence: 87,
      timeline: '6-8 weeks',
      evidence: [
        { id: 1, type: 'A/B Test', data: 'Similar companies saw 15-25% revenue increase' },
        { id: 2, type: 'Market Analysis', data: 'Customer willingness to pay exceeds current pricing by 18%' },
        { id: 3, type: 'Competitive Benchmark', data: 'Competitors charge 23% more for similar features' }
      ]
    },
    {
      id: 2,
      title: 'Upsell Automation Engine',
      description: 'Build ML-powered system to identify and automatically trigger upsell opportunities based on usage patterns.',
      impact: 290,
      effort: 'high',
      confidence: 73,
      timeline: '10-12 weeks',
      evidence: [
        { id: 1, type: 'Usage Analysis', data: '34% of users exceed plan limits regularly' },
        { id: 2, type: 'Customer Survey', data: '68% would upgrade for additional features' },
        { id: 3, type: 'Revenue Analysis', data: 'Manual upsells convert at 45% rate' }
      ]
    }
  ];

  const costOptimizations = [
    {
      id: 1,
      title: 'Infrastructure Right-Sizing',
      description: 'Optimize cloud infrastructure based on actual usage patterns and implement auto-scaling.',
      savings: 240,
      currentCost: 580,
      utilization: 67,
      proposedChanges: [
        { id: 1, description: 'Downsize over-provisioned instances', impact: 120 },
        { id: 2, description: 'Implement auto-scaling policies', impact: 85 },
        { id: 3, description: 'Switch to reserved instances', impact: 35 }
      ],
      riskLevel: 'low',
      riskDescription: 'Minimal risk with proper monitoring and gradual rollout'
    },
    {
      id: 2,
      title: 'Tool Consolidation',
      description: 'Consolidate overlapping software tools and renegotiate contracts for better rates.',
      savings: 180,
      currentCost: 420,
      utilization: 45,
      proposedChanges: [
        { id: 1, description: 'Eliminate redundant analytics tools', impact: 90 },
        { id: 2, description: 'Consolidate communication platforms', impact: 50 },
        { id: 3, description: 'Renegotiate enterprise contracts', impact: 40 }
      ],
      riskLevel: 'medium',
      riskDescription: 'Some user retraining required, potential workflow disruption'
    }
  ];

  const efficiencyOptimizations = [
    {
      id: 1,
      title: 'Customer Onboarding Automation',
      description: 'Automate repetitive onboarding tasks to reduce time-to-value and support burden.',
      efficiencyGain: 45,
      currentProcess: [
        { id: 1, name: 'Manual account setup', duration: '2 hours' },
        { id: 2, name: 'Welcome call scheduling', duration: '30 min' },
        { id: 3, name: 'Documentation delivery', duration: '45 min' },
        { id: 4, name: 'Initial configuration', duration: '1.5 hours' }
      ],
      optimizedProcess: [
        { id: 1, name: 'Automated account setup', duration: '5 min', isNew: false },
        { id: 2, name: 'Self-service onboarding', duration: '45 min', isNew: true },
        { id: 3, name: 'Automated documentation', duration: '0 min', isNew: true },
        { id: 4, name: 'Smart configuration wizard', duration: '20 min', isNew: true }
      ],
      currentTotalTime: 4.75,
      optimizedTotalTime: 1.17,
      automationOpportunities: [
        { id: 1, task: 'Welcome email sequence', timeSaved: 3 },
        { id: 2, task: 'Account provisioning', timeSaved: 2 },
        { id: 3, task: 'Initial training modules', timeSaved: 4 }
      ]
    }
  ];

  const implementedOptimizations = [
    {
      id: 1,
      name: 'Email Marketing Automation',
      type: 'Efficiency',
      implementedDate: new Date('2024-02-15'),
      expectedImpact: 150,
      actualImpact: 180,
      variance: 20
    },
    {
      id: 2,
      name: 'Freemium Model Launch',
      type: 'Revenue',
      implementedDate: new Date('2024-01-20'),
      expectedImpact: 320,
      actualImpact: 290,
      variance: -9
    },
    {
      id: 3,
      name: 'Support Chatbot',
      type: 'Cost Reduction',
      implementedDate: new Date('2023-12-10'),
      expectedImpact: 95,
      actualImpact: 110,
      variance: 16
    }
  ];

  const totalActualImpact = 1.2;
  const optimizationROI = 285;

  const implementOptimization = (optimizationId: number) => {
    console.log(`Implementing optimization ${optimizationId}...`);
  };

  const simulateOptimization = (optimizationId: number) => {
    console.log(`Simulating optimization ${optimizationId}...`);
  };

  const setupAutomation = (automationId: number) => {
    console.log(`Setting up automation ${automationId}...`);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getEffortScale = (level: string) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };
    return (
      <Badge className={colors[level as keyof typeof colors]}>
        {level.charAt(0).toUpperCase() + level.slice(1)} Effort
      </Badge>
    );
  };

  const getRiskLevel = (level: string) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };
    return (
      <Badge className={colors[level as keyof typeof colors]}>
        {level.charAt(0).toUpperCase() + level.slice(1)} Risk
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Optimization Dashboard Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Growth Optimization Center</h2>
            <p className="text-purple-100">AI-identified opportunities to maximize growth and efficiency</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{optimizationScore}/100</div>
            <div className="text-sm text-purple-100">Optimization Score</div>
            <div className="text-xs text-green-300">+{scoreImprovement} this month</div>
          </div>
        </div>
      </div>

      {/* Optimization Opportunities */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">AI-Identified Opportunities</h3>
          <div className="text-lg font-bold text-green-600">
            ${totalOptimizationImpact}M total potential
          </div>
        </div>

        {/* Revenue Optimization */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Revenue Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {revenueOptimizations.map(opt => (
                <div key={opt.id} className="p-6 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">{opt.title}</h4>
                    <Badge className="bg-green-600 text-white text-lg px-3 py-1">
                      ${opt.impact}K/mo
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{opt.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Effort</div>
                      <div className="mt-1">{getEffortScale(opt.effort)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Confidence</div>
                      <div className="text-lg font-bold">{opt.confidence}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="text-lg font-bold">{opt.timeline}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Supporting Evidence</h5>
                    <div className="space-y-2">
                      {opt.evidence.map(evidence => (
                        <div key={evidence.id} className="flex items-center gap-3 text-sm">
                          <Badge variant="outline">{evidence.type}</Badge>
                          <span>{evidence.data}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => implementOptimization(opt.id)}>
                      Implement
                    </Button>
                    <Button variant="outline" onClick={() => simulateOptimization(opt.id)}>
                      Simulate Impact
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cost Reduction */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Cost Reduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {costOptimizations.map(opt => (
                <div key={opt.id} className="p-6 border border-blue-200 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">{opt.title}</h4>
                    <Badge className="bg-blue-600 text-white text-lg px-3 py-1">
                      ${opt.savings}K/yr saved
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{opt.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-medium mb-2">Current State</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Current Cost</span>
                          <span className="font-medium">${opt.currentCost}K</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Utilization</span>
                          <span className="font-medium">{opt.utilization}%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Proposed Changes</h5>
                      <div className="space-y-1">
                        {opt.proposedChanges.map(change => (
                          <div key={change.id} className="flex justify-between text-sm">
                            <span>{change.description}</span>
                            <span className="font-medium text-green-600">${change.impact}K saved</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getRiskLevel(opt.riskLevel)}
                      <span className="text-sm text-muted-foreground">{opt.riskDescription}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => implementOptimization(opt.id)}>
                      Implement
                    </Button>
                    <Button variant="outline" onClick={() => simulateOptimization(opt.id)}>
                      Analyze Impact
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Efficiency Improvements */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600" />
              Efficiency Improvements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {efficiencyOptimizations.map(opt => (
                <div key={opt.id} className="p-6 border border-purple-200 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">{opt.title}</h4>
                    <Badge className="bg-purple-600 text-white text-lg px-3 py-1">
                      {opt.efficiencyGain}% improvement
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{opt.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-medium mb-2">Current Process</h5>
                      <div className="space-y-2">
                        {opt.currentProcess.map(step => (
                          <div key={step.id} className="flex justify-between text-sm">
                            <span>{step.name}</span>
                            <span className="font-medium">{step.duration}</span>
                          </div>
                        ))}
                        <div className="pt-2 border-t">
                          <div className="flex justify-between font-medium">
                            <span>Total Time</span>
                            <span>{opt.currentTotalTime} hours</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Optimized Process</h5>
                      <div className="space-y-2">
                        {opt.optimizedProcess.map(step => (
                          <div key={step.id} className={`flex justify-between text-sm ${step.isNew ? 'text-green-600' : ''}`}>
                            <span>{step.name}</span>
                            <span className="font-medium">{step.duration}</span>
                          </div>
                        ))}
                        <div className="pt-2 border-t">
                          <div className="flex justify-between font-medium text-green-600">
                            <span>Total Time</span>
                            <span>{opt.optimizedTotalTime} hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Automation Opportunities</h5>
                    <div className="space-y-2">
                      {opt.automationOpportunities.map(automation => (
                        <div key={automation.id} className="flex items-center justify-between p-3 bg-white rounded border">
                          <span className="text-sm">{automation.task}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-green-600">
                              {automation.timeSaved}h/week saved
                            </span>
                            <Button size="sm" onClick={() => setupAutomation(automation.id)}>
                              Automate
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => implementOptimization(opt.id)}>
                      Implement Process
                    </Button>
                    <Button variant="outline" onClick={() => simulateOptimization(opt.id)}>
                      Pilot Test
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optimization Impact Tracking */}
      <Card>
        <CardHeader>
          <CardTitle>Optimization Impact Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Implementation Timeline */}
          <div className="mb-6">
            <h4 className="font-medium mb-4">Recent Implementations</h4>
            <div className="space-y-4">
              {implementedOptimizations.map(opt => (
                <div key={opt.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                      {formatDate(opt.implementedDate)}
                    </div>
                    <div>
                      <div className="font-medium">{opt.name}</div>
                      <Badge variant="outline" className="text-xs">{opt.type}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Expected</div>
                      <div className="font-medium">${opt.expectedImpact}K</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Actual</div>
                      <div className={`font-medium ${opt.actualImpact > opt.expectedImpact ? 'text-green-600' : 'text-red-600'}`}>
                        ${opt.actualImpact}K
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Variance</div>
                      <div className={`font-medium ${opt.variance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {opt.variance > 0 ? '+' : ''}{opt.variance}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cumulative Impact */}
          <div>
            <h4 className="font-medium mb-4">Cumulative Impact</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-sm text-muted-foreground">Total Impact</div>
                <div className="text-2xl font-bold text-green-600">${totalActualImpact}M</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-sm text-muted-foreground">Optimization ROI</div>
                <div className="text-2xl font-bold text-blue-600">{optimizationROI}%</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-sm text-muted-foreground">Active Optimizations</div>
                <div className="text-2xl font-bold text-purple-600">
                  {revenueOptimizations.length + costOptimizations.length + efficiencyOptimizations.length}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
