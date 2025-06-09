
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Settings, 
  Mail, 
  MessageSquare, 
  Bell, 
  Smartphone,
  Plus,
  X,
  Clock,
  CheckCircle,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';

export function NotificationSystem() {
  const [notificationChannels, setNotificationChannels] = useState([
    {
      id: 'email',
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      enabled: true,
      notificationTypes: [
        { id: 'launch-updates', name: 'Launch Updates', enabled: true, priority: 'high' },
        { id: 'milestone-alerts', name: 'Milestone Alerts', enabled: true, priority: 'medium' },
        { id: 'team-updates', name: 'Team Updates', enabled: false, priority: 'low' }
      ],
      quietHoursStart: '22:00',
      quietHoursEnd: '08:00',
      batchEnabled: true,
      batchFrequency: 'daily'
    },
    {
      id: 'slack',
      name: 'Slack',
      icon: <MessageSquare className="w-5 h-5" />,
      enabled: true,
      notificationTypes: [
        { id: 'urgent-alerts', name: 'Urgent Alerts', enabled: true, priority: 'critical' },
        { id: 'daily-digest', name: 'Daily Digest', enabled: true, priority: 'low' }
      ],
      quietHoursStart: '19:00',
      quietHoursEnd: '09:00',
      batchEnabled: false,
      batchFrequency: 'hourly'
    },
    {
      id: 'push',
      name: 'Push Notifications',
      icon: <Smartphone className="w-5 h-5" />,
      enabled: false,
      notificationTypes: [
        { id: 'critical-only', name: 'Critical Only', enabled: true, priority: 'critical' }
      ],
      quietHoursStart: '21:00',
      quietHoursEnd: '08:00',
      batchEnabled: false,
      batchFrequency: 'hourly'
    }
  ]);

  const [alertRules, setAlertRules] = useState([
    {
      id: 'budget-threshold',
      name: 'Budget Threshold Alert',
      enabled: true,
      conditions: [
        { id: 1, metric: 'Budget spent', operator: '>', value: '80%' }
      ],
      actions: [
        { id: 1, type: 'Email', target: 'Project Manager' },
        { id: 2, type: 'Slack', target: '#finance-alerts' }
      ],
      triggerCount: 3,
      lastTriggered: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: 'milestone-delay',
      name: 'Milestone Delay Detection',
      enabled: true,
      conditions: [
        { id: 1, metric: 'Days behind schedule', operator: '>', value: '3' }
      ],
      actions: [
        { id: 1, type: 'Email', target: 'Team Leads' },
        { id: 2, type: 'Escalation', target: 'Executive Team' }
      ],
      triggerCount: 1,
      lastTriggered: new Date(Date.now() - 24 * 60 * 60 * 1000)
    }
  ]);

  const [notificationHistory] = useState([
    {
      id: 1,
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      type: 'Milestone Alert',
      message: 'Development milestone "API Integration" completed',
      recipients: ['john@company.com', 'sarah@company.com'],
      status: 'delivered'
    },
    {
      id: 2,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: 'Budget Alert',
      message: 'Marketing budget has reached 85% utilization',
      recipients: ['finance@company.com'],
      status: 'delivered'
    },
    {
      id: 3,
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      type: 'Team Update',
      message: 'New team member joined the project',
      recipients: ['team@company.com'],
      status: 'failed'
    }
  ]);

  const toggleChannel = (channelId: string) => {
    setNotificationChannels(channels =>
      channels.map(channel =>
        channel.id === channelId 
          ? { ...channel, enabled: !channel.enabled }
          : channel
      )
    );
  };

  const toggleNotificationType = (channelId: string, typeId: string) => {
    setNotificationChannels(channels =>
      channels.map(channel =>
        channel.id === channelId
          ? {
              ...channel,
              notificationTypes: channel.notificationTypes.map(type =>
                type.id === typeId ? { ...type, enabled: !type.enabled } : type
              )
            }
          : channel
      )
    );
  };

  const toggleRule = (ruleId: string) => {
    setAlertRules(rules =>
      rules.map(rule =>
        rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
      )
    );
  };

  const formatTime = (date: Date) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.floor((date.getTime() - Date.now()) / (1000 * 60 * 60)),
      'hour'
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Intelligent Notification Management</h2>
          <p className="text-muted-foreground">Configure smart alerts and communication channels</p>
        </div>
        <Button>
          <Settings className="w-4 h-4 mr-2" />
          Preferences
        </Button>
      </div>

      {/* Notification Channels */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Channels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {notificationChannels.map((channel) => (
              <Card key={channel.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {channel.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{channel.name}</h3>
                        <Badge variant={channel.enabled ? 'default' : 'secondary'}>
                          {channel.enabled ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                    </div>
                    <Switch
                      checked={channel.enabled}
                      onCheckedChange={() => toggleChannel(channel.id)}
                    />
                  </div>

                  {channel.enabled && (
                    <div className="space-y-4">
                      {/* Notification Types */}
                      <div>
                        <h4 className="font-medium mb-2">Notification Types</h4>
                        <div className="space-y-2">
                          {channel.notificationTypes.map((type) => (
                            <div key={type.id} className="flex items-center justify-between p-2 border rounded">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  checked={type.enabled}
                                  onCheckedChange={() => toggleNotificationType(channel.id, type.id)}
                                />
                                <span className="text-sm">{type.name}</span>
                              </div>
                              <Select value={type.priority} onValueChange={() => {}}>
                                <SelectTrigger className="w-20">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="low">Low</SelectItem>
                                  <SelectItem value="medium">Medium</SelectItem>
                                  <SelectItem value="high">High</SelectItem>
                                  <SelectItem value="critical">Critical</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Delivery Settings */}
                      <div>
                        <h4 className="font-medium mb-2">Delivery Settings</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Quiet Hours</Label>
                            <div className="flex gap-2 mt-1">
                              <Input 
                                type="time" 
                                value={channel.quietHoursStart}
                                className="text-sm"
                              />
                              <span className="self-center text-sm">to</span>
                              <Input 
                                type="time" 
                                value={channel.quietHoursEnd}
                                className="text-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <Label>Batch Notifications</Label>
                              <Switch checked={channel.batchEnabled} />
                            </div>
                            {channel.batchEnabled && (
                              <Select value={channel.batchFrequency} onValueChange={() => {}}>
                                <SelectTrigger className="mt-1">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="hourly">Hourly</SelectItem>
                                  <SelectItem value="daily">Daily</SelectItem>
                                  <SelectItem value="weekly">Weekly</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alert Rules */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Smart Alert Rules</CardTitle>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Rule
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alertRules.map((rule) => (
              <Card key={rule.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{rule.name}</h3>
                    <Switch
                      checked={rule.enabled}
                      onCheckedChange={() => toggleRule(rule.id)}
                    />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Trigger When:</h4>
                      {rule.conditions.map((condition) => (
                        <div key={condition.id} className="flex items-center gap-2 text-sm">
                          <Badge variant="outline">{condition.metric}</Badge>
                          <span>{condition.operator}</span>
                          <Badge>{condition.value}</Badge>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Actions:</h4>
                      <div className="flex gap-2">
                        {rule.actions.map((action) => (
                          <Badge key={action.id} variant="secondary">
                            {action.type}: {action.target}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Triggered {rule.triggerCount} times</span>
                      <span>Last: {formatTime(rule.lastTriggered)}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">Test</Button>
                      <Button size="sm" variant="outline">Delete</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notification History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Notification History</CardTitle>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="alerts">Alerts</SelectItem>
                  <SelectItem value="updates">Updates</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-status">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notificationHistory.map((notification) => (
              <div key={notification.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground">
                      {formatTime(notification.timestamp)}
                    </span>
                    <Badge variant="outline">{notification.type}</Badge>
                  </div>
                  <p className="text-sm">{notification.message}</p>
                  <div className="flex gap-1 mt-1">
                    {notification.recipients.map((recipient, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {recipient}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(notification.status)}>
                    {notification.status}
                  </Badge>
                  {notification.status === 'failed' && (
                    <Button size="sm" variant="outline">
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Retry
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
