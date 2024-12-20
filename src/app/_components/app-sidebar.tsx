"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "src/shared/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Icon } from "src/shared/ui/icons";
import { ChatTeardrop, Gear, House, UsersFour } from "@phosphor-icons/react";
import Utils from "src/shared/utils/utils";

const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "Chat",
      url: "#",
      icon: ChatTeardrop,
      isActive: false,
    },
    {
      title: "Users",
      url: "#",
      icon: UsersFour,
      isActive: false,
    },
  ],
  navFooter: [
    {
      title: "Preferences",
      url: "#",
      icon: Gear,
      isActive: false,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const { setOpen } = useSidebar();
  return (
    <Sidebar
      collapsible="none"
      className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r px-3 py-6"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <a href="#">
                <Icon.Logo />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator className="bg-sidebar-border h-[1px]" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={Utils.cn({
                      "fill-primary": activeItem.title === item.title,
                    })}
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    onClick={() => {
                      setActiveItem(item);
                      setOpen(true);
                    }}
                    isActive={activeItem.title === item.title}
                  >
                    <item.icon
                      size={20}
                      weight="fill"
                      className="fill-inherit"
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navFooter.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={Utils.cn({
                      "fill-primary": activeItem.title === item.title,
                    })}
                    tooltip={{
                      children: item.title,
                      hidden: false,
                    }}
                    onClick={() => {
                      setActiveItem(item);
                      setOpen(true);
                    }}
                    isActive={activeItem.title === item.title}
                  >
                    <item.icon
                      size={20}
                      weight="fill"
                      className="fill-inherit"
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
