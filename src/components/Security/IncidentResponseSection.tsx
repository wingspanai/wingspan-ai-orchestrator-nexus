
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AlertTriangle, CheckCircle, Clock, User } from 'lucide-react';

export function IncidentResponseSection() {
  const incidents = [
    {
      id: 'INC-001',
      title: 'Suspicious Login Activity',
      severity: 'high',
      status: 'investigating',
      progress: 60,
      assignee: { name: 'Security Team', avatar: '/placeholder.svg' },
      reportedAt: new Date(Date.now() - 1000 * 60 * 120)
    },
    {
      id: 'INC-002', 
      title: 'Data Export Anomaly',
      severity: 'medium',
      status: 'resolved',
      progress: 100,
      assignee: { name: 'John Doe', avatar: '/placeholder.svg' },
      reportedAt: new Date(Date.now() - 1000 * 60 * 60 * 4)
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'escalated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Incident Response</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <span className="font-medium">1</span>
              <span className="text-muted-foreground ml-1">Active</span>
            </div>
            <div>
              <span className="font-medium">3</span>
              <span className="text-muted-foreground ml-1">Resolved Today</span>
            </div>
            <div>
              <span className="font-medium">2.3h</span>
              <span className="text-muted-foreground ml-1">Avg Response</span>
            </div>
          </div>
          <Button size="sm">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Report Incident
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {incidents.map((incident) => (
            <div key={incident.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-muted-foreground">{incident.id}</span>
                    <Badge className={getSeverityColor(incident.severity)}>
                      {incident.severity}
                    </Badge>
                    <Badge className={getStatusColor(incident.status)}>
                      {incident.status}
                    </Badge>
                  </div>
                  <h4 className="font-medium">{incident.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    Reported {incident.reportedAt.toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Response Progress</span>
                  <span className="font-medium">{incident.progress}%</span>
                </div>
                <Progress value={incident.progress} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={incident.assignee.avatar} />
                    <AvatarFallback>{incident.assignee.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">
                    Assigned to {incident.assignee.name}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  {incident.status !== 'resolved' && (
                    <Button size="sm" variant="outline">
                      Update Status
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {incidents.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <CheckCircle className="h-12 w-12 mx-auto mb-4" />
            <p>No active incidents</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
