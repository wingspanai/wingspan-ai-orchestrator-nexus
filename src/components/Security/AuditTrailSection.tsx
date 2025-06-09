
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Filter, 
  Download, 
  ChevronDown, 
  User, 
  Database, 
  Settings, 
  Shield,
  Clock,
  AlertTriangle
} from 'lucide-react';

export function AuditTrailSection() {
  const [expandedEvents, setExpandedEvents] = useState<string[]>([]);

  const auditEvents = [
    {
      id: '1',
      type: 'Access Event',
      description: 'User login from new device',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      user: { name: 'John Doe', avatar: '/placeholder.svg' },
      riskLevel: 'medium',
      ipAddress: '192.168.1.100',
      location: 'San Francisco, CA'
    },
    {
      id: '2',
      type: 'Data Change',
      description: 'Customer data updated',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      user: { name: 'Jane Smith', avatar: '/placeholder.svg' },
      riskLevel: 'low',
      ipAddress: '10.0.1.50',
      location: 'New York, NY'
    },
    {
      id: '3',
      type: 'Security Event',
      description: 'Failed login attempt detected',
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      user: null,
      riskLevel: 'high',
      ipAddress: '203.0.113.195',
      location: 'Unknown'
    }
  ];

  const toggleEventExpansion = (eventId: string) => {
    setExpandedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-50 border-red-200 text-red-700';
      case 'medium': return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'low': return 'bg-green-50 border-green-200 text-green-700';
      default: return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'Access Event': return <User className="h-4 w-4" />;
      case 'Data Change': return <Database className="h-4 w-4" />;
      case 'Security Event': return <Shield className="h-4 w-4" />;
      default: return <Settings className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Audit Trail</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          {auditEvents.length} events found
        </div>
        
        <div className="space-y-4">
          {auditEvents.map((event) => (
            <div key={event.id} className="border rounded-lg p-4 space-y-3">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleEventExpansion(event.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {getEventIcon(event.type)}
                    <span className="font-medium">{event.type}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {event.description}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  {event.user ? (
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={event.user.avatar} />
                        <AvatarFallback>{event.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{event.user.name}</span>
                    </div>
                  ) : (
                    <Badge variant="secondary">System</Badge>
                  )}
                  
                  <Badge className={getRiskColor(event.riskLevel)}>
                    {event.riskLevel} Risk
                  </Badge>
                  
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform ${
                      expandedEvents.includes(event.id) ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {event.timestamp.toLocaleString()}
                </div>
                <span>IP: {event.ipAddress}</span>
                <span>Location: {event.location}</span>
              </div>
              
              {expandedEvents.includes(event.id) && (
                <div className="border-t pt-3 space-y-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Event ID:</span>
                      <span className="ml-2">{event.id}</span>
                    </div>
                    <div>
                      <span className="font-medium">Session ID:</span>
                      <span className="ml-2">sess_{Math.random().toString(36).substr(2, 9)}</span>
                    </div>
                    <div>
                      <span className="font-medium">User Agent:</span>
                      <span className="ml-2 text-xs">Mozilla/5.0 (Windows NT 10.0; Win64; x64)</span>
                    </div>
                    <div>
                      <span className="font-medium">Risk Score:</span>
                      <span className="ml-2">{event.riskLevel === 'high' ? '85' : event.riskLevel === 'medium' ? '45' : '15'}/100</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      Investigate
                    </Button>
                    <Button size="sm" variant="outline">
                      Export Event
                    </Button>
                    <Button size="sm" variant="outline">
                      Find Related
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full">
          Load More Events
        </Button>
      </CardContent>
    </Card>
  );
}
