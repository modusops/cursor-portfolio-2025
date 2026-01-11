"use client"

export function ChatBetaHeader() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-indigo-400 dark:bg-indigo-900 flex items-center justify-center min-h-[24px] px-2 py-[3px] rounded-lg shrink-0">
        <p className="font-medium text-xs text-slate-50 leading-4 tracking-[0.18px]">
          BETA
        </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-5">
        Portfolio Chat Mode
      </p>
    </div>
  )
}
