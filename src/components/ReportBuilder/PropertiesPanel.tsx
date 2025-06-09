
import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PropertiesPanelProps {
  selectedComponent: any;
  onUpdateComponent: (component: any) => void;
  onClose: () => void;
}

export function PropertiesPanel({
  selectedComponent,
  onUpdateComponent,
  onClose
}: PropertiesPanelProps) {
  const [properties, setProperties] = useState(selectedComponent?.properties || {});

  const updateProperty = (key: string, value: any) => {
    const updatedProperties = { ...properties, [key]: value };
    setProperties(updatedProperties);
    onUpdateComponent({
      ...selectedComponent,
      properties: updatedProperties
    });
  };

  const aiSuggestions = [
    "Add trend line to show data direction",
    "Use a color scheme that matches your brand",
    "Consider showing percentages instead of raw numbers"
  ];

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Properties</h3>
          <Button size="sm" variant="ghost" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {selectedComponent?.type === 'lineChart' || 
         selectedComponent?.type === 'barChart' || 
         selectedComponent?.type === 'pieChart' ? (
          <>
            <div className="space-y-4">
              <div>
                <Label htmlFor="dataSource">Data Source</Label>
                <div className="flex gap-2 mt-1">
                  <Select
                    value={properties.dataSource || ""}
                    onValueChange={(value) => updateProperty('dataSource', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select data source..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Data</SelectItem>
                      <SelectItem value="marketing">Marketing Data</SelectItem>
                      <SelectItem value="finance">Financial Data</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="sm" variant="outline">Configure</Button>
                </div>
              </div>

              <div>
                <Label htmlFor="xAxis">X-Axis</Label>
                <Select
                  value={properties.xAxis || ""}
                  onValueChange={(value) => updateProperty('xAxis', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select field..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                    <SelectItem value="region">Region</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="yAxis">Y-Axis</Label>
                <Select
                  value={properties.yAxis || ""}
                  onValueChange={(value) => updateProperty('yAxis', value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select field..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="revenue">Revenue</SelectItem>
                    <SelectItem value="units">Units Sold</SelectItem>
                    <SelectItem value="profit">Profit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Appearance</h4>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="showLegend">Show Legend</Label>
                <Switch
                  id="showLegend"
                  checked={properties.showLegend || false}
                  onCheckedChange={(checked) => updateProperty('showLegend', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="showGrid">Show Grid</Label>
                <Switch
                  id="showGrid"
                  checked={properties.showGrid || false}
                  onCheckedChange={(checked) => updateProperty('showGrid', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="interactive">Enable Interactions</Label>
                <Switch
                  id="interactive"
                  checked={properties.interactive || false}
                  onCheckedChange={(checked) => updateProperty('interactive', checked)}
                />
              </div>
            </div>
          </>
        ) : selectedComponent?.type === 'table' ? (
          <div className="space-y-4">
            <div>
              <Label>Table Configuration</Label>
              <p className="text-sm text-gray-500 mt-1">Configure table columns and data</p>
            </div>
            
            <div>
              <Label htmlFor="dataSource">Data Source</Label>
              <Select
                value={properties.dataSource || ""}
                onValueChange={(value) => updateProperty('dataSource', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select data source..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Data</SelectItem>
                  <SelectItem value="customers">Customer Data</SelectItem>
                  <SelectItem value="products">Product Data</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="pagination">Enable Pagination</Label>
              <Switch
                id="pagination"
                checked={properties.pagination || false}
                onCheckedChange={(checked) => updateProperty('pagination', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="sorting">Enable Sorting</Label>
              <Switch
                id="sorting"
                checked={properties.sorting || false}
                onCheckedChange={(checked) => updateProperty('sorting', checked)}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <Label>Component Properties</Label>
              <p className="text-sm text-gray-500 mt-1">Configure this {selectedComponent?.type} component</p>
            </div>
            
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={properties.title || ""}
                onChange={(e) => updateProperty('title', e.target.value)}
                placeholder="Enter title..."
                className="mt-1"
              />
            </div>
          </div>
        )}

        {/* AI Suggestions Panel */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              AI Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-700 mb-2">{suggestion}</p>
                <Button size="sm" variant="outline" className="h-6 text-xs">
                  Apply
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
