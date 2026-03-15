"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function TerminalFooter() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }

    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <footer className="mt-auto px-4 pb-6 pt-8">
      <div className="container mx-auto max-w-7xl px-0">
        <div className="cli-frame overflow-hidden">
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr_0.8fr]">
            <div className="border-b border-term-line px-4 py-4 text-sm leading-7 text-term-gray md:border-b-0 md:border-r">
              <div className="cli-topline">Stay on the line</div>
              <p className="mt-2">This site is a living terminal journal for strategy, systems, writing, and experiments.</p>
            </div>

            <div className="border-b border-term-line px-4 py-4 text-sm leading-7 text-term-gray md:border-b-0 md:border-r">
              <div className="cli-topline">Routes</div>
              <div className="mt-2 space-y-1">
                <Link href="/" className="block hover:text-term-cyan">
                  (01) home // cd ~
                </Link>
                <Link href="/blog" className="block hover:text-term-cyan">
                  (02) journal // ls posts/
                </Link>
                <Link href="/about" className="block hover:text-term-cyan">
                  (03) about // cat resume.md
                </Link>
                <Link href="/contact" className="block hover:text-term-cyan">
                  (04) contact // ping me
                </Link>
              </div>
            </div>

            <div className="px-4 py-4 text-sm leading-7 text-term-gray">
              <div className="cli-topline">Manual updates</div>
              <p className="mt-2">If you want the next dispatch, email me and I will share it when it is ready.</p>
              <a href="mailto:waok@outlook.sa" className="mt-3 inline-block text-term-cyan hover:text-term-cyan-bright">
                waok@outlook.sa
              </a>
            </div>
          </div>

          <div className="cli-statusbar flex flex-col gap-2 px-4 py-3 md:flex-row md:items-center md:justify-between">
            <span>by waleed alghamdi // {time || "--:--:--"}</span>
            <span>status: online // dark mode</span>
            <span>:help for commands</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
