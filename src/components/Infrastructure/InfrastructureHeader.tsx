
import { Activity, AlertCircle, Shield, Server, Cloud, Database, HardDrive, Cpu, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInfrastructureStore } from '@/store/infrastructureStore';

export function InfrastructureHeader() {
  const {
    overallSystemHealth,
    serverHealth,
    cloudHealth,
    networkHealth,
    databaseHealth,
    uptimePercentage,
    totalUptime,
    avgCpuUtilization,
    storageUsed,
    totalStorage,
    storagePercentage,
    avgResponseTime,
    targetResponseTime,
    activeIncidents,
    criticalIncidents,
    highIncidents,
    mediumIncidents
  } = useInfrastructureStore();

  const getHealthStatus = (health: number) => {
    if (health >= 95) return 'Excellent';
    if (health >= 85) return 'Good';
    if (health >= 70) return 'Fair';
    if (health >= 50) return 'Degraded';
    return 'Critical';
  };

  const getHealthColor = (health: number) => {
    if (health >= 95) return 'text-green-600';
    if (health >= 85) return 'text-green-500';
    if (health >= 70) return 'text-yellow-500';
    if (health >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">IT & Infrastructure</h1>
          <p className="text-muted-foreground mt-2">Monitor, manage, and optimize technology operations</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${overallSystemHealth >= 90 ? 'bg-green-500' : overallSystemHealth >= 70 ? 'bg-yellow-500' : 'bg-red-500'} ${overallSystemHealth < 90 ? 'animate-pulse' : ''}`} />
            <span className={`text-sm font-medium ${getHealthColor(overallSystemHealth)}`}>
              System {getHealthStatus(overallSystemHealth)}
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            {uptimePercentage}% Uptime ({totalUptime})
          </div>
          <Button onClick={() => {}}>
            <Activity className="w-4 h-4 mr-2" />
            Health Check
          </Button>
          <Button variant={activeIncidents > 0 ? "destructive" : "default"} onClick={() => {}}>
            <AlertCircle className="w-4 h-4 mr-2" />
            Incidents ({activeIncidents})
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Health Gauge */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={overallSystemHealth >= 90 ? '#10B981' : overallSystemHealth >= 70 ? '#F59E0B' : '#EF4444'}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${overallSystemHealth * 2.51}, 251`}
                    className="transition-all duration-500"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{overallSystemHealth}%</div>
                    <div className="text-xs text-muted-foreground">Health</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  <span className="text-sm">Servers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-green-500 rounded-full transition-all duration-300" 
                      style={{ width: `${serverHealth}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{serverHealth}%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  <span className="text-sm">Cloud Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-500 rounded-full transition-all duration-300" 
                      style={{ width: `${cloudHealth}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{cloudHealth}%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span className="text-sm">Databases</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-purple-500 rounded-full transition-all duration-300" 
                      style={{ width: `${databaseHealth}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{databaseHealth}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Critical Metrics */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">
                CPU Utilization
              </CardTitle>
              <Cpu className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                {avgCpuUtilization}%
              </div>
              <div className="w-full h-1 bg-purple-200 rounded-full mt-2">
                <div 
                  className="h-1 bg-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${avgCpuUtilization}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Storage Used
              </CardTitle>
              <HardDrive className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                {storageUsed}/{totalStorage}TB
              </div>
              <div className="w-full h-1 bg-blue-200 rounded-full mt-2">
                <div 
                  className="h-1 bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${storagePercentage}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
                Avg Response Time
              </CardTitle>
              <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800 dark:text-green-200">
                {avgResponseTime}ms
              </div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                Target: &lt;{targetResponseTime}ms
              </div>
            </CardContent>
          </Card>

          <Card className={`bg-gradient-to-br ${activeIncidents > 0 ? 'from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border-red-200 dark:border-red-800' : 'from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 border-amber-200 dark:border-amber-800'}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className={`text-sm font-medium ${activeIncidents > 0 ? 'text-red-700 dark:text-red-300' : 'text-amber-700 dark:text-amber-300'}`}>
                Active Incidents
              </CardTitle>
              <AlertCircle className={`h-4 w-4 ${activeIncidents > 0 ? 'text-red-600 dark:text-red-400' : 'text-amber-600 dark:text-amber-400'}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${activeIncidents > 0 ? 'text-red-800 dark:text-red-200' : 'text-amber-800 dark:text-amber-200'}`}>
                {activeIncidents}
              </div>
              <div className="space-y-1 mt-2">
                <div className={`text-xs ${activeIncidents > 0 ? 'text-red-600 dark:text-red-400' : 'text-amber-600 dark:text-amber-400'}`}>
                  {criticalIncidents} critical
                </div>
                <div className={`text-xs ${activeIncidents > 0 ? 'text-red-600 dark:text-red-400' : 'text-amber-600 dark:text-amber-400'}`}>
                  {highIncidents} high priority
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
