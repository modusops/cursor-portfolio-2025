"use client"

import Link from "next/link"
import Image from "next/image"
import { PlusSign } from "./components/plus-sign"
import { useEffect, useState, useRef } from "react"
import { AnimatedContent } from "@/components/animated-content"
import { TypewriterText } from "./components/TypewriterText"
import { Navigation } from "./components/Navigation"
import { SpotlightPill } from "@/components/spotlight-pill"
import { SpotlightCard } from "@/components/spotlight-card"

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
        {/* <header className="flex items-center justify-between pt-[82px] md:pt-6 pb-6 relative">
          <div className="flex items-center">
            <PlusSign className="mr-3" />
            <Link href="/">
              <h1 className="text-xl font-medium text-black dark:text-white font-sans">David Chan</h1>
            </Link>
          </div>

          <div className="md:block md:w-[216px]"></div>
        </header> */}

        <Navigation hideOnScroll={true} />


        {/* Hero Section - Reduced top padding on mobile */}
        <AnimatedContent>
          <div className="py-8 md:pt-44 md:pb-20 relative stagger-children">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-[200] leading-tight tracking-wider text-black dark:text-white max-w-5xl transition-colors duration-200 font-sans"
              style={{ fontWeight: 200, letterSpacing: "-0.01em" }}
            >
              <TypewriterText 
                text="DESIGNER, STRATEGIST, AND BUILDER BASED IN SEATTLE."
                delay={50}
                className="inline-block"
                style={{ fontWeight: 200, letterSpacing: "-0.01em" }}
              />
            </h1>
            <p className="text-lg font-light text-gray-600 dark:text-gray-400 transition-colors duration-200 mt-8 max-w-5xl">
              I design products with an emphasis on simplicity, practicality and craft. I have a decade of experience working on globally scaled products as well as taking products from zero to one.
            </p>
          </div>
        </AnimatedContent>

        {/* Projects Carousel */}
        <AnimatedContent className="delay-100">
          <div className="py-0 relative">
            {/* <div className="flex items-center mb-8">
              <PlusSign size="sm" className="mr-3" />
              <h2 className="text-2xl font-medium">Featured Projects</h2>
            </div> */}

            <div className="relative">
              {/* Mobile: Vertical Stack */}
              <div className="md:hidden">
                <div className="pt-8 pb-8 px-4 -mx-4">
                  <div className="flex flex-col gap-6 stagger-children">
                    {projects.map((project) => {
                      const isComingSoon = project.slug === "WIP";
                      
                      return (
                        <SpotlightCard
                          key={project.slug}
                          className={`group w-full bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover-float relative flex flex-col transition-colors duration-500 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md hover:z-10 ${
                            isComingSoon ? "cursor-not-allowed" : ""
                          }`}
                        >
                          {isComingSoon ? (
                            <div className="flex flex-col h-full pointer-events-none">
                              <div className="aspect-[4/3] relative mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                <Image
                                  src={project.image || "/placeholder.jpg"}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="mt-auto">
                                <h2 className="text-2xl font-semibold text-black dark:text-white mb-1 transition-colors duration-200" style={{ letterSpacing: '-0.03em' }}>
                                  {project.title}
                                </h2>
                                <p className="text-xs font-light text-gray-500 dark:text-white transition-colors duration-200" style={{ letterSpacing: '-0.03em' }}>
                                  {project.description}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <Link href={project.slug === "creator" ? "/case-study-ltk-dashboard-redesign" : project.slug === "lighten" ? "/project-lighten-design" : project.slug === "ltk-chat" ? "/case-study-ltk-chat-design" : `/projects/${project.slug}`} className="flex flex-col h-full">
                              <div className="aspect-[4/3] relative mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                <Image
                                  src={project.image || "/placeholder.jpg"}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="mt-auto">
                                <h2 className="text-2xl font-semibold text-black dark:text-white mb-1 transition-colors duration-200" style={{ letterSpacing: '-0.03em' }}>
                                  {project.title}
                                </h2>
                                <p className="text-xs font-light text-gray-500 dark:text-white transition-colors duration-200" style={{ letterSpacing: '-0.03em' }}>
                                  {project.description}
                                </p>
                              </div>
                            </Link>
                          )}
                        </SpotlightCard>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Desktop: Carousel Container with Feathering */}
              <div className="hidden md:block relative overflow-visible">
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
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 scrollbar-hide stagger-children"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {projects.map((project) => {
                      const isComingSoon = project.slug === "WIP";
                      
                      return (
                        <SpotlightCard
                          key={project.slug}
                          className={`group min-w-[85%] md:min-w-[45%] lg:min-w-[30%] flex-shrink-0 snap-center bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover-float relative flex flex-col transition-colors duration-500 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md hover:z-10 ${
                            isComingSoon ? "cursor-not-allowed" : ""
                          }`}
                        >
                          {isComingSoon ? (
                            <div className="flex flex-col h-full pointer-events-none">
                              <div className="aspect-[4/3] relative mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                <Image
                                  src={project.image || "/placeholder.jpg"}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="mt-auto">
                                <h2 className="text-2xl font-semibold text-black dark:text-white mb-1 transition-colors duration-200" style={{ letterSpacing: '-0.03em' }}>
                                  {project.title}
                                </h2>
                                <p className="text-xs font-light text-gray-500 dark:text-white transition-colors duration-200" style={{ letterSpacing: '-0.03em' }}>
                                  {project.description}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <Link href={project.slug === "creator" ? "/case-study-ltk-dashboard-redesign" : project.slug === "lighten" ? "/project-lighten-design" : project.slug === "ltk-chat" ? "/case-study-ltk-chat-design" : `/projects/${project.slug}`} className="flex flex-col h-full">
                              <div className="aspect-[4/3] relative mb-6 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                <Image
                                  src={project.image || "/placeholder.jpg"}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="mt-auto">
                                <h2 className="text-2xl font-semibold text-black dark:text-white mb-1 transition-colors duration-200" style={{ letterSpacing: '-0.03em' }}>
                                  {project.title}
                                </h2>
                                <p className="text-xs font-light text-gray-500 dark:text-white transition-colors duration-200" style={{ letterSpacing: '-0.03em' }}>
                                  {project.description}
                                </p>
                              </div>
                            </Link>
                          )}
                        </SpotlightCard>
                      );
                    })}
                  </div>

                  {/* Right Feathering Gradient - Only show when there's more content */}
                  <div
                    className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent transition-opacity duration-300 ${
                      showRightGradient ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Navigation Arrows with Fade Effect - Hidden on mobile */}
              <button
                onClick={() => scrollCarousel("left")}
                className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 z-20 items-center justify-center transition-all duration-300 ${
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
                className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 z-20 items-center justify-center transition-all duration-300 ${
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
            className="py-12 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="absolute top-6 left-6">
              <PlusSign size="lg" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-12 flex items-center animate-item">
                <span className="relative">
                  Experience
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
                {/* <div className="aspect-square relative overflow-hidden max-w-md mx-auto md:mx-0">
                  <Image src="/headshot.png" alt="David Chan avatar" width={500} height={500} className="object-cover" />
                </div> */}

                <div className="space-y-8 stagger-children">
                  <h3 className="text-3xl md:text-4xl font-normal leading-tight">
                    I help teams ship fast (and learn) without compromising quality.
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    I've helped build products for the world's top tech companies.
                    As a seasoned product designer with experience building and shipping compelling digital experiences on desktop, mobile, and web for consumer, B2B SaaS, enterprise and AI products, 
                  I believe great design is half art and half science and always stem from a deep understanding of the user and the business. 
                  </p>

              {/* <h3 className="text-xl font-medium mt-12 mb-6 text-black dark:text-white transition-colors duration-200">
                Experience
              </h3> */}

              {/* Horizontal Scrolling Carousel */}
              <div className="relative overflow-hidden h-20">
                {/* Left Feathering Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent"></div>
                
                {/* Right Feathering Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent"></div>
                
                <div className="inline-block whitespace-nowrap animate-scroll-left h-full align-middle">
                  {/* Duplicate items for seamless loop */}
                  {[...experienceItems, ...experienceItems].map((item, index) => (
                    <div
                      key={`${item.company}-${index}`}
                      className="inline-block align-middle px-6 md:px-8 h-full"
                    >
                      <div className="flex items-center gap-2 md:gap-3 h-full">
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={24}
                          height={24}
                          className="flex-shrink-0"
                        />
                        <span className="font-medium text-sm md:text-base text-black dark:text-white transition-colors duration-200">
                          {item.company}
                        </span>
                        {/* <span className="text-gray-400 dark:text-gray-500">•</span> */}
                        <span className="font-light text-sm md:text-base text-gray-600 dark:text-gray-400 transition-colors duration-200">                          
                          {item.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                  {/* <ul className="space-y-4 text-gray-600 dark:text-gray-400 transition-colors duration-200">
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
                  </ul> */}

                  {/* <Link
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
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <PlusSign size="lg" />
            </div>
          </div>
        </AnimatedContent>

        {/* Passionate about Section */}
        <AnimatedContent className="delay-300">
          <div
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-16 flex items-center animate-item">
                <span className="relative">
                  Passions
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="flex flex-wrap gap-4 stagger-children">
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Information Architecture
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      User Research
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Usability
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      iOS Design
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Branding
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Web Design
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Strategy
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      0→1 Projects
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Scalable Designs
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Design Systems
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Team Building
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Coaching
                    </SpotlightPill>
                    <SpotlightPill>
                      <PlusSign size="sm" className="mr-2" />
                      Prototyping
                    </SpotlightPill>
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
              <h2 className="text-4xl font-normal mb-16 flex items-center animate-item">
                <span className="relative">
                  Approach
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 stagger-children">
                {/* Item 1 */}
                <div className="space-y-4 relative">
                  <div className="text-gray-400 dark:text-gray-500 text-xl font-light transition-colors duration-200 flex items-center">
                    <PlusSign size="sm" className="mr-2" />
                    01
                  </div>
                  <h3 className="text-xl font-medium transition-colors duration-200">Shared ownership.</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    Whether I work independently or integrate with a team, everyone comes along the process.
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
                    Quick iteration allows me to zoom through explorations until I arrive at something that feels just
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
                    I frequently share work in progress with teammates to quickly align on the problem areas to help projects move forward. There are no sacred cows.
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
                    go ignored. I am also not afraid to throw away an idea and explore divergent solutions. The best way to learn is to fail.
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
                    As Saul Bass is quoted saying "Design is thinking made visual." I treat design as a tool that allows me to visually communicate my ideas which I use to discuss at a conceptual level. 
                  </p>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Testimonials Section */}
        <AnimatedContent className="delay-450">
          <div
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-12 flex items-center animate-item">
                <span className="relative">
                  Testimonials
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              {/* Horizontal Scrolling Carousel */}
              <div className="relative overflow-hidden">
                {/* Left Feathering Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent"></div>
                
                {/* Right Feathering Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent"></div>
                
                <div className="inline-block whitespace-nowrap align-top" style={{ animation: 'scroll-left 54s linear infinite' }}>
                  {/* Duplicate items for seamless loop */}
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div
                      key={`${testimonial.name}-${index}`}
                      className="inline-block align-top px-8 w-[320px]"
                    >
                      <div className="flex flex-col gap-4">
                        <p className="text-gray-600 dark:text-gray-400 text-base leading-6 transition-colors duration-200 whitespace-normal">
                          {testimonial.quote}
                        </p>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={28}
                              height={28}
                              className="rounded-full flex-shrink-0"
                            />
                            <span className="font-medium text-l text-black dark:text-white transition-colors duration-200">
                              {testimonial.name}
                            </span>
                          </div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm leading-6 transition-colors duration-200">
                            {testimonial.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <PlusSign size="lg" />
            </div>
          </div>
        </AnimatedContent>

        {/* Writing Section */}
        <AnimatedContent className="delay-500">
          <div
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-16 flex items-center animate-item">
                <span className="relative">
                  Writing
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 stagger-children">
                {/* Article 1 */}
                <a
                  href="https://medium.com/@DaveChan/a-short-guide-to-remote-working-1a088c9097f1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group transition-opacity duration-200"
                >
                  <h3 className="text-xl font-medium transition-colors duration-200 group-hover:underline group-hover:text-gray-700 dark:group-hover:text-gray-300">A Guide To Remote Working</h3>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </a>

                {/* Article 2 */}
                <a
                  href="https://medium.com/@DaveChan/interaction-design-framework-for-product-design-planning-41498438a435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group transition-opacity duration-200"
                >
                  <h3 className="text-xl font-medium transition-colors duration-200 group-hover:underline group-hover:text-gray-700 dark:group-hover:text-gray-300">A Design Framework for Interaction Design</h3>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </a>

                {/* Article 3 */}
                <a
                  href="https://medium.com/@DaveChan/how-starting-a-physical-product-project-made-me-a-better-digital-product-designer-part-1-317d4f046b53"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group transition-opacity duration-200"
                >
                  <h3 className="text-xl font-medium transition-colors duration-200 group-hover:underline group-hover:text-gray-700 dark:group-hover:text-gray-300">How Starting A Physical Product Project Made Me a Better Designer (Part 1)</h3>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </a>

                {/* Article 4 */}
                <a
                  href="https://medium.com/@DaveChan/how-starting-a-physical-product-project-made-me-a-better-digital-product-designer-part-2-307fd5e0fe71"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group transition-opacity duration-200"
                >
                  <h3 className="text-xl font-medium transition-colors duration-200 group-hover:underline group-hover:text-gray-700 dark:group-hover:text-gray-300">How Starting A Physical Product Project Made Me a Better Designer (Part 2)</h3>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </a>

                {/* Article 5 */}
                <a
                  href="https://medium.com/@DaveChan/what-is-the-difference-between-a-single-page-app-spa-and-a-webpage-f46f06ab8c0a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group transition-opacity duration-200"
                >
                  <h3 className="text-xl font-medium transition-colors duration-200 group-hover:underline group-hover:text-gray-700 dark:group-hover:text-gray-300">The Difference Between A Single Page App and a Webpage</h3>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </a>

                {/* Article 6 */}
                <a
                  href="https://medium.com/@DaveChan/level-up-your-teams-remote-work-culture-with-this-reading-list-2e32393dd19a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group transition-opacity duration-200"
                >
                  <h3 className="text-xl font-medium transition-colors duration-200 group-hover:underline group-hover:text-gray-700 dark:group-hover:text-gray-300">A Reading List for Managers of Remote Teams</h3>
                  <div className="absolute -bottom-8 left-0 right-0 h-px bg-gray-800/5 dark:bg-white/10"></div>
                </a>
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
              <h2 className="text-4xl font-normal mb-16 flex items-center animate-item">
                <span className="relative">
                  Contact
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 stagger-children">
                {/* Contact Info */}
                <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-10 space-y-6 transition-all duration-200 relative hover:bg-gray-200 dark:hover:bg-gray-700">
                  <div className="absolute top-4 left-4">
                    <PlusSign size="sm" />
                  </div>

                  <h3 className="text-2xl font-normal text-black dark:text-white transition-colors duration-200">
                    Wanna get in touch?
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    Happy to chat! Reach out to me on LinkedIn. I look forward to connecting with you.
                    {/* <a
                      href="mailto:juntochan@proton.me"
                      className="text-black dark:text-white hover:underline transition-colors duration-200"
                    >
                      my via social profiles
                    </a> */}
                  </p>

                  {/* <p className="text-gray-700 dark:text-gray-300 pt-8 transition-colors duration-200">
                    Available in Summer '25.
                  </p> */}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-2xl font-normal mb-8">Elsewhere</h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8">
                    <a
                      href="https://github.com/modusops?tab=overview&from=2025-07-01&to=2025-07-19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 16 16"
                      fill="currentColor" 
                      className="mr-3" 
                      >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                      GitHub
                    </a>

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



                    {/* <a
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
                    </a> */}

                    {/* <a
                      href="https://bsky.app/profile/designpappa.bsky.social"
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
                    </a> */}

                    {/* <a
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
                    </a> */}

                    {/* <a
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
                    </a> */}
                  </div>
                </div>
              </div>

            </div>

            <div className="absolute bottom-6 left-6">
              <PlusSign size="lg" />
            </div>
          </div>
          <div className="mt-20 mb-10 pb-20 md:pb-0 text-center space-y-3">
            <div className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200">
              © COPYRIGHT 2025 <a href="https://github.com/modusops?tab=overview&from=2025-07-01&to=2025-07-06" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">Built with Cursor</a>
            </div>
            <div className="flex justify-center">
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-light border border-gray-200 dark:border-gray-700 transition-colors duration-200"><div className="w-2 h-2 rounded-full bg-violet-500 border border-violet-400 mr-2 animate-glow-flicker"></div>Updated November 01, 2025</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  )
}

const experienceItems = [
  {
    logo: "/ltk-logo.png",
    company: "LTK",
    role: "Staff Product Designer",
    date: "2023-Present",
  },
  {
    logo: "/sono-logo.png",
    company: "Sono",
    role: "Founding Product Designer",
    date: "2022-2023",
  },
  {
    logo: "/shopify-logo.png",
    company: "Shopify",
    role: "Product Design Manager",
    date: "2021-2022",
  },
  {
    logo: "/adobe-logo.png",
    company: "Adobe",
    role: "Senior Product Designer",
    date: "2019-2022",
  },
  {
    logo: "/tesla-logo.png",
    company: "Tesla",
    role: "Senior Product Designer",
    date: "2018-2019",
  },
  {
    logo: "/shutterstock-logo.png",
    company: "Shutterstock",
    role: "Senior Product Designer",
    date: "2016-2018",
  },
];

const projects = [
  {
    title: "LTK Creator",
    description: "Helping creators understand their business",
    image: "/feature-thumbnail-2.png",
    slug: "creator",
  },
  {
    title: "Lighten AI",
    description: "Using AI to unlock real-time patient insights",
    image: "/feature-thumbnail-5.png",
    slug: "lighten",
  },
  {
    title: "LTK Chat",
    description: "Building stronger creator-led communities",
    image: "/feature-thumbnail-1.png",
    slug: "ltk-chat",
  },
  {
    title: "Sono",
    description: "Building the future of knowledge management",
    image: "/feature-thumbnail-6.png",
    slug: "sono",
  },
  {
    title: "Experiments",
    description: "Learning through experimentation",
    image: "/feature-thumbnail-4.png",
    slug: "experiments",
  },
  // {
  //   title: "Coming Soon",
  //   description: "New design projects",
  //   image: "/feature-thumbnail-3.png",
  //   slug: "WIP",
  // },
  // {
  //   title: "Shopify",
  //   description: "Making commerce better for everyone",
  //   image: "/shopify-hero.png",
  //   slug: "shopify",
  // },
]

const testimonials = [
  {
    quote:
      "The designs Dave delivered were world class - clean, clear, and detailed. That kind of design thinking influences more than just pixels, it shapes the product direction. He often shares working frames with clear UX expectations, which reduces guesswork for the team. He shows strong design leadership by setting up syncs with developers regularly to make sure we are aligned, that had a clear impact on the quality and consistency of what we ship.",
    name: "Ben Hilston",
    title: "Engineering Manager, LTK",
    image: "/benhilston.jpeg",
    linkedin: "https://www.linkedin.com/in/ben-hillston-3913918/",
  },
  {
    quote:
      "Dave was our first hire at Sono and completely transformed the quality of our product with his amazing UX / UI skills. We constantly hear how pleasant and intuitive Sono's UX is, and that's all Dave! Best of all, he's always ready to jump in beyond his scope of work (unprompted). He helped with marketing, sales, support, and much more. We're lucky to have found him and it has been a pleasure working w/ Dave!",
    name: "Zain Ahmed",
    title: "Founder & CEO, Sono",
    image: "/zainahmed.jpeg",
    linkedin: "https://www.linkedin.com/in/zainuahmed/",
  },
  {
    quote:
      "I highly recommend Dave for any product team. During our time together at LTK, he was laser-focused on user needs, pushed for UX excellence in execution, and served as a culture leader on our squad. In addition, he was always exploring new technology to help increase our pace and quality of work; leveraging AI to create high functionality prototypes that gave us more in-depth results in user testing. His can-do attitude will help turbo-charge your team's pace.",
    name: "Jeromy Ko",
    title: "Product Lead, LTK",
    image: "/jeromy.png",
    linkedin: "https://www.linkedin.com/in/jeromy-k-50835424/",
  },
  {
    quote:
      "Working closely with Dave, our Head of Design, has been fantastic. Not only is he a great designer, but he's also a great person! Dave's vision allows him to lay out the foundational design elements of our startup. His design system work allows engineering to efficiently deliver key features. Additionally, his ability to run workshops has been invaluable in clarifying our strategic thinking. Dave's quick and effective design solutions make him an unparalleled leader in design, and I definitely recommend him.",
    name: "Nii Mante",
    title: "Founder & CTO, Sono",
    image: "/niimante.jpeg",
    linkedin: "https://www.linkedin.com/in/nmante/",
  },
  {
    quote:
      "Dave is one of the most thoughtful and supportive designers I have ever had the pleasure of working with. During our time together at Shutterstock, where he was my manager, Dave was always available and encouraging, instructive without being prescriptive. Dave created an environment that fostered independence and empowerment while offering guidance when needed through complex design and workplace matters. His great design and managerial instincts made him a fantastic teammate and mentor and I'm lucky to have had the opportunity to work with him.",
    name: "Matthew Gottesman",
    title: "Product Designer, Meta",
    image: "/mattgottesman.jpeg",
    linkedin: "https://www.linkedin.com/in/matthewgottesman/",
  },
]
