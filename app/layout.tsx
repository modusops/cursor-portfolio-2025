import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { GridBackground } from "@/components/grid-background"
import "./globals.css"

// Use Inter font from Google Fonts instead of local fonts that are causing issues
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "David Chan - Design Portfolio",
  description: "Fractional Design Partner for Early-Stage Teams",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-white dark:bg-black text-black dark:text-white transition-colors duration-200 custom-plus-cursor`}
      >
        <GridBackground />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
