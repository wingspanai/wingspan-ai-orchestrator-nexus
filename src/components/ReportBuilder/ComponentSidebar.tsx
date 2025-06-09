
import React, { useState } from "react";
import { Search, BarChart, Type, Database, Brain, ChevronDown, TrendingUp, PieChart, Grid, AlignLeft, Image, Minus, Table, Hash, GitBranch, FileText, Lightbulb } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ComponentSidebarProps {
  onConfigureDataSource: () => void;
}

export function ComponentSidebar({ onConfigureDataSource }: ComponentSidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const componentCategories = [
    {
      id: "charts",
      name: "Charts",
      icon: BarChart,
      components: [
        { type: "lineChart", name: "Line Chart", icon: TrendingUp },
        { type: "barChart", name: "Bar Chart", icon: BarChart },
        { type: "pieChart", name: "Pie Chart", icon: PieChart },
        { type: "scatterPlot", name: "Scatter Plot", icon: TrendingUp },
        { type: "heatmap", name: "Heatmap", icon: Grid }
      ]
    },
    {
      id: "text",
      name: "Text & Media",
      icon: Type,
      components: [
        { type: "heading", name: "Heading", icon: Type },
        { type: "paragraph", name: "Paragraph", icon: AlignLeft },
        { type: "image", name: "Image", icon: Image },
        { type: "divider", name: "Divider", icon: Minus }
      ]
    },
    {
      id: "data",
      name: "Data",
      icon: Database,
      components: [
        { type: "table", name: "Data Table", icon: Table },
        { type: "metric", name: "Metric Card", icon: Hash },
        { type: "kpi", name: "KPI", icon: TrendingUp },
        { type: "comparison", name: "Comparison", icon: GitBranch }
      ]
    },
    {
      id: "ai",
      name: "AI Insights",
      icon: Brain,
      components: [
        { type: "aiSummary", name: "AI Summary", icon: FileText },
        { type: "aiPrediction", name: "Predictions", icon: TrendingUp },
        { type: "aiRecommendation", name: "Recommendations", icon: Lightbulb }
      ]
    }
  ];

  const handleDragStart = (e: React.DragEvent, componentType: string) => {
    e.dataTransfer.setData("componentType", componentType);
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold mb-3">Components</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {componentCategories.map((category) => (
          <Collapsible key={category.id} defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <category.icon className="h-5 w-5 text-gray-600" />
                <span className="font-medium">{category.name}</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 mt-2">
              {category.components.map((component) => (
                <Card
                  key={component.type}
                  className="p-3 hover:bg-gray-50 cursor-grab active:cursor-grabbing transition-colors"
                  draggable
                  onDragStart={(e) => handleDragStart(e, component.type)}
                >
                  <div className="flex items-center gap-3">
                    <component.icon className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium">{component.name}</span>
                  </div>
                </Card>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
