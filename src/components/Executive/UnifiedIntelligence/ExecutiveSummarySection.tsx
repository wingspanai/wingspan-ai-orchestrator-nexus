
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useUnifiedIntelligenceStore } from '@/store/unifiedIntelligenceStore';

export function ExecutiveSummarySection() {
  const { executiveMetrics } = useUnifiedIntelligenceStore();

  return (
    <div className="grid grid-cols-6 gap-4 p-6">
      {executiveMetrics.map((metric, index) => {
        const IconComponent = metric.icon;
        
        return (
          <Card key={metric.title} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <IconComponent className="w-4 h-4 text-blue-400" />
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                
                {metric.target && (
                  <div className="text-sm text-slate-400">
                    Target: {metric.target}
                  </div>
                )}
                
                {metric.achievement && (
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    {metric.achievement}
                  </Badge>
                )}
                
                {metric.benchmark && (
                  <div className="text-sm text-slate-400">
                    {metric.benchmark}
                  </div>
                )}
                
                {metric.savings && (
                  <div className="text-sm text-emerald-400">
                    Savings: {metric.savings}
                  </div>
                )}
                
                <div className="text-sm text-blue-400">{metric.trend}</div>
                
                <div className="text-xs text-slate-400 italic">
                  💡 {metric.aiInsight}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
