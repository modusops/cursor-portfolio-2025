"use client"

import Link from "next/link"

export function ExitChatBanner() {
  return (
    <div className="flex items-center gap-3 mt-4">
      <p className="text-xs text-gray-400 dark:text-gray-400 leading-5 whitespace-nowrap">
        Go back to standard view
      </p>
      <Link
        href="/"
        className="text-xs text-white dark:text-white leading-5 underline decoration-solid whitespace-nowrap hover:text-gray-200 dark:hover:text-gray-200 transition-colors"
      >
        Exit chat mode
      </Link>
    </div>
  )
}

