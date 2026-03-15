import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import MinimalNav from "@/components/minimal-nav"
import TerminalFooter from "@/components/terminal-footer"

const experience = [
  {
    period: "2023 - present",
    role: "Senior Culture & Employee Experience Consultant",
    company: "Elm Company",
    summary:
      "Leading culture, M&A, and AI-enabled experience work, including internal AI initiatives, capability frameworks, and integration playbooks.",
  },
  {
    period: "2024 - 2025",
    role: "Senior Consultant (SME engagements)",
    company: "Independent and partner-led work",
    summary:
      "Supported targeted work in dashboards, operating manuals, manpower planning, process improvement, and system-enabled transformation.",
  },
  {
    period: "2022 - 2023",
    role: "Consultant / Business Analyst",
    company: "Baseqat Arabia Consulting",
    summary:
      "Worked across culture transformation, HR strategy, leadership assessment, and change programs for major clients in the region.",
  },
] as const

const credentials = [
  "PMP",
  "PMI-RMP",
  "Prosci",
  "Change Culture Leader",
  "MBA (in progress)",
  "Arabic + English",
] as const

const skills = [
  "strategy execution",
  "culture transformation",
  "change management",
  "project management",
  "product thinking",
  "problem framing",
  "python and ai integration",
  "data analysis",
  "dashboarding",
] as const

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-term-black text-term-white font-mono flex flex-col">
      <MinimalNav />
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('/noise.png')] animate-noise" />

      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-term-gray transition-colors hover:text-term-cyan">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-term-green">$</span> cd ..
          </Link>

          <section className="cli-frame overflow-hidden">
            <div className="flex items-center justify-between border-b border-term-line px-4 py-3 text-xs uppercase tracking-[0.16em] text-term-gray">
              <span>resume.md</span>
              <span>personal dossier</span>
            </div>

            <div className="grid gap-8 p-5 md:grid-cols-[300px_minmax(0,1fr)] md:p-6">
              <aside className="space-y-6">
                <div className="overflow-hidden border border-term-line bg-term-darker">
                  <div className="relative aspect-[4/4.8]">
                    <Image src="/dbcf93d6-e01e-4308-bea1-11412058a5cd.webp" alt="Waleed Alghamdi" fill priority className="object-cover" />
                  </div>
                </div>

                <div className="space-y-3 text-sm leading-7 text-term-gray">
                  <div>
                    <div className="cli-topline">name</div>
                    <div className="mt-1 text-term-white">Waleed Alghamdi</div>
                  </div>
                  <div>
                    <div className="cli-topline">location</div>
                    <div className="mt-1 text-term-white">Saudi Arabia</div>
                  </div>
                  <div>
                    <div className="cli-topline">contact</div>
                    <a href="mailto:waok@outlook.sa" className="mt-1 inline-block cli-link">
                      waok@outlook.sa
                    </a>
                  </div>
                  <div>
                    <div className="cli-topline">links</div>
                    <div className="mt-1 space-y-1">
                      <a href="https://www.linkedin.com/in/waleedalghamdi/" target="_blank" rel="noopener noreferrer" className="block cli-link">
                        linkedin
                      </a>
                      <a href="https://github.com/wa1939" target="_blank" rel="noopener noreferrer" className="block cli-link">
                        github
                      </a>
                      <a href="https://x.com/waleedpy" target="_blank" rel="noopener noreferrer" className="block cli-link">
                        x
                      </a>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="space-y-8">
                <div>
                  <div className="text-sm text-term-gray">
                    <span className="text-term-green">$</span> <span className="text-term-cyan">cat</span> about.txt
                  </div>
                  <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-term-white md:text-4xl">
                    Consultant, systems thinker, and product-minded builder.
                  </h1>
                  <div className="mt-5 space-y-4 cli-soft-copy max-w-4xl">
                    <p>
                      My path started in engineering and kept pulling me toward how systems behave, why people adopt change, and what makes complex work actually usable. That led me into consulting, organizational transformation, product thinking, and AI-enabled internal tools.
                    </p>
                    <p>
                      I like work that sits between vision and execution: taking strategy, operational friction, or a messy problem and turning it into a structure people can understand, trust, and use.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    ["organizations served", "20+"],
                    ["transformation projects", "15+"],
                    ["working style", "strategy x execution"],
                  ].map(([label, value]) => (
                    <div key={label} className="cli-panel px-4 py-4">
                      <div className="cli-topline">{label}</div>
                      <div className="mt-2 text-lg text-term-white">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden border border-term-line">
                  <div className="grid gap-4 border-b border-term-line px-4 py-3 text-xs uppercase tracking-[0.16em] text-term-gray md:grid-cols-[140px_190px_minmax(0,1fr)]">
                    <span>period</span>
                    <span>role</span>
                    <span>summary</span>
                  </div>
                  <div className="space-y-0">
                    {experience.map((item) => (
                      <div key={`${item.period}-${item.role}`} className="cli-table-row grid gap-3 px-4 py-4 md:grid-cols-[140px_190px_minmax(0,1fr)] md:items-start">
                        <div className="text-xs uppercase tracking-[0.14em] text-term-gray">{item.period}</div>
                        <div>
                          <div className="text-sm font-semibold text-term-white">{item.role}</div>
                          <div className="mt-1 text-xs uppercase tracking-[0.14em] text-term-cyan">{item.company}</div>
                        </div>
                        <div className="text-sm leading-7 text-term-gray">{item.summary}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="cli-panel px-4 py-4">
                    <div className="cli-topline">skills</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className="border border-term-line px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-term-gray">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="cli-panel px-4 py-4">
                    <div className="cli-topline">credentials</div>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-term-gray">
                      {credentials.map((credential) => (
                        <div key={credential}>- {credential}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <TerminalFooter />
    </div>
  )
}
