
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Filter, Search, Download, CheckCircle, Edit, XCircle, Users, Database, Brain } from "lucide-react";

export function DecisionTransparencyLog() {
  const [expandedDecisions, setExpandedDecisions] = useState<number[]>([]);

  const decisions = [
    {
      id: 1,
      timestamp: new Date('2024-06-09T10:30:00'),
      agent: { name: "Sales Assistant", icon: Users },
      action: "Sent follow-up email",
      target: "to prospect John Smith",
      confidence: 94,
      status: "success",
      impactLevel: "medium",
      reasoning: [
        { title: "Engagement Analysis", description: "Customer showed high interest in previous interaction" },
        { title: "Timing Optimization", description: "Optimal follow-up window identified" }
      ],
      review: {
        reviewer: { name: "Sarah Johnson", avatar: "/avatar1.jpg" },
        action: "approved",
        timestamp: new Date('2024-06-09T10:45:00'),
        notes: "Good timing and personalization"
      }
    },
    {
      id: 2,
      timestamp: new Date('2024-06-09T09:15:00'),
      agent: { name: "Data Analyst", icon: Database },
      action: "Generated weekly report",
      target: "for Marketing Department",
      confidence: 98,
      status: "success",
      impactLevel: "low",
      reasoning: [
        { title: "Data Collection", description: "Aggregated data from 5 sources" },
        { title: "Trend Analysis", description: "Identified 3 key performance indicators" }
      ],
      review: null
    },
    {
      id: 3,
      timestamp: new Date('2024-06-09T08:45:00'),
      agent: { name: "Content Creator", icon: Brain },
      action: "Created social media post",
      target: "about product launch",
      confidence: 76,
      status: "pending",
      impactLevel: "high",
      reasoning: [
        { title: "Audience Analysis", description: "Targeted millennial demographic" },
        { title: "Engagement Prediction", description: "Expected 15% engagement rate" }
      ],
      review: {
        reviewer: { name: "Mike Chen", avatar: "/avatar2.jpg" },
        action: "modified",
        timestamp: new Date('2024-06-09T09:00:00'),
        notes: "Adjusted tone to be more professional"
      }
    }
  ];

  const toggleDecision = (id: number) => {
    setExpandedDecisions(prev => 
      prev.includes(id) 
        ? prev.filter(decisionId => decisionId !== id)
        : [...prev, id]
    );
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getImpactColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>AI Decision Log</CardTitle>
              <p className="text-sm text-text-secondary mt-1">
                Complete visibility into every AI decision with explanations and audit trail
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
                <Input placeholder="Search decisions..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Log
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Decision Timeline */}
      <div className="space-y-4">
        {decisions.map((decision, index) => (
          <Card key={decision.id}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(decision.status)}`} />
                  {index < decisions.length - 1 && (
                    <div className="w-0.5 h-16 bg-border/60 mt-2" />
                  )}
                </div>

                {/* Decision content */}
                <div className="flex-1">
                  <div 
                    className="cursor-pointer" 
                    onClick={() => toggleDecision(decision.id)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-text-secondary">
                          {formatTimestamp(decision.timestamp)}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          <decision.agent.icon className="h-3 w-3 mr-1" />
                          {decision.agent.name}
                        </Badge>
                        <Badge className={`text-xs ${getImpactColor(decision.impactLevel)}`}>
                          {decision.impactLevel} Impact
                        </Badge>
                      </div>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform ${
                          expandedDecisions.includes(decision.id) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-text-primary">
                          {decision.action}
                        </span>
                        <span className="text-text-secondary ml-1">
                          {decision.target}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-bg-secondary rounded-full h-2">
                          <div 
                            className="h-2 bg-ai-primary rounded-full" 
                            style={{ width: `${decision.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm text-text-secondary">
                          {decision.confidence}% confident
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {expandedDecisions.includes(decision.id) && (
                    <div className="mt-6 pt-6 border-t border-border/60 space-y-6">
                      {/* Reasoning */}
                      <div>
                        <h4 className="font-medium text-text-primary mb-3">Decision Reasoning</h4>
                        <div className="space-y-3">
                          {decision.reasoning.map((step, i) => (
                            <div key={i} className="flex gap-3">
                              <div className="w-6 h-6 rounded-full bg-ai-primary text-white text-xs flex items-center justify-center font-medium">
                                {i + 1}
                              </div>
                              <div>
                                <div className="font-medium text-sm text-text-primary">{step.title}</div>
                                <div className="text-sm text-text-secondary">{step.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Review status */}
                      <div>
                        <h4 className="font-medium text-text-primary mb-3">Human Review</h4>
                        {decision.review ? (
                          <div className="flex items-center gap-3 p-3 bg-bg-secondary rounded-lg">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={decision.review.reviewer.avatar} />
                              <AvatarFallback>
                                {decision.review.reviewer.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{decision.review.reviewer.name}</span>
                                <Badge 
                                  variant={decision.review.action === 'approved' ? 'default' : 'secondary'}
                                  className="text-xs"
                                >
                                  {decision.review.action === 'approved' && <CheckCircle className="h-3 w-3 mr-1" />}
                                  {decision.review.action === 'modified' && <Edit className="h-3 w-3 mr-1" />}
                                  {decision.review.action === 'overridden' && <XCircle className="h-3 w-3 mr-1" />}
                                  {decision.review.action}
                                </Badge>
                                <span className="text-xs text-text-secondary">
                                  {formatTimestamp(decision.review.timestamp)}
                                </span>
                              </div>
                              {decision.review.notes && (
                                <p className="text-sm text-text-secondary mt-1">{decision.review.notes}</p>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between p-3 bg-bg-secondary rounded-lg">
                            <span className="text-sm text-text-secondary">
                              Automated decision - no review required
                            </span>
                            <Button size="sm" variant="outline">
                              Review Now
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline">Load More Decisions</Button>
      </div>
    </div>
  );
}
