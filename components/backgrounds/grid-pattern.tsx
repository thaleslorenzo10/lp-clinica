export function GridPattern({ className = "text-blue-100" }: { className?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className={`absolute w-full h-full opacity-20 ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern id="grid" patternUnits="userSpaceOnUse" width="20" height="20">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
