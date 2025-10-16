import { Eye } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface SettingsTabProps {
  showPhone: boolean
  showAddress: boolean
  showLinks: boolean
  onShowPhoneChange: (value: boolean) => void
  onShowAddressChange: (value: boolean) => void
  onShowLinksChange: (value: boolean) => void
}

export function SettingsTab({
  showPhone,
  showAddress,
  showLinks,
  onShowPhoneChange,
  onShowAddressChange,
  onShowLinksChange,
}: SettingsTabProps) {
  const settings = [
    {
      id: "phone",
      title: "Mostrar telefone",
      description: "Seu número de telefone ficará visível para visitantes",
      checked: showPhone,
      onChange: onShowPhoneChange,
    },
    {
      id: "address",
      title: "Mostrar endereço",
      description: "Seu endereço completo ficará visível para visitantes",
      checked: showAddress,
      onChange: onShowAddressChange,
    },
    {
      id: "links",
      title: "Mostrar meus links",
      description: "Seus links personalizados e de redes sociais ficarão visíveis para visitantes",
      checked: showLinks,
      onChange: onShowLinksChange,
    },
  ]

  return (
    <div role="tabpanel" id="configuracoes-panel" aria-labelledby="configuracoes-tab" className="px-4 py-6 space-y-4">
      {settings.map((setting) => (
        <Card key={setting.id} className="bg-[#ffffff] border-2 border-[#16a34a] rounded-xl p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg bg-[#dcfce7] flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <Eye className="w-5 h-5 text-[#16a34a]" />
              </div>
              <h3 className="text-base font-semibold text-[#0f0f0f]">{setting.title}</h3>
            </div>
            <Switch
              id={setting.id}
              checked={setting.checked}
              onCheckedChange={setting.onChange}
              className="data-[state=checked]:bg-[#16a34a]"
              aria-label={setting.title}
            />
          </div>
          <p className="text-sm text-[#737373] leading-relaxed">{setting.description}</p>
        </Card>
      ))}
    </div>
  )
}
