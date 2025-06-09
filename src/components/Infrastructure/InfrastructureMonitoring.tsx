
import { useState } from 'react';
import { Map, Grid3x3, List, Eye, Settings, RefreshCw, Server, Database, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useInfrastructureStore } from '@/store/infrastructureStore';

export function InfrastructureMonitoring() {
  const [monitorView, setMonitorView] = useState<'map' | 'grid' | 'list'>('grid');
  const [refreshInterval, setRefreshInterval] = useState('10');
  
  const { infrastructureNodes } = useInfrastructureStore();

  const getUsageColor = (usage: number) => {
    if (usage >= 90) return 'bg-red-500';
    if (usage >= 75) return 'bg-orange-500';
    if (usage >= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'server': return <Server className="w-5 h-5" />;
      case 'database': return <Database className="w-5 h-5" />;
      default: return <Server className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Infrastructure Monitoring</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-lg p-1">
            <Button
              variant={monitorView === 'map' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setMonitorView('map')}
            >
              <Map className="w-4 h-4 mr-1" />
              Map
            </Button>
            <Button
              variant={monitorView === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setMonitorView('grid')}
            >
              <Grid3x3 className="w-4 h-4 mr-1" />
              Grid
            </Button>
            <Button
              variant={monitorView === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setMonitorView('list')}
            >
              <List className="w-4 h-4 mr-1" />
              List
            </Button>
          </div>
          <Select value={refreshInterval} onValueChange={setRefreshInterval}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 seconds</SelectItem>
              <SelectItem value="10">10 seconds</SelectItem>
              <SelectItem value="30">30 seconds</SelectItem>
              <SelectItem value="60">1 minute</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {monitorView === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructureNodes.map((resource) => (
            <Card key={resource.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      {getResourceIcon(resource.type)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <p className="text-sm text-muted-foreground capitalize">{resource.type}</p>
                      <p className="text-xs text-muted-foreground">{resource.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(resource.status)}`} />
                    <Badge variant={resource.status === 'healthy' ? 'default' : 'destructive'}>
                      {resource.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CPU</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getUsageColor(resource.cpu)}`}
                          style={{ width: `${resource.cpu}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{resource.cpu}%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Memory</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getUsageColor(resource.memory)}`}
                          style={{ width: `${resource.memory}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{resource.memory}%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Storage</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getUsageColor(resource.storage)}`}
                          style={{ width: `${resource.storage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{resource.storage}%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Network I/O</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-xs">
                        <ArrowUp className="w-3 h-3 text-green-500" />
                        {resource.networkOut} Mbps
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <ArrowDown className="w-3 h-3 text-blue-500" />
                        {resource.networkIn} Mbps
                      </div>
                    </div>
                  </div>
                </div>
                
                {resource.alerts.length > 0 && (
                  <div className="space-y-1">
                    {resource.alerts.map((alert) => (
                      <div key={alert.id} className={`px-2 py-1 rounded-md text-xs ${
                        alert.severity === 'critical' ? 'bg-red-100 text-red-800' :
                        alert.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                        alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {alert.message}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-2 pt-2">
                  <Button size="sm" variant="outline" onClick={() => {}}>
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => {}}>
                    <RefreshCw className="w-3 h-3 mr-1" />
                    Restart
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => {}}>
                    <Settings className="w-3 h-3 mr-1" />
                    Config
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {monitorView === 'map' && (
        <Card>
          <CardHeader>
            <CardTitle>Network Topology</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Network topology visualization would go here</p>
            </div>
          </CardContent>
        </Card>
      )}

      {monitorView === 'list' && (
        <Card>
          <CardHeader>
            <CardTitle>Infrastructure Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {infrastructureNodes.map((resource) => (
                <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-muted rounded-lg">
                      {getResourceIcon(resource.type)}
                    </div>
                    <div>
                      <h4 className="font-medium">{resource.name}</h4>
                      <p className="text-sm text-muted-foreground">{resource.type} • {resource.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm">CPU: {resource.cpu}%</p>
                      <p className="text-sm">Memory: {resource.memory}%</p>
                    </div>
                    <Badge variant={resource.status === 'healthy' ? 'default' : 'destructive'}>
                      {resource.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
