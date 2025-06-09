
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
  CreditCard,
  BarChart3,
  Zap,
  Eye,
  GitBranch,
  Activity,
  PieChart,
  LineChart,
  Database,
  Calendar,
  Clock,
  MessageSquare,
  FileCheck,
  AlertTriangle,
  Lock
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
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
      title: "Core Intelligence",
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
          title: "My Agents",
          url: "/my-agents",
          icon: Users,
          items: [
            {
              title: "Deployed Agents",
              url: "/my-agents#deployed",
            },
            {
              title: "Agent Analytics",
              url: "/my-agents#analytics",
            },
            {
              title: "Health Monitor",
              url: "/my-agents#health",
            },
            {
              title: "Activity Logs",
              url: "/my-agents#logs",
            },
          ],
        },
      ],
    },
    {
      title: "Business Intelligence",
      items: [
        {
          title: "Financial Intelligence",
          url: "/finance",
          icon: BarChart3,
          items: [
            {
              title: "Financial Overview",
              url: "/finance",
            },
            {
              title: "Revenue Analytics",
              url: "/finance#revenue",
            },
            {
              title: "Expense Management",
              url: "/finance#expenses",
            },
            {
              title: "Financial Projections",
              url: "/finance#projections",
            },
            {
              title: "Budget Tracking",
              url: "/finance#budget",
            },
          ],
        },
        {
          title: "Calendar Intelligence",
          url: "/calendar",
          icon: Calendar,
          items: [
            {
              title: "Meeting Analytics",
              url: "/calendar#analytics",
            },
            {
              title: "Cost Optimization",
              url: "/calendar#optimization",
            },
            {
              title: "Time Management",
              url: "/calendar#time-management",
            },
            {
              title: "Meeting Templates",
              url: "/calendar#templates",
            },
            {
              title: "Focus Time Analysis",
              url: "/calendar#focus-time",
            },
          ],
        },
        {
          title: "Competitive Intelligence",
          url: "/competitive",
          icon: Eye,
          items: [
            {
              title: "Market Position",
              url: "/competitive#position",
            },
            {
              title: "Competitor Activity",
              url: "/competitive#activity",
            },
            {
              title: "Win/Loss Analysis",
              url: "/competitive#winloss",
            },
            {
              title: "Market Intelligence",
              url: "/competitive#market",
            },
            {
              title: "Strategic Recommendations",
              url: "/competitive#strategy",
            },
          ],
        },
      ],
    },
    {
      title: "Operations & Infrastructure",
      items: [
        {
          title: "Integration Hub",
          url: "/integrations",
          icon: Plug,
          badge: "23",
          items: [
            {
              title: "Connected Systems",
              url: "/integrations#connected",
            },
            {
              title: "Available Integrations",
              url: "/integrations#available",
            },
            {
              title: "Data Flow Monitor",
              url: "/integrations#dataflow",
            },
            {
              title: "Health Dashboard",
              url: "/integrations#health",
            },
            {
              title: "Connection Wizard",
              url: "/integrations#wizard",
            },
          ],
        },
        {
          title: "Security & Compliance",
          url: "/security",
          icon: Shield,
          items: [
            {
              title: "Security Overview",
              url: "/security",
            },
            {
              title: "Real-time Monitor",
              url: "/security#monitor",
            },
            {
              title: "Audit Trail",
              url: "/security#audit",
            },
            {
              title: "Compliance Dashboard",
              url: "/security#compliance",
            },
            {
              title: "Incident Response",
              url: "/security#incidents",
            },
            {
              title: "Security Insights",
              url: "/security#insights",
            },
          ],
        },
      ],
    },
    {
      title: "Trust & Governance",
      items: [
        {
          title: "Trust & Controls",
          url: "/trust",
          icon: FileCheck,
          items: [
            {
              title: "Trust Score",
              url: "/trust#score",
            },
            {
              title: "Autonomy Controls",
              url: "/trust#autonomy",
            },
            {
              title: "Decision Log",
              url: "/trust#decisions",
            },
            {
              title: "Override Controls",
              url: "/trust#overrides",
            },
            {
              title: "Trust Analytics",
              url: "/trust#analytics",
            },
          ],
        },
        {
          title: "Knowledge Base",
          url: "/knowledge",
          icon: Brain,
          items: [
            {
              title: "Documentation",
              url: "/knowledge/docs",
            },
            {
              title: "Best Practices",
              url: "/knowledge/practices",
            },
            {
              title: "Troubleshooting",
              url: "/knowledge/troubleshooting",
            },
          ],
        },
      ],
    },
    {
      title: "Platform Administration",
      items: [
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,
          items: [
            {
              title: "General Settings",
              url: "/settings/general",
            },
            {
              title: "User Management",
              url: "/settings/users",
            },
            {
              title: "API Configuration",
              url: "/settings/api",
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
            },
          ],
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
          <Collapsible key={section.title} defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="group/trigger flex w-full items-center justify-between text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground [&[data-state=open]>svg]:rotate-90">
                  {section.title}
                  <ChevronRight className="ml-auto transition-transform duration-200" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <Collapsible key={item.title} className="group/item">
                        <SidebarMenuItem>
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
                              {item.items && (
                                <CollapsibleTrigger asChild>
                                  <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/item:rotate-90" />
                                </CollapsibleTrigger>
                              )}
                            </Link>
                          </SidebarMenuButton>
                          {item.items?.length ? (
                            <CollapsibleContent>
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
                            </CollapsibleContent>
                          ) : null}
                        </SidebarMenuItem>
                      </Collapsible>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
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
