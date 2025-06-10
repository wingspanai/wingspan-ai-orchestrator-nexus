
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Bot, Zap, TrendingUp, Clock, DollarSign, Target, Star } from 'lucide-react';

interface MetricContext {
  metricName: string;
  currentValue: string | number;
  targetValue?: string | number;
  trend: number;
  priority: 'high' | 'medium' | 'low';
}

interface AgentRecommendation {
  id: string;
  name: string;
  category: string;
  description: string;
  impact: string;
  roi: string;
  deployTime: string;
  confidence: number;
  difficulty: 'easy' | 'medium' | 'advanced';
  features: string[];
  price: string;
  rating: number;
}

interface SmartAgentDrawerProps {
  context: MetricContext;
  isOpen: boolean;
  onClose: () => void;
}

export function SmartAgentDrawer({ context, isOpen, onClose }: SmartAgentDrawerProps) {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);

  // Mock recommendations based on context
  const recommendations: AgentRecommendation[] = [
    {
      id: '1',
      name: 'Revenue Accelerator AI',
      category: 'Sales Intelligence',
      description: 'Identifies high-potential leads and optimizes sales processes using predictive analytics',
      impact: '+23% conversion rate',
      roi: '$45K/month',
      deployTime: '15 minutes',
      confidence: 94,
      difficulty: 'easy',
      features: ['Lead scoring', 'Pipeline optimization', 'Deal forecasting'],
      price: '$299/month',
      rating: 4.8
    },
    {
      id: '2',
      name: 'Customer Success Predictor',
      category: 'Retention',
      description: 'Prevents churn by identifying at-risk customers and suggesting intervention strategies',
      impact: '+15% retention',
      roi: '$32K/month',
      deployTime: '30 minutes',
      confidence: 89,
      difficulty: 'medium',
      features: ['Churn prediction', 'Health scoring', 'Automated outreach'],
      price: '$199/month',
      rating: 4.6
    },
    {
      id: '3',
      name: 'Process Automation Suite',
      category: 'Operations',
      description: 'Automates repetitive tasks and optimizes workflows across departments',
      impact: '67% time savings',
      roi: '$28K/month',
      deployTime: '45 minutes',
      confidence: 91,
      difficulty: 'medium',
      features: ['Workflow automation', 'Task delegation', 'Performance tracking'],
      price: '$399/month',
      rating: 4.7
    }
  ];

  const totalImpact = recommendations.reduce((sum, agent) => sum + parseInt(agent.roi.replace(/[^0-9]/g, '')), 0);
  const averageDeployTime = '30 minutes';

  const handleAgentToggle = (agentId: string) => {
    setSelectedAgents(prev => 
      prev.includes(agentId) 
        ? prev.filter(id => id !== agentId)
        : [...prev, agentId]
    );
  };

  const handleQuickDeploy = (agentId: string) => {
    console.log('Deploying agent:', agentId);
    // Implementation for quick deploy
  };

  const handleDeploySelected = () => {
    console.log('Deploying selected agents:', selectedAgents);
    // Implementation for bulk deploy
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-amber-100 text-amber-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader className="text-left">
          <DrawerTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-blue-600" />
            AI Agents to Improve {context.metricName}
          </DrawerTitle>
          <DrawerDescription>
            Based on your current performance and historical data, these AI agents can help optimize this metric
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="p-6 space-y-6">
          {/* Impact Summary */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-muted-foreground">Combined Impact</p>
                  <p className="text-2xl font-bold text-blue-600">+34%</p>
                  <p className="text-xs text-muted-foreground">improvement potential</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground">Monthly ROI</p>
                  <p className="text-2xl font-bold text-green-600">${totalImpact / 1000}K</p>
                  <p className="text-xs text-muted-foreground">estimated value</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-sm text-muted-foreground">Deploy Time</p>
                  <p className="text-2xl font-bold text-purple-600">{averageDeployTime}</p>
                  <p className="text-xs text-muted-foreground">average setup</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Recommended Agents */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recommended AI Agents</h3>
            {recommendations.map((agent, index) => (
              <Card 
                key={agent.id} 
                className={`border-2 transition-all duration-200 ${
                  selectedAgents.includes(agent.id) 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                } ${index === 0 ? 'ring-2 ring-blue-500 ring-opacity-20' : ''}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        {index === 0 && (
                          <Badge className="bg-blue-100 text-blue-800">
                            <Star className="mr-1 h-3 w-3" />
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="outline">{agent.category}</Badge>
                        <Badge className={getDifficultyColor(agent.difficulty)}>
                          {agent.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{agent.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{agent.roi}</div>
                      <div className="text-xs text-muted-foreground">estimated ROI</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{agent.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Impact:</span>
                      <div className="font-semibold text-blue-600">{agent.impact}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Deploy Time:</span>
                      <div className="font-semibold">{agent.deployTime}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Confidence:</span>
                      <div className="font-semibold">{agent.confidence}%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-sm font-medium">Key Features:</span>
                    <div className="flex flex-wrap gap-2">
                      {agent.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Price: </span>
                      <span className="font-semibold">{agent.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleAgentToggle(agent.id)}
                      >
                        {selectedAgents.includes(agent.id) ? 'Remove' : 'Select'}
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => handleQuickDeploy(agent.id)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Zap className="mr-1 h-3 w-3" />
                        Quick Deploy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Bulk Actions */}
          {selectedAgents.length > 0 && (
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{selectedAgents.length} agents selected</p>
                    <p className="text-sm text-muted-foreground">
                      Estimated combined setup time: {selectedAgents.length * 20} minutes
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setSelectedAgents([])}>
                      Clear Selection
                    </Button>
                    <Button onClick={handleDeploySelected} className="bg-blue-600 hover:bg-blue-700">
                      <Zap className="mr-2 h-4 w-4" />
                      Deploy Selected
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Quick Deploy All */}
          <div className="flex gap-3">
            <Button 
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              size="lg"
              onClick={() => setSelectedAgents(recommendations.map(a => a.id))}
            >
              <Zap className="mr-2 h-4 w-4" />
              Deploy All ({recommendations.length} agents)
            </Button>
            <Button variant="outline" size="lg">
              Schedule Deployment
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
