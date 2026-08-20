import { ROADMAP } from "@/lib/site"

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">Roadmap</h2>

      <ol className="mt-12 flex flex-col gap-5">
        {ROADMAP.map((item) => (
          <li
            key={item.phase}
            className="border-2 border-foreground bg-cream p-6 text-cream-foreground transition-transform hover:-translate-y-1 md:grid md:grid-cols-[220px_1fr] md:gap-8 md:p-8"
          >
            <div>
              <span className="inline-block bg-foreground px-3 py-1 font-display text-sm font-semibold uppercase tracking-wide text-background">
                {item.phase}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight md:text-3xl text-balance">
                {item.title}
              </h3>
            </div>
            <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-80 md:mt-1">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
