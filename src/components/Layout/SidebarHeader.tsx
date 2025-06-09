
import { Bot } from "lucide-react";

export function SidebarHeader() {
  return (
    <div className="flex items-center gap-2 px-2 py-2">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg ai-gradient text-sidebar-primary-foreground">
        <Bot className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">WingSpan AI</span>
        <span className="truncate text-xs text-muted-foreground">Enterprise</span>
      </div>
    </div>
  );
}
