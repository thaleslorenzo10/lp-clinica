import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LorenzoLandingPageV2 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="destructive" className="mb-6 text-lg px-6 py-2">
            🚨 DONOS DE CLÍNICAS QUE GASTAM R$ 5MIL+ EM TRÁFEGO MAS RECEBEM APENAS LEADS DESQUALIFICADOS
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            SUA CLÍNICA ESTÁ ATRAINDO OS 
            <span className="text-primary"> CLIENTES ERRADOS?</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
            <strong>Descubra por que 8 em cada 10 leads que chegam no seu WhatsApp são "pescadores de preço" 
            e como transformar isso em uma máquina de clientes premium por apenas R$ 27</strong>
          </p>
          
          <Button size="lg" className="text-xl px-12 py-6 hover:scale-105 transition-transform" asChild>
            <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
              QUERO ATRAIR CLIENTES DE VERDADE
            </a>
          </Button>
        </div>
      </section>

      {/* Identificação da Dor */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A Verdade Que Ninguém Te Conta Sobre Leads de Estética
            </h2>
            <p className="text-2xl font-semibold text-primary">Você já passou por isso?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-3xl mb-4">😤</div>
                <h3 className="font-bold text-lg mb-3">WhatsApp lotado de gente perguntando "quanto custa?" e sumindo</h3>
                <p className="text-muted-foreground">90% dos leads querem apenas pesquisar preço, não agendar</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-3xl mb-4">💸</div>
                <h3 className="font-bold text-lg mb-3">Gastando uma fortuna para atrair "curiosos"</h3>
                <p className="text-muted-foreground">R$ 15, R$ 25, até R$ 50 por lead... que não compra nada</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-3xl mb-4">🎣</div>
                <h3 className="font-bold text-lg mb-3">Leads "pescadores" que visitam 10 clínicas</h3>
                <p className="text-muted-foreground">Sempre escolhem a mais barata (e não é você)</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="font-bold text-lg mb-3">Sua equipe perdendo tempo com atendimentos inúteis</h3>
                <p className="text-muted-foreground">4, 6, 8 horas por dia respondendo quem não vai fechar</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="font-bold text-lg mb-3">Mesmo problema todo mês: muito lead, pouca venda</h3>
                <p className="text-muted-foreground">Quantidade alta, qualidade péssima</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-3xl mb-4">😡</div>
                <h3 className="font-bold text-lg mb-3">Agência/gestor culpa "o mercado" ou pede mais verba</h3>
                <p className="text-muted-foreground">"Precisa de mais volume para converter" - já ouviu isso?</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-destructive/10 border-destructive/20 p-8 text-center">
            <CardContent className="p-0">
              <p className="text-xl font-bold mb-4">A realidade cruel: Você está pagando caro para atrair o público ERRADO.</p>
              <blockquote className="text-2xl font-semibold text-primary">
                O problema não é a falta de leads. É o TIPO de lead que você está atraindo.
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Autoridade */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 text-lg px-6 py-2">O ESPECIALISTA EM LEADS QUALIFICADOS</Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lorenzo Silva - O homem que transformou "pescadores de preço" em clientes premium
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold mb-2">47 clínicas convertendo 73% dos leads</h3>
                <p className="text-sm text-muted-foreground">De "curiosos" para clientes que fecham na primeira conversa</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-bold mb-2">Ticket médio aumentou 340% em média</h3>
                <p className="text-sm text-muted-foreground">Atraindo clientes que valorizam qualidade, não preço</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-bold mb-2">IA que filtra leads ruins antes de chegar no WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Apenas leads qualificados chegam até sua equipe</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-bold mb-2">Metodologia "Lead Premium"</h3>
                <p className="text-sm text-muted-foreground">Sistema que atrai quem TEM dinheiro e QUER gastar na sua clínica</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20 p-6">
            <CardContent className="p-0">
              <div className="flex justify-center mb-3">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-lg italic mb-4">
                "Antes: 100 leads, 3 vendas. Depois: 30 leads, 22 vendas. A diferença é BRUTAL."
              </p>
              <p className="font-semibold">- Dra. Marina S., Harmonização Premium</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Impactante */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              CASE: De 150 "Pescadores" para 35 Clientes Premium
            </h2>
            <p className="text-xl"><strong>Cliente:</strong> Clínica de Harmonização Facial - São Paulo</p>
            <p className="text-xl text-destructive"><strong>Problema:</strong> Leads baratos que nunca fechavam</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-destructive/10 border-destructive/20 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-center">ANTES (Estratégia de Volume):</h3>
                <div className="space-y-3">
                  <div className="flex items-center">❌ <span className="ml-2"><strong>150 leads/mês a R$ 12 cada</strong></span></div>
                  <div className="flex items-center">❌ <span className="ml-2"><strong>Conversão: 2% (3 clientes/mês)</strong></span></div>
                  <div className="flex items-center">❌ <span className="ml-2"><strong>Ticket médio: R$ 800</strong></span></div>
                  <div className="flex items-center">❌ <span className="ml-2"><strong>Faturamento: R$ 2.400/mês</strong></span></div>
                  <div className="flex items-center">❌ <span className="ml-2"><strong>CAC Real: R$ 600 por cliente</strong></span></div>
                  <div className="flex items-center">❌ <span className="ml-2"><strong>Equipe: Estressada e desmotivada</strong></span></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 p-8 dark:bg-green-950/20 dark:border-green-800">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-center">DEPOIS (Estratégia Lead Premium):</h3>
                <div className="space-y-3">
                  <div className="flex items-center">✅ <span className="ml-2"><strong>35 leads/mês a R$ 45 cada</strong></span></div>
                  <div className="flex items-center">✅ <span className="ml-2"><strong>Conversão: 74% (26 clientes/mês)</strong></span></div>
                  <div className="flex items-center">✅ <span className="ml-2"><strong>Ticket médio: R$ 2.200</strong></span></div>
                  <div className="flex items-center">✅ <span className="ml-2"><strong>Faturamento: R$ 57.200/mês</strong></span></div>
                  <div className="flex items-center">✅ <span className="ml-2"><strong>CAC Real: R$ 60 por cliente</strong></span></div>
                  <div className="flex items-center">✅ <span className="ml-2"><strong>Equipe: Motivada e produtiva</strong></span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20 p-6">
            <CardContent className="p-0 text-center">
              <p className="text-lg italic mb-4">
                "Parei de competir por preço. Agora atraio clientes que QUEREM qualidade e pagam por isso."
              </p>
              <p className="font-semibold">- Dr. Ricardo M.</p>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" className="text-xl px-12 py-6 hover:scale-105 transition-transform" asChild>
              <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
                QUERO CLIENTES ASSIM NA MINHA CLÍNICA →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 5 Erros */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Os 5 ERROS que fazem você atrair apenas "pescadores de preço"
          </h2>

          <div className="space-y-8">
            <Card className="p-8 border-destructive/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-destructive">❌ ERRO #1: Anúncio "Genérico de Beleza"</h3>
                <p className="text-lg mb-2 italic">"Harmonização facial - Agende sua avaliação"</p>
                <p className="font-semibold text-destructive">RESULTADO: Atrai todo mundo, inclusive quem não tem dinheiro</p>
              </CardContent>
            </Card>

            <Card className="p-8 border-destructive/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-destructive">❌ ERRO #2: Foco no Preço nos Anúncios</h3>
                <p className="text-lg mb-2 italic">"Promoção botox R$ 300" ou "Parcelamos em 12x"</p>
                <p className="font-semibold text-destructive">RESULTADO: Só vem quem busca o mais barato</p>
              </CardContent>
            </Card>

            <Card className="p-8 border-destructive/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-destructive">❌ ERRO #3: Público Muito Amplo</h3>
                <p className="text-lg mb-2 italic">"Mulheres 25-55 interessadas em estética"</p>
                <p className="font-semibold text-destructive">RESULTADO: Inclui estudantes, desempregadas, curiosas</p>
              </CardContent>
            </Card>

            <Card className="p-8 border-destructive/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-destructive">❌ ERRO #4: Zero Qualificação no Anúncio</h3>
                <p className="text-lg mb-2 italic">Qualquer um pode clicar e virar lead</p>
                <p className="font-semibold text-destructive">RESULTADO: 90% são pescadores de preço</p>
              </CardContent>
            </Card>

            <Card className="p-8 border-destructive/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-destructive">❌ ERRO #5: Landing Page "Facilita Demais"</h3>
                <p className="text-lg mb-2 italic">Só pede nome e telefone</p>
                <p className="font-semibold text-destructive">RESULTADO: Gente sem interesse real se cadastra</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-destructive/10 border-destructive/20 p-8 text-center">
            <CardContent className="p-0">
              <p className="text-2xl font-bold text-destructive">
                Cada erro desses está DESTRUINDO a qualidade dos seus leads.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* A Solução */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Como Atrair Apenas Clientes que TÊM Dinheiro e QUEREM Gastar
            </h2>
            <Badge className="text-xl px-8 py-3">🎯 METODOLOGIA "LEAD PREMIUM"</Badge>
          </div>

          <p className="text-2xl font-bold text-center mb-12">
            O que você recebe na nossa Call de Diagnóstico:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">ANÁLISE COMPLETA DOS SEUS ANÚNCIOS (60 minutos)</h3>
                <div className="space-y-2">
                  <div className="flex items-center">✅ <span className="ml-2">Por que seus anúncios atraem "pescadores"</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Como reposicionar para atrair clientes premium</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Palavras que FILTRAM automaticamente leads ruins</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Estratégia de público que elimina curiosos</span></div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">IMPLEMENTAÇÃO DO FILTRO DE IA (Valor: R$ 3.500)</h3>
                <div className="space-y-2">
                  <div className="flex items-center">✅ <span className="ml-2">IA que qualifica leads ANTES de chegar no WhatsApp</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Apenas clientes com perfil comprador chegam até você</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Sistema funciona 24h filtrando automaticamente</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Redução de 85% em leads desqualificados</span></div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">SCRIPTS "ANTI-PESCADOR" (Valor: R$ 1.200)</h3>
                <div className="space-y-2">
                  <div className="flex items-center">✅ <span className="ml-2">Como identificar pescador de preço em 2 perguntas</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Scripts que fazem curiosos desistirem sozinhos</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Abordagem que faz cliente premium se interessar mais</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Técnicas para aumentar ticket médio na conversa</span></div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">PLANO PERSONALIZADO (Valor: R$ 2.000)</h3>
                <div className="space-y-2">
                  <div className="flex items-center">✅ <span className="ml-2">Estratégia específica para seus procedimentos</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Cronograma de implementação para 60 dias</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Métricas para acompanhar melhoria na qualidade</span></div>
                  <div className="flex items-center">✅ <span className="ml-2">Ajustes personalizados para sua região/público</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformação Esperada */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            O Que Acontece Quando Você Para de Atrair "Pescadores"
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">✅ LEADS DE QUALIDADE</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 70% menos leads, mas 400% mais conversões</li>
                  <li>• Clientes que já chegam interessados em QUALIDADE</li>
                  <li>• Fim das perguntas "quanto custa?" sem contexto</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">✅ EQUIPE MOTIVADA</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Atendimentos produtivos e prazerosos</li>
                  <li>• Tempo focado em quem realmente vai comprar</li>
                  <li>• Equipe confiante para apresentar preços justos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">✅ TICKET MÉDIO MAIOR</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Clientes que valorizam procedimentos premium</li>
                  <li>• Interesse em pacotes e tratamentos completos</li>
                  <li>• Disposição para investir na melhor qualidade</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">✅ CONCORRÊNCIA POR QUALIDADE</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Pare de competir por preço</li>
                  <li>• Posicione-se como referência premium</li>
                  <li>• Clientes escolhem você pela excelência</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oferta Irresistível */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transforme Pescadores em Clientes Premium por apenas R$ 27
          </h2>
          
          <p className="text-xl mb-8">
            Normalmente cobramos R$ 4.500 por essa análise completa + implementação da IA.
          </p>
          
          <p className="text-2xl font-bold mb-12 text-primary">Mas por tempo limitado:</p>

          <Card className="p-8 mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-3xl font-bold mb-8">PACOTE COMPLETO - R$ 27</h3>
              
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex justify-between items-center">
                  <span>🔍 <strong>Call de Diagnóstico Premium (60 min)</strong></span>
                  <span className="text-muted-foreground line-through">R$ 2.500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>🤖 <strong>Implementação Filtro de IA</strong></span>
                  <span className="text-muted-foreground line-through">R$ 3.500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>📋 <strong>Scripts Anti-Pescador</strong></span>
                  <span className="text-muted-foreground line-through">R$ 1.200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>📊 <strong>Plano Personalizado</strong></span>
                  <span className="text-muted-foreground line-through">R$ 2.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>🎁 <strong>30 dias de suporte</strong></span>
                  <span className="text-muted-foreground line-through">R$ 800</span>
                </div>
                
                <hr className="my-4" />
                
                <div className="flex justify-between items-center text-xl">
                  <span><strong>Total:</strong></span>
                  <span className="line-through text-muted-foreground">R$ 10.000</span>
                </div>
                <div className="flex justify-between items-center text-3xl font-bold text-primary">
                  <span>Seu investimento:</span>
                  <span>R$ 27</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 mb-8 bg-muted/50">
            <CardContent className="p-0">
              <h4 className="text-xl font-bold mb-4">Por que esse preço?</h4>
              <ul className="space-y-2 text-left max-w-2xl mx-auto">
                <li>• Queremos provar que nossa metodologia funciona</li>
                <li>• Estamos cansados de ver clínicas competindo por preço</li>
                <li>• Sabemos que depois dos resultados, você vai querer mais</li>
              </ul>
            </CardContent>
          </Card>

          <Button size="lg" className="text-2xl px-16 py-8 hover:scale-105 transition-transform" asChild>
            <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
              SIM, QUERO CLIENTES PREMIUM POR R$ 27
            </a>
          </Button>
        </div>
      </section>

      {/* Urgência */}
      <section className="py-16 px-4 bg-destructive/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            ⚠️ <span className="text-destructive">VAGAS LIMITADAS: 127/200</span>
          </h3>
          
          <p className="text-lg mb-6"><strong>Não podemos atender todo mundo ao mesmo tempo.</strong></p>
          
          <div className="text-left max-w-2xl mx-auto mb-8">
            <p className="mb-4">Quando fechamos 200 clínicas usando nossa metodologia:</p>
            <ul className="space-y-2">
              <li>• Preço volta para R$ 4.500</li>
              <li>• Focamos apenas em clientes enterprise</li>
              <li>• Essa oferta sai do ar permanentemente</li>
            </ul>
          </div>
          
          <p className="text-xl font-bold text-destructive">
            Cada dia que você adia é outro dia atraindo clientes errados.
          </p>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-sm italic mb-4">
                  "Conversão subiu de 4% para 68%. Agora só atendo cliente que realmente quer fazer o procedimento."
                </p>
                <p className="font-semibold text-sm">- Dra. Fernanda L., Preenchimento Labial</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-sm italic mb-4">
                  "Acabaram os 'vou pensar'. Ticket médio saiu de R$ 600 para R$ 1.800."
                </p>
                <p className="font-semibold text-sm">- Dr. Carlos R., Harmonização Facial</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  <div className="flex text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-sm italic mb-4">
                  "Minha equipe está mais feliz. Só conversa com gente séria que fecha na hora."
                </p>
                <p className="font-semibold text-sm">- Dra. Juliana K., Estética Íntima</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">FAQ ESTRATÉGICO</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-lg mb-3">E se meus leads diminuírem muito?</h3>
                <p>Sim, vão diminuir. Mas a conversão multiplica por 10. Resultado: mais clientes pagantes com menos esforço.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-lg mb-3">Funciona para procedimentos mais baratos?</h3>
                <p>Especialmente para eles. Quando você filtra, até procedimentos de R$ 200 viram R$ 500+ com clientes que valorizam qualidade.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-lg mb-3">A IA vai espantar clientes bons?</h3>
                <p>Não. Ela filtra pescadores, mas facilita para clientes sérios. É como ter um recepcionista expert.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-lg mb-3">Quanto tempo para implementar?</h3>
                <p>A IA fica pronta na própria call. Os ajustes nos anúncios, implementamos em 24-48h.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold text-lg mb-3">Funciona para clínicas pequenas?</h3>
                <p>Especialmente. Clínicas pequenas precisam MAIS de leads qualificados. Não dá para desperdiçar tempo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Card className="p-8 bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800">
            <CardContent className="p-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">🛡️ GARANTIA TOTAL - 15 DIAS</h2>
              <p className="text-lg mb-6">
                Se em 15 dias você não notar melhoria clara na qualidade dos seus leads, 
                devolvemos seus R$ 27 + pagamos R$ 50 pelo tempo perdido.
              </p>
              <p className="text-xl font-bold">Risco ZERO. Resultado GARANTIDO.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Chega de Perder Tempo com "Pescadores de Preço"
          </h2>
          
          <p className="text-xl mb-6"><strong>Imagina sua clínica recebendo apenas leads assim:</strong></p>
          
          <Card className="p-6 mb-6 bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800">
            <CardContent className="p-0">
              <p className="italic text-lg">
                "Olá, vi seu trabalho no Instagram. Quero agendar uma avaliação para harmonização. Qual a agenda disponível?"
              </p>
            </CardContent>
          </Card>
          
          <p className="text-lg mb-6"><strong>Em vez de:</strong></p>
          
          <Card className="p-6 mb-8 bg-destructive/10 border-destructive/20">
            <CardContent className="p-0">
              <p className="italic text-lg">
                "qnt custa botox? vcs parcelam? tem desconto?"
              </p>
            </CardContent>
          </Card>
          
          <p className="text-xl mb-8">
            <strong>Por apenas R$ 27 você descobre como fazer essa transformação.</strong>
          </p>
          
          <Badge variant="destructive" className="text-lg px-6 py-2 mb-8">
            ⏰ RESTAM 73 VAGAS
          </Badge>
          
          <div className="mb-8">
            <Button size="lg" className="text-2xl px-16 py-8 hover:scale-105 transition-transform" asChild>
              <a href="https://pay.hotmart.com/K100180916V" target="_blank" rel="noopener noreferrer">
                QUERO CLIENTES PREMIUM POR R$ 27
              </a>
            </Button>
          </div>
          
          <div className="text-lg space-y-2 mb-8">
            <div>✅ <strong>Agendamento imediato</strong></div>
            <div>✅ <strong>IA implementada na própria call</strong></div>
            <div>✅ <strong>15 dias de garantia total</strong></div>
            <div>✅ <strong>30 dias de suporte incluído</strong></div>
          </div>
          
          <p className="text-2xl font-bold text-primary">
            Para de competir por preço. Compita por QUALIDADE.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted text-center">
        <div className="container mx-auto">
          <p className="text-sm text-muted-foreground">
            © 2024 Lorenzo Media - Especialistas em Leads Premium para Estética
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LorenzoLandingPageV2;