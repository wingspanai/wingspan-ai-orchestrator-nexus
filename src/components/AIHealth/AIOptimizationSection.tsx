
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, CheckCircle, Loader } from "lucide-react";
import { AutoScalingPanel } from "./AutoScalingPanel";
import { ModelOptimizationPanel } from "./ModelOptimizationPanel";
import { LoadBalancingPanel } from "./LoadBalancingPanel";

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
              <>
                <Loader className="h-4 w-4 animate-spin" /> Optimizing...
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4 text-green-600" /> Optimized
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <AutoScalingPanel mockScalingData={mockScalingData} />
        <ModelOptimizationPanel mockOptimizations={mockOptimizations} />
        <LoadBalancingPanel />
      </CardContent>
    </Card>
  );
}
