"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import dynamic from "next/dynamic"

// Carregamento dinâmico do Dialog para reduzir o bundle inicial
const ChatDialog = dynamic(() => import("./chat-dialog"), {
  ssr: false,
  loading: () => null,
})

type Message = {
  role: "user" | "assistant"
  content: string
}

interface ChatDemoProps {
  demoUrl?: string
}

export function ChatDemo({ demoUrl = "https://form.respondi.app/2Nmz0X7f" }: ChatDemoProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou SOPHIA, assistente virtual da Virtus IA. Como posso ajudar você hoje?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Adjust height for mobile
  useEffect(() => {
    const adjustHeight = () => {
      if (chatContainerRef.current) {
        const isMobile = window.innerWidth < 768
        const containerHeight = isMobile
          ? Math.min(400, window.innerHeight - 200)
          : Math.min(500, window.innerHeight - 100)

        chatContainerRef.current.style.height = `${containerHeight}px`
      }
    }

    adjustHeight()
    window.addEventListener("resize", adjustHeight)

    return () => {
      window.removeEventListener("resize", adjustHeight)
    }
  }, [])

  const handleSend = async () => {
    if (!input.trim()) return

    // Adicionar a mensagem do usuário ao chat
    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Mostrar o popup após adicionar a mensagem do usuário
    setShowPopup(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const redirectToDemo = () => {
    // Rastrear evento de conversão no Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Lead", {
        content_name: "Chat Demo Conversion",
        content_category: "Chat Interaction",
      })
    }

    window.open(demoUrl, "_blank")
  }

  return (
    <>
      <div
        ref={chatContainerRef}
        className="flex flex-col h-full bg-dark-900 rounded-lg overflow-hidden border border-gold-500/30"
      >
        <div className="bg-premium-gradient text-white p-2 md:p-3">
          <h3 className="font-medium text-sm md:text-base">SOPHIA - Assistente Virtual da Virtus IA</h3>
        </div>

        <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-lg p-2 md:p-3 text-sm md:text-base ${
                  message.role === "user"
                    ? "bg-gold-gradient text-dark-950 rounded-tr-none"
                    : "bg-dark-800 text-white rounded-tl-none"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-lg p-2 md:p-3 bg-dark-800 text-white rounded-tl-none">
                <div className="flex space-x-2">
                  <div
                    className="w-2 h-2 rounded-full bg-gold-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gold-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gold-400 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gold-500/30 p-2 md:p-3">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
              className="flex-1 bg-dark-800 border-gold-500/30 text-white text-sm"
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              size="icon"
              className="bg-gold-gradient hover:bg-gold-400 text-dark-950"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-white/50 mt-1 md:mt-2 hidden md:block">
            Experimente perguntar sobre: preços, horários, procedimentos ou agendar uma consulta
          </p>
        </div>
      </div>

      {/* Carregamento dinâmico do Dialog */}
      {showPopup && (
        <ChatDialog
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          onRedirect={redirectToDemo}
          demoUrl={demoUrl}
        />
      )}
    </>
  )
}

export default ChatDemo
