"use client"

import type React from "react"
import { Geist, Geist_Mono as GeistMono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], weight: ["300", "400", "500", "600"] })
const geistMono = GeistMono({ subsets: ["latin"], weight: ["400", "500", "600"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-200`}>
        <style jsx global>{`
          h1 {
            font-family: ${geistMono.style.fontFamily};
          }
          h2, h3, h4, h5, h6, p, span, div, a, button, input, textarea, select, option {
            font-family: ${geist.style.fontFamily};
          }
        `}</style>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
