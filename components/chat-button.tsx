"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageCircle, Monitor } from "lucide-react"

export function ChatButton() {
  const pathname = usePathname()
  const isChatPage = pathname === "/chat"

  return (
    <Link
      href={isChatPage ? "/" : "/chat"}
      className="fixed bottom-20 right-6 z-50 h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label={isChatPage ? "Go to home" : "Open chat"}
    >
      {isChatPage ? (
        <Monitor className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <MessageCircle className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </Link>
  )
}
