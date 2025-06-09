
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useResilienceStore } from '@/store/resilienceStore';
import { Activity, CheckCircle, AlertTriangle, Zap, Eye } from 'lucide-react';

interface EMTActivityFeedProps {
  className?: string;
}

export function EMTActivityFeed({ className }: EMTActivityFeedProps) {
  const { emtActivities } = useResilienceStore();

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'healing':
        return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'prevention':
        return <Zap className="w-4 h-4 text-blue-400" />;
      case 'learning':
        return <Eye className="w-4 h-4 text-purple-400" />;
      case 'monitoring':
        return <Activity className="w-4 h-4 text-yellow-400" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/50">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">In Progress</Badge>;
      case 'failed':
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/50">Failed</Badge>;
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
    <Card className={`bg-slate-800/50 border-slate-700 ${className}`}>
      <CardHeader className="pb-4">
        <CardTitle className="text-white flex items-center gap-2">
          <Activity className="w-5 h-5" />
          EMT Agent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {emtActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
              <div className="mt-0.5">
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-blue-400 text-sm">
                    {activity.agent}
                  </span>
                  <span className="text-slate-400 text-xs">
                    {formatTime(activity.timestamp)}
                  </span>
                </div>
                
                <p className="text-white text-sm font-medium mb-1">
                  {activity.action}
                </p>
                
                <p className="text-slate-300 text-xs mb-2">
                  System: {activity.system}
                </p>
                
                <p className="text-slate-400 text-xs mb-2">
                  {activity.impact}
                </p>
                
                <div className="flex items-center justify-between">
                  {getStatusBadge(activity.status)}
                  <span className="text-slate-500 text-xs capitalize">
                    {activity.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {emtActivities.length === 0 && (
          <div className="text-center py-8">
            <Activity className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-slate-400">No recent EMT activity</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
