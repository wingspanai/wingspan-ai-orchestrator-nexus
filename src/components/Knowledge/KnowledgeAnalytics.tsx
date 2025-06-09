
import { TrendingUp, Clock, Star, CheckCircle, Lightbulb } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export function KnowledgeAnalytics() {
  // Mock analytics data
  const usageGrowth = 23;
  const avgSessionDuration = 8.5;
  const searchSuccessRate = 87;
  const searchSuccessTrend = 5;
  const avgClickThrough = 45;
  const failedSearches = 156;
  const avgContentRating = 4.3;
  const freshContent = 45;
  const recentContent = 35;
  const outdatedContent = 20;
  const verifiedContent = 78;
  const unverifiedCount = 89;

  const topSearchTerms = [
    { text: "remote work", weight: 8 },
    { text: "expense policy", weight: 7 },
    { text: "API documentation", weight: 6 },
    { text: "onboarding", weight: 5 },
    { text: "time off", weight: 4 },
    { text: "benefits", weight: 4 },
    { text: "security", weight: 3 }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < fullStars
                ? 'fill-yellow-400 text-yellow-400'
                : i === fullStars && hasHalfStar
                ? 'fill-yellow-400/50 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Knowledge Analytics</h2>
        <select className="px-3 py-2 border border-input rounded-md bg-background text-sm">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Usage Analytics */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="font-semibold mb-4">Content Usage Analytics</h3>
          <div className="h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
            <p className="text-muted-foreground">Usage trend chart</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm">Knowledge usage up {usageGrowth}% this month</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm">Average session: {avgSessionDuration} minutes</span>
            </div>
          </div>
        </div>

        {/* Search Analytics */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="font-semibold mb-4">Search Performance</h3>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{searchSuccessRate}%</p>
              <p className="text-sm text-muted-foreground">Search Success Rate</p>
              <p className="text-xs text-green-600">
                {searchSuccessTrend > 0 ? '↑' : '↓'} {Math.abs(searchSuccessTrend)}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{avgClickThrough}%</p>
              <p className="text-sm text-muted-foreground">Avg. Click-through</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">{failedSearches}</p>
              <p className="text-sm text-muted-foreground">Failed Searches</p>
              <p className="text-xs text-muted-foreground">Content opportunities</p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-2">Top Search Terms</h4>
            <div className="flex flex-wrap gap-2">
              {topSearchTerms.map((term) => (
                <span
                  key={term.text}
                  className={`px-2 py-1 rounded text-xs border cursor-pointer ${
                    term.weight > 6
                      ? 'bg-blue-100 border-blue-300 text-blue-800'
                      : term.weight > 4
                      ? 'bg-green-100 border-green-300 text-green-800'
                      : 'bg-gray-100 border-gray-300 text-gray-800'
                  }`}
                >
                  {term.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Quality Metrics */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="font-semibold mb-4">Content Quality Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-yellow-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Average Rating</p>
                <div className="flex items-center gap-2">
                  {renderStars(avgContentRating)}
                  <span className="text-sm font-medium">{avgContentRating}/5</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-500" />
              <div className="flex-1">
                <p className="text-sm font-medium mb-2">Content Age</p>
                <div className="space-y-1">
                  <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: `${freshContent}%` }} />
                    <div className="bg-yellow-500 h-full" style={{ width: `${recentContent}%` }} />
                    <div className="bg-red-500 h-full" style={{ width: `${outdatedContent}%` }} />
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Fresh ({freshContent}%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <span>Recent ({recentContent}%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Outdated ({outdatedContent}%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Verified Content</p>
                <div className="flex items-center gap-2">
                  <Progress value={verifiedContent} className="flex-1 h-2" />
                  <span className="text-sm font-medium">{verifiedContent}%</span>
                </div>
                <p className="text-xs text-muted-foreground">{unverifiedCount} need review</p>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              <Lightbulb className="h-4 w-4 mr-2" />
              View Improvement Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
