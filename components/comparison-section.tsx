"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { PremiumCard } from "@/components/ui/premium-card"
import { PremiumHeading } from "@/components/ui/premium-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ComparisonSection() {
  const [activeTab, setActiveTab] = useState("without")

  const withoutSophiaItems = [
    "67% das mensagens não respondidas em 5 minutos",
    "Horários vazios na agenda",
    "Equipe sobrecarregada com tarefas administrativas",
    "Atendimento limitado ao horário comercial",
    "Oportunidades de venda perdidas",
    "Tempo desperdiçado com perguntas repetitivas",
    "Dificuldade em fazer follow-up com leads",
  ]

  const withSophiaItems = [
    "Resposta instantânea 24 horas por dia",
    "Agenda otimizada com alta taxa de ocupação",
    "Equipe focada em atividades de alto valor",
    "Vendas e agendamentos mesmo fora do horário comercial",
    "Aumento de 40% no faturamento mensal",
    "Atendimento padronizado e de alta qualidade",
    "Follow-up automático com leads quentes",
  ]

  return (
    <>
      {/* Versão Desktop */}
      <div className="hidden md:block">
        <div className="text-center mb-10">
          <PremiumHeading as="h3" size="lg" className="text-2xl md:text-3xl mb-4">
            Transforme seu atendimento com SOPHIA
          </PremiumHeading>
          <p className="text-white/80 max-w-2xl mx-auto">
            Veja como a SOPHIA elimina os problemas de atendimento e transforma a experiência dos seus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Coluna Sem SOPHIA */}
          <PremiumCard variant="glass" className="border-2 border-red-500/30 bg-red-950/10 p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-2">Sem SOPHIA</h3>
              <p className="text-sm text-white/70">Problemas comuns no atendimento tradicional</p>
            </div>

            <ul className="space-y-4">
              {withoutSophiaItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 rounded-full bg-red-950 p-1 border border-red-500/50">
                    <X className="h-3 w-3 text-red-400" />
                  </span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </PremiumCard>

          {/* Seta central */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-dark-950"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Coluna Com SOPHIA */}
          <PremiumCard variant="glass" className="border-2 border-gold-500/30 bg-premium-950/10 p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gold-400 mb-2">Com SOPHIA</h3>
              <p className="text-sm text-white/70">Benefícios do atendimento com IA</p>
            </div>

            <ul className="space-y-4">
              {withSophiaItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 rounded-full bg-gold-950 p-1 border border-gold-500/50">
                    <Check className="h-3 w-3 text-gold-400" />
                  </span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </PremiumCard>
        </div>
      </div>

      {/* Versão Mobile */}
      <div className="md:hidden">
        <div className="text-center mb-6">
          <PremiumHeading as="h3" size="md" className="text-xl mb-2">
            Transforme seu atendimento com SOPHIA
          </PremiumHeading>
          <p className="text-sm text-white/80">
            Veja como a SOPHIA elimina os problemas de atendimento e transforma a experiência dos seus clientes
          </p>
        </div>

        <Tabs defaultValue="without" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger
              value="without"
              className={`${
                activeTab === "without" ? "border-red-500 text-red-400" : "border-transparent text-white/70"
              } border-b-2 transition-colors`}
            >
              Sem SOPHIA
            </TabsTrigger>
            <TabsTrigger
              value="with"
              className={`${
                activeTab === "with" ? "border-gold-500 text-gold-400" : "border-transparent text-white/70"
              } border-b-2 transition-colors`}
            >
              Com SOPHIA
            </TabsTrigger>
          </TabsList>
          <TabsContent value="without">
            <PremiumCard variant="glass" className="border-2 border-red-500/30 bg-red-950/10 p-4">
              <ul className="space-y-3">
                {withoutSophiaItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-red-950 p-1 border border-red-500/50">
                      <X className="h-3 w-3 text-red-400" />
                    </span>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </PremiumCard>
          </TabsContent>
          <TabsContent value="with">
            <PremiumCard variant="glass" className="border-2 border-gold-500/30 bg-premium-950/10 p-4">
              <ul className="space-y-3">
                {withSophiaItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 rounded-full bg-gold-950 p-1 border border-gold-500/50">
                      <Check className="h-3 w-3 text-gold-400" />
                    </span>
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </PremiumCard>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
