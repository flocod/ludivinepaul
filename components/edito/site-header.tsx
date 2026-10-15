import Link from "next/link"

import { Logo } from "@/components/brand/logo"
import { Container } from "@/components/edito/primitives"
import { MainNav, MobileMenu } from "@/components/edito/site-nav"
import { WhatsAppLink } from "@/components/site/contact-links"
import { wedding } from "@/lib/wedding"

export function SiteHeader() {
  return (
    <header className="relative z-20">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          aria-label={`${wedding.couple.display}, accueil`}
          className="-mx-1 rounded-sm px-1"
        >
          {/* « Ludivine & Paul » est bien plus long qu'« Aparté » : le
              mot-symbole descend d'un cran à chaque palier pour ne pas
              percuter le bouton Menu en 320 px. */}
          <Logo className="[&_svg]:h-[1.875rem] [&>span:last-child]:text-[1.125rem] sm:[&>span:last-child]:text-[1.375rem] lg:[&>span:last-child]:text-[1.5rem]" />
        </Link>

        <MainNav />

        <div className="flex items-center gap-2">
          <WhatsAppLink
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
            message="Bonjour ! Nous serons là le 12 décembre."
          >
            Nous écrire
          </WhatsAppLink>
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}
