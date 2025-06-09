
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Activity, Bot, TrendingUp, Users, AlertCircle, CheckCircle, Filter } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ActivityItem {
  id: string;
  type: "agent" | "metric" | "alert" | "user" | "integration";
  title: string;
  description: string;
  timestamp: Date;
  user?: {
    name: string;
    avatar?: string;
    initials: string;
  };
  severity?: "info" | "warning" | "error" | "success";
  metadata?: Record<string, any>;
}

interface ActivityFeedProps {
  activities?: ActivityItem[];
  onFilter?: (type: string) => void;
  className?: string;
}

const defaultActivities: ActivityItem[] = [
  {
    id: "1",
    type: "agent",
    title: "Sales Assistant Agent Deployed",
    description: "Successfully deployed to handle lead qualification process",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    user: { name: "Sarah Chen", initials: "SC" },
    severity: "success"
  },
  {
    id: "2",
    type: "alert",
    title: "High-Value Deal Alert",
    description: "Acme Corp deal advanced to final negotiation stage",
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    severity: "info"
  },
  {
    id: "3",
    type: "metric",
    title: "Revenue Target Exceeded",
    description: "Q1 revenue exceeded target by 12% - $2.4M vs $2.1M goal",
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    severity: "success"
  },
  {
    id: "4",
    type: "integration",
    title: "Salesforce Sync Completed",
    description: "Updated 1,247 customer records and 89 opportunities",
    timestamp: new Date(Date.now() - 45 * 60 * 1000),
    severity: "info"
  },
  {
    id: "5",
    type: "user",
    title: "New Team Member Added",
    description: "Michael Rodriguez joined the AI Operations team",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    user: { name: "Michael Rodriguez", initials: "MR" },
    severity: "info"
  }
];

export function ActivityFeed({ 
  activities = defaultActivities, 
  onFilter,
  className = "" 
}: ActivityFeedProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "agent":
        return <Bot className="h-4 w-4" />;
      case "metric":
        return <TrendingUp className="h-4 w-4" />;
      case "user":
        return <Users className="h-4 w-4" />;
      case "alert":
        return <AlertCircle className="h-4 w-4" />;
      case "integration":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getSeverityColor = (severity?: string) => {
    switch (severity) {
      case "success":
        return "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30";
      case "warning":
        return "text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/30";
      case "error":
        return "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30";
      default:
        return "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30";
    }
  };

  return (
    <Card className={`card-hover ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center">
              <Activity className="h-4 w-4 text-white" />
            </div>
            Real-time Activity Feed
          </CardTitle>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className={`p-2 rounded-full ${getSeverityColor(activity.severity)}`}>
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm truncate">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                
                {activity.user && (
                  <div className="flex items-center gap-2 mt-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={activity.user.avatar} />
                      <AvatarFallback className="text-xs">
                        {activity.user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {activity.user.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/60">
          <Button variant="outline" className="w-full" size="sm">
            View All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
