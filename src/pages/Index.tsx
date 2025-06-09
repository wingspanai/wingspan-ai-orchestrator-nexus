
import { MainLayout } from "@/components/Layout/MainLayout";
import { MetricCard } from "@/components/Dashboard/MetricCard";
import { HealthScoreCard } from "@/components/Dashboard/HealthScoreCard";
import { AIInsightsPanel } from "@/components/Dashboard/AIInsightsPanel";
import { ActivityFeed } from "@/components/Dashboard/ActivityFeed";
import { Bot, TrendingUp, Target, Zap, DollarSign, Users } from "lucide-react";

const Index = () => {
  const healthComponents = [
    { name: "Financial", score: 95 },
    { name: "Operations", score: 88 },
    { name: "Customer", score: 94 },
    { name: "Employee", score: 91 }
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-display text-gradient">
            Executive Overview
          </h1>
          <p className="text-muted-foreground">
            Real-time insights into your business performance and AI-powered operations
          </p>
        </div>

        {/* Business Health Score */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <HealthScoreCard
            score={92}
            trend="+5%"
            components={healthComponents}
            className="lg:col-span-2"
          />
          
          <div className="space-y-4">
            <MetricCard
              title="System Health"
              value="99.98%"
              status="healthy"
              subtitle="All systems operational"
              icon={<Target className="h-4 w-4 text-white" />}
            />
            <MetricCard
              title="AI Credits Used"
              value="2.4K / 5K"
              change="+12%"
              changeType="positive"
              subtitle="Credits reset in 23 days"
              icon={<Zap className="h-4 w-4 text-white" />}
            />
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Active AI Agents"
            value={47}
            change="+12"
            changeType="positive"
            period="vs last month"
            icon={<Bot className="h-4 w-4 text-white" />}
          />
          <MetricCard
            title="Tasks Automated"
            value="12,847"
            change="+34%"
            changeType="positive"
            subtitle="$247K saved this month"
            icon={<TrendingUp className="h-4 w-4 text-white" />}
          />
          <MetricCard
            title="Revenue Impact"
            value="$2.4M"
            change="+18%"
            changeType="positive"
            subtitle="AI-attributed revenue"
            icon={<DollarSign className="h-4 w-4 text-white" />}
          />
          <MetricCard
            title="Team Productivity"
            value="+67%"
            change="+12%"
            changeType="positive"
            subtitle="With AI augmentation"
            icon={<Users className="h-4 w-4 text-white" />}
          />
        </div>

        {/* Insights and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AIInsightsPanel />
          <ActivityFeed />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
