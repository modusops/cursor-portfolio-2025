"use client"

import Link from "next/link"

export function ChatEntryBanner() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-slate-900 dark:bg-slate-900 flex items-center justify-center min-h-[24px] px-2 py-[3px] rounded-lg shrink-0">
        <p className="font-medium text-xs text-slate-50 leading-4 tracking-[0.18px]">
          New
        </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-5">
        Portfolio Chat Mode
      </p>
      <Link
        href="/chat"
        className="text-sm text-black dark:text-white leading-5 underline decoration-solid underline-offset-2 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        Try it
      </Link>
    </div>
  )
}

