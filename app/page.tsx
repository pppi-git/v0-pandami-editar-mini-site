"use client"

import { Clock, MapPin, Star, Edit2, Trash2, ExternalLink, Plus, X, Eye, Globe, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function BarberProfile() {
  const [activeTab, setActiveTab] = useState<"servicos" | "informacoes" | "configuracoes">("servicos")
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false)
  const [enablePriceRange, setEnablePriceRange] = useState(false)

  const services = Array(5).fill({
    name: "Corte e Barba",
    description: "Serviço oferece qualquer corte de cabelo exceto o navalhado...",
    price: "R$120,00",
    duration: "1h",
  })

  const galleryImages = [
    "/barber-shop-interior.jpg",
    "/barber-cutting-hair.png",
    "/barber-shop-logo.png",
    "/professional-haircut.png",
  ]

  const [showPhone, setShowPhone] = useState(true)
  const [showAddress, setShowAddress] = useState(true)
  const [showLinks, setShowLinks] = useState(true)

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="max-w-md mx-auto pb-8">
        {/* Profile Header */}
        <div className="bg-[#171717] px-6 pt-8 pb-6">
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

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#e75e3d] text-[#e75e3d]" />
              ))}
              <span className="text-sm text-[#d1d5dc] ml-1">4.9 • 120+ avaliações</span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2 text-sm text-[#d1d5dc] mb-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 9h-18h • Sáb: 8h-17h</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-[#d1d5dc] mb-6">
              <MapPin className="w-4 h-4" />
              <span>Rodovia Gonzaga | Florianópolis SC</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>

            {/* Edit Profile Button */}
            <Button variant="outline" className="w-full bg-white text-[#0f0f0f] hover:bg-[#f5f5f5] border-0 rounded-lg">
              <Edit2 className="w-4 h-4 mr-2" />
              Editar perfil
            </Button>
          </div>
        </div>

        <div className="flex border-b border-[#262626] bg-[#0f0f0f]">
          <button
            onClick={() => setActiveTab("servicos")}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === "servicos" ? "border-b-2 border-white" : "text-[#737373]"
            }`}
          >
            Serviços
          </button>
          <button
            onClick={() => setActiveTab("informacoes")}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === "informacoes" ? "border-b-2 border-white" : "text-[#737373]"
            }`}
          >
            Informações
          </button>
          <button
            onClick={() => setActiveTab("configuracoes")}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === "configuracoes" ? "border-b-2 border-white" : "text-[#737373]"
            }`}
          >
            Configurações
          </button>
        </div>

        {activeTab === "servicos" && (
          <>
            {/* Services Section */}
            <div className="px-4 py-6">
              <h2 className="text-lg font-semibold mb-4">Serviços</h2>

              <div className="space-y-3">
                {services.map((service, index) => (
                  <Card key={index} className="bg-[#ffffff] border-0 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-[#0f0f0f]">{service.name}</h3>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-[#f5f5f5] rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4 text-[#737373]" />
                        </button>
                        <button className="p-2 hover:bg-[#fee2e2] rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-[#dc2626]" />
                        </button>
                      </div>
                    </div>

                    <p className="text-sm text-[#737373] mb-3 leading-relaxed">{service.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-[#16a34a] font-semibold">{service.price}</span>
                      <div className="flex items-center gap-1 text-sm text-[#737373]">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Dialog open={isAddServiceOpen} onOpenChange={setIsAddServiceOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full mt-4 bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg py-6">
                    <Plus className="w-5 h-5 mr-2" />
                    Adicionar serviço
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white text-[#0f0f0f] max-w-[90%] rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
                  <button
                    onClick={() => setIsAddServiceOpen(false)}
                    className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
                  >
                    <X className="h-6 w-6 text-[#737373]" />
                  </button>

                  <div className="flex flex-col items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#dcfce7] flex items-center justify-center">
                      <Scissors className="w-8 h-8 text-[#16a34a]" />
                    </div>

                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-left">Adicionar novo serviço</DialogTitle>
                    </DialogHeader>

                    <div className="w-full space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="service-name" className="text-base font-semibold">
                          Nome do serviço <span className="text-[#dc2626]">*</span>
                        </Label>
                        <Input
                          id="service-name"
                          placeholder="Corte, barboterapia, hidratação..."
                          className="bg-[#f5f5f5] border-0 h-12 text-base placeholder:text-[#a3a3a3]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-base font-semibold">
                          Descrição <span className="text-[#dc2626]">*</span>
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Corte completo com toalha quente..."
                          className="bg-[#f5f5f5] border-0 min-h-[100px] text-base placeholder:text-[#a3a3a3] resize-none"
                        />
                      </div>

                      <div className="flex items-center justify-between py-2">
                        <Label htmlFor="price-range" className="text-base font-semibold">
                          Habilitar faixa de preço?
                        </Label>
                        <Switch
                          id="price-range"
                          checked={enablePriceRange}
                          onCheckedChange={setEnablePriceRange}
                          className="data-[state=checked]:bg-[#16a34a]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="price" className="text-base font-semibold">
                          Preço <span className="text-[#dc2626]">*</span>
                        </Label>
                        <Input
                          id="price"
                          placeholder="R$0,00"
                          className="bg-[#f5f5f5] border-0 h-12 text-base placeholder:text-[#a3a3a3]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="duration" className="text-base font-semibold">
                          Duração
                        </Label>
                        <Select defaultValue="1h">
                          <SelectTrigger className="bg-[#f5f5f5] border-0 h-12 text-base">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30min">30min</SelectItem>
                            <SelectItem value="1h">1h</SelectItem>
                            <SelectItem value="1h30">1h30</SelectItem>
                            <SelectItem value="2h">2h</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button className="w-full bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg h-14 text-base font-semibold mt-4">
                        <Plus className="w-5 h-5 mr-2" />
                        Adicionar serviço
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Payment Methods */}
            <div className="px-4 py-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Formas de Pagamento</h2>
                <Edit2 className="w-4 h-4 text-[#737373]" />
              </div>

              <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#0f0f0f]">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#16a34a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Pix</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#0f0f0f]">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" />
                        <path d="M2 10h20" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Cartão de crédito</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#0f0f0f]">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-lg font-bold text-[#16a34a]">$</span>
                    </div>
                    <span className="text-sm font-medium">Dinheiro</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#0f0f0f]">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Transferência bancária</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Gallery */}
            <div className="px-4 py-6">
              <h2 className="text-lg font-semibold mb-4">Conheça meu trabalho</h2>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-2 right-2 w-7 h-7 bg-[#0f0f0f]/80 hover:bg-[#0f0f0f] rounded-full flex items-center justify-center transition-colors">
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg py-6">
                <Plus className="w-5 h-5 mr-2" />
                Adicionar nova foto
              </Button>
            </div>
          </>
        )}

        {activeTab === "informacoes" && (
          <div className="px-4 py-6 space-y-6">
            {/* Location */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">Localização</h2>
                <Edit2 className="w-4 h-4 text-[#737373]" />
              </div>
              <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
                <p className="text-sm text-[#0f0f0f]">
                  Rodovia Gonzaga , 002 - 88034-100
                  <br />
                  Coqueiros - Florianópolis/SC
                </p>
              </Card>
            </div>

            {/* Business Hours */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">Horários de atendimento</h2>
                <Edit2 className="w-4 h-4 text-[#737373]" />
              </div>
              <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
                <div className="space-y-3">
                  {[
                    { day: "Segunda-feira", hours: "08:00 - 19:00", isToday: true },
                    { day: "Terça-feira", hours: "08:00 - 19:00" },
                    { day: "Quarta-feira", hours: "08:00 - 19:00" },
                    { day: "Quinta-feira", hours: "08:00 - 19:00" },
                    { day: "Sexta-feira", hours: "08:00 - 19:00" },
                    { day: "Sábado", hours: "08:00 - 19:00" },
                    { day: "Domingo", hours: "Fechado", isClosed: true },
                  ].map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-[#0f0f0f] font-medium">{schedule.day}</span>
                        {schedule.isToday && (
                          <Badge className="bg-[#dcfce7] text-[#16a34a] hover:bg-[#dcfce7] text-xs px-2 py-0">
                            Hoje
                          </Badge>
                        )}
                      </div>
                      <span className={schedule.isClosed ? "text-[#737373]" : "text-[#0f0f0f]"}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Social Media */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">Redes sociais</h2>
                <Edit2 className="w-4 h-4 text-[#737373]" />
              </div>
              <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
                <div className="space-y-3 mb-4">
                  {[
                    { name: "Instagram", handle: "@carlos_barber", color: "#e75e3d" },
                    { name: "LinkedIn", handle: "@carlos_barber", color: "#0077b5" },
                    { name: "TikTok", handle: "@carlos_barber", color: "#0f0f0f" },
                  ].map((social, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center">
                          {social.name === "Instagram" && (
                            <svg
                              className="w-5 h-5"
                              style={{ color: social.color }}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          )}
                          {social.name === "LinkedIn" && (
                            <svg
                              className="w-5 h-5"
                              style={{ color: social.color }}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          )}
                          {social.name === "TikTok" && (
                            <svg
                              className="w-5 h-5"
                              style={{ color: social.color }}
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#0f0f0f]">{social.name}</p>
                          <p className="text-xs text-[#737373]">{social.handle}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#737373]" />
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg h-12">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar nova rede social
                </Button>
              </Card>
            </div>

            {/* My Links */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">Meus links</h2>
                <Edit2 className="w-4 h-4 text-[#737373]" />
              </div>
              <Card className="bg-[#ffffff] border-0 rounded-xl p-4">
                <div className="space-y-3 mb-4">
                  {["Minha mentoria", "Meus cursos", "Meus produtos"].map((link, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#f5f5f5] flex items-center justify-center">
                          <Globe className="w-5 h-5 text-[#e75e3d]" />
                        </div>
                        <span className="text-sm font-medium text-[#0f0f0f]">{link}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#737373]" />
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg h-12">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar novo link
                </Button>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "configuracoes" && (
          <div className="px-4 py-6 space-y-4">
            {/* Show Phone Toggle */}
            <Card className="bg-[#ffffff] border-2 border-[#16a34a] rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-[#16a34a]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0f0f0f]">Mostrar telefone</h3>
                </div>
                <Switch
                  checked={showPhone}
                  onCheckedChange={setShowPhone}
                  className="data-[state=checked]:bg-[#16a34a]"
                />
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Seu número de telefone ficará visível para visitantes
              </p>
            </Card>

            {/* Show Address Toggle */}
            <Card className="bg-[#ffffff] border-2 border-[#16a34a] rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-[#16a34a]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0f0f0f]">Mostrar endereço</h3>
                </div>
                <Switch
                  checked={showAddress}
                  onCheckedChange={setShowAddress}
                  className="data-[state=checked]:bg-[#16a34a]"
                />
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Seu endereço completo ficará visível para visitantes
              </p>
            </Card>

            {/* Show Links Toggle */}
            <Card className="bg-[#ffffff] border-2 border-[#16a34a] rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#dcfce7] flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-[#16a34a]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#0f0f0f]">Mostrar meus links</h3>
                </div>
                <Switch
                  checked={showLinks}
                  onCheckedChange={setShowLinks}
                  className="data-[state=checked]:bg-[#16a34a]"
                />
              </div>
              <p className="text-sm text-[#737373] leading-relaxed">
                Seus links personalizados e de redes sociais ficarão visíveis para visitantes
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
