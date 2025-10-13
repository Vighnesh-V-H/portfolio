"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer aria-hidden className='pointer-events-none'>
      <nav
        aria-label='Social links'
        className='fixed inset-x-0 bottom-4 z-20 flex justify-center px-4'>
        <ul
          className='pointer-events-auto floating rounded-full border bg-background/70 backdrop-blur shadow-md ring-1 ring-border/50 flex items-center gap-4 px-4 py-2 animate-in fade-in slide-in-from-bottom-2 transition-transform duration-300 will-change-transform hover:-translate-y-0.5'
          role='list'>
          <li className='group/li relative'>
            <Link
              href='https://github.com/yourname'
              target='_blank'
              rel='noopener noreferrer'
              className='flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 ease-out hover:-translate-y-1 hover:text-primary hover:shadow-sm hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover/li:-translate-y-1 group-hover/li:bg-primary/10 group-hover/li:text-primary'
              aria-label='GitHub'
              title='GitHub'>
              <Github className='size-5' />
              <span className='sr-only'>GitHub</span>
            </Link>
          </li>
          <li className='group/li relative'>
            <Link
              href='https://linkedin.com/in/yourname'
              target='_blank'
              rel='noopener noreferrer'
              className='flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 ease-out hover:-translate-y-1 hover:text-primary hover:shadow-sm hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover/li:-translate-y-1 group-hover/li:bg-primary/10 group-hover/li:text-primary'
              aria-label='LinkedIn'
              title='LinkedIn'>
              <Linkedin className='size-5' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
          </li>
          <li className='group/li relative'>
            <Link
              href='https://x.com/yourhandle'
              target='_blank'
              rel='noopener noreferrer'
              className='flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 ease-out hover:-translate-y-1 hover:text-primary hover:shadow-sm hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover/li:-translate-y-1 group-hover/li:bg-primary/10 group-hover/li:text-primary'
              aria-label='X'
              title='X'>
              <Twitter className='size-5' />
              <span className='sr-only'>X</span>
            </Link>
          </li>
          <li className='group/li relative'>
            <Link
              href='mailto:you@example.com'
              className='flex size-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 ease-out hover:-translate-y-1 hover:text-primary hover:shadow-sm hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background group-hover/li:-translate-y-1 group-hover/li:bg-primary/10 group-hover/li:text-primary'
              aria-label='Email'
              title='Email'>
              <Mail className='size-5' />
              <span className='sr-only'>Email</span>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        @keyframes v0-float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .floating {
          animation: v0-float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
