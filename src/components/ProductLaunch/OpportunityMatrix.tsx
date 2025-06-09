
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, AlertCircle } from 'lucide-react';
import { Idea } from '@/store/ideationStore';

interface OpportunityMatrixProps {
  ideas: Idea[];
}

interface MatrixData {
  id: string;
  title: string;
  x: number; // Market Opportunity
  y: number; // Feasibility
  size: number; // Resource Requirement
  category: string;
  quadrant: 'quick-wins' | 'strategic-bets' | 'fill-ins' | 'question-marks';
}

export function OpportunityMatrix({ ideas }: OpportunityMatrixProps) {
  // Transform ideas into matrix data
  const matrixData: MatrixData[] = ideas.map(idea => {
    // Mock calculations - in real implementation, these would come from validation data
    const marketOpportunity = Math.random() * 100;
    const feasibility = Math.random() * 100;
    const resourceRequirement = Math.random() * 50 + 10;
    
    let quadrant: MatrixData['quadrant'] = 'question-marks';
    if (marketOpportunity > 50 && feasibility > 50) quadrant = 'quick-wins';
    else if (marketOpportunity > 50 && feasibility <= 50) quadrant = 'strategic-bets';
    else if (marketOpportunity <= 50 && feasibility > 50) quadrant = 'fill-ins';
    
    return {
      id: idea.id,
      title: idea.title,
      x: marketOpportunity,
      y: feasibility,
      size: resourceRequirement,
      category: idea.category,
      quadrant
    };
  });

  const quickWins = matrixData.filter(item => item.quadrant === 'quick-wins');
  const strategicBets = matrixData.filter(item => item.quadrant === 'strategic-bets');
  const fillIns = matrixData.filter(item => item.quadrant === 'fill-ins');
  const questionMarks = matrixData.filter(item => item.quadrant === 'question-marks');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'saas': return 'bg-blue-500';
      case 'hardware': return 'bg-green-500';
      case 'marketplace': return 'bg-purple-500';
      case 'platform': return 'bg-orange-500';
      case 'consumer-app': return 'bg-pink-500';
      case 'enterprise-b2b': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Matrix Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Opportunity Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-96 border border-border rounded-lg overflow-hidden">
            {/* Quadrant backgrounds */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="bg-red-50 border-r border-b border-border"></div>
              <div className="bg-blue-50 border-b border-border"></div>
              <div className="bg-yellow-50 border-r border-border"></div>
              <div className="bg-green-50"></div>
            </div>
            
            {/* Quadrant labels */}
            <div className="absolute top-2 left-2 text-xs font-medium text-red-600">
              Question Marks
            </div>
            <div className="absolute top-2 right-2 text-xs font-medium text-blue-600">
              Strategic Bets
            </div>
            <div className="absolute bottom-2 left-2 text-xs font-medium text-yellow-600">
              Fill Ins
            </div>
            <div className="absolute bottom-2 right-2 text-xs font-medium text-green-600">
              Quick Wins
            </div>
            
            {/* Axis labels */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-xs text-muted-foreground">
              Market Opportunity ($M)
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-90 text-xs text-muted-foreground origin-center">
              Feasibility Score
            </div>
            
            {/* Data points */}
            {matrixData.map((item) => (
              <div
                key={item.id}
                className={`absolute w-3 h-3 rounded-full ${getCategoryColor(item.category)} cursor-pointer hover:scale-125 transition-transform`}
                style={{
                  left: `${item.x}%`,
                  bottom: `${item.y}%`,
                  transform: 'translate(-50%, 50%)'
                }}
                title={`${item.title} - Market: ${item.x.toFixed(1)}%, Feasibility: ${item.y.toFixed(1)}%`}
              />
            ))}
          </div>
          
          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-2">
            {['saas', 'hardware', 'marketplace', 'platform', 'consumer-app', 'enterprise-b2b'].map(category => (
              <div key={category} className="flex items-center gap-1">
                <div className={`w-3 h-3 rounded-full ${getCategoryColor(category)}`} />
                <span className="text-xs text-muted-foreground capitalize">
                  {category.replace('-', ' ')}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <div className="font-medium text-green-800">
                  Focus on {quickWins.length} Quick Win Opportunities
                </div>
                <div className="text-sm text-green-700 mt-1">
                  Combined revenue potential of $8.5M with high feasibility scores. 
                  These ideas can be implemented quickly with existing resources.
                </div>
                <div className="mt-2">
                  {quickWins.slice(0, 3).map(idea => (
                    <Badge key={idea.id} variant="secondary" className="mr-1 mb-1 text-xs">
                      {idea.title.substring(0, 30)}...
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <div className="font-medium text-orange-800">
                  {strategicBets.length} Strategic Bets Require Additional Validation
                </div>
                <div className="text-sm text-orange-700 mt-1">
                  High market potential but lower feasibility scores. Consider pilot programs 
                  or partnerships to reduce implementation risks.
                </div>
                <div className="mt-2">
                  {strategicBets.slice(0, 3).map(idea => (
                    <Badge key={idea.id} variant="outline" className="mr-1 mb-1 text-xs">
                      {idea.title.substring(0, 30)}...
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {fillIns.length > 0 && (
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <div className="font-medium text-yellow-800">
                    {fillIns.length} Fill-In Opportunities
                  </div>
                  <div className="text-sm text-yellow-700 mt-1">
                    Easy to implement but limited market potential. Consider as quick revenue 
                    generators or customer satisfaction improvements.
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quadrant Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{quickWins.length}</div>
            <div className="text-sm text-green-800">Quick Wins</div>
            <div className="text-xs text-muted-foreground mt-1">
              High feasibility, High opportunity
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{strategicBets.length}</div>
            <div className="text-sm text-blue-800">Strategic Bets</div>
            <div className="text-xs text-muted-foreground mt-1">
              Low feasibility, High opportunity
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{fillIns.length}</div>
            <div className="text-sm text-yellow-800">Fill Ins</div>
            <div className="text-xs text-muted-foreground mt-1">
              High feasibility, Low opportunity
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{questionMarks.length}</div>
            <div className="text-sm text-red-800">Question Marks</div>
            <div className="text-xs text-muted-foreground mt-1">
              Low feasibility, Low opportunity
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
