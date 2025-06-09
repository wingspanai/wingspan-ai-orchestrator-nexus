
import React, { useState } from "react";
import { Plus, Copy, Trash2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DesignAreaProps {
  report: any;
  selectedComponent: any;
  onSelectComponent: (component: any) => void;
  zoomLevel: number;
  viewMode: "edit" | "preview";
}

export function DesignArea({
  report,
  selectedComponent,
  onSelectComponent,
  zoomLevel,
  viewMode
}: DesignAreaProps) {
  const [sections, setSections] = useState(report?.sections || []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData("componentType");
    
    if (componentType) {
      const newComponent = {
        id: Date.now(),
        type: componentType,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        width: 400,
        height: 300,
        properties: {}
      };
      
      // Add to the first section or create a new one
      if (sections.length === 0) {
        setSections([{
          id: Date.now(),
          title: "Section 1",
          components: [newComponent]
        }]);
      } else {
        setSections(prev => prev.map((section, index) => 
          index === 0 
            ? { ...section, components: [...section.components, newComponent] }
            : section
        ));
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const addNewSection = () => {
    const newSection = {
      id: Date.now(),
      title: `Section ${sections.length + 1}`,
      components: []
    };
    setSections(prev => [...prev, newSection]);
  };

  const renderComponent = (component: any) => {
    switch (component.type) {
      case 'lineChart':
      case 'barChart':
      case 'pieChart':
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm font-medium text-blue-700">{component.type}</div>
            </div>
          </div>
        );
      case 'table':
        return (
          <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 border-2 border-dashed border-green-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl mb-2">📋</div>
              <div className="text-sm font-medium text-green-700">Data Table</div>
            </div>
          </div>
        );
      case 'heading':
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-purple-700">Heading Component</div>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-700">{component.type}</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className="flex-1 overflow-auto bg-gray-100 p-8"
      style={{ transform: `scale(${zoomLevel / 100})` }}
    >
      <div
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm min-h-[800px]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {sections.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8">
              <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Start Building Your Report</h3>
              <p className="text-gray-500 mb-4">Drag components from the sidebar to begin</p>
              <Button onClick={addNewSection}>
                <Plus className="h-4 w-4 mr-2" />
                Add Section
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-8">
            {sections.map((section) => (
              <Card key={section.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[200px]">
                  {section.components.length === 0 ? (
                    <div className="col-span-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Drag components here</p>
                    </div>
                  ) : (
                    section.components.map((component) => (
                      <div
                        key={component.id}
                        className={`relative p-2 rounded-lg cursor-pointer transition-all ${
                          selectedComponent?.id === component.id
                            ? "ring-2 ring-blue-500 bg-blue-50"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => onSelectComponent(component)}
                      >
                        {selectedComponent?.id === component.id && (
                          <div className="absolute top-1 right-1 flex gap-1 z-10">
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                              <Settings className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                              <Copy className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                        <div className="h-40">
                          {renderComponent(component)}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            ))}
            
            <div className="text-center">
              <Button onClick={addNewSection} variant="ghost">
                <Plus className="h-4 w-4 mr-2" />
                Add Section
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
