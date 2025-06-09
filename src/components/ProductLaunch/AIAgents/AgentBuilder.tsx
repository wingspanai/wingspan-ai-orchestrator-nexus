
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Plus, 
  X, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Zap,
  Play,
  Brain
} from 'lucide-react';

interface AgentBuilderProps {
  onClose: () => void;
  onSave: (agent: any) => void;
}

export function AgentBuilder({ onClose, onSave }: AgentBuilderProps) {
  const [agentData, setAgentData] = useState({
    name: '',
    type: '',
    description: '',
    capabilities: [],
    dataSources: [],
    decisionRules: []
  });

  const [testResults, setTestResults] = useState({
    decisionSpeed: 45,
    accuracy: 94,
    resourceUsage: 23
  });

  const availableCapabilities = [
    { id: 'analysis', name: 'Data Analysis', icon: Target },
    { id: 'optimization', name: 'Process Optimization', icon: TrendingUp },
    { id: 'prediction', name: 'Predictive Modeling', icon: Lightbulb },
    { id: 'automation', name: 'Task Automation', icon: Zap }
  ];

  const dataSources = [
    { id: 'crm', name: 'CRM System', type: 'Database' },
    { id: 'analytics', name: 'Analytics Platform', type: 'API' },
    { id: 'marketing', name: 'Marketing Tools', type: 'Integration' },
    { id: 'development', name: 'Development Tools', type: 'API' }
  ];

  const handleSave = () => {
    onSave({
      ...agentData,
      id: `agent-${Date.now()}`,
      status: 'inactive',
      metrics: {
        managed: 0,
        successRate: 0,
        timeSaved: 0
      },
      recentActions: []
    });
  };

  const addDecisionRule = () => {
    setAgentData(prev => ({
      ...prev,
      decisionRules: [...prev.decisionRules, { 
        id: Date.now(),
        condition: '',
        action: ''
      }]
    }));
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            AI Agent Builder
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <div className="space-y-6">
            {/* Agent Basics */}
            <Card>
              <CardHeader>
                <CardTitle>Agent Basics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Agent Name</Label>
                  <Input 
                    value={agentData.name}
                    onChange={(e) => setAgentData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter agent name"
                  />
                </div>
                <div>
                  <Label>Agent Type</Label>
                  <Select value={agentData.type} onValueChange={(type) => setAgentData(prev => ({ ...prev, type }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select agent type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="analyzer">Analyzer</SelectItem>
                      <SelectItem value="optimizer">Optimizer</SelectItem>
                      <SelectItem value="coordinator">Coordinator</SelectItem>
                      <SelectItem value="generator">Generator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea 
                    value={agentData.description}
                    onChange={(e) => setAgentData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe what this agent does"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Capabilities */}
            <Card>
              <CardHeader>
                <CardTitle>Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {availableCapabilities.map((capability) => {
                    const Icon = capability.icon;
                    const isSelected = agentData.capabilities.includes(capability.id);
                    
                    return (
                      <Button
                        key={capability.id}
                        variant={isSelected ? 'default' : 'outline'}
                        onClick={() => {
                          setAgentData(prev => ({
                            ...prev,
                            capabilities: isSelected 
                              ? prev.capabilities.filter(c => c !== capability.id)
                              : [...prev.capabilities, capability.id]
                          }));
                        }}
                        className="justify-start"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {capability.name}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Data Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Data Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dataSources.map((source) => (
                    <div key={source.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={agentData.dataSources.includes(source.id)}
                          onCheckedChange={(checked) => {
                            setAgentData(prev => ({
                              ...prev,
                              dataSources: checked 
                                ? [...prev.dataSources, source.id]
                                : prev.dataSources.filter(d => d !== source.id)
                            }));
                          }}
                        />
                        <div>
                          <div className="font-medium">{source.name}</div>
                          <div className="text-sm text-muted-foreground">{source.type}</div>
                        </div>
                      </div>
                      <Select defaultValue="read">
                        <SelectTrigger className="w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="read">Read</SelectItem>
                          <SelectItem value="write">Write</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Decision Rules */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Decision Framework</CardTitle>
                  <Button size="sm" onClick={addDecisionRule}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Rule
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {agentData.decisionRules.map((rule, index) => (
                    <div key={rule.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Rule {index + 1}</span>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => {
                            setAgentData(prev => ({
                              ...prev,
                              decisionRules: prev.decisionRules.filter((_, i) => i !== index)
                            }));
                          }}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <Label className="text-xs">If</Label>
                          <Input 
                            placeholder="Enter condition"
                            value={rule.condition}
                            onChange={(e) => {
                              const newRules = [...agentData.decisionRules];
                              newRules[index].condition = e.target.value;
                              setAgentData(prev => ({ ...prev, decisionRules: newRules }));
                            }}
                          />
                        </div>
                        <div>
                          <Label className="text-xs">Then</Label>
                          <Input 
                            placeholder="Enter action"
                            value={rule.action}
                            onChange={(e) => {
                              const newRules = [...agentData.decisionRules];
                              newRules[index].action = e.target.value;
                              setAgentData(prev => ({ ...prev, decisionRules: newRules }));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">{agentData.name || 'Unnamed Agent'}</h3>
                    <Badge variant="outline">{agentData.type || 'No Type'}</Badge>
                    <p className="text-sm text-muted-foreground mt-2">
                      {agentData.description || 'No description provided'}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Selected Capabilities</h4>
                    <div className="flex flex-wrap gap-1">
                      {agentData.capabilities.map((capId) => {
                        const cap = availableCapabilities.find(c => c.id === capId);
                        return cap ? (
                          <Badge key={capId} variant="secondary">{cap.name}</Badge>
                        ) : null;
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Data Sources</h4>
                    <div className="text-sm text-muted-foreground">
                      {agentData.dataSources.length} sources connected
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Decision Rules</h4>
                    <div className="text-sm text-muted-foreground">
                      {agentData.decisionRules.length} rules configured
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Simulation Results</CardTitle>
                  <Button size="sm" variant="outline">
                    <Play className="w-4 h-4 mr-2" />
                    Test Agent
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{testResults.decisionSpeed}ms</div>
                    <div className="text-sm text-muted-foreground">Decision Speed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{testResults.accuracy}%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{testResults.resourceUsage}%</div>
                    <div className="text-sm text-muted-foreground">Resource Usage</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleSave}
            disabled={!agentData.name || !agentData.type}
          >
            Save Agent
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
