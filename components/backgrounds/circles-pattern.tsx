export function CirclesPattern({ className = "text-blue-100" }: { className?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-current to-transparent opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tl from-current to-transparent opacity-20 blur-3xl"></div>
    </div>
  )
}
