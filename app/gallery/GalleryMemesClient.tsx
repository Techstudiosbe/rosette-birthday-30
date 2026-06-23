"use client";

import { useState } from "react";
import type { Meme } from "@/lib/content";
import Lightbox from "@/components/Lightbox";

type Props = { memes: Meme[] };

export default function GalleryMemesClient({ memes }: Props) {
  const [activeMeme, setActiveMeme] = useState<Meme | null>(null);

  // Duplicate the array to create a seamless infinite marquee effect
  const duplicatedMemes = [...memes, ...memes, ...memes];

  return (
    <>
      {/* Inline styles for the marquee animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="flex w-max animate-marquee items-center pl-8">
        {duplicatedMemes.map((meme, i) => {
          const placeholderBg = `linear-gradient(135deg, hsl(${(i * 45) % 360 + 10}, 40%, 65%), hsl(${(i * 45) % 360 + 30}, 50%, 70%))`;
          
          return (
            <div
              key={`${meme.id}-${i}`}
              className="polaroid relative shrink-0 cursor-pointer transition-transform duration-300 hover:z-50 hover:scale-110"
              onClick={() => setActiveMeme(meme)}
              style={{
                width: 220,
                transform: `rotate(${meme.rotation}deg) translateY(${i % 2 === 0 ? "15px" : "-15px"})`,
                marginRight: "-2.5rem", // Overlap horizontally
              }}
            >
              <div className="relative h-[220px] w-full overflow-hidden rounded-[2px] bg-ink/5">
                {meme.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={meme.src} alt={meme.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center" style={{ background: placeholderBg }}>
                    <span className="font-display text-6xl text-white/30">?</span>
                  </div>
                )}
              </div>
              <div className="px-1 pt-3 text-center">
                <p className="font-hand text-xl leading-none text-ink">{meme.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {activeMeme && (
        <Lightbox
          src={activeMeme.src || ""}
          alt={activeMeme.title}
          caption={activeMeme.title}
          onClose={() => setActiveMeme(null)}
        />
      )}
    </>
  );
}
