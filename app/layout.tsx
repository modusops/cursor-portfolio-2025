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
  title: "Dave Chan - Design Portfolio",
  description: "Software designer. Builder.",
  generator: 'Cursor',
  openGraph: {
    url: 'https://davechan.design/',
    type: 'website',
    title: 'Dave Chan - Design Portfolio',
    description: 'Software designer. Builder.',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/570193a6-8317-4ff4-8cb7-7a5482ddadd8.png?token=cjKqrBdKdeT3jWuQpJze8WyHhegrJwrEHiMQMV5cgfU&height=1056&width=1080&expires=33288218390',
        width: 1080,
        height: 1056,
        alt: 'Dave Chan - Design Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@davechan',
    creator: '@davechan',
    title: 'Dave Chan - Design Portfolio',
    description: 'Software designer. Builder.',
    images: [
      'https://opengraph.b-cdn.net/production/images/570193a6-8317-4ff4-8cb7-7a5482ddadd8.png?token=cjKqrBdKdeT3jWuQpJze8WyHhegrJwrEHiMQMV5cgfU&height=1056&width=1080&expires=33288218390'
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-white dark:bg-black text-black dark:text-white transition-colors duration-200`}
      >
        <GridBackground />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
