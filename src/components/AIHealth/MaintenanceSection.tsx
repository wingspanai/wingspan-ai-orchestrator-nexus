
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Clock, RefreshCw } from "lucide-react";

export function MaintenanceSection() {
  const mockMaintenance = [
    {
      id: 1,
      name: "Model Version Update",
      description: "Update GPT-4 model to latest version with performance improvements",
      date: new Date(Date.now() + 86400000 * 2), // 2 days from now
      duration: 2,
      affectedSystems: ["GPT-4", "NLP Pipeline", "Chat Agents"]
    },
    {
      id: 2,
      name: "Infrastructure Scaling",
      description: "Upgrade GPU cluster to improve inference performance",
      date: new Date(Date.now() + 86400000 * 7), // 7 days from now
      duration: 4,
      affectedSystems: ["All Models", "Training Pipeline"]
    }
  ];

  const mockUpdates = [
    {
      id: 1,
      type: "Model Update",
      name: "Claude 3.5 Sonnet",
      version: "3.5.2",
      description: "Enhanced reasoning capabilities and reduced latency",
      size: 156,
      changelog: [
        "20% improvement in reasoning tasks",
        "15% reduction in response time",
        "Enhanced code generation capabilities"
      ]
    },
    {
      id: 2,
      type: "System Update",
      name: "AI Health Monitoring",
      version: "2.1.0",
      description: "Advanced diagnostics and auto-healing capabilities",
      size: 45,
      changelog: [
        "Auto-healing for common issues",
        "Enhanced anomaly detection",
        "Real-time performance optimization"
      ]
    }
  ];

  const formatDay = (date: Date) => {
    return date.getDate().toString();
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short' });
  };

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'Model Update': return '🤖';
      case 'System Update': return '⚙️';
      default: return '📦';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Maintenance & Updates</CardTitle>
          <div className="flex items-center space-x-2">
            <Switch />
            <span className="text-sm">Maintenance Mode</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Scheduled Maintenance */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Scheduled Maintenance</h3>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Schedule
            </Button>
          </div>
          
          <div className="space-y-3">
            {mockMaintenance.map(maintenance => (
              <Card key={maintenance.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold">{formatDay(maintenance.date)}</div>
                      <div className="text-sm text-muted-foreground">{formatMonth(maintenance.date)}</div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{maintenance.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{maintenance.description}</p>
                      <div className="flex items-center gap-2 mb-2">
                        {maintenance.affectedSystems.map(system => (
                          <Badge key={system} variant="outline" className="text-xs">
                            {system}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{maintenance.duration} hours</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="ghost">Cancel</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Updates */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Available Updates</h3>
            <Button size="sm" variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Check Updates
            </Button>
          </div>
          
          <div className="space-y-3">
            {mockUpdates.map(update => (
              <Card key={update.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{getUpdateIcon(update.type)}</span>
                        <Badge variant="outline">{update.type}</Badge>
                        <span className="text-sm font-medium">v{update.version}</span>
                      </div>
                      
                      <h4 className="font-semibold text-sm">{update.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{update.description}</p>
                      
                      <div className="space-y-1">
                        <h5 className="text-xs font-medium">What's New:</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {update.changelog.map((change, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span>•</span>
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm text-muted-foreground">{update.size}MB</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Schedule</Button>
                        <Button size="sm">Update Now</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
