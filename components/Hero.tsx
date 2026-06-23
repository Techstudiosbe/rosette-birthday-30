"use client";

import { useRef } from "react";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";
import Sticker from "./Sticker";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (reduce) {
        gsap.set(root.current?.querySelectorAll(".hero-stk, .hero-copy > *") ?? [], { opacity: 1 });
        return;
      }
      tl.from(".hero-stk", {
        opacity: 0,
        scale: 0.5,
        x: (i, el) => (el as HTMLElement).dataset.fx ? Number((el as HTMLElement).dataset.fx) : 0,
        y: (i, el) => (el as HTMLElement).dataset.fy ? Number((el as HTMLElement).dataset.fy) : 0,
        rotate: () => gsap.utils.random(-25, 25),
        duration: 0.8,
        stagger: 0.07,
      })
        .from(".hero-copy > *", { opacity: 0, y: 22, duration: 0.7, stagger: 0.12 }, "-=0.5");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative mt-2 min-h-[78vh] overflow-hidden pt-4">
      {/* ---- sticker collage ---- */}
      <Sticker name="starYellow" size={170} className="hero-stk absolute left-1/2 top-6 -z-10 -translate-x-1/2 opacity-80" data-fy="-60" />
      <Sticker name="flowerCoral" size={150} className="hero-stk absolute -left-3 top-2 sm:left-2" data-fx="-90" />
      <Sticker name="pansy" size={92} className="hero-stk absolute left-16 top-28 sm:left-24" data-fx="-70" />
      <Sticker name="flowerBrown" size={150} className="hero-stk absolute -right-3 top-2 sm:right-2" data-fx="90" />
      <Sticker name="starRed" size={96} className="hero-stk absolute right-6 top-32 hidden sm:block" data-fx="80" />
      <Sticker name="champagne" size={70} className="hero-stk absolute right-10 top-[42%] hidden sm:block" data-fx="70" />
      <Sticker name="hearts" size={120} className="hero-stk absolute -left-2 bottom-24 sm:left-4" data-fx="-80" data-fy="40" />
      <Sticker name="gift" size={92} className="hero-stk absolute left-8 bottom-6 hidden sm:block" data-fy="60" />
      <Sticker name="candles" size={78} className="hero-stk absolute left-1/2 bottom-2 -translate-x-1/2 opacity-90" data-fy="60" />
      <Sticker name="bowRed" size={120} className="hero-stk absolute -right-2 bottom-16 sm:right-4" data-fx="80" data-fy="40" />

      {/* ---- copy ---- */}
      <div className="hero-copy relative z-10 mx-auto flex max-w-md flex-col items-center px-2 pt-24 text-center sm:pt-28">
        <p className="eyebrow">Welcome to</p>
        <h1 className="mt-3 font-display text-[3.4rem] leading-[0.95] text-ink sm:text-7xl">
          {SITE.name}&rsquo;s
          <br />
          <span className="text-terracotta">30th</span> Birthday
        </h1>

        <p className="mt-6 max-w-xs font-serif-d text-lg italic leading-snug text-ink/80">
          &ldquo;{SITE.scripture.text}&rdquo;
        </p>
        <p className="mt-1 eyebrow">{SITE.scripture.ref}</p>

        <p className="mt-6 max-w-sm font-body text-[1.02rem] leading-relaxed text-ink/85">{SITE.welcome}</p>
        <p className="mt-3 max-w-sm font-hand text-2xl leading-snug text-terracotta">{SITE.prayer}</p>

        <Link href="/messages" className="btn-washi mt-8">
          Leave Rosette a note 💌
        </Link>
      </div>
    </section>
  );
}
