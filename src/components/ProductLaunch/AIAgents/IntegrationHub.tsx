
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Users, 
  BarChart, 
  Mail, 
  MessageSquare, 
  Cloud,
  Activity,
  Plus,
  Settings
} from 'lucide-react';

export function IntegrationHub() {
  const [integrations] = useState({
    active: 12,
    dataPointsProcessed: 2.4,
    uptime: 99.8
  });

  const [connectedSystems] = useState([
    {
      id: 'salesforce',
      name: 'Salesforce CRM',
      icon: <Users className="w-5 h-5" />,
      status: 'healthy',
      syncStatus: 'Real-time',
      dataFlows: {
        in: 'Customer data, Opportunities',
        out: 'Product updates, Launch info'
      },
      health: 98
    },
    {
      id: 'jira',
      name: 'Jira',
      icon: <BarChart className="w-5 h-5" />,
      status: 'healthy',
      syncStatus: 'Every 5 min',
      dataFlows: {
        in: 'Tasks, Sprints, Bugs',
        out: 'Launch milestones, Priorities'
      },
      health: 94
    },
    {
      id: 'analytics',
      name: 'Google Analytics',
      icon: <BarChart className="w-5 h-5" />,
      status: 'healthy',
      syncStatus: 'Real-time',
      dataFlows: {
        in: 'User behavior, Conversions',
        out: 'Campaign tags, Events'
      },
      health: 96
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      icon: <Mail className="w-5 h-5" />,
      status: 'healthy',
      syncStatus: 'Real-time',
      dataFlows: {
        in: 'Leads, Campaigns',
        out: 'Product data, Segments'
      },
      health: 99
    },
    {
      id: 'slack',
      name: 'Slack',
      icon: <MessageSquare className="w-5 h-5" />,
      status: 'healthy',
      syncStatus: 'Webhook',
      dataFlows: {
        in: 'Team updates',
        out: 'Alerts, Reports'
      },
      health: 97
    },
    {
      id: 'aws',
      name: 'AWS',
      icon: <Cloud className="w-5 h-5" />,
      status: 'healthy',
      syncStatus: 'Real-time',
      dataFlows: {
        in: 'System metrics',
        out: 'Scaling commands'
      },
      health: 100
    }
  ]);

  const [apiMetrics] = useState({
    requestVolume: 1247,
    latency: 45,
    errorRate: 0.3,
    volumeHistory: [1200, 1180, 1220, 1247, 1260, 1240, 1250],
    latencyHistory: [42, 38, 44, 45, 41, 43, 47],
    errorHistory: [0.2, 0.4, 0.1, 0.3, 0.5, 0.2, 0.3]
  });

  const getHealthColor = (health: number) => {
    if (health >= 95) return 'text-green-600';
    if (health >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Database className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">{integrations.active}</div>
                <div className="text-sm text-muted-foreground">Active Integrations</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">{integrations.dataPointsProcessed}M</div>
                <div className="text-sm text-muted-foreground">Data Points/Day</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Settings className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">{integrations.uptime}%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* System Architecture */}
        <Card>
          <CardHeader>
            <CardTitle>Integration Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Central Hub */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Connected Systems */}
              <div className="grid grid-cols-3 gap-4">
                {connectedSystems.slice(0, 6).map((system) => (
                  <div key={system.id} className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      {system.icon}
                    </div>
                    <div className="text-xs font-medium">{system.name}</div>
                    <div className={`text-xs ${getHealthColor(system.health)}`}>
                      {system.health}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* API Management */}
        <Card>
          <CardHeader>
            <CardTitle>API Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Request Volume</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{apiMetrics.requestVolume}/min</span>
                  <div className="w-16 h-4 bg-gray-100 rounded">
                    <div className="h-full bg-blue-600 rounded" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Average Latency</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{apiMetrics.latency}ms</span>
                  <div className="w-16 h-4 bg-gray-100 rounded">
                    <div className="h-full bg-green-600 rounded" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Error Rate</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-green-600">{apiMetrics.errorRate}%</span>
                  <div className="w-16 h-4 bg-gray-100 rounded">
                    <div className="h-full bg-red-600 rounded" style={{ width: '5%' }} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Connected Systems Detail */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Connected Systems</CardTitle>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Integration
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {connectedSystems.map((system) => (
              <Card key={system.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {system.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{system.name}</h3>
                        <Badge className={getStatusColor(system.status)}>
                          {system.syncStatus}
                        </Badge>
                      </div>
                    </div>
                    <div className={`text-lg font-semibold ${getHealthColor(system.health)}`}>
                      {system.health}%
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Data In: </span>
                      <span>{system.dataFlows.in}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Data Out: </span>
                      <span>{system.dataFlows.out}</span>
                    </div>
                  </div>

                  <Progress value={system.health} className="mt-3" />

                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline">Configure</Button>
                    <Button size="sm" variant="outline">Test</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
