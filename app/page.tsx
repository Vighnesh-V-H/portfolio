import Image from "next/image";
import Link from "next/link";

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
];

export default function HomePage() {
  return (
    <div className='mx-auto max-w-5xl px-4 md:px-6'>
      <main className='py-8 pb-24 md:py-12 animate-in fade-in-50'>
        <section className='max-w-none'>
          <div className='mb-6 flex justify-center'>
            <div className='flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-border/50 bg-background/60 shadow-sm'>
              <span className='text-xs uppercase tracking-wide text-muted-foreground'>
                Add photo
              </span>
            </div>
          </div>
          <div className='prose prose-invert max-w-none'>
            <h2 className='mb-2 text-xl font-medium'>About</h2>
            <p className='text-muted-foreground leading-relaxed'>
              Minimal, dark-themed portfolio. Replace this copy with a short
              introduction about yourself, your focus, and what you&apos;re
              currently working on.
            </p>
          </div>
        </section>

        <section className='mt-8'>
          <h3 className='mb-3 text-lg font-medium'>Education</h3>
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

        <section className='mt-8'>
          <h3 className='mb-3 text-lg font-medium'>Featured Projects</h3>
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6'>
            {projects.map((p) => (
              <article
                key={p.id}
                className='overflow-hidden rounded-lg border bg-card/50 transition-transform duration-300 hover:-translate-y-0.5'>
                <div className='relative aspect-video'>
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
                      className='text-sm text-muted-foreground transition-colors hover:text-primary'
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
          <h3 className='mb-3 text-lg font-medium'>Skills</h3>
          <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
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
                className='rounded-lg border border-border/40 bg-background/30 p-3 text-center text-sm transition-colors hover:bg-background/40'>
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
