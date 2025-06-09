
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  TrendingUp,
  Users,
  Briefcase,
  Target,
  Plug,
  Shield,
  Brain,
  Settings,
  HelpCircle,
  ChevronLeft,
  Menu,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
  isActive?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigationSections: NavSection[] = [
  {
    title: "Intelligence",
    items: [
      {
        title: "Executive Overview",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "AI Agent Store",
        url: "/agents/store",
        icon: Bot,
        badge: "150+",
      },
      {
        title: "My Agents",
        url: "/agents/deployed",
        icon: Sparkles,
        badge: 47,
      },
      {
        title: "Analytics Hub",
        url: "/analytics",
        icon: TrendingUp,
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        title: "Team Intelligence",
        url: "/team",
        icon: Users,
      },
      {
        title: "Business Operations",
        url: "/business",
        icon: Briefcase,
      },
      {
        title: "Strategic Planning",
        url: "/strategy",
        icon: Target,
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        title: "Integrations",
        url: "/integrations",
        icon: Plug,
        badge: 23,
      },
      {
        title: "Security & Compliance",
        url: "/security",
        icon: Shield,
      },
      {
        title: "Knowledge Base",
        url: "/knowledge",
        icon: Brain,
      },
    ],
  },
];

const bottomItems: NavItem[] = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    url: "/help",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActiveUrl = (url: string) => {
    if (url === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(url);
  };

  return (
    <Sidebar className="border-r border-border/40">
      <SidebarHeader className="border-b border-border/40 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg ai-gradient">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm">WingSpan AI</span>
            <span className="text-xs text-muted-foreground">Enterprise Platform</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        {navigationSections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2 mb-2">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActiveUrl(item.url)}
                      className={`w-full justify-between transition-all duration-200 ${
                        isActiveUrl(item.url)
                          ? "bg-gradient-to-r from-ai-primary/10 to-ai-tertiary/10 border-l-2 border-ai-primary text-ai-primary"
                          : "hover:bg-accent"
                      }`}
                    >
                      <Link to={item.url} className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span className="font-medium text-sm">{item.title}</span>
                        </div>
                        {item.badge && (
                          <Badge 
                            variant={isActiveUrl(item.url) ? "default" : "secondary"} 
                            className={`h-5 text-xs ${
                              isActiveUrl(item.url) 
                                ? "ai-gradient text-white" 
                                : ""
                            }`}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/40">
        {/* Usage Indicator */}
        <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-ai-primary/5 to-ai-tertiary/5 border border-ai-primary/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium">AI Credits</span>
            <span className="text-xs text-muted-foreground">2.4K / 5K</span>
          </div>
          <div className="w-full bg-muted rounded-full h-1.5">
            <div 
              className="ai-gradient h-1.5 rounded-full transition-all duration-300" 
              style={{ width: "48%" }}
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={isActiveUrl(item.url)}
                className={`w-full transition-all duration-200 ${
                  isActiveUrl(item.url)
                    ? "bg-gradient-to-r from-ai-primary/10 to-ai-tertiary/10 text-ai-primary"
                    : "hover:bg-accent"
                }`}
              >
                <Link to={item.url} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {/* User Profile */}
        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="ai-gradient text-white text-xs font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">CEO, Acme Corp</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
