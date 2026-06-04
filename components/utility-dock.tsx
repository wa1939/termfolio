import Link from "next/link"
import { ArrowUpRight, Calculator } from "lucide-react"
import { utilityTools } from "@/content/lab"
import { getLocalePath, localeCopy, type Locale } from "@/content/locale"

interface UtilityDockProps {
  locale?: Locale
  compact?: boolean
}

export default function UtilityDock({ locale = "en", compact = false }: UtilityDockProps) {
  const copy = localeCopy[locale]

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <div className="cli-topline" dir="ltr">{copy.tools.eyebrow}</div>
          <h2 className="mt-2 text-2xl font-semibold text-term-white md:text-3xl">
            {copy.tools.title}
          </h2>
          {!compact && (
            <p className="mt-3 text-sm leading-7 text-term-gray">
              {copy.tools.description}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {utilityTools.map((tool) => (
          <Link
            key={tool.slug}
            href={getLocalePath(tool.href, locale)}
            className="group rounded-lg border border-term-line bg-term-darker p-4 transition-colors hover:border-term-cyan/60"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-term-line bg-term-black text-term-cyan">
                <Calculator className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-[0.16em] text-term-gray" dir="ltr">
                  {tool.command}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-term-white group-hover:text-term-cyan">
                  {tool.title[locale]}
                </h3>
                <p className="mt-2 text-sm leading-7 text-term-gray">
                  {tool.summary[locale]}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-term-gray group-hover:text-term-cyan" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
