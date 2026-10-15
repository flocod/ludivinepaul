import Link from "next/link"

import { Container, RunningHead } from "@/components/edito/primitives"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { homeFaq } from "@/lib/faq"
import { typo } from "@/lib/typo"
import { wedding } from "@/lib/wedding"

export function Questions() {
  return (
    <section
      id="les-questions"
      aria-labelledby="les-questions-title"
      className="scroll-mt-6 pb-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="Les questions" folio={8} />

        <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-10 lg:mt-16 lg:gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <h2
              id="les-questions-title"
              className="display text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem]"
            >
              Vos questions
            </h2>
            <p className="mt-6 max-w-[30ch] text-[0.9375rem] leading-[1.65] text-ink-soft lg:mt-8">
              Six réponses pour commencer. Le reste est sur la{" "}
              <Link href="/faq" className="link-edito">
                page des questions
              </Link>
              , et tout ce qui n&apos;y est pas peut nous être demandé par{" "}
              <a href={wedding.contacts[0].phoneHref} className="link-edito">
                téléphone
              </a>{" "}
              ou sur WhatsApp.
            </p>
          </div>

          <Accordion className="col-span-12 lg:col-span-7 lg:col-start-6">
            {homeFaq.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{typo(item.question)}</AccordionTrigger>
                <AccordionContent>
                  {item.answer.map((p) => (
                    <p key={p}>{typo(p)}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}
