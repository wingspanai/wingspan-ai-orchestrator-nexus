
import * as React from "react";
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
  ChevronRight,
  Building,
  CreditCard
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "WingSpan AI",
      logo: Bot,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Intelligence",
      items: [
        {
          title: "Executive Overview",
          url: "/executive",
          icon: LayoutDashboard,
          isActive: true,
        },
        {
          title: "AI Agent Store",
          url: "/agents",
          icon: Bot,
          badge: "150+",
        },
        {
          title: "Analytics Hub",
          url: "/analytics",
          icon: TrendingUp,
          items: [
            {
              title: "Business Performance",
              url: "/analytics/business",
            },
            {
              title: "Predictive Analytics",
              url: "/analytics/predictive",
            },
            {
              title: "Custom Reports",
              url: "/analytics/reports",
            },
          ],
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
          url: "/operations",
          icon: Briefcase,
          items: [
            {
              title: "Finance Dashboard",
              url: "/operations/finance",
            },
            {
              title: "Sales Pipeline",
              url: "/operations/sales",
            },
            {
              title: "Customer Success",
              url: "/operations/customer",
            },
          ],
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
          title: "Integration Hub",
          url: "/integrations",
          icon: Plug,
          badge: "23",
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
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg ai-gradient text-sidebar-primary-foreground">
            <Bot className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">WingSpan AI</span>
            <span className="truncate text-xs text-muted-foreground">Enterprise</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      isActive={location.pathname === item.url}
                    >
                      <Link to={item.url} className="flex items-center gap-2">
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto bg-sidebar-accent text-sidebar-accent-foreground px-1.5 py-0.5 rounded text-xs">
                            {item.badge}
                          </span>
                        )}
                        {item.items && <ChevronRight className="ml-auto size-4" />}
                      </Link>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link to={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    ) : null}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Building className="size-4" />
              <span>Organization</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <CreditCard className="size-4" />
              <span>Billing</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
