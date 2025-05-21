"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center gap-2 md:gap-4 mt-3">
      <div className="text-center">
        <div className="bg-gold-gradient text-dark-950 rounded-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <p className="text-xs mt-1 text-white/70">Dias</p>
      </div>
      <div className="text-center">
        <div className="bg-gold-gradient text-dark-950 rounded-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <p className="text-xs mt-1 text-white/70">Horas</p>
      </div>
      <div className="text-center">
        <div className="bg-gold-gradient text-dark-950 rounded-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <p className="text-xs mt-1 text-white/70">Min</p>
      </div>
      <div className="text-center">
        <div className="bg-gold-gradient text-dark-950 rounded-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-base md:text-xl font-bold">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <p className="text-xs mt-1 text-white/70">Seg</p>
      </div>
    </div>
  )
}
