"use client"

import { useEffect, useRef, useState } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function SatisfactionChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on initial load
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")

      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }

        // Create new chart
        chartInstance.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Muito Satisfeito", "Satisfeito", "Neutro", "Insatisfeito"],
            datasets: [
              {
                data: [68, 24, 6, 2],
                backgroundColor: [
                  "rgba(209, 142, 58, 0.8)",
                  "rgba(41, 65, 217, 0.7)",
                  "rgba(209, 213, 219, 0.5)",
                  "rgba(239, 68, 68, 0.7)",
                ],
                borderColor: [
                  "rgba(209, 142, 58, 1)",
                  "rgba(41, 65, 217, 1)",
                  "rgba(209, 213, 219, 0.8)",
                  "rgba(239, 68, 68, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  color: "white",
                  boxWidth: isMobile ? 12 : 40,
                  padding: isMobile ? 8 : 10,
                  font: {
                    size: isMobile ? 10 : 12,
                  },
                },
              },
              title: {
                display: true,
                text: "Satisfação dos Clientes com Atendimento da SOPHIA",
                color: "white",
                font: {
                  size: isMobile ? 14 : 16,
                },
                padding: {
                  bottom: isMobile ? 10 : 20,
                },
              },
            },
            cutout: isMobile ? "50%" : "60%",
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [isMobile])

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} height={isMobile ? 220 : 250} />
    </div>
  )
}
