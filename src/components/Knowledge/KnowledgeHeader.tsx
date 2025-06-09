
import { Upload, Plus, FileText, Users, Search, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface KnowledgeHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function KnowledgeHeader({ searchQuery, onSearchChange }: KnowledgeHeaderProps) {
  // Mock data
  const totalDocuments = 2847;
  const activeContributors = 156;
  const searchesPerDay = 892;
  const aiInsightsGenerated = 234;
  const documentsAdded = 23;
  const topSearchTerm = "expense policy";
  const insightAccuracy = 94;
  
  const knowledgeCoverage = 87;
  const contentFreshness = 76;
  const contentQuality = 92;
  const accessibility = 88;

  const topContributors = [
    { id: 1, name: "Alice", avatar: "/placeholder.svg" },
    { id: 2, name: "Bob", avatar: "/placeholder.svg" },
    { id: 3, name: "Carol", avatar: "/placeholder.svg" }
  ];

  return (
    <div className="space-y-6">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Knowledge Management</h1>
          <p className="text-muted-foreground">Centralized company intelligence and insights</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search all knowledge..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-80"
            />
          </div>
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Article
          </Button>
        </div>
      </div>

      {/* Knowledge Overview */}
      <div className="space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{totalDocuments.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Documents</p>
                <p className="text-xs text-green-600">{documentsAdded} added this week</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-2">
              <Users className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{activeContributors}</p>
                <p className="text-sm text-muted-foreground">Contributors</p>
                <div className="flex -space-x-1 mt-1">
                  {topContributors.slice(0, 3).map((user) => (
                    <Avatar key={user.id} className="h-6 w-6 border-2 border-background">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="text-xs">{user.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-2">
              <Search className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">{searchesPerDay}</p>
                <p className="text-sm text-muted-foreground">Daily Searches</p>
                <p className="text-xs text-muted-foreground">Top: "{topSearchTerm}"</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{aiInsightsGenerated}</p>
                <p className="text-sm text-muted-foreground">AI Insights</p>
                <p className="text-xs text-blue-600">{insightAccuracy}% accuracy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Health Bar */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <h3 className="font-semibold mb-4">Knowledge Health</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Coverage</span>
                <span>{knowledgeCoverage}%</span>
              </div>
              <Progress value={knowledgeCoverage} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Freshness</span>
                <span>{contentFreshness}%</span>
              </div>
              <Progress value={contentFreshness} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Quality</span>
                <span>{contentQuality}%</span>
              </div>
              <Progress value={contentQuality} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Accessibility</span>
                <span>{accessibility}%</span>
              </div>
              <Progress value={accessibility} className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
