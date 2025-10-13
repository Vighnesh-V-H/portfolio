import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SiteHeader() {
  return (
    <header className='sticky top-0 z-10 border-b bg-background/80 backdrop-blur animate-in fade-in slide-in-from-top-2'>
      <div className='mx-auto max-w-5xl'>
        <div className='grid grid-cols-3 items-center h-14 px-4'>
          {/* Left: Sidebar trigger on mobile */}
          <div className='justify-self-start'>
            <div className='md:hidden'>
              <SidebarTrigger />
            </div>
          </div>

          {/* Center: Name */}
          <h1 className='justify-self-center text-balance text-lg md:text-xl font-semibold'>
            Your Name
          </h1>

          <Button className='p-3  absolute right-0 sm:right-10 w-fit'>
            <Link href='/resume.pdf'>Resume</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
