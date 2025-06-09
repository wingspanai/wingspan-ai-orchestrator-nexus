
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
      {sidebarData.navMain.map((section) => (
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
    </>
  );
}
