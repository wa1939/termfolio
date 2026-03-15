import Image from "next/image"
import Link from "next/link"
import MinimalNav from "@/components/minimal-nav"
import TerminalFooter from "@/components/terminal-footer"
import InteractiveTerminal from "@/components/interactive-terminal"
import LiveClock from "@/components/live-clock"
import { formatPostDate } from "@/lib/format-post-date"
import { getPosts } from "@/lib/notion"

const wordmark = [
  "+-----------------------------------+",
  "|  WALEED ALGHAMDI // WAOK         |",
  "|  STRATEGY  SYSTEMS  JOURNAL      |",
  "+-----------------------------------+",
].join("\n")

export default async function Home() {
  const posts = await getPosts(4)

  return (
    <div className="min-h-screen bg-term-black text-term-white font-mono flex flex-col">
      <MinimalNav />
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[url('/noise.png')] animate-noise" />

      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <section className="cli-frame overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-term-line px-4 py-3 text-xs uppercase tracking-[0.16em] text-term-gray">
              <div>
                <span className="text-term-green">waok</span> on <LiveClock />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://github.com/wa1939" target="_blank" rel="noopener noreferrer" className="hover:text-term-cyan">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/waleedalghamdi/" target="_blank" rel="noopener noreferrer" className="hover:text-term-cyan">
                  LinkedIn
                </a>
                <Link href="/about" className="hover:text-term-cyan">
                  How I work
                </Link>
              </div>
            </div>

            <div className="space-y-8 p-5 md:p-6">
              <div className="grid gap-8 xl:grid-cols-[1.05fr_0.85fr] xl:items-start">
                <div className="space-y-6">
                  <pre className="overflow-x-auto text-[clamp(1.05rem,2vw,1.45rem)] leading-[1.05] text-term-white">{wordmark}</pre>

                  <div className="grid gap-y-3 text-sm leading-7 md:grid-cols-[130px_minmax(0,1fr)] md:gap-x-6">
                    <div className="text-term-gray">name</div>
                    <div className="text-term-white">Waleed Alghamdi</div>
                    <div className="text-term-gray">location</div>
                    <div className="text-term-white">Saudi Arabia</div>
                    <div className="text-term-gray">handle</div>
                    <div className="text-term-white">waok</div>
                    <div className="text-term-gray">focus</div>
                    <div className="text-term-white">strategy, systems, digital transformation, and thoughtful internet craft</div>
                  </div>

                  <div className="cli-rule" />

                  <div className="space-y-3">
                    <p className="cli-soft-copy max-w-3xl">
                      I work between strategy and execution. This site is part portfolio, part journal, part command line - a place to share how I think, what I build, and what I learn while helping organizations move better.
                    </p>
                    <p className="cli-soft-copy max-w-3xl">
                      You can browse it like a normal website, or use the terminal below if you want the more technical path.
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] xl:grid-cols-1">
                  <div className="overflow-hidden border border-term-line bg-term-darker">
                    <div className="relative aspect-[5/4]">
                      <Image
                        src="/dbcf93d6-e01e-4308-bea1-11412058a5cd.webp"
                        alt="Waleed Alghamdi"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-term-black/65" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-xs uppercase tracking-[0.14em] text-term-white">
                        current transmission // consultant, builder, lifelong learner
                      </div>
                    </div>
                  </div>

                  <div className="cli-panel px-4 py-4 text-sm leading-7 text-term-gray">
                    <p>
                      <span className="text-term-green">$</span> type skills.txt
                    </p>
                    <p className="mt-2 text-term-white">change management // project leadership // product thinking</p>
                    <p>python // ai integration // dashboards // customer-centered problem solving</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-term-line pt-4 text-sm">
                <Link href="/blog" className="text-term-cyan hover:text-term-cyan-bright">
                  (01) journal // read the writing
                </Link>
                <Link href="/about" className="text-term-cyan hover:text-term-cyan-bright">
                  (02) about // open the dossier
                </Link>
                <Link href="/contact" className="text-term-cyan hover:text-term-cyan-bright">
                  (03) contact // book a conversation
                </Link>
              </div>

              <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <InteractiveTerminal />
                </div>

                <div className="space-y-4">
                  <div className="cli-topline">Recent entries</div>
                  <div className="overflow-hidden border border-term-line">
                    <div className="hidden grid-cols-[120px_minmax(0,1fr)_90px] gap-4 border-b border-term-line px-4 py-3 text-xs uppercase tracking-[0.16em] text-term-gray md:grid">
                      <span>date</span>
                      <span>entry</span>
                      <span>time</span>
                    </div>

                    <div className="space-y-0">
                      {posts.map((post, index) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className={`cli-table-row block px-4 py-4 ${index === 0 ? "cli-table-row--active" : ""}`}>
                            <div className="grid gap-3 md:grid-cols-[120px_minmax(0,1fr)_90px] md:items-start">
                            <div className="text-xs uppercase tracking-[0.14em] text-term-gray">{formatPostDate(post.date)}</div>
                            <div>
                              <h2 className="text-sm font-semibold text-term-white md:text-base">{post.title}</h2>
                              <p className="mt-1 text-sm leading-7 text-term-gray">{post.excerpt}</p>
                            </div>
                            <div className="text-sm text-term-gray">{post.readingTime} min</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <TerminalFooter />
    </div>
  )
}
