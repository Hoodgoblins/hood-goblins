"use client"

import { useState } from "react"
import { ASSETS } from "@/lib/site"

// Slight, natural rotations per depth so the stack reads as physical paper
// cards rather than identical tiles. Index 0 = front card.
const DEPTH = [
  { x: 0, y: 0, rotate: -3, scale: 1 },
  { x: 18, y: 14, rotate: 3, scale: 0.97 },
  { x: -14, y: 26, rotate: -2, scale: 0.94 },
  { x: 12, y: 38, rotate: 4, scale: 0.91 },
  { x: -8, y: 50, rotate: -4, scale: 0.88 },
  { x: 6, y: 62, rotate: 2, scale: 0.85 },
]

export function GalleryStack() {
  // `stack` holds goblin indices; the first entry is the front card.
  const [stack, setStack] = useState(() => ASSETS.goblins.map((_, i) => i))

  function advance() {
    setStack(([first, ...rest]) => [...rest, first])
  }

  return (
    <section id="gallery" className="border-y-2 border-foreground bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">Spelunking Finds</h2>

        <div className="mt-14 flex flex-col items-center gap-8">
          <div className="relative h-[360px] w-full max-w-[320px] md:h-[440px] md:max-w-[380px]">
            {stack.map((goblinIndex, position) => {
              const depth = DEPTH[position] ?? DEPTH[DEPTH.length - 1]
              const isFront = position === 0
              return (
                <button
                  key={goblinIndex}
                  type="button"
                  onClick={isFront ? advance : undefined}
                  tabIndex={isFront ? 0 : -1}
                  aria-hidden={!isFront}
                  aria-label={isFront ? "Show next goblin" : undefined}
                  className={`absolute inset-0 border-2 border-background bg-cream p-3 transition-all duration-500 ease-out ${
                    isFront ? "cursor-pointer shadow-[8px_8px_0_0_rgba(0,0,0,0.35)]" : "shadow-none"
                  }`}
                  style={{
                    transform: `translate(${depth.x}px, ${depth.y}px) rotate(${depth.rotate}deg) scale(${depth.scale})`,
                    zIndex: stack.length - position,
                  }}
                >
                  <img
                    src={ASSETS.goblins[goblinIndex] || "/placeholder.svg"}
                    alt={`Hood Goblin ${goblinIndex + 1}`}
                    className="pixelated block h-full w-full object-cover"
                    draggable={false}
                  />
                </button>
              )
            })}
          </div>

          <p className="font-display text-sm font-medium uppercase tracking-wide text-background/60">
            Tap the card to dig up the next find
          </p>
        </div>
      </div>
    </section>
  )
}
