"use client"

import Link from "next/link"
import Image from "next/image"
import { PlusSign } from "@/components/plus-sign"
import { useEffect, useState, useRef } from "react"
import { AnimatedContent } from "@/components/animated-content"

export default function Home() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // State for projects carousel visibility
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [showLeftGradient, setShowLeftGradient] = useState(false)
  const [showRightGradient, setShowRightGradient] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  // State for testimonials carousel visibility
  const [showTestimonialsLeftArrow, setShowTestimonialsLeftArrow] = useState(false)
  const [showTestimonialsRightArrow, setShowTestimonialsRightArrow] = useState(true)
  const [showTestimonialsLeftGradient, setShowTestimonialsLeftGradient] = useState(false)
  const [showTestimonialsRightGradient, setShowTestimonialsRightGradient] = useState(true)
  const testimonialsCarouselRef = useRef<HTMLDivElement>(null)

  // State for active testimonial index (for pagination)
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0)

  // Function to check scroll position and update visibility for projects carousel
  const updateArrowVisibility = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current

    // Show left arrow and gradient if not at the beginning
    const isScrolledRight = scrollLeft > 10
    setShowLeftArrow(isScrolledRight)
    setShowLeftGradient(isScrolledRight)

    // Show right arrow and gradient if not at the end
    // Add a small buffer (5px) to account for rounding errors
    const hasMoreToScroll = scrollLeft + clientWidth < scrollWidth - 5
    setShowRightArrow(hasMoreToScroll)
    setShowRightGradient(hasMoreToScroll)
  }

  // Function to check scroll position and update visibility for testimonials carousel
  const updateTestimonialsArrowVisibility = () => {
    if (!testimonialsCarouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = testimonialsCarouselRef.current

    // Show left arrow and gradient if not at the beginning
    const isScrolledRight = scrollLeft > 10
    setShowTestimonialsLeftArrow(isScrolledRight)
    setShowTestimonialsLeftGradient(isScrolledRight)

    // Show right arrow and gradient if not at the end
    // Add a small buffer (5px) to account for rounding errors
    const hasMoreToScroll = scrollLeft + clientWidth < scrollWidth - 5
    setShowTestimonialsRightArrow(hasMoreToScroll)
    setShowTestimonialsRightGradient(hasMoreToScroll)

    // Update active testimonial index for pagination
    if (testimonialsCarouselRef.current) {
      const scrollPosition = testimonialsCarouselRef.current.scrollLeft
      const cardWidth = testimonialsCarouselRef.current.clientWidth
      const newIndex = Math.round(scrollPosition / cardWidth)
      if (newIndex !== activeTestimonialIndex) {
        setActiveTestimonialIndex(newIndex)
      }
    }
  }

  // Set up scroll event listener for the projects carousel
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Initial check
    updateArrowVisibility()

    // Add scroll event listener
    carousel.addEventListener("scroll", updateArrowVisibility)

    // Add resize listener to update arrows when window size changes
    window.addEventListener("resize", updateArrowVisibility)

    return () => {
      carousel.removeEventListener("scroll", updateArrowVisibility)
      window.removeEventListener("resize", updateArrowVisibility)
    }
  }, [])

  // Set up scroll event listener for the testimonials carousel
  useEffect(() => {
    const carousel = testimonialsCarouselRef.current
    if (!carousel) return

    // Initial check
    updateTestimonialsArrowVisibility()

    // Add scroll event listener
    carousel.addEventListener("scroll", updateTestimonialsArrowVisibility)

    // Add resize listener to update arrows when window size changes
    window.addEventListener("resize", updateTestimonialsArrowVisibility)

    return () => {
      carousel.removeEventListener("scroll", updateTestimonialsArrowVisibility)
      window.removeEventListener("resize", updateTestimonialsArrowVisibility)
    }
  }, [activeTestimonialIndex])

  // Function to scroll the projects carousel
  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const scrollAmount = carouselRef.current.clientWidth / 2
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  // Function to scroll the testimonials carousel
  const scrollTestimonialsCarousel = (direction: "left" | "right") => {
    if (!testimonialsCarouselRef.current) return

    const scrollAmount = testimonialsCarouselRef.current.clientWidth
    testimonialsCarouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  // Function to navigate to a specific testimonial
  const goToTestimonial = (index: number) => {
    if (!testimonialsCarouselRef.current) return

    const cardWidth = testimonialsCarouselRef.current.clientWidth
    testimonialsCarouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    })
    setActiveTestimonialIndex(index)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with non-sticky logo */}
        <header className="flex items-center justify-between pt-[82px] md:pt-6 pb-6 relative">
          <div className="flex items-center">
            <PlusSign className="mr-3" />
            <Link href="/">
              <h1 className="text-xl font-medium text-black dark:text-white font-sans">David Chan</h1>
            </Link>
          </div>

          {/* Empty div to maintain layout with the sticky nav removed */}
          <div className="md:block md:w-[216px]"></div>
        </header>

        {/* Sticky Navigation */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 lg:right-[max(calc((100%-1280px)/2+32px),32px)] z-50 flex space-x-4 bg-white dark:bg-gray-800 py-2 px-3 rounded-full shadow-md transition-colors duration-200">
          <Link
            href="/work"
            className="px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium"
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

        {/* Hero Section - Reduced top padding on mobile */}
        <AnimatedContent>
          <div className="py-10 md:py-28 relative">
            <div className="absolute top-0 left-0 w-px h-20 bg-gray-800/30 dark:bg-white/20"></div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-[100] leading-tight tracking-wider text-black dark:text-white max-w-5xl transition-colors duration-200 font-sans"
              style={{ fontWeight: 100, letterSpacing: "0.03em" }}
            >
              STAFF PRODUCT DESIGNER WITH 10 YEARS OF EXPERIENCE.
            </h1>
            <div className="absolute bottom-0 right-0 w-px h-20 bg-gray-800/30 dark:bg-white/20"></div>
          </div>
        </AnimatedContent>

        {/* Projects Carousel */}
        <AnimatedContent className="delay-100">
          <div className="py-10 relative">
            <div className="flex items-center mb-8">
              <PlusSign size="sm" className="mr-3" />
              <h2 className="text-2xl font-medium">Featured Projects</h2>
            </div>

            <div className="relative">
              {/* Carousel Container with Feathering */}
              <div className="relative overflow-visible">
                <div className="pt-8 pb-8 px-4 -mx-4 overflow-hidden">
                  {/* Left Feathering Gradient - Only show when scrolled */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent transition-opacity duration-300 ${
                      showLeftGradient ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>

                  {/* Carousel */}
                  <div
                    ref={carouselRef}
                    id="carousel-container"
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 scrollbar-hide"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {projects.map((project) => (
                      <div
                        key={project.slug}
                        className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] flex-shrink-0 snap-center bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover-float hover:shadow-lg hover:z-10 relative"
                      >
                        <Link href={`/projects/${project.slug}`}>
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
                      </div>
                    ))}
                  </div>

                  {/* Right Feathering Gradient - Only show when there's more content */}
                  <div
                    className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent transition-opacity duration-300 ${
                      showRightGradient ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Navigation Arrows with Fade Effect */}
              <button
                onClick={() => scrollCarousel("left")}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 z-20 md:flex items-center justify-center transition-all duration-300 ${
                  showLeftArrow ? "opacity-50" : "opacity-0 pointer-events-none"
                }`}
                aria-label="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 text-gray-700 dark:text-gray-300"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 z-20 md:flex items-center justify-center transition-all duration-300 ${
                  showRightArrow ? "opacity-50" : "opacity-0 pointer-events-none"
                }`}
                aria-label="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 text-gray-700 dark:text-gray-300"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedContent>

        {/* About Section */}
        <AnimatedContent className="delay-200">
          <div
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="absolute top-6 left-6">
              <PlusSign size="lg" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-16 flex items-center">
                <span className="relative">
                  About
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="aspect-square relative rounded-3xl overflow-hidden max-w-md mx-auto md:mx-0">
                  <Image src="/avatar.jpeg" alt="David Chan avatar" width={500} height={500} className="object-cover" />
                </div>

                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-normal leading-tight">
                    I help early-stage startups ship fast without compromising quality.
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    I've spent the last fifteen years building 0→1 products for the world's top tech companies. Today, I
                    partner with founders to bring their ideas to life. As a fractional design partner, I will:
                  </p>

                  <ul className="space-y-4 text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    <li className="flex items-start">
                      <PlusSign size="sm" className="mr-3 mt-1 flex-shrink-0" />
                      <span>Help you shape your product strategy without drowning in docs</span>
                    </li>
                    <li className="flex items-start">
                      <PlusSign size="sm" className="mr-3 mt-1 flex-shrink-0" />
                      <span>Quickly create high-fidelity interactive prototypes to validate ideas</span>
                    </li>
                    <li className="flex items-start">
                      <PlusSign size="sm" className="mr-3 mt-1 flex-shrink-0" />
                      <span>Collaborate directly with engineering teams to iterate swiftly</span>
                    </li>
                    <li className="flex items-start">
                      <PlusSign size="sm" className="mr-3 mt-1 flex-shrink-0" />
                      <span>Build and nurture a design team that's set up for success</span>
                    </li>
                  </ul>

                  <Link
                    href="/about"
                    className="inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 w-4 h-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <PlusSign size="lg" />
            </div>
          </div>
        </AnimatedContent>

        {/* Capabilities Section */}
        <AnimatedContent className="delay-300">
          <div
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h2 className="text-4xl font-normal mb-12 md:mb-0 md:w-1/3 flex items-center">
                  <span className="relative">
                    Capabilities
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                  </span>
                </h2>

                <div className="md:w-2/3">
                  <div className="flex flex-wrap gap-4">
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Product Design
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Branding
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Web Design
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Strategy
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      0→1 Projects
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Pitch Decks
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Design Systems
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Team Building
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Coaching
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Approach Section */}
        <AnimatedContent className="delay-400">
          <div
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-16 flex items-center">
                <span className="relative">
                  Approach
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {/* Item 1 */}
                <div className="space-y-4 relative">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-light transition-colors duration-200 flex items-center">
                    <PlusSign size="sm" className="mr-2" />
                    01
                  </div>
                  <h3 className="text-xl font-medium transition-colors duration-200">Shared ownership.</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    Whether I work independently or integrate with your team, everyone comes along the process.
                  </p>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </div>

                {/* Item 2 */}
                <div className="space-y-4 relative">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-light transition-colors duration-200 flex items-center">
                    <PlusSign size="sm" className="mr-2" />
                    02
                  </div>
                  <h3 className="text-xl font-medium transition-colors duration-200">
                    I work fast, like <span className="italic">really</span> fast.
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    Quick iteration allows us to zoom through explorations until we arrive at something that feels just
                    right.
                  </p>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </div>

                {/* Item 3 */}
                <div className="space-y-4 relative">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-light transition-colors duration-200 flex items-center">
                    <PlusSign size="sm" className="mr-2" />
                    03
                  </div>
                  <h3 className="text-xl font-medium transition-colors duration-200">Show and tell.</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    I frequently share work in progress, usually in the form of screen recordings with a voice over.
                  </p>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </div>

                {/* Item 4 */}
                <div className="space-y-4 relative">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-light transition-colors duration-200 flex items-center">
                    <PlusSign size="sm" className="mr-2" />
                    04
                  </div>
                  <h3 className="text-xl font-medium transition-colors duration-200">Bias for action.</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    I prefer creating tangible artifacts to visualize the team's ideas over lengthy documents that often
                    go ignored.
                  </p>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </div>

                {/* Item 5 */}
                <div className="space-y-4 relative">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-light transition-colors duration-200 flex items-center">
                    <PlusSign size="sm" className="mr-2" />
                    05
                  </div>
                  <h3 className="text-xl font-medium transition-colors duration-200">I work in systems.</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    Whether it's a small feature or an entire design system, I create reusable components for the team.
                  </p>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </div>

                {/* Item 6 */}
                <div className="space-y-4 relative">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-light transition-colors duration-200 flex items-center">
                    <PlusSign size="sm" className="mr-2" />
                    06
                  </div>
                  <h3 className="text-xl font-medium transition-colors duration-200">Design is thinking.</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    I am not afraid to throw away an idea and explore divergent solutions. The more the merrier!
                  </p>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Testimonials Section */}
        <AnimatedContent className="delay-500">
          <div
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-16 flex items-center">
                <span className="relative">
                  In their words
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="relative">
                {/* Carousel Container with Feathering */}
                <div className="relative overflow-hidden">
                  {/* Left Feathering Gradient - Only show when scrolled */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent transition-opacity duration-300 hidden md:block ${
                      showTestimonialsLeftGradient ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>

                  {/* Carousel */}
                  <div
                    ref={testimonialsCarouselRef}
                    id="testimonials-container"
                    className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 scrollbar-hide"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="w-[calc(100%-32px)] md:w-[calc(40%-16px)] lg:w-[calc(33.333%-22px)] aspect-square flex-shrink-0 snap-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:bg-gray-200 dark:hover:bg-gray-700 relative flex flex-col transition-all duration-200"
                      >
                        <div className="absolute top-4 right-4">
                          <PlusSign size="sm" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed flex-1 overflow-y-auto transition-colors duration-200">
                            {testimonial.quote}
                          </p>

                          <div className="flex items-center mt-6">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                              <Image
                                src={testimonial.image || "/placeholder.svg?height=100&width=100&query=portrait"}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-black dark:text-white transition-colors duration-200">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
                                {testimonial.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Feathering Gradient - Only show when there's more content */}
                  <div
                    className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent transition-opacity duration-300 hidden md:block ${
                      showTestimonialsRightGradient ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Pagination Dots - Only visible on mobile */}
                <div className="flex justify-center mt-6 md:hidden">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2.5 h-2.5 mx-1 rounded-full transition-all duration-200 ${
                        index === activeTestimonialIndex
                          ? "bg-gray-800 dark:bg-white scale-125"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows with Fade Effect */}
                <button
                  onClick={() => scrollTestimonialsCarousel("left")}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 z-20 hidden md:flex items-center justify-center transition-all duration-300 ${
                    showTestimonialsLeftArrow ? "opacity-50" : "opacity-0 pointer-events-none"
                  }`}
                  aria-label="Scroll left"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5 text-gray-700 dark:text-gray-300"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollTestimonialsCarousel("right")}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 z-20 hidden md:flex items-center justify-center transition-all duration-300 ${
                    showTestimonialsRightArrow ? "opacity-50" : "opacity-0 pointer-events-none"
                  }`}
                  aria-label="Scroll right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5 text-gray-700 dark:text-gray-300"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Footer Section */}
        <AnimatedContent className="delay-600">
          <div
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="absolute top-6 right-6">
              <PlusSign size="lg" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-16 flex items-center">
                <span className="relative">
                  Contact
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-10 space-y-6 transition-all duration-200 relative hover:bg-gray-200 dark:hover:bg-gray-700">
                  <div className="absolute top-4 left-4">
                    <PlusSign size="sm" />
                  </div>

                  <h3 className="text-2xl font-normal text-black dark:text-white transition-colors duration-200">
                    Need a Design Partner?
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    I'm currently prioritizing projects in consumer, education, and healthcare. Shoot me a note with
                    your details at{" "}
                    <a
                      href="mailto:hello@example.com"
                      className="text-black dark:text-white hover:underline transition-colors duration-200"
                    >
                      hello@example.com
                    </a>
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 pt-8 transition-colors duration-200">
                    Available in Summer '25.
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-2xl font-normal mb-8">Elsewhere</h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      Twitter
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      LinkedIn
                    </a>

                    <a
                      href="https://substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7h10" />
                        <path d="M7 12h10" />
                        <path d="M7 17h10" />
                      </svg>
                      Substack
                    </a>

                    <a
                      href="https://bsky.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3"
                      >
                        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
                        <path d="m13 12-3 3-3-3" />
                        <path d="M10 15V6" />
                      </svg>
                      Bluesky
                    </a>

                    <a
                      href="https://read.cv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                      read.cv
                    </a>

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-3"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-20 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200">
                © COPYRIGHT 2025
              </div>
            </div>

            <div className="absolute bottom-6 left-6">
              <PlusSign size="lg" />
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

const testimonials = [
  {
    quote:
      "David is a master at taming the chaos of the 0 → 1 process. He has the rare ability to jump into the early stages of open-ended projects and rapidly develop structure and systems. He is proactive, works with little to no direction — and he's also very fast!",
    name: "Tanuj Lalwani",
    title: "Head of Design, Daylight",
    image: "/confident-leader.png",
  },
  {
    quote:
      "I cannot recommend David enough. Truly world-class in every sense of the word. From helping to visualize an ambitious product story & vision, to playing an active role in bringing on senior full-time talent, and everything in between – David can seemingly do it all. Our product, team, culture, and customers are in a stronger position thanks to our time together.",
    name: "Jinen Kamdar",
    title: "CPO, Gather",
    image: "/confident-leader.png",
  },
  {
    quote:
      "David is a superb designer. He grasps what we are seeking to build and is lightning fast at turning our thoughts into designs. This facilitates a quick feedback cycle leading to designs we are all happy with in an impressively short period of time.",
    name: "Greg Dooley",
    title: "Engineering Partner, GV",
    image: "/confident-leader.png",
  },
  {
    quote:
      "Working with David transformed our product development process. His design thinking approach helped us identify user pain points we hadn't considered. Within weeks, he delivered a comprehensive design system that our engineering team could implement seamlessly. His work directly contributed to a 40% increase in user engagement.",
    name: "Sarah Chen",
    title: "Founder & CEO, Wavelength",
    image: "/confident-leader.png",
  },
  {
    quote:
      "David's ability to balance aesthetic excellence with functional design is unmatched. When we brought him in, we had a complex product with an unclear user journey. He simplified everything without sacrificing depth, creating an intuitive experience that our users love. His collaborative approach made the entire process enjoyable and educational for our team.",
    name: "Marcus Johnson",
    title: "Product Director, Nexus Health",
    image: "/confident-leader.png",
  },
]
