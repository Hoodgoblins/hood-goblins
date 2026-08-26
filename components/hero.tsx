"use client"

import Link from "next/link"
import { useRef } from "react"
import { ASSETS, STATS } from "@/lib/site"

export function Hero() {
  const panelRef = useRef<HTMLDivElement>(null)

  // Restrained mouse tilt so the scene feels physical, not over-animated.
  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const panel = panelRef.current
    if (!panel) return
    const rect = panel.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    panel.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`
  }

  function resetTilt() {
    if (panelRef.current) panelRef.current.style.transform = ""
  }

  return (
    <section id="hood" className="mx-auto max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div>
          <span className="inline-block border-2 border-foreground bg-cream px-3 py-1 font-display text-sm font-semibold text-cream-foreground">
            Whitelist open now
          </span>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-balance">
            Small, green, and up to no good.
          </h1>
          <p className="mt-5 font-display text-xl font-medium md:text-2xl text-pretty">
            3,000 goblins raiding Robinhood chain.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed opacity-80">
            Hood Goblins is a 3,000-piece pixel art collection built on Robinhood chain. Small, sharp, and always up to
            something. Whitelist applications are open now.
          </p>
          <div className="mt-8">
            <Link
              href="/apply"
              className="inline-block border-2 border-foreground bg-foreground px-7 py-4 font-display text-lg font-semibold text-background transition-transform hover:-translate-y-1"
            >
              Apply for WL
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-sm font-medium uppercase tracking-wide opacity-60">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold leading-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          ref={panelRef}
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          className="relative border-2 border-foreground bg-cream shadow-[10px_10px_0_0_var(--foreground)] transition-transform duration-200 ease-out will-change-transform"
        >
          <img
            src={ASSETS.hero || "/placeholder.svg"}
            alt="Hood Goblins pixel-art scene: goblins hanging out on Hood Ave"
            className="pixelated block w-full"
          />
        </div>
      </div>
    </section>
  )
}
