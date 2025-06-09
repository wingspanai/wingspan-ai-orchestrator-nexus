
import { useState, useEffect } from "react";
import { 
  Bot, 
  Zap, 
  Brain, 
  Activity, 
  DollarSign, 
  Package, 
  Users, 
  UserCheck,
  TrendingUp,
  FileText,
  AlertTriangle,
  Target,
  Clock,
  Plug
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardHeaderProps {
  userName: string;
  activeAgents: number;
  tasksCompleted: number;
  timeSaved: number;
}

export function DashboardHeader({ userName, activeAgents, tasksCompleted, timeSaved }: DashboardHeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }) + ' • ' + date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold font-display text-gradient animate-fade-in">
            Good morning, {userName}
          </h1>
          <p className="text-muted-foreground">
            {formatTime(currentTime)}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Button className="ai-gradient hover:ai-gradient-hover text-white">
            <Bot className="h-4 w-4 mr-2" />
            Deploy Agent
          </Button>
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            View Reports
          </Button>
          <Button variant="outline">
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 lg:gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold font-display text-ai-primary">{activeAgents}</div>
          <div className="text-sm text-muted-foreground">Agents Active</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold font-display text-ai-secondary">{tasksCompleted.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Tasks Today</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold font-display text-ai-tertiary">{timeSaved}</div>
          <div className="text-sm text-muted-foreground">Hours Saved</div>
        </div>
      </div>
    </div>
  );
}

interface HealthScoreHeroProps {
  score: number;
  trend: string;
  components: Array<{
    label: string;
    value: number;
    trend: string;
    icon: React.ReactNode;
  }>;
}

export function HealthScoreHero({ score, trend, components }: HealthScoreHeroProps) {
  return (
    <Card className="mb-8 overflow-hidden gradient-border">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 text-center">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-muted"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#healthGradient)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${score * 2.51} 251`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--ai-primary))" />
                    <stop offset="100%" stopColor="hsl(var(--ai-secondary))" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold font-display text-gradient">{score}</div>
                <div className="text-sm text-muted-foreground">Business Health</div>
                <Badge className="mt-2 ai-gradient text-white border-0">
                  {trend}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {components.map((component, index) => (
              <div 
                key={component.label}
                className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-2">
                  <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center text-white">
                    {component.icon}
                  </div>
                </div>
                <div className="font-semibold">{component.label}</div>
                <div className="text-2xl font-bold font-display text-ai-primary">{component.value}</div>
                <div className="text-sm text-green-600">{component.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  subtitle?: string;
  icon: React.ReactNode;
  sparklineData?: number[];
  index: number;
}

export function ExecutiveMetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral",
  subtitle,
  icon,
  sparklineData = [],
  index
}: MetricCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive": return "text-green-600";
      case "negative": return "text-red-600";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card 
      className="card-hover animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium text-muted-foreground">{title}</div>
        <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center text-white">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="text-3xl font-bold font-display">{value}</div>
          
          {change && (
            <div className={`text-sm ${getChangeColor()}`}>
              {change}
            </div>
          )}
          
          {sparklineData.length > 0 && (
            <div className="h-10 mt-3">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                <polyline
                  fill="none"
                  stroke="hsl(var(--ai-primary))"
                  strokeWidth="2"
                  points={sparklineData.map((point, i) => 
                    `${(i / (sparklineData.length - 1)) * 100},${40 - (point / Math.max(...sparklineData)) * 35}`
                  ).join(' ')}
                />
              </svg>
            </div>
          )}
          
          {subtitle && (
            <div className="text-sm text-muted-foreground">{subtitle}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface InsightCardProps {
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  confidence: number;
  impact?: string;
  actions?: Array<{ label: string; variant?: "default" | "outline" }>;
  index: number;
}

export function InsightCard({ 
  priority, 
  title, 
  description, 
  confidence, 
  impact,
  actions = [],
  index 
}: InsightCardProps) {
  const getPriorityColor = () => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "medium": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      case "low": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    }
  };

  const getIcon = () => {
    switch (priority) {
      case "high": return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "medium": return <Target className="h-4 w-4 text-blue-600" />;
      case "low": return <Brain className="h-4 w-4 text-purple-600" />;
    }
  };

  return (
    <Card 
      className="p-4 hover:border-ai-primary/30 transition-colors animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            {getIcon()}
            <h4 className="font-semibold">{title}</h4>
            <Badge className={getPriorityColor()} variant="outline">
              {priority.toUpperCase()}
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            {Math.round(confidence * 100)}% confidence
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {impact && (
          <div className="text-sm font-medium text-ai-primary">
            {impact}
          </div>
        )}
        
        {actions.length > 0 && (
          <div className="flex gap-2 pt-2">
            {actions.map((action, i) => (
              <Button 
                key={i}
                size="sm" 
                variant={action.variant || "default"}
                className={action.variant === "default" ? "ai-gradient hover:ai-gradient-hover text-white" : ""}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

interface ActivityItemProps {
  timestamp: string;
  type: "agent" | "integration" | "alert";
  title: string;
  description: string;
  tags?: Array<{ label: string; color: string }>;
  index: number;
}

export function ActivityItem({ 
  timestamp, 
  type, 
  title, 
  description, 
  tags = [],
  index 
}: ActivityItemProps) {
  const getIcon = () => {
    switch (type) {
      case "agent": return <Bot className="h-4 w-4" />;
      case "integration": return <Plug className="h-4 w-4" />;
      case "alert": return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getIconBg = () => {
    switch (type) {
      case "agent": return "ai-gradient";
      case "integration": return "bg-blue-500";
      case "alert": return "bg-amber-500";
    }
  };

  return (
    <div 
      className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors animate-slide-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex-shrink-0">
        <div className={`w-8 h-8 rounded-full ${getIconBg()} flex items-center justify-center text-white`}>
          {getIcon()}
        </div>
      </div>
      
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">{title}</h4>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
        
        <p className="text-sm text-muted-foreground">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex gap-1 pt-1">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tag.label}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface PredictionCardProps {
  icon: React.ReactNode;
  label: string;
  predictedValue: string;
  confidence: string;
  details?: React.ReactNode;
  index: number;
}

export function PredictionCard({ 
  icon, 
  label, 
  predictedValue, 
  confidence, 
  details,
  index 
}: PredictionCardProps) {
  return (
    <Card 
      className="p-4 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg ai-gradient flex items-center justify-center text-white">
            {icon}
          </div>
          <span className="font-medium">{label}</span>
        </div>
        
        <div className="text-2xl font-bold font-display text-ai-primary">
          {predictedValue}
        </div>
        
        <div className="text-sm text-muted-foreground">
          {confidence}
        </div>
        
        {details && (
          <div className="pt-2 border-t">
            {details}
          </div>
        )}
      </div>
    </Card>
  );
}
