import Link from "next/link"
import Image from "next/image"

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with non-sticky logo */}
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/">
              <h1 className="text-xl font-medium text-black">David Chan</h1>
            </Link>
          </div>

          {/* Empty div to maintain layout with the sticky nav removed */}
          <div className="md:block md:w-[216px]"></div>
        </header>

        {/* Sticky Navigation */}
        <nav className="fixed top-6 right-4 md:right-8 lg:right-[max(calc((100%-1280px)/2+32px),32px)] z-50 flex space-x-4 bg-white py-2 px-3 rounded-full shadow-sm">
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
