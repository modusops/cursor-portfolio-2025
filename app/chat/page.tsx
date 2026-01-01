"use client"

import { useState, useEffect } from "react"
import { WelcomeState } from "./components/WelcomeState"
import { ResponseState } from "./components/ResponseState"

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
  { id: "tell-me-about-yourself", text: "Tell me about yourself." },
  { id: "what-are-you-working-on", text: "What are you working on now?" },
  { id: "can-i-see-your-resume", text: "Can I see your resume?" },
  { id: "examples-of-work", text: "Let's see some examples of your work." },
  { id: "exit-chat", text: "Restart Chat" },
]

export default function ChatPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([])
  const [currentPromptId, setCurrentPromptId] = useState<SuggestionId | null>(null)
  const [isWelcomeState, setIsWelcomeState] = useState(true)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSuggestionSelect = (suggestion: Prompt) => {
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
    setCurrentPromptId(promptId)
  }

  const availableSuggestions = allSuggestions.filter(
    suggestion => !prompts.find(p => p.id === suggestion.id)
  )

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200 flex items-center justify-center p-4 relative z-10">
      {/* Outer Container */}
      <div className="bg-gray-900 dark:bg-gray-900 flex flex-col gap-2.5 items-center overflow-hidden p-4 rounded-[48px] w-full max-w-2xl relative z-10">
        {/* Content Container */}
        <div className="bg-black dark:bg-black border border-gray-700 dark:border-gray-700 flex flex-col gap-4 grow items-start min-h-0 p-4 rounded-[32px] w-full">
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
            />
          )}
        </div>
        
        {/* Input Field - Outside content container */}
        <div className="bg-black dark:bg-black border border-gray-700 dark:border-gray-700 flex h-12 items-center justify-between px-4 py-2 rounded-[32px] shrink-0 w-full">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-500 leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">
            {isWelcomeState ? "1, 2, 3, 4 or type" : "Type your question..."}
          </p>
        </div>
      </div>
    </div>
  )
}

