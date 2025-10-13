export type Project = {
  id: string
  title: string
  description: string
  image: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Minimal Notes",
    description: "A clean notes app focused on speed and keyboard shortcuts.",
    image: "/notes-app-cover.jpg",
    githubUrl: "https://github.com/yourname/minimal-notes",
  },
  {
    id: "p2",
    title: "Image Grid",
    description: "A responsive image gallery with lazy-loading and blur placeholders.",
    image: "/image-grid-cover.jpg",
    githubUrl: "https://github.com/yourname/image-grid",
  },
]
