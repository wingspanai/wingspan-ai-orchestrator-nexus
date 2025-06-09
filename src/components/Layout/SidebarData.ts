
import {
  LayoutDashboard,
  Bot,
  Users,
  BarChart3,
  Eye,
  Shield,
  Plug,
  FileCheck,
  Brain,
  Settings,
  Building,
  CreditCard,
  Calendar
} from "lucide-react";

export const sidebarData = {
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
      title: "Executive Dashboard",
      items: [
        {
          title: "Executive Overview",
          url: "/executive",
          icon: LayoutDashboard,
          isActive: true,
        },
        {
          title: "Business Overview",
          url: "/business-overview",
          icon: BarChart3,
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
      title: "Operations & Security",
      items: [
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

export const footerItems = [
  {
    title: "Organization",
    icon: Building,
    url: "/organization",
  },
  {
    title: "Billing",
    icon: CreditCard,
    url: "/billing",
  },
];
