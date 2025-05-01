"use client"

import Link from "next/link"
import { PlusSign } from "@/components/plus-sign"
import { useEffect } from "react"
import { AnimatedContent } from "@/components/animated-content"

export default function About() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with non-sticky logo */}
        <header className="flex items-center justify-between py-6 relative">
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
            className="px-5 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-sm font-medium"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-colors duration-200"
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

        {/* About Content */}
        <AnimatedContent>
          <div className="py-20 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-8 text-black dark:text-white transition-colors duration-200 font-sans">
              About
            </h1>

            <div className="prose max-w-none text-lg dark:prose-invert transition-colors duration-200">
              <p className="text-gray-800 dark:text-gray-200">
                I'm a product designer I believe in crafting experiences that are not only functional but also beautiful
                and intuitive. I'm detail-oriented and driven by setting a high bar in design and execution (and knows
                what excellence looks like). With more than a decade of experience, I've worked on a wide range of
                projects across mobile, responsive web, and AI technologies.
              </p>

              <p className="text-gray-800 dark:text-gray-200">
                As an IC with a history of taking on ambitious 0-to-1 projects, strategize, design, ship code, and as a
                former manager leading a team I can operate at all levels to help deliver exceptional product
                experiences through design and code. See my contributions: https://github.com/DaveChan-ux
              </p>

              <p className="text-gray-800 dark:text-gray-200">
                My approach combines strategic thinking with hands-on execution. I believe in designing with purpose,
                focusing on solving real user problems while aligning with business goals.
              </p>

              <h2 className="text-2xl font-medium mt-12 mb-4 text-black dark:text-white transition-colors duration-200">
                Experience
              </h2>

              <ul className="space-y-6">
                <li>
                  <div className="font-medium text-black dark:text-white transition-colors duration-200">
                    Staff Product Designer
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    LTK, 2023-Present
                  </div>
                </li>
                <li>
                  <div className="font-medium text-black dark:text-white transition-colors duration-200">
                    Founding Product Designer
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Sono, 2022-2023</div>
                </li>
                <li>
                  <div className="font-medium text-black dark:text-white transition-colors duration-200">
                    Product Design Manager
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    Shopify, 2021-2022
                  </div>
                </li>
                <li>
                  <div className="font-medium text-black dark:text-white transition-colors duration-200">
                    Senior Product Designer
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    Adobe, 2019-2021
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  )
}
