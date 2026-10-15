"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { WhatsAppLink } from "@/components/site/contact-links"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { mainNav, menuNav } from "@/lib/site"
import { wedding } from "@/lib/wedding"

/*
 * Les entrées viennent de `lib/site` : ce fichier tenait auparavant ses propres
 * tableaux, qui avaient fini par diverger de ceux du pied de page.
 */

/** Navigation principale (grand écran) : la page en cours est soulignée. */
export function MainNav() {
  const pathname = usePathname()
  return (
    <nav aria-label="Navigation principale" className="hidden lg:block">
      <ul className="flex items-center gap-8 text-[0.8125rem] text-ink-soft">
        {mainNav.map((item) => {
          const current = pathname === item.href
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className="rounded-sm decoration-gold decoration-1 underline-offset-[0.4em] transition-colors hover:text-ink hover:underline aria-[current=page]:text-ink aria-[current=page]:underline"
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/** Menu mobile : un sommaire de magazine dans un Sheet. */
export function MobileMenu() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            className="-mr-2 gap-2 px-3 lg:hidden"
          />
        }
      >
        <HugeiconsIcon icon={Menu02Icon} strokeWidth={1.4} aria-hidden="true" />
        Menu
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <div className="px-6 pt-6">
          <SheetTitle className="border-b border-gold/70 pb-3">
            Sommaire
          </SheetTitle>
          <SheetDescription className="sr-only">
            Les pages du site de mariage de {wedding.couple.display}
          </SheetDescription>
        </div>
        <nav aria-label="Sommaire" className="px-6">
          <ul>
            {menuNav.map((item) => {
              const current = pathname === item.href
              return (
                <li key={item.href} className="border-b border-ink/10">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={current ? "page" : undefined}
                    className="display flex py-3.5 text-[1.875rem] leading-[1.05] transition-colors hover:text-teal aria-[current=page]:text-teal"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="mt-auto px-6 pt-10 pb-8">
          <WhatsAppLink
            className="w-full"
            size="lg"
            message="Bonjour ! Nous serons là le 12 décembre."
          >
            Confirmer ma présence
          </WhatsAppLink>
          <p className="mt-6 text-center text-[0.8125rem]">
            <a href={wedding.contacts[0].phoneHref} className="link-edito">
              {wedding.contacts[0].phone}
            </a>
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
