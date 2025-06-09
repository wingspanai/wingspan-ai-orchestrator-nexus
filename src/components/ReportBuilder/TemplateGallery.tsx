
import React, { useState } from "react";
import { Search, X, Eye, Layers, BarChart, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TemplateGalleryProps {
  show: boolean;
  onClose: () => void;
  onUseTemplate: (template: any) => void;
}

export function TemplateGallery({ show, onClose, onUseTemplate }: TemplateGalleryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const templates = [
    {
      id: 1,
      name: "Monthly Sales Report",
      description: "Comprehensive sales performance analysis with regional breakdown",
      category: "sales",
      preview: "/placeholder.svg",
      pages: 3,
      charts: 5,
      usageCount: 124
    },
    {
      id: 2,
      name: "Financial Dashboard",
      description: "Executive financial overview with KPIs and trends",
      category: "financial",
      preview: "/placeholder.svg",
      pages: 2,
      charts: 8,
      usageCount: 89
    },
    {
      id: 3,
      name: "Marketing Campaign Analysis",
      description: "Campaign performance metrics and ROI analysis",
      category: "marketing",
      preview: "/placeholder.svg",
      pages: 4,
      charts: 6,
      usageCount: 156
    },
    {
      id: 4,
      name: "Operational Metrics",
      description: "Operational efficiency and performance indicators",
      category: "operations",
      preview: "/placeholder.svg",
      pages: 2,
      charts: 4,
      usageCount: 67
    }
  ];

  const filteredTemplates = templates.filter(template => 
    (selectedCategory === "all" || template.category === selectedCategory) &&
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Report Templates</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All Templates</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="h-40 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                      <div className="text-4xl">📊</div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                      <Button size="sm" variant="secondary">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Layers className="h-3 w-3" />
                        {template.pages} pages
                      </div>
                      <div className="flex items-center gap-1">
                        <BarChart className="h-3 w-3" />
                        {template.charts} charts
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {template.usageCount} uses
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button onClick={() => onUseTemplate(template)} className="flex-1">
                        Use Template
                      </Button>
                      <Button variant="ghost" size="sm">
                        Customize
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Create Custom Template Card */}
              <Card className="border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer">
                <CardContent className="p-8 text-center">
                  <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-700 mb-2">Create Custom Template</h3>
                  <p className="text-sm text-gray-500 mb-4">Save your current report as a reusable template</p>
                  <Button variant="outline">Create Template</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
