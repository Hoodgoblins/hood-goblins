"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ASSETS, NAV_SECTIONS, SOCIAL_X } from "@/lib/site"
import { XIcon } from "./x-icon"

export function Nav() {
  const [active, setActive] = useState(NAV_SECTIONS[0].id)
  const [menuOpen, setMenuOpen] = useState(false)
  const [underline, setUnderline] = useState({ left: 0, width: 0 })
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  // Scroll-spy: mark the section currently in view as active.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )
    NAV_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Slide the underline to sit beneath the active nav item.
  useEffect(() => {
    const el = linkRefs.current[active]
    if (el) setUnderline({ left: el.offsetLeft, width: el.offsetWidth })
  }, [active])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="#hood" className="flex items-center gap-3" aria-label="Hood Goblins home">
          <img
            src={ASSETS.logo || "/placeholder.svg"}
            alt="Hood Goblins logo"
            className="pixelated h-10 w-10 border-2 border-foreground object-cover"
          />
          <span className="font-display text-lg font-bold leading-none tracking-tight">Hood Goblins</span>
        </Link>

        <nav className="relative hidden items-center gap-8 md:flex">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              ref={(el) => {
                linkRefs.current[section.id] = el
              }}
              href={`#${section.id}`}
              className={`font-display text-base font-medium transition-opacity hover:opacity-100 ${
                active === section.id ? "opacity-100" : "opacity-60"
              }`}
            >
              {section.label}
            </a>
          ))}
          <span
            aria-hidden
            className="absolute -bottom-2 h-[3px] bg-foreground transition-all duration-300 ease-out"
            style={{ left: underline.left, width: underline.width }}
          />
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SOCIAL_X}
            target="_blank"
            rel="noreferrer"
            aria-label="Hood Goblins on X"
            className="hidden h-10 w-10 items-center justify-center border-2 border-foreground transition-transform hover:-translate-y-0.5 md:flex"
          >
            <XIcon className="h-4 w-4" />
          </a>
          <Link
            href="/apply"
            className="hidden border-2 border-foreground bg-foreground px-4 py-2.5 font-display text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 md:block"
          >
            Apply for WL
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center border-2 border-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="font-display text-lg font-bold leading-none">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t-2 border-foreground px-5 py-4 md:hidden">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
              className="border-b border-foreground/20 py-3 font-display text-lg font-medium"
            >
              {section.label}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <Link
              href="/apply"
              onClick={() => setMenuOpen(false)}
              className="flex-1 border-2 border-foreground bg-foreground px-4 py-3 text-center font-display text-base font-semibold text-background"
            >
              Apply for WL
            </Link>
            <a
              href={SOCIAL_X}
              target="_blank"
              rel="noreferrer"
              aria-label="Hood Goblins on X"
              className="flex h-12 w-12 items-center justify-center border-2 border-foreground"
            >
              <XIcon className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
