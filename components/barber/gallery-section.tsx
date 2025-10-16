import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const galleryImages = [
    { src: "/barber-shop-interior.jpg", alt: "Interior da barbearia" },
    { src: "/barber-cutting-hair.png", alt: "Barbeiro cortando cabelo" },
    { src: "/barber-shop-logo.png", alt: "Logo da barbearia" },
    { src: "/professional-haircut.png", alt: "Corte profissional" },
  ]

  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Conheça meu trabalho</h2>

      <div className="grid grid-cols-2 gap-3 mb-4" role="list">
        {galleryImages.map((image, index) => (
          <figure
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden bg-[#262626]"
            role="listitem"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(image.alt)}`
              }}
            />
            <button
              className="absolute top-2 right-2 w-7 h-7 bg-[#0f0f0f]/80 hover:bg-[#0f0f0f] rounded-full flex items-center justify-center transition-colors"
              aria-label={`Remover foto ${index + 1}`}
            >
              <X className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
          </figure>
        ))}
      </div>

      <Button className="w-full bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg py-6">
        <Plus className="w-5 h-5 mr-2" aria-hidden="true" />
        Adicionar nova foto
      </Button>
    </section>
  )
}
