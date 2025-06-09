
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useResilienceStore } from '@/store/resilienceStore';
import { ChevronDown, ChevronRight, Server, Database, Network, Bot } from 'lucide-react';
import { useState } from 'react';

export function SystemHealthTree() {
  const { systemHealth } = useResilienceStore();
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['infrastructure', 'ai-agents']));

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  const getHealthColor = (health: number) => {
    if (health >= 95) return 'text-green-500';
    if (health >= 85) return 'text-yellow-500';
    if (health >= 70) return 'text-orange-500';
    return 'text-red-500';
  };

  const getStatusBadge = (status: string, selfHealing: boolean) => {
    if (selfHealing && status === 'monitoring') {
      return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Self-Healing Active</Badge>;
    }
    
    switch (status) {
      case 'healthy':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/50">Healthy</Badge>;
      case 'monitoring':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Monitoring</Badge>;
      case 'critical':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/50">Critical</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getSystemIcon = (type: string) => {
    switch (type) {
      case 'infrastructure':
        return <Server className="w-4 h-4" />;
      case 'ai-agent':
        return <Bot className="w-4 h-4" />;
      case 'application':
        return <Database className="w-4 h-4" />;
      default:
        return <Network className="w-4 h-4" />;
    }
  };

  const renderSystemNode = (system: any, level = 0) => {
    const isExpanded = expandedNodes.has(system.id);
    const hasChildren = system.components && system.components.length > 0;

    return (
      <div key={system.id} className={`${level > 0 ? 'ml-6 border-l border-slate-700 pl-4' : ''}`}>
        <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-colors">
          <div className="flex items-center gap-3 flex-1">
            {hasChildren && (
              <button
                onClick={() => toggleNode(system.id)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            )}
            {!hasChildren && <div className="w-4" />}
            
            <div className="flex items-center gap-2">
              {getSystemIcon(system.type)}
              <span className="font-medium text-white">{system.name}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className={`font-mono text-sm ${getHealthColor(system.health)}`}>
              {system.health}%
            </span>
            {getStatusBadge(system.status, system.selfHealing)}
            {system.emtAgent && (
              <Badge variant="outline" className="text-xs">
                {system.emtAgent}
              </Badge>
            )}
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="mt-2">
            {system.components.map((component: any) => renderSystemNode(component, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="pb-4">
        <CardTitle className="text-white flex items-center gap-2">
          <Server className="w-5 h-5" />
          Enterprise System Health
        </CardTitle>
        <div className="flex gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-slate-400">Healthy</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-slate-400">Monitoring</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-slate-400">Critical</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-slate-400">Self-Healing Active</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {systemHealth.map(system => renderSystemNode(system))}
      </CardContent>
    </Card>
  );
}
