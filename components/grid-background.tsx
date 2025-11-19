"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function GridBackground() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Hide grid background on project pages and case study pages
  const isProjectPage = pathname?.startsWith("/projects/")
  const isCaseStudyPage = pathname?.startsWith("/new-project-page-test-") || pathname?.startsWith("/case-study-") || pathname?.startsWith("/project-lighten-design")

  if (!mounted || isProjectPage || isCaseStudyPage) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-800/10 dark:bg-white/10" />
      <div className="absolute top-[33vh] left-0 right-0 h-px bg-gray-800/10 dark:bg-white/10" />
      <div className="absolute top-[66vh] left-0 right-0 h-px bg-gray-800/10 dark:bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-800/10 dark:bg-white/10" />

      {/* Vertical lines */}
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-800/10 dark:bg-white/10" />
      <div className="absolute top-0 bottom-0 left-[33vw] w-px bg-gray-800/10 dark:bg-white/10" />
      <div className="absolute top-0 bottom-0 left-[66vw] w-px bg-gray-800/10 dark:bg-white/10" />
      <div className="absolute top-0 bottom-0 right-0 w-px bg-gray-800/10 dark:bg-white/10" />

      {/* Plus sign in bottom right */}
      <div className="absolute bottom-8 right-8 w-8 h-8">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-800/20 dark:bg-white/20 transform -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800/20 dark:bg-white/20 transform -translate-x-1/2" />
      </div>
    </div>
  )
}
