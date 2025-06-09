
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Plus, 
  Folder, 
  Zap, 
  Sparkles, 
  Edit, 
  Copy, 
  Calendar,
  LayoutDashboard
} from "lucide-react";

interface ReportBuilderHeaderProps {
  onCreateNew: () => void;
  onOpenTemplates: () => void;
  onOpenAI: () => void;
}

export const ReportBuilderHeader = ({
  onCreateNew,
  onOpenTemplates,
  onOpenAI,
}: ReportBuilderHeaderProps) => {
  const [aiPrompt, setAiPrompt] = useState("");

  const recentReports = [
    {
      id: 1,
      name: "Sales Performance Q4",
      type: "Dashboard",
      lastEdited: new Date(Date.now() - 2 * 60 * 60 * 1000),
      sharedWith: 5,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Marketing ROI Analysis",
      type: "Detailed Report",
      lastEdited: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      sharedWith: 3,
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Financial Summary",
      type: "Executive Summary",
      lastEdited: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      sharedWith: 12,
      thumbnail: "/placeholder.svg"
    }
  ];

  const handleGenerateAI = () => {
    if (aiPrompt.trim()) {
      onOpenAI();
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <div className="border-b bg-background p-6 space-y-6">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Report Builder</h1>
          <p className="text-muted-foreground mt-1">
            Create professional reports with AI-powered insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={onOpenTemplates}>
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Templates
          </Button>
          <Button onClick={onCreateNew}>
            <Plus className="h-4 w-4 mr-2" />
            New Report
          </Button>
          <Button variant="ghost" onClick={() => {}}>
            <Folder className="h-4 w-4 mr-2" />
            My Reports
          </Button>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Quick Start Card */}
        <Card className="lg:col-span-1 border-2 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Quick Start with AI</h3>
                <p className="text-sm text-muted-foreground">
                  Describe what report you need and AI will create it
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <Input
                placeholder="e.g., Monthly sales performance report with regional breakdown"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGenerateAI()}
              />
              <Button 
                className="w-full" 
                onClick={handleGenerateAI}
                disabled={!aiPrompt.trim()}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <div className="lg:col-span-2">
          <h3 className="font-semibold mb-4">Recent Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentReports.map((report) => (
              <Card key={report.id} className="group cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="relative">
                      <img
                        src={report.thumbnail}
                        alt={report.name}
                        className="w-full h-24 object-cover rounded-md bg-muted"
                      />
                      <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                        {report.type}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium truncate">{report.name}</h4>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <span>{formatTime(report.lastEdited)}</span>
                        <span className="mx-1">•</span>
                        <span>{report.sharedWith} users</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Calendar className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
