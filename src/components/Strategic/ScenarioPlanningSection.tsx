
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, TrendingUp, BarChart } from "lucide-react";

export const ScenarioPlanningSection = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Scenario Planning</CardTitle>
          <div className="flex items-center gap-2">
            <Select defaultValue="baseline">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baseline">Baseline</SelectItem>
                <SelectItem value="optimistic">Optimistic Growth</SelectItem>
                <SelectItem value="conservative">Conservative</SelectItem>
                <SelectItem value="recession">Recession</SelectItem>
                <SelectItem value="custom">Custom Scenario</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Scenario
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <BarChart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Scenario Analysis</h3>
          <p className="text-muted-foreground mb-4">
            Model different market conditions and their impact on strategic objectives
          </p>
          <Button>
            <TrendingUp className="h-4 w-4 mr-2" />
            Run Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
