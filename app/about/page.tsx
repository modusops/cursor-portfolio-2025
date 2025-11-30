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
              className="nav-item active px-5 py-2 rounded-full bg-black dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm font-medium transition-all duration-200 relative border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 hover:border-gray-800 dark:hover:border-gray-100 drop-shadow-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="nav-item px-5 py-2 text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white rounded-full transition-all text-sm font-medium relative hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-black/20 dark:hover:border-white/20 drop-shadow-sm"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* About Content - Reduced top padding on mobile */}
        <AnimatedContent>
          <div className="py-8 pb-24 md:py-20 max-w-3xl mx-auto stagger-children">


            {/* <div className="aspect-square relative overflow-hidden max-w-md mx-auto md:mx-0 mb-8 md:mb-12">
              <Image
                src="/headshot.png"
                alt="David Chan avatar"
                width={500}
                height={500}
                className="object-cover"
              />
            </div> */}

            <h3 className="text-sm font-medium mt-12 mb-4 text-black dark:text-white transition-colors duration-200">
              A little about me
            </h3>

            <div className="prose max-w-none text-lg dark:prose-invert transition-colors duration-200">
              <p className="text-gray-500 dark:text-gray-400">
              I was born in Hong Kong and moved to the Bay Area when I was in elementary school. My parents were entrepreneurs who started their own business and I saw firsthand what it meant to build something from the ground up with nothing but dreams and hard work. I took to heart my parents' journey as a kid, tinkering often with dreams of being an entrepreneur. At 12 years old, I created an animated movie using HyperCard on an Apple IIGS. When I was 17 I dabbled in art, film photography (won the class award for best photo). That same year I started a street apparel business and my products were carried in stores throughout SF. 
              </p>

              <h3 className="text-sm font-medium mt-12 mb-4 text-black dark:text-white transition-colors duration-200">
                Growing up
              </h3>

              <p className="text-gray-500 dark:text-gray-400"> I've not stopped tinkering and learning since. I was briefly an industrial designer and an aspiring barista cooking up bespoke coffee recipes, and I made (and sold) wallets from recycled fabrics. Through luck and hard work, I ended up working at companies like Tesla (if you bought a Model 3 in 2018-2019, I had a hand in making your car), Adobe, and Shopify.
              </p>

              <h3 className="text-sm font-medium mt-12 mb-4 text-black dark:text-white transition-colors duration-200">
                What I do now
              </h3>
              <p className="text-gray-500 dark:text-gray-400">I'm currently a product designer at LTK leading the chat product on the consumer team. My biggest achievement this year has been picking up SwiftUI and Xcode, both of which I had little prior experience with. I put myself through a 30-day coding challenge and by the end of it, I was shipping code to the company repo, which has been a fun journey. Oh, I also built this entire portfolio with Cursor from scratch. I get the feeling I'm gonna be building a lot more with AI. At the top of my list are a few digital art projects.
              </p>

              <h3 className="text-sm font-medium mt-12 mb-4 text-black dark:text-white transition-colors duration-200">
                What design means to me
              </h3>
              <p className="text-gray-500 dark:text-gray-400">When people ask me what great design is, I immediately think back to the products and experiences that evoke positive memories. Great design for me isn't just about the aesthetics, it's about the emotions it evokes, and the connection it creates between the user and the product.
              </p>

            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  )
}
