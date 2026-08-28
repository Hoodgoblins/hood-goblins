import Link from "next/link"
import { SOCIAL_X } from "@/lib/site"

export function ApplicationsClosed() {
  return (
    <div className="border-2 border-foreground bg-primary/15 px-6 py-10 text-center md:px-10 md:py-14">
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl text-balance">
        Goblin List is locked.
      </h2>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed opacity-80">
        Applications are closed. If you made the list, you&apos;ll know soon. If you didn&apos;t, the hood&apos;s not
        done yet, keep watching{" "}
        <Link
          href={SOCIAL_X}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-4"
        >
          @HoodGoblins
        </Link>
        .
      </p>
    </div>
  )
}
