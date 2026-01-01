import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChatButton } from "@/components/chat-button"
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
        url: 'https://opengraph.b-cdn.net/production/images/0bb81ddf-ceec-4bbe-b98d-eb75eec0a466.jpg?token=5E5w4olZpIBsOKlql1wEKa5K7OjaVwjRZmWKZHr9V90&height=1701&width=1200&expires=33299623463',
        width: 1200,
        height: 1701,
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
      'https://opengraph.b-cdn.net/production/images/0bb81ddf-ceec-4bbe-b98d-eb75eec0a466.jpg?token=5E5w4olZpIBsOKlql1wEKa5K7OjaVwjRZmWKZHr9V90&height=1701&width=1200&expires=33299623463'
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
        <Script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          strategy="beforeInteractive"
        />
        <GridBackground />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <ChatButton />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
