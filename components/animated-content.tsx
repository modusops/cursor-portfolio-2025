"use client"

import { type ReactNode, useEffect, useState } from "react"

interface AnimatedContentProps {
  children: ReactNode
  className?: string
}

export function AnimatedContent({ children, className = "" }: AnimatedContentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay to ensure the animation runs after page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } transition-all duration-700 ease-out`}
    >
      {children}
    </div>
  )
}
