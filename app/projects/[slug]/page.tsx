"use client"

import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PlusSign } from "@/components/plus-sign"
import { useEffect } from "react"
import { AnimatedContent } from "@/components/animated-content"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with non-sticky logo */}
        <header className="flex items-center justify-between py-6">
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
        <nav className="fixed top-6 right-4 md:right-8 lg:right-[max(calc((100%-1280px)/2+32px),32px)] z-50 flex space-x-4 bg-white dark:bg-gray-800 py-2 px-3 rounded-full shadow-sm transition-colors duration-200">
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

        {/* Project Content */}
        <AnimatedContent>
          <div className="py-12">
            <Link
              href="/work"
              className="text-sm text-gray-500 dark:text-gray-400 mb-8 inline-block transition-colors duration-200"
            >
              ← Back to projects
            </Link>

            <h1 className="text-4xl md:text-5xl font-medium mb-4 text-black dark:text-white transition-colors duration-200">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-200">
              {project.description}
            </p>

            <div className="aspect-video relative mb-12 overflow-hidden rounded-xl">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="prose max-w-none dark:prose-invert transition-colors duration-200">
              <p className="text-gray-800 dark:text-gray-200">
                This is a placeholder for the detailed project description. In a real portfolio, you would include
                information about the project, your role, the challenges faced, and the solutions implemented.
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                You can also include additional images, videos, or other media to showcase the project in more detail.
              </p>
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
