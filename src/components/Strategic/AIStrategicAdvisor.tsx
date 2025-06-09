
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain, RefreshCw, TrendingUp, AlertTriangle, Lightbulb, Target } from "lucide-react";

export const AIStrategicAdvisor = () => {
  const insights = [
    {
      id: 1,
      category: "Market Opportunity",
      confidence: 92,
      timeHorizon: "Next Quarter",
      title: "AI Automation Market Expansion",
      analysis: "Market analysis indicates 67% growth in AI automation demand. Current positioning allows capture of additional 15% market share.",
      evidence: [
        { icon: TrendingUp, text: "Market growth rate: 67% YoY", source: "Industry Report" },
        { icon: Target, text: "Competitor analysis shows gaps", source: "Competitive Intel" }
      ],
      options: [
        {
          id: 1,
          name: "Accelerate Product Development",
          description: "Fast-track AI features development",
          effort: 80,
          impact: 90,
          risk: 30
        },
        {
          id: 2,
          name: "Strategic Partnership",
          description: "Partner with leading AI companies",
          effort: 60,
          impact: 75,
          risk: 45
        }
      ]
    },
    {
      id: 2,
      category: "Operational Efficiency",
      confidence: 87,
      timeHorizon: "Next 6 Months",
      title: "Process Automation Opportunity",
      analysis: "Customer onboarding process automation could reduce time-to-value by 60% and increase customer satisfaction.",
      evidence: [
        { icon: AlertTriangle, text: "Current onboarding: 14 days avg", source: "Customer Success" },
        { icon: Lightbulb, text: "80% of steps are automatable", source: "Process Analysis" }
      ],
      options: [
        {
          id: 3,
          name: "Implement Automation Workflow",
          description: "Deploy automated onboarding system",
          effort: 65,
          impact: 85,
          risk: 25
        }
      ]
    }
  ];

  const getMeterColor = (value: number, type: 'effort' | 'impact' | 'risk') => {
    if (type === 'risk') {
      return value > 60 ? '#EF4444' : value > 30 ? '#F59E0B' : '#10B981';
    }
    return value > 70 ? '#10B981' : value > 40 ? '#F59E0B' : '#EF4444';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-500" />
            <CardTitle>AI Strategic Advisor</CardTitle>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Generate New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {insights.map(insight => (
            <div key={insight.id} className="p-4 border rounded-lg space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{insight.category}</Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      {insight.confidence}% confidence
                    </Badge>
                    <Badge variant="outline">{insight.timeHorizon}</Badge>
                  </div>
                  <h4 className="font-semibold">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground">{insight.analysis}</p>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-medium mb-2">Supporting Evidence</h5>
                <div className="space-y-1">
                  {insight.evidence.map((evidence, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <evidence.icon className="h-3 w-3" />
                      <span>{evidence.text}</span>
                      <span className="text-xs">({evidence.source})</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-sm font-medium mb-3">Strategic Options</h5>
                {insight.options.map(option => (
                  <div key={option.id} className="p-3 bg-muted/50 rounded space-y-3">
                    <div>
                      <div className="font-medium text-sm">{option.name}</div>
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Effort</span>
                          <span>{option.effort}%</span>
                        </div>
                        <Progress 
                          value={option.effort} 
                          className="h-1"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Impact</span>
                          <span>{option.impact}%</span>
                        </div>
                        <Progress 
                          value={option.impact} 
                          className="h-1"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Risk</span>
                          <span>{option.risk}%</span>
                        </div>
                        <Progress 
                          value={option.risk} 
                          className="h-1"
                        />
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Evaluate Option
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 pt-2 border-t">
                <Button size="sm">Create Initiative</Button>
                <Button size="sm" variant="outline">Share</Button>
                <Button size="sm" variant="outline">Schedule Discussion</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
