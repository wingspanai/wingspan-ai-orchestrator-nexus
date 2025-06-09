
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Plus,
  Clock,
  Users,
  Target,
  Share2,
  Lightbulb,
  MessageSquare,
  FileText,
  Zap
} from 'lucide-react';

export const MeetingTemplates = () => {
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);

  const meetingTemplates = [
    {
      id: '1',
      name: 'Sprint Planning',
      category: 'Agile',
      icon: '📋',
      duration: 120,
      maxAttendees: 8,
      effectivenessScore: 92,
      usageCount: 47,
      agendaItems: [
        { title: 'Review previous sprint', duration: 15 },
        { title: 'Story estimation', duration: 45 },
        { title: 'Sprint goal setting', duration: 30 },
        { title: 'Task assignment', duration: 20 },
        { title: 'Next steps', duration: 10 }
      ]
    },
    {
      id: '2',
      name: 'One-on-One',
      category: 'Management',
      icon: '👥',
      duration: 30,
      maxAttendees: 2,
      effectivenessScore: 89,
      usageCount: 156,
      agendaItems: [
        { title: 'Check-in & priorities', duration: 10 },
        { title: 'Goal progress review', duration: 10 },
        { title: 'Feedback & development', duration: 8 },
        { title: 'Questions & support', duration: 2 }
      ]
    },
    {
      id: '3',
      name: 'Product Review',
      category: 'Product',
      icon: '🚀',
      duration: 60,
      maxAttendees: 12,
      effectivenessScore: 85,
      usageCount: 23,
      agendaItems: [
        { title: 'Feature demo', duration: 20 },
        { title: 'Metrics review', duration: 15 },
        { title: 'User feedback discussion', duration: 15 },
        { title: 'Next iteration planning', duration: 10 }
      ]
    },
    {
      id: '4',
      name: 'Brainstorming Session',
      category: 'Creative',
      icon: '💡',
      duration: 45,
      maxAttendees: 6,
      effectivenessScore: 78,
      usageCount: 34,
      agendaItems: [
        { title: 'Problem framing', duration: 10 },
        { title: 'Idea generation', duration: 20 },
        { title: 'Idea clustering', duration: 10 },
        { title: 'Next steps', duration: 5 }
      ]
    }
  ];

  const bestPractices = [
    {
      id: '1',
      title: 'Always have an agenda',
      description: 'Meetings with clear agendas are 67% more effective and end 23% faster',
      icon: <FileText className="h-5 w-5" />,
      adoptionRate: 78,
      impact: 'high'
    },
    {
      id: '2',
      title: 'Start and end on time',
      description: 'Punctual meetings increase attendee satisfaction and reduce calendar conflicts',
      icon: <Clock className="h-5 w-5" />,
      adoptionRate: 82,
      impact: 'medium'
    },
    {
      id: '3',
      title: 'Invite only necessary attendees',
      description: 'Each unnecessary attendee reduces meeting effectiveness by 8-12%',
      icon: <Users className="h-5 w-5" />,
      adoptionRate: 65,
      impact: 'high'
    },
    {
      id: '4',
      title: 'Follow up with action items',
      description: 'Meetings with documented outcomes are 3x more likely to drive results',
      icon: <Target className="h-5 w-5" />,
      adoptionRate: 71,
      impact: 'high'
    },
    {
      id: '5',
      title: 'Use async updates when possible',
      description: 'Status updates can be 70% more efficient when done asynchronously',
      icon: <MessageSquare className="h-5 w-5" />,
      adoptionRate: 43,
      impact: 'medium'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      {/* Templates Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Meeting Templates & Best Practices</CardTitle>
            <Button onClick={() => setShowCreateTemplate(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Template
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {meetingTemplates.map(template => (
              <Card key={template.id} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{template.icon}</span>
                      <div>
                        <h3 className="font-medium text-sm">{template.name}</h3>
                        <p className="text-xs text-muted-foreground">{template.category}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {template.usageCount} uses
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-medium">{template.duration} min</div>
                      <div className="text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">{template.maxAttendees}</div>
                      <div className="text-muted-foreground">Max Attendees</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">{template.effectivenessScore}%</div>
                      <div className="text-muted-foreground">Effectiveness</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-medium mb-2">Agenda Structure</div>
                    <div className="space-y-1">
                      {template.agendaItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-xs">
                          <span className="truncate">{item.title}</span>
                          <span className="text-muted-foreground ml-2">{item.duration}min</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Use Template
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Company Meeting Best Practices</CardTitle>
            <p className="text-sm text-muted-foreground">Last updated Dec 15, 2024</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bestPractices.map(practice => (
              <div key={practice.id} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="text-blue-600 dark:text-blue-400 mt-1">
                  {practice.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Adoption Rate</span>
                      <Progress value={practice.adoptionRate} className="w-20 h-2" />
                      <span className="text-xs font-medium">{practice.adoptionRate}%</span>
                    </div>
                    <Badge variant={getImpactColor(practice.impact)}>
                      {practice.impact} impact
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
