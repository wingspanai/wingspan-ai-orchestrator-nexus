
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Users, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Clock,
  RefreshCw,
  Play,
  Pause
} from 'lucide-react';

export function SecurityMonitorSection() {
  const totalAccessAttempts = 12847;
  const successfulAttempts = 12654;
  const failedAttempts = 193;
  const suspiciousAttempts = 5;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Real-time Security Monitor</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Pause className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Access Attempts */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Access Attempts (Last 24h)</h3>
            <Badge variant="secondary">Live</Badge>
          </div>
          
          <div className="text-3xl font-bold">{totalAccessAttempts.toLocaleString()}</div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">{successfulAttempts.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Successful</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-500" />
              <div>
                <p className="text-sm font-medium">{failedAttempts}</p>
                <p className="text-xs text-muted-foreground">Failed</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <div>
                <p className="text-sm font-medium text-amber-600">{suspiciousAttempts}</p>
                <p className="text-xs text-muted-foreground">Suspicious</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Encryption */}
        <div className="space-y-4">
          <h3 className="font-semibold">Data Encryption Status</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">At Rest</span>
              <div className="flex items-center gap-2">
                <Progress value={100} className="w-20 h-2" />
                <span className="text-sm font-medium">100%</span>
                <Badge variant="secondary" className="text-xs">AES-256</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">In Transit</span>
              <div className="flex items-center gap-2">
                <Progress value={100} className="w-20 h-2" />
                <span className="text-sm font-medium">100%</span>
                <Badge variant="secondary" className="text-xs">TLS 1.3</Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Key Rotation</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">Next in 15 days</span>
                <Badge variant="outline" className="text-xs">Automated</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-sm text-green-700">All data fully encrypted</span>
          </div>
        </div>

        {/* API Security */}
        <div className="space-y-4">
          <h3 className="font-semibold">API Security</h3>
          
          <div className="text-2xl font-bold">47,293</div>
          <p className="text-sm text-muted-foreground">Total API Calls Today</p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Authenticated</span>
              <span className="font-medium text-green-600">46,847</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Rate Limited</span>
              <span className="font-medium text-amber-600">324</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Blocked</span>
              <span className="font-medium text-red-600">122</span>
            </div>
          </div>
        </div>

        {suspiciousAttempts > 0 && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">
                Unusual access pattern detected
              </span>
            </div>
            <Button size="sm" className="mt-2">
              Investigate
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
