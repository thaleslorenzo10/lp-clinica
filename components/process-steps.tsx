import { PremiumCard } from "@/components/ui/premium-card"

export function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Análise completa do seu processo atual de atendimento e identificação de oportunidades.",
    },
    {
      number: "02",
      title: "Configuração",
      description: "Personalização da SOPHIA com o tom de voz, protocolos e serviços específicos da sua clínica.",
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
  ]

  return (
    <div className="relative">
      {/* Linha conectora - visível apenas em desktop */}
      <div className="absolute top-24 left-[50%] w-0.5 h-[calc(100%-6rem)] bg-gold-500/20 hidden md:block"></div>

      {/* Linha conectora - visível apenas em mobile */}
      <div className="absolute top-0 left-6 w-0.5 h-full bg-gold-500/20 md:hidden"></div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <div key={index} className={`${index % 2 !== 0 ? "md:mt-24" : ""} relative`}>
            <PremiumCard variant="glass" className="p-4 md:p-6 ml-12 md:ml-0">
              <div className="flex flex-col items-start md:items-center text-left md:text-center">
                <div className="absolute -left-6 md:static w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-gradient text-dark-950 flex items-center justify-center text-lg md:text-xl font-bold mb-0 md:mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-white">{step.title}</h3>
                <p className="text-sm md:text-base text-white/70">{step.description}</p>
              </div>
            </PremiumCard>
          </div>
        ))}
      </div>
    </div>
  )
}
