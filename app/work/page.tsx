import Link from "next/link"
import Image from "next/image"

export default function Work() {
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

        {/* Work Content */}
        <div className="py-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-12">Work</h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md"
              >
                <div className="aspect-[4/3] relative mb-6 overflow-hidden rounded-lg">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <h2 className="text-xl font-medium text-black mb-1">{project.title}</h2>
                <p className="text-gray-500 text-sm">{project.description}</p>
              </Link>
            ))}
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
