"use client"

import { ServiceCard } from "./service-card"
import { AddServiceModal } from "./add-service-modal"
import { PaymentMethods } from "./payment-methods"
import { GallerySection } from "./gallery-section"
import { useState } from "react"

export function ServicesTab() {
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false)

  const services = Array(5).fill({
    name: "Corte e Barba",
    description: "Serviço oferece qualquer corte de cabelo exceto o navalhado...",
    price: "R$120,00",
    duration: "1h",
  })

  return (
    <div role="tabpanel" id="servicos-panel" aria-labelledby="servicos-tab">
      <section className="px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Serviços</h2>

        <div className="space-y-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <AddServiceModal open={isAddServiceOpen} onOpenChange={setIsAddServiceOpen} />
      </section>

      <PaymentMethods />
      <GallerySection />
    </div>
  )
}
