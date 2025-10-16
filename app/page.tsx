"use client"

import { ProfileHeader } from "@/components/barber/profile-header"
import { TabNavigation } from "@/components/barber/tab-navigation"
import { ServicesTab } from "@/components/barber/services-tab"
import { InformationsTab } from "@/components/barber/informations-tab"
import { SettingsTab } from "@/components/barber/settings-tab"
import { useState } from "react"

export default function BarberProfile() {
  const [activeTab, setActiveTab] = useState<"servicos" | "informacoes" | "configuracoes">("servicos")
  const [showPhone, setShowPhone] = useState(true)
  const [showAddress, setShowAddress] = useState(true)
  const [showLinks, setShowLinks] = useState(true)

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <main className="max-w-md mx-auto pb-8">
        <ProfileHeader />

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "servicos" && <ServicesTab />}

        {activeTab === "informacoes" && <InformationsTab />}

        {activeTab === "configuracoes" && (
          <SettingsTab
            showPhone={showPhone}
            showAddress={showAddress}
            showLinks={showLinks}
            onShowPhoneChange={setShowPhone}
            onShowAddressChange={setShowAddress}
            onShowLinksChange={setShowLinks}
          />
        )}
      </main>
    </div>
  )
}
