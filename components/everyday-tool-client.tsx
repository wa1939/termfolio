"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { ReactNode } from "react"
import { QRCodeCanvas } from "qrcode.react"
import {
  CalendarPlus,
  Copy,
  Download,
  ExternalLink,
  ImageIcon,
  Link2,
  MessageCircle,
  QrCode,
  SquarePen,
} from "lucide-react"
import type { UtilityToolSlug } from "@/content/lab"
import type { Locale } from "@/content/locale"

interface EverydayToolClientProps {
  slug: UtilityToolSlug
  locale?: Locale
}

const toolText = {
  en: {
    copy: "Copy",
    copied: "Copied",
    download: "Download",
    open: "Open",
    privacy: "No login. No database. This runs in your browser unless noted.",
    urlPlaceholder: "https://example.com/really/long/link?utm_source=noise",
    shorten: "Shorten",
    clean: "Clean link",
    shortNote: "Short links are created through TinyURL. This site stores nothing.",
    failedShort: "Could not create a short link. The cleaned link is still ready.",
    qrInput: "Text, link, phone number, or Wi-Fi details",
    qrDownload: "Download QR",
    whatsappPhone: "Phone number",
    whatsappMessage: "Ready message",
    whatsappCountry: "Country code",
    eventTitle: "Event title",
    eventLocation: "Location",
    eventDescription: "Description",
    eventDate: "Date",
    eventTime: "Time",
    eventDuration: "Duration",
    minutes: "minutes",
    makeEvent: "Make .ics file",
    imagePick: "Choose image",
    imageWidth: "New width",
    imageQuality: "Quality",
    imageRun: "Shrink image",
    imageReady: "Ready to download",
    cardText: "Main text",
    cardByline: "Small line",
    cardTheme: "Style",
    cardDownload: "Download card",
    themes: ["Terminal", "Clean", "Warm"],
  },
  ar: {
    copy: "نسخ",
    copied: "تم النسخ",
    download: "تحميل",
    open: "فتح",
    privacy: "بلا تسجيل وبلا قاعدة بيانات. تعمل في المتصفح، وأي استثناء واضح داخل الأداة.",
    urlPlaceholder: "https://example.com/really/long/link?utm_source=noise",
    shorten: "قصّر الرابط",
    clean: "نظّف الرابط",
    shortNote: "الرابط القصير يُنشأ عبر TinyURL؛ موقعي لا يخزّن الرابط.",
    failedShort: "تعذّر تقصير الرابط. الرابط المنظّف جاهز للنسخ.",
    qrInput: "رابط، نص، رقم، أو بيانات Wi-Fi",
    qrDownload: "تحميل QR",
    whatsappPhone: "رقم الجوال",
    whatsappMessage: "رسالة جاهزة",
    whatsappCountry: "رمز الدولة",
    eventTitle: "اسم الموعد",
    eventLocation: "المكان",
    eventDescription: "الوصف",
    eventDate: "التاريخ",
    eventTime: "الوقت",
    eventDuration: "المدة",
    minutes: "دقيقة",
    makeEvent: "جهّز ملف .ics",
    imagePick: "اختر صورة",
    imageWidth: "العرض المطلوب",
    imageQuality: "الجودة",
    imageRun: "صغّرها",
    imageReady: "الصورة جاهزة للتحميل",
    cardText: "النص",
    cardByline: "سطر ثانوي",
    cardTheme: "الستايل",
    cardDownload: "تحميل البطاقة",
    themes: ["Terminal", "هادئ", "دافئ"],
  },
} as const

const trackingParams = [
  "fbclid",
  "gclid",
  "dclid",
  "msclkid",
  "mc_cid",
  "mc_eid",
  "igshid",
  "ref",
  "ref_src",
  "spm",
  "vero_id",
]

function normalizeUrl(raw: string) {
  const trimmed = raw.trim()
  if (!trimmed) return ""
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

function cleanUrl(raw: string) {
  try {
    const url = new URL(normalizeUrl(raw))
    const removed: string[] = []
    Array.from(url.searchParams.keys()).forEach((key) => {
      const lower = key.toLowerCase()
      if (lower.startsWith("utm_") || trackingParams.includes(lower)) {
        url.searchParams.delete(key)
        removed.push(key)
      }
    })
    return { url: url.toString(), removed }
  } catch {
    return { url: raw.trim(), removed: [] }
  }
}

function copyToClipboard(text: string, onCopied: () => void) {
  navigator.clipboard?.writeText(text)
  onCopied()
  window.setTimeout(onCopied, 1400)
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="cli-frame overflow-hidden rounded-lg">
      <div className="grid gap-6 p-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:p-6">
        {children}
      </div>
    </div>
  )
}

function ShortLinkTool({ locale }: { locale: Locale }) {
  const t = toolText[locale]
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const cleaned = useMemo(() => cleanUrl(url), [url])

  const shorten = async () => {
    setLoading(true)
    setError("")
    setShortUrl("")
    try {
      const response = await fetch("/api/tools/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: cleaned.url }),
      })
      const data = (await response.json()) as { shortUrl?: string; error?: string }
      if (!response.ok || !data.shortUrl) throw new Error(data.error || "shorten_failed")
      setShortUrl(data.shortUrl)
    } catch {
      setError(t.failedShort)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Panel>
      <div className="space-y-4">
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">URL</span>
          <textarea
            data-testid="short-link-input"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder={t.urlPlaceholder}
            className="min-h-32 w-full rounded-md border border-term-line bg-term-black p-3 text-sm text-term-white outline-none focus:border-term-cyan"
            dir="ltr"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <button type="button" data-testid="short-link-shorten" onClick={shorten} className="inline-flex items-center gap-2 rounded-md border border-term-white bg-term-white px-4 py-2 text-sm font-semibold text-term-black hover:border-term-cyan hover:bg-term-cyan" disabled={loading}>
            <Link2 className="h-4 w-4" />
            {loading ? "..." : t.shorten}
          </button>
          <button type="button" data-testid="short-link-clean-copy" onClick={() => copyToClipboard(cleaned.url, () => setCopied((value) => !value))} className="inline-flex items-center gap-2 rounded-md border border-term-line px-4 py-2 text-sm text-term-white hover:border-term-cyan hover:text-term-cyan">
            <Copy className="h-4 w-4" />
            {copied ? t.copied : t.clean}
          </button>
        </div>
        <p className="text-xs leading-6 text-term-gray">{t.shortNote}</p>
        {error && <p className="text-sm leading-7 text-[#FCA5A5]">{error}</p>}
      </div>

      <aside className="space-y-4">
        <ResultBlock label={t.clean} value={cleaned.url} locale={locale} />
        {shortUrl && <ResultBlock label={t.shorten} value={shortUrl} locale={locale} />}
        {cleaned.removed.length > 0 && (
          <div className="rounded-md border border-term-line bg-term-darker p-3 text-xs leading-6 text-term-gray">
            removed: <span dir="ltr">{cleaned.removed.join(", ")}</span>
          </div>
        )}
      </aside>
    </Panel>
  )
}

function ResultBlock({ label, value, locale }: { label: string; value: string; locale: Locale }) {
  const [copied, setCopied] = useState(false)
  const t = toolText[locale]
  return (
    <div className="rounded-lg border border-term-line bg-term-darker p-4">
      <div className="text-[10px] uppercase tracking-[0.16em] text-term-gray">{label}</div>
      <p className="mt-2 break-all text-sm leading-7 text-term-white" dir="ltr">{value}</p>
      <button type="button" onClick={() => copyToClipboard(value, () => setCopied((state) => !state))} className="mt-3 inline-flex items-center gap-2 rounded-md border border-term-line px-3 py-2 text-xs text-term-white hover:border-term-cyan hover:text-term-cyan">
        <Copy className="h-4 w-4" />
        {copied ? t.copied : t.copy}
      </button>
    </div>
  )
}

function QrTool({ locale }: { locale: Locale }) {
  const t = toolText[locale]
  const [value, setValue] = useState("https://waok.dev")
  const qrWrap = useRef<HTMLDivElement>(null)

  const downloadQr = () => {
    const canvas = qrWrap.current?.querySelector("canvas")
    if (!canvas) return
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, "qr-code.png")
    })
  }

  return (
    <Panel>
      <div className="space-y-4">
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.qrInput}</span>
          <textarea data-testid="qr-input" value={value} onChange={(event) => setValue(event.target.value)} className="min-h-40 w-full rounded-md border border-term-line bg-term-black p-3 text-sm text-term-white outline-none focus:border-term-cyan" />
        </label>
      </div>
      <aside className="rounded-lg border border-term-line bg-term-white p-5 text-term-black">
        <div ref={qrWrap} className="flex justify-center">
          <QRCodeCanvas value={value || " "} size={220} includeMargin />
        </div>
        <button type="button" data-testid="qr-download" onClick={downloadQr} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-term-black px-4 py-3 text-sm font-semibold text-term-white">
          <Download className="h-4 w-4" />
          {t.qrDownload}
        </button>
      </aside>
    </Panel>
  )
}

function WhatsAppTool({ locale }: { locale: Locale }) {
  const t = toolText[locale]
  const [country, setCountry] = useState("966")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [copied, setCopied] = useState(false)
  const digits = phone.replace(/\D/g, "").replace(/^0+/, "")
  const countryDigits = country.replace(/\D/g, "")
  const finalPhone = digits.startsWith(countryDigits) ? digits : `${countryDigits}${digits}`
  const waUrl = `https://wa.me/${finalPhone}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  return (
    <Panel>
      <div className="grid gap-4 sm:grid-cols-[120px_minmax(0,1fr)]">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.whatsappCountry}</span>
          <input data-testid="whatsapp-country" value={country} onChange={(event) => setCountry(event.target.value)} className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-term-white outline-none focus:border-term-cyan" dir="ltr" />
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.whatsappPhone}</span>
          <input data-testid="whatsapp-phone" value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-term-white outline-none focus:border-term-cyan" dir="ltr" />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.whatsappMessage}</span>
          <textarea data-testid="whatsapp-message" value={message} onChange={(event) => setMessage(event.target.value)} className="min-h-32 w-full rounded-md border border-term-line bg-term-black p-3 text-sm text-term-white outline-none focus:border-term-cyan" />
        </label>
      </div>
      <aside className="space-y-4">
        <ResultBlock label="wa.me" value={waUrl} locale={locale} />
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-term-white bg-term-white px-4 py-3 text-sm font-semibold text-term-black hover:border-term-cyan hover:bg-term-cyan">
          <ExternalLink className="h-4 w-4" />
          {t.open}
        </a>
        <button type="button" data-testid="whatsapp-copy" onClick={() => copyToClipboard(waUrl, () => setCopied((state) => !state))} className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-term-line px-4 py-3 text-sm text-term-white hover:border-term-cyan hover:text-term-cyan">
          <Copy className="h-4 w-4" />
          {copied ? t.copied : t.copy}
        </button>
      </aside>
    </Panel>
  )
}

function escapeIcs(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;")
}

function toIcsDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z")
}

function EventTool({ locale }: { locale: Locale }) {
  const t = toolText[locale]
  const today = new Date().toISOString().slice(0, 10)
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState(today)
  const [time, setTime] = useState("19:00")
  const [duration, setDuration] = useState(60)

  const makeIcs = () => {
    const start = new Date(`${date}T${time}:00`)
    const end = new Date(start.getTime() + duration * 60 * 1000)
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//termfolio//everyday-tools//EN",
      "BEGIN:VEVENT",
      `UID:${crypto.randomUUID()}@termfolio`,
      `DTSTAMP:${toIcsDate(new Date())}`,
      `DTSTART:${toIcsDate(start)}`,
      `DTEND:${toIcsDate(end)}`,
      `SUMMARY:${escapeIcs(title)}`,
      `LOCATION:${escapeIcs(location)}`,
      `DESCRIPTION:${escapeIcs(description)}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n")
    downloadBlob(new Blob([ics], { type: "text/calendar;charset=utf-8" }), "event.ics")
  }

  return (
    <Panel>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={t.eventTitle} value={title} onChange={setTitle} />
        <Input label={t.eventLocation} value={location} onChange={setLocation} />
        <Input label={t.eventDate} value={date} onChange={setDate} type="date" />
        <Input label={t.eventTime} value={time} onChange={setTime} type="time" />
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.eventDuration}</span>
          <input type="number" min="5" step="5" value={duration} onChange={(event) => setDuration(Number(event.target.value))} className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-term-white outline-none focus:border-term-cyan" />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.eventDescription}</span>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} className="min-h-28 w-full rounded-md border border-term-line bg-term-black p-3 text-sm text-term-white outline-none focus:border-term-cyan" />
        </label>
      </div>
      <aside className="rounded-lg border border-term-line bg-term-darker p-4">
        <div className="text-[10px] uppercase tracking-[0.16em] text-term-gray">{t.eventTitle}</div>
        <h2 className="mt-2 text-2xl font-semibold text-term-white">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-term-gray">{date} · {time} · {duration} {t.minutes}</p>
        {location && <p className="text-sm leading-7 text-term-gray">{location}</p>}
        <button type="button" data-testid="event-download" onClick={makeIcs} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-term-white bg-term-white px-4 py-3 text-sm font-semibold text-term-black hover:border-term-cyan hover:bg-term-cyan">
          <CalendarPlus className="h-4 w-4" />
          {t.makeEvent}
        </button>
      </aside>
    </Panel>
  )
}

function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (value: string) => void; type?: string }) {
  return (
    <label className="space-y-2">
      <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{label}</span>
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-term-white outline-none focus:border-term-cyan" />
    </label>
  )
}

function ImageTool({ locale }: { locale: Locale }) {
  const t = toolText[locale]
  const [file, setFile] = useState<File | null>(null)
  const [width, setWidth] = useState(1200)
  const [quality, setQuality] = useState(0.82)
  const [resultUrl, setResultUrl] = useState("")
  const [meta, setMeta] = useState("")

  useEffect(() => () => {
    if (resultUrl) URL.revokeObjectURL(resultUrl)
  }, [resultUrl])

  const shrink = async () => {
    if (!file) return
    const imageUrl = URL.createObjectURL(file)
    const image = new Image()
    image.onload = () => {
      const ratio = image.height / image.width
      const targetWidth = Math.min(width, image.width)
      const canvas = document.createElement("canvas")
      canvas.width = targetWidth
      canvas.height = Math.round(targetWidth * ratio)
      const ctx = canvas.getContext("2d")
      ctx?.drawImage(image, 0, 0, canvas.width, canvas.height)
      canvas.toBlob((blob) => {
        URL.revokeObjectURL(imageUrl)
        if (!blob) return
        if (resultUrl) URL.revokeObjectURL(resultUrl)
        setResultUrl(URL.createObjectURL(blob))
        setMeta(`${Math.round(file.size / 1024)}KB → ${Math.round(blob.size / 1024)}KB`)
      }, "image/jpeg", quality)
    }
    image.src = imageUrl
  }

  return (
    <Panel>
      <div className="space-y-4">
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.imagePick}</span>
          <input data-testid="image-input" type="file" accept="image/*" onChange={(event) => setFile(event.target.files?.[0] ?? null)} className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-sm text-term-gray file:mr-3 file:rounded file:border-0 file:bg-term-line file:px-3 file:py-1.5 file:text-term-white" />
        </label>
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.imageWidth}</span>
          <input type="number" min="200" step="100" value={width} onChange={(event) => setWidth(Number(event.target.value))} className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-term-white outline-none focus:border-term-cyan" />
        </label>
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.imageQuality}: {Math.round(quality * 100)}%</span>
          <input type="range" min="0.4" max="0.95" step="0.05" value={quality} onChange={(event) => setQuality(Number(event.target.value))} className="w-full accent-term-cyan" />
        </label>
        <button type="button" data-testid="image-shrink" onClick={shrink} className="inline-flex items-center gap-2 rounded-md border border-term-white bg-term-white px-4 py-2 text-sm font-semibold text-term-black hover:border-term-cyan hover:bg-term-cyan">
          <ImageIcon className="h-4 w-4" />
          {t.imageRun}
        </button>
      </div>
      <aside className="rounded-lg border border-term-line bg-term-darker p-4">
        <div className="text-[10px] uppercase tracking-[0.16em] text-term-gray">{t.imageReady}</div>
        {resultUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={resultUrl} alt="" className="mt-3 max-h-56 w-full rounded-md border border-term-line object-contain" />
            <p className="mt-3 text-sm text-term-gray" dir="ltr">{meta}</p>
            <a href={resultUrl} download="shrunk-image.jpg" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-term-white bg-term-white px-4 py-3 text-sm font-semibold text-term-black hover:border-term-cyan hover:bg-term-cyan">
              <Download className="h-4 w-4" />
              {t.download}
            </a>
          </>
        ) : (
          <p className="mt-3 text-sm leading-7 text-term-gray">{toolText[locale].privacy}</p>
        )}
      </aside>
    </Panel>
  )
}

function ShareCardTool({ locale }: { locale: Locale }) {
  const t = toolText[locale]
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [text, setText] = useState(locale === "ar" ? "الفكرة الجيدة لا تحتاج ضجيجًا كثيرًا." : "Good ideas do not need much noise.")
  const [byline, setByline] = useState(locale === "ar" ? "waok.dev" : "waok.dev")
  const [theme, setTheme] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return
    const themes = [
      { bg: "#050505", fg: "#F5F5F5", accent: "#22D3EE" },
      { bg: "#F8FAFC", fg: "#0F172A", accent: "#0891B2" },
      { bg: "#211A16", fg: "#FFF7ED", accent: "#F59E0B" },
    ]
    const current = themes[theme]
    ctx.fillStyle = current.bg
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = current.accent
    ctx.lineWidth = 6
    ctx.strokeRect(36, 36, canvas.width - 72, canvas.height - 72)
    ctx.fillStyle = current.accent
    ctx.font = "32px monospace"
    ctx.fillText("waok.dev", 70, 92)
    ctx.fillStyle = current.fg
    ctx.textAlign = locale === "ar" ? "right" : "left"
    ctx.font = "700 54px Arial"
    wrapCanvasText(ctx, text, locale === "ar" ? canvas.width - 80 : 80, 200, canvas.width - 160, 68, locale === "ar")
    ctx.font = "28px monospace"
    ctx.fillStyle = current.accent
    ctx.fillText(byline, locale === "ar" ? canvas.width - 80 : 80, canvas.height - 82)
  }, [byline, locale, text, theme])

  const download = () => {
    canvasRef.current?.toBlob((blob) => {
      if (blob) downloadBlob(blob, "share-card.png")
    })
  }

  return (
    <Panel>
      <div className="space-y-4">
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.cardText}</span>
          <textarea value={text} onChange={(event) => setText(event.target.value)} className="min-h-36 w-full rounded-md border border-term-line bg-term-black p-3 text-sm text-term-white outline-none focus:border-term-cyan" />
        </label>
        <Input label={t.cardByline} value={byline} onChange={setByline} />
        <label className="block space-y-2">
          <span className="text-xs uppercase tracking-[0.14em] text-term-gray">{t.cardTheme}</span>
          <select value={theme} onChange={(event) => setTheme(Number(event.target.value))} className="w-full rounded-md border border-term-line bg-term-black px-3 py-2 text-term-white outline-none focus:border-term-cyan">
            {t.themes.map((label, index) => (
              <option key={label} value={index}>{label}</option>
            ))}
          </select>
        </label>
        <button type="button" data-testid="share-card-download" onClick={download} className="inline-flex items-center gap-2 rounded-md border border-term-white bg-term-white px-4 py-2 text-sm font-semibold text-term-black hover:border-term-cyan hover:bg-term-cyan">
          <Download className="h-4 w-4" />
          {t.cardDownload}
        </button>
      </div>
      <aside>
        <canvas ref={canvasRef} width={1080} height={1080} className="aspect-square w-full rounded-lg border border-term-line bg-term-black" />
      </aside>
    </Panel>
  )
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  rtl: boolean
) {
  const words = text.split(/\s+/)
  let line = ""
  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y)
      line = word
      y += lineHeight
    } else {
      line = testLine
    }
  })
  ctx.fillText(line, x, y)
  if (rtl) ctx.textAlign = "left"
}

export default function EverydayToolClient({ slug, locale = "en" }: EverydayToolClientProps) {
  if (slug === "short-link") return <ShortLinkTool locale={locale} />
  if (slug === "qr") return <QrTool locale={locale} />
  if (slug === "whatsapp") return <WhatsAppTool locale={locale} />
  if (slug === "event") return <EventTool locale={locale} />
  if (slug === "image") return <ImageTool locale={locale} />
  if (slug === "share-card") return <ShareCardTool locale={locale} />

  return (
    <div className="rounded-lg border border-term-line bg-term-darker p-5 text-sm text-term-gray">
      {toolText[locale].privacy}
    </div>
  )
}
