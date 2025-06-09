
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ComponentSidebar } from "./ComponentSidebar";
import { PropertiesPanel } from "./PropertiesPanel";
import { ReportSection } from "./ReportSection";
import { 
  Edit, 
  Eye, 
  Settings, 
  Send, 
  ZoomIn, 
  ZoomOut, 
  Plus,
  Loader,
  CheckCircle
} from "lucide-react";

interface ReportCanvasProps {
  report: any;
  onUpdateReport: (report: any) => void;
  onConfigureDataSource: () => void;
}

export const ReportCanvas = ({
  report,
  onUpdateReport,
  onConfigureDataSource,
}: ReportCanvasProps) => {
  const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit');
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [autoSaving, setAutoSaving] = useState(false);

  const handleTitleChange = (newTitle: string) => {
    onUpdateReport({ ...report, title: newTitle });
  };

  const addNewSection = () => {
    const newSection = {
      id: Date.now(),
      title: `Section ${(report.sections?.length || 0) + 1}`,
      components: []
    };
    onUpdateReport({
      ...report,
      sections: [...(report.sections || []), newSection]
    });
  };

  const handleComponentDrop = (componentType: string, sectionId: string) => {
    const newComponent = {
      id: Date.now(),
      type: componentType,
      config: getDefaultComponentConfig(componentType),
    };

    const updatedSections = (report.sections || []).map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          components: [...section.components, newComponent]
        };
      }
      return section;
    });

    onUpdateReport({
      ...report,
      sections: updatedSections
    });
  };

  const getDefaultComponentConfig = (type: string) => {
    switch (type) {
      case 'lineChart':
        return { chartType: 'line', title: 'Line Chart', width: '100%', height: '300px' };
      case 'barChart':
        return { chartType: 'bar', title: 'Bar Chart', width: '100%', height: '300px' };
      case 'table':
        return { title: 'Data Table', columns: [], filters: [] };
      case 'heading':
        return { text: 'Heading', level: 1 };
      case 'paragraph':
        return { text: 'Enter your text here...' };
      default:
        return {};
    }
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 200));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));

  return (
    <div className="flex-1 flex h-full">
      {/* Canvas Header */}
      <div className="absolute top-0 left-0 right-0 bg-background border-b p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Input
              value={report.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="text-lg font-semibold border-none shadow-none px-0 focus-visible:ring-0"
              placeholder="Untitled Report"
            />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {autoSaving ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Saved
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex rounded-lg border">
              <Button
                variant={viewMode === 'edit' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('edit')}
                className="rounded-r-none"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <Button
                variant={viewMode === 'preview' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('preview')}
                className="rounded-l-none"
              >
                <Eye className="h-4 w-4 mr-1" />
                Preview
              </Button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={zoomOut}>
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm min-w-[50px] text-center">{zoomLevel}%</span>
              <Button variant="ghost" size="sm" onClick={zoomIn}>
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            {/* Actions */}
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-1" />
              Settings
            </Button>
            <Button size="sm">
              <Send className="h-4 w-4 mr-1" />
              Publish
            </Button>
          </div>
        </div>
      </div>

      {/* Canvas Workspace */}
      <div className="flex w-full pt-20">
        {/* Component Sidebar */}
        {viewMode === 'edit' && (
          <ComponentSidebar onConfigureDataSource={onConfigureDataSource} />
        )}

        {/* Design Area */}
        <div className="flex-1 overflow-auto bg-muted/20 p-6">
          <div 
            className="max-w-4xl mx-auto bg-background rounded-lg shadow-sm min-h-[600px]"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            <div className="p-8 space-y-6">
              {(report.sections || []).map((section) => (
                <ReportSection
                  key={section.id}
                  section={section}
                  onDrop={(componentType) => handleComponentDrop(componentType, section.id)}
                  onSelectComponent={setSelectedComponent}
                  selectedComponent={selectedComponent}
                  viewMode={viewMode}
                />
              ))}

              {viewMode === 'edit' && (
                <Button
                  variant="outline"
                  onClick={addNewSection}
                  className="w-full h-16 border-dashed"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        {viewMode === 'edit' && selectedComponent && (
          <PropertiesPanel
            component={selectedComponent}
            onUpdateComponent={(updates) => {
              // Update component logic here
              console.log('Updating component:', updates);
            }}
            onClose={() => setSelectedComponent(null)}
          />
        )}
      </div>
    </div>
  );
};
