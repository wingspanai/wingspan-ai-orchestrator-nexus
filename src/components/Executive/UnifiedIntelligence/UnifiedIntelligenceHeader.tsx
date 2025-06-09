
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useUnifiedIntelligenceStore } from '@/store/unifiedIntelligenceStore';
import { Activity, Bot, Brain, Circle } from 'lucide-react';

export function UnifiedIntelligenceHeader() {
  const { companyHealthScore, activeAgentsCount, insightsGenerated } = useUnifiedIntelligenceStore();

  return (
    <div className="p-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-slate-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Executive Intelligence Center</h1>
          <p className="text-slate-200">Unified Business Intelligence | 150+ AI Agents | Real-Time Insights</p>
        </div>
        
        <div className="flex items-center gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{companyHealthScore}</div>
                  <div className="text-xs text-slate-300">Company Health</div>
                  <Badge variant="outline" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">
                    +2.4%
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{activeAgentsCount}</div>
                  <div className="text-xs text-slate-300">Active Agents</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Circle className="w-2 h-2 fill-green-500 text-green-500" />
                    <span className="text-xs text-green-300">Online</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{insightsGenerated}</div>
                  <div className="text-xs text-slate-300">Insights Today</div>
                  <Badge variant="outline" className="text-xs bg-amber-500/20 text-amber-300 border-amber-500/30">
                    Live
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Llama 3.1 70B</div>
                  <div className="text-xs text-slate-300">AI Assistant</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Circle className="w-2 h-2 fill-purple-500 text-purple-500" />
                    <span className="text-xs text-purple-300">Ready</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
