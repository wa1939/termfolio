"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { path: "/", number: "01", label: "home", command: "cd ~" },
  { path: "/blog", number: "02", label: "journal", command: "ls posts/" },
  { path: "/about", number: "03", label: "about", command: "cat resume.md" },
  { path: "/contact", number: "04", label: "contact", command: "ping me" },
] as const

export default function MinimalNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-term-line bg-term-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-4 text-sm">
          <Link href="/" className="min-w-0 text-term-white transition-colors hover:text-term-cyan">
            <span className="block text-xs uppercase tracking-[0.24em] text-term-gray">waok // personal terminal</span>
            <span className="block truncate text-base text-term-white">Waleed Alghamdi</span>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => {
              const active = item.path === "/" ? pathname === "/" : pathname === item.path || pathname.startsWith(`${item.path}/`)

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`transition-colors ${active ? "text-term-white" : "text-term-gray hover:text-term-cyan"}`}
                >
                  <span className="block text-[11px] uppercase tracking-[0.2em] text-term-gray">({item.number}) {item.command}</span>
                  <span className="block text-sm">{item.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-4 text-xs uppercase tracking-[0.18em] text-term-gray lg:flex">
            <a href="https://github.com/wa1939" target="_blank" rel="noopener noreferrer" className="hover:text-term-cyan">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/waleedalghamdi/" target="_blank" rel="noopener noreferrer" className="hover:text-term-cyan">
              LinkedIn
            </a>
            <a href="mailto:waok@outlook.sa" className="hover:text-term-cyan">
              Email
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex items-center justify-center border border-term-line px-3 py-2 text-term-white lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-term-line py-3 lg:hidden">
            <div className="grid gap-3">
              {navItems.map((item) => {
                const active = item.path === "/" ? pathname === "/" : pathname === item.path || pathname.startsWith(`${item.path}/`)

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`border border-term-line px-4 py-3 ${active ? "bg-term-dark text-term-white" : "text-term-gray hover:text-term-cyan"}`}
                  >
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-term-gray">({item.number}) {item.command}</span>
                    <span className="mt-1 block text-sm">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
