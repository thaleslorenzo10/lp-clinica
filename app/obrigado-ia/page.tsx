"use client"

import { useEffect } from "react"
import { CheckCircle, Clock, MessageSquare, Calendar, ArrowRight, Star, Play } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { GlassCard } from "@/components/ui/glass-card"
import { PremiumHeading } from "@/components/ui/premium-heading"
import { PremiumButton } from "@/components/ui/premium-button"
import { PremiumCard } from "@/components/ui/premium-card"
import { PremiumBadge } from "@/components/ui/premium-badge"

export default function ObrigadoPage() {
  useEffect(() => {
    // Rastrear conversão no Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Schedule", {
        content_name: "Demonstração Agendada",
        content_category: "Thank You Page",
        value: 1,
      })
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-dark-950">
      {/* Header simplificado */}
      <header className="w-full border-b border-white/10 bg-dark-950/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-center">
          <OptimizedImage
            src="/images/virtus-logo.png"
            alt="Virtus IA Logo"
            width={140}
            height={40}
            className="object-contain"
            priority={true}
          />
        </div>
      </header>

      {/* Hero Section de Confirmação */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-800/20 via-dark-950 to-dark-950"></div>
          <div className="absolute top-0 right-0 w-1/3 h-80 bg-gold-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-80 bg-premium-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Ícone de sucesso animado */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-gold-gradient rounded-full p-6">
                  <CheckCircle className="h-16 w-16 text-dark-950" />
                </div>
              </div>
            </div>

            <PremiumBadge variant="gold" className="mb-4">
              Demonstração Confirmada
            </PremiumBadge>

            <PremiumHeading as="h1" size="2xl" className="mb-6">
              Parabéns! Sua demonstração VIP está agendada
            </PremiumHeading>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Você acaba de dar o primeiro passo para revolucionar o atendimento da sua clínica e{" "}
              <span className="text-gold-400 font-bold">aumentar seu faturamento em até 40%</span> com inteligência
              artificial.
            </p>

            <GlassCard className="p-6 md:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">O que acontece agora?</h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-gold-400/20 p-2 mt-1">
                    <Clock className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Em até 15 minutos</p>
                    <p className="text-sm text-white/70">
                      Você receberá um e-mail e WhatsApp com todos os detalhes da sua demonstração
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-gold-400/20 p-2 mt-1">
                    <MessageSquare className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">24 horas antes</p>
                    <p className="text-sm text-white/70">
                      Nossa equipe entrará em contato para confirmar o horário e preparar a demonstração personalizada
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-gold-400/20 p-2 mt-1">
                    <Calendar className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">No dia da demonstração</p>
                    <p className="text-sm text-white/70">
                      Apresentaremos a SOPHIA configurada especificamente para sua clínica
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* CTA para WhatsApp */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton
                variant="gold"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/5511999999999?text=Acabei%20de%20agendar%20minha%20demonstração%20VIP!",
                    "_blank",
                  )
                }
                className="w-full sm:w-auto"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Falar com Consultor Agora
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Vídeo */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-dark-950 to-navy-950">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <PremiumHeading as="h2" size="lg" className="mb-4">
                Enquanto isso, veja o que nossos clientes têm a dizer
              </PremiumHeading>
              <p className="text-white/80">
                Descubra como clínicas como a sua estão transformando seus resultados com a SOPHIA
              </p>
            </div>

            {/* Placeholder para vídeo */}
            <PremiumCard variant="glass" className="relative aspect-video overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-dark-900/50 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-gold-gradient rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-dark-950 ml-1" />
                  </div>
                </div>
              </div>
              <OptimizedImage
                src="/placeholder.svg?height=720&width=1280&text=Video+Depoimento"
                alt="Depoimento de Cliente"
                fill
                className="object-cover"
              />
            </PremiumCard>

            {/* Depoimentos em cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <GlassCard className="p-6">
                <div className="flex mb-4">
                  <div className="text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block h-4 w-4 fill-gold-400" />
                    ))}
                  </div>
                </div>
                <p className="text-white/90 mb-4">
                  "A SOPHIA não só melhorou nosso atendimento como aumentou nossa taxa de conversão em 78%. É como ter a
                  melhor atendente do mundo trabalhando 24/7."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-dark-800 overflow-hidden border-2 border-gold-500/30">
                    <OptimizedImage
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dr. Roberto Silva"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">Dr. Roberto Silva</p>
                    <p className="text-sm text-white/70">Clínica Estética Premium</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex mb-4">
                  <div className="text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block h-4 w-4 fill-gold-400" />
                    ))}
                  </div>
                </div>
                <p className="text-white/90 mb-4">
                  "Em apenas 30 dias, recuperamos o investimento e já estamos com a agenda 94% ocupada. A SOPHIA
                  realmente entende do negócio de estética."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-dark-800 overflow-hidden border-2 border-gold-500/30">
                    <OptimizedImage
                      src="/placeholder.svg?height=48&width=48"
                      alt="Dra. Ana Costa"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">Dra. Ana Costa</p>
                    <p className="text-sm text-white/70">Beauty Center Excellence</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Próximos Passos */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-navy-950 to-premium-950">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <PremiumHeading as="h2" size="lg" className="mb-4">
                Prepare-se para a demonstração
              </PremiumHeading>
              <p className="text-white/80">Para aproveitar ao máximo sua demonstração VIP, recomendamos:</p>
            </div>

            <div className="space-y-4">
              <PremiumCard variant="glass" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold-400/20 p-2 mt-1">
                    <ArrowRight className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Liste seus principais desafios de atendimento</h3>
                    <p className="text-sm text-white/70">
                      Pense nos gargalos atuais: demora nas respostas, agenda com horários vazios, dificuldade de
                      follow-up
                    </p>
                  </div>
                </div>
              </PremiumCard>

              <PremiumCard variant="glass" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold-400/20 p-2 mt-1">
                    <ArrowRight className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Tenha seus números em mãos</h3>
                    <p className="text-sm text-white/70">
                      Taxa de ocupação da agenda, ticket médio, quantidade de leads mensais - isso nos ajudará a
                      personalizar a demonstração
                    </p>
                  </div>
                </div>
              </PremiumCard>

              <PremiumCard variant="glass" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gold-400/20 p-2 mt-1">
                    <ArrowRight className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Convide sua equipe-chave</h3>
                    <p className="text-sm text-white/70">
                      A demonstração é mais produtiva quando participam as pessoas envolvidas no atendimento e gestão
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-16 md:py-24 bg-premium-gradient">
        <div className="container text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <PremiumHeading as="h2" size="lg" className="mb-6">
              Tem alguma dúvida antes da demonstração?
            </PremiumHeading>
            <p className="text-lg text-white/90 mb-8">
              Nossa equipe está pronta para ajudar você a extrair o máximo valor da SOPHIA
            </p>
            <PremiumButton
              variant="outline"
              size="lg"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
              className="border-white text-white hover:bg-white/10"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Conversar no WhatsApp
            </PremiumButton>

            <p className="mt-12 text-sm text-white/60">
              © 2024 Virtus IA. Transformando o atendimento de clínicas com inteligência artificial.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
