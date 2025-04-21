interface PlusSignProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function PlusSign({ className = "", size = "md" }: PlusSignProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-800/20 dark:bg-white/20 transform -translate-y-1/2" />
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800/20 dark:bg-white/20 transform -translate-x-1/2" />
    </div>
  )
}
