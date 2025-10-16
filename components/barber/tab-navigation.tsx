"use client"

interface TabNavigationProps {
  activeTab: "servicos" | "informacoes" | "configuracoes"
  onTabChange: (tab: "servicos" | "informacoes" | "configuracoes") => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="flex border-b border-[#262626] bg-[#0f0f0f]" role="tablist">
      <button
        role="tab"
        aria-selected={activeTab === "servicos"}
        aria-controls="servicos-panel"
        onClick={() => onTabChange("servicos")}
        className={`flex-1 py-3 text-sm font-medium ${
          activeTab === "servicos" ? "border-b-2 border-white" : "text-[#737373]"
        }`}
      >
        Serviços
      </button>
      <button
        role="tab"
        aria-selected={activeTab === "informacoes"}
        aria-controls="informacoes-panel"
        onClick={() => onTabChange("informacoes")}
        className={`flex-1 py-3 text-sm font-medium ${
          activeTab === "informacoes" ? "border-b-2 border-white" : "text-[#737373]"
        }`}
      >
        Informações
      </button>
      <button
        role="tab"
        aria-selected={activeTab === "configuracoes"}
        aria-controls="configuracoes-panel"
        onClick={() => onTabChange("configuracoes")}
        className={`flex-1 py-3 text-sm font-medium ${
          activeTab === "configuracoes" ? "border-b-2 border-white" : "text-[#737373]"
        }`}
      >
        Configurações
      </button>
    </nav>
  )
}
