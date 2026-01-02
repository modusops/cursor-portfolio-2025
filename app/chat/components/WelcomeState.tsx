"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Prompt, SuggestionId } from "../page"
import { TypewriterText } from "../../components/TypewriterText"

interface WelcomeStateProps {
  suggestions: Prompt[]
  onSuggestionSelect: (suggestion: Prompt) => void
}

const numberToSuggestionId: Record<string, SuggestionId> = {
  "1": "tell-me-about-yourself",
  "2": "what-are-you-working-on",
  "3": "can-i-see-your-resume",
  "4": "examples-of-work",
  "5": "exit-chat",
}

export function WelcomeState({ suggestions, onSuggestionSelect }: WelcomeStateProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const scrollAudioRef = useRef<HTMLAudioElement | null>(null)
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false)

  // Initialize bong audio with preload
  useEffect(() => {
    const audio = new Audio("/bong_001.ogg")
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

  // Initialize scroll audio with preload and loop
  useEffect(() => {
    const scrollAudio = new Audio("/scroll_001.ogg")
    scrollAudio.preload = "auto"
    scrollAudio.volume = 1.0
    scrollAudio.loop = true
    scrollAudioRef.current = scrollAudio
    
    // Load the audio
    scrollAudio.load()
    
    // Ensure audio is ready
    scrollAudio.addEventListener('canplaythrough', () => {
      // Audio is ready to play
    }, { once: true })
    
    return () => {
      if (scrollAudioRef.current) {
        scrollAudioRef.current.pause()
        scrollAudioRef.current = null
      }
    }
  }, [])

  // Function to play audio
  const playAudio = () => {
    if (audioRef.current) {
      // Clone the audio to allow overlapping plays
      const audioClone = audioRef.current.cloneNode() as HTMLAudioElement
      audioClone.volume = audioRef.current.volume
      audioClone.play().catch((error) => {
        // Handle autoplay restrictions
        console.log("Audio play failed:", error)
      })
    }
  }

  // Handle suggestion selection with audio
  const handleSuggestionClick = (suggestion: Prompt) => {
    playAudio()
    onSuggestionSelect(suggestion)
  }

  // Start scroll audio loop
  const startScrollAudio = useCallback(() => {
    if (scrollAudioRef.current) {
      const audio = scrollAudioRef.current
      
      // Reset to start
      audio.currentTime = 0
      
      // Try to play
      const playPromise = audio.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started successfully
          })
          .catch((error) => {
            // If autoplay is blocked, try again after a short delay
            console.log("Scroll audio play failed, retrying:", error)
            setTimeout(() => {
              if (scrollAudioRef.current) {
                scrollAudioRef.current.play().catch((err) => {
                  console.log("Scroll audio retry failed:", err)
                })
              }
            }, 100)
          })
      }
    }
  }, [])

  // Stop scroll audio loop
  const stopScrollAudio = () => {
    if (scrollAudioRef.current) {
      scrollAudioRef.current.pause()
      scrollAudioRef.current.currentTime = 0
    }
  }

  // Handle body text completion
  const handleBodyComplete = () => {
    stopScrollAudio()
    setIsTypewriterComplete(true)
  }

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only handle if it's a number key (1-5) and not typing in an input field
      const target = event.target as HTMLElement
      const isInputField = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable
      
      if (event.key >= "1" && event.key <= "5" && !isInputField) {
        const suggestionId = numberToSuggestionId[event.key]
        if (suggestionId) {
          const suggestion = suggestions.find(s => s.id === suggestionId)
          if (suggestion) {
            event.preventDefault()
            playAudio()
            onSuggestionSelect(suggestion)
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [suggestions, onSuggestionSelect])

  return (
    <div className="flex flex-col gap-4 items-start w-full h-[612px] md:h-auto overflow-y-auto chat-scrollbar">
      {/* Welcome Text */}
      <div className="flex flex-col gap-4 items-start w-full">
        {/* Intro */}
        <div className="flex flex-col items-start w-full">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-[200] leading-tight text-white dark:text-white max-w-5xl transition-colors duration-200 font-sans"
            style={{ fontWeight: 200, letterSpacing: "-0.01em" }}
          >
            DESIGNER, STRATEGIST, AND BUILDER.
          </h1>
        </div>
        {/* Body */}
        <div className="flex flex-col items-start w-full">
          <p className="font-light leading-[28px] text-lg text-gray-400 dark:text-gray-400 w-full">
            <TypewriterText 
              text="Hi! I'm Dave. I'm a product designer based in Seattle. What do you wanna know about me?"
              delay={50}
              onStart={startScrollAudio}
              onComplete={handleBodyComplete}
            />
          </p>
        </div>
      </div>

      {/* Suggestion Buttons */}
      {isTypewriterComplete && (
        <div className="w-full flex flex-col gap-3">
          {suggestions.map((suggestion, index) => (
          <button
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
            className="flex gap-2 items-start w-auto group opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'forwards'
            }}
          >
            {/* Number Badge */}
            {/* <div className="bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 flex items-center justify-center p-2.5 rounded-2xl shrink-0 w-9 h-9">
              <span className="text-xs font-light text-gray-300 dark:text-gray-300 leading-4">
                {index + 1}
              </span>
            </div> */}
            {/* Text Button */}
            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center p-2.5 rounded-2xl text-left group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-200">
              <span className="text-xs font-light text-gray-700 dark:text-gray-300 leading-4 whitespace-nowrap">
                {suggestion.text}
              </span>
            </div>
          </button>
        ))}
        </div>
      )}
    </div>
  )
}

