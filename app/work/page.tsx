"use client"

import Link from "next/link"
import Image from "next/image"
import { PlusSign } from "@/components/plus-sign"
import { useEffect } from "react"
import { AnimatedContent } from "@/components/animated-content"

export default function Work() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with non-sticky logo */}
        <header className="flex items-center justify-between pt-[82px] md:pt-6 pb-6 relative">
          <div className="flex items-center">
            <PlusSign className="mr-3" />
            <Link href="/">
              <h1 className="text-xl font-medium text-black dark:text-white transition-colors duration-200 font-sans">
                David Chan
              </h1>
            </Link>
          </div>

          {/* Empty div to maintain layout with the sticky nav removed */}
          <div className="md:block md:w-[216px]"></div>
        </header>

        {/* Sticky Navigation */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-[max(calc((100%-1280px)/2+32px),32px)] z-50 flex space-x-4 bg-white dark:bg-gray-800 py-2 px-3 rounded-full shadow-md transition-colors duration-200">
          <Link
            href="/work"
            className="px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="px-5 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-sm font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Work Content - Reduced top padding on mobile */}
        <AnimatedContent>
          <div className="py-6 md:py-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 md:mb-12 text-black dark:text-white transition-colors duration-200 font-sans">
              Work
            </h1>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 md:pb-20">
              {projects.map((project) => (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 transition-all hover:shadow-md"
                >
                  <div className="aspect-[4/3] relative mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-medium text-black dark:text-white mb-1 transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedContent>
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
