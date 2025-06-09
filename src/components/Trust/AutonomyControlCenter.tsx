
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Pause, Play, FileText, Settings, History, Shield, Users, Database, Brain } from "lucide-react";

export function AutonomyControlCenter() {
  const [globalAutomationPaused, setGlobalAutomationPaused] = useState(false);

  const agents = [
    {
      id: 1,
      name: "Sales Assistant",
      category: "Customer Engagement",
      icon: Users,
      gradient: "from-blue-500 to-purple-500",
      autonomyLevel: 4,
      trustScore: 94,
      permissions: { read: true, write: true, execute: true, financial: false, others: 3 },
      accuracy: 96,
      decisionsCount: 342,
      paused: false
    },
    {
      id: 2,
      name: "Data Analyst",
      category: "Analytics",
      icon: Database,
      gradient: "from-green-500 to-teal-500",
      autonomyLevel: 3,
      trustScore: 89,
      permissions: { read: true, write: false, execute: true, financial: false, others: 2 },
      accuracy: 94,
      decisionsCount: 158,
      paused: false
    },
    {
      id: 3,
      name: "Content Creator",
      category: "Marketing",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      autonomyLevel: 2,
      trustScore: 91,
      permissions: { read: true, write: true, execute: false, financial: false, others: 1 },
      accuracy: 92,
      decisionsCount: 89,
      paused: false
    }
  ];

  const getAutonomyLabel = (level: number) => {
    const labels = {
      1: "Manual",
      2: "Assisted", 
      3: "Supervised",
      4: "Delegated",
      5: "Autonomous"
    };
    return labels[level as keyof typeof labels];
  };

  const getTrustColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Global Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>AI Autonomy Management</CardTitle>
              <p className="text-sm text-text-secondary mt-1">
                Control how much decision-making power each AI agent has based on performance and trust levels
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="destructive" 
                onClick={() => setGlobalAutomationPaused(!globalAutomationPaused)}
              >
                <Pause className="h-4 w-4 mr-2" />
                Pause All Automation
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Autonomy Policy
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Agents Grid */}
      <div className="space-y-4">
        {agents.map((agent) => (
          <Card key={agent.id}>
            <CardContent className="p-6">
              <div className="grid grid-cols-6 gap-6 items-center">
                {/* Agent Info */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${agent.gradient} flex items-center justify-center text-white`}>
                    <agent.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">{agent.name}</div>
                    <div className="text-sm text-text-secondary">{agent.category}</div>
                  </div>
                </div>

                {/* Autonomy Level */}
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`w-4 h-4 rounded ${
                          level <= agent.autonomyLevel 
                            ? 'bg-ai-primary' 
                            : 'bg-bg-secondary'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-text-secondary">
                    Level {agent.autonomyLevel}: {getAutonomyLabel(agent.autonomyLevel)}
                  </div>
                </div>

                {/* Trust Score */}
                <div className="text-center">
                  <div className={`text-2xl font-bold ${getTrustColor(agent.trustScore)}`}>
                    {agent.trustScore}%
                  </div>
                  <Progress value={agent.trustScore} className="mt-1 h-2" />
                </div>

                {/* Permissions */}
                <div className="space-y-1">
                  <Badge variant={agent.permissions.read ? "default" : "secondary"} className="text-xs">
                    Read Data
                  </Badge>
                  <Badge variant={agent.permissions.write ? "default" : "secondary"} className="text-xs">
                    Write Data
                  </Badge>
                  <Badge variant={agent.permissions.execute ? "default" : "secondary"} className="text-xs">
                    Execute
                  </Badge>
                  {agent.permissions.others > 0 && (
                    <Badge variant="outline" className="text-xs">
                      +{agent.permissions.others} more
                    </Badge>
                  )}
                </div>

                {/* Performance */}
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-text-secondary">Accuracy: </span>
                    <span className="font-medium">{agent.accuracy}%</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-text-secondary">Decisions: </span>
                    <span className="font-medium">{agent.decisionsCount}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <History className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    {agent.paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Autonomy Legend */}
      <Card>
        <CardHeader>
          <CardTitle>Autonomy Levels Explained</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {[
              { level: 1, name: "Manual", desc: "All actions require human approval" },
              { level: 2, name: "Assisted", desc: "AI suggests, human decides" },
              { level: 3, name: "Supervised", desc: "AI acts with notification" },
              { level: 4, name: "Delegated", desc: "AI acts independently, periodic review" },
              { level: 5, name: "Autonomous", desc: "Full automation with exception handling" }
            ].map((level) => (
              <div key={level.level} className="text-center">
                <div className="w-8 h-8 rounded-full bg-ai-primary text-white flex items-center justify-center font-bold text-sm mb-2 mx-auto">
                  {level.level}
                </div>
                <div className="font-medium text-sm text-text-primary">{level.name}</div>
                <div className="text-xs text-text-secondary mt-1">{level.desc}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
