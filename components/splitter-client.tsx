"use client"

import { useMemo, useState } from "react"
import { Copy, Plus, RotateCcw, Trash2 } from "lucide-react"
import { localeCopy, type Locale } from "@/content/locale"

type Person = {
  id: number
  name: string
  weight: number
}

interface SplitterClientProps {
  locale?: Locale
}

const initialPeople: Person[] = [
  { id: 1, name: "Waleed", weight: 1 },
  { id: 2, name: "Friend", weight: 1 },
]

const labels = {
  en: {
    bill: "Bill total",
    service: "Service",
    tax: "Tax",
    people: "People",
    addPerson: "Add person",
    reset: "Reset",
    copy: "Copy result",
    copied: "Copied",
    name: "Name",
    weight: "Share",
    total: "Total",
    each: "each",
    note: "Settlement note",
    empty: "Add at least one person to split the bill.",
  },
  ar: {
    bill: "إجمالي الفاتورة",
    service: "الخدمة",
    tax: "الضريبة",
    people: "الأشخاص",
    addPerson: "إضافة شخص",
    reset: "إعادة",
    copy: "نسخ النتيجة",
    copied: "تم النسخ",
    name: "الاسم",
    weight: "الحصة",
    total: "الإجمالي",
    each: "لكل شخص",
    note: "ملخص التسوية",
    empty: "أضف شخصًا واحدًا على الأقل لتقسيم الفاتورة.",
  },
} as const

function formatMoney(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US", {
    style: "currency",
    currency: "SAR",
    maximumFractionDigits: 2,
  }).format(value || 0)
}

export default function SplitterClient({ locale = "en" }: SplitterClientProps) {
  const copy = localeCopy[locale]
  const t = labels[locale]
  const [bill, setBill] = useState(120)
  const [servicePercent, setServicePercent] = useState(0)
  const [taxPercent, setTaxPercent] = useState(15)
  const [people, setPeople] = useState<Person[]>(initialPeople)
  const [copied, setCopied] = useState(false)

  const calculation = useMemo(() => {
    const safeBill = Math.max(0, bill)
    const service = safeBill * (Math.max(0, servicePercent) / 100)
    const taxable = safeBill + service
    const tax = taxable * (Math.max(0, taxPercent) / 100)
    const total = taxable + tax
    const totalWeight = people.reduce((sum, person) => sum + Math.max(0, person.weight), 0)
    const shares = people.map((person) => {
      const weight = Math.max(0, person.weight)
      return {
        ...person,
        amount: totalWeight > 0 ? (total * weight) / totalWeight : 0,
      }
    })

    return { service, tax, total, totalWeight, shares }
  }, [bill, people, servicePercent, taxPercent])

  const settlementText = useMemo(() => {
    if (calculation.shares.length === 0) return t.empty
    const lines = [
      `${t.total}: ${formatMoney(calculation.total, locale)}`,
      ...calculation.shares.map((person) => `${person.name || t.name}: ${formatMoney(person.amount, locale)}`),
    ]
    return lines.join("\n")
  }, [calculation.shares, calculation.total, locale, t.empty, t.name, t.total])

  const updatePerson = (id: number, patch: Partial<Person>) => {
    setPeople((current) =>
      current.map((person) => (person.id === id ? { ...person, ...patch } : person))
    )
  }

  const copyResult = async () => {
    await navigator.clipboard?.writeText(settlementText)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  const addPerson = () => {
    setPeople((current) => [
      ...current,
      { id: Date.now(), name: locale === "ar" ? `شخص ${current.length + 1}` : `Person ${current.length + 1}`, weight: 1 },
    ])
  }

  const reset = () => {
    setBill(120)
    setServicePercent(0)
    setTaxPercent(15)
    setPeople(initialPeople)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section className="cli-frame overflow-hidden">
        <div className="flex items-center justify-between border-b border-term-line px-4 py-3 text-xs uppercase tracking-[0.16em] text-term-gray">
          <span dir="ltr">$ split bill</span>
          <span>{copy.tools.splitter.title}</span>
        </div>

        <div className="space-y-6 p-5">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { id: "splitter-bill", testId: "splitter-bill", label: t.bill, value: bill, suffix: "SAR", set: setBill },
              { id: "splitter-service", testId: "splitter-service", label: t.service, value: servicePercent, suffix: "%", set: setServicePercent },
              { id: "splitter-tax", testId: "splitter-tax", label: t.tax, value: taxPercent, suffix: "%", set: setTaxPercent },
            ].map((field) => (
              <label key={field.label} className="space-y-2">
                <span className="text-xs uppercase tracking-[0.14em] text-term-gray" id={`${field.id}-label`}>
                  {field.label}
                </span>
                <span className="flex items-center gap-2 rounded-md border border-term-line bg-term-darker px-3 py-2 focus-within:border-term-cyan">
                  <input
                    id={field.id}
                    data-testid={field.testId}
                    aria-labelledby={`${field.id}-label`}
                    type="number"
                    min="0"
                    value={field.value}
                    onChange={(event) => field.set(Number(event.target.value))}
                    className="min-w-0 flex-1 bg-transparent text-term-white outline-none"
                  />
                  <span className="text-xs text-term-gray" dir="ltr">{field.suffix}</span>
                </span>
              </label>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-term-white">{t.people}</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={addPerson}
                  data-testid="splitter-add-person"
                  className="inline-flex items-center gap-2 rounded-md border border-term-line px-3 py-2 text-xs text-term-white hover:border-term-cyan hover:text-term-cyan"
                >
                  <Plus className="h-4 w-4" />
                  {t.addPerson}
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-md border border-term-line px-3 py-2 text-xs text-term-gray hover:text-term-white"
                >
                  <RotateCcw className="h-4 w-4" />
                  {t.reset}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {people.map((person) => (
                <div key={person.id} className="grid gap-2 rounded-lg border border-term-line bg-term-darker p-3 sm:grid-cols-[minmax(0,1fr)_110px_44px]">
                  <label className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-term-gray">{t.name}</span>
                    <input
                      value={person.name}
                      onChange={(event) => updatePerson(person.id, { name: event.target.value })}
                      className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-sm text-term-white outline-none focus:border-term-cyan"
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-term-gray">{t.weight}</span>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={person.weight}
                      onChange={(event) => updatePerson(person.id, { weight: Number(event.target.value) })}
                      className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-sm text-term-white outline-none focus:border-term-cyan"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setPeople((current) => current.filter((item) => item.id !== person.id))}
                    className="flex min-h-11 items-center justify-center rounded-md border border-term-line text-term-gray hover:border-red-400 hover:text-red-400"
                    aria-label={`Remove ${person.name || t.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <aside className="space-y-4">
        <div className="rounded-lg border border-term-line bg-term-darker p-4">
          <div className="text-[10px] uppercase tracking-[0.16em] text-term-gray">{t.total}</div>
          <div className="mt-2 text-3xl font-semibold text-term-white">
            {formatMoney(calculation.total, locale)}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md border border-term-line bg-term-black p-3">
              <div className="text-[10px] uppercase tracking-[0.14em] text-term-gray">{t.service}</div>
              <div className="mt-1 text-term-white">{formatMoney(calculation.service, locale)}</div>
            </div>
            <div className="rounded-md border border-term-line bg-term-black p-3">
              <div className="text-[10px] uppercase tracking-[0.14em] text-term-gray">{t.tax}</div>
              <div className="mt-1 text-term-white">{formatMoney(calculation.tax, locale)}</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-term-line bg-term-darker p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-term-gray">{t.each}</div>
              <h2 className="mt-1 text-lg font-semibold text-term-white">{t.note}</h2>
            </div>
            <button
              type="button"
              onClick={copyResult}
              data-testid="splitter-copy-result"
              className="inline-flex items-center gap-2 rounded-md border border-term-line px-3 py-2 text-xs text-term-white hover:border-term-cyan hover:text-term-cyan"
            >
              <Copy className="h-4 w-4" />
              {copied ? t.copied : t.copy}
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {calculation.shares.length > 0 ? (
              calculation.shares.map((person) => (
                <div key={person.id} className="flex items-center justify-between gap-3 border-t border-term-line py-3 text-sm">
                  <span className="min-w-0 truncate text-term-gray">{person.name || t.name}</span>
                  <span className="font-semibold text-term-white">{formatMoney(person.amount, locale)}</span>
                </div>
              ))
            ) : (
              <p className="text-sm leading-7 text-term-gray">{t.empty}</p>
            )}
          </div>

          <pre className="mt-4 whitespace-pre-wrap rounded-md border border-term-line bg-term-black p-3 text-xs leading-6 text-term-gray" dir={locale === "ar" ? "rtl" : "ltr"}>
            {settlementText}
          </pre>
        </div>
      </aside>
    </div>
  )
}
