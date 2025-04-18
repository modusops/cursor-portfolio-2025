import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/" className="text-xl text-gray-700 font-light">
              David Chan
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link href="/work" className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium">
              Work
            </Link>
            <Link
              href="/about"
              className="px-5 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Project Content */}
        <div className="py-12">
          <Link href="/" className="text-sm text-gray-500 mb-8 inline-block">
            ← Back to projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-medium mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>

          <div className="aspect-video relative mb-12 overflow-hidden rounded-xl">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="prose max-w-none">
            <p>
              This is a placeholder for the detailed project description. In a real portfolio, you would include
              information about the project, your role, the challenges faced, and the solutions implemented.
            </p>
            <p>
              You can also include additional images, videos, or other media to showcase the project in more detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Daylight",
    description: "A more caring computer",
    image: "/placeholder.svg?height=400&width=600",
    slug: "daylight",
  },
  {
    title: "Workmate",
    description: "Your AI executive assistant",
    image: "/placeholder.svg?height=400&width=600",
    slug: "workmate",
  },
  {
    title: "Slingshot",
    description: "Personalized AI counselor",
    image: "/placeholder.svg?height=400&width=600",
    slug: "slingshot",
  },
  {
    title: "Patreon",
    description: "Helping creators connect with fans",
    image: "/placeholder.svg?height=400&width=600",
    slug: "patreon",
  },
]
