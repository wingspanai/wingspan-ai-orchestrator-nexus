
import { Shield, AlertTriangle, Search, Eye, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInfrastructureStore } from '@/store/infrastructureStore';

export function SecurityOperations() {
  const {
    securityAlerts,
    activeThreats,
    blockedAttacks,
    suspiciousActivities,
    vulnerabilitiesFound,
    currentThreatLevel,
    acknowledgeAlert
  } = useInfrastructureStore();

  const getThreatLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'intrusion': return <AlertTriangle className="w-4 h-4" />;
      case 'malware': return <Shield className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.floor((date.getTime() - Date.now()) / (1000 * 60)), 'minute'
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Security Operations</h2>
          <Badge className={getThreatLevelColor(currentThreatLevel)}>
            Threat Level: {currentThreatLevel}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          {activeThreats} active threats
        </div>
      </div>

      {/* Threat Monitoring Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Attacks Blocked Today
            </CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{blockedAttacks}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Suspicious Activities
            </CardTitle>
            <Eye className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{suspiciousActivities}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vulnerabilities Found
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{vulnerabilitiesFound}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Threats
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{activeThreats}</div>
          </CardContent>
        </Card>
      </div>

      {/* Security Alerts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Security Alerts</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline">All</Badge>
              <Badge variant="destructive">Critical</Badge>
              <Badge variant="outline">High</Badge>
              <Badge variant="outline">Medium</Badge>
              <Badge variant="outline">Low</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      {getAlertIcon(alert.type)}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium capitalize">{alert.type}</span>
                        <span className="text-sm text-muted-foreground">
                          {formatTime(alert.timestamp)}
                        </span>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>
                      <h4 className="font-medium">{alert.title}</h4>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-4 text-sm">
                          <span>Source IP: <span className="font-mono">{alert.sourceIP}</span></span>
                          <span>Attack Type: {alert.attackType}</span>
                          <span>Risk Score: <span className={`font-medium ${alert.riskScore >= 80 ? 'text-red-600' : alert.riskScore >= 50 ? 'text-orange-600' : 'text-yellow-600'}`}>{alert.riskScore}/100</span></span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Affected Systems:</span>
                          {alert.affectedSystems.map((system) => (
                            <Badge key={system.id} variant="outline" className="text-xs">
                              {system.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" onClick={() => {}}>
                      <Search className="w-4 h-4 mr-1" />
                      Investigate
                    </Button>
                    <Button size="sm" onClick={() => {}}>
                      <Shield className="w-4 h-4 mr-1" />
                      Block
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => acknowledgeAlert(alert.id)}>
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Threat Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Real-time Threat Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">World map with threat visualization would go here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
