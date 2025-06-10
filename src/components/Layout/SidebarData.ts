
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
  Home,
  PieChart,
  Workflow,
  UserCheck,
  AlertTriangle
} from "lucide-react";

export const sidebarData = [
  {
    title: "Command Center",
    icon: Home,
    path: "/",
    items: [
      { title: "Executive Overview", path: "/", icon: Home },
    ]
  },
  {
    title: "Business Performance",
    icon: TrendingUp,
    path: "/business",
    items: [
      { title: "Business Overview", path: "/business-overview", icon: Building2 },
      { title: "Financial Dashboard", path: "/finance", icon: DollarSign },
      { title: "Strategic Planning", path: "/strategic-planning", icon: Target },
      { title: "Product Launch", path: "/product-launch", icon: Rocket },
      { title: "Competitive Intelligence", path: "/competitive", icon: Search },
    ]
  },
  {
    title: "Operations Excellence", 
    icon: Settings,
    path: "/operations",
    items: [
      { title: "AI Operations", path: "/ai-health", icon: Activity },
      { title: "AI Agent Store", path: "/agents", icon: Bot },
      { title: "My Agents", path: "/my-agents", icon: Bot },
      { title: "Specialists", path: "/specialists", icon: Brain },
      { title: "Integration Hub", path: "/integrations", icon: Plug },
      { title: "IT Infrastructure", path: "/infrastructure", icon: Server },
      { title: "Enterprise Resilience", path: "/resilience", icon: RefreshCw },
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
      { title: "Calendar Intelligence", path: "/calendar", icon: Calendar },
    ]
  },
  {
    title: "Risk & Compliance",
    icon: Shield,
    path: "/risk",
    items: [
      { title: "Trust Dashboard", path: "/trust", icon: Shield },
      { title: "Security Audit", path: "/security", icon: ShieldCheck },
      { title: "Legal & Compliance", path: "/legal", icon: Shield },
      { title: "Zero-Knowledge Compliance", path: "/legal/zero-knowledge", icon: Key },
    ]
  },
  {
    title: "Analytics & Intelligence",
    icon: BarChart3,
    path: "/analytics",
    items: [
      { title: "Executive Dashboard", path: "/executive", icon: BarChart3 },
      { title: "Unified Intelligence", path: "/executive/unified-intelligence", icon: Brain },
      { title: "Genius Dashboard", path: "/executive/genius-dashboard", icon: Zap },
      { title: "Knowledge Management", path: "/knowledge", icon: Brain },
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
