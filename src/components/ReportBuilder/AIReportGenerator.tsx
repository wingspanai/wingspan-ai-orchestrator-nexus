
import React, { useState } from "react";
import { X, Sparkles, Loader, Layout, FileText, Briefcase, Database, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";

interface AIReportGeneratorProps {
  show: boolean;
  onClose: () => void;
  onGenerate: (config: any) => void;
}

export function AIReportGenerator({ show, onClose, onGenerate }: AIReportGeneratorProps) {
  const [aiPrompt, setAiPrompt] = useState("");
  const [reportType, setReportType] = useState("dashboard");
  const [selectedDataSources, setSelectedDataSources] = useState<string[]>([]);
  const [includeInsights, setIncludeInsights] = useState(true);
  const [includePredictions, setIncludePredictions] = useState(false);
  const [includeComparisons, setIncludeComparisons] = useState(true);
  const [generatingReport, setGeneratingReport] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const reportTypes = [
    {
      id: "dashboard",
      name: "Dashboard",
      description: "Visual overview with key metrics",
      icon: Layout
    },
    {
      id: "detailed",
      name: "Detailed Report",
      description: "Comprehensive analysis with insights",
      icon: FileText
    },
    {
      id: "executive",
      name: "Executive Summary",
      description: "High-level overview for leadership",
      icon: Briefcase
    }
  ];

  const availableDataSources = [
    { id: "sales", name: "Sales Data", icon: "📊" },
    { id: "marketing", name: "Marketing Data", icon: "📈" },
    { id: "finance", name: "Financial Data", icon: "💰" },
    { id: "operations", name: "Operations Data", icon: "⚙️" },
    { id: "customer", name: "Customer Data", icon: "👥" }
  ];

  const examplePrompts = {
    sales: "Create a monthly sales report showing revenue by region, top performing products, and year-over-year comparison with forecasts for next quarter.",
    financial: "Generate a financial dashboard with cash flow analysis, expense breakdown, and profitability metrics with budget variance analysis.",
    marketing: "Build a marketing performance report including campaign ROI, lead generation metrics, and customer acquisition cost trends."
  };

  const toggleDataSource = (sourceId: string) => {
    setSelectedDataSources(prev =>
      prev.includes(sourceId)
        ? prev.filter(id => id !== sourceId)
        : [...prev, sourceId]
    );
  };

  const useExample = (type: keyof typeof examplePrompts) => {
    setAiPrompt(examplePrompts[type]);
  };

  const generateReport = async () => {
    setGeneratingReport(true);
    setGenerationProgress(0);

    // Simulate generation progress
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setGeneratingReport(false);
          onGenerate({
            prompt: aiPrompt,
            type: reportType,
            dataSources: selectedDataSources,
            options: {
              includeInsights,
              includePredictions,
              includeComparisons
            }
          });
          return 100;
        }
        return prev + 25;
      });
    }, 1000);
  };

  const generationSteps = [
    { label: "Analyzing Data", icon: Database, threshold: 25 },
    { label: "Creating Layout", icon: Layout, threshold: 50 },
    { label: "Building Visualizations", icon: FileText, threshold: 75 },
    { label: "Adding AI Insights", icon: Sparkles, threshold: 100 }
  ];

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            AI Report Generator
          </DialogTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="absolute right-4 top-4">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Prompt Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Describe Your Report</Label>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => useExample('sales')}>
                  Sales Example
                </Button>
                <Button size="sm" variant="outline" onClick={() => useExample('financial')}>
                  Financial Example
                </Button>
                <Button size="sm" variant="outline" onClick={() => useExample('marketing')}>
                  Marketing Example
                </Button>
              </div>
            </div>
            <Textarea
              placeholder="Describe the report you need in natural language. For example: 'Create a monthly sales report showing revenue by region, top performing products, and year-over-year comparison with forecasts for next quarter.'"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              rows={6}
              className="resize-none"
            />
          </div>

          {/* Configuration Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Report Type */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Report Type</Label>
              <div className="space-y-2">
                {reportTypes.map((type) => (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all ${
                      reportType === type.id
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setReportType(type.id)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <type.icon className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-sm">{type.name}</div>
                          <div className="text-xs text-gray-500">{type.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Data Sources */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Data Sources</Label>
              <div className="space-y-2">
                {availableDataSources.map((source) => (
                  <div key={source.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <Checkbox
                      id={source.id}
                      checked={selectedDataSources.includes(source.id)}
                      onCheckedChange={() => toggleDataSource(source.id)}
                    />
                    <span className="text-lg">{source.icon}</span>
                    <label htmlFor={source.id} className="text-sm font-medium flex-1 cursor-pointer">
                      {source.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Include</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-sm">AI Insights & Recommendations</div>
                  <div className="text-xs text-gray-500">Data-driven insights and suggestions</div>
                </div>
                <Switch
                  checked={includeInsights}
                  onCheckedChange={setIncludeInsights}
                />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-sm">Predictive Analytics</div>
                  <div className="text-xs text-gray-500">Future trends and forecasts</div>
                </div>
                <Switch
                  checked={includePredictions}
                  onCheckedChange={setIncludePredictions}
                />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium text-sm">Comparative Analysis</div>
                  <div className="text-xs text-gray-500">Period-over-period comparisons</div>
                </div>
                <Switch
                  checked={includeComparisons}
                  onCheckedChange={setIncludeComparisons}
                />
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <Button
              onClick={generateReport}
              disabled={!aiPrompt.trim() || generatingReport}
              size="lg"
              className="w-full md:w-auto"
            >
              {generatingReport ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Generating Report...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Report
                </>
              )}
            </Button>
          </div>

          {/* Generation Progress */}
          {generatingReport && (
            <div className="space-y-4">
              <div className="flex justify-between">
                {generationSteps.map((step) => (
                  <div
                    key={step.label}
                    className={`flex flex-col items-center gap-2 ${
                      generationProgress >= step.threshold
                        ? "text-green-600"
                        : generationProgress >= step.threshold - 25
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      generationProgress >= step.threshold
                        ? "bg-green-100 border-green-500"
                        : generationProgress >= step.threshold - 25
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300"
                    }`}>
                      {generationProgress >= step.threshold ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    <span className="text-xs font-medium text-center">{step.label}</span>
                  </div>
                ))}
              </div>
              <Progress value={generationProgress} className="w-full" />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
