
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Plus, 
  Upload, 
  CheckCircle, 
  Clock, 
  Circle,
  Play,
  Pause,
  Settings
} from 'lucide-react';

export function AutomationWorkflows() {
  const [workflows] = useState([
    {
      id: 'launch-sequence',
      name: 'Automated Launch Sequence',
      description: 'End-to-end automation of product launch tasks from ideation to post-launch',
      stages: [
        { id: 1, name: 'Market Validation', status: 'completed', actions: ['Survey automation', 'Competitor analysis', 'TAM calculation'] },
        { id: 2, name: 'Development Coordination', status: 'active', actions: ['Sprint planning', 'Resource allocation', 'Progress tracking'] },
        { id: 3, name: 'Launch Execution', status: 'pending', actions: ['Campaign activation', 'Channel coordination', 'Performance monitoring'] }
      ],
      metrics: {
        tasksAutomated: 47,
        timeSaved: 23,
        errorRate: 2.1
      }
    },
    {
      id: 'customer-onboarding',
      name: 'Intelligent Customer Onboarding',
      description: 'Personalized onboarding sequences based on customer segment and behavior',
      triggers: [
        { type: 'Event', condition: 'New customer signup' },
        { type: 'Behavior', condition: 'Feature activation' },
        { type: 'Time', condition: 'Day 3, 7, 14, 30' }
      ],
      rules: [
        { condition: 'If enterprise customer', action: 'Assign dedicated CSM' },
        { condition: 'If low engagement', action: 'Trigger re-engagement sequence' }
      ]
    },
    {
      id: 'revenue-optimization',
      name: 'Dynamic Revenue Optimization',
      description: 'Real-time pricing adjustments and upsell opportunities based on market conditions',
      optimizations: [
        { name: 'Price Elasticity Testing', logic: 'A/B test pricing with 5% variance', impact: '+12% revenue' },
        { name: 'Churn Prevention Discounts', logic: 'Offer targeted discounts to at-risk', impact: '35% churn reduction' }
      ]
    }
  ]);

  const getStageIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'active': return <Clock className="w-4 h-4 text-blue-600" />;
      case 'pending': return <Circle className="w-4 h-4 text-gray-400" />;
      default: return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStageProgress = (status: string) => {
    switch (status) {
      case 'completed': return 100;
      case 'active': return 65;
      case 'pending': return 0;
      default: return 0;
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Intelligent Automation Workflows</CardTitle>
          <div className="flex gap-2">
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Create Workflow
            </Button>
            <Button size="sm" variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Import Template
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {workflows.map((workflow) => (
            <Card key={workflow.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium">{workflow.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {workflow.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Launch Sequence Workflow */}
                {workflow.id === 'launch-sequence' && (
                  <>
                    <div className="space-y-3 mb-4">
                      {workflow.stages.map((stage) => (
                        <div key={stage.id} className="flex items-center gap-4 p-3 border rounded-lg">
                          <div className="flex items-center gap-2">
                            {getStageIcon(stage.status)}
                            <span className="font-medium">{stage.name}</span>
                          </div>
                          <div className="flex-1">
                            <Progress value={getStageProgress(stage.status)} className="h-2" />
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stage.actions.length} actions
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold">{workflow.metrics.tasksAutomated}</div>
                        <div className="text-sm text-muted-foreground">Tasks Automated</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{workflow.metrics.timeSaved}h</div>
                        <div className="text-sm text-muted-foreground">Time Saved</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{workflow.metrics.errorRate}%</div>
                        <div className="text-sm text-muted-foreground">Error Rate</div>
                      </div>
                    </div>
                  </>
                )}

                {/* Customer Onboarding Workflow */}
                {workflow.id === 'customer-onboarding' && (
                  <>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Automation Triggers</h4>
                      <div className="space-y-2">
                        {workflow.triggers.map((trigger, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Badge variant="outline">{trigger.type}</Badge>
                            <span className="text-sm">{trigger.condition}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Personalization Rules</h4>
                      <div className="space-y-2">
                        {workflow.rules.map((rule, index) => (
                          <div key={index} className="text-sm">
                            <span className="font-medium">{rule.condition}</span>
                            <span className="text-muted-foreground"> → {rule.action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Revenue Optimization Workflow */}
                {workflow.id === 'revenue-optimization' && (
                  <div className="space-y-3">
                    {workflow.optimizations.map((opt, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{opt.name}</h4>
                          <Badge variant="secondary">{opt.impact}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{opt.logic}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">View Runs</Button>
                  <Button size="sm" variant="outline">Analytics</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
