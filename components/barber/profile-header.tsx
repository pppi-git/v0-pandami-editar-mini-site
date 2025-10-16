import { Clock, MapPin, Star, ExternalLink } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function ProfileHeader() {
  return (
    <header className="bg-[#171717] px-6 pt-8 pb-6">
      <div className="flex flex-col items-center text-center">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src="/barber-logo.jpg" alt="Carlos Silva" />
          <AvatarFallback className="bg-[#d1d5dc] text-[#0f0f0f]">CS</AvatarFallback>
        </Avatar>

        <h1 className="text-xl font-semibold mb-1">Carlos Silva</h1>

        <div className="flex items-center gap-1 mb-3">
          <span className="text-sm text-[#d1d5dc]">Profissional Verificado</span>
          <Badge className="bg-[#16a34a] hover:bg-[#16a34a] w-4 h-4 p-0 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Badge>
        </div>

        <p className="text-sm text-[#a3a3a3] mb-4 leading-relaxed">
          Barbeiro profissional há 15 anos.
          <br />
          Especializado em cortes masculinos
          <br />
          modernos, degradês e cuidados com barba.
        </p>

        <div className="flex items-center gap-1 mb-4" role="img" aria-label="4.9 estrelas de 5, 120+ avaliações">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#e75e3d] text-[#e75e3d]" />
          ))}
          <span className="text-sm text-[#d1d5dc] ml-1">4.9 • 120+ avaliações</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#d1d5dc] mb-2">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <time>Seg-Sex: 9h-18h • Sáb: 8h-17h</time>
        </div>

        <address className="flex items-center gap-2 text-sm text-[#d1d5dc] mb-6 not-italic">
          <MapPin className="w-4 h-4" aria-hidden="true" />
          <span>Rodovia Gonzaga | Florianópolis SC</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </address>
      </div>
    </header>
  )
}
