'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Slide {
  title: string;
  description: string;
  media: string;
  isVideo?: boolean;
}

interface CaseStudyScrollSectionProps {
  slides: Slide[];
}

export function CaseStudyScrollSection({ slides }: CaseStudyScrollSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

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
        {slides.map((_, i) => (
          <button
            key={i}
            className="group"
            aria-label={`Slide ${i + 1}`}
          >
            <span
              className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? 'bg-black dark:bg-white'
                  : 'bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
