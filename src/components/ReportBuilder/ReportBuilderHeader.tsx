
import React, { useState } from "react";
import { Search, Plus, Folder, Layout, Zap, Sparkles, Edit, Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReportBuilderHeaderProps {
  onCreateNew: () => void;
  onOpenTemplates: () => void;
  onOpenLibrary: () => void;
  onGenerateWithAI: (prompt: string) => void;
  recentReports: any[];
}

export function ReportBuilderHeader({
  onCreateNew,
  onOpenTemplates,
  onOpenLibrary,
  onGenerateWithAI,
  recentReports
}: ReportBuilderHeaderProps) {
  const [aiPrompt, setAiPrompt] = useState("");

  const handleAIGenerate = () => {
    if (aiPrompt.trim()) {
      onGenerateWithAI(aiPrompt);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 p-6 space-y-6">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Report Builder</h1>
          <p className="text-gray-600 mt-2">
            Create professional reports with AI-powered insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search integrations..."
              className="pl-10 w-80"
            />
          </div>
          <Button onClick={onOpenTemplates} variant="ghost">
            <Layout className="h-4 w-4 mr-2" />
            Templates
          </Button>
          <Button onClick={onCreateNew}>
            <Plus className="h-4 w-4 mr-2" />
            New Report
          </Button>
          <Button onClick={onOpenLibrary} variant="ghost">
            <Folder className="h-4 w-4 mr-2" />
            My Reports
          </Button>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="space-y-4">
        <Card className="relative overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle>Quick Start with AI</CardTitle>
                <p className="text-sm text-gray-600">
                  Describe what report you need and AI will create it for you
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="e.g., Monthly sales performance report with regional breakdown"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAIGenerate()}
                className="flex-1"
              />
              <Button onClick={handleAIGenerate} disabled={!aiPrompt.trim()}>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports Grid */}
        {recentReports.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentReports.map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 truncate">{report.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span>{report.lastEdited}</span>
                        <span>•</span>
                        <span>{report.sharedWith} users</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="w-full h-20 bg-gray-100 rounded border"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
