
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  FileCheck, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Lock,
  Activity,
  Users,
  TrendingUp
} from 'lucide-react';

export function SecurityDashboardHeader() {
  const securityScore = 87;
  const activeAlerts = 3;
  const threatLevel = 2;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Security & Compliance Center</h1>
          <p className="text-muted-foreground">Real-time monitoring and audit management</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-medium">
              {activeAlerts} Active Alerts
            </span>
          </div>
          <Button>
            <Shield className="h-4 w-4 mr-2" />
            Run Security Scan
          </Button>
          <Button variant="outline">
            <FileCheck className="h-4 w-4 mr-2" />
            Compliance Report
          </Button>
        </div>
      </div>

      {/* Security Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Score */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-center">Security Score</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted-foreground/20"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - securityScore / 100)}`}
                  className="text-green-500 transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">{securityScore}</span>
                <span className="text-sm text-muted-foreground">Score</span>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-50 text-green-700">
              <Shield className="h-3 w-3 mr-1" />
              SOC 2 Certified
            </Badge>
          </CardContent>
        </Card>

        {/* Compliance Status */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Compliance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">GDPR</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-xs text-muted-foreground">Fully Compliant</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">HIPAA</span>
                </div>
                <Progress value={98} className="h-2" />
                <p className="text-xs text-muted-foreground">98% Compliant</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">ISO 27001</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground">In Progress</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">SOC 2</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-xs text-muted-foreground">Type II Certified</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Access Control</p>
                <p className="text-2xl font-bold">94/100</p>
              </div>
              <Lock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Data Protection</p>
                <p className="text-2xl font-bold">91/100</p>
              </div>
              <Shield className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">System Integrity</p>
                <p className="text-2xl font-bold">88/100</p>
              </div>
              <Activity className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Threats</p>
                <p className="text-2xl font-bold text-red-600">{activeAlerts}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
