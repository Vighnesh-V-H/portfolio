import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function SiteHeader() {
  return (
    <header className='overflow-x-hidden fixed left-1/2 -translate-x-1/2 w-full top-0 mb-6 z-20 border-b border-border/60 bg-background/80 backdrop-blur animate-in fade-in slide-in-from-top-2'>
      <div className='mx-auto flex h-16 max-w-5xl items-center gap-4 overflow-x-hidden px-4 text-sm sm:gap-6'>
        <div className='hidden items-center [@media(min-width:380px)]:flex gap-3 whitespace-nowrap'>
          <Link
            href='/'
            className='text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary md:text-xl'>
            Vighnesh
          </Link>
        </div>

        <nav className='flex shrink-0 items-center gap-4 whitespace-nowrap font-medium text-muted-foreground sm:gap-6'>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='transition-colors hover:text-primary'>
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          size='sm'
          className='ml-auto sm:text-base text-xs shrink-0 whitespace-nowrap'>
          <Link href='/resume.pdf' className='font-medium tracking-tight'>
            Resume
          </Link>
        </Button>
      </div>
    </header>
  );
}
