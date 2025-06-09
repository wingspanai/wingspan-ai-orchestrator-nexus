
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Filter, Briefcase, DollarSign, Users, Copy, Share2, MoreVertical, TrendingUp } from "lucide-react";

export const StrategicInitiativesSection = () => {
  const initiatives = [
    {
      id: 1,
      name: "AI-Powered Analytics Platform",
      priority: "High",
      status: "In Progress",
      progress: 75,
      pillar: { name: "Innovation", color: "#3B82F6" },
      budget: 2.5,
      budgetUtilization: 68,
      duration: 18,
      isDelayed: false,
      projectedROI: 340,
      lead: { name: "Alex Rivera", avatar: "/placeholder.svg" },
      team: [
        { id: 1, name: "John Doe", avatar: "/placeholder.svg" },
        { id: 2, name: "Jane Smith", avatar: "/placeholder.svg" },
        { id: 3, name: "Bob Wilson", avatar: "/placeholder.svg" }
      ],
      planningProgress: 100,
      executionProgress: 75,
      adoptionProgress: 45
    },
    {
      id: 2,
      name: "Global Expansion Initiative",
      priority: "Medium",
      status: "Planning",
      progress: 35,
      pillar: { name: "Growth", color: "#10B981" },
      budget: 4.2,
      budgetUtilization: 25,
      duration: 24,
      isDelayed: true,
      projectedROI: 280,
      lead: { name: "Maria Garcia", avatar: "/placeholder.svg" },
      team: [
        { id: 4, name: "Chris Lee", avatar: "/placeholder.svg" },
        { id: 5, name: "Emma Davis", avatar: "/placeholder.svg" }
      ],
      planningProgress: 80,
      executionProgress: 15,
      adoptionProgress: 0
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Strategic Initiatives</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Portfolio Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-blue-500" />
                  <div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-muted-foreground">Total Initiatives</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      8 Active • 2 Planning • 2 Completed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="text-2xl font-bold">$15.2M</div>
                    <div className="text-sm text-muted-foreground">Total Investment</div>
                    <div className="space-y-1 mt-2">
                      <Progress value={75} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        Allocated: $12.5M • Spent: $8.3M
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-500" />
                  <div>
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-sm text-muted-foreground">Resources Engaged</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Across 8 departments
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Initiatives List */}
          <div className="space-y-4">
            {initiatives.map(initiative => (
              <Card key={initiative.id} className="border-l-4" style={{ borderLeftColor: initiative.pillar.color }}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getPriorityColor(initiative.priority)}>
                            {initiative.priority}
                          </Badge>
                          <h4 className="font-semibold">{initiative.name}</h4>
                          <Badge 
                            variant="outline" 
                            style={{ color: initiative.pillar.color, borderColor: initiative.pillar.color }}
                          >
                            {initiative.pillar.name}
                          </Badge>
                        </div>
                      </div>
                      <Badge className={getStatusColor(initiative.status)}>
                        {initiative.status}
                      </Badge>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Overall Progress</span>
                        <span className="text-sm font-medium">{initiative.progress}%</span>
                      </div>
                      <div className="space-y-2">
                        <Progress value={initiative.progress} className="h-2" />
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <div className="flex items-center justify-between">
                              <span>Planning</span>
                              <span>{initiative.planningProgress}%</span>
                            </div>
                            <Progress value={initiative.planningProgress} className="h-1" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <span>Execution</span>
                              <span>{initiative.executionProgress}%</span>
                            </div>
                            <Progress value={initiative.executionProgress} className="h-1" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <span>Adoption</span>
                              <span>{initiative.adoptionProgress}%</span>
                            </div>
                            <Progress value={initiative.adoptionProgress} className="h-1" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Budget</div>
                        <div className="font-semibold">${initiative.budget}M</div>
                        <div className="text-xs text-muted-foreground">{initiative.budgetUtilization}% used</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Timeline</div>
                        <div className="font-semibold">{initiative.duration} months</div>
                        <div className={`text-xs ${initiative.isDelayed ? 'text-yellow-600' : 'text-green-600'}`}>
                          {initiative.isDelayed ? 'Delayed' : 'On Schedule'}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">ROI</div>
                        <div className="font-semibold">{initiative.projectedROI}%</div>
                        <div className="text-xs text-muted-foreground">Projected</div>
                      </div>
                    </div>

                    {/* Team */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Team</span>
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          View All →
                        </Button>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={initiative.lead.avatar} />
                            <AvatarFallback>{initiative.lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-medium">{initiative.lead.name}</div>
                            <div className="text-xs text-muted-foreground">Initiative Lead</div>
                          </div>
                        </div>
                        <div className="flex items-center -space-x-2">
                          {initiative.team.slice(0, 3).map(member => (
                            <Avatar key={member.id} className="h-6 w-6 border-2 border-background">
                              <AvatarImage src={member.avatar} />
                              <AvatarFallback className="text-xs">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                          ))}
                          {initiative.team.length > 3 && (
                            <div className="h-6 w-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                              +{initiative.team.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2">
                      <Button size="sm">View Details</Button>
                      <Button size="sm" variant="outline">Update</Button>
                      <Button size="sm" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
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
};
