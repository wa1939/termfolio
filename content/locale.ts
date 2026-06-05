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
          "Enter who paid, how many portions each person covers, and copy a clear note for the group.",
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
      { path: "/blog", number: "02", label: "الدفتر", command: "ls posts/" },
      { path: "/lab", number: "03", label: "المعمل", command: "ls lab/" },
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
        "sys.status: أشتغل على People Analytics ومنتجات AI، وأحوّل الأفكار الصعبة إلى أشياء يستخدمها الناس",
      navLinks: [
        { href: "/blog", label: "(01) الدفتر // مقالات وخربشات" },
        { href: "/lab", label: "(02) المعمل // خربشات وتجارب وقت الفراغ" },
        { href: "/tools", label: "(03) الأدوات // أشياء صغيرة تنفع وقت الحاجة" },
        { href: "/about", label: "(04) عنّي // الخبرة وطريقة العمل" },
        { href: "/contact", label: "(05) تواصل // اكتب إذا الموضوع يستاهل" },
      ],
      executiveTitle: "ما وراء الواجهة",
      executiveCopy:
        "الواجهة بطابع Terminal، لكن خلفها عمل جاد: People Analytics، منتجات AI، تحول مؤسسي، وتجارب وصلت للاستخدام لا للعروض.",
      recentEntries: "أحدث ما في الدفتر",
      latest: "الأحدث",
      readTime: "د",
    },
    blog: {
      title: "الدفتر",
      description:
        "دفتر أفكاري وخربشاتي: مقالات، ملاحظات، وأشياء أكتبها عن المنتج، التقنية، التحول، وما أتعلمه وأنا أحاول تحويل الأفكار إلى شيء يعمل.",
      searchLabel: "بحث",
      searchMeta: "grep archive",
      searchPlaceholder: "اكتب موضوعًا أو عبارة أو أداة",
      searchButton: "ابحث",
      allPosts: "كل مقالات الدفتر",
      hideInsights: "إخفاء اللوحة",
      showInsights: "إظهار اللوحة",
      featured: "مختار",
      read: "اقرأ",
      noPosts: "لا توجد مقالات بهذا البحث. جرّب كلمة أخرى أو ارجع لكل الدفتر.",
      clearFilter: "مسح الفلتر",
    },
    post: {
      back: "العودة للدفتر",
      entryType: "مقال من الدفتر",
      begin: "بداية النص",
      eof: "انتهى النص",
      tags: "الوسوم:",
      commentsCommand: "node comments.js",
      relatedCommand: "find ./related-posts",
      newsletterTitle: "$ subscribe --no-spam --pinky-promise",
      newsletterMeta: "النشرة",
      newsletterLead:
        "أكتب من الدفتر: مقالات وخربشات عن بناء المنتجات، قيادة الفرق، والأفكار التي لا تتضح إلا بعد التجربة.",
      newsletterCopy:
        "تنبيه خفيف عند إضافة مقال أو ملاحظة جديدة. لا بريد متكرر، ولا وعود نشرة أسبوعية لا أحد يلتزم بها.",
      newsletterFooter: "بريدك عندك. أستخدمه فقط للتنبيه.",
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
      focusCopy: "خلّ النص في الوسط واترك الباقي على جنب",
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
      title: "مستعجل؟ خذ الزبدة",
      meta: "قراءة سريعة",
      intro:
        "لو وصلت هنا وقلت: المختصر المفيد؟ هذه النسخة لك: أهم ما في المقال، بلا ما ترسلها لأحد يلخّصها.",
      cards: [
        { label: "الزبدة", helper: "الفكرة الأساسية في دقيقة." },
        { label: "لا تنسَ", helper: "نقاط تستحق تبقى معك." },
        { label: "اقفز إلى", helper: "أماكن تبدأ منها لو وقتك ضيق." },
        { label: "ثلاث كلمات", helper: "كلمات تحفظ روح المقال." },
      ],
      empty: "هذا المقال قصير بما يكفي لقراءته مباشرة.",
      fullRead: "قراءة كاملة",
      savedTime: "وفّرتها لو اكتفيت بالزبدة",
    },
    lab: {
      title: "المعمل",
      eyebrow: "$ ls ./lab",
      description:
        "هنا منطقة أعبث فيها، وخربشات أسويها وقت الفراغ. ليست شيئًا رسميًا ولا واجهة مشاريع؛ فقط أشياء أبنيها للمتعة، ولأفهم أكثر.",
      viewAll: "افتح المعمل",
      repo: "المستودع",
      stack: "التقنيات",
      disclaimer: "خربشات وقت الفراغ",
    },
    tools: {
      title: "أدوات تنفعك",
      eyebrow: "$ open ./tools",
      description:
        "أدوات صغيرة تعمل فورًا، بلا حسابات ولا ملفات تُرفع للسيرفر.",
      openTool: "افتح الأداة",
      allTools: "كل الأدوات",
      indexTitle: "أدوات بسيطة ترجع لها",
      indexDescription:
        "أشياء خفيفة للحياة اليومية: رابط أقصر، QR، واتساب، تقويم، صورة أصغر. بلا تسجيل ولا تعقيد.",
      splitter: {
        title: "مقسّم الفاتورة",
        description:
          "قسّم الفاتورة، أضف الخدمة أو الضريبة، وانسخ رسالة مرتبة للمجموعة.",
        routeTitle: "قسّم الفاتورة",
        routeDescription:
          "للقهوة والعشاء والطلبات المشتركة. أدخل من دفع، وعدد حصص كل شخص، ثم انسخ رسالة واضحة للمجموعة.",
      },
    },
  },
} as const

export const siteArabic = {
  name: "وليد الحامد",
  title: "منتجات · بيانات · تنفيذ",
  headline: "أحوّل بيانات الناس والثقافة إلى منتجات وقرارات أوضح.",
  tagline: "منتجات · بيانات · كتابة",
  description:
    "موقع وليد الحامد: كتابة وتجارب وأدوات صغيرة بواجهة Terminal.",
  bio: [
    "مستشار تحول وقائد في People Analytics & Research. عملت مع أكثر من 20 جهة في المنطقة على ربط الثقافة وتجربة الموظف والاستراتيجية بنتائج قابلة للقياس، خصوصًا في حلول الموارد البشرية المدعومة بالذكاء الاصطناعي وعمليات الدمج والاستحواذ.",
    "أشتغل في المساحة التي يلتقي فيها المنتج بالبيانات والتنفيذ: أبني منصات ولوحات تنبؤية، أقود فرقًا متعددة التخصصات، وأحوّل البيانات المتفرقة داخل المنظمة إلى معرفة تساعد القادة على اتخاذ قرار أفضل.",
    "أحمل شهادات PMP وPMI-RMP وProsci وغيرها، لكن الأهم بالنسبة لي أن الشهادة تتحول إلى طريقة عمل: مشكلة واضحة، نموذج قابل للتنفيذ، ونتيجة يلمسها الناس.",
  ],
  location: "السعودية",
  stats: [
    { label: "منتجات بُنيت", value: "10+" },
    { label: "جهات تأثرت", value: "20+" },
    { label: "جوائز هاكاثون", value: "3" },
    { label: "الطريقة", value: "ابنِ · أطلق · حسّن" },
  ],
  experience: [
    {
      period: "أبريل 2026 - الآن",
      role: "رئيس قسم People Lab، People Analytics & Research",
      company: "شركة علم",
      summary:
        "أقود People Lab كمنصة بيانات وبحث مركزية توحّد البيانات المتفرقة داخل المنظمة في محرك واحد للقرار. نطوّر نماذج تنبؤية تقرأ مؤشرات الإرهاق والدوران والارتباط قبل أن تظهر متأخرة في التقارير، ونبني شراكات بحثية مع جامعات سعودية لإثراء المحتوى العربي في الموارد البشرية.",
    },
    {
      period: "2025 - أبريل 2026",
      role: "قائد الثقافة وتجربة الموظف",
      company: "شركة علم",
      summary:
        "قدت وظائف الثقافة وتجربة الموظف عبر علم وشركاتها التابعة لما يقارب 7,000 موظف. عملت على منتج AI داخلي وفّر أكثر من مليون ريال وخفّض التذاكر 48%، وقدت مسار الموارد البشرية في اندماج شمل قرابة 3,000 موظف.",
    },
    {
      period: "2023 - 2025",
      role: "مستشار الثقافة وتجربة الموظف",
      company: "شركة علم",
      summary:
        "قدت مشروع نجد، أول مساعد ذكاء اصطناعي سعودي بالكامل داخل علم ومتكامل مع Microsoft Teams، وبنيت لوحات People Analytics ونماذج تنبؤية وبرامج تمكين AI أطلقت منتجات داخلية من الصفر.",
    },
    {
      period: "2022 - 2023",
      role: "مستشار ومحلل أعمال",
      company: "باسقات العربية للاستشارات",
      summary:
        "عملت على أكثر من 15 مشروع تحول وثقافة تنظيمية مع جهات مثل STC Group وMobily وSANS وGEA، من صياغة خطط التغيير وأطر التنفيذ إلى تحسين العمليات وبناء حلول تعتمد على البيانات.",
    },
    {
      period: "2021 - 2022",
      role: "مستشار مستقل",
      company: "مشاريع مستقلة وشراكات",
      summary:
        "قدمت خبرة متخصصة في مشاريع مستقلة وشراكات استشارية: لوحات Power BI لدوران الموظفين، أدلة تشغيل تفاعلية، وتحسين عمليات بمنهج يبدأ من البيانات وينتهي بمخرجات قابلة للتطبيق.",
    },
  ],
  skills: [
    "بناء المنتجات",
    "منتجات AI",
    "People Analytics",
    "النمذجة التنبؤية",
    "البحث المؤسسي",
    "تنفيذ الاستراتيجية",
    "قيادة الفرق",
    "الأتمتة بـ Python",
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
