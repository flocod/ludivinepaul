import Link from "next/link"

import { Mark } from "@/components/brand/logo"
import { Container } from "@/components/edito/primitives"
import { WhatsAppLink } from "@/components/site/contact-links"
import { infosNav, invitationNav, journeeNav } from "@/lib/site"
import { wedding } from "@/lib/wedding"

export function SiteFooter() {
  return (
    <footer className="on-teal bg-teal-deep text-cream">
      <Container className="pt-6 pb-10">
        <div className="border-t border-gold-light/40" />

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-12 lg:mt-20 lg:gap-x-6">
          <div className="col-span-12 lg:col-span-7">
            <p className="flex items-center gap-4">
              <Mark
                tone="cream"
                className="h-11 translate-y-[0.6rem] sm:translate-y-[0.9rem] lg:h-[3rem] lg:translate-y-[1.2rem]"
              />
              {/* « Ludivine & Paul » est bien plus long qu'« Aparté » : le
                  mot-symbole géant tient en trois paliers plus bas. */}
              <span className="display text-[2.75rem] leading-none sm:text-[3.75rem] lg:text-[5rem]">
                {wedding.couple.display}
              </span>
            </p>
            <p className="serif mt-6 max-w-[30ch] text-[1.375rem] leading-[1.3] text-cream/90 italic lg:text-[1.625rem]">
              Le samedi 12 décembre 2026, à {wedding.city.name} : la mairie de
              Logbaba le matin, la bénédiction à Bonanjo l&apos;après-midi.
            </p>
          </div>

          <div className="col-span-12 flex items-end lg:col-span-4 lg:col-start-9 lg:justify-end">
            <div>
              <p className="max-w-[24ch] text-[0.8125rem] leading-snug text-mist">
                Dites-nous que vous venez, et si vous serez plusieurs.
              </p>
              <WhatsAppLink
                variant="cream"
                className="mt-3"
                message="Bonjour ! Nous serons là le 12 décembre."
              >
                Nous écrire sur WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-gold-light/40 pt-10 text-[0.875rem] md:grid-cols-12 lg:mt-24">
          <FooterNav
            title="Sommaire"
            links={journeeNav}
            className="md:col-span-3"
          />
          <FooterNav
            title="Infos pratiques"
            links={infosNav}
            className="md:col-span-3"
          />
          <FooterNav
            title="L'invitation"
            links={invitationNav}
            className="md:col-span-3"
          />

          <div className="col-span-2 md:col-span-3">
            <p className="serif text-[1.0625rem] text-gold-light italic">
              Nous joindre
            </p>
            <ul className="mt-4 space-y-2">
              {wedding.contacts.map((contact) => (
                <li key={contact.id}>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/85 underline-offset-4 hover:text-cream hover:underline hover:decoration-gold-light"
                  >
                    WhatsApp {contact.name}
                    <span className="sr-only"> (nouvelle fenêtre)</span>
                  </a>
                </li>
              ))}
              {wedding.contacts.map((contact) => (
                <li key={`${contact.id}-tel`}>
                  <a
                    href={contact.phoneHref}
                    className="text-cream/85 underline-offset-4 hover:text-cream hover:underline hover:decoration-gold-light"
                  >
                    {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-[0.8125rem] text-mist">
          {wedding.couple.display} — {wedding.date.label}, {wedding.city.name},{" "}
          {wedding.city.country}.
        </p>
      </Container>
    </footer>
  )
}

function FooterNav({
  title,
  links,
  className,
}: {
  title: string
  links: readonly { label: string; href: string }[]
  className?: string
}) {
  return (
    <nav aria-label={title} className={className}>
      <p className="serif text-[1.0625rem] text-gold-light italic">{title}</p>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            {l.href.startsWith("http") ? (
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-cream/85 underline-offset-4 hover:text-cream hover:underline hover:decoration-gold-light"
              >
                {l.label}
                <span className="sr-only"> (nouvelle fenêtre)</span>
              </a>
            ) : (
              <Link
                href={l.href}
                className="text-cream/85 underline-offset-4 hover:text-cream hover:underline hover:decoration-gold-light"
              >
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
