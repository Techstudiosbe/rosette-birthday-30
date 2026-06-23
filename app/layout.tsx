import type { Metadata, Viewport } from "next";
import { Space_Mono, Special_Elite, Caveat, Courier_Prime } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import MusicPlayer from "@/components/MusicPlayer";
import SmoothScroller from "@/components/SmoothScroller";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono", display: "swap" });
const specialElite = Special_Elite({ subsets: ["latin"], weight: "400", variable: "--font-special-elite", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-courier", display: "swap" });

export const metadata: Metadata = {
  title: "Rosette's 30th Birthday 🎂",
  description: "Celebrating 30 years of God's faithfulness.",
  openGraph: {
    title: "Rosette's 30th Birthday 🎂",
    description: "Celebrating 30 years of God's faithfulness.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf3e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${specialElite.variable} ${caveat.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* Hidden SVG filter: ragged torn-paper edge */}
        <svg aria-hidden width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id="torn-edge">
              <feTurbulence type="fractalNoise" baseFrequency="0.022 0.04" numOctaves="2" seed="7" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>

        <SmoothScroller>
          <main className="relative mx-auto w-full max-w-[1100px] px-4 pb-28 pt-2">{children}</main>

          <MusicPlayer />
          <Navigation />
        </SmoothScroller>
      </body>
    </html>
  );
}
