
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  Plus, 
  Settings,
  Activity,
  Rocket,
  DollarSign,
  FileText,
  Play,
  Grid,
  BarChart,
  CheckCircle,
  Clock,
  Circle,
  Code,
  Heart,
  MessageSquare,
  Edit
} from 'lucide-react';
import { useAIAgentsStore } from '@/store/aiAgentsStore';
import { AIAgentCard } from './AIAgentCard';
import { AgentBuilder } from './AgentBuilder';
import { AgentFlowDiagram } from './AgentFlowDiagram';
import { AutomationWorkflows } from './AutomationWorkflows';

type ViewMode = 'grid' | 'flow' | 'hierarchy';

export function AIAgentsDashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showAgentBuilder, setShowAgentBuilder] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  
  const {
    agents,
    agentMetrics,
    agentActivities,
    systemHealth,
    activeAgents,
    automationEnabled,
    toggleAutomation,
    createAgent,
    configureAgent
  } = useAIAgentsStore();

  const {
    totalDecisionsMade,
    decisionSuccessRate,
    automatedTasks,
    timeSavedHours,
    valueGenerated,
    automationROI,
    issuesPrevented,
    preventionAccuracy,
    stakeholdersSaved,
    efficiencyGain
  } = agentMetrics;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">AI Agent Command Center</h1>
            <p className="text-purple-100 mt-2">
              Autonomous agents, intelligent automation, and predictive operations
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <div className={`w-3 h-3 rounded-full ${activeAgents.length > 0 ? 'bg-green-400' : 'bg-red-400'}`} />
              <span>{activeAgents.length} agents active</span>
            </div>
            <Button 
              variant={automationEnabled ? 'secondary' : 'outline'}
              onClick={toggleAutomation}
            >
              <Zap className="w-4 h-4 mr-2" />
              {automationEnabled ? 'Automation On' : 'Automation Off'}
            </Button>
            <Button variant="secondary" onClick={() => setShowAgentBuilder(true)}>
              <Plus className="w-4 h-4 mr-2" />
              New Agent
            </Button>
            <Button variant="secondary">
              <FileText className="w-4 h-4 mr-2" />
              Activity Logs
            </Button>
          </div>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-5 gap-4 p-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalDecisionsMade}</div>
                <div className="text-sm text-muted-foreground">Decisions Made</div>
                <div className="text-xs text-green-600">{decisionSuccessRate}% success</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{automatedTasks}</div>
                <div className="text-sm text-muted-foreground">Tasks Automated</div>
                <div className="text-xs text-blue-600">{timeSavedHours}h saved</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">${valueGenerated}K</div>
                <div className="text-sm text-muted-foreground">Value Generated</div>
                <div className="text-xs text-green-600">{automationROI}% ROI</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{issuesPrevented}</div>
                <div className="text-sm text-muted-foreground">Issues Prevented</div>
                <div className="text-xs text-orange-600">{preventionAccuracy}% accuracy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stakeholdersSaved}</div>
                <div className="text-sm text-muted-foreground">Stakeholder Hours</div>
                <div className="text-xs text-indigo-600">+{efficiencyGain}% efficiency</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Main Agent Management Area */}
        <main className="col-span-9">
          {/* Agent Ecosystem */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active AI Agents</CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    onClick={() => setViewMode('grid')}
                    size="sm"
                  >
                    <Grid className="w-4 h-4 mr-2" />
                    Grid View
                  </Button>
                  <Button
                    variant={viewMode === 'flow' ? 'default' : 'outline'}
                    onClick={() => setViewMode('flow')}
                    size="sm"
                  >
                    <BarChart className="w-4 h-4 mr-2" />
                    Flow View
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {viewMode === 'grid' && (
                <div className="grid grid-cols-2 gap-4">
                  {agents.map((agent) => (
                    <AIAgentCard 
                      key={agent.id} 
                      agent={agent}
                      onConfigure={() => configureAgent(agent.id)}
                      onViewInsights={() => setSelectedAgent(agent)}
                    />
                  ))}
                </div>
              )}

              {viewMode === 'flow' && (
                <AgentFlowDiagram agents={agents} />
              )}
            </CardContent>
          </Card>

          {/* Automation Workflows */}
          <AutomationWorkflows />
        </main>

        {/* Right Sidebar - Agent Insights & Control */}
        <aside className="col-span-3">
          {/* Agent Activity Stream */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Agent Activity Stream
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {agentActivities.map((activity) => (
                  <div key={activity.id} className="border-l-2 border-primary pl-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{activity.agent}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {activity.timestamp}
                      </span>
                    </div>
                    <div className="mt-1">
                      <div className="text-sm font-medium">{activity.type}</div>
                      <div className="text-xs text-muted-foreground">
                        {activity.description}
                      </div>
                      {activity.impact && (
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs text-muted-foreground">Impact:</span>
                          <span className={`text-xs ${activity.impact > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {activity.impact > 0 ? '+' : ''}{activity.impact}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive">High Priority</Badge>
                  </div>
                  <h4 className="font-medium text-sm">Create Supply Chain Optimizer</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Based on recent inventory issues, an AI agent could optimize 
                    supply chain and reduce stockouts by 40%
                  </p>
                  <Button size="sm" className="mt-2">
                    Create Agent →
                  </Button>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Medium Priority</Badge>
                  </div>
                  <h4 className="font-medium text-sm">Enhance Customer Feedback Loop</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Connect Customer Success AI with Product Development to 
                    automatically prioritize feature requests
                  </p>
                  <Button size="sm" variant="outline" className="mt-2">
                    Implement →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Agent Response Time</span>
                    <span className={systemHealth.responseTime < 100 ? 'text-green-600' : 'text-yellow-600'}>
                      {systemHealth.responseTime}ms
                    </span>
                  </div>
                  <Progress value={100 - (systemHealth.responseTime / 10)} />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Decision Accuracy</span>
                    <span className={systemHealth.accuracy > 90 ? 'text-green-600' : 'text-yellow-600'}>
                      {systemHealth.accuracy}%
                    </span>
                  </div>
                  <Progress value={systemHealth.accuracy} />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>System Load</span>
                    <span className={systemHealth.load > 70 ? 'text-yellow-600' : 'text-green-600'}>
                      {systemHealth.load}%
                    </span>
                  </div>
                  <Progress value={systemHealth.load} />
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Agent Builder Modal */}
      {showAgentBuilder && (
        <AgentBuilder 
          onClose={() => setShowAgentBuilder(false)}
          onSave={(agent) => {
            createAgent(agent);
            setShowAgentBuilder(false);
          }}
        />
      )}
    </div>
  );
}
