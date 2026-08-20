import { GalleryStack } from "@/components/gallery-stack"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { Roadmap } from "@/components/roadmap"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <GalleryStack />
      <Roadmap />
      <SiteFooter />
    </main>
  )
}
