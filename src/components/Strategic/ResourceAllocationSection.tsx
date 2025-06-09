
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Cpu, DollarSign, Users, Briefcase } from "lucide-react";

export const ResourceAllocationSection = () => {
  const allocations = [
    { name: "Innovation", budget: 4.2, percentage: 35, color: "#3B82F6" },
    { name: "Growth", budget: 3.6, percentage: 30, color: "#10B981" },
    { name: "Excellence", budget: 2.4, percentage: 20, color: "#F59E0B" },
    { name: "Culture", budget: 1.8, percentage: 15, color: "#8B5CF6" }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Resource Allocation</CardTitle>
          <Button variant="outline" size="sm">
            <Cpu className="h-4 w-4 mr-2" />
            Optimize
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              <div>
                <div className="font-semibold">$12.0M</div>
                <div className="text-muted-foreground">Total Budget</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              <div>
                <div className="font-semibold">45</div>
                <div className="text-muted-foreground">Resources</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Allocation by Strategic Pillar</h4>
            {allocations.map(allocation => (
              <div key={allocation.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: allocation.color }}
                    />
                    <span>{allocation.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${allocation.budget}M</div>
                    <div className="text-muted-foreground">{allocation.percentage}%</div>
                  </div>
                </div>
                <Progress value={allocation.percentage} className="h-2" />
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
              <Briefcase className="h-5 w-5 text-blue-500" />
              <div className="text-sm">
                <div className="font-medium">AI Recommendation</div>
                <div className="text-muted-foreground">
                  Consider reallocating 5% from Excellence to Innovation for higher ROI
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
