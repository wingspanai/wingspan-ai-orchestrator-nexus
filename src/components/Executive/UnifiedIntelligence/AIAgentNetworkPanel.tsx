
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUnifiedIntelligenceStore } from '@/store/unifiedIntelligenceStore';
import { Bot, AlertTriangle, CheckCircle, Circle } from 'lucide-react';

export function AIAgentNetworkPanel() {
  const { categoryPerformances, criticalAlerts } = useUnifiedIntelligenceStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-3 h-3 text-green-400" />;
      case 'alert':
        return <AlertTriangle className="w-3 h-3 text-yellow-400" />;
      default:
        return <Circle className="w-3 h-3 text-gray-400" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical':
        return 'text-red-400';
      case 'high':
        return 'text-yellow-400';
      case 'medium':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Bot className="w-5 h-5 text-blue-400" />
            AI Agent Network
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-green-300 border-green-500/30">
              Optimal Status
            </Badge>
            <span className="text-xs text-slate-400">99.97% uptime</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryPerformances.map((category) => (
              <div key={category.name} className="p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{category.name}</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {category.agents} agents
                    </Badge>
                    <Badge variant="outline" className="text-xs text-blue-300">
                      {category.insights} insights
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {category.topInsights.map((insight, index) => (
                    <div key={index} className="text-xs text-slate-300 flex items-start gap-2">
                      <Circle className="w-2 h-2 fill-blue-400 text-blue-400 mt-1 flex-shrink-0" />
                      {insight}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-1">
                  <h5 className="text-xs font-medium text-slate-400">Key Agents:</h5>
                  {category.activeAgents.slice(0, 3).map((agent) => (
                    <div key={agent.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(agent.status)}
                        <span className="text-slate-300">{agent.name}</span>
                      </div>
                      <span className={getImpactColor(agent.impact)}>
                        {agent.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            Critical Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {criticalAlerts.map((alert) => (
              <div key={alert.id} className="p-3 bg-slate-700/50 rounded-lg border-l-2 border-red-500">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-white">{alert.agent}</span>
                  <span className="text-xs text-slate-400">{alert.time}</span>
                </div>
                <p className="text-xs text-slate-300 mb-2">{alert.message}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs h-6">
                    Investigate
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs h-6">
                    Dismiss
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
