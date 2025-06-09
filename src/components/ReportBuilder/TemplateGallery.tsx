
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { X, Eye, BarChart, Users } from "lucide-react";

interface TemplateGalleryProps {
  show: boolean;
  onClose: () => void;
  onUseTemplate: (template: any) => void;
}

export const TemplateGallery = ({
  show,
  onClose,
  onUseTemplate
}: TemplateGalleryProps) => {
  const templates = [
    {
      id: 1,
      name: "Sales Dashboard",
      description: "Comprehensive sales performance tracking",
      preview: "/placeholder.svg",
      pages: 3,
      charts: 5,
      usageCount: 142
    },
    {
      id: 2,
      name: "Financial Report",
      description: "Monthly financial analysis and KPIs",
      preview: "/placeholder.svg",
      pages: 4,
      charts: 7,
      usageCount: 89
    },
    {
      id: 3,
      name: "Marketing Analytics",
      description: "Campaign performance and ROI analysis",
      preview: "/placeholder.svg",
      pages: 2,
      charts: 4,
      usageCount: 67
    }
  ];

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-background rounded-lg shadow-lg w-[90vw] h-[80vh] flex flex-col">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-2xl font-bold">Report Templates</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 border-b">
          <Input placeholder="Search templates..." className="max-w-md" />
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center">
                      <Button variant="secondary">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{template.pages} pages</span>
                      <span>{template.charts} charts</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {template.usageCount}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        onClick={() => onUseTemplate(template)}
                      >
                        Use Template
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Customize
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
