import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { ceremonies, wedding } from "@/lib/wedding"

export const alt = `${wedding.couple.display} — ${wedding.date.label}, ${wedding.city.name}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * La carte de partage : le papier du site, l'encre verte du faire-part. Les
 * deux portraits sont lus dans `public/` et incrustés en base64, donc l'image
 * est générée au build sans requête réseau.
 *
 * Satori impose un `display: "flex"` explicite sur tout `<div>` qui a plus
 * d'un enfant : ne pas les retirer en « nettoyant ».
 */
export default async function OpengraphImage() {
  const [portrait, saumon] = await Promise.all([
    readFile(join(process.cwd(), "public/images/couple-portrait.png")),
    readFile(join(process.cwd(), "public/images/couple-saumon.png")),
  ])
  const toSrc = (buffer: Buffer) =>
    `data:image/png;base64,${buffer.toString("base64")}`

  const [civil, benediction] = ceremonies

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 64,
        padding: "72px 80px",
        background: "#f9f6ed",
        color: "#1c3a29",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#96562f",
          }}
        >
          {wedding.date.weekday}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 88,
            lineHeight: 1.02,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#1c3a29",
          }}
        >
          {wedding.couple.display}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 42,
            color: "#2f5a41",
          }}
        >
          {wedding.date.labelShort}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 14,
            fontSize: 26,
            color: "#4a594e",
          }}
        >
          {civil.venue} à {civil.time} · {benediction.venue} à{" "}
          {benediction.time}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            fontSize: 26,
            color: "#4a594e",
          }}
        >
          {wedding.city.name}, {wedding.city.country}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            width: 120,
            height: 3,
            background: "#d99b6b",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          position: "relative",
          width: 360,
          height: 400,
        }}
      >
        {/* Le polaroïd arrière */}
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            display: "flex",
            padding: 10,
            paddingBottom: 30,
            borderRadius: 4,
            background: "#d99b6b",
            transform: "rotate(6deg)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={toSrc(saumon)}
            alt=""
            width={220}
            height={294}
            style={{ objectFit: "cover", borderRadius: 2 }}
          />
        </div>
        {/* Le polaroïd avant */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            display: "flex",
            padding: 10,
            paddingBottom: 30,
            borderRadius: 4,
            background: "#ffffff",
            border: "1px solid #1c3a29",
            transform: "rotate(-5deg)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={toSrc(portrait)}
            alt=""
            width={220}
            height={294}
            style={{ objectFit: "cover", borderRadius: 2 }}
          />
        </div>
      </div>
    </div>,
    size
  )
}
