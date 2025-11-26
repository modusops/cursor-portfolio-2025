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
        {/* <header className="flex items-center justify-between pt-[82px] md:pt-6 pb-6 relative">
          <div className="flex items-center">
            <PlusSign className="mr-3" />
            <Link href="/">
              <h1 className="text-xl font-medium text-black dark:text-white transition-colors duration-200 font-sans">
                David Chan
              </h1>
            </Link>
          </div>
          <div className="md:block md:w-[216px]"></div>
        </header> */}

        {/* Sticky Navigation */}
        <nav className="fixed bottom-6 md:top-6 md:bottom-auto left-1/2 -translate-x-1/2 z-50 flex items-center md:justify-between justify-center backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 py-2 px-3 rounded-full shadow-lg border border-white/30 dark:border-gray-700/30 transition-all duration-200
  w-max md:w-[90%] lg:w-1/2">
          <Link href="/">
            <h1 className="text-xl font-medium text-black dark:text-white font-sans pl-2 drop-shadow-sm hidden md:block hover:opacity-80 transition-opacity cursor-pointer">Dave Chan</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="nav-item px-5 py-2 text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white rounded-full transition-all text-sm font-medium relative hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-black/20 dark:hover:border-white/20 drop-shadow-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-item px-5 py-2 text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white rounded-full transition-all text-sm font-medium relative hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-black/20 dark:hover:border-white/20 drop-shadow-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="nav-item active px-5 py-2 rounded-full bg-black dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm font-medium transition-all duration-200 relative border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 hover:border-gray-800 dark:hover:border-gray-100 drop-shadow-sm"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Contact Content - Centered in middle of page */}
        <AnimatedContent>
          <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-8 pb-24 md:py-28">
            <div className="max-w-4xl mx-auto text-center">
              <div className="prose max-w-none text-lg dark:prose-invert transition-colors duration-200">
                <p className="text-gray-800 dark:text-gray-200">
                  I'm currently available for new projects and collaborations. If you're interested in working together,
                  please reach out through LinkedIn. Thanks!
                </p>

                <div className="mt-6 md:mt-8 flex justify-center">
                  {/* <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">Email</div>
                    <a
                      href="mailto:juntochan@proton.me"
                      className="text-black dark:text-white hover:underline transition-colors duration-200"
                    >
                      juntochan@proton.me
                    </a>
                  </div> */}

                  <a
                        href="https://www.linkedin.com/in/davejuntochan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="mr-3" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.30.678 0 7.225 0 7.225z"/>
                        </svg>
                        LinkedIn
                  </a>

                  {/* <div>
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  )
}
