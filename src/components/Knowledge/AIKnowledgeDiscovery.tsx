
import { useState } from "react";
import { Brain, Send, ThumbsUp, ThumbsDown, Share2, FileText, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface AIKnowledgeDiscoveryProps {
  question: string;
  onQuestionChange: (question: string) => void;
}

export function AIKnowledgeDiscovery({ question, onQuestionChange }: AIKnowledgeDiscoveryProps) {
  const [conversationHistory, setConversationHistory] = useState([
    {
      type: 'question',
      text: 'What is our remote work policy?',
      user: { name: 'You', avatar: '/placeholder.svg' }
    },
    {
      type: 'answer',
      text: 'Based on our HR documentation, our remote work policy allows employees to work from home up to 3 days per week with manager approval. Full-time remote work is available for specific roles with business justification.',
      sources: [
        { id: 1, title: 'Remote Work Policy 2024', type: 'policy' },
        { id: 2, title: 'HR Handbook', type: 'handbook' }
      ]
    }
  ]);

  const knowledgeGaps = [
    {
      id: 1,
      title: "Docker Setup for Windows",
      description: "Multiple users searching for Windows-specific Docker installation instructions",
      searchAttempts: 45,
      affectedUsers: 12,
      priority: "high"
    },
    {
      id: 2,
      title: "New Employee Equipment Process",
      description: "Unclear process for requesting equipment for new hires",
      searchAttempts: 32,
      affectedUsers: 8,
      priority: "medium"
    }
  ];

  const aiSuggestions = [
    {
      id: 1,
      title: "Time Off Request Process",
      preview: "Learn how to request time off through our HR system...",
      relevance: 85,
      icon: "📅"
    },
    {
      id: 2,
      title: "Expense Reimbursement Guide",
      preview: "Step-by-step guide for submitting expense reports...",
      relevance: 78,
      icon: "💰"
    }
  ];

  const askQuestion = (questionText: string) => {
    onQuestionChange(questionText);
  };

  const handleQuestionSubmit = () => {
    if (question.trim()) {
      // Add to conversation history
      setConversationHistory([...conversationHistory, {
        type: 'question',
        text: question,
        user: { name: 'You', avatar: '/placeholder.svg' }
      }]);
      onQuestionChange('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          <h2 className="text-xl font-semibold">AI Knowledge Assistant</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm text-muted-foreground">Ready to help</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversational Search */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Ask anything about your company</h3>
                <div className="flex gap-2 mb-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => askQuestion('What is our remote work policy?')}
                  >
                    Remote work policy
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => askQuestion('How do I submit an expense report?')}
                  >
                    Expense reports
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => askQuestion('What are our Q4 goals?')}
                  >
                    Q4 goals
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Textarea
                  placeholder="Ask a question in natural language..."
                  value={question}
                  onChange={(e) => onQuestionChange(e.target.value)}
                  rows={3}
                />
                <div className="flex justify-end">
                  <Button onClick={handleQuestionSubmit}>
                    <Send className="h-4 w-4 mr-2" />
                    Ask
                  </Button>
                </div>
              </div>

              {/* Conversation History */}
              {conversationHistory.length > 0 && (
                <div className="space-y-4 mt-6">
                  {conversationHistory.map((item, index) => (
                    <div key={index}>
                      {item.type === 'question' ? (
                        <div className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>You</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 bg-muted p-3 rounded-lg">
                            <p>{item.text}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <Brain className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p>{item.text}</p>
                            </div>
                            {item.sources && (
                              <div className="space-y-2">
                                <p className="text-sm font-medium">Sources:</p>
                                <div className="flex flex-wrap gap-2">
                                  {item.sources.map((source) => (
                                    <Badge key={source.id} variant="secondary" className="cursor-pointer">
                                      <FileText className="h-3 w-3 mr-1" />
                                      {source.title}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                Helpful
                              </Button>
                              <Button size="sm" variant="ghost">
                                <ThumbsDown className="h-4 w-4 mr-1" />
                                Not Helpful
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Share2 className="h-4 w-4 mr-1" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Knowledge Gaps & Suggestions */}
        <div className="space-y-6">
          {/* Knowledge Gaps */}
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-semibold">Knowledge Gaps Identified</h3>
              <Lightbulb className="h-4 w-4 text-orange-500" />
            </div>
            <div className="space-y-4">
              {knowledgeGaps.map((gap) => (
                <div key={gap.id} className="p-3 border border-border rounded-lg">
                  <h4 className="font-medium text-sm mb-1">{gap.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{gap.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <span className="text-muted-foreground">Searches:</span>
                      <span className="ml-1 font-medium">{gap.searchAttempts}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Users:</span>
                      <span className="ml-1 font-medium">{gap.affectedUsers}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant={gap.priority === 'high' ? 'destructive' : 'secondary'}>
                      {gap.priority}
                    </Badge>
                    <Button size="sm">Create Article</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Suggestions */}
          <div className="p-6 border border-border rounded-lg bg-card">
            <h3 className="font-semibold mb-4">You might also find these helpful</h3>
            <div className="space-y-3">
              {aiSuggestions.map((suggestion) => (
                <div key={suggestion.id} className="p-3 border border-border rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">{suggestion.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{suggestion.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{suggestion.preview}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{suggestion.relevance}% relevant</span>
                        <Button size="sm" variant="ghost">View →</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
