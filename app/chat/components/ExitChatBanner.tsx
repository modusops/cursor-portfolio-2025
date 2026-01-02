"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"

export function ExitChatBanner() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio
  useEffect(() => {
    const audio = new Audio("/glitch_001.ogg")
    audio.preload = "auto"
    audio.volume = 1.0
    audio.load()
    audioRef.current = audio
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleClick = () => {
    if (audioRef.current) {
      // Clone the audio to allow overlapping plays
      const audioClone = audioRef.current.cloneNode() as HTMLAudioElement
      audioClone.volume = audioRef.current.volume
      audioClone.play().catch((error) => {
        // Handle autoplay restrictions
        console.log("Glitch audio play failed:", error)
      })
    }
  }

  return (
    <div className="flex items-center gap-3 mt-4">
      {/* <p className="text-xs text-gray-400 dark:text-gray-400 leading-5 whitespace-nowrap">
        Go back to standard view
      </p> */}
      <Link
        href="/"
        onClick={handleClick}
        className="text-xs text-white dark:text-white leading-5 underline decoration-solid whitespace-nowrap hover:text-gray-200 dark:hover:text-gray-200 transition-colors"
      >
        Exit chat mode
      </Link>
    </div>
  )
}

