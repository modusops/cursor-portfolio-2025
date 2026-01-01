"use client"

import { SuggestionId } from "../page"

interface PromptButtonProps {
  id: SuggestionId
  text: string
  isSelected: boolean
  onClick: () => void
}

export function PromptButton({ id, text, isSelected, onClick }: PromptButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800/20 dark:bg-gray-800/20 border border-gray-700 dark:border-gray-700 flex items-center p-2.5 rounded-2xl shrink-0 transition-all duration-200"
    >
      <span className={`text-xs font-light leading-4 whitespace-nowrap ${
        isSelected ? "text-[#d1d5db] dark:text-[#d1d5db]" : "text-[#3d4147] dark:text-[#3d4147]"
      }`}>
        {text}
      </span>
    </button>
  )
}

