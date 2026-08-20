import type { ReactNode } from "react"

export function ApplyTask({
  number,
  title,
  children,
}: {
  number: number
  title: string
  children: ReactNode
}) {
  return (
    <li className="border-2 border-foreground bg-cream p-5 text-cream-foreground md:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 flex-none items-center justify-center border-2 border-foreground bg-foreground font-display text-base font-bold text-background">
          {number}
        </span>
        <div className="flex-1">
          <p className="font-display text-lg font-semibold leading-snug">{title}</p>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </li>
  )
}
