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
      { path: "/tools", number: "04", label: "tools", command: "ls tools/" },
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
        { href: "/tools", label: "(03) tools // use something small" },
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
      title: "Too lazy to read?",
      meta: "brain-rot mode",
      intro:
        "I made this for the honest reader who opened the post, respected the effort, and still wants the point now.",
      cards: [
        { label: "The point", helper: "The post compressed into one minute." },
        { label: "Keep these", helper: "The ideas most worth remembering." },
        { label: "Jump to", helper: "Skip straight to the useful sections." },
        { label: "Three words", helper: "A memory hook for the whole thing." },
      ],
      empty: "This article is compact enough to read straight through.",
      fullRead: "full read",
      savedTime: "saved if this is enough",
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
      allTools: "open all tools",
      indexTitle: "Tools that do one thing",
      indexDescription:
        "No account, no upload unless the browser needs a local file, no ceremony. Small tools for normal everyday tasks.",
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
    portfolioLabel: "موقع شخصي",
    languageLabel: "EN",
    languageSwitchTitle: "Open English version",
    backHome: "العودة للرئيسية",
    navItems: [
      { path: "/", number: "01", label: "الرئيسية", command: "cd ~" },
      { path: "/blog", number: "02", label: "المقالات", command: "ls posts/" },
      { path: "/lab", number: "03", label: "التجارب", command: "ls lab/" },
      { path: "/tools", number: "04", label: "الأدوات", command: "ls tools/" },
      { path: "/about", number: "05", label: "عنّي", command: "cat resume.md" },
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
        "sys.status: أعمل على People Analytics ومنتجات AI وأحوّل الأفكار إلى أشياء تعمل",
      navLinks: [
        { href: "/blog", label: "(01) المقالات // اقرأ ما يستحق" },
        { href: "/lab", label: "(02) التجارب // أشياء بنيتها وأنا أتعلم" },
        { href: "/tools", label: "(03) الأدوات // استخدم شيئًا صغيرًا" },
        { href: "/about", label: "(04) عنّي // السيرة بدون حشو" },
        { href: "/contact", label: "(05) تواصل // افتح حديثًا واضحًا" },
      ],
      executiveTitle: "الصورة كاملة",
      executiveCopy:
        "الموقع يحتفظ بروح Terminal، لكن القصة ليست مزحة: People Analytics، منتجات AI، تحول مؤسسي، ونتائج وصلت للاستخدام.",
      recentEntries: "أحدث المقالات",
      latest: "الأحدث",
      readTime: "د",
    },
    blog: {
      title: "المقالات",
      description:
        "كتابة عن الاستراتيجية، التقنية، التحول الرقمي، وكيف نجعل الأشياء المعقدة أوضح.",
      searchLabel: "بحث>",
      searchMeta: "grep archive",
      searchPlaceholder: "اكتب موضوعًا أو عبارة أو أداة",
      searchButton: "ابحث",
      allPosts: "كل المقالات",
      hideInsights: "إخفاء التفاصيل",
      showInsights: "إظهار التفاصيل",
      featured: "مميز",
      read: "اقرأ",
      noPosts: "لا توجد نتيجة بهذا البحث. جرّب كلمة أخرى أو ارجع لكل المقالات.",
      clearFilter: "مسح الفلتر",
    },
    post: {
      back: "العودة للمقالات",
      entryType: "مقال",
      begin: "بداية النص",
      eof: "انتهى النص",
      tags: "الوسوم:",
      commentsCommand: "node comments.js",
      relatedCommand: "find ./related-posts",
      newsletterTitle: "$ subscribe --no-spam --pinky-promise",
      newsletterMeta: "النشرة",
      newsletterLead:
        "أكتب عن بناء المنتجات، قيادة الفرق، والأفكار التي تتضح في الطريق.",
      newsletterCopy:
        "لا إزعاج، ولا بيع للبريد، ولا نشرة أسبوعية متكلفة. فقط تنبيه هادئ عند نشر شيء جديد.",
      newsletterFooter: "بريدك ليس مكانًا للتجارب.",
    },
    reading: {
      progress: "التقدم",
      readingTime: "وقت القراءة",
      fontSize: "حجم الخط",
      readingTheme: "نمط القراءة",
      spacing: "التباعد",
      focusOn: "وضع التركيز مفعل",
      focus: "وضع التركيز",
      focusOnCopy: "اضغط لإرجاع واجهة Terminal",
      focusCopy: "أزل الضجيج واقرأ بهدوء",
      info: "معلومات المقال",
      sections: "الأقسام",
      words: "الكلمات تقريبًا",
      themes: {
        terminal: "Terminal",
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
      title: "ما لك خلق تقرأ؟",
      meta: "وضع الزبدة",
      intro:
        "هذه الخانة للقارئ الصريح: دخل المقال، احترم الجهد، ثم قال أعطني الزبدة.",
      cards: [
        { label: "الزبدة", helper: "المقال مضغوط في دقيقة." },
        { label: "لا تنسَ", helper: "أهم الأفكار التي تستحق البقاء." },
        { label: "اقفز إلى", helper: "اذهب مباشرة إلى الأجزاء المفيدة." },
        { label: "ثلاث كلمات", helper: "خطاف صغير يتذكره المخ." },
      ],
      empty: "هذا المقال قصير بما يكفي لقراءته مباشرة.",
      fullRead: "قراءة كاملة",
      savedTime: "وفرتها إن كانت الزبدة تكفيك",
    },
    lab: {
      title: "التجارب",
      eyebrow: "$ ls ./lab",
      description:
        "أشياء صغيرة بنيتها للتجربة والتعلم. ليست مشاريع عرض رسمية، لكنها تقول الكثير عن طريقة التفكير.",
      viewAll: "افتح التجارب",
      repo: "المستودع",
      stack: "التقنيات",
      disclaimer: "تجارب لا دراسات حالة",
    },
    tools: {
      title: "أدوات مفيدة",
      eyebrow: "$ open ./tools",
      description:
        "أدوات صغيرة بلا تسجيل دخول. تدخل، تستخدمها، وتطلع. هذا كل شيء.",
      openTool: "افتح الأداة",
      allTools: "افتح كل الأدوات",
      indexTitle: "أدوات بسيطة تنفع يوميًا",
      indexDescription:
        "لا حسابات، لا رفع ملفات للسيرفر، ولا واجهة متعبة. أدوات صغيرة لأشياء يحتاجها الناس فعلًا.",
      splitter: {
        title: "مقسّم الفاتورة",
        description:
          "قسّم الفاتورة، أضف الخدمة أو الضريبة، وانسخ النتيجة للمجموعة.",
        routeTitle: "قسّم الفاتورة",
        routeDescription:
          "للعشاء، القهوة، والمشتريات المشتركة. بلا تسجيل، بلا تتبع، فقط حساب واضح.",
      },
    },
  },
} as const

export const siteArabic = {
  name: "وليد الحامد",
  title: "منتجات · بيانات · تنفيذ",
  headline: "أبني منتجات وأنظمة، وأقود العمل من الفكرة إلى الأثر.",
  tagline: "منتجات · بيانات · كتابة",
  description:
    "موقع وليد الحامد: كتابة وتجارب وأدوات صغيرة بطابع Terminal.",
  bio: [
    "أتعامل مع المشكلات الصعبة بطريقة عملية: منتجات AI، فرق بيانات، أقسام تبدأ من الصفر، ونتائج تصل للاستخدام بدل أن تبقى في العروض.",
    "أعمل عند تقاطع المنتج والبيانات والتنفيذ: أصمم ما يستخدمه الناس، أقود فرقًا متعددة التخصصات، وأبني قرارات قابلة للقياس.",
  ],
  location: "السعودية",
  stats: [
    { label: "منتجات", value: "10+" },
    { label: "جهات", value: "20+" },
    { label: "جوائز هاكاثون", value: "3" },
    { label: "النهج", value: "ابنِ · أطلق · حسّن" },
  ],
  experience: [
    {
      period: "أبريل 2026 - الآن",
      role: "رئيس قسم People Lab، People Analytics والبحث",
      company: "شركة علم",
      summary:
        "قيادة People Lab كمنصة بيانات وبحث تساعد على فهم الإرهاق، الدوران الوظيفي، والارتباط قبل أن تتحول إلى مشكلات متأخرة.",
    },
    {
      period: "2025 - أبريل 2026",
      role: "قائد الثقافة وتجربة الموظف",
      company: "شركة علم",
      summary:
        "بناء منتج AI وفّر أكثر من مليون ريال وخفّض التذاكر بنسبة 48%. قيادة تجربة موظف تخدم نحو 7,000 موظف ودعم تكاملات اندماج واسعة.",
    },
    {
      period: "2023 - 2025",
      role: "مستشار الثقافة وتجربة الموظف",
      company: "شركة علم",
      summary:
        "بناء لوحات People Analytics ونماذج تنبؤية وبرامج تمكين للـ AI. قيادة فريق علم بيانات لإطلاق منتجات داخلية من الصفر.",
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
        "بناء لوحات Power BI ومنتجات تحليلية، وكتابة أنظمة تشغيل، وحل مشكلات تشغيلية بمنهج قائم على البيانات.",
    },
  ],
  skills: [
    "Product Building",
    "AI Products",
    "People Analytics",
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
