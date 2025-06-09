
import React, { useState } from "react";
import { Edit, Eye, ZoomOut, ZoomIn, Settings, Send, CheckCircle, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ComponentSidebar } from "./ComponentSidebar";
import { DesignArea } from "./DesignArea";
import { PropertiesPanel } from "./PropertiesPanel";

interface ReportCanvasProps {
  report: any;
  selectedComponent: any;
  onSelectComponent: (component: any) => void;
  onConfigureDataSource: () => void;
}

export function ReportCanvas({
  report,
  selectedComponent,
  onSelectComponent,
  onConfigureDataSource
}: ReportCanvasProps) {
  const [viewMode, setViewMode] = useState<"edit" | "preview">("edit");
  const [zoomLevel, setZoomLevel] = useState(100);
  const [autoSaving, setAutoSaving] = useState(false);
  const [reportTitle, setReportTitle] = useState(report?.name || "Untitled Report");

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 200));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Canvas Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Input
              value={reportTitle}
              onChange={(e) => setReportTitle(e.target.value)}
              className="text-lg font-semibold border-none p-0 h-auto focus-visible:ring-0"
            />
            <div className="flex items-center gap-2 text-sm text-gray-500">
              {autoSaving ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Saved
                </>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                size="sm"
                variant={viewMode === "edit" ? "default" : "ghost"}
                onClick={() => setViewMode("edit")}
                className="h-8"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button
                size="sm"
                variant={viewMode === "preview" ? "default" : "ghost"}
                onClick={() => setViewMode("preview")}
                className="h-8"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" onClick={zoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium w-12 text-center">{zoomLevel}%</span>
              <Button size="sm" variant="ghost" onClick={zoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button variant="ghost">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button>
                <Send className="h-4 w-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Workspace */}
      <div className="flex flex-1 overflow-hidden">
        <ComponentSidebar onConfigureDataSource={onConfigureDataSource} />
        
        <DesignArea
          report={report}
          selectedComponent={selectedComponent}
          onSelectComponent={onSelectComponent}
          zoomLevel={zoomLevel}
          viewMode={viewMode}
        />
        
        {selectedComponent && (
          <PropertiesPanel
            selectedComponent={selectedComponent}
            onUpdateComponent={onSelectComponent}
            onClose={() => onSelectComponent(null)}
          />
        )}
      </div>
    </div>
  );
}
