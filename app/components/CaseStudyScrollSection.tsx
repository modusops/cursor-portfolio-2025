'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Slide {
  title: string;
  description: string;
  media: string;
  isVideo?: boolean;
  isLottie?: boolean;
}

interface CaseStudyScrollSectionProps {
  slides: Slide[];
}

export function CaseStudyScrollSection({ slides }: CaseStudyScrollSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [isLocked, setIsLocked] = useState(false);
  const [hasSnapped, setHasSnapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const isSnapping = useRef(false);

  // Scroll snapping effect - snaps section to top when approaching
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastScrollY = window.scrollY;
    let scrollDirection: 'up' | 'down' = 'down';

    const handleSnap = () => {
      const rect = container.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const sectionTop = rect.top + currentScrollY;
      const viewportHeight = window.innerHeight;
      
      // Determine scroll direction
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
      
      // Check if section is within 200px of viewport top and below viewport (scrolling down)
      const distanceFromTop = rect.top;
      const isInSnapZoneDown = distanceFromTop > 0 && distanceFromTop <= 200;
      
      // Check if section is within 200px of viewport bottom and above viewport (scrolling up)
      const distanceFromBottom = viewportHeight - rect.bottom;
      const isInSnapZoneUp = rect.bottom > 0 && distanceFromBottom > 0 && distanceFromBottom <= 200;
      
      // Snap when scrolling down toward section
      if (isInSnapZoneDown && scrollDirection === 'down' && !hasSnapped && !isSnapping.current) {
        isSnapping.current = true;
        setHasSnapped(true);
        
        // Smooth scroll to section top
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
        
        // Reset snapping flag after animation completes
        setTimeout(() => {
          isSnapping.current = false;
        }, 1000);
      }
      
      // Snap when scrolling up toward section
      if (isInSnapZoneUp && scrollDirection === 'up' && !hasSnapped && !isSnapping.current) {
        isSnapping.current = true;
        setHasSnapped(true);
        
        // Smooth scroll to section top
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
        
        // Reset snapping flag after animation completes
        setTimeout(() => {
          isSnapping.current = false;
        }, 1000);
      }
      
      // Reset hasSnapped when section scrolls out of view above or below viewport
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        setHasSnapped(false);
      }
    };

    // Use scroll event to detect approach
    window.addEventListener('scroll', handleSnap, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleSnap);
    };
  }, [hasSnapped]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate section midpoint and viewport center
      const sectionMid = (rect.top + rect.bottom) / 2;
      const viewportMid = viewportHeight / 2;
      const distanceFromCenter = Math.abs(sectionMid - viewportMid);
      const tolerance = 150;

      // Section must be near center to START hijacking
      const isNearCenter = distanceFromCenter <= tolerance;

      // If not locked and not near center, let scroll pass through
      if (!isLocked && !isNearCenter) {
        return;
      }

      // Debounce: Ignore rapid scroll events while transitioning
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }

      const direction = e.deltaY > 0 ? 'down' : 'up';

      if (direction === 'down') {
        if (currentSlide < slides.length - 1) {
          // Lock and move to next slide
          e.preventDefault();
          setIsLocked(true);
          setScrollDirection('down');
          isTransitioning.current = true;
          setCurrentSlide(prev => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 400);
        } else {
          // At last slide - unlock and allow scroll through
          setIsLocked(false);
        }
      } else {
        if (currentSlide > 0) {
          // Lock and move to previous slide
          e.preventDefault();
          setIsLocked(true);
          setScrollDirection('up');
          isTransitioning.current = true;
          setCurrentSlide(prev => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 400);
        } else {
          // At first slide - unlock and allow scroll through
          setIsLocked(false);
        }
      }
    };

    // Listen to wheel events with passive: false to allow preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide, isLocked, slides.length]);

  // Handle Lottie animation playback when slide becomes active
  useEffect(() => {
    // Wait for transition to complete before playing animation
    const timer = setTimeout(() => {
      slides.forEach((slide, i) => {
        if (slide.isLottie) {
          // Use containerRef to scope the query to this specific section
          const container = containerRef.current;
          if (container) {
            const lottiePlayer = container.querySelector(`lottie-player[data-slide-index="${i}"]`) as any;
            if (lottiePlayer) {
              if (currentSlide === i) {
                // Stop, reset to beginning, and play for active slide
                lottiePlayer.stop();
                lottiePlayer.seek(0);
                // Add a small delay to ensure the element is ready
                setTimeout(() => {
                  lottiePlayer.play();
                }, 50);
              } else {
                // Stop and reset inactive slides
                lottiePlayer.stop();
                lottiePlayer.seek(0);
              }
            }
          }
        }
      });
    }, 400); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentSlide, slides]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 px-8 md:px-16 items-center relative min-h-[900px]"
    >
      {/* LEFT COLUMN: Text content - 4 columns (40%) */}
      <div className="col-span-1 md:col-span-4 relative h-[900px]">
        {slides.map((slide, i) => {
          const isActive = currentSlide === i;
          let translateY = '0px';
          
          if (!isActive) {
            // Determine animation direction based on scroll direction and slide position
            if (scrollDirection === 'down') {
              // Scrolling down: incoming slides come from below (positive Y)
              translateY = i > currentSlide ? '40px' : '-40px';
            } else {
              // Scrolling up: incoming slides come from above (negative Y)
              translateY = i < currentSlide ? '-40px' : '40px';
            }
          }
          
          return (
          <div
            key={i}
            className="absolute top-0 left-0 w-full transition-all duration-700 ease-out flex flex-col gap-3"
            style={{
              opacity: isActive ? 1 : 0,
              transform: `translateY(${translateY})`,
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            <h2 className="text-[28px] md:text-[36px] leading-[34px] md:leading-[40px] font-normal break-words text-black dark:text-white transition-colors duration-200">{slide.title}</h2>
            <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[30px] text-black dark:text-white break-words transition-colors duration-200">
              {slide.description}
            </p>
          </div>
          );
        })}
      </div>

      {/* RIGHT COLUMN: Media content - 6 columns (60%), 900px height */}
      <div className="col-span-1 md:col-span-6 relative h-[900px]">
        <div className="relative w-full h-full rounded-[32px] overflow-hidden transition-colors duration-200" style={{ backgroundColor: '#EDEFF2' }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                opacity: currentSlide === i ? 1 : 0,
                pointerEvents: currentSlide === i ? 'auto' : 'none',
              }}
            >
              {slide.isVideo ? (
                <video
                  className="w-full h-full object-contain rounded-[32px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={slide.media} type="video/mp4" />
                </video>
              ) : slide.isLottie ? (
                <div className="relative w-full h-full rounded-[32px] overflow-hidden flex items-center justify-center">
                  <lottie-player
                    data-slide-index={i}
                    src={slide.media}
                    background="transparent"
                    speed="1"
                    style={{ width: '100%', height: '80%', maxWidth: '100%', maxHeight: '80%' }}
                  />
                </div>
              ) : (
                <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                  <Image
                    src={slide.media}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority={i === 0}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION DOTS - Fixed to right edge of viewport */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
        {slides.map((_, i) => {
          const handleDotClick = () => {
            if (i === currentSlide) return; // Already on this slide
            
            // Determine scroll direction
            const direction = i > currentSlide ? 'down' : 'up';
            
            // Lock section and set direction
            setIsLocked(true);
            setScrollDirection(direction);
            isTransitioning.current = true;
            
            // Update slide
            setCurrentSlide(i);
            
            // Ensure section is visible by snapping to top if needed
            const container = containerRef.current;
            if (container) {
              const rect = container.getBoundingClientRect();
              const sectionTop = rect.top + window.scrollY;
              
              // Only snap if section is not already at top
              if (rect.top > 50) {
                window.scrollTo({
                  top: sectionTop,
                  behavior: 'smooth'
                });
              }
            }
            
            // Reset transition flag
            setTimeout(() => {
              isTransitioning.current = false;
            }, 400);
          };
          
          return (
            <button
              key={i}
              className="group cursor-pointer"
              aria-label={`Go to slide ${i + 1}`}
              onClick={handleDotClick}
            >
              <span
                className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? 'bg-black dark:bg-white scale-125'
                    : 'bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
