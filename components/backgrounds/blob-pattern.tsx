export function BlobPattern({ className = "text-blue-100" }: { className?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute top-0 -left-40 w-96 h-96 opacity-20 ${className}`}
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          background: "currentColor",
          filter: "blur(40px)",
        }}
      ></div>
      <div
        className={`absolute bottom-0 -right-40 w-96 h-96 opacity-20 ${className}`}
        style={{
          borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
          background: "currentColor",
          filter: "blur(40px)",
        }}
      ></div>
    </div>
  )
}
