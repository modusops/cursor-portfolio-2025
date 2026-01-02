"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"

export function ChatEntryBanner() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio
  useEffect(() => {
    const audio = new Audio("/confirmation_001.ogg")
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
        console.log("Confirmation audio play failed:", error)
      })
    }
  }

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-slate-700 dark:bg-slate-700 flex items-center justify-center min-h-[24px] px-2 py-[3px] rounded-lg shrink-0">
        <p className="font-medium text-xs text-slate-50 leading-4 tracking-[0.18px]">
          BETA
        </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-5">
        Portfolio Chat Mode
      </p>
      <Link
        href="/chat"
        onClick={handleClick}
        className="text-sm text-black dark:text-white leading-5 underline decoration-solid underline-offset-2 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        Try it
      </Link>
    </div>
  )
}

