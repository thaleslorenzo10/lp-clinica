"use client"

import { useEffect, useState, useRef } from "react"
import { PremiumCard } from "@/components/ui/premium-card"

interface StatProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
}

export function AnimatedStat({ value, label, prefix = "", suffix = "", duration = 2000 }: StatProps) {
  const [count, setCount] = useState(0)
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
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const endValue = value
    const startValue = 0
    const range = endValue - startValue

    const updateCount = () => {
      const now = Date.now()
      const elapsedTime = now - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easedProgress = easeOutQuad(progress)

      const currentValue = Math.floor(startValue + range * easedProgress)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isVisible, value, duration])

  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t)

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-4xl font-bold premium-text-gradient">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-1 md:mt-2 text-xs md:text-sm text-white/70">{label}</div>
    </div>
  )
}

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <PremiumCard variant="glass" className="p-4 md:p-6">
        <AnimatedStat value={78} suffix="%" label="Aumento na taxa de conversão" />
      </PremiumCard>

      <PremiumCard variant="glass" className="p-4 md:p-6">
        <AnimatedStat value={24} suffix="/7" label="Disponibilidade" />
      </PremiumCard>

      <PremiumCard variant="glass" className="p-4 md:p-6">
        <AnimatedStat value={83} label="Horas economizadas por mês" />
      </PremiumCard>

      <PremiumCard variant="glass" className="p-4 md:p-6">
        <AnimatedStat value={40} suffix="%" label="Aumento médio no faturamento" />
      </PremiumCard>
    </div>
  )
}
