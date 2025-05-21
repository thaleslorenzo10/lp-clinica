"use client"

import { useState, Suspense } from "react"
import dynamic from "next/dynamic"
import {
  Clock,
  Calendar,
  MessageSquare,
  DollarSign,
  BarChart,
  ClockIcon as Clock24,
  TrendingUp,
  ShieldCheck,
  Award,
  Zap,
  BarChart3,
  PieChart,
  Star,
  Check,
} from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { LazySection } from "@/components/lazy-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { GlassCard } from "@/components/ui/glass-card"
import { PremiumHeading } from "@/components/ui/premium-heading"
import { PremiumButton } from "@/components/ui/premium-button"
import { PremiumCard } from "@/components/ui/premium-card"
import { PremiumBadge } from "@/components/ui/premium-badge"
import { MobileMenu } from "@/components/mobile-menu"

// Carregamento dinâmico de componentes pesados
const ChatDemo = dynamic(() => import("@/components/chat-demo").then((mod) => ({ default: mod.ChatDemo })), {
  loading: () => (
    <div className="flex items-center justify-center h-full bg-dark-900 rounded-lg border border-gold-500/30">
      <div className="text-gold-400">Carregando assistente virtual...</div>
    </div>
  ),
  ssr: false,
})

const AnimatedStats = dynamic(
  () => import("@/components/animated-stats").then((mod) => ({ default: mod.AnimatedStats })),
  {
    ssr: false,
  },
)

const ComparisonSection = dynamic(
  () => import("@/components/comparison-section").then((mod) => ({ default: mod.ComparisonSection })),
  {
    ssr: false,
  },
)

const ProcessSteps = dynamic(
  () => import("@/components/process-steps").then((mod) => ({ default: mod.ProcessSteps })),
  {
    ssr: false,
  },
)

const ResultsChart = dynamic(
  () => import("@/components/results-chart").then((mod) => ({ default: mod.ResultsChart })),
  {
    ssr: false,
  },
)

const SatisfactionChart = dynamic(
  () => import("@/components/satisfaction-chart").then((mod) => ({ default: mod.SatisfactionChart })),
  {
    ssr: false,
  },
)

// URL para agendamento de demonstração
const DEMO_URL = "https://form.respondi.app/2Nmz0X7f"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Função para redirecionar para a URL de demonstração e rastrear o evento
  const redirectToDemo = () => {
    // Rastrear evento de conversão no Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Lead", {
        content_name: "Agendamento de Demonstração",
        content_category: "Demonstração VIP",
      })
    }

    // Abrir URL em nova aba
    window.open(DEMO_URL, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen bg-dark-950">
      {/* Header - Mantido como crítico para o carregamento inicial */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-dark-950/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <OptimizedImage
              src="/images/virtus-logo.png"
              alt="Virtus IA Logo"
              width={140}
              height={40}
              className="object-contain"
              priority={true} // Carregamento prioritário para logo
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problemas" className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors">
              Problemas
            </a>
            <a href="#solucao" className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors">
              Solução
            </a>
            <a href="#resultados" className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors">
              Resultados
            </a>
            <a href="#oferta" className="text-sm font-medium text-white/70 hover:text-gold-400 transition-colors">
              Oferta
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <PremiumButton variant="gold" onClick={redirectToDemo} className="hidden md:flex">
              Agendar Demonstração
            </PremiumButton>
            <MobileMenu onOpenModal={redirectToDemo} />
          </div>
        </div>
      </header>

      {/* Hero Section - Crítico para o carregamento inicial */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dark-950">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-premium-800/20 via-dark-950 to-dark-950"></div>
          <div className="absolute top-0 right-0 w-1/3 h-80 bg-premium-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-80 bg-gold-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container grid gap-12 md:grid-cols-2 items-center relative z-10">
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <PremiumBadge variant="gold">IA Avançada</PremiumBadge>
              <PremiumBadge>24/7</PremiumBadge>
              <PremiumBadge variant="outline">ROI Comprovado</PremiumBadge>
            </div>
            <PremiumHeading as="h1" size="xl" className="text-3xl md:text-5xl">
              Sua clínica está deixando escapar R$30.000 por mês no WhatsApp
            </PremiumHeading>
            <p className="text-base md:text-lg text-white/80">
              Descubra como clínicas de estética que faturam acima de R$20 mil estão{" "}
              <span className="font-bold text-gold-400">aumentando o faturamento em até 40%</span> com um agente de
              inteligência artificial que <span className="font-bold text-gold-400">vende e agenda 24 horas</span> sem
              intervenção humana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PremiumButton variant="gold" size="lg" onClick={redirectToDemo} className="w-full sm:w-auto">
                <Zap className="mr-2 h-5 w-5" />
                AGENDAR DEMONSTRAÇÃO VIP
              </PremiumButton>
            </div>
            <GlassCard className="mt-6 p-4">
              <p className="text-sm font-medium text-white/90 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gold-400" /> Vagas limitadas para demonstração esta semana
              </p>
              <CountdownTimer targetDate={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)} />
            </GlassCard>
          </div>
          <div className="relative h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute inset-0 bg-dark-900">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-full bg-dark-900">
                    <div className="text-gold-400">Carregando assistente virtual...</div>
                  </div>
                }
              >
                <ChatDemo demoUrl={DEMO_URL} />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Estatísticas animadas */}
        <div className="container mt-16 md:mt-24 relative z-10">
          <Suspense fallback={<div className="h-32" />}>
            <AnimatedStats />
          </Suspense>
        </div>
      </section>

      {/* Problemas Section - Carregado de forma lazy */}
      <LazySection>
        <section id="problemas" className="relative py-16 md:py-32 bg-gradient-to-b from-dark-950 to-navy-950">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-premium-900/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-premium-900/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <PremiumHeading className="text-3xl md:text-4xl">
                Os 3 vazamentos silenciosos que drenam o lucro da sua clínica diariamente
              </PremiumHeading>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-gold-400" />,
                  title: "Atendimentos abandonados",
                  description: "67% dos clientes desistem quando não recebem resposta em até 5 minutos",
                },
                {
                  icon: <Calendar className="h-8 w-8 md:h-10 md:w-10 text-gold-400" />,
                  title: "Agenda subutilizada",
                  description: "Cada horário vazio representa em média R$250 que você nunca recuperará",
                },
                {
                  icon: <DollarSign className="h-8 w-8 md:h-10 md:w-10 text-gold-400" />,
                  title: "Oportunidades perdidas",
                  description: "Sua equipe está ocupada demais para fazer follow-up e converter leads quentes",
                },
              ].map((item, index) => (
                <PremiumCard key={index} variant="glass" className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                    <div className="rounded-full bg-dark-900/50 p-4 md:p-5 border border-gold-400/30">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-white">{item.title}</h3>
                      <p className="text-sm md:text-base text-white/70">{item.description}</p>
                    </div>
                  </div>
                </PremiumCard>
              ))}
            </div>

            <div className="mt-12 md:mt-20">
              <Suspense fallback={<div className="h-64 bg-dark-900/20 rounded-lg animate-pulse" />}>
                <ComparisonSection />
              </Suspense>
            </div>

            <div className="mt-12 md:mt-16">
              <GlassCard className="border border-red-500/20 bg-red-950/10 p-4 md:p-6">
                <p className="text-center text-base md:text-lg font-medium text-white">
                  Cada mensagem não respondida no WhatsApp custa, em média,{" "}
                  <span className="text-red-400 font-bold">R$450 em vendas perdidas</span> para sua clínica.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Solução Section - Carregado de forma lazy */}
      <LazySection>
        <section id="solucao" className="relative py-16 md:py-32 bg-gradient-to-b from-navy-950 to-premium-950">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center opacity-5"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <PremiumHeading className="text-3xl md:text-4xl">
                Conheça SOPHIA: a assistente de IA especializada em estética que transforma conversas em agendamentos
                pagos
              </PremiumHeading>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80">
                Não se trata de um simples chatbot. SOPHIA é uma assistente digital com inteligência avançada que{" "}
                <span className="font-bold text-gold-400">domina protocolos estéticos</span>, entende as dúvidas mais
                complexas dos clientes e <span className="font-bold text-gold-400">converte curiosidade em compra</span>{" "}
                — tudo com uma comunicação tão natural que seus clientes pensarão estar falando com sua melhor
                consultora.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <Clock24 className="h-6 w-6 text-gold-400" />,
                  title: "Atendimento 24/7/365",
                  description: "Capture leads e venda enquanto você dorme ou está em procedimento",
                },
                {
                  icon: <MessageSquare className="h-6 w-6 text-gold-400" />,
                  title: "Resposta instantânea personalizada",
                  description: "Aumento de 78% na taxa de conversão comparado ao atendimento humano tradicional",
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-gold-400" />,
                  title: "Upsell inteligente",
                  description: "Sugestão estratégica de pacotes e tratamentos complementares",
                },
                {
                  icon: <Clock className="h-6 w-6 text-gold-400" />,
                  title: "Redução de 83 horas/mês",
                  description: "Em tarefas administrativas que não geram receita",
                },
                {
                  icon: <BarChart className="h-6 w-6 text-gold-400" />,
                  title: "Dashboard de análise",
                  description: "Acompanhe em tempo real cada venda e agendamento realizado",
                },
                {
                  icon: <ShieldCheck className="h-6 w-6 text-gold-400" />,
                  title: "Integração simplificada",
                  description: "Funciona com seu sistema atual sem necessidade de mudanças complexas",
                },
              ].map((benefit, index) => (
                <PremiumCard key={index} variant="glass" className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="mt-1 flex-shrink-0 rounded-full bg-dark-900/50 p-2 border border-gold-400/30">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white">{benefit.title}</h3>
                      <p className="text-sm md:text-base text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                </PremiumCard>
              ))}
            </div>

            <div className="mt-16 md:mt-24">
              <div className="text-center mb-10 md:mb-16">
                <PremiumHeading as="h3" size="lg" className="text-2xl md:text-3xl">
                  Como implementamos a SOPHIA na sua clínica
                </PremiumHeading>
              </div>
              <Suspense fallback={<div className="h-64 bg-dark-900/20 rounded-lg animate-pulse" />}>
                <ProcessSteps />
              </Suspense>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Parceiros Section - Carregado de forma lazy */}
      <LazySection>
        <section className="relative py-16 md:py-32 bg-gradient-to-b from-premium-950 to-dark-950">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-gold-400" />
                <PremiumHeading as="h2" size="lg" className="text-2xl md:text-3xl">
                  Parceiros Certificados
                </PremiumHeading>
              </div>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80">
                A Virtus IA é parceira oficial do Google e Meta, garantindo as melhores práticas e resultados para
                nossos clientes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 items-center">
                <PremiumCard variant="glass" className="p-6 md:p-8">
                  <div className="flex flex-col items-center">
                    <div className="h-24 md:h-40 w-full relative mb-4 md:mb-6">
                      <OptimizedImage
                        src="/images/google-partner.jpeg"
                        alt="Google Partner"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-white">Google Partner</h3>
                    <p className="text-sm md:text-base text-white/70 text-center">
                      Certificação que reconhece nossa expertise em soluções de publicidade e marketing digital do
                      Google, garantindo estratégias otimizadas para nossos clientes.
                    </p>
                  </div>
                </PremiumCard>

                <PremiumCard variant="glass" className="p-6 md:p-8">
                  <div className="flex flex-col items-center">
                    <div className="h-24 md:h-40 w-full relative mb-4 md:mb-6">
                      <OptimizedImage
                        src="/images/meta-business-partner.webp"
                        alt="Meta Business Partner"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-white">Meta Business Partner</h3>
                    <p className="text-sm md:text-base text-white/70 text-center">
                      Parceria que atesta nossa capacidade de desenvolver estratégias eficientes nas plataformas da
                      Meta, incluindo Facebook, Instagram e WhatsApp.
                    </p>
                  </div>
                </PremiumCard>
              </div>

              <div className="mt-8 md:mt-12">
                <GlassCard className="border border-gold-500/20 bg-gold-950/10 text-center p-4 md:p-6">
                  <p className="text-sm md:text-base text-white font-medium">
                    Nossas certificações garantem que sua clínica tenha acesso às{" "}
                    <span className="text-gold-400 font-bold">melhores práticas e ferramentas</span> de marketing
                    digital para maximizar seus resultados.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Resultados Section - Carregado de forma lazy */}
      <LazySection>
        <section id="resultados" className="relative py-16 md:py-32 bg-gradient-to-b from-dark-950 to-navy-950">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center opacity-5"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-premium-900/10 via-transparent to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
              <PremiumHeading className="text-3xl md:text-4xl">
                Clínicas parceiras eliminaram tempo ocioso da agenda em apenas 11 dias
              </PremiumHeading>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-4xl mx-auto mb-12 md:mb-20">
              <PremiumCard variant="glass" noPadding className="p-3 md:p-6">
                <Suspense fallback={<div className="h-64 bg-dark-900/20 rounded-lg animate-pulse" />}>
                  <ResultsChart />
                </Suspense>
              </PremiumCard>

              <div>
                <GlassCard className="p-6 md:p-8 border border-gold-500/20">
                  <div className="flex flex-col">
                    <div className="flex mb-4 md:mb-6">
                      <div className="text-gold-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="inline-block h-4 w-4 md:h-5 md:w-5 fill-gold-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-base md:text-xl italic font-light mb-4 md:mb-6 text-white">
                      "Em 30 dias, a SOPHIA gerou R$37.450 em novos agendamentos e recuperou 12 clientes inativos que
                      voltaram a fazer procedimentos. Ela atende melhor que qualquer profissional que já contratei."
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-dark-800 overflow-hidden border-2 border-gold-500/30">
                        <OptimizedImage
                          src="/placeholder.svg?height=64&width=64"
                          alt="Dra. Carla Mendes"
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white">Dra. Carla Mendes</p>
                        <p className="text-sm text-white/70">Clínica Belezza Prime</p>
                        <p className="text-xs md:text-sm text-gold-400">Faturamento mensal: R$83.000</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <PremiumCard variant="glass" noPadding className="p-3 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4 px-2 pt-2">
                    <PieChart className="h-5 w-5 md:h-6 md:w-6 text-gold-400" />
                    <h3 className="text-lg md:text-xl font-bold text-white">Satisfação dos Clientes</h3>
                  </div>
                  <Suspense fallback={<div className="h-64 bg-dark-900/20 rounded-lg animate-pulse" />}>
                    <SatisfactionChart />
                  </Suspense>
                </PremiumCard>

                <PremiumCard variant="glass" className="p-6 md:p-8">
                  <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-gold-400" />
                    <h3 className="text-lg md:text-xl font-bold text-white">Impacto nos Negócios</h3>
                  </div>
                  <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium text-white">Aumento no faturamento</span>
                        <span className="text-xs md:text-sm font-medium text-gold-400">40%</span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-2 md:h-2.5">
                        <div className="bg-gold-gradient h-2 md:h-2.5 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium text-white">
                          Redução de custos operacionais
                        </span>
                        <span className="text-xs md:text-sm font-medium text-gold-400">32%</span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-2 md:h-2.5">
                        <div className="bg-gold-gradient h-2 md:h-2.5 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium text-white">Aumento na taxa de conversão</span>
                        <span className="text-xs md:text-sm font-medium text-gold-400">78%</span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-2 md:h-2.5">
                        <div className="bg-gold-gradient h-2 md:h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs md:text-sm font-medium text-white">Redução no tempo de resposta</span>
                        <span className="text-xs md:text-sm font-medium text-gold-400">95%</span>
                      </div>
                      <div className="w-full bg-dark-800 rounded-full h-2 md:h-2.5">
                        <div className="bg-gold-gradient h-2 md:h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Oferta Section - Carregado de forma lazy */}
      <LazySection>
        <section id="oferta" className="relative py-16 md:py-32 bg-premium-gradient">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
          </div>

          <div className="container text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <PremiumHeading className="text-3xl md:text-4xl">
                EXCLUSIVO PARA CLÍNICAS SELECIONADAS: Diagnóstico de Rentabilidade + Demonstração VIP
              </PremiumHeading>
              <p className="text-lg md:text-xl mb-8 md:mb-12 mt-4 md:mt-6 text-white/90">
                Somente esta semana, clínicas com faturamento acima de R$20 mil podem solicitar:
              </p>

              <GlassCard className="mb-8 md:mb-12 p-6 md:p-8">
                <ul className="text-left space-y-4 md:space-y-6">
                  <li className="flex items-start gap-3 md:gap-4">
                    <div className="rounded-full bg-gold-400 p-1 mt-1">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-dark-950" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base md:text-lg">
                        Diagnóstico completo do funil de atendimento atual
                      </p>
                      <p className="text-xs md:text-sm text-gold-400">Valor real: R$2.900</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <div className="rounded-full bg-gold-400 p-1 mt-1">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-dark-950" />
                    </div>
                    <p className="text-white text-sm md:text-base">
                      Mapeamento de oportunidades de automação específicas para seu negócio
                    </p>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <div className="rounded-full bg-gold-400 p-1 mt-1">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-dark-950" />
                    </div>
                    <p className="text-white text-sm md:text-base">
                      Simulação personalizada da IA com base no perfil dos seus clientes e serviços
                    </p>
                  </li>
                  <li className="flex items-start gap-3 md:gap-4">
                    <div className="rounded-full bg-gold-400 p-1 mt-1">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-dark-950" />
                    </div>
                    <p className="text-white text-sm md:text-base">
                      Projeção financeira do ROI nos primeiros 30, 60 e 90 dias
                    </p>
                  </li>
                </ul>
              </GlassCard>

              <PremiumButton
                variant="gold"
                size="lg"
                onClick={redirectToDemo}
                className="px-6 py-5 md:px-12 md:py-7 text-base md:text-lg w-full sm:w-auto"
              >
                <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                QUERO AUMENTAR MEU FATURAMENTO COM IA
              </PremiumButton>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Garantias Section - Carregado de forma lazy */}
      <LazySection>
        <section className="relative py-16 md:py-32 bg-gradient-to-b from-navy-950 to-dark-950">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/10 via-transparent to-transparent"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <PremiumHeading className="text-3xl md:text-4xl">
                  Implementação sem complicações e resultados garantidos
                </PremiumHeading>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                <PremiumCard variant="glass" className="p-6 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="rounded-full bg-gold-400 p-1 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-dark-950" />
                    </div>
                    <div>
                      <p className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white">
                        Zero alteração no seu sistema atual
                      </p>
                      <p className="text-sm md:text-base text-white/70">Integração via API em menos de 2 horas</p>
                    </div>
                  </div>
                </PremiumCard>

                <PremiumCard variant="glass" className="p-6 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="rounded-full bg-gold-400 p-1 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-dark-950" />
                    </div>
                    <div>
                      <p className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white">Sem contratos longos</p>
                      <p className="text-sm md:text-base text-white/70">Modelo flexível com resultados comprovados</p>
                    </div>
                  </div>
                </PremiumCard>

                <PremiumCard variant="glass" className="p-6 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="rounded-full bg-gold-400 p-1 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-dark-950" />
                    </div>
                    <div>
                      <p className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white">Treinamento personalizado</p>
                      <p className="text-sm md:text-base text-white/70">
                        A IA é configurada com seu tom de voz e protocolos
                      </p>
                    </div>
                  </div>
                </PremiumCard>

                <PremiumCard variant="glass" className="p-6 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="rounded-full bg-gold-400 p-1 mt-1">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-dark-950" />
                    </div>
                    <div>
                      <p className="font-bold text-lg md:text-xl mb-1 md:mb-2 text-white">Suporte especializado</p>
                      <p className="text-sm md:text-base text-white/70">
                        Equipe dedicada para otimização contínua de resultados
                      </p>
                    </div>
                  </div>
                </PremiumCard>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Final CTA Section - Carregado de forma lazy */}
      <LazySection>
        <section className="relative py-16 md:py-32 bg-premium-gradient">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
          </div>

          <div className="container text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <PremiumHeading className="text-3xl md:text-4xl">
                A revolução no atendimento estético já começou. De que lado sua clínica estará?
              </PremiumHeading>
              <p className="text-base md:text-xl mb-8 md:mb-12 mt-4 md:mt-6 text-white/90">
                Enquanto você lê isto, clínicas concorrentes já estão implementando inteligência artificial para
                capturar os clientes que você poderia estar atendendo. Cada dia sem automação inteligente é dinheiro
                deixado na mesa.
              </p>
              <PremiumButton
                variant="gold"
                size="lg"
                onClick={redirectToDemo}
                className="px-6 py-5 md:px-12 md:py-7 text-base md:text-lg w-full sm:w-auto"
              >
                <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                DAR O PRÓXIMO PASSO AGORA
              </PremiumButton>

              <p className="mt-8 md:mt-12 text-xs md:text-sm italic text-white/80">
                PS: As clínicas que implementaram nossa solução viram um aumento médio de{" "}
                <span className="text-gold-400 font-bold">32% no faturamento</span> nos primeiros 60 dias. Que diferença
                isso faria no seu negócio?
              </p>
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  )
}
