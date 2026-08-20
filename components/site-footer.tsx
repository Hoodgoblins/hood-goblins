import { ASSETS, SOCIAL_X } from "@/lib/site"
import { XIcon } from "./x-icon"

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground px-5 py-10 text-background md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <img
            src={ASSETS.logo || "/placeholder.svg"}
            alt="Hood Goblins logo"
            className="pixelated h-10 w-10 border-2 border-background object-cover"
          />
          <span className="font-display text-xl font-bold">Hood Goblins</span>
        </div>
        <a
          href={SOCIAL_X}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border-2 border-background px-4 py-2.5 font-display text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          <XIcon className="h-4 w-4" />
          Follow on X
        </a>
      </div>
    </footer>
  )
}
