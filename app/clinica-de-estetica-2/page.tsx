"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Clock,
  Calendar,
  MessageSquare,
  DollarSign,
  BarChart,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Zap,
  Star,
  Check,
  ArrowRight,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChatDemo } from "@/components/chat-demo"

// URL para agendamento de demonstração
const DEMO_URL = "https://form.respondi.app/2Nmz0X7f"

export default function LandingPage2() {
  const [isIntersecting, setIsIntersecting] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            setIsIntersecting((prev) => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/virtus-logo.png"
              alt="Virtus IA Logo"
              width={120}
              height={35}
              className="object-contain"
              priority={true}
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#problemas" className="text-sm font-medium text-gray-600 hover:text-premium-600 transition-colors">
              Problemas
            </a>
            <a href="#solucao" className="text-sm font-medium text-gray-600 hover:text-premium-600 transition-colors">
              Solução
            </a>
            <a
              href="#resultados"
              className="text-sm font-medium text-gray-600 hover:text-premium-600 transition-colors"
            >
              Resultados
            </a>
            <a href="#oferta" className="text-sm font-medium text-gray-600 hover:text-premium-600 transition-colors">
              Oferta
            </a>
          </nav>
          <Button onClick={redirectToDemo} className="hidden md:flex bg-premium-600 hover:bg-premium-700 text-white">
            Agendar Demonstração
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div
              id="hero-content"
              data-animate
              className={`space-y-6 transition-all duration-1000 ${
                isIntersecting["hero-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-premium-100 text-premium-700 text-sm font-medium">
                IA Avançada • ROI Comprovado • 24/7
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Sua clínica está deixando escapar <span className="text-premium-600">R$40.000</span> por mês no WhatsApp
              </h1>
              <p className="text-lg text-gray-600">
                Descubra como clínicas de estética que faturam acima de R$20 mil estão{" "}
                <span className="font-bold text-premium-600">aumentando o faturamento em até 40%</span> com um agente de
                inteligência artificial que <span className="font-bold text-premium-600">vende e agenda 24 horas</span>{" "}
                sem intervenção humana.
              </p>
              <div className="pt-4">
                <Button onClick={redirectToDemo} size="lg" className="bg-premium-600 hover:bg-premium-700 text-white">
                  <Zap className="mr-2 h-5 w-5" />
                  AGENDAR DEMONSTRAÇÃO VIP
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4 text-premium-600" />
                Vagas limitadas para demonstração esta semana
              </div>
            </div>

            <div
              id="hero-image"
              data-animate
              className={`relative h-[400px] rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${
                isIntersecting["hero-image"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Image
                src="/placeholder.svg?height=800&width=600&text=IA+Assistente+Virtual"
                alt="SOPHIA Assistente Virtual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-100 to-transparent flex flex-col justify-end p-6">
                <ChatDemo demoUrl={DEMO_URL} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "78%", label: "Aumento na taxa de conversão" },
              { value: "24/7", label: "Disponibilidade" },
              { value: "83h", label: "Horas economizadas por mês" },
              { value: "40%", label: "Aumento médio no faturamento" },
            ].map((stat, index) => (
              <div
                key={index}
                id={`stat-${index}`}
                data-animate
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  isIntersecting[`stat-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-premium-600">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problemas" className="py-20 bg-gray-50">
        <div className="container">
          <div
            id="problems-heading"
            data-animate
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
              isIntersecting["problems-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Os 3 vazamentos silenciosos que drenam o lucro da sua clínica diariamente
            </h2>
            <p className="text-lg text-gray-600">
              Descubra os problemas que estão afetando seu faturamento sem que você perceba
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8 text-premium-600" />,
                title: "Atendimentos abandonados",
                description: "67% dos clientes desistem quando não recebem resposta em até 5 minutos",
              },
              {
                icon: <Calendar className="h-8 w-8 text-premium-600" />,
                title: "Agenda subutilizada",
                description: "Cada horário vazio representa em média R$250 que você nunca recuperará",
              },
              {
                icon: <DollarSign className="h-8 w-8 text-premium-600" />,
                title: "Oportunidades perdidas",
                description: "Sua equipe está ocupada demais para fazer follow-up e converter leads quentes",
              },
            ].map((item, index) => (
              <Card
                key={index}
                id={`problem-${index}`}
                data-animate
                className={`border border-gray-200 bg-white shadow-lg overflow-hidden transition-all duration-1000 delay-${index * 200} ${
                  isIntersecting[`problem-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-premium-500 to-premium-700"></div>
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-premium-100 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div
            id="comparison-section"
            data-animate
            className={`mt-16 transition-all duration-1000 delay-300 ${
              isIntersecting["comparison-section"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Tabs defaultValue="without" className="w-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transforme seu atendimento com SOPHIA</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Veja como a SOPHIA elimina os problemas de atendimento e transforma a experiência dos seus clientes
                </p>
                <TabsList className="mt-6 bg-gray-100">
                  <TabsTrigger
                    value="without"
                    className="data-[state=active]:bg-white data-[state=active]:text-premium-600"
                  >
                    Sem SOPHIA
                  </TabsTrigger>
                  <TabsTrigger
                    value="with"
                    className="data-[state=active]:bg-white data-[state=active]:text-premium-600"
                  >
                    Com SOPHIA
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="without">
                <Card className="border-none shadow-lg bg-white p-6">
                  <h4 className="text-xl font-bold text-red-500 mb-4">Problemas comuns no atendimento tradicional</h4>
                  <ul className="space-y-4">
                    {[
                      "67% das mensagens não respondidas em 5 minutos",
                      "Horários vazios na agenda",
                      "Equipe sobrecarregada com tarefas administrativas",
                      "Atendimento limitado ao horário comercial",
                      "Oportunidades de venda perdidas",
                      "Tempo desperdiçado com perguntas repetitivas",
                      "Dificuldade em fazer follow-up com leads",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 rounded-full bg-red-100 p-1">
                          <X className="h-3 w-3 text-red-500" />
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="with">
                <Card className="border-none shadow-lg bg-white p-6">
                  <h4 className="text-xl font-bold text-premium-600 mb-4">Benefícios do atendimento com IA</h4>
                  <ul className="space-y-4">
                    {[
                      "Resposta instantânea 24 horas por dia",
                      "Agenda otimizada com alta taxa de ocupação",
                      "Equipe focada em atividades de alto valor",
                      "Vendas e agendamentos mesmo fora do horário comercial",
                      "Aumento de 40% no faturamento mensal",
                      "Atendimento padronizado e de alta qualidade",
                      "Follow-up automático com leads quentes",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 rounded-full bg-green-100 p-1">
                          <Check className="h-3 w-3 text-green-500" />
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div
            id="warning-card"
            data-animate
            className={`mt-12 transition-all duration-1000 delay-500 ${
              isIntersecting["warning-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="border-none shadow-lg bg-red-50 p-6">
              <p className="text-center text-lg font-medium text-gray-800">
                Cada mensagem não respondida no WhatsApp custa, em média,{" "}
                <span className="text-red-600 font-bold">R$450 em vendas perdidas</span> para sua clínica.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-20 bg-white">
        <div className="container">
          <div
            id="solution-heading"
            data-animate
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
              isIntersecting["solution-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conheça SOPHIA: a assistente de IA especializada em estética que transforma conversas em agendamentos
              pagos
            </h2>
            <p className="text-lg text-gray-600">
              Não se trata de um simples chatbot. SOPHIA é uma assistente digital com inteligência avançada que{" "}
              <span className="font-bold text-premium-600">domina protocolos estéticos</span>, entende as dúvidas mais
              complexas dos clientes e{" "}
              <span className="font-bold text-premium-600">converte curiosidade em compra</span> — tudo com uma
              comunicação tão natural que seus clientes pensarão estar falando com sua melhor consultora.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="h-6 w-6 text-premium-600" />,
                title: "Atendimento 24/7/365",
                description: "Capture leads e venda enquanto você dorme ou está em procedimento",
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-premium-600" />,
                title: "Resposta instantânea personalizada",
                description: "Aumento de 78% na taxa de conversão comparado ao atendimento humano tradicional",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-premium-600" />,
                title: "Upsell inteligente",
                description: "Sugestão estratégica de pacotes e tratamentos complementares",
              },
              {
                icon: <Clock className="h-6 w-6 text-premium-600" />,
                title: "Redução de 83 horas/mês",
                description: "Em tarefas administrativas que não geram receita",
              },
              {
                icon: <BarChart className="h-6 w-6 text-premium-600" />,
                title: "Dashboard de análise",
                description: "Acompanhe em tempo real cada venda e agendamento realizado",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-premium-600" />,
                title: "Integração simplificada",
                description: "Funciona com seu sistema atual sem necessidade de mudanças complexas",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                id={`benefit-${index}`}
                data-animate
                className={`border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-700 delay-${index * 100} ${
                  isIntersecting[`benefit-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-premium-100 p-3 flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div
            id="process-heading"
            data-animate
            className={`text-center mt-20 mb-12 transition-all duration-1000 ${
              isIntersecting["process-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Como implementamos a SOPHIA na sua clínica</h3>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  number: "01",
                  title: "Diagnóstico",
                  description:
                    "Análise completa do seu processo atual de atendimento e identificação de oportunidades.",
                },
                {
                  number: "02",
                  title: "Configuração",
                  description:
                    "Personalização da SOPHIA com o tom de voz, protocolos e serviços específicos da sua clínica.",
                },
                {
                  number: "03",
                  title: "Integração",
                  description: "Conexão com seus sistemas existentes de agenda, CRM e WhatsApp em menos de 2 horas.",
                },
                {
                  number: "04",
                  title: "Ativação",
                  description: "Início do atendimento automatizado com monitoramento contínuo para ajustes finos.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  id={`step-${index}`}
                  data-animate
                  className={`${index % 2 !== 0 ? "md:mt-16" : ""} relative transition-all duration-1000 delay-${index * 200} ${
                    isIntersecting[`step-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <Card className="border border-gray-100 shadow-md p-6 md:p-8 bg-white">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-premium-600 text-white flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-20 bg-gray-50">
        <div className="container">
          <div
            id="results-heading"
            data-animate
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
              isIntersecting["results-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clínicas parceiras eliminaram tempo ocioso da agenda em apenas 11 dias
            </h2>
            <p className="text-lg text-gray-600">
              Veja os resultados reais obtidos por clínicas que implementaram a SOPHIA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              id="results-chart"
              data-animate
              className={`transition-all duration-1000 ${
                isIntersecting["results-chart"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="border-none shadow-lg h-full bg-white">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Impacto nos Resultados</h3>
                  <div className="space-y-6 mt-8">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Taxa de Ocupação da Agenda</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">62%</span>
                          <ArrowRight className="h-3 w-3 text-premium-600" />
                          <span className="text-sm font-bold text-premium-600">94%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-premium-600 h-2.5 rounded-full" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Ticket Médio</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">R$350</span>
                          <ArrowRight className="h-3 w-3 text-premium-600" />
                          <span className="text-sm font-bold text-premium-600">R$480</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-premium-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Aumento no faturamento</span>
                        <span className="text-sm font-bold text-premium-600">40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-premium-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Redução no tempo de resposta</span>
                        <span className="text-sm font-bold text-premium-600">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-premium-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div
              id="testimonial"
              data-animate
              className={`transition-all duration-1000 ${
                isIntersecting["testimonial"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="border-none shadow-lg h-full bg-white">
                <div className="p-6">
                  <div className="flex mb-4">
                    <div className="text-premium-600">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="inline-block h-5 w-5 fill-premium-600" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xl italic font-light mb-6 text-gray-700">
                    "Em 30 dias, a SOPHIA gerou R$37.450 em novos agendamentos e recuperou 12 clientes inativos que
                    voltaram a fazer procedimentos. Ela atende melhor que qualquer profissional que já contratei."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Dra. Carla Mendes"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Dra. Carla Mendes</p>
                      <p className="text-sm text-gray-500">Clínica Belezza Prime</p>
                      <p className="text-xs text-premium-600">Faturamento mensal: R$83.000</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-20 bg-premium-100 text-gray-800">
        <div className="container">
          <div
            id="offer-content"
            data-animate
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
              isIntersecting["offer-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-premium-800">
              EXCLUSIVO PARA CLÍNICAS SELECIONADAS: Diagnóstico de Rentabilidade + Demonstração VIP
            </h2>
            <p className="text-xl mb-12 text-gray-700">
              Somente esta semana, clínicas com faturamento acima de R$20 mil podem solicitar:
            </p>

            <Card className="bg-white text-gray-900 shadow-xl mb-12">
              <div className="p-8">
                <ul className="text-left space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-premium-100 p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-premium-600" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Diagnóstico completo do funil de atendimento atual</p>
                      <p className="text-sm text-premium-600">Valor real: R$2.900</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-premium-100 p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-premium-600" />
                    </div>
                    <p>Mapeamento de oportunidades de automação específicas para seu negócio</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-premium-100 p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-premium-600" />
                    </div>
                    <p>Simulação personalizada da IA com base no perfil dos seus clientes e serviços</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-premium-100 p-1 mt-1">
                      <CheckCircle className="h-5 w-5 text-premium-600" />
                    </div>
                    <p>Projeção financeira do ROI nos primeiros 30, 60 e 90 dias</p>
                  </li>
                </ul>
              </div>
            </Card>

            <Button
              onClick={redirectToDemo}
              size="lg"
              className="bg-premium-600 hover:bg-premium-700 text-white text-lg px-8 py-6"
            >
              <Zap className="mr-2 h-5 w-5" />
              QUERO AUMENTAR MEU FATURAMENTO COM IA
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div
            id="guarantees-heading"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isIntersecting["guarantees-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Implementação sem complicações e resultados garantidos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nosso processo é simples e eficiente, garantindo resultados rápidos para sua clínica
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-premium-600" />,
                title: "Zero alteração no seu sistema atual",
                description: "Integração via API em menos de 2 horas",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-premium-600" />,
                title: "Sem contratos longos",
                description: "Modelo flexível com resultados comprovados",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-premium-600" />,
                title: "Treinamento personalizado",
                description: "A IA é configurada com seu tom de voz e protocolos",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-premium-600" />,
                title: "Suporte especializado",
                description: "Equipe dedicada para otimização contínua de resultados",
              },
            ].map((guarantee, index) => (
              <Card
                key={index}
                id={`guarantee-${index}`}
                data-animate
                className={`border border-gray-100 bg-white shadow-md hover:shadow-lg transition-all duration-700 delay-${index * 150} ${
                  isIntersecting[`guarantee-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-premium-100 p-2">{guarantee.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">{guarantee.title}</h3>
                      <p className="text-gray-600">{guarantee.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <div
            id="final-cta"
            data-animate
            className={`max-w-3xl mx-auto transition-all duration-1000 ${
              isIntersecting["final-cta"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A revolução no atendimento estético já começou. De que lado sua clínica estará?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Enquanto você lê isto, clínicas concorrentes já estão implementando inteligência artificial para capturar
              os clientes que você poderia estar atendendo. Cada dia sem automação inteligente é dinheiro deixado na
              mesa.
            </p>
            <Button
              onClick={redirectToDemo}
              size="lg"
              className="bg-premium-600 hover:bg-premium-700 text-white text-lg px-8 py-6"
            >
              <Zap className="mr-2 h-5 w-5" />
              DAR O PRÓXIMO PASSO AGORA
            </Button>

            <p className="mt-12 text-sm italic text-gray-500">
              PS: As clínicas que implementaram nossa solução viram um aumento médio de{" "}
              <span className="text-premium-600 font-bold">32% no faturamento</span> nos primeiros 60 dias. Que
              diferença isso faria no seu negócio?
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 text-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/virtus-logo.png"
                alt="Virtus IA Logo"
                width={120}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="text-sm text-gray-600">© 2024 Virtus IA. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
