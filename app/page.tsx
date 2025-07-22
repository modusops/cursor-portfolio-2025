"use client"

import Link from "next/link"
import Image from "next/image"
import { PlusSign } from "./components/plus-sign"
import { useEffect, useState, useRef } from "react"
import { AnimatedContent } from "@/components/animated-content"
import styles from './styles/fade.module.css'
import { TypewriterText } from "./components/TypewriterText"

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

  useEffect(() => {
    const updateSection = () => {
      // First, remove all active classes (reset all animations)
      document.querySelectorAll(`.${styles['fade-in']}`).forEach(el => {
        el.classList.remove(styles.active);
      });
      
      setTimeout(() => {
        // Add active class to hero text with delay
        document.querySelectorAll(`.${styles['fade-in']}`).forEach((el, i) => {
          setTimeout(() => el.classList.add(styles.active), i * 400);
        });
      }, 600);
    };

    // Run animation on mount
    updateSection();
  }, []);

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

        <nav className="fixed bottom-6 md:top-6 md:bottom-auto left-1/2 -translate-x-1/2 z-50 flex items-center md:justify-between justify-center backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 py-2 px-3 rounded-full shadow-lg border border-white/30 dark:border-gray-700/30 transition-all duration-200
  w-max md:w-[90%] lg:w-1/2">

          <h1 className="text-xl font-medium text-black dark:text-white font-sans pl-2 drop-shadow-sm hidden md:block">Dave Chan</h1>

          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="nav-item active px-5 py-2 rounded-full bg-black dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm font-medium transition-all duration-200 relative border border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 hover:border-gray-800 dark:hover:border-gray-100 drop-shadow-sm"
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
              className="nav-item px-5 py-2 text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white rounded-full transition-all text-sm font-medium relative hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-sm border border-transparent hover:border-black/20 dark:hover:border-white/20 drop-shadow-sm"
            >
              Contact
            </Link>
          </div>
        </nav>


        {/* Hero Section - Reduced top padding on mobile */}
        <AnimatedContent>
          <div className="py-8 md:pt-24 md:pb-20 relative">
            <div className="absolute top-0 left-0 w-px h-20 bg-gray-800/30 dark:bg-white/20"></div>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-[200] leading-tight tracking-wider text-black dark:text-white max-w-5xl transition-colors duration-200 font-sans ${styles['fade-in']}`}
              style={{ fontWeight: 200, letterSpacing: "-0.01em" }}
            >
              <TypewriterText 
                text="PRODUCT DESIGNER BASED IN SEATTLE. BUILDER. OBSESSES OVER CRAFT."
                delay={50}
                className="inline-block"
                style={{ fontWeight: 200, letterSpacing: "-0.01em" }}
              />
            </h1>
            <div className="absolute bottom-0 right-0 w-px h-20 bg-gray-800/30 dark:bg-white/20"></div>
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
                  <div className="flex flex-col gap-6">
                    {projects.map((project) => {
                      const isComingSoon = project.slug === "WIP";
                      
                      return (
                        <div
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
                            <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
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
                        </div>
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
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 scrollbar-hide"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {projects.map((project) => {
                      const isComingSoon = project.slug === "WIP";
                      
                      return (
                        <div
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
                            <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
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
                        </div>
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
            className="py-20 bg-white dark:bg-black text-black dark:text-white rounded-xl my-20 border border-gray-200 dark:border-gray-700 transition-colors duration-200 relative"
            style={{ boxShadow: "rgba(255, 255, 255, 0.3) 0px 1px 2px 0px inset" }}
          >
            <div className="absolute top-6 left-6">
              <PlusSign size="lg" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-normal mb-16 flex items-center">
                <span className="relative">
                  Experience
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-start">
                {/* <div className="aspect-square relative overflow-hidden max-w-md mx-auto md:mx-0">
                  <Image src="/headshot.png" alt="David Chan avatar" width={500} height={500} className="object-cover" />
                </div> */}

                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-normal leading-tight">
                    I help teams ship fast (and learn) without compromising quality.
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    I've helped build products for the world's top tech companies.
                    As a seasoned product designer with experience building and shipping compelling digital experiences on desktop, mobile, and web for consumer, B2B SaaS, enterprise and AI products, 
                  I believe great design is half art and half science and always stem from a deep understanding of the user and the business. 
                  </p>

              <h3 className="text-xl font-medium mt-12 mb-4 text-black dark:text-white transition-colors duration-200">
                Experience
              </h3>

              <ul className="space-y-6">
                <li>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Image
                        src="/ltk-logo.png"
                        alt="LTK logo"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        LTK
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Staff Product Designer
                      </span>
                      <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                        2023-Present
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Image
                        src="/sono-logo.png"
                        alt="Sono logo"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Sono
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Founding Product Designer
                      </span>
                      <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                        2022-2023
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Image
                        src="/shopify-logo.png"
                        alt="Shopify logo"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Shopify
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Product Design Manager
                      </span>
                      <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                        2021-2022
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Image
                        src="/adobe-logo.png"
                        alt="Adobe logo"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Adobe
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Senior Product Designer
                      </span>
                      <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                        2019-2022
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Image
                        src="/tesla-logo.png"
                        alt="Tesla logo"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Tesla
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Senior Product Designer
                      </span>
                      <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                        2018-2019
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Image
                        src="/shutterstock-logo.png"
                        alt="Shutterstock logo"
                        width={20}
                        height={20}
                        className="mr-3"
                      />
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Shutterstock
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-black dark:text-white transition-colors duration-200">
                        Senior Product Designer
                      </span>
                      <span className="text-gray-600 ml-2 dark:text-gray-400 transition-colors duration-200">
                        2016-2018
                      </span>
                    </div>
                  </div>
                </li>
              </ul>

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
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h2 className="text-4xl font-normal mb-12 md:mb-0 md:w-1/3 flex items-center">
                  <span className="relative">
                    Passions
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gray-800/15 dark:bg-white/20"></div>
                  </span>
                </h2>

                <div className="md:w-2/3">
                  <div className="flex flex-wrap gap-4">
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Information Architecture
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      User Research
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Usability
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      iOS Design
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
                      Scalable Designs
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
                    <div className="border border-gray-300 dark:border-gray-700 rounded-full px-8 py-4 text-lg transition-colors duration-200 flex items-center">
                      <PlusSign size="sm" className="mr-2" />
                      Prototyping
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
                    Wanna get in touch?
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    Happy to chat! Reach out to me at{" "}
                    <a
                      href="mailto:juntochan@proton.me"
                      className="text-black dark:text-white hover:underline transition-colors duration-200"
                    >
                      juntochan@proton.me
                    </a>
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
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-light border border-gray-200 dark:border-gray-700 transition-colors duration-200"><div className="w-2 h-2 rounded-full bg-violet-700 border border-violet-800 mr-2"></div>Updated July 21, 2025</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  )
}

const projects = [
  {
    title: "LTK Chat",
    description: "Build stronger creator-led communities",
    image: "/feature-thumbnail-1.png",
    slug: "ltk-chat",
  },
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
    title: "Experiments",
    description: "For play learning",
    image: "/feature-thumbnail-4.png",
    slug: "experiments",
  },
  {
    title: "Coming Soon",
    description: "New design projects",
    image: "/feature-thumbnail-3.png",
    slug: "WIP",
  },
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
      "David is a master at taming the chaos of the 0 → 1 process. He has the rare ability to jump into the early stages of open-ended projects and rapidly develop structure and systems. He is proactive, works with little to no direction — and he's also very fast!",
    name: "Tanuj Lalwani",
    title: "Head of Design, Daylight",
    image: "/diverse-person-portrait.png",
    linkedin: "https://www.linkedin.com/in/tanujlalwani/",
  },
  {
    quote:
      "I cannot recommend David enough. Truly world-class in every sense of the word. From helping to visualize an ambitious product story & vision, to playing an active role in bringing on senior full-time talent, and everything in between – David can seemingly do it all. Our product, team, culture, and customers are in a stronger position thanks to our time together.",
    name: "Jinen Kamdar",
    title: "CPO, Gather",
    image: "/diverse-person-portrait.png",
    linkedin: "https://www.linkedin.com/in/jinen/",
  },
  {
    quote:
      "David is a superb designer. He grasps what we are seeking to build and is lightning fast at turning our thoughts into designs. This facilitates a quick feedback cycle leading to designs we are all happy with in an impressively short period of time.",
    name: "Greg Dooley",
    title: "Engineering Partner, GV",
    image: "/diverse-person-portrait.png",
    linkedin: "https://www.linkedin.com/in/greg-dooley-03809924/",
  },
  {
    quote:
      "Working with David transformed our product development process. His design thinking approach helped us identify user pain points we hadn't considered. Within weeks, he delivered a comprehensive design system that our engineering team could implement seamlessly. His work directly contributed to a 40% increase in user engagement.",
    name: "Sarah Chen",
    title: "Founder & CEO, Wavelength",
    image: "/diverse-person-portrait.png",
    linkedin: "https://www.linkedin.com/in/havedare/",
  },
  {
    quote:
      "David's ability to balance aesthetic excellence with functional design is unmatched. When we brought him in, we had a complex product with an unclear user journey. He simplified everything without sacrificing depth, creating an intuitive experience that our users love. His collaborative approach made the entire process enjoyable and educational for our team.",
    name: "Marcus Johnson",
    title: "Product Director, Nexus Health",
    image: "/diverse-person-portrait.png",
    linkedin: "https://www.linkedin.com/in/marcus-johnson-755749216/",
  },
]
