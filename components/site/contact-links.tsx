import type { VariantProps } from "class-variance-authority"
import { HugeiconsIcon } from "@hugeicons/react"
import { Call02Icon, WhatsappIcon } from "@hugeicons/core-free-icons"

import { buttonVariants } from "@/components/ui/button"
import { primaryContact, whatsappUrl } from "@/lib/wedding"
import { cn } from "@/lib/utils"

/**
 * Les deux façons de nous joindre. Même contrat que l'ancien `AppStoreLink`
 * (className / size / variant / children) pour que les appelants n'aient pas
 * bougé : aucun formulaire, aucun serveur, juste un appel ou un message.
 */

export function WhatsAppLink({
  className,
  size = "lg",
  variant = "default",
  children = "Nous écrire sur WhatsApp",
  message,
}: {
  className?: string
  children?: React.ReactNode
  /** Texte pré-écrit dans la conversation. Encodé pour l'URL. */
  message?: string
} & VariantProps<typeof buttonVariants>) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={cn(buttonVariants({ size, variant }), className)}
    >
      <HugeiconsIcon
        icon={WhatsappIcon}
        strokeWidth={1.8}
        data-icon="inline-start"
      />
      {children}
      <span className="sr-only"> (nouvelle fenêtre)</span>
    </a>
  )
}

export function PhoneLink({
  className,
  size = "lg",
  variant = "outline",
  children = "Appeler",
}: {
  className?: string
  children?: React.ReactNode
} & VariantProps<typeof buttonVariants>) {
  return (
    <a
      href={primaryContact.phoneHref}
      className={cn(buttonVariants({ size, variant }), className)}
    >
      <HugeiconsIcon
        icon={Call02Icon}
        strokeWidth={1.8}
        data-icon="inline-start"
      />
      {children}
      <span className="sr-only">
        {" "}
        {primaryContact.name}, {primaryContact.phone}
      </span>
    </a>
  )
}
