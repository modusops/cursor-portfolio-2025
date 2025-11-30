"use client"

import { useRef, useState, type MouseEvent, type ReactNode } from "react"

interface SpotlightPillProps {
  children: ReactNode
  className?: string
}

export function SpotlightPill({ children, className = "" }: SpotlightPillProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-full border border-gray-300 dark:border-gray-700 bg-transparent px-8 py-4 text-lg transition-colors duration-200 flex items-center group ${className}`}
    >
      {/* Spotlight Effect Layer */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Border Highlight Layer (optional, for subtle border glow) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full"
        style={{
          opacity,
          background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(120, 119, 198, 0.3), transparent 80%)`,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px', // Border width
        }}
      />

      <div className="relative z-10 flex items-center">
        {children}
      </div>
    </div>
  )
}


