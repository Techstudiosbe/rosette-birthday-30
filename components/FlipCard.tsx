"use client";

import { useState } from "react";
import type { Photo } from "@/lib/content";
import Lightbox from "@/components/Lightbox";

type Props = {
  photo: Photo;
  width?: number;
  className?: string;
  rotate?: number;
  style?: React.CSSProperties;
};

export default function FlipCard({ photo, width = 210, className = "", rotate = 0, style }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const imgH = Math.round(width * 1.0);

  const handleFlip = () => setFlipped((f) => !f);

  return (
    <>
      <div
        className={`flip ${flipped ? "is-flipped" : ""} ${className}`}
        style={{ width, transform: `rotate(${rotate}deg)`, ...style }}
      >
        <div className="block w-full text-left" style={{ height: imgH + 70 }}>
          <div className="flip-inner">
            {/* Front: polaroid */}
            <div className="flip-face">
              <div 
                className="polaroid h-full w-full cursor-pointer" 
                onClick={handleFlip}
                role="button"
                tabIndex={0}
                aria-label={`${photo.title}, ${photo.year}. Tap to read memory.`}
              >
                <div className="relative overflow-hidden rounded-[1px]" style={{ height: imgH }}>
                  {photo.src ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={photo.src} alt={photo.title} className="h-full w-full object-cover" />
                      
                      {/* Zoom Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowLightbox(true);
                        }}
                        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-ink/80 shadow-sm backdrop-blur-md transition-colors hover:bg-white/90"
                        aria-label="View full image"
                        title="View full image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                      </button>
                    </>
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{
                        background: `linear-gradient(150deg, ${photo.tone}, ${photo.tone}cc 55%, #00000022)`,
                      }}
                    >
                      <span className="font-display text-4xl text-white/90 drop-shadow">{photo.year}</span>
                    </div>
                  )}
                </div>
                <div className="px-1 pt-2.5">
                  <p className="font-hand text-xl leading-none text-ink">{photo.title}</p>
                  <p className="font-serif-d text-[0.6rem] uppercase tracking-[0.18em] text-terracotta">
                    {photo.year}
                  </p>
                </div>
              </div>
            </div>

            {/* Back: memory */}
            <div className="flip-face flip-back">
              <div 
                className="paper-card flex h-full w-full cursor-pointer flex-col justify-center px-4 py-4"
                onClick={handleFlip}
                role="button"
                tabIndex={0}
                aria-label="Tap to flip back to photo"
              >
                <p className="eyebrow mb-1">{photo.year}</p>
                <p className="font-body text-[0.92rem] leading-snug text-ink/90">{photo.description}</p>
                <p className="mt-3 font-hand text-base text-terracotta">tap to flip back ↺</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Lightbox */}
      {showLightbox && photo.src && (
        <Lightbox
          src={photo.src}
          alt={photo.title}
          caption={`${photo.title} (${photo.year})`}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </>
  );
}
