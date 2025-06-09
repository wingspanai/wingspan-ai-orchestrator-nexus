
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  AlertCircle, 
  Clock, 
  Users, 
  ArrowUp,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import { useDevelopmentStore, BlockerSeverity } from '@/store/developmentStore';
import { formatDistanceToNow } from 'date-fns';

export function BlockerManagement() {
  const { 
    blockers, 
    activeBlockers, 
    resolveBlocker,
    addBlocker 
  } = useDevelopmentStore();

  const getSeverityColor = (severity: BlockerSeverity) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: BlockerSeverity) => {
    switch (severity) {
      case 'critical': return <XCircle className="w-4 h-4" />;
      case 'high': return <AlertCircle className="w-4 h-4" />;
      case 'medium': return <AlertTriangle className="w-4 h-4" />;
      case 'low': return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const resolvedToday = 2;
  const avgResolutionTime = '1.5 days';

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Blocker Resolution Center</CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="font-medium">Active:</span>
              <Badge variant={activeBlockers > 5 ? 'destructive' : 'secondary'}>
                {activeBlockers}
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">Resolved Today:</span>
              <span>{resolvedToday}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">Avg Resolution:</span>
              <span>{avgResolutionTime}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {blockers.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
            <h3 className="font-medium mb-1">No Active Blockers</h3>
            <p className="text-sm">Great! Your team is running smoothly.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {blockers.map((blocker) => (
              <Card key={blocker.id} className={`border-l-4 ${getSeverityBorderColor(blocker.severity)}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getSeverityIcon(blocker.severity)}
                        <h4 className="font-medium">{blocker.title}</h4>
                        <Badge className={getSeverityColor(blocker.severity)}>
                          {blocker.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {blocker.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Reported by {blocker.reporter}</span>
                        <span>{blocker.duration} days blocking</span>
                        <span>{formatDistanceToNow(blocker.createdAt, { addSuffix: true })}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Affected Items:</div>
                    <div className="flex flex-wrap gap-1">
                      {blocker.affectedItems.map((item) => (
                        <Badge key={item.id} variant="outline" className="text-xs">
                          {item.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {blocker.assignee ? (
                        <>
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={blocker.assignee.avatar} />
                            <AvatarFallback className="text-xs">
                              {blocker.assignee.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{blocker.assignee.name}</span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-500">Unassigned</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <ArrowUp className="w-3 h-3 mr-1" />
                        Escalate
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => resolveBlocker(blocker.id)}
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Resolve
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* AI Blocker Resolution Suggestions */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h4 className="font-medium text-blue-900 mb-3">AI Resolution Suggestions</h4>
            <div className="space-y-2">
              <div className="p-3 bg-white rounded border">
                <p className="text-sm text-gray-700 mb-2">
                  For the API rate limiting issue: Consider implementing request queuing 
                  with exponential backoff to reduce failed requests by 85%.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-600 font-medium">
                    92% success probability
                  </span>
                  <Button size="sm" variant="outline">
                    Apply Solution
                  </Button>
                </div>
              </div>
              
              <div className="p-3 bg-white rounded border">
                <p className="text-sm text-gray-700 mb-2">
                  Design inconsistencies can be resolved by updating the component 
                  library with standardized button variants.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-green-600 font-medium">
                    87% success probability
                  </span>
                  <Button size="sm" variant="outline">
                    Apply Solution
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button className="w-full" variant="outline">
          <AlertCircle className="w-4 h-4 mr-2" />
          Report New Blocker
        </Button>
      </CardContent>
    </Card>
  );
}

function getSeverityBorderColor(severity: BlockerSeverity) {
  switch (severity) {
    case 'critical': return 'border-l-red-500';
    case 'high': return 'border-l-orange-500';
    case 'medium': return 'border-l-yellow-500';
    case 'low': return 'border-l-blue-500';
    default: return 'border-l-gray-500';
  }
}
