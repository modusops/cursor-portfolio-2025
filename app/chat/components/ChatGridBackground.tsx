"use client"

export function ChatGridBackground() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-x-hidden overflow-y-visible min-h-screen">
      {/* Horizontal lines */}
      <div className="absolute top-[33vh] left-0 right-0 h-px bg-gray-800/10 dark:bg-white/10 relative">
        <div className="spark-x spark-delay-2" />
        <div className="spark-x spark-delay-3" style={{ animationDuration: '9s' }} />
      </div>
      
      <div className="absolute top-[66vh] left-0 right-0 h-px bg-gray-800/10 dark:bg-white/10 relative">
        <div className="spark-x spark-delay-1" style={{ animationDuration: '8s' }} />
        <div className="spark-x spark-delay-3" />
      </div>

      {/* Vertical lines */}
      <div className="absolute top-0 left-[33vw] w-px h-screen bg-gray-800/10 dark:bg-white/10 relative overflow-visible">
        <div className="spark-y spark-delay-2" />
        <div className="spark-y spark-delay-3" style={{ animationDuration: '9s' }} />
      </div>
      
      <div className="absolute top-0 left-[66vw] w-px h-screen bg-gray-800/10 dark:bg-white/10 relative overflow-visible">
        <div className="spark-y spark-delay-1" style={{ animationDuration: '8s' }} />
        <div className="spark-y spark-delay-3" />
      </div>

      {/* Plus sign in bottom right */}
      {/* <div className="absolute bottom-8 right-8 w-8 h-8">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-800/20 dark:bg-white/20 transform -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800/20 dark:bg-white/20 transform -translate-x-1/2" />
      </div> */}
    </div>
  )
}

