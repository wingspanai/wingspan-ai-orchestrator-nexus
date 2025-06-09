
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUnifiedIntelligenceStore } from '@/store/unifiedIntelligenceStore';
import { Target, TrendingUp, CheckCircle, Clock } from 'lucide-react';

export function StrategicOpportunitiesPanel() {
  const { strategicOpportunities } = useUnifiedIntelligenceStore();

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">AI-Discovered Strategic Opportunities</CardTitle>
          <CardDescription className="text-slate-400">
            Opportunities identified by cross-referencing insights from all 150+ agents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6">
            {strategicOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="p-6 bg-slate-700/50 rounded-lg border border-slate-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{opportunity.title}</h3>
                    <p className="text-slate-300 text-sm mb-3">{opportunity.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{opportunity.value}</div>
                    <Badge className={getImpactColor(opportunity.impact)}>
                      {opportunity.impact} impact
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Contributing Agents</h4>
                    <div className="flex flex-wrap gap-1">
                      {opportunity.agents.map((agent) => (
                        <Badge key={agent} variant="outline" className="text-xs">
                          {agent}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Success Factors</h4>
                    <div className="space-y-1">
                      {opportunity.successFactors.map((factor, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          {factor.achieved ? (
                            <CheckCircle className="w-3 h-3 text-green-400" />
                          ) : (
                            <Clock className="w-3 h-3 text-yellow-400" />
                          )}
                          <span className={factor.achieved ? 'text-green-300' : 'text-yellow-300'}>
                            {factor.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-2">Timeline</h4>
                    <div className="space-y-1 text-xs text-slate-300">
                      <div>Discovered: {opportunity.discovered}</div>
                      <div>Validated: {opportunity.validated}</div>
                      <div className="text-yellow-400">Decision Due: {opportunity.decisionDue}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Deep Dive Analysis
                  </Button>
                  <Button size="sm" variant="outline">
                    <Target className="w-4 h-4 mr-2" />
                    Create Task Force
                  </Button>
                  <Button size="sm" variant="outline">
                    ROI Simulation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
