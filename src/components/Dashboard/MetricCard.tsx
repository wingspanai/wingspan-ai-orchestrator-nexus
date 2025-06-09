
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  period?: string;
  icon?: ReactNode;
  subtitle?: string;
  chart?: ReactNode;
  status?: "healthy" | "warning" | "critical";
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  period = "vs last month",
  icon,
  subtitle,
  chart,
  status,
  className = "",
}: MetricCardProps) {
  const getTrendIcon = () => {
    switch (changeType) {
      case "positive":
        return <TrendingUp className="h-3 w-3" />;
      case "negative":
        return <TrendingDown className="h-3 w-3" />;
      default:
        return <Minus className="h-3 w-3" />;
    }
  };

  const getTrendColor = () => {
    switch (changeType) {
      case "positive":
        return "text-green-600 dark:text-green-400";
      case "negative":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "healthy":
        return "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20";
      case "warning":
        return "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20";
      case "critical":
        return "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20";
      default:
        return "";
    }
  };

  return (
    <Card className={`card-hover ${getStatusColor()} ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="text-2xl font-bold font-display">{value}</div>
          
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
          
          {change && (
            <div className="flex items-center space-x-1">
              <Badge
                variant="outline"
                className={`h-5 text-xs ${getTrendColor()}`}
              >
                {getTrendIcon()}
                {change}
              </Badge>
              <span className="text-xs text-muted-foreground">{period}</span>
            </div>
          )}
          
          {chart && (
            <div className="mt-3 h-16">
              {chart}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
