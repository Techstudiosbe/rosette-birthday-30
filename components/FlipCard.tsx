"use client";

import { useState } from "react";
import type { Photo } from "@/content";
import Lightbox from "@/components/Lightbox";

type Props = {
    photo: Photo;
    width?: number;
    className?: string;
    rotate?: number;
    style?: React.CSSProperties;
};

export default function FlipCard({ photo, width = 210, className = "", rotate = 0, style }: Props) {
    const [showLightbox, setShowLightbox] = useState(false);
    const imgH = Math.round(width * 1.0);

    return (
        <>
            <div
                className={`polaroid cursor-pointer transition-transform duration-300 hover:z-50 hover:scale-110 ${className}`}
                style={{ width, transform: `rotate(${rotate}deg)`, ...style }}
                onClick={() => photo.src && setShowLightbox(true)}
                role={photo.src ? "button" : undefined}
                aria-label={photo.src ? `View ${photo.title}` : undefined}
            >
                <div className="relative rounded-[1px] overflow-hidden" style={{ height: imgH }}>
                    {photo.src ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={photo.src}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div
                            className="flex justify-center items-center w-full h-full"
                            style={{
                                background: `linear-gradient(150deg, ${photo.tone}, ${photo.tone}cc 55%, #00000022)`,
                            }}
                        >
                            <span className="drop-shadow font-display text-white/90 text-4xl">
                                {photo.year}
                            </span>
                        </div>
                    )}
                </div>
                <div className="px-1 pt-2.5">
                    <p className="font-hand text-ink text-xl leading-none">{photo.title}</p>
                    <p className="font-serif-d text-[0.6rem] text-terracotta uppercase tracking-[0.18em]">
                        {photo.year}
                    </p>
                </div>
            </div>

            {showLightbox && photo.src && (
                <Lightbox
                    src={photo.src}
                    alt={photo.title}
                    caption={photo.title}
                    onClose={() => setShowLightbox(false)}
                />
            )}
        </>
    );
}
