
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Brain, X, Send, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react';

interface AIAssistantPanelProps {
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  message: string;
  timestamp: Date;
}

interface AIInsight {
  id: string;
  type: 'opportunity' | 'risk' | 'optimization' | 'market-signal';
  priority: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  confidence: number;
  suggestedActions: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export function AIAssistantPanel({ onClose }: AIAssistantPanelProps) {
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      message: 'Hello! I\'m your Product Launch AI assistant. I can help you with market analysis, team capacity planning, risk assessment, and launch optimization. What would you like to know?',
      timestamp: new Date()
    }
  ]);

  const [aiInsights] = useState<AIInsight[]>([
    {
      id: '1',
      type: 'risk',
      priority: 'high',
      message: 'Market competition increased by 15% in the last month. Consider accelerating your launch timeline.',
      confidence: 0.85,
      suggestedActions: [
        {
          id: '1',
          title: 'Accelerate Development',
          description: 'Allocate additional resources to critical path items'
        },
        {
          id: '2',
          title: 'Adjust Positioning',
          description: 'Review and refine unique value proposition'
        }
      ]
    },
    {
      id: '2',
      type: 'opportunity',
      priority: 'medium',
      message: 'Your target audience engagement is 23% higher than industry average. Consider expanding marketing efforts.',
      confidence: 0.92,
      suggestedActions: [
        {
          id: '3',
          title: 'Scale Marketing',
          description: 'Increase budget allocation for high-performing channels'
        }
      ]
    },
    {
      id: '3',
      type: 'optimization',
      priority: 'low',
      message: 'Team capacity utilization is at 78%. You have room for additional scope or faster delivery.',
      confidence: 0.76,
      suggestedActions: [
        {
          id: '4',
          title: 'Add Features',
          description: 'Consider adding requested features from user feedback'
        }
      ]
    }
  ]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: chatInput,
      timestamp: new Date()
    };

    const assistantResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      message: 'I understand your question. Based on the current data, I would recommend focusing on your core value proposition and ensuring your development timeline aligns with market opportunities. Would you like me to analyze specific metrics or provide more detailed recommendations?',
      timestamp: new Date()
    };

    setChatHistory(prev => [...prev, userMessage, assistantResponse]);
    setChatInput('');
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'risk': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'optimization': return <Target className="h-4 w-4 text-blue-600" />;
      case 'market-signal': return <Lightbulb className="h-4 w-4 text-yellow-600" />;
      default: return <Brain className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="w-96 h-full border-l border-border bg-background flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Brain className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">Product Launch AI</h3>
              <p className="text-xs text-muted-foreground">Your intelligent assistant</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* AI Insights */}
      <div className="p-4 border-b border-border">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Proactive Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiInsights.map((insight) => (
              <div key={insight.id} className="space-y-2">
                <div className="flex items-start space-x-2">
                  {getInsightIcon(insight.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getPriorityColor(insight.priority)}`}
                      >
                        {insight.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {Math.round(insight.confidence * 100)}% confidence
                      </span>
                    </div>
                    <p className="text-xs text-foreground">{insight.message}</p>
                  </div>
                </div>
                
                {insight.suggestedActions.length > 0 && (
                  <div className="ml-6 space-y-1">
                    {insight.suggestedActions.map((action) => (
                      <Button
                        key={action.id}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start text-xs h-auto py-1"
                      >
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-muted-foreground">{action.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Chat Interface */}
      <div className="flex-1 flex flex-col">
        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {chatHistory.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                {message.message}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-border">
          <div className="flex space-x-2">
            <Input
              placeholder="Ask about market conditions, team capacity, launch risks..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="text-sm"
            />
            <Button size="sm" onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
