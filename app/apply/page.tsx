import Link from "next/link"
import type { Metadata } from "next"
import { ApplicationForm } from "@/components/application-form"
import { ApplicationsClosed } from "@/components/applications-closed"
import { APPLICATIONS_OPEN, ASSETS } from "@/lib/site"

export const metadata: Metadata = {
  title: "Apply for WL — Hood Goblins",
  description: "Complete the tasks and submit your wallet to apply for the Hood Goblins whitelist.",
}

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground md:px-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Hood Goblins home">
            <img
              src={ASSETS.logo || "/placeholder.svg"}
              alt="Hood Goblins logo"
              className="pixelated h-10 w-10 border-2 border-foreground object-cover"
            />
            <span className="font-display text-lg font-bold">Hood Goblins</span>
          </Link>
          <Link href="/" className="font-display text-sm font-semibold underline-offset-4 hover:underline">
            Back to the hood
          </Link>
        </div>

        <div className="mt-10">
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl text-balance">Apply for WL</h1>
          <p className="mt-4 text-base leading-relaxed opacity-80">
            {APPLICATIONS_OPEN
              ? "Complete each task below, then submit your wallet to apply."
              : "The window's shut, for now."}
          </p>
        </div>

        <div className="mt-10">{APPLICATIONS_OPEN ? <ApplicationForm /> : <ApplicationsClosed />}</div>
      </div>
    </main>
  )
}
