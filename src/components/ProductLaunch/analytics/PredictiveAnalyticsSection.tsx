
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { 
  TrendingUp, 
  AlertCircle, 
  Brain,
  Plus,
  Clock,
  Target,
  BarChart
} from 'lucide-react';

export function PredictiveAnalyticsSection() {
  const [forecastHorizon, setForecastHorizon] = useState('12months');
  const [confidenceInterval, setConfidenceInterval] = useState('90');
  const [insightCategory, setInsightCategory] = useState('opportunities');

  // Mock data
  const expectedRevenue = 28.5;
  const lowerBound = 24.2;
  const upperBound = 32.8;
  const expectedGrowthRate = 25;
  const lowerGrowthRate = 18;
  const upperGrowthRate = 32;
  const modelConfidence = 87;

  const keyGrowthDrivers = [
    { id: 1, name: 'Feature adoption', impact: 35 },
    { id: 2, name: 'Market expansion', impact: 28 },
    { id: 3, name: 'Customer retention', impact: 22 },
    { id: 4, name: 'Pricing optimization', impact: 15 }
  ];

  const forecastRisks = [
    { id: 1, name: 'Economic downturn', probability: 25, severity: 'high' },
    { id: 2, name: 'Competitive pressure', probability: 45, severity: 'medium' },
    { id: 3, name: 'Regulatory changes', probability: 15, severity: 'high' }
  ];

  const scenarios = [
    {
      id: 'optimistic',
      name: 'Optimistic Scenario',
      projectedRevenue: 35.2,
      delta: 12,
      assumptions: [
        { id: 1, name: 'Market Growth', value: 25, min: 10, max: 40 },
        { id: 2, name: 'Customer Acquisition', value: 30, min: 10, max: 50 },
        { id: 3, name: 'Retention Rate', value: 95, min: 80, max: 98 }
      ]
    },
    {
      id: 'realistic',
      name: 'Realistic Scenario',
      projectedRevenue: 28.5,
      delta: 0,
      assumptions: [
        { id: 1, name: 'Market Growth', value: 18, min: 10, max: 40 },
        { id: 2, name: 'Customer Acquisition', value: 20, min: 10, max: 50 },
        { id: 3, name: 'Retention Rate', value: 88, min: 80, max: 98 }
      ]
    },
    {
      id: 'pessimistic',
      name: 'Pessimistic Scenario',
      projectedRevenue: 22.1,
      delta: -18,
      assumptions: [
        { id: 1, name: 'Market Growth', value: 12, min: 10, max: 40 },
        { id: 2, name: 'Customer Acquisition', value: 12, min: 10, max: 50 },
        { id: 3, name: 'Retention Rate', value: 82, min: 80, max: 98 }
      ]
    }
  ];

  const growthOpportunities = [
    {
      id: 1,
      title: 'Enterprise Market Expansion',
      description: 'Opportunity to capture enterprise segment with advanced features and dedicated support.',
      potentialValue: 15.2,
      probability: 78,
      timeline: '6-9 months',
      resourceRequirement: 'High',
      impact: 'high'
    },
    {
      id: 2,
      title: 'AI-Powered Feature Suite',
      description: 'Develop AI capabilities to differentiate from competitors and increase ARPU.',
      potentialValue: 8.7,
      probability: 65,
      timeline: '9-12 months',
      resourceRequirement: 'Medium',
      impact: 'medium'
    },
    {
      id: 3,
      title: 'Geographic Expansion - APAC',
      description: 'Enter high-growth APAC markets with localized product offerings.',
      potentialValue: 12.4,
      probability: 55,
      timeline: '12-18 months',
      resourceRequirement: 'High',
      impact: 'high'
    }
  ];

  const anomaliesDetected = true;
  const anomalyCount = 3;

  const detectedAnomalies = [
    {
      id: 1,
      type: 'Revenue Anomaly',
      severity: 'high',
      detectedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
      metric: 'Daily Revenue',
      description: 'Unexpected 25% drop in daily revenue compared to trend',
      anomalyIndex: 15,
      data: [100, 105, 102, 108, 110, 95, 98, 102, 106, 108, 112, 115, 118, 120, 122, 92, 94, 96, 98, 100],
      possibleCauses: [
        { id: 1, probability: 65, description: 'Server outage during peak hours' },
        { id: 2, probability: 25, description: 'Competitor launched competing feature' },
        { id: 3, probability: 10, description: 'Seasonal demand fluctuation' }
      ]
    },
    {
      id: 2,
      type: 'User Engagement',
      severity: 'medium',
      detectedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
      metric: 'Session Duration',
      description: 'Average session duration decreased by 15%',
      anomalyIndex: 12,
      data: [25, 26, 25, 27, 28, 26, 25, 27, 28, 29, 28, 27, 23, 24, 25, 26, 27, 28, 29, 30],
      possibleCauses: [
        { id: 1, probability: 45, description: 'UI/UX changes affecting user behavior' },
        { id: 2, probability: 35, description: 'Performance issues slowing page loads' },
        { id: 3, probability: 20, description: 'Change in user demographics' }
      ]
    }
  ];

  const addScenario = () => {
    console.log('Adding new scenario...');
  };

  const updateAssumption = (scenarioId: string, assumptionId: number, value: number) => {
    console.log(`Updating scenario ${scenarioId}, assumption ${assumptionId} to ${value}`);
  };

  const exploreOpportunity = (opportunityId: number) => {
    console.log(`Exploring opportunity ${opportunityId}...`);
  };

  const createInitiative = (opportunityId: number) => {
    console.log(`Creating initiative for opportunity ${opportunityId}...`);
  };

  const investigateAnomaly = (anomalyId: number) => {
    console.log(`Investigating anomaly ${anomalyId}...`);
  };

  const dismissAnomaly = (anomalyId: number) => {
    console.log(`Dismissing anomaly ${anomalyId}...`);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="space-y-6">
      {/* Revenue Forecasting */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Revenue Forecasting</CardTitle>
            <div className="flex items-center gap-2">
              <Select value={forecastHorizon} onValueChange={setForecastHorizon}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">3 Months</SelectItem>
                  <SelectItem value="6months">6 Months</SelectItem>
                  <SelectItem value="12months">12 Months</SelectItem>
                  <SelectItem value="24months">24 Months</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={confidenceInterval} onValueChange={setConfidenceInterval}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="80">80% Confidence</SelectItem>
                  <SelectItem value="90">90% Confidence</SelectItem>
                  <SelectItem value="95">95% Confidence</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Forecast Chart */}
          <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center mb-6">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="h-12 w-12 mx-auto mb-2" />
              <p>Revenue Forecast Chart</p>
              <p className="text-sm">Actual vs Forecast with confidence intervals</p>
            </div>
          </div>

          {/* Forecast Summary */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Expected Revenue</div>
              <div className="text-2xl font-bold">${expectedRevenue}M</div>
              <div className="text-xs text-muted-foreground">${lowerBound}M - ${upperBound}M</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Growth Rate</div>
              <div className="text-2xl font-bold">{expectedGrowthRate}%</div>
              <div className="text-xs text-muted-foreground">{lowerGrowthRate}% - {upperGrowthRate}%</div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Key Drivers</div>
              <div className="space-y-1 mt-2">
                {keyGrowthDrivers.map(driver => (
                  <div key={driver.id} className="text-xs">
                    {driver.name}: {driver.impact}%
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <div className="text-sm text-muted-foreground">Risk Factors</div>
              <div className="space-y-1 mt-2">
                {forecastRisks.map(risk => (
                  <div key={risk.id} className={`text-xs ${risk.severity === 'high' ? 'text-red-600' : 'text-yellow-600'}`}>
                    {risk.name}: {risk.probability}%
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scenario Analysis */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Scenario Analysis</h4>
              <Button variant="outline" size="sm" onClick={addScenario}>
                <Plus className="w-4 h-4 mr-2" />
                Add Scenario
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {scenarios.map(scenario => (
                <div key={scenario.id} className="p-4 border rounded-lg">
                  <div className="font-medium mb-3">{scenario.name}</div>
                  
                  <div className="space-y-3 mb-4">
                    {scenario.assumptions.map(assumption => (
                      <div key={assumption.id}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">{assumption.name}</span>
                          <span className="text-sm font-medium">{assumption.value}%</span>
                        </div>
                        <Slider
                          value={[assumption.value]}
                          onValueChange={(value) => updateAssumption(scenario.id, assumption.id, value[0])}
                          min={assumption.min}
                          max={assumption.max}
                          step={1}
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t">
                    <div className="text-sm text-muted-foreground">Projected Revenue</div>
                    <div className="text-xl font-bold">${scenario.projectedRevenue}M</div>
                    <div className={`text-sm ${scenario.delta > 0 ? 'text-green-600' : scenario.delta < 0 ? 'text-red-600' : 'text-muted-foreground'}`}>
                      {scenario.delta > 0 ? '+' : ''}{scenario.delta}% vs. baseline
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI-Powered Predictive Insights */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>AI-Powered Predictive Insights</CardTitle>
            <div className="text-sm text-muted-foreground">
              Model Confidence: {modelConfidence}%
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Insight Categories */}
          <div className="flex border-b border-border mb-6">
            <button
              onClick={() => setInsightCategory('opportunities')}
              className={`px-4 py-2 border-b-2 font-medium text-sm ${
                insightCategory === 'opportunities' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Growth Opportunities
            </button>
            
            <button
              onClick={() => setInsightCategory('risks')}
              className={`px-4 py-2 border-b-2 font-medium text-sm ${
                insightCategory === 'risks' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Risk Predictions
            </button>
            
            <button
              onClick={() => setInsightCategory('optimizations')}
              className={`px-4 py-2 border-b-2 font-medium text-sm ${
                insightCategory === 'optimizations' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Optimization Suggestions
            </button>
          </div>

          {/* Growth Opportunities */}
          {insightCategory === 'opportunities' && (
            <div className="space-y-4">
              {growthOpportunities.map(opportunity => (
                <div key={opportunity.id} className="p-6 border border-green-200 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold">{opportunity.title}</h4>
                    <Badge className={`${
                      opportunity.impact === 'high' ? 'bg-green-600' : 'bg-blue-600'
                    } text-white`}>
                      ${opportunity.potentialValue}M potential
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{opportunity.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Probability</div>
                      <div className="text-lg font-bold">{opportunity.probability}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="text-lg font-bold">{opportunity.timeline}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Resources</div>
                      <div className="text-lg font-bold">{opportunity.resourceRequirement}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={() => exploreOpportunity(opportunity.id)}>
                      Explore Details
                    </Button>
                    <Button variant="outline" onClick={() => createInitiative(opportunity.id)}>
                      Create Initiative
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Anomaly Detection */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Anomaly Detection</CardTitle>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${anomaliesDetected ? 'bg-red-500' : 'bg-green-500'}`}></div>
              <span className="text-sm">
                {anomaliesDetected ? `${anomalyCount} anomalies detected` : 'All systems normal'}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {detectedAnomalies.map(anomaly => (
              <div key={anomaly.id} className={`p-4 border rounded-lg ${
                anomaly.severity === 'high' ? 'border-red-200 bg-red-50' : 'border-yellow-200 bg-yellow-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{anomaly.type}</div>
                  <div className="text-sm text-muted-foreground">{formatTime(anomaly.detectedAt)}</div>
                </div>

                <div className="mb-3">
                  <div className="font-medium text-sm">{anomaly.metric}</div>
                  <div className="text-sm text-muted-foreground">{anomaly.description}</div>
                </div>

                {/* Mini chart placeholder */}
                <div className="h-20 bg-white rounded border mb-3 flex items-center justify-center">
                  <div className="text-xs text-muted-foreground">
                    <BarChart className="h-4 w-4 mx-auto mb-1" />
                    Mini trend chart with anomaly point
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-sm font-medium mb-2">Possible Causes</div>
                  <div className="space-y-1">
                    {anomaly.possibleCauses.map(cause => (
                      <div key={cause.id} className="flex items-center gap-2 text-sm">
                        <div className="text-muted-foreground">{cause.probability}%</div>
                        <div>{cause.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" onClick={() => investigateAnomaly(anomaly.id)}>
                    Investigate
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => dismissAnomaly(anomaly.id)}>
                    Dismiss
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
