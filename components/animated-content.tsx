"use client"

import { type ReactNode, useEffect, useState, useRef } from "react"

interface AnimatedContentProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export function AnimatedContent({ 
  children, 
  className = "", 
  delay = 0,
  threshold = 0.2 // Increased default threshold slightly
}: AnimatedContentProps) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add optional delay before setting in-view
          if (delay > 0) {
            setTimeout(() => setIsInView(true), delay)
          } else {
            setIsInView(true)
          }
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -150px 0px" // Trigger slightly before bottom
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div
      ref={ref}
      className={`animated-content-wrapper ${isInView ? "in-view" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
