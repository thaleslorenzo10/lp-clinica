import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, X, Star, Clock, Users, TrendingUp, Zap, Target, AlertTriangle, Shield } from "lucide-react";

const LorenzoLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 md:py-20 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-6 md:mb-8">
            <img 
              src="/lovable-uploads/b0e211b1-06e0-4fd9-972f-6ec4a4dcafea.png" 
              alt="Lorenzo Media" 
              className="h-12 md:h-16 mx-auto"
            />
          </div>
          <Badge className="mb-4 md:mb-6 text-sm md:text-lg px-3 md:px-6 py-1 md:py-2 bg-red border-red text-white">
            🔥 PARA CLÍNICAS QUE INVESTEM R$ 3MIL+ EM TRÁFEGO MAS ESTÃO FRUSTRADAS COM OS RESULTADOS
          </Badge>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight px-2">
            <span className="text-red">3 em cada 4 clínicas de estética</span> estão{" "}
            <span className="text-orange">QUEIMANDO DINHEIRO</span> em tráfego.{" "}
            <span className="text-text-primary">Sua clínica está entre elas?</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 md:mb-8 max-w-4xl mx-auto px-2">
            Call de Diagnóstico Completo por apenas <span className="text-orange font-bold">R$ 27</span>: 
            Descubra EXATAMENTE onde sua clínica está perdendo dinheiro em tráfego + implementação do nosso{" "}
            <span className="text-green font-bold">Agente de IA que já aumentou conversões em 380%</span>
          </p>
          
          <Button variant="cta" size="xl" className="mb-6 md:mb-8 w-full sm:w-auto text-sm sm:text-base" asChild>
            <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
              QUERO MINHA ANÁLISE POR R$ 27
            </a>
          </Button>
        </div>
      </section>

      {/* Pain Section */}
      <section className="container mx-auto px-4 py-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 px-2">
            Reconhece essa situação <span className="text-red">FRUSTRANTE</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: "💸",
                title: "Você investe R$ 5.000, R$ 8.000, até R$ 15.000 em tráfego",
                subtitle: "Orçamento alto, expectativa maior ainda... mas os resultados não aparecem"
              },
              {
                icon: "📱",
                title: "Leads chegam no WhatsApp e simplesmente... desaparecem",
                subtitle: "Curiosos, pescadores de preço, gente que nem responde"
              },
              {
                icon: "❌",
                title: "CAC absurdo que inviabiliza o negócio (R$ 300+ por cliente)",
                subtitle: "Impossível ter lucro pagando tanto para conseguir um cliente"
              },
              {
                icon: "😤",
                title: "Gestor/agência sempre pede \"mais orçamento\" para ter resultado",
                subtitle: "\"Precisa investir mais para ver resultado\" - você já ouviu isso?"
              },
              {
                icon: "🔄",
                title: "Você repete estratégias antigas que já não funcionam",
                subtitle: "Mesmos públicos, mesmos textos, mesmos resultados frustrantes"
              },
              {
                icon: "🤯",
                title: "Está sozinho, sem saber por onde começar a otimizar",
                subtitle: "Não sabe se o problema é o público, o anúncio ou o funil"
              }
            ].map((pain, index) => (
              <Card key={index} className="p-4 md:p-6 bg-navy-medium border-card-border hover:bg-navy-light transition-all duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-2xl md:text-4xl flex-shrink-0">{pain.icon}</span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">{pain.title}</h3>
                    <p className="text-sm md:text-base text-text-secondary">{pain.subtitle}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12 px-2">
            <p className="text-lg md:text-xl text-text-secondary mb-4 md:mb-6">
              Todo mês é a mesma história... Você continua investindo, mas o faturamento não acompanha.
            </p>
            <p className="text-xl md:text-2xl font-bold text-orange">
              O problema não é a quantidade de tráfego. É COMO você está gerenciando essas campanhas e convertendo os leads.
            </p>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="container mx-auto px-4 py-10 md:py-20 bg-navy-medium">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-6 md:mb-8 text-sm md:text-lg px-4 md:px-6 py-1 md:py-2 bg-orange text-navy-dark">O ESPECIALISTA</Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 px-2">
            <span className="text-orange">Lorenzo Silva</span> - O homem que já{" "}
            <span className="text-green">SALVOU R$ 30 milhões</span> em campanhas quebradas
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { icon: TrendingUp, title: "R$ 30M+", subtitle: "otimizados em campanhas", desc: "Dinheiro que estava sendo desperdiçado e foi recuperado" },
              { icon: Users, title: "94 clínicas", subtitle: "\"ressuscitadas\"", desc: "Clínicas que estavam no prejuízo e voltaram a lucrar" },
              { icon: Target, title: "CAC médio", subtitle: "pós-otimização: R$ 87", desc: "Redução média de 73% no custo de aquisição" },
              { icon: Zap, title: "Agente de IA", subtitle: "implementado em 47 clínicas", desc: "Conversão média aumentou 380% com automação inteligente" }
            ].map((stat, index) => (
              <Card key={index} className="p-4 md:p-6 bg-navy-dark border-card-border text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-8 md:w-12 h-8 md:h-12 text-orange mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-2xl font-bold text-orange mb-1 md:mb-2">{stat.title}</h3>
                <p className="text-sm md:text-lg font-semibold text-text-primary mb-1 md:mb-2">{stat.subtitle}</p>
                <p className="text-xs md:text-sm text-text-secondary">{stat.desc}</p>
              </Card>
            ))}
          </div>
          
          <Card className="p-6 md:p-8 bg-navy-dark border-green">
            <div className="flex justify-center gap-1 mb-3 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 md:w-6 h-4 md:h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl italic text-text-primary mb-3 md:mb-4 px-2">
              "Em 45 minutos de call, Lorenzo identificou 5 vazamentos que eu não via há meses. 
              A IA dele converteu 3x mais que meu atendimento manual."
            </blockquote>
            <cite className="text-sm md:text-base text-text-secondary">- Dra. Renata L., Clínica Premium SP</cite>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section className="container mx-auto px-4 py-10 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Badge className="mb-6 md:mb-8 text-sm md:text-lg px-4 md:px-6 py-1 md:py-2 bg-green text-navy-dark block w-fit mx-auto">CASE DE TRANSFORMAÇÃO</Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8 px-2">
            <span className="text-red">CASE REAL: De R$ 4.200/mês DESPERDIÇADOS</span> para{" "}
            <span className="text-green">ROI de 380%</span>
          </h2>
          
          <p className="text-lg md:text-xl text-center text-text-secondary mb-8 md:mb-12 px-2">
            Cliente: Clínica especializada em Harmonização + Preenchimento<br className="hidden sm:block" />
            <span className="block sm:inline">Situação: 18 meses queimando dinheiro com agência tradicional</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <Card className="p-4 md:p-8 bg-red/10 border-red">
              <h3 className="text-lg md:text-2xl font-bold text-red mb-4 md:mb-6 flex items-center gap-2">
                <X className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0" />
                <span>ANTES (Sem diagnóstico + atendimento manual)</span>
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0" />
                  Investimento: R$ 4.200/mês
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0" />
                  Leads: 32/mês (95% ruins)
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0" />
                  Conversão: 12% (atendimento manual)
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0" />
                  Clientes novos: 3-4/mês
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0" />
                  CAC: R$ 350
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0" />
                  ROI: Prejuízo total
                </li>
              </ul>
            </Card>
            
            <Card className="p-4 md:p-8 bg-green/10 border-green">
              <h3 className="text-lg md:text-2xl font-bold text-green mb-4 md:mb-6 flex items-center gap-2">
                <Check className="w-6 md:w-8 h-6 md:h-8 flex-shrink-0" />
                <span>DEPOIS (Pós-diagnóstico + Agente de IA)</span>
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
                  Investimento: R$ 2.800/mês (-33%)
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
                  Leads: 28/mês (78% qualif.)
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
                  Conversão: 47% (com IA)
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
                  Clientes novos: 12-15/mês
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
                  CAC: R$ 93 (-73%)
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
                  ROI: 380% mensal
                </li>
              </ul>
            </Card>
          </div>
          
          <Card className="p-6 md:p-8 bg-navy-medium border-green">
            <blockquote className="text-lg md:text-xl italic text-center text-text-primary mb-3 md:mb-4 px-2">
              "A call de diagnóstico mostrou exatamente onde eu estava errando. E o Agente de IA virou meu melhor vendedor - trabalha 24h e converte melhor que qualquer atendente."
            </blockquote>
            <cite className="text-sm md:text-base text-text-secondary text-center block">- Dra. Renata L.</cite>
            <p className="text-lg md:text-xl font-bold text-green text-center mt-3 md:mt-4">
              Resultado: Menos gasto, mais clientes, ROI previsível.
            </p>
          </Card>
          
          <div className="text-center mt-6 md:mt-8 px-4">
            <Button variant="cta" size="lg" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
                QUERO MINHA ANÁLISE POR R$ 27 →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 7 Fatal Errors */}
      <section className="container mx-auto px-4 py-10 md:py-20 bg-navy-medium">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8 px-2">
            Os 7 Erros <span className="text-red">FATAIS</span> que estão{" "}
            <span className="text-red">MATANDO</span> suas campanhas
          </h2>
          
          <p className="text-lg md:text-xl text-center text-text-secondary mb-6 md:mb-12 px-2">
            (identificamos na nossa Call de Diagnóstico)
          </p>
          
          <p className="text-base md:text-lg text-center text-text-secondary mb-8 md:mb-12 px-2">
            Após analisar R$ 30 milhões em campanhas quebradas, identificamos os mesmos padrões:
          </p>
          
          <div className="grid gap-4 md:gap-6">
            {[
              {
                number: "#1",
                title: "Segmentação de Amador",
                desc: "\"Mulheres 25-50 interessadas em beleza\" → Público genérico = CAC alto"
              },
              {
                number: "#2", 
                title: "Copy Generalista",
                desc: "Usando textos que funcionam para qualquer negócio → Não conecta com dor específica"
              },
              {
                number: "#3",
                title: "Otimização Errada", 
                desc: "Focando em cliques, alcance ou impressões → Gastando com quem não converte"
              },
              {
                number: "#4",
                title: "Zero Qualificação",
                desc: "Todo mundo que clica vira lead → Leads ruins enchem o funil"
              },
              {
                number: "#5",
                title: "Funil Quebrado",
                desc: "Lead entra no WhatsApp e some → 70% das conversões perdidas"
              },
              {
                number: "#6",
                title: "Sem Automação",
                desc: "Dependendo de atendimento manual 9h-18h → Perdem leads fora do horário"
              },
              {
                number: "#7",
                title: "Métricas Erradas",
                desc: "Comemorando vanity metrics → Não sabem se está dando lucro ou prejuízo"
              }
            ].map((error, index) => (
              <Card key={index} className="p-4 md:p-6 bg-navy-dark border-red hover:bg-red/5 transition-all duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-red text-white rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">
                    {error.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-red mb-2 flex items-start gap-2">
                      <X className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0 mt-0.5" />
                      <span>ERRO {error.number}: {error.title}</span>
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary">{error.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-6 md:p-8 bg-orange/10 border-orange mt-6 md:mt-8">
            <p className="text-lg md:text-xl font-bold text-orange text-center flex items-center justify-center gap-2 px-2">
              <AlertTriangle className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
              <span>Na nossa Call de Diagnóstico, identificamos quais desses erros estão destruindo seus resultados</span>
            </p>
          </Card>
          
          <div className="text-center mt-6 md:mt-8 px-4">
            <Button variant="cta" size="lg" className="w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
                DESCOBRIR MEUS ERROS POR R$ 27 →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="container mx-auto px-4 py-10 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8 px-2">
            Call de Diagnóstico Completo + Implementação de IA por apenas{" "}
            <span className="text-orange">R$ 27</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8 bg-navy-medium border-blue">
              <div className="text-center mb-4 md:mb-6">
                <div className="bg-blue text-white rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  🔍
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-blue">ANÁLISE COMPLETA DAS SUAS CAMPANHAS</h3>
                <p className="text-sm md:text-base text-text-secondary">(60 minutos)</p>
              </div>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Auditoria ao vivo das suas campanhas atuais</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Identificação dos 7 erros que estão queimando seu dinheiro</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Cálculo do seu CAC real (muitos nem sabem o número verdadeiro)</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Plano de ação personalizado para sua clínica</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 md:p-8 bg-navy-medium border-green">
              <div className="text-center mb-4 md:mb-6">
                <div className="bg-green text-white rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  🤖
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-green">IMPLEMENTAÇÃO DO AGENTE DE IA</h3>
                <p className="text-sm md:text-base text-text-secondary">(Valor: R$ 2.500)</p>
              </div>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Configuração completa do nosso Agente de IA para sua clínica</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Scripts personalizados para seus procedimentos</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Qualificação automática de leads 24h por dia</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Aumento médio de 380% na conversão</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 md:p-8 bg-navy-medium border-orange lg:col-span-1 md:col-span-2 lg:col-span-1">
              <div className="text-center mb-4 md:mb-6">
                <div className="bg-orange text-white rounded-full w-12 md:w-16 h-12 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  📊
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-orange">RELATÓRIO PERSONALIZADO</h3>
                <p className="text-sm md:text-base text-text-secondary">(Valor: R$ 800)</p>
              </div>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Documento com todos os pontos identificados</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Passo a passo para implementar as correções</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Métricas para acompanhar os resultados</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Cronograma de otimização para 90 dias</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <Card className="p-6 md:p-8 bg-orange/10 border-orange mt-6 md:mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-orange text-center mb-4 md:mb-6">🎁 BÔNUS EXCLUSIVOS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Calculadora de CAC Real - Para monitorar seus custos</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Scripts de Recuperação - Para leads que não converteram</span>
                </li>
              </ul>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>30 dias de suporte - Tirar dúvidas da implementação</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Why R$27 */}
      <section className="container mx-auto px-4 py-10 md:py-20 bg-navy-medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 px-2">
            POR QUE APENAS <span className="text-orange">R$ 27</span>?
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary mb-6 md:mb-8 px-2">
            Normalmente cobramos <span className="text-orange font-bold">R$ 2.500</span> por uma análise completa + implementação de IA.
          </p>
          
          <p className="text-base md:text-lg text-text-secondary mb-6 md:mb-8 px-2">Mas decidimos fazer essa oferta especial porque:</p>
          
          <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
            <p className="text-sm md:text-lg flex items-start justify-center gap-3 px-2">
              <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0 mt-0.5" />
              <span>Estamos cansados de ver clínicas queimando dinheiro desnecessariamente</span>
            </p>
            <p className="text-sm md:text-lg flex items-start justify-center gap-3 px-2">
              <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0 mt-0.5" />
              <span>Queremos provar o valor do nosso trabalho antes de qualquer investimento maior</span>
            </p>
            <p className="text-sm md:text-lg flex items-start justify-center gap-3 px-2">
              <X className="w-4 md:w-5 h-4 md:h-5 text-red flex-shrink-0 mt-0.5" />
              <span>Sabemos que depois de ver os resultados, você vai querer mais</span>
            </p>
          </div>
          
          <Card className="p-6 md:p-8 bg-red/10 border-red">
            <h3 className="text-lg md:text-2xl font-bold text-red mb-3 md:mb-4 px-2">Quando identificamos 500 clínicas usando nossas estratégias:</h3>
            <p className="text-sm md:text-lg text-text-secondary mb-3 md:mb-4 px-2">
              Focamos apenas em clientes enterprise (R$ 10mil+/mês)<br className="hidden sm:block" />
              <span className="block sm:inline">Essa oferta sai do ar permanentemente</span>
            </p>
            <div className="bg-navy-dark p-3 md:p-4 rounded-lg">
              <p className="text-sm md:text-base text-orange font-bold">Progresso atual: 347/500 (restam 153 vagas)</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Offer Section */}
      <section className="container mx-auto px-4 py-10 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-6 md:p-12 bg-gradient-cta border-orange shadow-glow">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-navy-dark mb-6 md:mb-8 px-2">
              De <span className="line-through text-red">R$ 3.300</span> por apenas <span className="text-navy-dark">R$ 27</span>
            </h2>
            <p className="text-lg md:text-xl text-navy-dark mb-6 md:mb-8">(Desconto de 99% - Por tempo limitado)</p>
            
            <div className="bg-navy-dark p-4 md:p-8 rounded-xl mb-6 md:mb-8">
              <h3 className="text-lg md:text-2xl font-bold text-text-primary mb-4 md:mb-6">O que está incluído:</h3>
              <div className="space-y-2 md:space-y-3 text-left">
                <div className="flex justify-between items-start gap-3">
                  <span className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
                    <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Call de Diagnóstico Completo (60 min)</span>
                  </span>
                  <span className="text-orange font-bold text-sm md:text-base flex-shrink-0">R$ 2.500</span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
                    <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Implementação do Agente de IA</span>
                  </span>
                  <span className="text-orange font-bold text-sm md:text-base flex-shrink-0">R$ 2.500</span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
                    <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Relatório Personalizado</span>
                  </span>
                  <span className="text-orange font-bold text-sm md:text-base flex-shrink-0">R$ 800</span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
                    <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">30 dias de suporte</span>
                  </span>
                  <span className="text-orange font-bold text-sm md:text-base flex-shrink-0">R$ 500</span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
                    <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Bônus exclusivos</span>
                  </span>
                  <span className="text-orange font-bold text-sm md:text-base flex-shrink-0">R$ 1.200</span>
                </div>
                <Separator className="my-3 md:my-4" />
                <div className="flex justify-between items-center text-lg md:text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-orange">R$ 7.500</span>
                </div>
                <div className="flex justify-between items-center text-xl md:text-3xl font-bold">
                  <span>Seu investimento hoje:</span>
                  <span className="text-green">R$ 27</span>
                </div>
              </div>
            </div>
            
            <Button variant="cta" size="xl" className="mb-4 md:mb-6 w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
                SIM, QUERO MINHA ANÁLISE POR R$ 27
              </a>
            </Button>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-navy-dark">
              <span className="flex items-center gap-2 text-sm md:text-base">
                <Check className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span>Agendamento imediato</span>
              </span>
              <span className="flex items-center gap-2 text-sm md:text-base">
                <Check className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span>Garantia de 7 dias</span>
              </span>
              <span className="flex items-center gap-2 text-sm md:text-base">
                <Check className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span>Implementação incluída</span>
              </span>
            </div>
          </Card>
        </div>
      </section>

      {/* Guarantee */}
      <section className="container mx-auto px-4 py-10 md:py-20 bg-navy-medium">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-6 md:p-8 bg-green/10 border-green">
            <Shield className="w-12 md:w-16 h-12 md:h-16 text-green mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green mb-4 md:mb-6 px-2">🛡️ Garantia de Satisfação Total - 7 Dias</h2>
            <p className="text-lg md:text-xl text-text-primary mb-3 md:mb-4 px-2">
              Se você não ficar convencido de que nossa análise vale pelo menos 100x o que você pagou, 
              devolvemos seus R$ 27. Sem perguntas, sem burocracia.
            </p>
            <p className="text-xl md:text-2xl font-bold text-green">Risco zero. Tudo a ganhar.</p>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-10 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: "Pagaria R$ 5.000 só pela call. O Agente de IA está convertendo leads que eu jamais conseguiria.",
                author: "Dr. Fernando K., Harmonização Facial"
              },
              {
                text: "Em 60 minutos identifiquei onde estava perdendo R$ 3.000/mês. A IA já se pagou 20x.",
                author: "Dra. Carla M., Estética Avançada"
              },
              {
                text: "Melhor investimento que fiz em 2024. CAC caiu de R$ 280 para R$ 95.",
                author: "Dra. Paula R., Depilação a Laser"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-4 md:p-6 bg-navy-medium border-green">
                <div className="flex justify-center gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-base md:text-lg italic text-text-primary mb-3 md:mb-4">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-sm md:text-base text-text-secondary">- {testimonial.author}</cite>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-10 md:py-20 bg-navy-medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 px-2">
            PERGUNTAS <span className="text-orange">FREQUENTES</span>
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            {[
              {
                q: "A call é realmente personalizada para minha clínica?",
                a: "Sim. Analisamos suas campanhas específicas, seu público, seus procedimentos e criamos um plano sob medida."
              },
              {
                q: "O Agente de IA funciona para qualquer procedimento?",
                a: "Sim. Já implementamos para harmonização, preenchimento, botox, lipo, procedimentos íntimos, depilação a laser. Personalizamos para seu negócio."
              },
              {
                q: "Quanto tempo para ver resultados?",
                a: "A IA começa a funcionar imediatamente. Resultados nas campanhas entre 15-30 dias seguindo nossas recomendações."
              },
              {
                q: "E se eu já tenho agência de tráfego?",
                a: "Perfeito. Usamos nossa análise para otimizar o trabalho deles. Muitas vezes o problema não é a agência, mas a estratégia."
              },
              {
                q: "Por que tão barato?",
                a: "Queremos provar nosso valor. Sabemos que após ver os resultados, você vai querer implementar nossa metodologia completa."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-4 md:p-6 bg-navy-dark border-card-border">
                <h3 className="text-lg md:text-xl font-bold text-orange mb-2 md:mb-3">{faq.q}</h3>
                <p className="text-sm md:text-base text-text-secondary">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="container mx-auto px-4 py-10 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-6 md:p-8 bg-red/10 border-red">
            <Clock className="w-12 md:w-16 h-12 md:h-16 text-red mx-auto mb-4 md:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red mb-4 md:mb-6 px-2">⏰ ATENÇÃO: Apenas 153 vagas restantes</h2>
            <p className="text-lg md:text-xl text-text-primary mb-3 md:mb-4 px-2">
              Quando chegamos a 500 clínicas atendidas, essa oferta sai do ar permanentemente.
            </p>
            <p className="text-lg md:text-xl font-bold text-orange px-2">
              Cada dia que você adia é dinheiro desperdiçado em campanhas quebradas.
            </p>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-10 md:py-20 bg-navy-medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 px-2">
            Pare de Queimar Dinheiro. Descubra <span className="text-orange">EXATAMENTE</span> onde está o problema.
          </h2>
          
          <Card className="p-6 md:p-8 bg-navy-dark border-orange mb-6 md:mb-8">
            <p className="text-lg md:text-xl text-text-primary mb-4 md:mb-6 px-2">Por apenas R$ 27 você terá:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Diagnóstico completo das suas campanhas</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Agente de IA implementado e funcionando</span>
                </li>
              </ul>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>Plano personalizado para sua clínica</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                  <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0 mt-0.5" />
                  <span>30 dias de suporte para implementação</span>
                </li>
              </ul>
            </div>
          </Card>
          
          <p className="text-xl md:text-2xl font-bold text-text-primary mb-6 md:mb-8 px-2">
            Sua concorrência já está otimizando. E você?
          </p>
          
          <Button variant="cta" size="xl" className="mb-6 md:mb-8 w-full sm:w-auto text-sm sm:text-base" asChild>
            <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
              QUERO MINHA ANÁLISE POR R$ 27 AGORA
            </a>
          </Button>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-text-secondary">
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
              <span>Agendamento imediato após pagamento</span>
            </span>
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
              <span>Garantia incondicional de 7 dias</span>
            </span>
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
              <span>Implementação da IA incluída</span>
            </span>
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Check className="w-4 md:w-5 h-4 md:h-5 text-green flex-shrink-0" />
              <span>Suporte por 30 dias</span>
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 md:py-8 text-center border-t border-card-border">
        <p className="text-sm md:text-base text-text-muted px-2">
          © 2024 Lorenzo Media. Todos os direitos reservados. | Especialistas em Tráfego para Clínicas de Estética
        </p>
      </footer>
    </div>
  );
};

export default LorenzoLandingPage;