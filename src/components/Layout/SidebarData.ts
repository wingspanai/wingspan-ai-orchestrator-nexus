
import { 
  LayoutDashboard, 
  Bot, 
  Building2, 
  Calendar,
  DollarSign,
  Shield,
  Users,
  Handshake,
  Settings,
  HelpCircle,
  User,
  Zap,
  FileText
} from "lucide-react";

export const sidebarData = {
  navMain: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Executive Overview",
          url: "/",
          icon: LayoutDashboard,
        },
        {
          title: "Business Intelligence",
          url: "/business",
          icon: Building2,
        },
        {
          title: "Meeting Intelligence",
          url: "/calendar",
          icon: Calendar,
        },
        {
          title: "Financial Dashboard", 
          url: "/financial",
          icon: DollarSign,
        },
        {
          title: "Report Builder",
          url: "/report-builder",
          icon: FileText,
          badge: "New"
        }
      ],
    },
    {
      title: "AI Agents",
      items: [
        {
          title: "Agent Store",
          url: "/agents",
          icon: Bot,
        },
        {
          title: "My Agents",
          url: "/my-agents", 
          icon: Users,
        },
      ],
    },
    {
      title: "Integration & Security",
      items: [
        {
          title: "Integration Hub",
          url: "/integrations",
          icon: Zap,
        },
        {
          title: "Security & Audit",
          url: "/security",
          icon: Shield,
        },
        {
          title: "Trust & Control",
          url: "/trust",
          icon: Handshake,
        },
      ],
    },
  ],
};

export const footerItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    url: "/help", 
    icon: HelpCircle,
  },
  {
    title: "Account",
    url: "/account",
    icon: User,
  },
];
