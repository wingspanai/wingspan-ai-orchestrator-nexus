
import { useState } from 'react';
import { Plus, Eye, Clock, User, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useInfrastructureStore } from '@/store/infrastructureStore';

export function IncidentManagement() {
  const [sortBy, setSortBy] = useState('severity');
  
  const {
    incidents,
    activeIncidents,
    resolvedToday,
    meanTimeToResolve,
    resolveIncident,
    updateIncident
  } = useInfrastructureStore();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'investigating': return 'bg-yellow-100 text-yellow-800';
      case 'resolving': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Incident Management</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Badge variant="destructive">{activeIncidents} Active</Badge>
            <Badge variant="default">{resolvedToday} Resolved Today</Badge>
            <Badge variant="outline">MTTR: {meanTimeToResolve}min</Badge>
          </div>
          <Button onClick={() => {}}>
            <Plus className="w-4 h-4 mr-2" />
            Report Incident
          </Button>
        </div>
      </div>

      {/* Active Incidents */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Active Incidents</CardTitle>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="severity">Severity</SelectItem>
                <SelectItem value="age">Age</SelectItem>
                <SelectItem value="impact">Impact</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className={`border rounded-lg p-4 ${incident.severity === 'critical' ? 'border-red-200 bg-red-50' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-medium">INC-{incident.id}</span>
                      <span className={`text-sm ${incident.age > 60 ? 'text-orange-600 font-medium' : 'text-muted-foreground'}`}>
                        {formatDuration(incident.age)}
                      </span>
                      <Badge className={getSeverityColor(incident.severity)}>
                        {incident.severity} Priority
                      </Badge>
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-medium text-lg">{incident.title}</h4>
                    
                    {/* Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 text-sm">
                        <span>Impact:</span>
                        <Badge variant="outline" className={incident.affectedUsers > 100 ? 'border-orange-200 text-orange-800' : ''}>
                          {incident.affectedUsers} users affected
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <span>Services:</span>
                        {incident.affectedServices.map((service) => (
                          <Badge key={service.id} variant="outline" className={`text-xs ${service.status === 'degraded' ? 'border-yellow-200 text-yellow-800' : ''}`}>
                            {service.name}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <span>Assignee:</span>
                        <div className="flex items-center gap-2">
                          <Avatar className="w-5 h-5">
                            <AvatarImage src={incident.assignee.avatar} />
                            <AvatarFallback className="text-xs">
                              {incident.assignee.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span>{incident.assignee.name}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{incident.currentStep}</span>
                        <span className="text-muted-foreground">
                          Step {incident.currentStepNumber} of {incident.totalSteps}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full">
                        <div 
                          className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                          style={{ width: `${(incident.currentStepNumber / incident.totalSteps) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => {}}>
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => updateIncident(incident.id, { status: 'resolving' })}>
                      Update
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => {}}>
                      Escalate
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Incident Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Incident Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Timeline events would go here */}
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-px h-8 bg-border" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Incident Created</span>
                  <span className="text-muted-foreground">2 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground">Database Performance Degradation reported</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="w-3 h-3" />
                  <span>Alice Johnson</span>
                  <Clock className="w-3 h-3 ml-2" />
                  <span>Duration: Ongoing</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-px h-8 bg-border" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Investigation Started</span>
                  <span className="text-muted-foreground">1.5 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground">Root cause analysis in progress</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">Mitigation Applied</span>
                  <span className="text-muted-foreground">30 minutes ago</span>
                </div>
                <p className="text-sm text-muted-foreground">Database query optimization implemented</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
