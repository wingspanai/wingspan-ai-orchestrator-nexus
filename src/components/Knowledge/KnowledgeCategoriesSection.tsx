
import { Grid3x3, GitBranch, Share2, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface KnowledgeCategoriesSectionProps {
  view: string;
  onViewChange: (view: string) => void;
}

export function KnowledgeCategoriesSection({ view, onViewChange }: KnowledgeCategoriesSectionProps) {
  // Mock data
  const knowledgeCategories = [
    {
      id: 1,
      name: "HR & Policies",
      icon: "👥",
      color: "bg-blue-50 border-blue-200",
      itemCount: 234,
      growthTrend: 12,
      subCategories: [
        { id: 1, name: "Benefits", count: 45 },
        { id: 2, name: "Remote Work", count: 32 },
        { id: 3, name: "Time Off", count: 28 },
        { id: 4, name: "Performance", count: 21 },
        { id: 5, name: "Onboarding", count: 18 }
      ],
      recentItems: [
        { id: 1, name: "Updated Remote Work Policy", type: "policy", updatedAt: new Date() },
        { id: 2, name: "New Benefits Guide", type: "guide", updatedAt: new Date() }
      ]
    },
    {
      id: 2,
      name: "Technical Documentation",
      icon: "🔧",
      color: "bg-green-50 border-green-200",
      itemCount: 456,
      growthTrend: 8,
      subCategories: [
        { id: 1, name: "API Docs", count: 125 },
        { id: 2, name: "Setup Guides", count: 89 },
        { id: 3, name: "Troubleshooting", count: 67 },
        { id: 4, name: "Architecture", count: 45 }
      ],
      recentItems: [
        { id: 1, name: "API v2.1 Documentation", type: "api", updatedAt: new Date() },
        { id: 2, name: "Docker Setup Guide", type: "guide", updatedAt: new Date() }
      ]
    },
    {
      id: 3,
      name: "Sales & Marketing",
      icon: "📈",
      color: "bg-purple-50 border-purple-200",
      itemCount: 189,
      growthTrend: -3,
      subCategories: [
        { id: 1, name: "Sales Process", count: 56 },
        { id: 2, name: "Marketing Materials", count: 43 },
        { id: 3, name: "Customer Stories", count: 32 },
        { id: 4, name: "Pricing", count: 28 }
      ],
      recentItems: [
        { id: 1, name: "Q4 Sales Playbook", type: "playbook", updatedAt: new Date() },
        { id: 2, name: "Customer Case Studies", type: "case-study", updatedAt: new Date() }
      ]
    },
    {
      id: 4,
      name: "Finance & Operations",
      icon: "💰",
      color: "bg-orange-50 border-orange-200",
      itemCount: 123,
      growthTrend: 15,
      subCategories: [
        { id: 1, name: "Expense Policy", count: 34 },
        { id: 2, name: "Budget Planning", count: 28 },
        { id: 3, name: "Vendor Management", count: 23 },
        { id: 4, name: "Compliance", count: 19 }
      ],
      recentItems: [
        { id: 1, name: "2024 Budget Guidelines", type: "guideline", updatedAt: new Date() },
        { id: 2, name: "Expense Report Process", type: "process", updatedAt: new Date() }
      ]
    }
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Browse Knowledge Base</h2>
        <div className="flex items-center border border-border rounded-lg p-1">
          <Button
            variant={view === 'categories' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('categories')}
          >
            <Grid3x3 className="h-4 w-4 mr-2" />
            Categories
          </Button>
          <Button
            variant={view === 'tree' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('tree')}
          >
            <GitBranch className="h-4 w-4 mr-2" />
            Tree
          </Button>
          <Button
            variant={view === 'graph' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('graph')}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Graph
          </Button>
        </div>
      </div>

      {/* Categories Grid */}
      {view === 'categories' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeCategories.map((category) => (
            <div key={category.id} className={`p-6 border rounded-lg ${category.color}`}>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.itemCount} items</p>
                  </div>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${
                  category.growthTrend > 0 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {category.growthTrend > 0 ? '↑' : '↓'} {Math.abs(category.growthTrend)}%
                </div>
              </div>

              {/* Sub Categories */}
              <div className="space-y-2 mb-4">
                <div className="flex flex-wrap gap-1">
                  {category.subCategories.slice(0, 4).map((sub) => (
                    <Badge key={sub.id} variant="secondary" className="text-xs">
                      {sub.name} ({sub.count})
                    </Badge>
                  ))}
                  {category.subCategories.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{category.subCategories.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium">Recent Updates</h4>
                {category.recentItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="flex-1 truncate">{item.name}</span>
                    <span className="text-muted-foreground">{formatTime(item.updatedAt)}</span>
                  </div>
                ))}
              </div>

              {/* Category Actions */}
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  Explore →
                </Button>
                <Button size="sm" variant="ghost">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tree View Placeholder */}
      {view === 'tree' && (
        <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <GitBranch className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Knowledge tree visualization</p>
          </div>
        </div>
      )}

      {/* Graph View Placeholder */}
      {view === 'graph' && (
        <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Share2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Knowledge graph visualization</p>
          </div>
        </div>
      )}
    </div>
  );
}
