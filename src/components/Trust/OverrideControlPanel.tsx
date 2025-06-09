
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Octagon, X, Pause, Shield, AlertTriangle, DollarSign, Users, Database, Bell } from "lucide-react";

export function OverrideControlPanel() {
  const [automationPaused, setAutomationPaused] = useState(false);
  const [safeMode, setSafeMode] = useState(false);
  const [highAlert, setHighAlert] = useState(false);
  const [financialThreshold, setFinancialThreshold] = useState("10000");

  const recentOverrides = [
    {
      id: 1,
      type: "financial",
      title: "Payment Processing Paused",
      description: "Suspicious transaction pattern detected",
      user: { name: "Sarah Johnson", avatar: "/avatar1.jpg" },
      timestamp: new Date('2024-06-09T10:30:00'),
      impact: "high",
      affectedCount: 15
    },
    {
      id: 2,
      type: "communication",
      title: "Email Campaign Modified",
      description: "Content adjusted for tone compliance",
      user: { name: "Mike Chen", avatar: "/avatar2.jpg" },
      timestamp: new Date('2024-06-09T09:15:00'),
      impact: "medium",
      affectedCount: 3
    }
  ];

  const handleEmergencyStop = () => {
    // Emergency stop logic
    console.log("Emergency stop activated");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getOverrideIcon = (type: string) => {
    switch (type) {
      case 'financial': return <DollarSign className="h-4 w-4" />;
      case 'communication': return <Users className="h-4 w-4" />;
      case 'data': return <Database className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  const getImpactColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Emergency Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Emergency Stop */}
            <div className="lg:col-span-1">
              <Button 
                onClick={handleEmergencyStop}
                variant="destructive"
                size="lg"
                className="w-full h-20"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Octagon className="h-6 w-6 mr-2" />
                    <X className="h-4 w-4 absolute" />
                  </div>
                  <div className="text-sm font-semibold">Emergency Stop</div>
                  <div className="text-xs opacity-90">Halt all AI operations</div>
                </div>
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-3 grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Pause className="h-5 w-5 text-text-secondary" />
                      <div>
                        <div className="font-medium text-sm">Pause Automation</div>
                        <div className="text-xs text-text-secondary">Temporarily pause decisions</div>
                      </div>
                    </div>
                    <Switch 
                      checked={automationPaused}
                      onCheckedChange={setAutomationPaused}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-text-secondary" />
                      <div>
                        <div className="font-medium text-sm">Safe Mode</div>
                        <div className="text-xs text-text-secondary">Require approval for all actions</div>
                      </div>
                    </div>
                    <Switch 
                      checked={safeMode}
                      onCheckedChange={setSafeMode}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-text-secondary" />
                      <div>
                        <div className="font-medium text-sm">High Alert</div>
                        <div className="text-xs text-text-secondary">Enhanced monitoring</div>
                      </div>
                    </div>
                    <Switch 
                      checked={highAlert}
                      onCheckedChange={setHighAlert}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Global Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Financial Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="radio" name="financial" className="text-ai-primary" defaultChecked />
                <span className="text-sm">Require approval above threshold</span>
              </label>
              <div className="ml-6">
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={financialThreshold}
                  onChange={(e) => setFinancialThreshold(e.target.value)}
                  className="w-full"
                />
              </div>
              <label className="flex items-center space-x-2">
                <input type="radio" name="financial" className="text-ai-primary" />
                <span className="text-sm">Require approval for all transactions</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="financial" className="text-ai-primary" />
                <span className="text-sm">Allow automated decisions</span>
              </label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Communication Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Review customer-facing messages</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Approve template changes</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Monitor sentiment in real-time</span>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data Operations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Approve all data deletions</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Review bulk data updates</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Audit all data exports</span>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">High-impact decisions</span>
                <select className="text-sm border rounded px-2 py-1">
                  <option>Immediate alert</option>
                  <option>Daily digest</option>
                  <option>Weekly summary</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Anomaly detection</span>
                <select className="text-sm border rounded px-2 py-1">
                  <option>Immediate alert</option>
                  <option>Daily digest</option>
                  <option>Disabled</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Overrides */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Override Actions</CardTitle>
            <Button variant="outline" size="sm">
              View Full History →
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOverrides.map((override) => (
              <div key={override.id} className="flex items-center gap-4 p-3 rounded-lg border border-border/60">
                <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center">
                  {getOverrideIcon(override.type)}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-text-primary">{override.title}</div>
                  <div className="text-xs text-text-secondary">{override.description}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Avatar className="h-4 w-4">
                      <AvatarFallback className="text-xs">
                        {override.user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-text-secondary">{override.user.name}</span>
                    <span className="text-xs text-text-secondary">•</span>
                    <span className="text-xs text-text-secondary">{formatTime(override.timestamp)}</span>
                  </div>
                </div>
                <Badge className={`text-xs ${getImpactColor(override.impact)}`}>
                  {override.affectedCount} affected
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
