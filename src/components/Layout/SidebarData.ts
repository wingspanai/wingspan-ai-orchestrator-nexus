
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
  RefreshCw,
  Key,
  Zap,
  Home
} from "lucide-react";

export const sidebarData = [
  {
    title: "Command Center",
    icon: Home,
    path: "/",
    items: [
      { title: "Executive View", path: "/", icon: Home },
    ]
  },
  {
    title: "Business Performance",
    icon: DollarSign,
    path: "/business",
    items: [
      { title: "Revenue Intelligence", path: "/finance", icon: DollarSign },
      { title: "Growth Operations", path: "/product-launch", icon: Rocket },
      { title: "Strategic Planning", path: "/strategic-planning", icon: Target },
      { title: "Competitive Intelligence", path: "/competitive", icon: Search },
      { title: "Business Overview", path: "/business-overview", icon: Building2 },
    ]
  },
  {
    title: "Operations Excellence",
    icon: Activity,
    path: "/operations",
    items: [
      { title: "AI Operations", path: "/agents", icon: Bot },
      { title: "AI Health", path: "/ai-health", icon: Activity },
      { title: "Infrastructure", path: "/infrastructure", icon: Server },
      { title: "Integration Hub", path: "/integrations", icon: Plug },
      { title: "Enterprise Resilience", path: "/resilience", icon: RefreshCw },
      { title: "Calendar Intelligence", path: "/calendar", icon: Calendar },
    ]
  },
  {
    title: "People & Culture",
    icon: UsersIcon,
    path: "/people",
    items: [
      { title: "HR Dashboard", path: "/hr", icon: UsersIcon },
      { title: "Performance", path: "/hr/performance", icon: Target },
      { title: "Talent Acquisition", path: "/hr/talent", icon: Search },
      { title: "Engagement", path: "/hr/engagement", icon: Activity },
    ]
  },
  {
    title: "Risk & Compliance",
    icon: Shield,
    path: "/risk",
    items: [
      { title: "Security Audit", path: "/security", icon: ShieldCheck },
      { title: "Legal & Compliance", path: "/legal", icon: Shield },
      { title: "Zero-Knowledge Compliance", path: "/legal/zero-knowledge", icon: Key },
      { title: "Trust Dashboard", path: "/trust", icon: Shield },
    ]
  },
  {
    title: "AI Intelligence Hub",
    icon: Brain,
    path: "/intelligence",
    items: [
      { title: "Unified Intelligence", path: "/executive/unified-intelligence", icon: Brain },
      { title: "Genius Dashboard", path: "/executive/genius-dashboard", icon: Zap },
      { title: "Specialists", path: "/specialists", icon: Brain },
      { title: "My Agents", path: "/my-agents", icon: Bot },
      { title: "Knowledge Management", path: "/knowledge", icon: Brain },
    ]
  },
  {
    title: "Analytics & Insights",
    icon: BarChart3,
    path: "/analytics",
    items: [
      { title: "Executive Dashboard", path: "/executive", icon: BarChart3 },
      { title: "Report Builder", path: "/reports", icon: FileText },
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
