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
      className="min-h-screen grid grid-cols-10 gap-12 px-16 items-center relative"
    >
      {/* LEFT COLUMN: Text content - 40% width */}
      <div className="col-start-1 col-end-5">
        <div className="relative h-[50vh]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute top-0 left-0 w-full transition-all duration-700 ease-out"
              style={{
                opacity: currentSlide === i ? 1 : 0,
                transform: `translateY(${currentSlide === i ? '0px' : '40px'})`,
                pointerEvents: currentSlide === i ? 'auto' : 'none',
              }}
            >
              <h2 className="text-[27px] lg:text-[45px] font-bold mb-6 break-words">{slide.title}</h2>
              <p className="text-[15px] lg:text-[20px] text-gray-600 leading-relaxed">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Media content - 60% width, ALWAYS 100vh */}
      <div className="col-start-5 col-end-11">
        <div className="relative h-screen">
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
                  className="w-full h-full object-cover rounded-4xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={slide.media} type="video/mp4" />
                </video>
              ) : (
                <div className="relative w-full h-full rounded-4xl overflow-hidden bg-gray-100">
                  <Image
                    src={slide.media}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION DOTS - Fixed to right of image */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            className="group"
            aria-label={`Slide ${i + 1}`}
          >
            <span
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? 'bg-black scale-125'
                  : 'bg-gray-300 group-hover:bg-gray-400'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
