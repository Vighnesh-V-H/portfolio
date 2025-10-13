import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 md:px-6 py-10 pb-24 animate-in fade-in">
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      <p className="text-muted-foreground mb-6">
        Create posts in two ways: 1) Dynamic route at <code>/blog/[slug]</code>, e.g.{" "}
        <Link href="/blog/hello-world" className="underline">
          /blog/hello-world
        </Link>
        2) Static folder like <code>app/blog/my-post/page.tsx</code>.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        <li>
          For dynamic posts, just visit <code>/blog/&lt;your-slug&gt;</code> and start from the generated template.
        </li>
        <li>
          For static posts, duplicate <code>app/blog/example-post</code> and edit its page.tsx.
        </li>
      </ul>
    </main>
  )
}
