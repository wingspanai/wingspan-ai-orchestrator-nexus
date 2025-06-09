
import { Bell, Search, Moon, Sun, Monitor, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/hooks/useTheme";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 border-b border-border/40 bg-bg-primary/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="lg:hidden" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search agents, data, or ask AI..."
            className="pl-10 w-80 bg-bg-secondary border-border/60 focus:border-ai-primary/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 ai-gradient text-white text-xs">
            3
          </Badge>
        </Button>

        {/* Theme Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              {theme === "light" && <Sun className="h-4 w-4" />}
              {theme === "dark" && <Moon className="h-4 w-4" />}
              {theme === "system" && <Monitor className="h-4 w-4" />}
              {theme === "colorblind" && <Palette className="h-4 w-4" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <Monitor className="mr-2 h-4 w-4" />
              System
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("colorblind")}>
              <Palette className="mr-2 h-4 w-4" />
              Colorblind Friendly
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-ai" />
          <span className="text-xs font-medium text-green-700 dark:text-green-300">
            All Systems Operational
          </span>
        </div>
      </div>
    </header>
  );
}
