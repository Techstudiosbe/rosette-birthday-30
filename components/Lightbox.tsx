"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

type LightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
};

export default function Lightbox({ src, alt, caption, onClose }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    // Enter animation
    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { opacity: 0, backdropFilter: "blur(0px)" },
      { opacity: 1, backdropFilter: "blur(10px)", duration: 0.4, ease: "power2.out" }
    ).fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.4)" },
      "-=0.2"
    );

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(imageRef.current, { scale: 0.9, opacity: 0, duration: 0.3, ease: "power2.in" }).to(
      overlayRef.current,
      { opacity: 0, backdropFilter: "blur(0px)", duration: 0.3, ease: "power2.in" },
      "-=0.2"
    );
  };

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 sm:p-8"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative max-h-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className="max-h-[85vh] max-w-[90vw] w-auto rounded-md shadow-2xl"
        />
        {caption && (
          <p className="mt-4 text-center font-hand text-2xl text-white drop-shadow-md">
            {caption}
          </p>
        )}
        <button
          onClick={handleClose}
          className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:-right-6 sm:-top-6"
          aria-label="Close image"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
}
