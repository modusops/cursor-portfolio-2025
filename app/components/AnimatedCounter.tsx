'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number; // Target value (e.g., 64 for 64%)
  suffix?: string; // Suffix like '%' or '+'
  duration?: number; // Animation duration in ms
  decimals?: number; // Number of decimal places
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  duration = 2000,
  decimals = 0 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = Date.now();
            const startValue = 0;

            const updateCounter = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Linear animation (no easing)
              const currentValue = startValue + (value - startValue) * progress;
              
              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                setCount(value); // Ensure we end exactly at target value
              }
            };

            requestAnimationFrame(updateCounter);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated, value, duration]);

  return (
    <div ref={elementRef} className="inline">
      {count.toFixed(decimals)}{suffix}
    </div>
  );
}

