
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Sparkles } from "lucide-react";

interface PropertiesPanelProps {
  component: any;
  onUpdateComponent: (updates: any) => void;
  onClose: () => void;
}

export const PropertiesPanel = ({
  component,
  onUpdateComponent,
  onClose
}: PropertiesPanelProps) => {
  return (
    <div className="w-80 border-l bg-background">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-semibold">Properties</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-6 overflow-auto h-full">
        {/* Basic Properties */}
        <div className="space-y-3">
          <Label>Component Type</Label>
          <div className="text-sm text-muted-foreground capitalize">
            {component.type.replace(/([A-Z])/g, ' $1').trim()}
          </div>
        </div>

        {/* Chart-specific properties */}
        {(component.type.includes('Chart') || component.type.includes('chart')) && (
          <div className="space-y-4">
            <div>
              <Label>Chart Title</Label>
              <Input
                value={component.config?.title || ''}
                onChange={(e) => onUpdateComponent({ 
                  config: { ...component.config, title: e.target.value }
                })}
                placeholder="Enter chart title"
              />
            </div>
            
            <div>
              <Label>Data Source</Label>
              <Button variant="outline" className="w-full justify-start">
                Select data source...
              </Button>
            </div>
          </div>
        )}

        {/* Text-specific properties */}
        {(component.type === 'heading' || component.type === 'paragraph') && (
          <div className="space-y-4">
            <div>
              <Label>Content</Label>
              <Input
                value={component.config?.text || ''}
                onChange={(e) => onUpdateComponent({ 
                  config: { ...component.config, text: e.target.value }
                })}
                placeholder="Enter text content"
              />
            </div>
            
            {component.type === 'heading' && (
              <div>
                <Label>Heading Level</Label>
                <select 
                  value={component.config?.level || 1}
                  onChange={(e) => onUpdateComponent({ 
                    config: { ...component.config, level: parseInt(e.target.value) }
                  })}
                  className="w-full p-2 border rounded"
                >
                  <option value={1}>H1</option>
                  <option value={2}>H2</option>
                  <option value={3}>H3</option>
                  <option value={4}>H4</option>
                </select>
              </div>
            )}
          </div>
        )}

        {/* AI Suggestions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              AI Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-2 bg-muted rounded text-xs">
              Consider adding a data source to make this chart interactive
            </div>
            <Button size="sm" variant="outline" className="w-full">
              Apply Suggestion
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
