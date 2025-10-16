import { Edit2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function PaymentMethods() {
  const paymentMethods = [
    {
      name: "Pix",
      icon: (
        <svg className="w-5 h-5 text-[#16a34a]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
      ),
    },
    {
      name: "Cartão de crédito",
      icon: (
        <svg className="w-5 h-5 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" />
          <path d="M2 10h20" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Dinheiro",
      icon: <span className="text-lg font-bold text-[#16a34a]">$</span>,
    },
    {
      name: "Transferência bancária",
      icon: (
        <svg className="w-5 h-5 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  return (
    <section className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Formas de Pagamento</h2>
        <button aria-label="Editar formas de pagamento">
          <Edit2 className="w-4 h-4 text-[#737373]" aria-hidden="true" />
        </button>
      </div>

      <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
        <ul className="space-y-3">
          {paymentMethods.map((method, index) => (
            <li key={index} className="flex items-center gap-3 text-[#0f0f0f]">
              <div className="w-5 h-5 flex items-center justify-center" aria-hidden="true">
                {method.icon}
              </div>
              <span className="text-sm font-medium">{method.name}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  )
}
