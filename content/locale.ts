import { siteConfig } from "@/content/site"

export type Locale = "en" | "ar"

export const localeCopy = {
  en: {
    lang: "en",
    dir: "ltr",
    portfolioLabel: "portfolio",
    languageLabel: "العربية",
    languageSwitchTitle: "Open Arabic version",
    backHome: "back to home",
    navItems: [
      { path: "/", number: "01", label: "home", command: "cd ~" },
      { path: "/blog", number: "02", label: "journal", command: "ls posts/" },
      { path: "/lab", number: "03", label: "lab", command: "ls lab/" },
      { path: "/tools/splitter", number: "04", label: "tools", command: "split bill" },
      { path: "/about", number: "05", label: "about", command: "cat resume.md" },
      { path: "/contact", number: "06", label: "contact", command: "ping me" },
    ],
    footer: {
      developedBy: "developed by",
      customizedBy: "customized by",
      online: "online",
      help: ":help for commands",
    },
    home: {
      status:
        "sys.status: people analytics leader, product builder, and practical AI operator",
      navLinks: [
        { href: "/blog", label: "(01) journal // read the writing" },
        { href: "/lab", label: "(02) lab // browse experiments" },
        { href: "/tools/splitter", label: "(03) tools // split a bill" },
        { href: "/about", label: "(04) about // open the dossier" },
        { href: "/contact", label: "(05) contact // book a conversation" },
      ],
      executiveTitle: "Executive-safe signal",
      executiveCopy:
        "The terminal stays weird, but the top-level story is clearer: people analytics, AI products, transformation work, and shipped outcomes.",
      recentEntries: "Recent entries",
      latest: "latest",
      readTime: "min",
    },
    blog: {
      title: "Journal",
      description:
        "Thoughts on strategy, technology, digital transformation, and the craft of making complicated things feel clear.",
      searchLabel: "search>",
      searchMeta: "grep archive",
      searchPlaceholder: "type a topic, phrase, or tool",
      searchButton: "run",
      allPosts: "All Posts",
      hideInsights: "hide insights",
      showInsights: "show insights",
      featured: "Featured",
      read: "read",
      noPosts: "No posts match this filter. Try another topic or browse all.",
      clearFilter: "clear filter",
    },
    post: {
      back: "back to journal",
      entryType: "journal entry",
      begin: "begin document parsing",
      eof: "eof",
      tags: "tags:",
      commentsCommand: "node comments.js",
      relatedCommand: "find ./related-posts",
      newsletterTitle: "$ subscribe --no-spam --pinky-promise",
      newsletterMeta: "newsletter",
      newsletterLead:
        "I write about building products, leading teams, and the things I figure out along the way. Honestly? It's some of my best thinking.",
      newsletterCopy:
        "No spam, no selling your email, no fake weekly digest cadence. Just a quiet ping when I publish something new.",
      newsletterFooter: "Your inbox is sacred. I respect that.",
    },
    reading: {
      progress: "Progress",
      readingTime: "reading time",
      fontSize: "Font Size",
      readingTheme: "Reading Theme",
      spacing: "Spacing",
      focusOn: "Focus Mode ON",
      focus: "Focus Mode",
      focusOnCopy: "Click to restore terminal shell",
      focusCopy: "Strip the chrome for a calmer read",
      info: "Article Info",
      sections: "Sections",
      words: "~Words",
      themes: {
        terminal: "Terminal",
        sepia: "Sepia",
        light: "Light",
      },
      spacings: {
        compact: "Tight",
        comfortable: "Normal",
        spacious: "Airy",
      },
    },
    digest: {
      title: "Skim mode",
      meta: "fast digest",
      cards: [
        { label: "The point", helper: "One paragraph before the full read." },
        { label: "Map", helper: "The next anchors in the article." },
        { label: "Three words", helper: "A small memory hook." },
      ],
      empty: "This article is compact enough to read straight through.",
    },
    lab: {
      title: "Lab bench",
      eyebrow: "$ ls ./lab",
      description:
        "Small experiments, utilities, and technical play. These are not polished case studies. They are proof that I like building in public.",
      viewAll: "open lab",
      repo: "repo",
      stack: "stack",
      disclaimer: "experiments, not portfolio case studies",
    },
    tools: {
      title: "Useful tools",
      eyebrow: "$ open ./tools",
      description:
        "Tiny no-login utilities people can actually use, while still feeling like part of the portfolio.",
      openTool: "open tool",
      splitter: {
        title: "Bill splitter",
        description:
          "Split a bill, add service charge or tax, and copy the result without signing in.",
        routeTitle: "Split a bill",
        routeDescription:
          "A small utility for dinners, coffee runs, and shared purchases. No login, no tracking, just math.",
      },
    },
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    portfolioLabel: "ملف شخصي",
    languageLabel: "EN",
    languageSwitchTitle: "Open English version",
    backHome: "العودة للرئيسية",
    navItems: [
      { path: "/", number: "01", label: "الرئيسية", command: "cd ~" },
      { path: "/blog", number: "02", label: "الدفتر", command: "ls posts/" },
      { path: "/lab", number: "03", label: "المعمل", command: "ls lab/" },
      { path: "/tools/splitter", number: "04", label: "الأدوات", command: "split bill" },
      { path: "/about", number: "05", label: "نبذة", command: "cat resume.md" },
      { path: "/contact", number: "06", label: "تواصل", command: "ping me" },
    ],
    footer: {
      developedBy: "طوّره",
      customizedBy: "وخصّصه",
      online: "متصل",
      help: ":help للأوامر",
    },
    home: {
      status:
        "sys.status: قائد تحليلات أفراد، بانٍ للمنتجات، ومشغّل عملي للذكاء الاصطناعي",
      navLinks: [
        { href: "/blog", label: "(01) الدفتر // اقرأ المقالات" },
        { href: "/lab", label: "(02) المعمل // تصفح التجارب" },
        { href: "/tools/splitter", label: "(03) الأدوات // قسّم فاتورة" },
        { href: "/about", label: "(04) نبذة // افتح الملف" },
        { href: "/contact", label: "(05) تواصل // احجز محادثة" },
      ],
      executiveTitle: "إشارة مهنية أوضح",
      executiveCopy:
        "يبقى أسلوب الطرفية حاضرًا، لكن القصة الأولى أوضح: تحليلات أفراد، منتجات ذكاء اصطناعي، تحول مؤسسي، ونتائج تم شحنها.",
      recentEntries: "أحدث المقالات",
      latest: "الأحدث",
      readTime: "د",
    },
    blog: {
      title: "الدفتر",
      description:
        "أفكار عن الاستراتيجية، التقنية، التحول الرقمي، وصناعة الوضوح في الأشياء المعقدة.",
      searchLabel: "بحث>",
      searchMeta: "grep archive",
      searchPlaceholder: "اكتب موضوعًا أو عبارة أو أداة",
      searchButton: "تشغيل",
      allPosts: "كل المقالات",
      hideInsights: "إخفاء الرؤى",
      showInsights: "إظهار الرؤى",
      featured: "مميز",
      read: "اقرأ",
      noPosts: "لا توجد مقالات تطابق هذا الفلتر. جرّب موضوعًا آخر أو استعرض الكل.",
      clearFilter: "مسح الفلتر",
    },
    post: {
      back: "العودة للدفتر",
      entryType: "مقال",
      begin: "بدء قراءة المستند",
      eof: "نهاية المستند",
      tags: "الوسوم:",
      commentsCommand: "node comments.js",
      relatedCommand: "find ./related-posts",
      newsletterTitle: "$ subscribe --no-spam --pinky-promise",
      newsletterMeta: "النشرة",
      newsletterLead:
        "أكتب عن بناء المنتجات، قيادة الفرق، والأفكار التي تتضح لي أثناء الطريق.",
      newsletterCopy:
        "لا رسائل مزعجة ولا بيع للبريد ولا نشرة أسبوعية مصطنعة. فقط تنبيه هادئ عند نشر شيء جديد.",
      newsletterFooter: "صندوق بريدك له احترامه.",
    },
    reading: {
      progress: "التقدم",
      readingTime: "وقت القراءة",
      fontSize: "حجم الخط",
      readingTheme: "نمط القراءة",
      spacing: "التباعد",
      focusOn: "وضع التركيز مفعل",
      focus: "وضع التركيز",
      focusOnCopy: "اضغط لإعادة واجهة الطرفية",
      focusCopy: "خفف الواجهة لقراءة أهدأ",
      info: "معلومات المقال",
      sections: "الأقسام",
      words: "الكلمات تقريبًا",
      themes: {
        terminal: "الطرفية",
        sepia: "دافئ",
        light: "فاتح",
      },
      spacings: {
        compact: "مضغوط",
        comfortable: "عادي",
        spacious: "واسع",
      },
    },
    digest: {
      title: "قراءة سريعة",
      meta: "ملخص سريع",
      cards: [
        { label: "الفكرة", helper: "فقرة واحدة قبل القراءة الكاملة." },
        { label: "الخريطة", helper: "أقرب محطات داخل المقال." },
        { label: "ثلاث كلمات", helper: "خطاف صغير للتذكر." },
      ],
      empty: "هذا المقال قصير بما يكفي لقراءته مباشرة.",
    },
    lab: {
      title: "طاولة التجارب",
      eyebrow: "$ ls ./lab",
      description:
        "تجارب صغيرة، أدوات، ولعب تقني. ليست دراسات حالة مصقولة، بل دليل أنني أحب البناء علنًا.",
      viewAll: "افتح المعمل",
      repo: "المستودع",
      stack: "التقنيات",
      disclaimer: "تجارب وليست مشاريع عرض رسمية",
    },
    tools: {
      title: "أدوات مفيدة",
      eyebrow: "$ open ./tools",
      description:
        "أدوات صغيرة بلا تسجيل دخول يمكن للناس استخدامها فعلًا، وتبقى جزءًا من هوية الموقع.",
      openTool: "افتح الأداة",
      splitter: {
        title: "مقسّم الفاتورة",
        description:
          "قسّم الفاتورة، أضف الخدمة أو الضريبة، وانسخ النتيجة دون تسجيل دخول.",
        routeTitle: "قسّم فاتورة",
        routeDescription:
          "أداة صغيرة للعشاء، القهوة، والمشتريات المشتركة. بلا تسجيل، بلا تتبع، فقط حساب واضح.",
      },
    },
  },
} as const

export const siteArabic = {
  name: "وليد الحامد",
  title: "حل المشكلات · بناء المنتجات · من الاستراتيجية إلى التنفيذ",
  headline: "أبني منتجات، أقود فرقًا، وأحوّل الاستراتيجية إلى تنفيذ.",
  tagline: "استراتيجية · أنظمة · دفتر",
  description:
    "موقع شخصي ودفتر كتابة بطابع الطرفية لوليد الحامد، عن الاستراتيجية والأنظمة والتحول الرقمي.",
  bio: [
    "أتعامل مع المشكلات الصعبة من زاوية عملية: منتجات ذكاء اصطناعي، فرق بيانات، أقسام تبدأ من الصفر، ونتائج تصل للاستخدام لا تبقى في العروض.",
    "عملي يقع عند نقطة التقاء الابتكار والتنفيذ: تصميم منتجات يستخدمها الناس، قيادة فرق متعددة التخصصات، وبناء استراتيجيات مبنية على بيانات وقياس واضح.",
  ],
  location: "السعودية",
  stats: [
    { label: "منتجات مبنية", value: "10+" },
    { label: "منظمات متأثرة", value: "20+" },
    { label: "جوائز هاكاثون", value: "3" },
    { label: "النهج", value: "ابنِ × اشحن × حسّن" },
  ],
  experience: [
    {
      period: "أبريل 2026 - الآن",
      role: "رئيس قسم People Lab، تحليلات الأفراد والبحث",
      company: "شركة علم",
      summary:
        "قيادة People Lab كمحرك بيانات مركزي مدعوم بالذكاء الاصطناعي لتوحيد البيانات المؤسسية وبناء نماذج تتنبأ بالإرهاق، الدوران الوظيفي، وانخفاض الارتباط قبل حدوثها.",
    },
    {
      period: "2025 - أبريل 2026",
      role: "قائد الثقافة وتجربة الموظف",
      company: "شركة علم",
      summary:
        "بناء منتج ذكاء اصطناعي وفّر أكثر من مليون ريال وخفّض حجم التذاكر بنسبة 48%. قيادة تجربة الموظف لحوالي 7,000 موظف ودعم تكاملات اندماج واسعة.",
    },
    {
      period: "2023 - 2025",
      role: "مستشار الثقافة وتجربة الموظف",
      company: "شركة علم",
      summary:
        "بناء لوحات تحليلات أفراد، نماذج تنبؤية، وبرامج تمكين للذكاء الاصطناعي. قيادة فريق علم بيانات لإطلاق منتجات داخلية من الصفر.",
    },
    {
      period: "2022 - 2023",
      role: "مستشار ومحلل أعمال",
      company: "باسقات العربية للاستشارات",
      summary:
        "تنفيذ أكثر من 15 مشروع تحول لجهات مثل STC Group وMobily وSANS وGEA، مع أطر تنفيذ استراتيجية وحلول مبنية على البيانات.",
    },
    {
      period: "2021 - 2022",
      role: "مستشار مستقل",
      company: "مشاريع مستقلة وشراكات",
      summary:
        "بناء لوحات Power BI ومنتجات تحليلية، وكتابة أنظمة تشغيلية، وحل مشكلات عمليات معقدة بمنهج قائم على البيانات.",
    },
  ],
  skills: [
    "بناء المنتجات",
    "منتجات الذكاء الاصطناعي",
    "تحليلات الأفراد",
    "النمذجة التنبؤية",
    "البحث المؤسسي",
    "تنفيذ الاستراتيجية",
    "قيادة الفرق",
    "الأتمتة ببايثون",
    "علم البيانات",
    "Power BI",
    "حل المشكلات",
    "التحول الرقمي",
  ],
}

export function getLocalePath(path: string, locale: Locale): string {
  if (locale === "en") return path
  if (path === "/") return "/ar"
  return `/ar${path}`
}

export function getLanguageSwitchPath(pathname: string, locale: Locale): string {
  if (locale === "ar") {
    const withoutPrefix = pathname.replace(/^\/ar(?=\/|$)/, "")
    return withoutPrefix || "/"
  }

  if (pathname === "/") return "/ar"
  return `/ar${pathname}`
}

export function getSiteName(locale: Locale) {
  return locale === "ar" ? siteArabic.name : siteConfig.name
}
