
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
  Brain
} from "lucide-react";

export const sidebarData = [
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
      { title: "Security Audit", path: "/security", icon: ShieldCheck },
    ]
  }
];
