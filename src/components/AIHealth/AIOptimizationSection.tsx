
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Cpu, CheckCircle, Loader, RefreshCw, Sun, Grid3x3 } from "lucide-react";

export function AIOptimizationSection() {
  const mockOptimizations = [
    {
      id: 1,
      type: "Model Compression",
      impact: "High",
      description: "Reduce model size by 40% with minimal accuracy loss using quantization",
      performanceGain: 35,
      costReduction: 240,
      implementationTime: "2 hours"
    },
    {
      id: 2,
      type: "Cache Optimization",
      impact: "Medium",
      description: "Implement intelligent caching for frequently requested predictions",
      performanceGain: 22,
      costReduction: 120,
      implementationTime: "1 hour"
    }
  ];

  const mockScalingData = {
    autoScalingEnabled: true,
    scaleUpCpuThreshold: 75,
    scaleUpQueueThreshold: 50,
    scaleUpInstances: 2,
    scaleDownCpuThreshold: 30,
    scaleDownDuration: 10,
    scaleDownInstances: 1,
    optimizationRunning: false
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            <CardTitle>AI Optimization Center</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            {mockScalingData.optimizationRunning ? (
              <><Loader className="h-4 w-4 animate-spin" /> Optimizing...</>
            ) : (
              <><CheckCircle className="h-4 w-4 text-green-600" /> Optimized</>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Auto-Scaling Configuration */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Auto-Scaling Configuration</h3>
            <div className="flex items-center space-x-2">
              <Switch checked={mockScalingData.autoScalingEnabled} />
              <span className="text-sm">Enable Auto-Scaling</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Scale Up Rule */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">Scale Up Rule</h4>
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">When CPU ></span>
                    <Input
                      type="number"
                      value={mockScalingData.scaleUpCpuThreshold}
                      className="w-16 h-7 text-sm"
                      readOnly
                    />
                    <span className="text-sm">%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Or Queue ></span>
                    <Input
                      type="number"
                      value={mockScalingData.scaleUpQueueThreshold}
                      className="w-16 h-7 text-sm"
                      readOnly
                    />
                    <span className="text-sm">items</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Add</span>
                  <Input
                    type="number"
                    value={mockScalingData.scaleUpInstances}
                    className="w-16 h-7 text-sm"
                    readOnly
                  />
                  <span className="text-sm">instances</span>
                </div>
              </CardContent>
            </Card>

            {/* Scale Down Rule */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">Scale Down Rule</h4>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">When CPU <</span>
                    <Input
                      type="number"
                      value={mockScalingData.scaleDownCpuThreshold}
                      className="w-16 h-7 text-sm"
                      readOnly
                    />
                    <span className="text-sm">%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">For</span>
                    <Input
                      type="number"
                      value={mockScalingData.scaleDownDuration}
                      className="w-16 h-7 text-sm"
                      readOnly
                    />
                    <span className="text-sm">min</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Remove</span>
                  <Input
                    type="number"
                    value={mockScalingData.scaleDownInstances}
                    className="w-16 h-7 text-sm"
                    readOnly
                  />
                  <span className="text-sm">instances</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Scaling History */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-sm">Scaling History</h4>
              <span className="text-xs text-muted-foreground">24h</span>
            </div>
            <div className="h-24 bg-muted rounded flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Scaling events timeline</p>
            </div>
          </div>
        </div>

        {/* Model Optimization Recommendations */}
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

        {/* Load Balancing */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Load Balancing</h3>
            <select className="text-sm border rounded px-2 py-1">
              <option>Round Robin</option>
              <option>Least Connections</option>
              <option>Weighted</option>
              <option>AI Optimized</option>
            </select>
          </div>
          
          <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Grid3x3 className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Load distribution visualization</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
