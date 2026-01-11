"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // Hide toggle on chat page
  const isChatPage = pathname === "/chat"

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render on chat page
  if (isChatPage) {
    return null
  }

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hidden md:flex">
        <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center transition-colors duration-200 hidden md:flex"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
    </button>
  )
}
