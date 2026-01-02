"use client"

import { useState, useEffect, useRef } from "react"
import { WelcomeState } from "./components/WelcomeState"
import { ResponseState } from "./components/ResponseState"
import { ExitChatBanner } from "./components/ExitChatBanner"

export type SuggestionId = 
  | "tell-me-about-yourself"
  | "what-are-you-working-on"
  | "can-i-see-your-resume"
  | "examples-of-work"
  | "exit-chat"

export interface Prompt {
  id: SuggestionId
  text: string
}

const allSuggestions: Prompt[] = [
  { id: "tell-me-about-yourself", text: "( 1 ) Tell me about yourself." },
  { id: "what-are-you-working-on", text: "( 2 ) What are you working on now?" },
  { id: "can-i-see-your-resume", text: "( 3 ) Can I see your resume?" },
  { id: "examples-of-work", text: "( 4 ) Let's see some examples of your work." },
  { id: "exit-chat", text: "( 5 ) Restart Chat" },
]

export default function ChatPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [currentPromptId, setCurrentPromptId] = useState<SuggestionId | null>(null)
  const [isWelcomeState, setIsWelcomeState] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [inputError, setInputError] = useState<string | null>(null)
  const selectAudioRef = useRef<HTMLAudioElement | null>(null)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Initialize select audio
  useEffect(() => {
    const audio = new Audio("/select_001.ogg")
    audio.preload = "auto"
    audio.volume = 1.0
    audio.load()
    selectAudioRef.current = audio
    
    return () => {
      if (selectAudioRef.current) {
        selectAudioRef.current.pause()
        selectAudioRef.current = null
      }
    }
  }, [])

  // Function to play select audio
  const playSelectAudio = () => {
    if (selectAudioRef.current) {
      // Clone the audio to allow overlapping plays
      const audioClone = selectAudioRef.current.cloneNode() as HTMLAudioElement
      audioClone.volume = selectAudioRef.current.volume
      audioClone.play().catch((error) => {
        // Handle autoplay restrictions
        console.log("Select audio play failed:", error)
      })
    }
  }

  const handleSuggestionSelect = (suggestion: Prompt) => {
    setInputError(null) // Clear any errors when selecting a suggestion
    
    if (suggestion.id === "exit-chat") {
      setPrompts([])
      setCurrentPromptId(null)
      setIsWelcomeState(true)
      return
    }

    // Add to prompts if not already there
    const promptExists = prompts.find(p => p.id === suggestion.id)
    if (!promptExists) {
      setPrompts([...prompts, suggestion])
    }
    
    setCurrentPromptId(suggestion.id)
    setIsWelcomeState(false)
  }

  const handlePromptClick = (promptId: SuggestionId) => {
    setInputError(null) // Clear any errors when clicking a prompt
    setCurrentPromptId(promptId)
  }

  const availableSuggestions = allSuggestions.filter(
    suggestion => !prompts.find(p => p.id === suggestion.id)
  )

  // Map user input to suggestion ID
  const mapInputToSuggestion = (input: string): SuggestionId | null => {
    const normalizedInput = input.trim().toLowerCase()
    
    // Number mapping
    if (normalizedInput === "1") return "tell-me-about-yourself"
    if (normalizedInput === "2") return "what-are-you-working-on"
    if (normalizedInput === "3") return "can-i-see-your-resume"
    if (normalizedInput === "4") return "examples-of-work"
    if (normalizedInput === "5") return "exit-chat"
    
    // Shortcut mapping
    if (normalizedInput === "about") return "tell-me-about-yourself"
    if (normalizedInput === "projects") return "what-are-you-working-on"
    if (normalizedInput === "resume") return "can-i-see-your-resume"
    if (normalizedInput === "examples") return "examples-of-work"
    if (normalizedInput === "restart") return "exit-chat"
    
    // Full text matching (case-insensitive, partial match)
    const fullTexts: Record<string, SuggestionId> = {
      "tell me about yourself": "tell-me-about-yourself",
      "what are you working on": "what-are-you-working-on",
      "can i see your resume": "can-i-see-your-resume",
      "let's see some examples of your work": "examples-of-work",
      "examples of your work": "examples-of-work",
      "restart chat": "exit-chat",
    }
    
    for (const [key, id] of Object.entries(fullTexts)) {
      if (normalizedInput.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedInput)) {
        return id
      }
    }
    
    return null
  }

  // Handle input submission
  const handleInputSubmit = () => {
    if (!inputValue.trim()) return
    
    setInputError(null)
    const suggestionId = mapInputToSuggestion(inputValue)
    
    if (!suggestionId) {
      setInputError("Input not recognized. Try: About, Projects, Resume, Examples, Restart")
      return
    }
    
    // Find the suggestion
    const suggestion = allSuggestions.find(s => s.id === suggestionId)
    if (!suggestion) return
    
    // Check if suggestion is available (for ResponseState)
    if (!isWelcomeState) {
      const isAvailable = availableSuggestions.find(s => s.id === suggestionId)
      if (!isAvailable) {
        setInputError("Input not recognized. Try: About, Projects, Resume, Examples, Restart")
        return
      }
    }
    
    // Play select audio when input is successfully submitted
    playSelectAudio()
    
    setInputValue("")
    handleSuggestionSelect(suggestion)
  }

  // Handle input key press
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 flex flex-col items-center justify-center p-4 relative z-10">
      {/* Outer Container */}
      <div className="bg-gray-900 dark:bg-gray-900 flex flex-col gap-2.5 items-center overflow-hidden p-4 rounded-[48px] w-full max-w-2xl relative z-10">
        {/* Content Container */}
        <div className="bg-black dark:bg-black border border-gray-700 dark:border-gray-700 flex flex-col gap-4 grow items-start min-h-0 p-4 rounded-[32px] w-full max-h-[60vh] md:max-h-none overflow-y-auto chat-scrollbar">
          {isWelcomeState ? (
            <WelcomeState
              suggestions={allSuggestions}
              onSuggestionSelect={handleSuggestionSelect}
            />
          ) : (
            <ResponseState
              prompts={prompts}
              currentPromptId={currentPromptId!}
              availableSuggestions={availableSuggestions}
              allSuggestions={allSuggestions}
              onPromptClick={handlePromptClick}
              onSuggestionSelect={handleSuggestionSelect}
              inputError={inputError}
            />
          )}
        </div>
        
        {/* Input Field - Outside content container */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleInputKeyPress}
          placeholder={isWelcomeState ? "Enter a number or type About, Projects, Resume, Examples, Restart" : "Enter a number or type About, Projects, Resume, Examples, Restart"}
          className="bg-black dark:bg-black border border-gray-700 dark:border-gray-700 flex h-12 items-center justify-between px-4 py-2 rounded-[32px] shrink-0 w-full text-sm font-normal text-white dark:text-white placeholder:text-gray-700 dark:placeholder:text-gray-700 leading-[22px] outline-none focus:border-gray-600 dark:focus:border-gray-600 transition-colors"
        />
      </div>
      
      {/* Exit Chat Banner - 16px below chat container */}
      <ExitChatBanner />
    </div>
  )
}

