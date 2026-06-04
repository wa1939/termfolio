export const labExperiments = [
  {
    repo: "wa1939/termfolio",
    url: "https://github.com/wa1939/termfolio",
    title: "termfolio",
    type: { en: "terminal portfolio system", ar: "نظام موقع بطابع الطرفية" },
    summary: {
      en: "The website you are inside: a terminal portfolio with writing, utilities, games, a vCard, and now bilingual surfaces.",
      ar: "الموقع الذي تتصفحه الآن: ملف شخصي بطابع الطرفية مع كتابة، أدوات، ألعاب، بطاقة رقمية، ونسخة عربية.",
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
      ar: "مساحة لعب لتحويل الإشارات إلى شيء مفيد، وموجودة هنا كأثر علني لطريقة التفكير المنتجية.",
    },
    stack: ["Product", "Prototype", "Research"],
  },
  {
    repo: "wa1939/arabic-pdf-suite",
    url: "https://github.com/wa1939/arabic-pdf-suite",
    title: "arabic-pdf-suite",
    type: { en: "Arabic document tooling", ar: "أدوات مستندات عربية" },
    summary: {
      en: "Experiments around making Arabic-heavy PDF workflows less painful and more automation-friendly.",
      ar: "تجارب لجعل مسارات PDF العربية أقل ألمًا وأكثر قابلية للأتمتة.",
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
      ar: "بناء صغير لاختبار آليات منتج عملية بدل إبقاء الأفكار في الملاحظات.",
    },
    stack: ["Utility", "Workflow", "Prototype"],
  },
  {
    repo: "wa1939/Arabic-OCR",
    url: "https://github.com/wa1939/Arabic-OCR",
    title: "Arabic-OCR",
    type: { en: "Arabic OCR experiment", ar: "تجربة OCR عربية" },
    summary: {
      en: "A practical attempt at Arabic text extraction, useful for document-heavy operations and knowledge workflows.",
      ar: "محاولة عملية لاستخراج النص العربي، مفيدة للعمليات كثيفة المستندات ومسارات المعرفة.",
    },
    stack: ["OCR", "Arabic", "Documents"],
  },
  {
    repo: "wa1939/ArabicWordCloudGenerator",
    url: "https://github.com/wa1939/ArabicWordCloudGenerator",
    title: "ArabicWordCloudGenerator",
    type: { en: "Arabic visualization toy", ar: "تجربة تصور عربية" },
    summary: {
      en: "A visual text experiment for Arabic content, built more for learning and reuse than for polished case-study theater.",
      ar: "تجربة نصية بصرية للمحتوى العربي، بنيت للتعلم وإعادة الاستخدام أكثر من عرضها كدراسة حالة مصقولة.",
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
      ar: "قسّم التكاليف المشتركة والخدمة والضريبة، ثم انسخ ملخصًا واضحًا للمجموعة.",
    },
    command: "split bill",
  },
] as const
