"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PremiumHeading } from "@/components/ui/premium-heading"
import { PremiumButton } from "@/components/ui/premium-button"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

interface ChatDialogProps {
  isOpen: boolean
  onClose: () => void
  onRedirect: () => void
  demoUrl: string
}

export default function ChatDialog({ isOpen, onClose, onRedirect, demoUrl }: ChatDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-[500px] bg-dark-950 border border-gold-500/30 text-white p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-center">
            <PremiumHeading as="h3" size="md" className="text-xl md:text-2xl">
              Quer experimentar a SOPHIA na sua clínica?
            </PremiumHeading>
          </DialogTitle>
          <DialogDescription className="text-center text-white/70 text-sm md:text-base">
            Agende uma demonstração exclusiva e descubra como a SOPHIA pode transformar o atendimento da sua clínica.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 text-center">
          <p className="text-white mb-4">
            Esta é apenas uma demonstração. Para ver a SOPHIA em ação com os dados da sua clínica, agende uma
            demonstração personalizada agora.
          </p>
        </div>

        <DialogFooter className="flex flex-col gap-4">
          <PremiumButton variant="gold" size="lg" onClick={onRedirect} className="w-full">
            <Zap className="mr-2 h-4 w-4" />
            AGENDAR DEMONSTRAÇÃO VIP
          </PremiumButton>

          <Button
            variant="outline"
            onClick={onClose}
            className="w-full border-gold-500/30 text-white/70 hover:text-white"
          >
            Continuar explorando a demo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
