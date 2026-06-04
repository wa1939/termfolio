import { BookOpen, ListChecks, WholeWord } from "lucide-react"
import type { Post } from "@/lib/posts"
import { localeCopy, type Locale } from "@/content/locale"

interface ArticleDigestProps {
  post: Post
  locale?: Locale
}

const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "this",
  "that",
  "your",
  "you",
  "are",
  "was",
  "were",
  "into",
  "about",
  "how",
  "why",
  "what",
])

function getThreeWords(post: Post) {
  const fromTags = post.tags.slice(0, 3)
  if (fromTags.length >= 3) return fromTags

  const fromTitle = post.title
    .split(/\s+/)
    .map((word) => word.replace(/[^\p{L}\p{N}-]/gu, "").toLowerCase())
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word))
    .slice(0, 3 - fromTags.length)

  return [...fromTags, ...fromTitle].slice(0, 3)
}

export default function ArticleDigest({ post, locale = "en" }: ArticleDigestProps) {
  const copy = localeCopy[locale]
  const headings = post.headings.slice(0, 3)
  const threeWords = getThreeWords(post)
  const isRtl = locale === "ar"

  const cards = [
    {
      label: copy.digest.cards[0].label,
      helper: copy.digest.cards[0].helper,
      icon: BookOpen,
      body: post.excerpt || copy.digest.empty,
    },
    {
      label: copy.digest.cards[1].label,
      helper: copy.digest.cards[1].helper,
      icon: ListChecks,
      body: headings.length > 0 ? headings.map((heading) => heading.text).join(" / ") : copy.digest.empty,
    },
    {
      label: copy.digest.cards[2].label,
      helper: copy.digest.cards[2].helper,
      icon: WholeWord,
      body: threeWords.length > 0 ? threeWords.join(" · ") : post.title,
    },
  ]

  return (
    <section className="rounded-lg border border-term-line bg-term-darker/70 p-4">
      <div className="flex flex-col gap-2 border-b border-term-line pb-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="cli-topline">{copy.digest.meta}</div>
          <h2 className="mt-1 text-xl font-semibold text-term-white">
            {copy.digest.title}
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.14em] text-term-gray" dir="ltr">
          {post.readingTime} min full read
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <article key={card.label} className="rounded-md border border-term-line bg-term-black p-4">
              <div className="flex items-center gap-2 text-term-cyan">
                <Icon className="h-4 w-4" />
                <h3 className="text-sm font-semibold">{card.label}</h3>
              </div>
              <p className="mt-2 text-xs leading-6 text-term-gray">
                {card.helper}
              </p>
              <p className="mt-3 text-sm leading-7 text-term-white" dir={isRtl ? "rtl" : undefined}>
                {card.body}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
