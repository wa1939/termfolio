"use client"

import { useEffect, useState } from "react"
import { NotionToHeading } from "@/components/notion-render"

interface TableOfContentsProps {
  contents: any[]
}

export default function TableOfContents({ contents }: TableOfContentsProps) {
  const headings = NotionToHeading(contents)
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -68% 0px" },
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <aside className="cli-frame overflow-hidden">
      <div className="flex items-center justify-between border-b border-term-line px-4 py-3 text-xs uppercase tracking-[0.16em] text-term-gray">
        <span>outline</span>
        <span>jump list</span>
      </div>

      <nav className="space-y-0 text-sm">
        {headings.map((heading) => {
          const active = heading.id === activeId

          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block border-t border-term-line px-4 py-3 leading-7 ${active ? "cli-table-row--active text-term-white" : "text-term-gray hover:bg-term-dark hover:text-term-white"}`}
            >
              {heading.type === "heading_2" ? "|-- " : "\\-- "}
              {heading.text}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
