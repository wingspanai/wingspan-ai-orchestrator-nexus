
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitBranch, Calendar, Grid3x3, Plus, CheckCircle, AlertCircle, ChevronDown, TrendingUp, AlertTriangle } from "lucide-react";

export const OKRManagementSection = () => {
  const [okrView, setOkrView] = useState("hierarchy");
  const [expandedObjectives, setExpandedObjectives] = useState([1]);

  const companyObjectives = [
    {
      id: 1,
      name: "Accelerate Product Innovation",
      progress: 78,
      status: "on-track",
      owner: { name: "Sarah Chen", avatar: "/placeholder.svg" },
      keyResults: [
        { id: 1, name: "Launch 3 new AI features", current: 2, target: 3, unit: "features", status: "on-track" },
        { id: 2, name: "Achieve 95% uptime", current: 97.2, target: 95, unit: "%", status: "achieved" },
        { id: 3, name: "Reduce time-to-market by 30%", current: 25, target: 30, unit: "%", status: "at-risk" }
      ],
      childObjectives: []
    },
    {
      id: 2,
      name: "Expand Market Reach",
      progress: 65,
      status: "at-risk",
      owner: { name: "Mike Johnson", avatar: "/placeholder.svg" },
      keyResults: [
        { id: 4, name: "Acquire 500 new enterprise customers", current: 320, target: 500, unit: "customers", status: "on-track" },
        { id: 5, name: "Enter 3 new geographic markets", current: 1, target: 3, unit: "markets", status: "behind" },
        { id: 6, name: "Achieve $50M ARR", current: 38, target: 50, unit: "M", status: "on-track" }
      ],
      childObjectives: []
    }
  ];

  const toggleKeyResults = (objectiveId: number) => {
    setExpandedObjectives(prev => 
      prev.includes(objectiveId) 
        ? prev.filter(id => id !== objectiveId)
        : [...prev, objectiveId]
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "on-track":
      case "achieved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "at-risk":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "behind":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-green-100 text-green-800";
      case "achieved":
        return "bg-green-100 text-green-800";
      case "at-risk":
        return "bg-yellow-100 text-yellow-800";
      case "behind":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Objectives & Key Results</CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-muted rounded-lg p-1">
              <Button
                variant={okrView === "hierarchy" ? "default" : "ghost"}
                size="sm"
                onClick={() => setOkrView("hierarchy")}
              >
                <GitBranch className="h-4 w-4 mr-2" />
                Hierarchy
              </Button>
              <Button
                variant={okrView === "timeline" ? "default" : "ghost"}
                size="sm"
                onClick={() => setOkrView("timeline")}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Timeline
              </Button>
              <Button
                variant={okrView === "board" ? "default" : "ghost"}
                size="sm"
                onClick={() => setOkrView("board")}
              >
                <Grid3x3 className="h-4 w-4 mr-2" />
                Board
              </Button>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Objective
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Company Objectives</h3>
            <Badge variant="outline">73% Complete</Badge>
          </div>

          <div className="space-y-6">
            {companyObjectives.map(objective => (
              <Card key={objective.id} className="border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      {getStatusIcon(objective.status)}
                      <div className="flex-1">
                        <h4 className="font-semibold">{objective.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={objective.owner.avatar} />
                            <AvatarFallback>{objective.owner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{objective.owner.name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{objective.progress}%</div>
                      <Progress value={objective.progress} className="w-16 h-2 mt-1" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium">Key Results</h5>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleKeyResults(objective.id)}
                      >
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform ${
                            expandedObjectives.includes(objective.id) ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </div>

                    {expandedObjectives.includes(objective.id) && (
                      <div className="space-y-3">
                        {objective.keyResults.map(kr => (
                          <div key={kr.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div className="flex-1">
                              <div className="font-medium text-sm">{kr.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {kr.current} / {kr.target} {kr.unit}
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Progress value={(kr.current / kr.target) * 100} className="w-20 h-2" />
                              <Badge className={getStatusColor(kr.status)}>
                                {kr.status}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-semibold">Top Performing</div>
                    <div className="text-sm text-muted-foreground">
                      Product Innovation exceeding targets by 15%
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <div>
                    <div className="font-semibold">Attention Needed</div>
                    <div className="text-sm text-muted-foreground">
                      2 objectives at risk of missing targets
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
