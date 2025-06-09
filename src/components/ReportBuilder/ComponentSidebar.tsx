
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  BarChart, 
  ChevronDown, 
  Type, 
  AlignLeft, 
  Image, 
  Minus, 
  Database, 
  Hash, 
  TrendingUp, 
  FileText, 
  Brain
} from "lucide-react";

interface ComponentSidebarProps {
  onConfigureDataSource: () => void;
}

export const ComponentSidebar = ({ onConfigureDataSource }: ComponentSidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const componentCategories = [
    {
      id: 'charts',
      name: 'Charts',
      icon: BarChart,
      components: [
        { id: 'lineChart', name: 'Line Chart', icon: TrendingUp },
        { id: 'barChart', name: 'Bar Chart', icon: BarChart },
        { id: 'pieChart', name: 'Pie Chart', icon: BarChart },
        { id: 'scatterPlot', name: 'Scatter Plot', icon: TrendingUp },
        { id: 'heatmap', name: 'Heatmap', icon: BarChart },
      ]
    },
    {
      id: 'text',
      name: 'Text & Media',
      icon: Type,
      components: [
        { id: 'heading', name: 'Heading', icon: Type },
        { id: 'paragraph', name: 'Paragraph', icon: AlignLeft },
        { id: 'image', name: 'Image', icon: Image },
        { id: 'divider', name: 'Divider', icon: Minus },
      ]
    },
    {
      id: 'data',
      name: 'Data',
      icon: Database,
      components: [
        { id: 'table', name: 'Data Table', icon: Database },
        { id: 'metric', name: 'Metric Card', icon: Hash },
        { id: 'kpi', name: 'KPI', icon: TrendingUp },
        { id: 'comparison', name: 'Comparison', icon: BarChart },
      ]
    },
    {
      id: 'ai',
      name: 'AI Insights',
      icon: Brain,
      components: [
        { id: 'aiSummary', name: 'AI Summary', icon: FileText },
        { id: 'aiPrediction', name: 'Predictions', icon: TrendingUp },
        { id: 'aiRecommendation', name: 'Recommendations', icon: Brain },
      ]
    }
  ];

  const handleDragStart = (e: React.DragEvent, componentType: string) => {
    e.dataTransfer.setData('componentType', componentType);
  };

  const filteredCategories = componentCategories.map(category => ({
    ...category,
    components: category.components.filter(component =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.components.length > 0);

  return (
    <div className="w-80 border-r bg-background">
      <div className="p-4 border-b">
        <h3 className="font-semibold mb-3">Components</h3>
        <Input
          placeholder="Search components..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="p-4 space-y-2 overflow-auto h-full">
        {filteredCategories.map((category) => (
          <Collapsible key={category.id} defaultOpen>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-2">
                <div className="flex items-center gap-2">
                  <category.icon className="h-4 w-4" />
                  <span className="font-medium">{category.name}</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-1 ml-2">
                {category.components.map((component) => (
                  <div
                    key={component.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, component.id)}
                    className="flex items-center gap-2 p-2 rounded cursor-grab hover:bg-muted transition-colors"
                  >
                    <component.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{component.name}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}

        <div className="pt-4 border-t">
          <Button
            variant="outline"
            className="w-full"
            onClick={onConfigureDataSource}
          >
            <Database className="h-4 w-4 mr-2" />
            Configure Data Source
          </Button>
        </div>
      </div>
    </div>
  );
};
