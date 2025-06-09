
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Calendar, 
  ThumbsUp, 
  Search, 
  MessageSquare,
  CheckCircle,
  Rocket,
  FileText
} from 'lucide-react';
import { Idea, IdeaStage, useIdeationStore } from '@/store/ideationStore';
import { formatDistanceToNow } from 'date-fns';

interface IdeaCardProps {
  idea: Idea;
  stage: IdeaStage;
}

export function IdeaCard({ idea, stage }: IdeaCardProps) {
  const { voteOnIdea, moveIdeaToStage, selectIdea } = useIdeationStore();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'saas': return 'bg-blue-100 text-blue-800';
      case 'hardware': return 'bg-green-100 text-green-800';
      case 'marketplace': return 'bg-purple-100 text-purple-800';
      case 'platform': return 'bg-orange-100 text-orange-800';
      case 'consumer-app': return 'bg-pink-100 text-pink-800';
      case 'enterprise-b2b': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600';
      case 'high': return 'text-orange-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const handleStartResearch = () => {
    moveIdeaToStage(idea.id, 'researching');
  };

  const handleVote = () => {
    voteOnIdea(idea.id);
  };

  const handleViewDetails = () => {
    selectIdea(idea);
  };

  return (
    <Card className="cursor-pointer transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-sm truncate pr-2">{idea.title}</h3>
          <Badge variant="outline" className={`text-xs ${getCategoryColor(idea.category)}`}>
            {idea.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {idea.description}
        </p>

        {/* Research Progress for Researching Stage */}
        {stage === 'researching' && idea.researchProgress !== undefined && (
          <div className="mb-3">
            <Progress value={idea.researchProgress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Research Progress</span>
              <span>{idea.researchProgress}%</span>
            </div>
            
            <div className="mt-2 space-y-1">
              <div className="flex items-center text-xs">
                <CheckCircle className={`w-3 h-3 mr-2 ${idea.marketSizeCompleted ? 'text-green-500' : 'text-gray-300'}`} />
                <span>Market Size Analysis</span>
              </div>
              <div className="flex items-center text-xs">
                <CheckCircle className={`w-3 h-3 mr-2 ${idea.competitorAnalysisCompleted ? 'text-green-500' : 'text-gray-300'}`} />
                <span>Competitor Analysis</span>
              </div>
              <div className="flex items-center text-xs">
                <CheckCircle className={`w-3 h-3 mr-2 ${idea.customerResearchCompleted ? 'text-green-500' : 'text-gray-300'}`} />
                <span>Customer Research</span>
              </div>
              <div className="flex items-center text-xs">
                <CheckCircle className={`w-3 h-3 mr-2 ${idea.technicalFeasibilityCompleted ? 'text-green-500' : 'text-gray-300'}`} />
                <span>Technical Feasibility</span>
              </div>
            </div>

            {idea.estimatedTAM && (
              <div className="mt-2">
                <Badge variant="secondary" className="text-xs">
                  ${idea.estimatedTAM}M TAM
                </Badge>
              </div>
            )}
          </div>
        )}

        {/* Validation Metrics for Validating Stage */}
        {stage === 'validating' && (
          <div className="mb-3 space-y-2">
            <div className="flex justify-between text-xs">
              <span>Survey Responses</span>
              <span>{idea.surveyResponses || 0}/100</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Interest Score</span>
              <span>{idea.interestScore || 0}/10</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>MVP Signups</span>
              <span>{idea.mvpSignups || 0}</span>
            </div>
            {idea.daysInValidation && (
              <div className="text-xs text-muted-foreground">
                {idea.daysInValidation} days in validation
              </div>
            )}
          </div>
        )}

        {/* Validation Summary for Validated Stage */}
        {stage === 'validated' && (
          <div className="mb-3">
            <Badge variant="default" className="mb-2 text-xs">
              <CheckCircle className="w-3 h-3 mr-1" />
              Ready for Development
            </Badge>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Market Validation</span>
                <span>{idea.marketValidationScore || 0}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Technical Feasibility</span>
                <span>{idea.technicalFeasibilityScore || 0}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Business Case</span>
                <span>{idea.businessCaseScore || 0}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {idea.submitter}
            </div>
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {formatDistanceToNow(idea.createdAt, { addSuffix: true })}
            </div>
            <div className="flex items-center">
              <ThumbsUp className="w-3 h-3 mr-1" />
              {idea.votes}
            </div>
          </div>
          {idea.priority && (
            <span className={`font-medium ${getPriorityColor(idea.priority)}`}>
              {idea.priority}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-1">
          {stage === 'raw' && (
            <Button
              size="sm"
              variant="outline"
              onClick={handleStartResearch}
              className="text-xs h-7"
            >
              <Search className="w-3 h-3 mr-1" />
              Research
            </Button>
          )}
          
          <Button
            size="sm"
            variant="outline"
            onClick={handleVote}
            className="text-xs h-7"
          >
            <ThumbsUp className="w-3 h-3 mr-1" />
            Vote
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            onClick={handleViewDetails}
            className="text-xs h-7"
          >
            <MessageSquare className="w-3 h-3 mr-1" />
            Details
          </Button>

          {stage === 'validated' && (
            <Button
              size="sm"
              variant="default"
              className="text-xs h-7"
            >
              <Rocket className="w-3 h-3 mr-1" />
              Create Product
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
