
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useUnifiedIntelligenceStore } from '@/store/unifiedIntelligenceStore';
import { Network, ArrowRight } from 'lucide-react';

export function CrossFunctionalPanel() {
  const { insightSharing } = useUnifiedIntelligenceStore();

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Cross-Functional Intelligence Network</CardTitle>
          <CardDescription className="text-slate-400">
            Real-time visualization of inter-department data flows and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-slate-700/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-white">47</div>
              <div className="text-sm text-slate-400">Cross-Functional Projects</div>
              <div className="text-xs text-green-400">+12 this quarter</div>
            </div>
            <div className="p-4 bg-slate-700/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-white">8.7/10</div>
              <div className="text-sm text-slate-400">Data Sharing Index</div>
              <div className="text-xs text-green-400">+1.2 improved transparency</div>
            </div>
            <div className="p-4 bg-slate-700/50 rounded-lg text-center">
              <div className="text-2xl font-bold text-white">2.3 days</div>
              <div className="text-sm text-slate-400">Decision Velocity</div>
              <div className="text-xs text-green-400">-1.1 days faster</div>
            </div>
          </div>

          <div className="h-64 bg-slate-700/50 rounded-lg p-4 flex items-center justify-center mb-6">
            <div className="text-center">
              <Network className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <p className="text-slate-300">Interactive department network visualization</p>
              <p className="text-xs text-slate-400 mt-1">Shows real-time data flows and collaboration patterns</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Recent Insight Sharing</h4>
            <div className="space-y-3">
              {insightSharing.map((share) => (
                <div key={share.id} className="flex items-center gap-4 p-3 bg-slate-700/50 rounded-lg">
                  <div className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                    {share.from}
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <div className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                    {share.to}
                  </div>
                  <div className="flex-1 text-sm text-slate-300">
                    {share.insight}
                  </div>
                  <div className="text-xs text-slate-400">
                    {share.impact} Impact
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
