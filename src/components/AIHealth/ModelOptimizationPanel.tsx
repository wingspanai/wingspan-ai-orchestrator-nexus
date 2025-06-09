
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";

interface Optimization {
  id: number;
  type: string;
  impact: string;
  description: string;
  performanceGain: number;
  costReduction: number;
  implementationTime: string;
}

interface ModelOptimizationPanelProps {
  mockOptimizations: Optimization[];
}

export function ModelOptimizationPanel({ mockOptimizations }: ModelOptimizationPanelProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Model Optimization Recommendations</h3>
        <Button size="sm" variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>
      
      <div className="space-y-3">
        {mockOptimizations.map(optimization => (
          <Card key={optimization.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-sm">{optimization.type}</h4>
                    <Badge variant={
                      optimization.impact === 'High' ? 'default' : 
                      optimization.impact === 'Medium' ? 'secondary' : 'outline'
                    }>
                      {optimization.impact} Impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{optimization.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Performance Gain</div>
                      <div className="font-medium text-green-600">+{optimization.performanceGain}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Cost Reduction</div>
                      <div className="font-medium text-blue-600">-${optimization.costReduction}/mo</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Implementation</div>
                      <div className="font-medium">{optimization.implementationTime}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button size="sm">Apply</Button>
                  <Button size="sm" variant="ghost">Simulate</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
