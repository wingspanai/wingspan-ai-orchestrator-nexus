
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useResilienceStore } from '@/store/resilienceStore';
import { CheckCircle, Clock, AlertCircle, Play, Pause, X, Plus } from 'lucide-react';

export function SelfHealingOperations() {
  const { 
    activeHealingProcesses, 
    healingPlaybooks, 
    updateHealingProcess, 
    togglePlaybook 
  } = useResilienceStore();

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'active':
        return <Clock className="w-4 h-4 text-blue-400 animate-spin" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <div className="w-4 h-4 rounded-full border-2 border-slate-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'failed':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'paused':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Active Healing Processes */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Active Self-Healing Operations</CardTitle>
          <div className="flex gap-4 text-sm">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
              {activeHealingProcesses.length} Active
            </Badge>
            <Badge variant="outline">147 Completed Today</Badge>
            <Badge variant="outline">92.3% Success Rate</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeHealingProcesses.map((process) => (
              <div key={process.id} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-medium text-white mb-1">{process.name}</h4>
                    <p className="text-sm text-slate-400 mb-2">{process.issue}</p>
                    <Badge className={getStatusColor(process.status)}>
                      {process.status}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Success Probability</div>
                    <div className="text-lg font-bold text-green-400">
                      {process.successProbability}%
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Healing Steps</div>
                  <div className="space-y-2">
                    {process.steps.map((step, index) => (
                      <div key={step.id} className="flex items-center gap-3 p-2 rounded bg-slate-600/30">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-xs text-white">
                            {index + 1}
                          </span>
                          {getStepIcon(step.status)}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white">{step.description}</div>
                          <div className="text-xs text-slate-400">{step.status}</div>
                        </div>
                        <div className="text-xs text-slate-400">
                          {step.timeEstimate}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-600/20 rounded">
                  <div>
                    <div className="text-xs text-slate-400">Time Elapsed</div>
                    <div className="text-sm font-medium text-white">{process.timeElapsed}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Resources Used</div>
                    <div className="text-sm font-medium text-white">{process.resourcesUsed}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">System</div>
                    <div className="text-sm font-medium text-white">{process.system}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Pause className="w-4 h-4 mr-1" />
                    Pause
                  </Button>
                  <Button size="sm" variant="destructive">
                    <X className="w-4 h-4 mr-1" />
                    Abort
                  </Button>
                </div>
              </div>
            ))}

            {activeHealingProcesses.length === 0 && (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">All Systems Healthy</h3>
                <p className="text-slate-400">No active healing processes at this time</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Healing Playbook Library */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Self-Healing Playbook Library</CardTitle>
          <CardDescription className="text-slate-400">
            AI-generated and human-verified healing strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healingPlaybooks.map((playbook) => (
              <div key={playbook.id} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-white mb-1">{playbook.name}</h4>
                    <p className="text-sm text-slate-400">{playbook.description}</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    {playbook.successRate}% success
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-white">{playbook.timesUsed}</div>
                    <div className="text-xs text-slate-400">Used</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{playbook.avgTime}</div>
                    <div className="text-xs text-slate-400">Avg Time</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Updated</div>
                    <div className="text-xs text-white">{playbook.lastUpdated}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-slate-400 mb-1">Triggers</div>
                  <div className="flex flex-wrap gap-1">
                    {playbook.triggers.map((trigger, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {trigger}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={playbook.autoEnabled} 
                      onCheckedChange={() => togglePlaybook(playbook.id)}
                    />
                    <span className="text-sm text-white">Auto-enabled</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      Test
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create New Playbook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
