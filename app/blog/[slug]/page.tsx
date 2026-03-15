import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Eye, User } from "lucide-react"
import { notFound } from "next/navigation"
import MinimalNav from "@/components/minimal-nav"
import TerminalFooter from "@/components/terminal-footer"
import TableOfContents from "@/components/table-of-contents"
import NotionRender from "@/components/notion-render"
import TerminalCommentSection from "@/components/terminal-comment-section"
import BlogPostCard from "@/components/blog-post-card"
import { formatPostDate } from "@/lib/format-post-date"
import { getPostBySlug, getPosts } from "@/lib/notion"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getPosts()
  const relatedPosts = allPosts.filter((candidate) => candidate.id !== post.id && candidate.tags.some((tag: string) => post.tags.includes(tag))).slice(0, 2)

  return (
    <div className="min-h-screen bg-term-black text-term-white font-mono flex flex-col">
      <MinimalNav />
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('/noise.png')] animate-noise" />

      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-term-gray transition-colors hover:text-term-cyan">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-term-green">$</span> cd ../blog
          </Link>

          <article className="cli-frame overflow-hidden">
            <div className="flex items-center justify-between border-b border-term-line px-4 py-3 text-xs uppercase tracking-[0.16em] text-term-gray">
              <span>{post.slug}.md</span>
              <span>journal entry</span>
            </div>

            <div className="grid gap-8 p-5 lg:grid-cols-[minmax(0,1fr)_250px] lg:p-6">
              <div className="space-y-8">
                <header className="space-y-5 border-b border-term-line pb-6">
                  <div className="text-sm text-term-gray">
                    <span className="text-term-green">$</span> <span className="text-term-cyan">cat</span> {post.slug}.md
                  </div>

                  <h1 className="text-3xl font-semibold tracking-[-0.04em] text-term-white md:text-4xl">{post.title}</h1>

                  <div className="grid gap-3 text-sm text-term-gray md:grid-cols-2 xl:grid-cols-4">
                    <div className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-term-cyan" />
                      {formatPostDate(post.date)}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <User className="h-4 w-4 text-term-cyan" />
                      {post.author}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-term-cyan" />
                      {post.readingTime} min read
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Eye className="h-4 w-4 text-term-cyan" />
                      {post.views || 0} views
                    </div>
                  </div>

                  {post.excerpt ? <p className="cli-soft-copy max-w-3xl">{post.excerpt}</p> : null}

                  {post.coverImage ? (
                    <div className="overflow-hidden border border-term-line">
                      <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} width={1200} height={680} className="h-auto w-full object-cover" />
                    </div>
                  ) : null}
                </header>

                <div className="post-content max-w-none">
                  <NotionRender contents={post.contents} />

                  <div className="mt-8 flex flex-wrap gap-2 border-t border-term-line pt-5 text-xs uppercase tracking-[0.14em] text-term-gray">
                    {post.tags.map((tag: string, index: number) => (
                        <span key={`${tag}-${index}`} className="border border-term-line px-2.5 py-1">
                          {tag}
                        </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="space-y-6">
                <TableOfContents contents={post.contents} />
                <div className="cli-panel px-4 py-4 text-sm leading-7 text-term-gray">
                  <div className="cli-topline">reading mode</div>
                  <p className="mt-2">This article keeps the shell around it, but the body shifts into a calmer reading surface.</p>
                </div>
              </aside>
            </div>
          </article>

          {relatedPosts.length > 0 ? (
            <section className="mt-10 space-y-5">
              <div className="text-sm text-term-gray">
                <span className="text-term-green">$</span> <span className="text-term-cyan">find</span> ./related-posts
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-10 space-y-5">
            <div className="text-sm text-term-gray">
              <span className="text-term-green">$</span> <span className="text-term-cyan">node</span> comments.js
            </div>
            <TerminalCommentSection />
          </section>
        </div>
      </main>

      <TerminalFooter />
    </div>
  )
}
