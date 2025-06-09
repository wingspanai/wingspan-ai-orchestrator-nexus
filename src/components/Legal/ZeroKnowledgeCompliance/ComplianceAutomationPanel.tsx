
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useZeroKnowledgeStore } from '@/store/zeroKnowledgeStore';
import { Bot, TrendingUp, Sparkles } from 'lucide-react';

export function ComplianceAutomationPanel() {
  const { complianceRules, aiRecommendations } = useZeroKnowledgeStore();

  return (
    <Card className="bg-slate-800/95 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Compliance Automation Engine</CardTitle>
        <CardDescription className="text-gray-400">
          AI-powered compliance workflows with zero-knowledge verification
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Active Compliance Rules */}
        <div className="mb-6">
          <h4 className="font-medium text-white mb-4">Active Compliance Rules</h4>
          <div className="space-y-4">
            {complianceRules.map(rule => (
              <div key={rule.id} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-white">{rule.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={rule.active ? 'bg-green-600' : 'bg-gray-600'}>
                      {rule.active ? 'Active' : 'Inactive'}
                    </Badge>
                    <Switch checked={rule.active} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Executions:</span>
                    <span className="text-white ml-2">{rule.executions}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Success Rate:</span>
                    <span className="text-white ml-2">{rule.successRate}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Avg Time:</span>
                    <span className="text-white ml-2">{rule.avgTime}</span>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">Test</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <h4 className="font-medium text-white">AI Compliance Recommendations</h4>
            <Badge variant="outline">AI Powered</Badge>
          </div>
          <div className="space-y-3">
            {aiRecommendations.map(rec => (
              <div key={rec.id} className="p-4 rounded-lg bg-slate-700/30 border border-slate-600">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium text-white">{rec.title}</div>
                    <div className="text-sm text-gray-300 mt-1">{rec.description}</div>
                  </div>
                  <Badge 
                    variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'default' : 'secondary'}
                  >
                    {rec.priority}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    Impact: {rec.impact} | Effort: {rec.effort}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Implement</Button>
                    <Button size="sm" variant="outline">Schedule</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
