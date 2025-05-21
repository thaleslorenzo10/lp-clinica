"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou SOPHIA, assistente virtual da Virtus IA. Como posso ajudar você hoje?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
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

    const userMessage: Message = {
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Predefined responses for demo purposes
      const demoResponses: { [key: string]: string } = {
        olá: "Olá! Sou SOPHIA, assistente virtual especializada em estética. Como posso ajudar você hoje?",
        oi: "Olá! Sou SOPHIA, assistente virtual especializada em estética. Como posso ajudar você hoje?",
        preço:
          "Temos diversos tratamentos com preços variados. Qual procedimento específico você tem interesse? Posso enviar nossa tabela completa ou falar sobre algum tratamento específico.",
        botox:
          "Nosso tratamento de botox premium custa R$450 por região. Temos promoção especial este mês: 3 regiões por R$1.200 (economia de R$150). Gostaria de agendar uma avaliação gratuita para conhecer os resultados que podemos alcançar para você?",
        horário:
          "A Clínica atende de segunda a sexta, das 8h às 20h, e aos sábados das 9h às 16h. Posso verificar os horários disponíveis para o procedimento que você deseja. Qual seria o melhor dia da semana para você?",
        agendar:
          "Ótimo! Posso agendar para você. Temos horários disponíveis amanhã às 10h, 14h ou 16h. Também temos vagas na quinta-feira às 9h, 11h e 15h. Qual horário seria mais conveniente para você?",
        amanhã:
          "Perfeito! Vou reservar seu horário para amanhã. Para confirmar seu agendamento, preciso de algumas informações: seu nome completo, telefone para contato e se já é cliente da clínica.",
        endereço:
          "A Clínica está localizada na Av. Paulista, 1000, São Paulo - SP. Temos estacionamento próprio gratuito para clientes e estamos a 200m da estação de metrô Trianon-Masp. Posso enviar a localização pelo Google Maps se preferir.",
        procedimentos:
          "Oferecemos uma ampla gama de procedimentos estéticos: botox, preenchimento facial, limpeza de pele profunda, microagulhamento, peeling químico, depilação a laser, tratamentos corporais redutores, radiofrequência e muito mais. Gostaria de informações detalhadas sobre algum procedimento específico?",
        promoção:
          "Temos promoções especiais este mês! 20% de desconto em pacotes de limpeza de pele e 15% em tratamentos de botox. Além disso, na compra de qualquer pacote, você ganha uma sessão de hidratação facial. Essas promoções são válidas até o final da semana. Gostaria de aproveitar?",
        valor:
          "O valor depende do procedimento específico que você deseja. Por exemplo, nossa limpeza de pele premium custa R$180, sessões de radiofrequência a partir de R$250, e pacotes personalizados com descontos progressivos. Qual tratamento você tem interesse?",
        pagamento:
          "Aceitamos diversas formas de pagamento: dinheiro, PIX, todos os cartões de crédito e débito (com parcelamento em até 12x sem juros nos principais cartões), e também oferecemos planos exclusivos da clínica. Qual seria sua preferência de pagamento?",
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Find a matching response or use default
      let responseText =
        "Desculpe, não entendi sua pergunta. Posso ajudar com informações sobre nossos tratamentos estéticos, preços, horários disponíveis ou agendar uma avaliação gratuita para você. Em que posso ser útil?"

      const lowercaseInput = input.toLowerCase()

      // Check if any key words match in the input
      for (const [key, response] of Object.entries(demoResponses)) {
        if (lowercaseInput.includes(key)) {
          responseText = response
          break
        }
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: responseText,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error generating response:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
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
  )
}
