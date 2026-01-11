"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Prompt, SuggestionId } from "../page"
import { responses } from "../data/responses"
import { PromptButton } from "./PromptButton"
import { TypewriterText } from "../../components/TypewriterText"
import { ChatBetaHeader } from "./ChatBetaHeader"

interface ResponseStateProps {
  prompts: Prompt[]
  currentPromptId: SuggestionId
  availableSuggestions: Prompt[]
  allSuggestions: Prompt[]
  onPromptClick: (promptId: SuggestionId) => void
  onSuggestionSelect: (suggestion: Prompt) => void
  inputError?: string | null
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
  inputError,
}: ResponseStateProps) {
  const promptBarRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [responseKey, setResponseKey] = useState(0)
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false)
  const [showScrollArrow, setShowScrollArrow] = useState(false)
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

  // Reset response key and typewriter completion state when prompt changes to restart TypewriterText animation
  useEffect(() => {
    setResponseKey(prev => prev + 1)
    setIsTypewriterComplete(false)
    // Clear error when prompt changes (handled by parent clearing inputError)
  }, [currentPromptId])

  // Handle typewriter completion
  const handleTypewriterComplete = () => {
    setIsTypewriterComplete(true)
  }

  // Scroll prompt bar to show selected prompt
  useEffect(() => {
    if (promptBarRef.current) {
      const selectedButton = promptBarRef.current.querySelector(`[data-prompt-id="${currentPromptId}"]`) as HTMLElement
      if (selectedButton) {
        selectedButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
      }
    }
  }, [currentPromptId])

  // Check if there's scrollable content below
  const checkScrollPosition = useCallback(() => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current
      // Show arrow if there's content below (with a small threshold to avoid flickering)
      const hasMoreContent = scrollHeight - scrollTop - clientHeight > 50
      setShowScrollArrow(hasMoreContent)
    }
  }, [])

  // Handle scroll event - hide arrow immediately, then check again after 5 seconds
  const handleScroll = useCallback(() => {
    // Hide arrow immediately when scrolling
    setShowScrollArrow(false)

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Check again after 5 seconds if there's still content below
    scrollTimeoutRef.current = setTimeout(() => {
      checkScrollPosition()
    }, 5000)
  }, [checkScrollPosition])

  // Monitor scroll position
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Check on mount and when content changes
    checkScrollPosition()

    // Handle scroll with hide/reappear logic
    container.addEventListener('scroll', handleScroll)
    
    // Check on resize
    window.addEventListener('resize', checkScrollPosition)

    // Check when typewriter completes (content height changes)
    if (isTypewriterComplete) {
      // Small delay to ensure DOM has updated
      setTimeout(checkScrollPosition, 100)
    }

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkScrollPosition)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [checkScrollPosition, handleScroll, isTypewriterComplete])

  // Scroll to bottom handler
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div 
      ref={containerRef}
      className="flex flex-col h-[612px] md:min-h-[80vh] w-full overflow-y-auto chat-scrollbar relative"
    >
      {/* Beta Header */}
      <ChatBetaHeader />

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
          {inputError ? (
            <p className="font-light leading-[28px] text-xl text-red-400 dark:text-red-400 w-full">
              {inputError}
            </p>
          ) : (
            <>
              <p className="font-light leading-[28px] text-xl text-gray-400 dark:text-gray-400 w-full whitespace-pre-wrap" style={{ width: '100%' }}>
                <TypewriterText 
                  key={responseKey}
                  text={responseContent}
                  delay={7}
                  onComplete={handleTypewriterComplete}
                />
              </p>
              {currentPromptId === "can-i-see-your-resume" && isTypewriterComplete && (
                <div className="mt-6">
                  <a
                    href="/dave-chan-resume-web-12302025.pdf"
                    download="dave-chan-resume-web-12302025.pdf"
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-2xl px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-3"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3"/>
                    </svg>
                    Download Resume
                  </a>
                </div>
              )}
              {currentPromptId === "what-are-you-working-on" && isTypewriterComplete && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.shopltk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-3xl px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-3"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" x2="21" y1="14" y2="3"/>
                    </svg>
                    LTK Website
                  </a>
                  <a
                    href="https://www.linkedin.com/in/davejuntochan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-3xl px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="currentColor"
                      className="mr-3"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    My LinkedIn
                  </a>
                </div>
              )}
              {currentPromptId === "examples-of-work" && isTypewriterComplete && (
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://davechan.design/case-study-ltk-dashboard-redesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-3xl px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-3"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" x2="21" y1="14" y2="3"/>
                    </svg>
                    📊 LTK Creator
                  </a>
                  <a
                    href="https://davechan.design/case-study-ltk-chat-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-3xl px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-3"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" x2="21" y1="14" y2="3"/>
                    </svg>
                    💬 LTK Chat
                  </a>
                  <a
                    href="https://www.figma.com/community/plugin/1549162158463427516/layout-quality-assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-3xl px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-3"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" x2="21" y1="14" y2="3"/>
                    </svg>
                    🔍 Layout Quality Assistant
                  </a>
                  <a
                    href="https://github.com/modusops/cursor-portfolio-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-3xl px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-200"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-3"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" x2="21" y1="14" y2="3"/>
                    </svg>
                    🧑‍💻 Github Repository
                  </a>
                </div>
              )}
            </>
          )}
        </div>

        {/* Updated Suggestions */}
        {isTypewriterComplete && availableSuggestions.length > 0 && (
          <div className="mt-4 flex flex-col gap-3">
            {availableSuggestions.map((suggestion, index) => {
              // Find the original index in allSuggestions to get the correct number
              const originalIndex = allSuggestions.findIndex(s => s.id === suggestion.id)
              const suggestionNumber = originalIndex + 1
              return (
                <div
                  key={suggestion.id}
                  className="flex gap-2 items-start w-auto opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Number Badge */}
                  {/* <div className="bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 flex items-center justify-center p-2.5 rounded-2xl shrink-0 w-9 h-9">
                    <span className="text-xs font-light text-gray-300 dark:text-gray-300 leading-4">
                      {suggestionNumber}
                    </span>
                  </div> */}
                  {/* Text Button */}
                  <button
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center p-2.5 rounded-2xl text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-xs font-light text-gray-700 dark:text-gray-300 leading-4 whitespace-nowrap">
                      {suggestion.text}
                    </span>
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Scroll Down Arrow */}
      {showScrollArrow && (
        <button
          onClick={scrollToBottom}
          className="sticky bottom-0.5 left-1/2 -translate-x-1/2 z-50 h-10 w-10 rounded-full backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-110 bg-white/20 dark:bg-gray-800/20 border border-gray-700 dark:border-gray-700 shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 md:hidden self-center"
          aria-label="Scroll to bottom"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="20" 
            height="20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-gray-300 dark:text-gray-300"
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      )}
    </div>
  )
}

