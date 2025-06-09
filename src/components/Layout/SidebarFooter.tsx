
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { footerItems } from "./SidebarData";

export function SidebarFooter() {
  return (
    <SidebarMenu>
      {footerItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton>
            <item.icon />
            <span>{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
