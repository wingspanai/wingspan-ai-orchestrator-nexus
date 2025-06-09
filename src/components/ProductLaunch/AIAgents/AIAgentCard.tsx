
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  TrendingUp, 
  Heart, 
  Code, 
  DollarSign, 
  Edit,
  CheckCircle,
  Clock
} from 'lucide-react';

interface AIAgent {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'paused' | 'inactive';
  description: string;
  capabilities: string[];
  metrics: {
    managed: number;
    successRate: number;
    timeSaved: number;
  };
  recentActions: Array<{
    id: string;
    time: string;
    text: string;
  }>;
  featured?: boolean;
}

interface AIAgentCardProps {
  agent: AIAgent;
  onConfigure: () => void;
  onViewInsights: () => void;
}

export function AIAgentCard({ agent, onConfigure, onViewInsights }: AIAgentCardProps) {
  const getAgentIcon = (type: string) => {
    switch (type) {
      case 'coordinator': return <Rocket className="w-5 h-5" />;
      case 'intelligence': return <TrendingUp className="w-5 h-5" />;
      case 'customer-success': return <Heart className="w-5 h-5" />;
      case 'development': return <Code className="w-5 h-5" />;
      case 'revenue': return <DollarSign className="w-5 h-5" />;
      case 'content': return <Edit className="w-5 h-5" />;
      default: return <Rocket className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={`${agent.featured ? 'ring-2 ring-primary' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              {getAgentIcon(agent.type)}
            </div>
            <div>
              <h3 className="font-medium">{agent.name}</h3>
              <Badge className={getStatusColor(agent.status)}>
                {agent.status}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              agent.status === 'active' ? 'bg-green-500' : 
              agent.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-500'
            }`} />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3">
          {agent.description}
        </p>
        
        <div className="space-y-2 mb-3">
          <h4 className="text-sm font-medium">Capabilities</h4>
          <div className="flex flex-wrap gap-1">
            {agent.capabilities.slice(0, 3).map((capability, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {capability}
              </Badge>
            ))}
            {agent.capabilities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{agent.capabilities.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center mb-3">
          <div>
            <div className="text-lg font-semibold">{agent.metrics.managed}</div>
            <div className="text-xs text-muted-foreground">Managed</div>
          </div>
          <div>
            <div className="text-lg font-semibold">{agent.metrics.successRate}%</div>
            <div className="text-xs text-muted-foreground">Success Rate</div>
          </div>
          <div>
            <div className="text-lg font-semibold">{agent.metrics.timeSaved}d</div>
            <div className="text-xs text-muted-foreground">Time Saved</div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <h4 className="text-sm font-medium">Recent Actions</h4>
          <div className="space-y-1">
            {agent.recentActions.slice(0, 2).map((action) => (
              <div key={action.id} className="text-xs">
                <span className="text-muted-foreground">{action.time}</span>
                <span className="ml-2">{action.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1" onClick={onConfigure}>
            Configure
          </Button>
          <Button size="sm" className="flex-1" onClick={onViewInsights}>
            View Insights
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
