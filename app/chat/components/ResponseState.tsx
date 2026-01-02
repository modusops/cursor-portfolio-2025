"use client"

import { useRef, useEffect, useState } from "react"
import { Prompt, SuggestionId } from "../page"
import { responses } from "../data/responses"
import { PromptButton } from "./PromptButton"
import { TypewriterText } from "../../components/TypewriterText"

interface ResponseStateProps {
  prompts: Prompt[]
  currentPromptId: SuggestionId
  availableSuggestions: Prompt[]
  allSuggestions: Prompt[]
  onPromptClick: (promptId: SuggestionId) => void
  onSuggestionSelect: (suggestion: Prompt) => void
}

const numberToSuggestionId: Record<string, SuggestionId> = {
  "1": "tell-me-about-yourself",
  "2": "what-are-you-working-on",
  "3": "can-i-see-your-resume",
  "4": "examples-of-work",
  "5": "exit-chat",
}

export function ResponseState({
  prompts,
  currentPromptId,
  availableSuggestions,
  allSuggestions,
  onPromptClick,
  onSuggestionSelect,
}: ResponseStateProps) {
  const promptBarRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [responseKey, setResponseKey] = useState(0)
  const responseContent = currentPromptId && currentPromptId !== "exit-chat"
    ? responses[currentPromptId as keyof typeof responses] || "Response not found."
    : "Response not found."

  // Initialize audio with preload
  useEffect(() => {
    const audio = new Audio("/bong_001.ogg")
    audio.preload = "auto"
    audio.volume = 1.0
    // Preload the audio
    audio.load()
    audioRef.current = audio
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
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

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only handle if it's a number key (1-5) and not typing in an input field
      const target = event.target as HTMLElement
      const isInputField = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable
      
      if (event.key >= "1" && event.key <= "5" && !isInputField) {
        const suggestionId = numberToSuggestionId[event.key]
        if (suggestionId) {
          // Check if suggestion is available (in availableSuggestions)
          const suggestion = availableSuggestions.find(s => s.id === suggestionId) || 
                            allSuggestions.find(s => s.id === suggestionId)
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
  }, [availableSuggestions, allSuggestions, onSuggestionSelect])

  // Reset response key when prompt changes to restart TypewriterText animation
  useEffect(() => {
    setResponseKey(prev => prev + 1)
  }, [currentPromptId])

  // Scroll prompt bar to show selected prompt
  useEffect(() => {
    if (promptBarRef.current) {
      const selectedButton = promptBarRef.current.querySelector(`[data-prompt-id="${currentPromptId}"]`) as HTMLElement
      if (selectedButton) {
        selectedButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
      }
    }
  }, [currentPromptId])

  return (
    <div className="flex flex-col h-[612px] md:min-h-[80vh] w-full overflow-y-auto">
      {/* Sticky Prompt Bar */}
      <div className="sticky top-0 z-10 py-0 w-full">
        <div className="py-0 w-full">
          <div
            ref={promptBarRef}
            className="flex items-start gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide w-full"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {prompts.map((prompt) => (
              <div key={prompt.id} data-prompt-id={prompt.id} className="shrink-0">
                <PromptButton
                  id={prompt.id}
                  text={prompt.text}
                  isSelected={prompt.id === currentPromptId}
                  onClick={() => onPromptClick(prompt.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Response Content Area */}
      <div className="flex-1 py-0 mt-2 w-full" style={{ width: '100%' }}>
        <div className="flex flex-col items-start w-full" style={{ width: '100%' }}>
          <p className="font-light leading-[28px] text-xl text-gray-400 dark:text-gray-400 w-full whitespace-pre-wrap" style={{ width: '100%' }}>
            <TypewriterText 
              key={responseKey}
              text={responseContent}
              delay={25}
            />
          </p>
        </div>

        {/* Updated Suggestions */}
        {availableSuggestions.length > 0 && (
          <div className="mt-4 flex flex-col gap-3">
            {availableSuggestions.map((suggestion) => {
              // Find the original index in allSuggestions to get the correct number
              const originalIndex = allSuggestions.findIndex(s => s.id === suggestion.id)
              const suggestionNumber = originalIndex + 1
              return (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="flex gap-2 items-start w-auto group"
                >
                  {/* Number Badge */}
                  {/* <div className="bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 flex items-center justify-center p-2.5 rounded-2xl shrink-0 w-9 h-9">
                    <span className="text-xs font-light text-gray-300 dark:text-gray-300 leading-4">
                      {suggestionNumber}
                    </span>
                  </div> */}
                  {/* Text Button */}
                  <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center p-2.5 rounded-2xl text-left group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-200">
                    <span className="text-xs font-light text-gray-700 dark:text-gray-300 leading-4 whitespace-nowrap">
                      {suggestion.text}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

