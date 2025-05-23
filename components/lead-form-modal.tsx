"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PremiumHeading } from "@/components/ui/premium-heading"
import { Check } from "lucide-react"

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
  buttonText?: string
}

export function LeadFormModal({ isOpen, onClose, buttonText = "GARANTIR MINHA VAGA AGORA" }: LeadFormModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    clinica: "",
    faturamento: "",
    desafio: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aqui você implementaria a lógica para enviar os dados para seu backend
      // Por exemplo: await fetch('/api/leads', { method: 'POST', body: JSON.stringify(formData) })

      // Simulando um delay de envio
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSuccess(true)
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          nome: "",
          whatsapp: "",
          clinica: "",
          faturamento: "",
          desafio: "",
        })
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-[500px] bg-dark-950 border border-gold-500/30 text-white p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-center">
            <PremiumHeading as="h3" size="md" className="text-xl md:text-2xl">
              Solicite sua demonstração VIP + diagnóstico gratuito
            </PremiumHeading>
          </DialogTitle>
          <DialogDescription className="text-center text-white/70 text-sm md:text-base">
            Preencha o formulário abaixo para garantir sua vaga e receber uma análise personalizada para sua clínica.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-6 w-6 md:h-8 md:w-8 text-gold-400" />
            </div>
            <h3 className="text-base md:text-lg font-medium text-white">Solicitação enviada com sucesso!</h3>
            <p className="mt-2 text-xs md:text-sm text-white/70">
              Nossa equipe entrará em contato em breve para agendar sua demonstração exclusiva.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-white text-sm">
                Nome completo
              </Label>
              <Input
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="bg-dark-900 border-gold-500/30 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-white text-sm">
                WhatsApp (com DDD)
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
                className="bg-dark-900 border-gold-500/30 text-white"
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clinica" className="text-white text-sm">
                Nome da clínica
              </Label>
              <Input
                id="clinica"
                name="clinica"
                value={formData.clinica}
                onChange={handleChange}
                placeholder="Nome da sua clínica"
                required
                className="bg-dark-900 border-gold-500/30 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="faturamento" className="text-white text-sm">
                Faturamento mensal aproximado
              </Label>
              <Select onValueChange={(value) => handleSelectChange("faturamento", value)} required>
                <SelectTrigger className="bg-dark-900 border-gold-500/30 text-white">
                  <SelectValue placeholder="Selecione uma faixa" />
                </SelectTrigger>
                <SelectContent className="bg-dark-900 border-gold-500/30 text-white">
                  <SelectItem value="ate-20k">Até R$ 20.000</SelectItem>
                  <SelectItem value="20k-50k">R$ 20.000 a R$ 50.000</SelectItem>
                  <SelectItem value="50k-100k">R$ 50.000 a R$ 100.000</SelectItem>
                  <SelectItem value="acima-100k">Acima de R$ 100.000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="desafio" className="text-white text-sm">
                Principal desafio no atendimento atual
              </Label>
              <Textarea
                id="desafio"
                name="desafio"
                value={formData.desafio}
                onChange={handleChange}
                placeholder="Descreva brevemente seu principal desafio"
                className="min-h-[80px] bg-dark-900 border-gold-500/30 text-white"
                required
              />
            </div>
            <div className="bg-gold-950/20 border border-gold-500/30 rounded p-3 text-center">
              <p className="text-xs md:text-sm text-gold-400">
                ⏱️ Apenas 3 vagas disponíveis para demonstração esta semana
              </p>
            </div>
            <DialogFooter className="pt-4">
              <Button
                type="submit"
                className="w-full bg-gold-gradient hover:bg-gold-400 text-dark-950 font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : `⚡ ${buttonText}`}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
