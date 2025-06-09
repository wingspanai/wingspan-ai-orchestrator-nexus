
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ArrowRight, TrendingUp, AlertTriangle, Target } from "lucide-react";

interface Insight {
  id: string;
  priority: "high" | "medium" | "low";
  type: "opportunity" | "risk" | "optimization";
  title: string;
  description: string;
  action: string;
  confidence: number;
  impact?: string;
}

interface AIInsightsPanelProps {
  insights?: Insight[];
  className?: string;
}

const defaultInsights: Insight[] = [
  {
    id: "1",
    priority: "high",
    type: "opportunity",
    title: "Revenue Opportunity Detected",
    description: "3 deals showing acceleration signals based on recent activity patterns",
    action: "View Sales Dashboard",
    confidence: 0.92,
    impact: "$124K potential"
  },
  {
    id: "2",
    priority: "medium",
    type: "optimization",
    title: "Process Automation Opportunity",
    description: "Customer onboarding can be 67% faster with AI agent deployment",
    action: "Deploy Agent",
    confidence: 0.87,
    impact: "4.2 hours saved/customer"
  },
  {
    id: "3",
    priority: "high",
    type: "risk",
    title: "Customer Churn Risk",
    description: "2 enterprise accounts showing early warning signals",
    action: "Review Accounts",
    confidence: 0.84,
    impact: "$340K at risk"
  }
];

export function AIInsightsPanel({ 
  insights = defaultInsights, 
  className = "" 
}: AIInsightsPanelProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      case "low":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "opportunity":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "risk":
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case "optimization":
        return <Target className="h-4 w-4 text-blue-600" />;
      default:
        return <Lightbulb className="h-4 w-4 text-amber-600" />;
    }
  };

  return (
    <Card className={`card-hover ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
            <Lightbulb className="h-4 w-4 text-white" />
          </div>
          AI Insights & Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="p-4 rounded-lg border border-border/60 hover:border-ai-primary/30 transition-colors bg-card/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(insight.type)}
                    <h4 className="font-semibold text-sm">{insight.title}</h4>
                    <Badge className={getPriorityColor(insight.priority)} variant="outline">
                      {insight.priority.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-xs text-muted-foreground">
                        Confidence: {Math.round(insight.confidence * 100)}%
                      </div>
                      {insight.impact && (
                        <div className="text-xs font-medium text-ai-primary">
                          {insight.impact}
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="hover:bg-ai-primary/10 hover:border-ai-primary/50 hover:text-ai-primary transition-colors"
                    >
                      {insight.action}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
