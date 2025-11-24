"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ContentSection } from "@/components/content-section"
import { sections } from "@/lib/sections-data"

export default function Home() {
  const [activeSection, setActiveSection] = useState("estatistica")

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} sections={sections} />
      <main className="flex-1 lg:ml-64">
        <ContentSection section={sections.find((s) => s.id === activeSection)!} />
      </main>
    </div>
  )
}
