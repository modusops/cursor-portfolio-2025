"use client"

import { Prompt, SuggestionId } from "../page"
import { TypewriterText } from "../../components/TypewriterText"

interface WelcomeStateProps {
  suggestions: Prompt[]
  onSuggestionSelect: (suggestion: Prompt) => void
}

export function WelcomeState({ suggestions, onSuggestionSelect }: WelcomeStateProps) {
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      {/* Welcome Text */}
      <div className="flex flex-col gap-4 items-start w-full">
        {/* Intro */}
        <div className="flex flex-col items-start w-full">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-[200] leading-tight text-white dark:text-white max-w-5xl transition-colors duration-200 font-sans"
            style={{ fontWeight: 200, letterSpacing: "-0.01em" }}
          >
            <TypewriterText 
              text="DESIGNER, STRATEGIST, AND BUILDER."
              delay={50}
              className="inline-block"
              style={{ fontWeight: 200, letterSpacing: "-0.01em" }}
            />
          </h1>
        </div>
        {/* Body */}
        <div className="flex flex-col items-start w-full">
          <p className="font-light leading-[28px] text-lg text-gray-400 dark:text-gray-400 w-full">
            Hi! I'm Dave. I'm a product designer based in Seattle. What do you wanna know about me?
          </p>
        </div>
      </div>

      {/* Suggestion Buttons */}
      <div className="w-full flex flex-col gap-3">
        {suggestions.map((suggestion, index) => (
          <button
            key={suggestion.id}
            onClick={() => onSuggestionSelect(suggestion)}
            className="flex gap-2 items-start w-auto group"
          >
            {/* Number Badge */}
            <div className="bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 flex items-center justify-center p-2.5 rounded-2xl shrink-0 w-9 h-9">
              <span className="text-xs font-light text-gray-300 dark:text-gray-300 leading-4">
                {index + 1}
              </span>
            </div>
            {/* Text Button */}
            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center p-2.5 rounded-2xl text-left group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-200">
              <span className="text-xs font-light text-gray-700 dark:text-gray-300 leading-4 whitespace-nowrap">
                {suggestion.text}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

