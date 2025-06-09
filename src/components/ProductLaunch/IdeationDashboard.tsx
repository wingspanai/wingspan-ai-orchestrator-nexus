
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Mic, 
  Brain, 
  Grid, 
  Calendar, 
  Search,
  ThumbsUp,
  MessageSquare,
  Users,
  CheckCircle,
  Rocket,
  TrendingUp,
  AlertCircle,
  Plus,
  Eye,
  Pause
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useIdeationStore } from '@/store/ideationStore';
import { IdeaCard } from './IdeaCard';
import { AIIdeaGenerator } from './AIIdeaGenerator';
import { OpportunityMatrix } from './OpportunityMatrix';

type ViewMode = 'board' | 'matrix' | 'timeline';

export function IdeationDashboard() {
  const [view, setView] = useState<ViewMode>('board');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStage, setFilterStage] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  
  const { 
    ideas, 
    addIdea, 
    updateIdea,
    generateAIIdeas,
    getIdeasByStage,
    isLoading
  } = useIdeationStore();

  const rawIdeas = getIdeasByStage('raw');
  const researchingIdeas = getIdeasByStage('researching');
  const validatingIdeas = getIdeasByStage('validating');
  const validatedIdeas = getIdeasByStage('validated');

  const handleQuickIdea = (ideaText: string) => {
    if (ideaText.trim()) {
      addIdea({
        title: ideaText.substring(0, 50) + (ideaText.length > 50 ? '...' : ''),
        description: ideaText,
        category: 'saas',
        stage: 'raw',
        submitter: 'Current User',
        votes: 0,
        createdAt: new Date()
      });
    }
  };

  const handleGenerateIdeas = async (type: string) => {
    await generateAIIdeas(type);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Product Ideation Hub</h1>
            <p className="text-purple-100 mt-2">
              AI-powered idea generation, validation, and prioritization
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-center text-white">
              <div className="text-2xl font-bold">{ideas.length}</div>
              <div className="text-sm text-purple-100">Active Ideas</div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl font-bold">{validatedIdeas.length}</div>
              <div className="text-sm text-purple-100">Validated</div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl font-bold">$2.5M</div>
              <div className="text-sm text-purple-100">Potential Value</div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl font-bold">{researchingIdeas.length + validatingIdeas.length}</div>
              <div className="text-sm text-purple-100">In Validation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Left Panel - Idea Input & AI Assistant */}
        <aside className="col-span-3">
          <div className="space-y-4">
            {/* Quick Idea Capture */}
            <Card>
              <CardHeader>
                <CardTitle>Capture New Idea</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Describe your product idea..."
                    className="min-h-[100px]"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.ctrlKey) {
                        handleQuickIdea(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Detailed
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mic className="w-4 h-4 mr-2" />
                      Voice
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Idea Generator */}
            <AIIdeaGenerator onGenerateIdeas={handleGenerateIdeas} />
          </div>
        </aside>

        {/* Main Content - Idea Pipeline */}
        <main className="col-span-9">
          {/* Pipeline Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <Button
                variant={view === 'board' ? 'default' : 'outline'}
                onClick={() => setView('board')}
                size="sm"
              >
                <Grid className="w-4 h-4 mr-2" />
                Board View
              </Button>
              <Button
                variant={view === 'matrix' ? 'default' : 'outline'}
                onClick={() => setView('matrix')}
                size="sm"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Opportunity Matrix
              </Button>
              <Button
                variant={view === 'timeline' ? 'default' : 'outline'}
                onClick={() => setView('timeline')}
                size="sm"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Validation Timeline
              </Button>
            </div>

            <div className="flex gap-2">
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="hardware">Hardware</SelectItem>
                  <SelectItem value="marketplace">Marketplace</SelectItem>
                  <SelectItem value="platform">Platform</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStage} onValueChange={setFilterStage}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  <SelectItem value="raw">Raw Ideas</SelectItem>
                  <SelectItem value="researching">Researching</SelectItem>
                  <SelectItem value="validating">Validating</SelectItem>
                  <SelectItem value="validated">Validated</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date Created</SelectItem>
                  <SelectItem value="score">Opportunity Score</SelectItem>
                  <SelectItem value="votes">Team Votes</SelectItem>
                  <SelectItem value="progress">Validation Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Content Views */}
          {view === 'board' && (
            <div className="grid grid-cols-4 gap-4">
              {/* Raw Ideas Column */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Raw Ideas</h3>
                  <Badge variant="secondary">{rawIdeas.length}</Badge>
                </div>
                <div className="space-y-3">
                  {rawIdeas.map(idea => (
                    <IdeaCard key={idea.id} idea={idea} stage="raw" />
                  ))}
                </div>
              </div>

              {/* Researching Column */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Researching</h3>
                  <Badge variant="secondary">{researchingIdeas.length}</Badge>
                </div>
                <div className="space-y-3">
                  {researchingIdeas.map(idea => (
                    <IdeaCard key={idea.id} idea={idea} stage="researching" />
                  ))}
                </div>
              </div>

              {/* Validating Column */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Validating</h3>
                  <Badge variant="secondary">{validatingIdeas.length}</Badge>
                </div>
                <div className="space-y-3">
                  {validatingIdeas.map(idea => (
                    <IdeaCard key={idea.id} idea={idea} stage="validating" />
                  ))}
                </div>
              </div>

              {/* Validated Column */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Validated</h3>
                  <Badge variant="default">{validatedIdeas.length}</Badge>
                </div>
                <div className="space-y-3">
                  {validatedIdeas.map(idea => (
                    <IdeaCard key={idea.id} idea={idea} stage="validated" />
                  ))}
                </div>
              </div>
            </div>
          )}

          {view === 'matrix' && (
            <OpportunityMatrix ideas={ideas} />
          )}

          {view === 'timeline' && (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Validation Timeline</h3>
                  <p className="text-muted-foreground">
                    Timeline view for tracking validation progress will be implemented here
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}
