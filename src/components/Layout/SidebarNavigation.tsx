
import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { sidebarData } from "./SidebarData";

export function SidebarNavigation() {
  const location = useLocation();

  return (
    <>
      {sidebarData.map((section) => (
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
                          isActive={location.pathname === item.path}
                        >
                          <Link to={item.path} className="flex items-center gap-2">
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </Collapsible>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      ))}
    </>
  );
}
