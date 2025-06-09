
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Crosshair, Maximize, BarChart3, AlertTriangle, CheckCircle, Cpu, HardDrive, Database } from "lucide-react";

interface ModelPerformanceSectionProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
}

export function ModelPerformanceSection({ selectedModel, onModelChange }: ModelPerformanceSectionProps) {
  const mockData = {
    p50Latency: 150,
    p99Latency: 480,
    errorRate: 2.1,
    accuracy: 94.2,
    accuracyTrend: 1.3,
    precision: 91.8,
    recall: 89.5,
    f1Score: 0.906,
    driftDetected: false,
    gpuUtilization: 73,
    gpuAllocated: 4,
    gpuTotal: 6,
    memoryUsed: 12.4,
    memoryTotal: 16,
    memoryUtilization: 78,
    cacheUtilization: 89,
    cacheHitRate: 94,
    computeCost: 1247,
    storageCost: 156,
    networkCost: 89,
    costPerThousand: 0.23
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Model Performance Analytics</CardTitle>
          <Select value={selectedModel} onValueChange={onModelChange}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Models</SelectItem>
              <SelectItem value="gpt-4">GPT-4 (LLM)</SelectItem>
              <SelectItem value="claude">Claude (LLM)</SelectItem>
              <SelectItem value="custom-nlp">Custom NLP</SelectItem>
              <SelectItem value="recommendation">Recommendation Engine</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inference Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Inference Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Performance Chart</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-muted-foreground">P50 Latency</div>
                  <div className="font-semibold">{mockData.p50Latency}ms</div>
                </div>
                <div className="text-center">
                  <div className="text-muted-foreground">P99 Latency</div>
                  <div className={`font-semibold ${mockData.p99Latency > 500 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {mockData.p99Latency}ms
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-muted-foreground">Error Rate</div>
                  <div className={`font-semibold ${mockData.errorRate > 5 ? 'text-red-600' : 'text-green-600'}`}>
                    {mockData.errorRate}%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accuracy Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Model Accuracy Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h6 className="font-medium text-sm">Classification Metrics</h6>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    <div className="text-sm">
                      <div className="font-medium">Accuracy</div>
                      <div className="text-green-600 font-semibold">{mockData.accuracy}%</div>
                      <div className="text-xs text-green-600">↑ {mockData.accuracyTrend}%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Crosshair className="h-4 w-4 text-purple-600" />
                    <div className="text-sm">
                      <div className="font-medium">Precision</div>
                      <div className="font-semibold">{mockData.precision}%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Maximize className="h-4 w-4 text-green-600" />
                    <div className="text-sm">
                      <div className="font-medium">Recall</div>
                      <div className="font-semibold">{mockData.recall}%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-orange-600" />
                    <div className="text-sm">
                      <div className="font-medium">F1 Score</div>
                      <div className="font-semibold">{mockData.f1Score}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drift Detection */}
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-medium text-sm">Model Drift Detection</h6>
                  <Badge variant={mockData.driftDetected ? "destructive" : "default"}>
                    {mockData.driftDetected ? (
                      <><AlertTriangle className="h-3 w-3 mr-1" /> Drift Detected</>
                    ) : (
                      <><CheckCircle className="h-3 w-3 mr-1" /> No Drift</>
                    )}
                  </Badge>
                </div>
                <div className="h-20 bg-muted rounded flex items-center justify-center">
                  <p className="text-xs text-muted-foreground">Drift monitoring chart</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resource Utilization */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Resource Utilization</CardTitle>
                <Button size="sm" variant="outline">
                  <Cpu className="h-4 w-4 mr-2" />
                  Optimize
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Cpu className="h-4 w-4 text-blue-600" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>GPU Utilization</span>
                      <span>{mockData.gpuUtilization}%</span>
                    </div>
                    <Progress value={mockData.gpuUtilization} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {mockData.gpuAllocated}/{mockData.gpuTotal} GPUs
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HardDrive className="h-4 w-4 text-green-600" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Memory Usage</span>
                      <span>{mockData.memoryUtilization}%</span>
                    </div>
                    <Progress value={mockData.memoryUtilization} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {mockData.memoryUsed}GB / {mockData.memoryTotal}GB
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Database className="h-4 w-4 text-purple-600" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Model Cache</span>
                      <span>{mockData.cacheUtilization}%</span>
                    </div>
                    <Progress value={mockData.cacheUtilization} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {mockData.cacheHitRate}% hit rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost Analysis */}
              <div className="pt-4 border-t">
                <h6 className="font-medium text-sm mb-3">Inference Cost Analysis</h6>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Compute Cost</span>
                    <span className="font-medium">${mockData.computeCost}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Storage Cost</span>
                    <span className="font-medium">${mockData.storageCost}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Network Cost</span>
                    <span className="font-medium">${mockData.networkCost}</span>
                  </div>
                </div>
                <div className="pt-2 mt-2 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Cost per 1K inferences</span>
                    <span className="font-semibold text-blue-600">${mockData.costPerThousand}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
