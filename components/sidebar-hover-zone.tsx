"use client";

import { useSidebar } from "@/components/ui/sidebar";

export default function SidebarHoverZone() {
  const { setOpen, isMobile } = useSidebar();

  return (
    <div
      className='fixed inset-y-0 left-0 z-30 hidden w-2 md:block'
      onMouseEnter={() => {
        if (!isMobile) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setOpen(false);
      }}
      aria-hidden
    />
  );
}
