"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Section {
  id: string
  title: string
  content: React.ReactNode
}

interface ContentSectionProps {
  section: Section
}

export function ContentSection({ section }: ContentSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">{section.title}</h1>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>

        <Card ref={elementRef} className={`p-8 shadow-lg animate-on-scroll ${isVisible ? "visible" : ""}`}>
          <div className="prose prose-lg max-w-none">{section.content}</div>
        </Card>
      </div>
    </div>
  )
}
