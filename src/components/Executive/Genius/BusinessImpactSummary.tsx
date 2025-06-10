
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useGeniusStore } from '@/store/geniusStore';
import { DollarSign, Shield, TrendingUp, Target, Users, AlertTriangle } from 'lucide-react';

export function BusinessImpactSummary() {
  const { predictionEngines, dailyRevenuImpact, riskMitigated, opportunitiesIdentified } = useGeniusStore();

  const impactCategories = [
    {
      title: "Revenue Protection",
      value: "$4.2M",
      description: "Annual revenue protected through churn prevention and risk mitigation",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      engines: ["Customer Retention Predictor", "Competitive Intelligence"]
    },
    {
      title: "Revenue Growth",
      value: "$3.8M",
      description: "Additional revenue through optimization and opportunity capture",
      icon: TrendingUp,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      engines: ["Revenue Optimization Engine", "Sales Performance Optimizer"]
    },
    {
      title: "Cost Savings",
      value: "$1.6M",
      description: "Operational savings through demand forecasting and inventory optimization",
      icon: Target,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      engines: ["Demand Forecaster", "Customer Behavior Insights"]
    },
    {
      title: "Risk Mitigation",
      value: "$2.1M",
      description: "Potential losses avoided through predictive risk management",
      icon: AlertTriangle,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      engines: ["Strategic Scenario Planner", "Market Intelligence Engine"]
    }
  ];

  const enginePerformance = predictionEngines.map(engine => ({
    name: engine.name,
    impact: engine.businessValue,
    priority: engine.actionPriority,
    accuracy: engine.accuracy,
    roi: Math.floor(Math.random() * 500) + 200 // Simulated ROI percentage
  })).sort((a, b) => b.accuracy - a.accuracy);

  return (
    <div className="space-y-6">
      {/* Daily Impact Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold text-white">{dailyRevenuImpact}</div>
            <div className="text-sm text-slate-400">Daily Revenue Impact</div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-white">{riskMitigated}</div>
            <div className="text-sm text-slate-400">Risk Mitigated</div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 mx-auto mb-2 text-purple-400" />
            <div className="text-2xl font-bold text-white">{opportunitiesIdentified}</div>
            <div className="text-sm text-slate-400">Active Opportunities</div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-orange-400" />
            <div className="text-2xl font-bold text-white">94.2%</div>
            <div className="text-sm text-slate-400">Overall Accuracy</div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {impactCategories.map((category, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <div className={`p-2 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                {category.title}
                <Badge className="bg-slate-700 text-slate-300">{category.value}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">{category.description}</p>
              <div>
                <div className="text-sm text-slate-400 mb-2">Contributing Engines:</div>
                <div className="flex flex-wrap gap-2">
                  {category.engines.map((engine, idx) => (
                    <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300">
                      {engine}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Engine ROI Analysis */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Engine Performance & ROI Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {enginePerformance.slice(0, 6).map((engine, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 border border-slate-600/50">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{engine.name}</h4>
                  <div className="flex items-center gap-2">
                    <Badge className={`${
                      engine.priority === 'high' ? 'bg-orange-500/20 text-orange-100 border-orange-500/50' :
                      engine.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-100 border-yellow-500/50' :
                      'bg-green-500/20 text-green-100 border-green-500/50'
                    }`}>
                      {engine.priority} priority
                    </Badge>
                    <Badge className="bg-blue-500/20 text-blue-100 border-blue-500/50">
                      {engine.roi}% ROI
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-slate-300 mb-3">{engine.impact}</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-400">Accuracy</span>
                      <span className="text-slate-300">{engine.accuracy}%</span>
                    </div>
                    <Progress value={engine.accuracy} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
