
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useGeniusStore } from '@/store/geniusStore';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CheckCircle, AlertCircle, RefreshCw, Lightbulb } from 'lucide-react';

interface ExpertFrameworksPanelProps {
  detailed?: boolean;
}

export function ExpertFrameworksPanel({ detailed = false }: ExpertFrameworksPanelProps) {
  const { expertFrameworks } = useGeniusStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'optimizing': return <RefreshCw className="h-4 w-4 text-blue-500" />;
      case 'inactive': return <AlertCircle className="h-4 w-4 text-red-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-100 border-green-500/50';
      case 'optimizing': return 'bg-blue-500/20 text-blue-100 border-blue-500/50';
      case 'inactive': return 'bg-red-500/20 text-red-100 border-red-500/50';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-500/50';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <Card className={`bg-slate-800/50 border-slate-700 ${detailed ? 'col-span-full' : ''}`}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Expert Knowledge Integration
          <Badge className="bg-purple-500/20 text-purple-100 border-purple-500/50">
            {expertFrameworks.filter(f => f.integrationStatus === 'active').length} Active Frameworks
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {expertFrameworks.map((framework, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
            <Avatar className="h-12 w-12 bg-gradient-to-br from-purple-500 to-blue-500">
              <AvatarFallback className="text-white font-semibold">
                {getInitials(framework.expert)}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{framework.expert}</div>
                  <div className="text-sm text-slate-400">{framework.framework}</div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(framework.integrationStatus)}
                  <Badge className={getStatusColor(framework.integrationStatus)}>
                    {framework.integrationStatus.charAt(0).toUpperCase() + framework.integrationStatus.slice(1)}
                  </Badge>
                </div>
              </div>
              
              {detailed && (
                <div className="space-y-2">
                  <div className="text-sm text-slate-300">{framework.businessApplication}</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Business Impact Score</span>
                    <span className="text-slate-400">{framework.contributionScore}%</span>
                  </div>
                  <Progress value={framework.contributionScore} className="h-2" />
                </div>
              )}
            </div>
            
            {!detailed && (
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-400">{framework.contributionScore}%</div>
                <div className="text-xs text-slate-400">Impact Score</div>
              </div>
            )}
          </div>
        ))}
        
        {detailed && (
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
            <div className="text-sm text-purple-100">
              <strong>Expert Framework Integration:</strong> These proven methodologies from industry leaders 
              provide the theoretical foundation for our 90%+ accuracy predictions. Each framework contributes 
              specialized knowledge that enhances specific aspects of business intelligence and decision-making.
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
