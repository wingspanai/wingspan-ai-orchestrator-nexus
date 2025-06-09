
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUnifiedIntelligenceStore } from '@/store/unifiedIntelligenceStore';
import { Brain, Clock, Users, Play } from 'lucide-react';

export function DecisionSupportPanel() {
  const { pendingDecisions } = useUnifiedIntelligenceStore();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'high':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'medium':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Executive Decision Support System</CardTitle>
          <CardDescription className="text-slate-400">
            AI-powered decision analysis with multi-agent consensus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Decisions Requiring Attention</h4>
              <div className="space-y-4">
                {pendingDecisions.map((decision) => (
                  <div key={decision.id} className="p-6 bg-slate-700/50 rounded-lg border border-slate-600">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{decision.title}</h3>
                        <p className="text-slate-300 text-sm mb-3">{decision.context}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getPriorityColor(decision.priority)}>
                          {decision.priority}
                        </Badge>
                        <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                          <Clock className="w-3 h-3" />
                          {decision.deadline}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 mb-2">Stakeholder Impact</h4>
                        <div className="space-y-1">
                          {decision.stakeholders.map((stakeholder, index) => (
                            <div key={index} className="flex items-center justify-between text-xs">
                              <span className="text-slate-300">{stakeholder.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {stakeholder.impact}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 mb-2">AI Analysis</h4>
                        {decision.options.map((option) => (
                          <div key={option.id} className="p-3 bg-slate-600/50 rounded-lg mb-2">
                            <div className="font-medium text-white text-sm mb-1">{option.name}</div>
                            <p className="text-xs text-slate-300 mb-2">{option.aiRecommendation}</p>
                            <div className="flex items-center gap-2">
                              <Badge className={
                                option.recommendationStrength === 'strong' ? 'bg-green-500/20 text-green-300' :
                                option.recommendationStrength === 'moderate' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-gray-500/20 text-gray-300'
                              }>
                                {option.recommendationStrength}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Brain className="w-4 h-4 mr-2" />
                        Make Decision
                      </Button>
                      <Button size="sm" variant="outline">
                        More Analysis
                      </Button>
                      <Button size="sm" variant="outline">
                        <Users className="w-4 h-4 mr-2" />
                        Schedule Discussion
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Decision Impact Simulator</h4>
              <div className="p-6 bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h5 className="font-medium text-white">Build Scenario</h5>
                    <p className="text-sm text-slate-400">Create and test decision scenarios</p>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Play className="w-4 h-4 mr-2" />
                    Run Simulation
                  </Button>
                </div>
                
                <div className="h-32 bg-slate-600/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-slate-300 text-sm">Interactive simulation interface</p>
                    <p className="text-xs text-slate-400">Test decision impacts across all business dimensions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
