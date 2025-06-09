
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

interface AutoScalingPanelProps {
  mockScalingData: {
    autoScalingEnabled: boolean;
    scaleUpCpuThreshold: number;
    scaleUpQueueThreshold: number;
    scaleUpInstances: number;
    scaleDownCpuThreshold: number;
    scaleDownDuration: number;
    scaleDownInstances: number;
  };
}

export function AutoScalingPanel({ mockScalingData }: AutoScalingPanelProps) {
  return (
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
                <span className="text-sm">When CPU {'>'}</span>
                <Input
                  type="number"
                  value={mockScalingData.scaleUpCpuThreshold}
                  className="w-16 h-7 text-sm"
                  readOnly
                />
                <span className="text-sm">%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Or Queue {'>'}</span>
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
                <span className="text-sm">When CPU {'<'}</span>
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
  );
}
