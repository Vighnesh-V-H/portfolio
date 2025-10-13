import SiteHeader from "@/components/site-header";
import SiteSidebar from "@/components/site-sidebar";
import SiteFooter from "@/components/site-footer";
import Image from "next/image";
import Link from "next/link";
import SidebarHoverZone from "@/components/sidebar-hover-zone"; // new
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"; // +SidebarRail

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description of Project One",
    githubUrl: "https://github.com/user/project-one",
    image: "/project-one.svg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of Project Two",
    githubUrl: "https://github.com/user/project-two",
    image: "/project-two.svg",
  },
  // Add more projects as needed
];

export default function HomePage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarHoverZone />
      <Sidebar collapsible='icon' side='left'>
        {" "}
        {/* icon rail mode */}
        <SiteSidebar />
        <SidebarRail /> {/* clickable rail */}
      </Sidebar>

      <SidebarInset>
        <SiteHeader />
        <div className='mx-auto max-w-5xl px-4 md:px-6'>
          <main className='py-6 md:py-10 pb-24 animate-in fade-in-50'>
            {/* About */}
            <section className='prose prose-invert max-w-none'>
              <h2 className='text-xl font-medium mb-2'>About</h2>
              <p className='text-muted-foreground leading-relaxed'>
                Minimal, dark-themed portfolio. Replace this copy with a short
                introduction about yourself, your focus, and what you&apos;re
                currently working on.
              </p>
            </section>

            {/* Education */}
            <section className='mt-8'>
              <h3 className='text-lg font-medium mb-3'>Education</h3>
              <div className='rounded-lg border bg-card/50 p-4 md:p-6'>
                <ul className='space-y-3 text-sm'>
                  <li className='flex items-start justify-between'>
                    <div>
                      <p className='font-medium'>B.S. in Computer Science</p>
                      <p className='text-muted-foreground'>University Name</p>
                    </div>
                    <span className='text-muted-foreground'>2019 — 2023</span>
                  </li>
                  <li className='flex items-start justify-between'>
                    <div>
                      <p className='font-medium'>Relevant Coursework</p>
                      <p className='text-muted-foreground'>
                        Algorithms, Systems, Web
                      </p>
                    </div>
                    <span className='text-muted-foreground'>Selected</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Featured Projects */}
            <section className='mt-8'>
              <h3 className='text-lg font-medium mb-3'>Featured Projects</h3>
              <div className='grid sm:grid-cols-2 gap-4 md:gap-6'>
                {projects.map((p) => (
                  <article
                    key={p.id}
                    className='rounded-lg border bg-card/50 overflow-hidden transition-transform duration-300 hover:-translate-y-0.5'>
                    <div className='aspect-video relative'>
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={p.title}
                        fill
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 50vw'
                        priority={false}
                      />
                    </div>
                    <div className='p-4'>
                      <div className='flex items-start justify-between gap-3'>
                        <h4 className='font-medium'>{p.title}</h4>
                        <Link
                          href={p.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-sm text-muted-foreground hover:text-primary transition-colors'
                          aria-label={`${p.title} GitHub`}>
                          {"View on GitHub →"}
                        </Link>
                      </div>
                      <p className='mt-2 text-sm text-muted-foreground'>
                        {p.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className='mt-8 mb-9'>
              <h3 className='text-lg font-medium mb-3'>Skills</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "Tailwind",
                  "PostgreSQL",
                  "Redis",
                  "Docker",
                ].map((skill) => (
                  <div
                    key={skill}
                    className='rounded-lg border border-border/40 bg-background/30 backdrop-blur p-3 text-sm text-center transition-colors hover:bg-background/40'>
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
