"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // Force dark mode on mobile devices
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
