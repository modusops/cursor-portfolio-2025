"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useEffect, useCallback } from "react"

export function ExitChatBanner() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const router = useRouter()

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

  const handleExit = useCallback(() => {
    if (audioRef.current) {
      // Clone the audio to allow overlapping plays
      const audioClone = audioRef.current.cloneNode() as HTMLAudioElement
      audioClone.volume = audioRef.current.volume
      audioClone.play().catch((error) => {
        // Handle autoplay restrictions
        console.log("Glitch audio play failed:", error)
      })
    }
    router.push("/")
  }, [router])

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleExit()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleExit])

  return (
    <div className="flex items-center gap-3 mt-4">
      {/* <p className="text-xs text-gray-400 dark:text-gray-400 leading-5 whitespace-nowrap">
        Go back to standard view
      </p> */}
      <Link
        href="/"
        onClick={handleExit}
        className="text-xs text-white dark:text-white leading-5 underline decoration-solid whitespace-nowrap hover:text-gray-200 dark:hover:text-gray-200 transition-colors"
      >
        [ESC] Exit chat mode
      </Link>
    </div>
  )
}

