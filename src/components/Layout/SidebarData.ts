
import {
  BarChart3,
  Building2,
  Bot,
  Shield,
  Plug,
  Search,
  DollarSign,
  Calendar,
  ShieldCheck,
  FileText,
  Target,
  Activity,
  Brain,
  Settings,
  HelpCircle,
  Rocket,
  Lightbulb,
  GitBranch,
  TrendingUp,
  Users as UsersIcon,
  Server,
  RefreshCw
} from "lucide-react";

export const sidebarData = [
  {
    title: "Product Launch",
    icon: Rocket,
    path: "/product-launch",
    items: [
      { title: "Dashboard", path: "/product-launch", icon: Rocket },
      { title: "Ideation", path: "/product-launch/ideation", icon: Lightbulb },
      { title: "Development", path: "/product-launch/development", icon: GitBranch },
      { title: "Go-to-Market", path: "/product-launch/go-to-market", icon: Target },
      { title: "Launch", path: "/product-launch/launch", icon: Rocket },
      { title: "Performance", path: "/product-launch/performance", icon: TrendingUp },
    ]
  },
  {
    title: "Executive Dashboard",
    icon: BarChart3,
    path: "/executive",
    items: [
      { title: "Business Overview", path: "/business-overview", icon: Building2 },
      { title: "Strategic Planning", path: "/strategic-planning", icon: Target },
      { title: "AI Health", path: "/ai-health", icon: Activity },
    ]
  },
  {
    title: "People & Culture",
    icon: UsersIcon,
    path: "/hr",
    items: [
      { title: "HR Dashboard", path: "/hr", icon: UsersIcon },
      { title: "Performance", path: "/hr/performance", icon: Target },
      { title: "Talent Acquisition", path: "/hr/talent", icon: Search },
      { title: "Engagement", path: "/hr/engagement", icon: Activity },
    ]
  },
  {
    title: "AI Management",
    icon: Bot,
    path: "/agents",
    items: [
      { title: "AI Agent Store", path: "/agents", icon: Bot },
      { title: "My Agents", path: "/my-agents", icon: Bot },
      { title: "Trust Dashboard", path: "/trust", icon: Shield },
    ]
  },
  {
    title: "Business Intelligence",
    icon: Search,
    path: "/competitive",
    items: [
      { title: "Competitive Intelligence", path: "/competitive", icon: Search },
      { title: "Knowledge Management", path: "/knowledge", icon: Brain },
      { title: "Report Builder", path: "/reports", icon: FileText },
    ]
  },
  {
    title: "Operations",
    icon: Plug,
    path: "/integrations",
    items: [
      { title: "Integration Hub", path: "/integrations", icon: Plug },
      { title: "Financial Dashboard", path: "/finance", icon: DollarSign },
      { title: "Calendar Intelligence", path: "/calendar", icon: Calendar },
      { title: "IT Infrastructure", path: "/infrastructure", icon: Server },
      { title: "Enterprise Resilience", path: "/resilience", icon: RefreshCw },
      { title: "Security Audit", path: "/security", icon: ShieldCheck },
      { title: "Legal & Compliance", path: "/legal", icon: Shield },
    ]
  }
];

// Footer items for the sidebar
export const footerItems = [
  {
    title: "Settings",
    icon: Settings,
    path: "/settings"
  },
  {
    title: "Help & Support", 
    icon: HelpCircle,
    path: "/help"
  }
];
