"use client"

import { Plus, X, Scissors } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface AddServiceModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddServiceModal({ open, onOpenChange }: AddServiceModalProps) {
  const [enablePriceRange, setEnablePriceRange] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full mt-4 bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg py-6">
          <Plus className="w-5 h-5 mr-2" aria-hidden="true" />
          Adicionar serviço
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white text-[#0f0f0f] max-w-[90%] rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
          aria-label="Fechar"
        >
          <X className="h-6 w-6 text-[#737373]" aria-hidden="true" />
        </button>

        <div className="flex flex-col items-start gap-6">
          <div className="w-16 h-16 rounded-full bg-[#dcfce7] flex items-center justify-center" aria-hidden="true">
            <Scissors className="w-8 h-8 text-[#16a34a]" />
          </div>

          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-left">Adicionar novo serviço</DialogTitle>
          </DialogHeader>

          <form className="w-full space-y-5">
            <div className="space-y-2">
              <Label htmlFor="service-name" className="text-base font-semibold">
                Nome do serviço{" "}
                <span className="text-[#dc2626]" aria-label="obrigatório">
                  *
                </span>
              </Label>
              <Input
                id="service-name"
                placeholder="Corte, barboterapia, hidratação..."
                className="bg-[#f5f5f5] border-0 h-12 text-base placeholder:text-[#a3a3a3]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-semibold">
                Descrição{" "}
                <span className="text-[#dc2626]" aria-label="obrigatório">
                  *
                </span>
              </Label>
              <Textarea
                id="description"
                placeholder="Corte completo com toalha quente..."
                className="bg-[#f5f5f5] border-0 min-h-[100px] text-base placeholder:text-[#a3a3a3] resize-none"
                required
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
                Preço{" "}
                <span className="text-[#dc2626]" aria-label="obrigatório">
                  *
                </span>
              </Label>
              <Input
                id="price"
                placeholder="R$0,00"
                className="bg-[#f5f5f5] border-0 h-12 text-base placeholder:text-[#a3a3a3]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="text-base font-semibold">
                Duração
              </Label>
              <Select defaultValue="1h">
                <SelectTrigger id="duration" className="bg-[#f5f5f5] border-0 h-12 text-base">
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

            <Button
              type="submit"
              className="w-full bg-[#e75e3d] hover:bg-[#d14d2d] text-white rounded-lg h-14 text-base font-semibold mt-4"
            >
              <Plus className="w-5 h-5 mr-2" aria-hidden="true" />
              Adicionar serviço
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
