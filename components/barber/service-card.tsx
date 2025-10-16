import { Clock, Edit2, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ServiceCardProps {
  name: string
  description: string
  price: string
  duration: string
}

export function ServiceCard({ name, description, price, duration }: ServiceCardProps) {
  return (
    <Card className="bg-[#ffffff] border-0 rounded-xl p-4" role="article">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-[#0f0f0f]">{name}</h3>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors" aria-label={`Editar ${name}`}>
            <Edit2 className="w-4 h-4 text-[#737373]" aria-hidden="true" />
          </button>
          <button className="p-2 hover:bg-[#fee2e2] rounded-lg transition-colors" aria-label={`Excluir ${name}`}>
            <Trash2 className="w-4 h-4 text-[#dc2626]" aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="text-sm text-[#737373] mb-3 leading-relaxed">{description}</p>

      <div className="flex items-center justify-between">
        <span className="text-[#16a34a] font-semibold">{price}</span>
        <div className="flex items-center gap-1 text-sm text-[#737373]">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <time>{duration}</time>
        </div>
      </div>
    </Card>
  )
}
