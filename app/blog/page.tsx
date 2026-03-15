import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import MinimalNav from "@/components/minimal-nav"
import SearchPosts from "@/components/search-posts"
import TerminalFooter from "@/components/terminal-footer"
import { formatPostDate } from "@/lib/format-post-date"
import { getPosts } from "@/lib/notion"

interface BlogPageProps {
  searchParams?: Promise<{ q?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const query = resolvedSearchParams?.q?.trim().toLowerCase() ?? ""
  const allPosts = await getPosts()

  const posts = query
    ? allPosts.filter((post) => {
        const haystack = [post.title, post.excerpt, post.author, ...post.tags].join(" ").toLowerCase()
        return haystack.includes(query)
      })
    : allPosts

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
              <span>posts.sh</span>
              <span>{query ? `search // ${query}` : "journal archive"}</span>
            </div>

            <div className="space-y-6 p-5 md:p-6">
              <div className="space-y-3">
                <div className="text-sm text-term-gray">
                  <span className="text-term-green">$</span> <span className="text-term-cyan">ls</span> posts/
                </div>
                <h1 className="text-3xl font-semibold tracking-[-0.04em] text-term-white md:text-4xl">Journal archive</h1>
                <p className="cli-soft-copy max-w-3xl">
                  Thoughts, essays, tutorials, and field notes on strategy, technology, digital transformation, and the craft of making complicated things feel clear.
                </p>
              </div>

              <SearchPosts />

              {posts.length === 0 ? (
                <div className="cli-panel px-4 py-5 text-sm leading-7 text-term-gray">
                  no entries match this query yet. try a broader phrase or clear the search and browse the full archive.
                </div>
              ) : (
                <div className="overflow-hidden border border-term-line">
                  <div className="hidden grid-cols-[140px_minmax(0,1fr)_130px_140px] gap-4 border-b border-term-line px-4 py-3 text-xs uppercase tracking-[0.16em] text-term-gray md:grid">
                    <span>date</span>
                    <span>entry</span>
                    <span>time</span>
                    <span>topic</span>
                  </div>

                  <div className="space-y-0">
                    {posts.map((post, index) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className={`cli-table-row block px-4 py-4 ${index === 0 ? "cli-table-row--active" : ""}`}
                      >
                        <div className="grid gap-3 md:grid-cols-[140px_minmax(0,1fr)_130px_140px] md:items-start">
                          <div className="text-xs uppercase tracking-[0.14em] text-term-gray">{formatPostDate(post.date)}</div>
                          <div>
                            <h2 className="text-base font-semibold text-term-white md:text-lg">{post.title}</h2>
                            <p className="mt-2 text-sm leading-7 text-term-gray">{post.excerpt}</p>
                          </div>
                          <div className="text-sm text-term-gray">{post.readingTime} min read</div>
                          <div className="text-sm text-term-cyan">{post.tags[0] ?? "journal"}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <TerminalFooter />
    </div>
  )
}
