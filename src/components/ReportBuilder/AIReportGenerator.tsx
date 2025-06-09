
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Sparkles, Loader, Database, LayoutDashboard, FileText } from "lucide-react";

interface AIReportGeneratorProps {
  show: boolean;
  onClose: () => void;
  onGenerateReport: (report: any) => void;
}

export const AIReportGenerator = ({
  show,
  onClose,
  onGenerateReport
}: AIReportGeneratorProps) => {
  const [prompt, setPrompt] = useState("");
  const [reportType, setReportType] = useState("dashboard");
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setGenerating(true);
    setProgress(0);

    // Simulate AI generation process
    const steps = [25, 50, 75, 100];
    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(step);
    }

    // Generate a mock report
    const generatedReport = {
      id: Date.now(),
      title: "AI Generated Report",
      sections: [
        {
          id: 1,
          title: "Executive Summary",
          components: [
            {
              id: 1,
              type: "heading",
              config: { text: "Executive Summary", level: 1 }
            },
            {
              id: 2,
              type: "paragraph",
              config: { text: "This report provides insights based on your data analysis requirements." }
            }
          ]
        }
      ]
    };

    setGenerating(false);
    setProgress(0);
    onGenerateReport(generatedReport);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-background rounded-lg shadow-lg w-[600px] max-h-[80vh] overflow-auto">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold">AI Report Generator</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Describe Your Report</h3>
            <Textarea
              placeholder="Describe the report you need in natural language. For example: 'Create a monthly sales report showing revenue by region, top performing products, and year-over-year comparison with forecasts for next quarter.'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Report Type</h3>
            <div className="grid grid-cols-3 gap-3">
              <div
                className={`p-3 border rounded-lg cursor-pointer text-center ${
                  reportType === 'dashboard' ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setReportType('dashboard')}
              >
                <LayoutDashboard className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Dashboard</div>
              </div>
              <div
                className={`p-3 border rounded-lg cursor-pointer text-center ${
                  reportType === 'detailed' ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setReportType('detailed')}
              >
                <FileText className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Detailed Report</div>
              </div>
              <div
                className={`p-3 border rounded-lg cursor-pointer text-center ${
                  reportType === 'executive' ? 'border-primary bg-primary/5' : ''
                }`}
                onClick={() => setReportType('executive')}
              >
                <Database className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Executive Summary</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Include</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="insights" defaultChecked />
                <label htmlFor="insights" className="text-sm">AI Insights & Recommendations</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="predictions" defaultChecked />
                <label htmlFor="predictions" className="text-sm">Predictive Analytics</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="comparisons" defaultChecked />
                <label htmlFor="comparisons" className="text-sm">Comparative Analysis</label>
              </div>
            </div>
          </div>

          {generating && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Generating Report</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || generating}
            className="w-full"
          >
            {generating ? (
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
      </div>
    </div>
  );
};
