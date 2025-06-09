
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Loader2, Lightbulb, Target, TrendingUp, Zap } from 'lucide-react';
import { useIdeationStore } from '@/store/ideationStore';

interface AIIdeaGeneratorProps {
  onGenerateIdeas: (type: string) => void;
}

export function AIIdeaGenerator({ onGenerateIdeas }: AIIdeaGeneratorProps) {
  const [activePrompt, setActivePrompt] = useState<string | null>(null);
  const { generatedIdeas, isLoading, saveGeneratedIdea } = useIdeationStore();

  const prompts = [
    {
      id: 'market-gaps',
      title: 'Market Gaps',
      description: 'Find Market Opportunities',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      id: 'customer-problems',
      title: 'Customer Problems',
      description: 'Solve Customer Pain Points',
      icon: Lightbulb,
      color: 'text-yellow-600'
    },
    {
      id: 'tech-trends',
      title: 'Technology Trends',
      description: 'Leverage New Technologies',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      id: 'competitive-gaps',
      title: 'Competitive Gaps',
      description: 'Outmaneuver Competition',
      icon: Zap,
      color: 'text-purple-600'
    }
  ];

  const handleGenerateIdeas = (promptType: string) => {
    setActivePrompt(promptType);
    onGenerateIdeas(promptType);
  };

  const handleSaveIdea = (idea: any) => {
    saveGeneratedIdea(idea);
  };

  const handleExploreIdea = (idea: any) => {
    // Implement idea exploration logic
    console.log('Exploring idea:', idea);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5" />
          AI Idea Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Generation Prompts */}
        <div className="space-y-2">
          {prompts.map((prompt) => {
            const Icon = prompt.icon;
            const isActive = activePrompt === prompt.id;
            
            return (
              <div key={prompt.id} className="space-y-1">
                <span className="text-sm font-medium text-muted-foreground">
                  {prompt.title}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleGenerateIdeas(prompt.id)}
                  disabled={isLoading}
                  className={`w-full justify-start ${isActive ? 'ring-2 ring-primary' : ''}`}
                >
                  {isLoading && activePrompt === prompt.id ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Icon className={`w-4 h-4 mr-2 ${prompt.color}`} />
                  )}
                  {prompt.description}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Generated Ideas */}
        {generatedIdeas.length > 0 && (
          <div className="space-y-3 border-t pt-4">
            <h4 className="text-sm font-semibold">AI Generated Ideas</h4>
            {generatedIdeas.map((idea) => (
              <Card key={idea.id} className="border-dashed">
                <CardContent className="p-3">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h5 className="font-medium text-sm">{idea.title}</h5>
                      <Badge variant="secondary" className="ml-2">
                        Score: {idea.marketScore}/10
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      {idea.rationale}
                    </p>
                    
                    <Badge variant="outline" className="text-xs">
                      {idea.category}
                    </Badge>
                    
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        onClick={() => handleSaveIdea(idea)}
                        className="text-xs h-6"
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleExploreIdea(idea)}
                        className="text-xs h-6"
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {isLoading && (
          <div className="text-center py-4">
            <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Generating innovative ideas...
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
