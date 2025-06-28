"use client"

import Link from "next/link"
import { PlusSign } from "@/app/components/plus-sign"
import { useEffect } from "react"
import { AnimatedContent } from "@/components/animated-content"

export default function Contact() {
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
            href="/"
            className="nav-item px-5 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors text-sm font-medium relative"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="nav-item px-5 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors text-sm font-medium relative"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="nav-item active px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-colors duration-200 relative"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Content - Reduced top padding on mobile */}
        <AnimatedContent>
          <div className="py-8 md:py-20 max-w-3xl">
            {/* <h1 className="text-4xl md:text-5xl font-light mb-6 md:mb-8 text-black dark:text-white transition-colors duration-200 font-sans">
              Contact
            </h1> */}

            <div className="prose max-w-none text-lg dark:prose-invert transition-colors duration-200">
              <p className="text-gray-800 dark:text-gray-200">
                I'm currently available for new projects and collaborations. If you're interested in working together,
                please reach out using one of the methods below.
              </p>

              <div className="mt-6 md:mt-8 space-y-4">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Email</div>
                  <a
                    href="mailto:juntochan@proton.me"
                    className="text-black dark:text-white hover:underline transition-colors duration-200"
                  >
                    juntochan@proton.me
                  </a>
                </div>

                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
                    LinkedIn
                  </div>
                  <a
                    href="https://linkedin.com/in/davejuntochan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:underline transition-colors duration-200"
                  >
                    linkedin.com/in/davejuntochan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  )
}
