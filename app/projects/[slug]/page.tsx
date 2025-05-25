"use client"

import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PlusSign } from "@/components/plus-sign"
import { useEffect } from "react"
import { AnimatedContent } from "@/components/animated-content"
import { X } from "lucide-react"

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
        <header className="flex items-center justify-between pt-[82px] md:pt-6 pb-6">
          <div className="flex items-center">
            <PlusSign className="mr-3" />
            <Link href="/">
              <h1 className="text-xl font-medium text-black dark:text-white transition-colors duration-200 font-sans">
                David Chan
              </h1>
            </Link>
          </div>

          {/* Empty div to maintain layout with the close button removed */}
          <div className="md:block md:w-[216px]"></div>
        </header>

        {/* Sticky Close Button - positioned to match navigation menu exactly */}
        <Link
          href="/"
          className="fixed top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-[max(calc((100%-1280px)/2+32px),32px)] z-50 bg-white dark:bg-gray-800 py-2 px-3 rounded-full shadow-md transition-colors duration-200 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 w-10 h-10"
          aria-label="Close and return to home"
        >
          <X className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
        </Link>

        {/* Project Content - Reduced top padding on mobile */}
        <AnimatedContent>
          <div className="py-6 md:py-12">
            <Link
              href="/work"
              className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-8 inline-block transition-colors duration-200"
            >
              ← Back to projects
            </Link>

            <h1 className="text-4xl md:text-5xl font-medium mb-2 md:mb-4 text-black dark:text-white transition-colors duration-200">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 transition-colors duration-200">
              {project.description}
            </p>

            <div className="aspect-video relative mb-8 md:mb-12 overflow-hidden rounded-xl">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            <div className="prose max-w-none dark:prose-invert transition-colors duration-200 mb-12 md:mb-16">
              <p className="text-gray-800 dark:text-gray-200">
                This is a placeholder for the detailed project description. In a real portfolio, you would include
                information about the project, your role, the challenges faced, and the solutions implemented.
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                You can also include additional images, videos, or other media to showcase the project in more detail.
              </p>
            </div>

            {/* Section 1: Title and Body Text */}
            <div className="mb-12 md:mb-20">
              <div className="flex flex-col md:flex-row md:gap-16">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-medium text-black dark:text-white transition-colors duration-200">
                    Design Process
                  </h2>
                </div>
                <div className="md:w-2/3">
                  <div className="prose max-w-none dark:prose-invert transition-colors duration-200">
                    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                      Our design process began with extensive user research and competitive analysis. We conducted
                      interviews with over 50 potential users to understand their pain points and workflow challenges.
                      This research informed our design decisions and helped us create a solution that truly addresses
                      user needs.
                    </p>
                    <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                      Through iterative prototyping and testing, we refined the interface to be both intuitive and
                      powerful. The final design balances simplicity with functionality, ensuring users can accomplish
                      their goals efficiently while maintaining a delightful user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Two Images */}
            <div className="mb-12 md:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=design wireframes"
                    alt="Design wireframes and sketches"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=user interface mockup"
                    alt="User interface mockup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Three Images */}
            <div className="mb-12 md:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=mobile app screen"
                    alt="Mobile app interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=desktop dashboard"
                    alt="Desktop dashboard view"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800&query=user testing session"
                    alt="User testing session"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Single Full Width Image */}
            <div className="mb-12 md:mb-20">
              <div className="aspect-video relative overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=900&width=1600&query=final product showcase"
                  alt="Final product showcase"
                  fill
                  className="object-cover"
                />
              </div>
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
