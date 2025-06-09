
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useResilienceStore } from '@/store/resilienceStore';
import { Brain, TrendingUp, Network, CheckCircle, Eye } from 'lucide-react';

export function SystemLearning() {
  const { 
    recentLearnings, 
    patternAccuracy, 
    knowledgeBaseSize, 
    newPatternsLearned,
    approveLearning 
  } = useResilienceStore();

  const getLearningTypeIcon = (type: string) => {
    switch (type) {
      case 'pattern':
        return <Network className="w-4 h-4 text-purple-400" />;
      case 'prediction':
        return <TrendingUp className="w-4 h-4 text-blue-400" />;
      case 'optimization':
        return <Brain className="w-4 h-4 text-green-400" />;
      case 'anomaly':
        return <Eye className="w-4 h-4 text-yellow-400" />;
      default:
        return <Brain className="w-4 h-4 text-gray-400" />;
    }
  };

  const getLearningTypeBadge = (type: string) => {
    switch (type) {
      case 'pattern':
        return <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">Pattern</Badge>;
      case 'prediction':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Prediction</Badge>;
      case 'optimization':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/50">Optimization</Badge>;
      case 'anomaly':
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Anomaly</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);
    
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff}m ago`;
    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="space-y-6">
      {/* Learning Dashboard */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Continuous Learning & Improvement</CardTitle>
          <CardDescription className="text-slate-400">
            Zero AI drift through continuous pattern recognition and adaptation
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Learning Metrics */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">
                {newPatternsLearned.toLocaleString()}
              </div>
              <div className="text-sm text-slate-400 mb-1">Patterns Learned</div>
              <div className="text-xs text-green-400">+23% this month</div>
            </div>

            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">+4.2%</div>
              <div className="text-sm text-slate-400 mb-1">Accuracy Improvement</div>
              <div className="text-xs text-blue-400">Current: {patternAccuracy}%</div>
            </div>

            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">147</div>
              <div className="text-sm text-slate-400 mb-1">New Scenarios</div>
              <div className="text-xs text-green-400">98.3% coverage</div>
            </div>

            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <div className="text-2xl font-bold text-white mb-1">{knowledgeBaseSize}</div>
              <div className="text-sm text-slate-400 mb-1">Knowledge Base</div>
              <div className="text-xs text-purple-400">12:1 compression</div>
            </div>
          </div>

          {/* Learning Visualization */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium text-white mb-3">Pattern Evolution Timeline</h4>
              <div className="h-48 bg-slate-700/30 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-600">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-400">Pattern evolution chart</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Timeline of learning progress and accuracy improvements
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-white mb-3">Knowledge Relationship Graph</h4>
              <div className="h-48 bg-slate-700/30 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-600">
                <div className="text-center">
                  <Network className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-400">Knowledge graph visualization</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Interactive visualization of knowledge relationships
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Learning Insights */}
          <div>
            <h4 className="font-medium text-white mb-3">Recent Learning Insights</h4>
            <div className="space-y-3">
              {recentLearnings.map((learning) => (
                <div key={learning.id} className="p-4 rounded-lg bg-slate-700/50 border border-slate-600">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {getLearningTypeIcon(learning.type)}
                      <div>
                        {getLearningTypeBadge(learning.type)}
                        <div className="text-xs text-slate-400 mt-1">
                          {formatTime(learning.timestamp)} • {learning.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">
                        {learning.confidence}%
                      </div>
                      <div className="text-xs text-slate-400">confidence</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-medium text-white mb-1">Pattern</div>
                    <p className="text-sm text-slate-300">{learning.pattern}</p>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-medium text-white mb-1">Impact</div>
                    <p className="text-sm text-green-400">{learning.impact}</p>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-white mb-1">Application</div>
                    <p className="text-sm text-slate-300">{learning.application}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    {learning.approved ? (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Approved
                      </Badge>
                    ) : (
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => approveLearning(learning.id)}
                        >
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </div>
                    )}
                    <div className="text-xs text-slate-400">
                      Confidence: {learning.confidence}%
                    </div>
                  </div>
                </div>
              ))}

              {recentLearnings.length === 0 && (
                <div className="text-center py-8">
                  <Brain className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No Recent Learnings</h3>
                  <p className="text-slate-400">AI is continuously learning from system behavior</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
