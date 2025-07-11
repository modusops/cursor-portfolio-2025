"use client"

import Link from "next/link"
import { PlusSign } from "@/app/components/plus-sign"
import { useEffect } from "react"
import { AnimatedContent } from "@/components/animated-content"
import Image from "next/image"

export default function About() {
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
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-[max(calc((100%-1280px)/2+32px),32px)] z-50 flex space-x-4 bg-white dark:bg-gray-800 py-2 px-3 rounded-full shadow-md transition-colors duration-200">
          <Link
            href="/"
            className="nav-item px-5 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors text-sm font-medium relative"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="nav-item active px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium transition-colors duration-200 relative"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="nav-item px-5 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors text-sm font-medium relative"
          >
            Contact
          </Link>
        </nav>

        {/* About Content - Reduced top padding on mobile */}
        <AnimatedContent>
          <div className="py-8 md:py-20 max-w-3xl">


            <div className="aspect-square relative overflow-hidden max-w-md mx-auto md:mx-0 mb-8 md:mb-12">
              <Image
                src="/headshot.png"
                alt="David Chan avatar"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>

            <div className="prose max-w-none text-lg dark:prose-invert transition-colors duration-200">
              <p className="text-gray-800 dark:text-gray-200">
              I'm a seasoned product designer with experience building and shipping compellling digital experiences on desktop, mobile, and web for consumer, B2B SaaS, enterprise and AI products. 
              I believe great design is half art and half science and always born from a deep understanding of the user and the business. 
              <br />
              <br /> Great design for me isn't just about the aesthetics, it's about the emotions it evokes, and the connection it creates between the user and the product.
              </p>
              <h3 className="text-xl font-medium mt-12 mb-4 text-black dark:text-white transition-colors duration-200">
                Experience
              </h3>

              <ul className="space-y-4">
                <li>
                  <div>
                    <span className="font-medium text-black dark:text-white transition-colors duration-200">
                    Staff Product Designer 
                  </span>
                  <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                     LTK, 2023-Present
                    </span>
                  </div>
                </li>

                <li>
                  <div>
                    <span className="font-medium text-black dark:text-white transition-colors duration-200">
                    Founding Product Designer
                  </span>
                  <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                    Sono, 2022-2023
                    </span>
                  </div>
                </li>

                <li>
                  <div>
                    <span className="font-medium text-black dark:text-white transition-colors duration-200">
                    Product Design Manager
                  </span>
                  <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                    Shopify, 2021-2022
                    </span>
                  </div>
                </li>

                <li>
                  <div>
                    <span className="font-medium text-black dark:text-white transition-colors duration-200">
                    Senior Product Designer
                  </span>
                  <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                   Adobe, 2019-2020
                    </span>
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
