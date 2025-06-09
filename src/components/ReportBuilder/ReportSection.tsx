
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Trash2, Plus } from "lucide-react";

interface ReportSectionProps {
  section: any;
  onDrop: (componentType: string) => void;
  onSelectComponent: (component: any) => void;
  selectedComponent: any;
  viewMode: 'edit' | 'preview';
}

export const ReportSection = ({
  section,
  onDrop,
  onSelectComponent,
  selectedComponent,
  viewMode
}: ReportSectionProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const componentType = e.dataTransfer.getData('componentType');
    if (componentType) {
      onDrop(componentType);
    }
  };

  const renderComponent = (component: any) => {
    const isSelected = selectedComponent?.id === component.id;
    
    return (
      <div
        key={component.id}
        className={`relative group cursor-pointer rounded-lg transition-all ${
          isSelected ? 'ring-2 ring-primary' : 'hover:ring-1 hover:ring-muted-foreground'
        }`}
        onClick={() => onSelectComponent(component)}
      >
        {viewMode === 'edit' && (
          <div className={`absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity ${
            isSelected ? 'opacity-100' : ''
          }`}>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Copy className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        )}
        
        <div className="p-4">
          {component.type === 'heading' && (
            <h2 className="text-2xl font-bold">{component.config?.text || 'Heading'}</h2>
          )}
          {component.type === 'paragraph' && (
            <p className="text-muted-foreground">{component.config?.text || 'Enter your text here...'}</p>
          )}
          {(component.type === 'lineChart' || component.type === 'barChart' || component.type === 'pieChart') && (
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">{component.config?.title || 'Chart'}</div>
                <div className="text-sm text-muted-foreground">Chart visualization will appear here</div>
              </div>
            </div>
          )}
          {component.type === 'table' && (
            <div className="border rounded-lg">
              <div className="p-4 border-b bg-muted/50">
                <h3 className="font-semibold">{component.config?.title || 'Data Table'}</h3>
              </div>
              <div className="p-4">
                <div className="text-sm text-muted-foreground">Table data will appear here</div>
              </div>
            </div>
          )}
          {component.type === 'metric' && (
            <div className="text-center p-6 border rounded-lg">
              <div className="text-3xl font-bold">$1,234</div>
              <div className="text-sm text-muted-foreground mt-1">Metric Value</div>
            </div>
          )}
          {component.type === 'aiSummary' && (
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-2">AI Summary</h3>
              <p className="text-sm text-muted-foreground">
                AI-generated insights and summary will appear here based on your data.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {viewMode === 'edit' && (
        <div className="flex items-center justify-between">
          <Input
            value={section.title}
            className="text-lg font-semibold border-none shadow-none px-0"
            placeholder="Section Title"
          />
          <div className="flex gap-1">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Copy className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      )}

      <div
        className={`min-h-32 rounded-lg border-2 border-dashed transition-colors ${
          isDragOver ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {section.components && section.components.length > 0 ? (
          <div className="space-y-4 p-2">
            {section.components.map(renderComponent)}
          </div>
        ) : (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            {viewMode === 'edit' ? (
              <div className="text-center">
                <Plus className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                <p className="text-sm">Drag components here</p>
              </div>
            ) : (
              <p className="text-sm">No content in this section</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
