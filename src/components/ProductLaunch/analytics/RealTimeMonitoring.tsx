
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Activity, 
  Users, 
  Cpu, 
  Wifi, 
  Clock,
  Globe,
  AlertTriangle,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export function RealTimeMonitoring() {
  const [eventFilter, setEventFilter] = useState('all');
  const [isConnected, setIsConnected] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState(5);

  // Mock real-time data
  const revenuePerSecond = 2.45;
  const todayRevenue = 18.2;
  const hourlyAvgRevenue = 0.76;
  const peakRevenue = 4.8;

  const currentActiveUsers = 2847;
  const systemHealthScore = 94;
  const cpuUsage = 68;
  const memoryUsage = 72;
  const apiLatency = 245;
  const errorCount = 2;
  const errorThreshold = 5;

  const liveEvents = [
    {
      id: 1,
      type: 'conversion',
      timestamp: new Date(Date.now() - 30000),
      message: 'Enterprise plan subscription',
      value: 2400,
      location: 'San Francisco, CA'
    },
    {
      id: 2,
      type: 'milestone',
      timestamp: new Date(Date.now() - 120000),
      message: 'Reached 50,000 total users',
      location: 'Global'
    },
    {
      id: 3,
      type: 'conversion',
      timestamp: new Date(Date.now() - 180000),
      message: 'Professional plan upgrade',
      value: 149,
      location: 'London, UK'
    },
    {
      id: 4,
      type: 'error',
      timestamp: new Date(Date.now() - 240000),
      message: 'API timeout on payment processing',
      location: 'Server-East'
    },
    {
      id: 5,
      type: 'conversion',
      timestamp: new Date(Date.now() - 300000),
      message: 'New trial started',
      location: 'Tokyo, JP'
    }
  ];

  const userLocationData = [
    { country: 'United States', users: 1245, percentage: 44 },
    { country: 'United Kingdom', users: 456, percentage: 16 },
    { country: 'Germany', users: 312, percentage: 11 },
    { country: 'Japan', users: 234, percentage: 8 },
    { country: 'Other', users: 600, percentage: 21 }
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="space-y-6">
      {/* Live Metrics Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Real-Time Performance Monitor</h2>
            <p className="text-blue-100">Live system metrics and user activity</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-sm">{isConnected ? 'Live' : 'Disconnected'}</span>
            </div>
            <div className="text-sm">Updates every {refreshInterval}s</div>
          </div>
        </div>
      </div>

      {/* Live Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Revenue Stream */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Revenue Stream
              </CardTitle>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">${revenuePerSecond}/sec</div>
                <div className="text-xs text-muted-foreground">Current Rate</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Live Chart Placeholder */}
            <div className="h-32 bg-gradient-to-r from-green-50 to-green-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-green-600">
                <Activity className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Live Revenue Stream</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Today</div>
                <div className="font-bold">${todayRevenue}K</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Hourly Avg</div>
                <div className="font-bold">${hourlyAvgRevenue}K</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Peak</div>
                <div className="font-bold">${peakRevenue}/min</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Users */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Active Users
              </CardTitle>
              <div className="text-2xl font-bold text-blue-600">{currentActiveUsers.toLocaleString()}</div>
            </div>
          </CardHeader>
          <CardContent>
            {/* User Activity Chart */}
            <div className="h-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center text-blue-600">
                <Activity className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">Live User Activity</p>
              </div>
            </div>

            {/* Geographic Distribution */}
            <div>
              <h5 className="text-sm font-medium mb-2">Top Locations</h5>
              <div className="space-y-1">
                {userLocationData.slice(0, 3).map((location, index) => (
                  <div key={location.country} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-3 h-3 text-muted-foreground" />
                      <span>{location.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{location.users}</span>
                      <span className="text-muted-foreground">({location.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Performance */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-600" />
                System Performance
              </CardTitle>
              <Badge className={`${systemHealthScore > 90 ? 'bg-green-600' : systemHealthScore > 80 ? 'bg-yellow-600' : 'bg-red-600'} text-white`}>
                {systemHealthScore}/100
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {/* Performance Gauges */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <div className="w-16 h-16 rounded-full bg-muted"></div>
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
                    style={{ 
                      background: `conic-gradient(#3b82f6 ${cpuUsage * 3.6}deg, #e5e7eb 0deg)`,
                      borderImage: 'none'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold">{cpuUsage}%</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">CPU</div>
              </div>

              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <div className="w-16 h-16 rounded-full bg-muted"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold">{memoryUsage}%</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Memory</div>
              </div>

              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <div className="w-16 h-16 rounded-full bg-muted"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold">{apiLatency}ms</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">API Latency</div>
              </div>
            </div>

            {/* Error Rate */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-24 bg-muted rounded-full">
                  <div 
                    className={`h-2 rounded-full ${errorCount > errorThreshold ? 'bg-red-500' : 'bg-green-500'}`}
                    style={{ width: `${Math.min((errorCount / errorThreshold) * 100, 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm">{errorCount} errors/min</span>
              </div>
              {errorCount <= errorThreshold ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-red-600" />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Live Event Stream */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Live Event Feed
            </CardTitle>
            <Select value={eventFilter} onValueChange={setEventFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="conversions">Conversions</SelectItem>
                <SelectItem value="errors">Errors</SelectItem>
                <SelectItem value="milestones">Milestones</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {liveEvents
              .filter(event => eventFilter === 'all' || event.type === eventFilter)
              .map(event => (
                <div key={event.id} className={`flex items-center gap-4 p-3 rounded-lg border ${
                  event.type === 'conversion' ? 'border-green-200 bg-green-50' :
                  event.type === 'error' ? 'border-red-200 bg-red-50' :
                  event.type === 'milestone' ? 'border-blue-200 bg-blue-50' :
                  'border-gray-200 bg-gray-50'
                }`}>
                  <div className="text-xs text-muted-foreground w-16">
                    {formatTime(event.timestamp)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`text-xs ${
                        event.type === 'conversion' ? 'border-green-600 text-green-600' :
                        event.type === 'error' ? 'border-red-600 text-red-600' :
                        event.type === 'milestone' ? 'border-blue-600 text-blue-600' :
                        'border-gray-600 text-gray-600'
                      }`}>
                        {event.type}
                      </Badge>
                      <span className="text-sm">{event.message}</span>
                    </div>
                    {event.value && (
                      <div className="text-lg font-bold text-green-600 mt-1">${event.value.toLocaleString()}</div>
                    )}
                  </div>
                  
                  <div className="text-xs text-muted-foreground text-right">
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
