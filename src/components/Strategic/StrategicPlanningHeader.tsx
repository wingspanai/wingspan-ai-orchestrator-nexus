
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Compass, Plus, Eye, Target, Edit, TrendingUp } from "lucide-react";

interface StrategicPlanningHeaderProps {
  planningPeriod: string;
  onPlanningPeriodChange: (period: string) => void;
}

export const StrategicPlanningHeader = ({
  planningPeriod,
  onPlanningPeriodChange
}: StrategicPlanningHeaderProps) => {
  const companyVision = "To be the leading AI-powered business intelligence platform that transforms how organizations make strategic decisions.";
  const companyMission = "Empowering businesses with intelligent insights and automated workflows to achieve sustainable growth.";
  const visionAlignment = 87;
  
  const strategicPillars = [
    { id: 1, name: "Innovation", icon: "🚀", progress: 78, color: "#3B82F6", initiativeCount: 12 },
    { id: 2, name: "Growth", icon: "📈", progress: 65, color: "#10B981", initiativeCount: 8 },
    { id: 3, name: "Excellence", icon: "⭐", progress: 92, color: "#F59E0B", initiativeCount: 15 },
    { id: 4, name: "Culture", icon: "👥", progress: 71, color: "#8B5CF6", initiativeCount: 6 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Strategic Planning</h1>
          <p className="text-muted-foreground">Align vision, strategy, and execution</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={planningPeriod} onValueChange={onPlanningPeriodChange}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="q1-2025">Q1 2025</SelectItem>
              <SelectItem value="q2-2025">Q2 2025</SelectItem>
              <SelectItem value="fy-2025">FY 2025</SelectItem>
              <SelectItem value="3-year">3-Year Plan</SelectItem>
              <SelectItem value="5-year">5-Year Vision</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Compass className="h-4 w-4 mr-2" />
            Framework
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Initiative
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Vision
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{companyVision}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Organization Alignment</span>
                <span>{visionAlignment}%</span>
              </div>
              <Progress value={visionAlignment} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4" />
              Mission
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{companyMission}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Active Initiatives</span>
                <p className="font-semibold">41</p>
              </div>
              <div>
                <span className="text-muted-foreground">Resource Allocation</span>
                <p className="font-semibold">89%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Strategic Pillars</CardTitle>
            <Button variant="ghost" size="sm">Manage</Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {strategicPillars.map(pillar => (
                <div key={pillar.id} className="text-center space-y-2">
                  <div className="text-2xl">{pillar.icon}</div>
                  <div className="text-xs font-medium">{pillar.name}</div>
                  <div className="relative">
                    <Progress value={pillar.progress} className="h-1" />
                    <span className="text-xs text-muted-foreground">{pillar.progress}%</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {pillar.initiativeCount} initiatives
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
