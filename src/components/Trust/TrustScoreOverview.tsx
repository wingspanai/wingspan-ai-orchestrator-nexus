
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Eye, CheckCircle, Users, TrendingUp } from "lucide-react";

export function TrustScoreOverview() {
  const trustScore = 94;
  const trustTrend = 3.2;
  const trustFactors = [
    { name: "Data Security", score: 98, icon: Shield, color: "text-green-600" },
    { name: "AI Transparency", score: 92, icon: Eye, color: "text-blue-600" },
    { name: "Compliance", score: 96, icon: CheckCircle, color: "text-purple-600" },
    { name: "Human Control", score: 93, icon: Users, color: "text-amber-600" }
  ];

  const quickStats = [
    { label: "Decisions Reviewed", value: "2,847" },
    { label: "Human Overrides", value: "23" },
    { label: "Decision Accuracy", value: "96.8%" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Trust Score */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-ai-primary" />
            Trust Score Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-text-primary">{trustScore}%</div>
                    <div className="text-sm text-text-secondary">Trust Score</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-8 border-ai-primary" 
                     style={{ 
                       background: `conic-gradient(from 0deg, #3b82f6 0%, #8b5cf6 ${trustScore}%, transparent ${trustScore}%)`
                     }}>
                </div>
              </div>
              <div>
                <Badge variant="secondary" className="text-green-600 bg-green-50">
                  ↑ {trustTrend}% from last month
                </Badge>
                <p className="text-sm text-text-secondary mt-2">
                  Your trust score has increased due to improved AI transparency and decision accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustFactors.map((factor) => (
              <div key={factor.name} className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center mb-2 ${factor.color}`}>
                  <factor.icon className="h-6 w-6" />
                </div>
                <div className="text-sm font-medium text-text-primary">{factor.score}%</div>
                <div className="text-xs text-text-secondary">{factor.name}</div>
                <Progress value={factor.score} className="mt-1 h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats & Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Trust Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="flex justify-between items-center">
                <span className="text-sm text-text-secondary">{stat.label}</span>
                <span className="font-semibold text-text-primary">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border/60">
            <Button className="w-full" variant="outline">
              View Trust Report →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
