
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Circle, 
  Square, 
  ArrowRight, 
  Zap,
  Rocket,
  TrendingUp,
  Heart,
  Code,
  DollarSign,
  Edit
} from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  type: string;
  status: string;
}

interface AgentFlowDiagramProps {
  agents: Agent[];
}

export function AgentFlowDiagram({ agents }: AgentFlowDiagramProps) {
  const getAgentIcon = (type: string) => {
    switch (type) {
      case 'coordinator': return <Rocket className="w-4 h-4" />;
      case 'intelligence': return <TrendingUp className="w-4 h-4" />;
      case 'customer-success': return <Heart className="w-4 h-4" />;
      case 'development': return <Code className="w-4 h-4" />;
      case 'revenue': return <DollarSign className="w-4 h-4" />;
      case 'content': return <Edit className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Flow Visualization */}
      <div className="relative">
        <svg width="100%" height="400" viewBox="0 0 800 400" className="border rounded-lg bg-gray-50">
          {/* Central Hub */}
          <g transform="translate(400,200)">
            <circle r="40" fill="#6366f1" />
            <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
              AI Hub
            </text>
          </g>

          {/* Agent Nodes */}
          {agents.slice(0, 6).map((agent, index) => {
            const angle = (index * 60) * (Math.PI / 180);
            const x = 400 + Math.cos(angle) * 150;
            const y = 200 + Math.sin(angle) * 150;
            
            return (
              <g key={agent.id} transform={`translate(${x},${y})`}>
                <circle 
                  r="30" 
                  fill={agent.status === 'active' ? '#10b981' : '#6b7280'} 
                  opacity="0.8"
                />
                <text 
                  x="0" 
                  y="5" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="10"
                  fontWeight="bold"
                >
                  {agent.name.split(' ')[0]}
                </text>
                
                {/* Connection to hub */}
                <line 
                  x1={x > 400 ? -30 : 30} 
                  y1="0" 
                  x2={400 - x > 0 ? 110 : -110} 
                  y2={200 - y}
                  stroke="#6366f1" 
                  strokeWidth="2"
                  opacity="0.6"
                />
              </g>
            );
          })}

          {/* Data Flow Indicators */}
          <g>
            <circle r="3" fill="#f59e0b">
              <animateMotion dur="3s" repeatCount="indefinite">
                <path d="M 400,200 Q 500,150 550,200" />
              </animateMotion>
            </circle>
          </g>
        </svg>
      </div>

      {/* Legend */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">Flow Legend</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Circle className="w-4 h-4 text-green-600" />
              <span className="text-sm">Active Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <Square className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Decision Point</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-600" />
              <span className="text-sm">Data Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-600" />
              <span className="text-sm">Automation Trigger</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Agent Details */}
      <div className="grid grid-cols-3 gap-4">
        {agents.slice(0, 6).map((agent) => (
          <Card key={agent.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-3">
              <div className="flex items-center gap-2 mb-2">
                {getAgentIcon(agent.type)}
                <span className="font-medium text-sm">{agent.name}</span>
              </div>
              <Badge 
                variant={agent.status === 'active' ? 'default' : 'secondary'}
                className="text-xs"
              >
                {agent.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
