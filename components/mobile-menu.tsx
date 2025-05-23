"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PremiumButton } from "@/components/ui/premium-button"

interface MobileMenuProps {
  onOpenModal: () => void
}

export function MobileMenu({ onOpenModal }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-white hover:bg-dark-800 hover:text-gold-400"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-dark-950/95 backdrop-blur-md border-b border-white/10 z-50">
          <div className="container py-6 flex flex-col gap-6">
            <a
              href="#problemas"
              className="text-lg font-medium text-white/70 hover:text-gold-400 transition-colors py-2"
              onClick={closeMenu}
            >
              Problemas
            </a>
            <a
              href="#solucao"
              className="text-lg font-medium text-white/70 hover:text-gold-400 transition-colors py-2"
              onClick={closeMenu}
            >
              Solução
            </a>
            <a
              href="#resultados"
              className="text-lg font-medium text-white/70 hover:text-gold-400 transition-colors py-2"
              onClick={closeMenu}
            >
              Resultados
            </a>
            <a
              href="#oferta"
              className="text-lg font-medium text-white/70 hover:text-gold-400 transition-colors py-2"
              onClick={closeMenu}
            >
              Oferta
            </a>
            <PremiumButton
              variant="gold"
              onClick={() => {
                onOpenModal()
                closeMenu()
              }}
              className="w-full"
            >
              Agendar Demonstração
            </PremiumButton>
          </div>
        </div>
      )}
    </div>
  )
}
