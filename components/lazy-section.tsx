"use client"

import { useEffect, useState, useRef, type ReactNode } from "react"

interface LazySectionProps {
  children: ReactNode
  threshold?: number
  className?: string
}

export function LazySection({ children, threshold = 0.1, className = "" }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div style={{ height: "200px" }} />}
    </div>
  )
}
