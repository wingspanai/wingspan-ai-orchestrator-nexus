
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HealthComponent {
  name: string;
  score: number;
}

interface HealthScoreCardProps {
  score: number;
  trend: string;
  components: HealthComponent[];
  className?: string;
}

export function HealthScoreCard({
  score,
  trend,
  components,
  className = "",
}: HealthScoreCardProps) {
  const getScoreColor = (value: number) => {
    if (value >= 90) return "text-green-600 dark:text-green-400";
    if (value >= 70) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  };

  const getProgressColor = (value: number) => {
    if (value >= 90) return "bg-green-500";
    if (value >= 70) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <Card className={`col-span-full lg:col-span-2 card-hover gradient-border ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
            <Activity className="h-4 w-4 text-white" />
          </div>
          Business Health Score
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="text-center space-y-2">
            <div className={`text-5xl font-bold font-display ${getScoreColor(score)}`}>
              {score}
            </div>
            <div className="flex items-center justify-center gap-2">
              <Badge className="ai-gradient text-white">
                <TrendingUp className="h-3 w-3 mr-1" />
                {trend}
              </Badge>
              <span className="text-sm text-muted-foreground">from last quarter</span>
            </div>
          </div>

          {/* Component Breakdown */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-muted-foreground">Health Components</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {components.map((component) => (
                <div key={component.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{component.name}</span>
                    <span className={`text-sm font-semibold ${getScoreColor(component.score)}`}>
                      {component.score}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(component.score)}`}
                      style={{ width: `${component.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
