export const labExperiments = [
  {
    repo: "wa1939/termfolio",
    url: "https://github.com/wa1939/termfolio",
    title: "termfolio",
    type: { en: "terminal portfolio system", ar: "موقع بطابع Terminal" },
    summary: {
      en: "The website you are inside: a terminal portfolio with writing, utilities, games, a vCard, and now bilingual surfaces.",
      ar: "هذا الموقع نفسه: كتابة، أدوات، ألعاب، vCard، ونسخة عربية تحافظ على روح Terminal.",
    },
    stack: ["Next.js", "React", "Tailwind"],
  },
  {
    repo: "wa1939/athar",
    url: "https://github.com/wa1939/athar",
    title: "athar",
    type: { en: "idea and product experiment", ar: "تجربة فكرة ومنتج" },
    summary: {
      en: "A playground for shaping signals into something useful. Kept here as a public trace of product thinking.",
      ar: "مساحة لتجريب فكرة وتحويل إشارات صغيرة إلى منتج يمكن لمسه.",
    },
    stack: ["Product", "Prototype", "Research"],
  },
  {
    repo: "wa1939/arabic-pdf-suite",
    url: "https://github.com/wa1939/arabic-pdf-suite",
    title: "arabic-pdf-suite",
    type: { en: "Arabic document tooling", ar: "أدوات للمستندات العربية" },
    summary: {
      en: "Experiments around making Arabic-heavy PDF workflows less painful and more automation-friendly.",
      ar: "تجارب لتخفيف وجع ملفات PDF العربية وجعلها أقرب للأتمتة.",
    },
    stack: ["Arabic", "PDF", "Automation"],
  },
  {
    repo: "wa1939/wafi",
    url: "https://github.com/wa1939/wafi",
    title: "wafi",
    type: { en: "utility experiment", ar: "تجربة أداة" },
    summary: {
      en: "A small build used to test practical product mechanics instead of keeping ideas in notes.",
      ar: "تجربة صغيرة لاختبار فكرة عملية بدل تركها في دفتر الملاحظات.",
    },
    stack: ["Utility", "Workflow", "Prototype"],
  },
  {
    repo: "wa1939/Arabic-OCR",
    url: "https://github.com/wa1939/Arabic-OCR",
    title: "Arabic-OCR",
    type: { en: "Arabic OCR experiment", ar: "تجربة OCR للعربية" },
    summary: {
      en: "A practical attempt at Arabic text extraction, useful for document-heavy operations and knowledge workflows.",
      ar: "محاولة عملية لاستخراج النص العربي من مستندات ثقيلة.",
    },
    stack: ["OCR", "Arabic", "Documents"],
  },
  {
    repo: "wa1939/ArabicWordCloudGenerator",
    url: "https://github.com/wa1939/ArabicWordCloudGenerator",
    title: "ArabicWordCloudGenerator",
    type: { en: "Arabic visualization toy", ar: "تجربة تصور للنص العربي" },
    summary: {
      en: "A visual text experiment for Arabic content, built more for learning and reuse than for polished case-study theater.",
      ar: "تجربة بصرية مع النص العربي، أقرب للتعلم وإعادة الاستخدام من عرض مشروع مكتمل.",
    },
    stack: ["Arabic", "Visualization", "Text"],
  },
] as const

export const utilityTools = [
  {
    slug: "splitter",
    href: "/tools/splitter",
    title: { en: "Bill splitter", ar: "مقسّم الفاتورة" },
    summary: {
      en: "Split shared costs, service charge, and tax. Copy a clean settlement note for the group chat.",
      ar: "قسّم الفاتورة مع الخدمة والضريبة، وانسخ رسالة مرتبة للمجموعة.",
    },
    command: "split bill",
  },
  {
    slug: "short-link",
    href: "/tools/short-link",
    title: { en: "Short link", ar: "رابط قصير" },
    summary: {
      en: "Shorten a long URL into something you can actually paste in a message.",
      ar: "حوّل الرابط الطويل إلى رابط أقصر وأنظف للمشاركة.",
    },
    command: "url short",
  },
  {
    slug: "qr",
    href: "/tools/qr",
    title: { en: "QR generator", ar: "مولّد QR" },
    summary: {
      en: "Turn a link, note, phone, or Wi-Fi text into a downloadable QR code.",
      ar: "حوّل رابطًا أو نصًا أو رقمًا إلى QR جاهز للتحميل.",
    },
    command: "qr make",
  },
  {
    slug: "whatsapp",
    href: "/tools/whatsapp",
    title: { en: "WhatsApp link", ar: "رابط واتساب" },
    summary: {
      en: "Create a click-to-chat WhatsApp link with a ready message. Useful when people hate saving numbers.",
      ar: "أنشئ رابط واتساب برسالة مسبقة، من غير ما يحفظ الطرف الثاني الرقم.",
    },
    command: "wa link",
  },
  {
    slug: "event",
    href: "/tools/event",
    title: { en: "Calendar file", ar: "ملف تقويم" },
    summary: {
      en: "Make a tiny .ics event file people can add to Apple Calendar, Google Calendar, or Outlook.",
      ar: "جهّز ملف .ics صغيرًا يضيف الموعد مباشرة إلى التقويم.",
    },
    command: "make ics",
  },
  {
    slug: "image",
    href: "/tools/image",
    title: { en: "Image shrinker", ar: "تصغير الصور" },
    summary: {
      en: "Resize and compress a local image in the browser before sending it anywhere.",
      ar: "صغّر صورة من جهازك داخل المتصفح قبل إرسالها.",
    },
    command: "image shrink",
  },
  {
    slug: "share-card",
    href: "/tools/share-card",
    title: { en: "Share card", ar: "بطاقة مشاركة" },
    summary: {
      en: "Turn a quote, announcement, or short note into a clean image for social sharing.",
      ar: "حوّل اقتباسًا أو إعلانًا قصيرًا إلى بطاقة أنيقة للمشاركة.",
    },
    command: "card make",
  },
] as const

export type UtilityToolSlug = (typeof utilityTools)[number]["slug"]

export function getUtilityTool(slug: string) {
  return utilityTools.find((tool) => tool.slug === slug)
}
