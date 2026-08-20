// Single source of truth for Hood Goblins content + assets.
// Update these constants in one place; every component reads from here.

export const SOCIAL_X = "https://x.com/HoodGoblins"

// The pinned tweet URL is not finalized yet. Change it here once only and
// every WL task link that points at the pin tweet updates automatically.
export const PINNED_TWEET = "https://x.com/HoodGoblins"

export const ASSETS = {
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HG%20PFP-iHSlN832P76kDMmVgh0D0mpMNRRW3i.jpg",
  hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HG%20HERO%20ILLUSTRATION-OpfUr2AE3hLHjDC7F7GIUdZpSCrqTG.png",
  goblins: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Goblin%201-UTYojgo2Q6ahv6ATX1YKlJeJa8aYWi.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Goblin%202-5tQU4G2TkmwsFkKAGgWo3o5a7kRq0L.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Goblin%203-y5xVSODjSx9MoXN31sg9JyC5MqCFrW.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Goblin%204-iLWFQIJGJoPBSE6e2S1xIj5luaWD60.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Goblin%205-d6wYKZW2FdlDUiVUl2Rqpv2423SjSI.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Goblin%206-ReBgtpxpKtD6F47hUfk4VgvlOWXrBh.png",
  ],
}

export const NAV_SECTIONS = [
  { id: "hood", label: "The Hood" },
  { id: "gallery", label: "Gallery" },
  { id: "roadmap", label: "Roadmap" },
]

export const STATS = [
  { label: "Supply", value: "1,500" },
  { label: "Chain", value: "Robinhood" },
  { label: "Mint", value: "TBA" },
]

export const ROADMAP = [
  {
    phase: "Phase 1",
    title: "Scouting the Turf",
    text: "Socials live, THE HOOD goes up, apply for WL opens. Early calls and marketing push to get the right eyes on us before mint.",
  },
  {
    phase: "Phase 2",
    title: "Recruiting the Goblins",
    text: "Collabs, community building, first sneak peeks of the art. This is where the hood starts filling up.",
  },
  {
    phase: "Phase 3",
    title: "The Mint",
    text: "1,500 Hood Goblins go live on Robinhood chain.",
  },
  {
    phase: "Phase 4",
    title: "Splitting the Loot",
    text: "NFTs sitting in treasury get handed back out to holders as rewards. Royalty revenue gets shared back too. Goblins don't hoard, they redistribute.",
  },
  {
    phase: "Phase 5",
    title: "Buried Treasure",
    text: "There's something buried deep in the hood. The goblins know. They're not telling yet.",
  },
]
