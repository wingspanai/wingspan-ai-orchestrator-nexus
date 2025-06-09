
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useHRStore } from '@/store/hrStore';
import { 
  MessageSquare, Clock, Heart, Users, Zap, Award, 
  Brain, RefreshCw, TrendingUp, AlertCircle 
} from 'lucide-react';

export function EngagementSection() {
  const { engagementData, cultureMetrics } = useHRStore();
  const [sentimentFilter, setSentimentFilter] = useState('all');

  const RadialGauge = ({ value, size = 200, children }: { value: number; size?: number; children: React.ReactNode }) => {
    const radius = size / 2 - 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="text-gradient transition-all duration-500"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const employeeFeedback = [
    {
      id: '1',
      content: 'Really enjoying the new flexible work policy. It has improved my work-life balance significantly.',
      sentiment: 'positive' as const,
      anonymous: false,
      employee: 'Sarah Chen',
      tags: ['work-life-balance', 'remote-work'],
      timestamp: new Date('2025-01-09T10:30:00')
    },
    {
      id: '2',
      content: 'The career development opportunities could be better. Would love more mentorship programs.',
      sentiment: 'neutral' as const,
      anonymous: true,
      tags: ['career-growth', 'mentorship'],
      timestamp: new Date('2025-01-09T08:15:00')
    },
    {
      id: '3',
      content: 'Great team collaboration on the recent project. Communication has been excellent.',
      sentiment: 'positive' as const,
      anonymous: false,
      employee: 'Mike Rodriguez',
      tags: ['teamwork', 'communication'],
      timestamp: new Date('2025-01-08T16:45:00')
    }
  ];

  const hrInsights = [
    {
      id: '1',
      category: 'retention',
      priority: 'high' as const,
      title: 'Flight Risk Alert',
      description: '3 senior engineers showing signs of disengagement based on recent survey responses and activity patterns.',
      affectedEmployees: [],
      confidence: 87,
      timestamp: new Date()
    },
    {
      id: '2',
      category: 'engagement',
      priority: 'medium' as const,
      title: 'Team Morale Boost Needed',
      description: 'Marketing team engagement scores dropped 12% in the last quarter. Consider team building activities.',
      affectedEmployees: [],
      confidence: 74,
      timestamp: new Date()
    }
  ];

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Employee Engagement & Culture</h2>
        <div className="flex gap-2">
          <Button className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Launch Survey
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            History
          </Button>
        </div>
      </div>

      {/* Engagement Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Engagement Score */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Engagement Score</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <RadialGauge value={engagementData.score}>
              <div className="text-3xl font-bold">{engagementData.score}</div>
              <div className="text-sm text-muted-foreground">Engagement Score</div>
            </RadialGauge>
            
            <div className="w-full space-y-3">
              <div className="text-sm font-medium">Key Drivers</div>
              {engagementData.drivers.map((driver) => (
                <div key={driver.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{driver.name}</span>
                    <span className="font-medium">{driver.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${driver.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Culture Health Indicators */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Culture Health Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div className="text-sm font-medium">Wellbeing</div>
                <div className="text-xl font-bold">{cultureMetrics.wellbeingScore}/10</div>
                <div className="text-xs text-green-600">↑ 5%</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium">Inclusion</div>
                <div className="text-xl font-bold">{cultureMetrics.inclusionScore}/10</div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div 
                    className="bg-blue-500 h-1 rounded-full"
                    style={{ width: `${(cultureMetrics.inclusionScore / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-sm font-medium">Innovation</div>
                <div className="text-xl font-bold">{cultureMetrics.innovationScore}/10</div>
                <div className="text-xs text-muted-foreground">42 ideas this month</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm font-medium">Recognition</div>
                <div className="text-xl font-bold">{cultureMetrics.recognitionScore}/10</div>
                <div className="text-xs text-muted-foreground">186 given</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Employee Feedback */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Employee Feedback</CardTitle>
            <div className="flex gap-2">
              {['All', 'Positive', 'Neutral', 'Negative'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSentimentFilter(filter.toLowerCase())}
                  className={`px-3 py-1 rounded-full text-sm ${
                    sentimentFilter === filter.toLowerCase()
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {employeeFeedback.map((feedback) => (
              <div key={feedback.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {feedback.anonymous ? 'Anonymous' : feedback.employee}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {feedback.timestamp.toLocaleDateString()}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      feedback.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                      feedback.sentiment === 'neutral' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {feedback.sentiment}
                    </span>
                  </div>
                </div>
                
                <div className="text-sm">"{feedback.content}"</div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {feedback.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Respond</Button>
                    <Button size="sm" variant="ghost">Flag</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI HR Assistant */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>AI HR Assistant</CardTitle>
            <div className="flex items-center gap-1 ml-auto">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Ready to help</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  <span className="font-medium">Identify Retention Risks</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  AI predicts flight risk employees
                </div>
              </button>
              
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Team Composition</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Optimize team structures
                </div>
              </button>
              
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Comp Recommendations</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Market-based salary suggestions
                </div>
              </button>
              
              <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-purple-500" />
                  <span className="font-medium">Policy Assistant</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  HR policy Q&A
                </div>
              </button>
            </div>

            {/* Predictive Insights */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Predictive HR Insights</h3>
                <Button size="sm" variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
              
              <div className="space-y-3">
                {hrInsights.map((insight) => (
                  <div key={insight.id} className={`p-4 border rounded-lg ${
                    insight.priority === 'high' ? 'border-red-200 bg-red-50' :
                    insight.priority === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                    'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          insight.category === 'retention' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {insight.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          insight.priority === 'high' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {insight.priority} Priority
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">{insight.title}</div>
                      <div className="text-sm text-muted-foreground">{insight.description}</div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm">Take Action</Button>
                      <Button size="sm" variant="ghost">Dismiss</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
