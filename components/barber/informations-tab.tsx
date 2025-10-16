import { Edit2, ExternalLink, Plus, Globe } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function InformationsTab() {
  const businessHours = [
    { day: "Segunda-feira", hours: "08:00 - 19:00", isToday: true },
    { day: "Terça-feira", hours: "08:00 - 19:00" },
    { day: "Quarta-feira", hours: "08:00 - 19:00" },
    { day: "Quinta-feira", hours: "08:00 - 19:00" },
    { day: "Sexta-feira", hours: "08:00 - 19:00" },
    { day: "Sábado", hours: "08:00 - 19:00" },
    { day: "Domingo", hours: "Fechado", isClosed: true },
  ]

  const socialMedia = [
    { name: "Instagram", handle: "@carlos_barber", color: "#e75e3d" },
    { name: "LinkedIn", handle: "@carlos_barber", color: "#0077b5" },
    { name: "TikTok", handle: "@carlos_barber", color: "#0f0f0f" },
  ]

  const customLinks = ["Minha mentoria", "Meus cursos", "Meus produtos"]

  return (
    <div role="tabpanel" id="informacoes-panel" aria-labelledby="informacoes-tab" className="px-4 py-6 space-y-6">
      {/* Location Section */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Localização</h2>
          <button aria-label="Editar localização">
            <Edit2 className="w-4 h-4 text-[#737373]" aria-hidden="true" />
          </button>
        </div>
        <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
          <address className="text-sm text-[#0f0f0f] not-italic">
            Rodovia Gonzaga , 002 - 88034-100
            <br />
            Coqueiros - Florianópolis/SC
          </address>
        </Card>
      </section>

      {/* Business Hours Section */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Horários de atendimento</h2>
          <button aria-label="Editar horários">
            <Edit2 className="w-4 h-4 text-[#737373]" aria-hidden="true" />
          </button>
        </div>
        <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
          <dl className="space-y-3">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <dt className="text-[#0f0f0f] font-medium">{schedule.day}</dt>
                  {schedule.isToday && (
                    <Badge className="bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7] text-xs px-2 py-0">Hoje</Badge>
                  )}
                </div>
                <dd className={schedule.isClosed ? "text-[#737373]" : "text-[#0f0f0f]"}>
                  <time>{schedule.hours}</time>
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </section>

      {/* Social Media Section */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Redes sociais</h2>
          <button aria-label="Editar redes sociais">
            <Edit2 className="w-4 h-4 text-[#737373]" aria-hidden="true" />
          </button>
        </div>
        <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
          <ul className="space-y-3 mb-4">
            {socialMedia.map((social, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {social.name === "Instagram" && (
                      <svg className="w-5 h-5" style={{ color: social.color }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {social.name === "LinkedIn" && (
                      <svg className="w-5 h-5" style={{ color: social.color }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {social.name === "TikTok" && (
                      <svg className="w-5 h-5" style={{ color: social.color }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0f0f0f]">{social.name}</p>
                    <p className="text-xs text-[#737373]">{social.handle}</p>
                  </div>
                </div>
                <a href="#" aria-label={`Visitar ${social.name}`}>
                  <ExternalLink className="w-4 h-4 text-[#737373]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-full bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg h-12">
            <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
            Adicionar nova rede social
          </Button>
        </Card>
      </section>

      {/* Custom Links Section */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Meus links</h2>
          <button aria-label="Editar links">
            <Edit2 className="w-4 h-4 text-[#737373]" aria-hidden="true" />
          </button>
        </div>
        <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
          <ul className="space-y-3 mb-4">
            {customLinks.map((link, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Globe className="w-5 h-5 text-[#e75e3d]" />
                  </div>
                  <span className="text-sm font-medium text-[#0f0f0f]">{link}</span>
                </div>
                <a href="#" aria-label={`Visitar ${link}`}>
                  <ExternalLink className="w-4 h-4 text-[#737373]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-full bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg h-12">
            <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
            Adicionar novo link
          </Button>
        </Card>
      </section>
    </div>
  )
}
