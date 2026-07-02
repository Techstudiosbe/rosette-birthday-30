"use client";

import { useState } from "react";
import type { Meme } from "@/content";
import Lightbox from "@/components/Lightbox";

type Props = { memes: Meme[] };

export default function GalleryMemesClient({ memes }: Props) {
    const [activeMeme, setActiveMeme] = useState<Meme | null>(null);

    // Duplicate the array to create a seamless infinite marquee effect
    const duplicatedMemes = [...memes, ...memes, ...memes];

    return (
        <>
            {/* Inline styles for the marquee animation */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
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
      `,
                }}
            />

            <div className="flex items-center pl-8 w-max animate-marquee">
                {duplicatedMemes.map((meme, i) => {
                    const placeholderBg = `linear-gradient(135deg, hsl(${((i * 45) % 360) + 10}, 40%, 65%), hsl(${((i * 45) % 360) + 30}, 50%, 70%))`;

                    return (
                        <div
                            key={`${meme.id}-${i}`}
                            className="hover:z-50 relative hover:scale-110 transition-transform duration-300 cursor-pointer polaroid shrink-0"
                            onClick={() => setActiveMeme(meme)}
                            style={{
                                width: 220,
                                transform: `rotate(${meme.rotation}deg) translateY(${i % 2 === 0 ? "15px" : "-15px"})`,
                                marginRight: "-2.5rem", // Overlap horizontally
                            }}
                        >
                            <div className="relative bg-ink/5 rounded-[2px] w-full h-[220px] overflow-hidden">
                                {meme.src ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={meme.src}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div
                                        className="flex justify-center items-center w-full h-full"
                                        style={{ background: placeholderBg }}
                                    >
                                        <span className="font-display text-white/30 text-6xl">
                                            ?
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {activeMeme && (
                <Lightbox
                    src={activeMeme.src || ""}
                    alt=""
                    caption=""
                    onClose={() => setActiveMeme(null)}
                />
            )}
        </>
    );
}
