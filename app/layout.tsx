import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { SiteFooter } from "@/components/edito/site-footer"
import { SiteHeader } from "@/components/edito/site-header"
import { MotionReveal } from "@/components/site/motion-reveal"
import { motionBootScript } from "@/lib/motion"
import { site } from "@/lib/site"
import { wedding } from "@/lib/wedding"
import { cn } from "@/lib/utils"

const bodoni = localFont({
  src: [
    {
      path: "./fonts/bodoni-moda-latin-standard-normal.woff2",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "./fonts/bodoni-moda-latin-standard-italic.woff2",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-bodoni",
  display: "swap",
  adjustFontFallback: "Times New Roman",
})

const hanken = localFont({
  src: [
    {
      path: "./fonts/hanken-grotesk-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/hanken-grotesk-latin-wght-italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-hanken",
  display: "swap",
})

const title = `${wedding.couple.display} — ${wedding.date.label}, ${wedding.city.name}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${wedding.couple.display}` },
  description: site.description,
  applicationName: wedding.couple.display,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: wedding.couple.display,
    url: "/",
    title,
    images: [
      {
        url: '/intro.png',
        alt: 'Le samedi 12 décembre 2026, à Douala : la mairie de Logbaba le matin, la bénédiction à Bonanjo après-midi.',
      },
    ],
    description: site.description,
    // L'image de partage est fournie par app/opengraph-image.tsx.
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: "#f9f6ed",
}

const eventJsonLd = {
  "@context": "https://schema.org",
  "@graph": wedding.ceremonies.map((ceremony) => ({
    "@type": "Event",
    name: `${ceremony.name} — mariage de ${wedding.couple.display}`,
    startDate: ceremony.startIso,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: `${ceremony.name} du mariage de ${wedding.couple.display}, à ${ceremony.venue} (${ceremony.area}).`,
    location: {
      "@type": "Place",
      name: ceremony.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: wedding.city.name,
        addressCountry: "CM",
      },
    },
    organizer: { "@type": "Person", name: wedding.couple.display },
  })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={cn("antialiased", bodoni.variable, hanken.variable)}
      // Le script de démarrage des animations pose data-motion avant React.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootScript }} />
      </head>
      <body>
        <a
          href="#content"
          className="sr-only z-50 bg-paper px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <MotionReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  )
}
