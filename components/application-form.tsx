"use client"

import { useState, type FormEvent } from "react"
import { PINNED_TWEET, SOCIAL_X } from "@/lib/site"
import { supabase } from "@/lib/supabase"
import { ApplyTask } from "./apply-task"

type DoneKey = "follow" | "likeRt" | "comment" | "quote"

// A link the user opens, plus a manual "Done" acknowledgement toggle.
// There is intentionally no real X verification — these are self-reported.
function DoneAction({
  href,
  label,
  done,
  onToggle,
}: {
  href: string
  label: string
  done: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="border-2 border-foreground px-4 py-2.5 font-display text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        {label}
      </a>
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={done}
        className={`border-2 border-foreground px-4 py-2.5 font-display text-sm font-semibold transition-colors ${
          done ? "bg-foreground text-background" : "bg-cream text-cream-foreground"
        }`}
      >
        {done ? "✓ Done" : "Mark done"}
      </button>
    </div>
  )
}

const fieldClass =
  "w-full border-2 border-foreground bg-background px-4 py-3 text-foreground outline-none placeholder:opacity-40 focus:ring-2 focus:ring-foreground"

export function ApplicationForm() {
  const [done, setDone] = useState<Record<DoneKey, boolean>>({
    follow: false,
    likeRt: false,
    comment: false,
    quote: false,
  })
  const [fields, setFields] = useState({
    xHandle: "",
    commentLink: "",
    quoteLink: "",
    wallet: "",
  })
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const toggle = (key: DoneKey) => setDone((d) => ({ ...d, [key]: !d[key] }))
  const update = (key: keyof typeof fields, value: string) => setFields((f) => ({ ...f, [key]: value }))

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!done.follow || !done.likeRt || !done.comment || !done.quote) {
      setError("Mark every task as done before you submit.")
      return
    }
    if (!fields.xHandle.trim() || !fields.commentLink.trim() || !fields.quoteLink.trim() || !fields.wallet.trim()) {
      setError("Fill in your X handle, comment link, quote link, and wallet.")
      return
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(fields.wallet.trim())) {
      setError("That EVM wallet doesn't look right. It should start with 0x.")
      return
    }

    const payload = {
      x_handle: fields.xHandle.trim(),
      wallet_address: fields.wallet.trim(),
      comment_link: fields.commentLink.trim(),
      quote_link: fields.quoteLink.trim(),
    }

    setError("")
    setSubmitting(true)

    const { error: submitError } = await supabase.from("applications").insert([payload])

    setSubmitting(false)

    if (submitError) {
      console.error("[supabase] Failed to save application:", submitError)
      setError("Something went wrong submitting your application. Try again in a moment.")
      return
    }

    setSubmitted(true)
  }

  function applyAgain() {
    setDone({ follow: false, likeRt: false, comment: false, quote: false })
    setFields({ xHandle: "", commentLink: "", quoteLink: "", wallet: "" })
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="border-2 border-foreground bg-foreground p-8 text-background md:p-10">
        <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl text-balance">
          Application received. Don&apos;t tell the other goblins.
        </h2>
        <p className="mt-4 max-w-lg leading-relaxed text-background/75">
          Every application is reviewed by the team, not a bot. Miss a task or fake one, and you won&apos;t make the
          Goblin List.
        </p>
        <button
          type="button"
          onClick={applyAgain}
          className="mt-7 border-2 border-background px-5 py-3 font-display text-sm font-semibold transition-colors hover:bg-background hover:text-foreground"
        >
          Apply again
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ol className="flex flex-col gap-4">
        <ApplyTask number={1} title="Follow @HoodGoblins">
          <DoneAction href={SOCIAL_X} label="Open profile" done={done.follow} onToggle={() => toggle("follow")} />
        </ApplyTask>

        <ApplyTask number={2} title="Submit your X handle to verify the follow">
          <input
            className={fieldClass}
            placeholder="@yourhandle"
            value={fields.xHandle}
            onChange={(e) => update("xHandle", e.target.value)}
            autoComplete="off"
          />
        </ApplyTask>

        <ApplyTask number={3} title="Like and RT our pin tweet">
          <DoneAction href={PINNED_TWEET} label="Open pin tweet" done={done.likeRt} onToggle={() => toggle("likeRt")} />
        </ApplyTask>

        <ApplyTask number={4} title="Comment on the pin tweet">
          <DoneAction href={PINNED_TWEET} label="Open pin tweet" done={done.comment} onToggle={() => toggle("comment")} />
        </ApplyTask>

        <ApplyTask number={5} title="Submit your comment link">
          <input
            className={fieldClass}
            placeholder="https://x.com/..."
            value={fields.commentLink}
            onChange={(e) => update("commentLink", e.target.value)}
            autoComplete="off"
          />
        </ApplyTask>

        <ApplyTask number={6} title="Quote the pin tweet">
          <DoneAction href={PINNED_TWEET} label="Open pin tweet" done={done.quote} onToggle={() => toggle("quote")} />
        </ApplyTask>

        <ApplyTask number={7} title="Submit your quote link">
          <input
            className={fieldClass}
            placeholder="https://x.com/..."
            value={fields.quoteLink}
            onChange={(e) => update("quoteLink", e.target.value)}
            autoComplete="off"
          />
        </ApplyTask>

        <ApplyTask number={8} title="Submit your EVM wallet address">
          <input
            className={`${fieldClass} font-mono`}
            placeholder="0x..."
            value={fields.wallet}
            onChange={(e) => update("wallet", e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
        </ApplyTask>
      </ol>

      {error && (
        <p role="alert" className="mt-6 border-2 border-foreground bg-cream px-4 py-3 font-display text-sm font-semibold text-cream-foreground">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full border-2 border-foreground bg-foreground px-6 py-4 font-display text-lg font-semibold text-background transition-transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {submitting ? "Submitting..." : "Submit application"}
      </button>
    </form>
  )
}
