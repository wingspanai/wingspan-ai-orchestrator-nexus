
import React, { useState } from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Bell, 
  Plus, 
  FileDown, 
  TrendingUp, 
  Target, 
  Brain,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Filter,
  Eye,
  Share2,
  ChevronRight
} from 'lucide-react';

const CompetitiveIntelligence = () => {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');

  // Mock data
  const marketRank = 2;
  const rankChange = 1;
  const winRate = 73;
  const winRateTrend = 5;
  const overallHealth = 87;

  const competitorActivities = [
    {
      id: 1,
      competitor: { name: 'TechRival Corp', logo: '/placeholder.svg' },
      type: 'Product Launch',
      title: 'Launched AI-powered customer service platform',
      description: 'Direct competitor to our service offering with advanced automation features',
      impact: 'high',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      verified: true,
      analysis: {
        threatLevel: 85,
        confidence: 92,
        predictedImpact: 'Potential 15% market share shift in Q2',
        recommendedActions: [
          { id: 1, text: 'Accelerate our AI roadmap', priority: 'high' },
          { id: 2, text: 'Enhance customer communication', priority: 'medium' }
        ]
      }
    },
    {
      id: 2,
      competitor: { name: 'Market Leader Inc', logo: '/placeholder.svg' },
      type: 'Pricing Change',
      title: 'Reduced enterprise pricing by 20%',
      description: 'Aggressive pricing strategy targeting our key customer segment',
      impact: 'medium',
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      verified: true,
      analysis: {
        threatLevel: 65,
        confidence: 88,
        predictedImpact: 'Pressure on deal closure rates',
        recommendedActions: [
          { id: 1, text: 'Review pricing strategy', priority: 'high' },
          { id: 2, text: 'Emphasize value proposition', priority: 'medium' }
        ]
      }
    }
  ];

  const topCompetitors = [
    { id: 1, name: 'TechRival Corp', logo: '/placeholder.svg', winRate: 45, wins: 12, losses: 15 },
    { id: 2, name: 'Market Leader Inc', logo: '/placeholder.svg', winRate: 38, wins: 8, losses: 13 },
    { id: 3, name: 'Innovation Labs', logo: '/placeholder.svg', winRate: 62, wins: 18, losses: 11 }
  ];

  const strategicRecommendations = [
    {
      id: 1,
      title: 'Accelerate AI Feature Development',
      description: 'Fast-track AI capabilities to counter TechRival Corp\'s recent launch',
      priority: 'high',
      category: 'Product',
      timeframe: '3 months',
      revenueImpact: '+$2.3M',
      confidence: 85
    },
    {
      id: 2,
      title: 'Launch Competitive Pricing Program',
      description: 'Introduce flexible pricing tiers to compete with Market Leader Inc',
      priority: 'medium',
      category: 'Pricing',
      timeframe: '6 weeks',
      revenueImpact: '+$1.8M',
      confidence: 78
    }
  ];

  const toggleAlerts = () => setAlertsEnabled(!alertsEnabled);

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Competitive Intelligence</h1>
            <p className="text-text-secondary mt-2">
              Real-time market position and competitor insights
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant={alertsEnabled ? "default" : "outline"}
              onClick={toggleAlerts}
            >
              <Bell className="h-4 w-4 mr-2" />
              Real-time Alerts {alertsEnabled ? 'On' : 'Off'}
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Competitor
            </Button>
            <Button variant="ghost">
              <FileDown className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Market Position Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Market Position Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-text-primary">#{marketRank}</div>
                  <div className="text-sm text-text-secondary">Market Position</div>
                  <div className={`flex items-center justify-center mt-2 ${rankChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {rankChange > 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    <span className="ml-1">{Math.abs(rankChange)} vs last quarter</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Key Strengths</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Innovation Speed</span>
                      <span className="ml-auto text-sm font-medium">92%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Customer Satisfaction</span>
                      <span className="ml-auto text-sm font-medium">89%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Opportunities</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Enterprise Market</span>
                      <Badge variant="secondary" className="ml-auto">High</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">International Expansion</span>
                      <Badge variant="secondary" className="ml-auto">Medium</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Win Rate Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-text-primary">{winRate}%</div>
                <div className="text-sm text-text-secondary">Overall Win Rate</div>
                <div className={`flex items-center justify-center mt-2 ${winRateTrend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {winRateTrend > 0 ? '↑' : '↓'} {Math.abs(winRateTrend)}% from last quarter
                </div>
              </div>
              <Progress value={winRate} className="h-3" />
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                  <div className="font-semibold text-green-600">47</div>
                  <div className="text-text-secondary">Wins</div>
                </div>
                <div>
                  <div className="font-semibold text-red-600">17</div>
                  <div className="text-text-secondary">Losses</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-600">8</div>
                  <div className="text-text-secondary">No Decision</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Competitor Activities */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Competitor Activity Feed</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="ghost" size="sm">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {competitorActivities.map((activity) => (
                <div key={activity.id} className="border-l-4 border-blue-500 pl-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <img src={activity.competitor.logo} alt={activity.competitor.name} className="w-8 h-8 rounded" />
                      <div>
                        <div className="font-semibold text-text-primary">{activity.competitor.name}</div>
                        <Badge variant={activity.impact === 'high' ? 'destructive' : 'secondary'}>
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant={activity.verified ? 'default' : 'outline'}>
                      {activity.verified ? <CheckCircle className="h-3 w-3 mr-1" /> : <AlertCircle className="h-3 w-3 mr-1" />}
                      {activity.verified ? 'Verified' : 'Unverified'}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-text-primary">{activity.title}</h4>
                    <p className="text-text-secondary text-sm mt-1">{activity.description}</p>
                  </div>
                  
                  <div className="bg-bg-secondary p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <span className="font-semibold text-sm">AI Analysis</span>
                      <Badge variant="outline" className="ml-auto">{activity.analysis.confidence}% confidence</Badge>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium">Threat Level: </span>
                        <Progress value={activity.analysis.threatLevel} className="h-2 w-24 inline-block ml-2" />
                        <span className="ml-2 text-sm">{activity.analysis.threatLevel}%</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Predicted Impact: </span>
                        {activity.analysis.predictedImpact}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {activity.analysis.recommendedActions.map((action) => (
                          <Badge key={action.id} variant="outline" className="text-xs">
                            {action.text}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm">Create Response Plan</Button>
                    <Button size="sm" variant="ghost">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Recommendations */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>AI-Powered Strategic Recommendations</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary">AI Confidence</span>
                <Progress value={85} className="w-20 h-2" />
                <span className="text-sm font-medium">85%</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {strategicRecommendations.map((recommendation) => (
                <Card key={recommendation.id} className="border-l-4 border-purple-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant={recommendation.priority === 'high' ? 'destructive' : 'secondary'}>
                        {recommendation.priority} Priority
                      </Badge>
                      <div className="flex gap-2">
                        <Badge variant="outline">{recommendation.category}</Badge>
                        <Badge variant="outline">{recommendation.timeframe}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-text-primary">{recommendation.title}</h4>
                      <p className="text-text-secondary text-sm mt-1">{recommendation.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-text-secondary">Revenue Impact</span>
                        <div className="font-semibold text-green-600">{recommendation.revenueImpact}</div>
                      </div>
                      <div>
                        <span className="text-text-secondary">Confidence</span>
                        <div className="font-semibold">{recommendation.confidence}%</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm">Implement Strategy</Button>
                      <Button size="sm" variant="ghost">Explore Alternatives</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default CompetitiveIntelligence;
