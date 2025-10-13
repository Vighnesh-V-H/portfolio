"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // get current route
import {
  FolderGit2,
  BookOpen,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"; // icons
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";

export default function SiteSidebar() {
  const pathname = usePathname();
  const { state, toggleSidebar, setOpen, isMobile } = useSidebar();

  return (
    <div className='group/sidebar relative flex h-full flex-col'>
      <button
        type='button'
        onClick={toggleSidebar}
        aria-label={
          state === "collapsed" ? "Expand sidebar" : "Collapse sidebar"
        }
        title={state === "collapsed" ? "Expand sidebar" : "Collapse sidebar"}
        className='absolute right-2 top-2 z-20 hidden items-center justify-center rounded-full border border-border/60 bg-background/90 p-1 text-muted-foreground shadow-sm transition-all duration-200 ease-linear hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover/sidebar:opacity-100 group-hover/sidebar:translate-y-0 md:flex md:-translate-y-1 md:opacity-0'>
        {state === "collapsed" ? (
          <ChevronsRight className='size-4' />
        ) : (
          <ChevronsLeft className='size-4' />
        )}
      </button>
      <SidebarHeader>
        <div className='px-2 py-1'>
          <p className='text-xs text-muted-foreground'>Navigation</p>
        </div>
        <SidebarSeparator />
      </SidebarHeader>

      <SidebarContent
        onMouseEnter={() => {
          if (!isMobile) setOpen(true);
        }}>
        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                size='lg' // taller pill for icon rail
                isActive={pathname?.startsWith("/projects")}
                className='data-[active=true]:bg-primary data-[active=true]:text-primary-foreground' // primary pill
                tooltip='Projects'>
                <Link
                  href='/projects'
                  className='flex w-full items-center gap-2 group-data-[collapsible=icon]:justify-center'>
                  <FolderGit2 className='size-4' />
                  <span className='group-data-[collapsible=icon]:hidden'>
                    Projects
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                size='lg' // taller pill for icon rail
                isActive={
                  pathname === "/blog" || pathname?.startsWith("/blog/")
                }
                className='data-[active=true]:bg-primary data-[active=true]:text-primary-foreground' // primary pill
                tooltip='Blog'>
                <Link
                  href='/blog'
                  className='flex w-full items-center gap-2 group-data-[collapsible=icon]:justify-center'>
                  <BookOpen className='size-4' />
                  <span className='group-data-[collapsible=icon]:hidden'>
                    Blog
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </div>
  );
}
