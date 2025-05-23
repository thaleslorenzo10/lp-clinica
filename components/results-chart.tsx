"use client"

import { useEffect, useRef, useState } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function ResultsChart() {
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
          type: "bar",
          data: {
            labels: ["Antes da SOPHIA", "Após 30 dias com SOPHIA"],
            datasets: [
              {
                label: "Taxa de Ocupação da Agenda (%)",
                data: [62, 94],
                backgroundColor: "rgba(209, 142, 58, 0.7)",
                borderColor: "rgba(209, 142, 58, 1)",
                borderWidth: 1,
              },
              {
                label: "Ticket Médio (R$)",
                data: [350, 480],
                backgroundColor: "rgba(41, 65, 217, 0.7)",
                borderColor: "rgba(41, 65, 217, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                position: isMobile ? "bottom" : "top",
                labels: {
                  color: "white",
                  boxWidth: isMobile ? 12 : 40,
                  font: {
                    size: isMobile ? 10 : 12,
                  },
                },
              },
              title: {
                display: true,
                text: "Impacto da SOPHIA nos Resultados",
                color: "white",
                font: {
                  size: isMobile ? 14 : 16,
                },
                padding: {
                  bottom: isMobile ? 10 : 20,
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: "rgba(255, 255, 255, 0.7)",
                  font: {
                    size: isMobile ? 10 : 12,
                  },
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
              x: {
                ticks: {
                  color: "rgba(255, 255, 255, 0.7)",
                  font: {
                    size: isMobile ? 10 : 12,
                  },
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
            },
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
      <canvas ref={chartRef} />
    </div>
  )
}
