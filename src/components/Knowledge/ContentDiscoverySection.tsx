
import { Eye, Bookmark, Share2, Flame, GitBranch, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function ContentDiscoverySection() {
  const trendingItems = [
    {
      id: 1,
      rank: 1,
      type: "Article",
      title: "Remote Work Best Practices",
      author: { name: "Alice Johnson", avatar: "/placeholder.svg" },
      views: 1234,
      growth: 45,
      viewTrend: [20, 35, 45, 30, 50, 60, 55]
    },
    {
      id: 2,
      rank: 2,
      type: "Guide",
      title: "API Integration Guide",
      author: { name: "Bob Smith", avatar: "/placeholder.svg" },
      views: 987,
      growth: 32,
      viewTrend: [15, 25, 40, 35, 45, 50, 48]
    },
    {
      id: 3,
      rank: 3,
      type: "FAQ",
      title: "Expense Policy Updates",
      author: { name: "Carol Davis", avatar: "/placeholder.svg" },
      views: 765,
      growth: 28,
      viewTrend: [10, 20, 30, 25, 35, 40, 38]
    }
  ];

  const recentUpdates = [
    {
      id: 1,
      type: "article",
      title: "Updated Security Guidelines",
      description: "New security protocols for remote access",
      author: { name: "Security Team", avatar: "/placeholder.svg" },
      action: "updated",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    },
    {
      id: 2,
      type: "document",
      title: "Q4 Financial Report",
      description: "Quarterly financial summary and analysis",
      author: { name: "Finance Team", avatar: "/placeholder.svg" },
      action: "published",
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
    },
    {
      id: 3,
      type: "policy",
      title: "Travel Reimbursement Policy",
      description: "Updated travel and expense guidelines",
      author: { name: "HR Team", avatar: "/placeholder.svg" },
      action: "revised",
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
    }
  ];

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'article': return '📝';
      case 'document': return '📄';
      case 'policy': return '📋';
      default: return '📄';
    }
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Discover Content</h2>
        <div className="flex gap-1 border border-border rounded-lg p-1">
          <Button size="sm" variant="secondary">Trending</Button>
          <Button size="sm" variant="ghost">Recent</Button>
          <Button size="sm" variant="ghost">Most Viewed</Button>
          <Button size="sm" variant="ghost">Bookmarked</Button>
        </div>
      </div>

      {/* Trending Content */}
      <div className="p-6 border border-border rounded-lg bg-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Trending This Week</h3>
          <div className="flex items-center gap-1 text-orange-600">
            <Flame className="h-4 w-4" />
            <span className="text-sm">Hot topics</span>
          </div>
        </div>
        <div className="space-y-4">
          {trendingItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-3 border border-border rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full text-sm">
                #{item.rank}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">{item.type}</Badge>
                  <h4 className="font-medium">{item.title}</h4>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Avatar className="h-4 w-4">
                      <AvatarImage src={item.author.avatar} />
                      <AvatarFallback className="text-xs">{item.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{item.author.name}</span>
                  </div>
                  <span>{item.views} views</span>
                  <span className="text-green-600">+{item.growth}% this week</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button size="sm" variant="ghost">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Updates */}
      <div className="p-6 border border-border rounded-lg bg-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Recently Updated</h3>
          <span className="text-sm text-muted-foreground">~12 updates/day</span>
        </div>
        <div className="space-y-4">
          {recentUpdates.map((update) => (
            <div key={update.id} className="flex items-start gap-4 p-3 border-l-2 border-blue-500 bg-blue-50/50">
              <div className="text-xs text-muted-foreground mt-1 min-w-fit">
                {formatTimeAgo(update.timestamp)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{getUpdateIcon(update.type)}</span>
                  <Badge variant="outline" className="text-xs">{update.type}</Badge>
                  <h4 className="font-medium">{update.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{update.description}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Avatar className="h-4 w-4">
                    <AvatarImage src={update.author.avatar} />
                    <AvatarFallback className="text-xs">{update.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <span>{update.author.name} {update.action}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">View</Button>
                {update.type === 'article' && (
                  <Button size="sm" variant="ghost">
                    <GitBranch className="h-4 w-4 mr-1" />
                    Changes
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
