import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Pixelify_Sans, Space_Grotesk } from "next/font/google"
import { ASSETS } from "@/lib/site"
import "./globals.css"

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixel",
})

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
})

export const metadata: Metadata = {
  title: "Hood Goblins",
  description:
    "Small, green, and up to no good. 1,500 pixel-art goblins raiding Robinhood chain. Whitelist applications open now.",
  generator: "v0.app",
  openGraph: {
    title: "Hood Goblins",
    description: "Small, green, and up to no good. 1,500 goblins raiding Robinhood chain.",
    images: [ASSETS.hero],
  },
  icons: { icon: ASSETS.logo },
}

export const viewport: Viewport = { colorScheme: "light", themeColor: "#c6ff00" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pixel.variable} ${grotesk.variable} bg-background`}>
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
