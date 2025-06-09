
import React from "react";
import { Brain, CheckCircle, Circle, Zap, Users, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function QuickDeploySection() {
  const featuredAgent = {
    name: "Revenue Intelligence Agent",
    description: "Analyzes sales patterns, predicts deal outcomes, and provides actionable insights to increase win rates by 23%",
    compatibility: 98,
    requirements: [
      { name: "Salesforce Connected", met: true },
      { name: "6+ months of data", met: true },
      { name: "Email integration (optional)", met: false }
    ],
    roi: [
      { value: "$45K", label: "Monthly Value" },
      { value: "2.3x", label: "ROI" },
      { value: "< 1 week", label: "Time to Value" }
    ]
  };

  const recommendedAgents = [
    {
      id: 1,
      name: "Pipeline Optimizer",
      preview: "Identifies bottlenecks and suggests improvements",
      matchScore: 94,
      deployments: "2.3K",
      rating: 4.8,
      icon: TrendingUp
    },
    {
      id: 2,
      name: "Lead Scoring Bot",
      preview: "Automatically scores and prioritizes leads",
      matchScore: 91,
      deployments: "1.8K",
      rating: 4.9,
      icon: Star
    },
    {
      id: 3,
      name: "Customer Health Monitor",
      preview: "Predicts churn risk and retention opportunities",
      matchScore: 87,
      deployments: "1.5K",
      rating: 4.7,
      icon: Users
    }
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Recommended for Your Business
          </h2>
          <p className="text-lg text-text-secondary mb-6">
            Based on your industry and current tool stack
          </p>
          <Button variant="link" className="text-purple-600 hover:text-purple-700">
            View all recommendations →
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Agent Card */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-blue-50/50 border-2 border-purple-200/50 hover:border-purple-300/50 transition-all duration-300">
              <Badge className="absolute top-4 right-4 ai-gradient text-white">
                Perfect Match
              </Badge>
              
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl ai-gradient">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {featuredAgent.name}
                    </h3>
                    <p className="text-text-secondary">
                      {featuredAgent.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="text-2xl font-bold text-green-600">
                        {featuredAgent.compatibility}%
                      </div>
                      <div className="text-sm text-text-secondary">
                        compatibility
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Requirements */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Requirements</h4>
                  <div className="space-y-2">
                    {featuredAgent.requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {req.met ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400" />
                        )}
                        <span className={req.met ? "text-text-primary" : "text-text-secondary"}>
                          {req.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI Preview */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Expected Impact</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {featuredAgent.roi.map((metric, index) => (
                      <div key={index} className="text-center p-3 rounded-lg bg-white/50 border border-gray-200/50">
                        <div className="text-lg font-bold text-text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full ai-gradient text-white hover:ai-gradient-hover" size="lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Deploy Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Agents */}
          <div className="space-y-4">
            {recommendedAgents.map((agent) => (
              <Card key={agent.id} className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {agent.matchScore}% match
                  </Badge>
                </div>
                
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <agent.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">
                      {agent.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {agent.preview}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-text-secondary mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {agent.deployments} deploys
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {agent.rating}/5
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Deploy →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
