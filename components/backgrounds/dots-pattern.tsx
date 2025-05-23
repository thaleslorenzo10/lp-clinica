export function DotsPattern({ className = "text-blue-100" }: { className?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className={`absolute w-full h-full opacity-30 ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  )
}
