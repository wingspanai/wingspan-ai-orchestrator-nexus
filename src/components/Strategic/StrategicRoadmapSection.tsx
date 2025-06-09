
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Flag, GitBranch, Clock } from "lucide-react";

export const StrategicRoadmapSection = () => {
  const milestones = [
    {
      id: 1,
      name: "Q1 Product Launch",
      date: "2025-03-31",
      description: "Launch AI-powered analytics platform",
      status: "on-track",
      critical: true,
      daysRemaining: 45,
      initiatives: ["AI Analytics Platform", "User Experience Redesign"]
    },
    {
      id: 2,
      name: "European Market Entry",
      date: "2025-06-15",
      description: "Establish operations in 3 European markets",
      status: "planning",
      critical: false,
      daysRemaining: 120,
      initiatives: ["Global Expansion Initiative"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-green-100 text-green-800";
      case "planning":
        return "bg-blue-100 text-blue-800";
      case "at-risk":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Strategic Roadmap</CardTitle>
          <div className="flex items-center gap-2">
            <Select defaultValue="1year">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1year">1 Year</SelectItem>
                <SelectItem value="3year">3 Years</SelectItem>
                <SelectItem value="5year">5 Years</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Flag className="h-4 w-4 mr-2" />
              Milestones
            </Button>
            <Button variant="outline" size="sm">
              <GitBranch className="h-4 w-4 mr-2" />
              Dependencies
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Interactive roadmap visualization</p>
              <p className="text-sm text-muted-foreground">Timeline view of strategic initiatives and milestones</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Upcoming Milestones</h4>
            {milestones.map(milestone => (
              <div key={milestone.id} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="text-center min-w-[60px]">
                  <div className="text-lg font-bold">
                    {new Date(milestone.date).getDate()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(milestone.date).toLocaleDateString('en', { month: 'short' })}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h5 className="font-semibold">{milestone.name}</h5>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {milestone.initiatives.map(initiative => (
                          <Badge key={initiative} variant="outline" className="text-xs">
                            {initiative}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(milestone.status)}>
                        {milestone.status}
                      </Badge>
                      <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {milestone.daysRemaining} days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
