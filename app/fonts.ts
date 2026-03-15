import { IBM_Plex_Mono, Source_Serif_4 } from "next/font/google"

export const uiMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ui-mono",
  weight: ["400", "500", "600", "700"],
})

export const readingSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-reading-serif",
  weight: ["400", "600", "700"],
})
