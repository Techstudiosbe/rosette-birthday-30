"use client";

import { useRef } from "react";
import Link from "next/link";
import { SITE } from "@/content";
import { gsap, useGSAP } from "@/lib/gsap";
import Sticker from "./Sticker";

export default function Hero() {
    const root = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            if (reduce) {
                gsap.set(root.current?.querySelectorAll(".hero-stk, .hero-copy > *") ?? [], {
                    opacity: 1,
                });
                return;
            }
            tl.from(".hero-stk", {
                opacity: 0,
                scale: 0.5,
                x: (i, el) =>
                    (el as HTMLElement).dataset.fx ? Number((el as HTMLElement).dataset.fx) : 0,
                y: (i, el) =>
                    (el as HTMLElement).dataset.fy ? Number((el as HTMLElement).dataset.fy) : 0,
                rotate: () => gsap.utils.random(-25, 25),
                duration: 0.8,
                stagger: 0.07,
            }).from(".hero-copy > *", { opacity: 0, y: 22, duration: 0.7, stagger: 0.12 }, "-=0.5");
        },
        { scope: root }
    );

    return (
        <section ref={root} className="relative mt-2 pt-4 min-h-[78vh] overflow-hidden">
            {/* ---- sticker collage ---- */}
            <Sticker
                name="starYellow"
                size={170}
                className="top-6 left-1/2 -z-10 absolute opacity-80 -translate-x-1/2 hero-stk"
                data-fy="-60"
            />
            <Sticker
                name="flowerCoral"
                size={150}
                className="top-2 -left-3 sm:left-2 absolute hero-stk"
                data-fx="-90"
            />
            <Sticker
                name="pansy"
                size={120}
                className="hidden sm:block top-28 left-24 absolute hero-stk"
                data-fx="-70"
            />
            <Sticker
                name="flowerBrown"
                size={150}
                className="top-2 -right-3 sm:right-2 absolute hero-stk"
                data-fx="90"
            />
            <Sticker
                name="starRed"
                size={120}
                className="hidden sm:block top-32 right-6 absolute hero-stk"
                data-fx="80"
            />
            <Sticker
                name="champagne"
                size={120}
                className="hidden sm:block top-[42%] right-10 absolute hero-stk"
                data-fx="70"
            />
            <Sticker
                name="hearts"
                size={120}
                className="hidden sm:block bottom-24 left-4 absolute hero-stk"
                data-fx="-80"
                data-fy="40"
            />
            <Sticker
                name="gift"
                size={120}
                className="hidden sm:block bottom-6 left-8 absolute hero-stk"
                data-fy="60"
            />
            <Sticker
                name="candles"
                size={150}
                className="bottom-2 left-1/2 absolute opacity-90 -translate-x-1/2 hero-stk"
                data-fy="60"
            />
            <Sticker
                name="bowRed"
                size={120}
                className="hidden sm:block right-4 bottom-16 absolute hero-stk"
                data-fx="80"
                data-fy="40"
            />

            {/* ---- copy ---- */}
            <div className="z-10 relative flex flex-col items-center mx-auto px-4 pt-24 pb-40 sm:pt-28 sm:pb-24 max-w-md text-center hero-copy">
                <p className="eyebrow">Welcome to</p>
                <h1 className="mt-3 font-display text-[3.4rem] text-ink sm:text-7xl leading-[0.95]">
                    {SITE.name}&rsquo;s
                    <br />
                    <span className="text-terracotta">30th</span> Birthday
                </h1>

                <p className="mt-6 max-w-xs font-serif-d text-ink/80 text-lg italic leading-snug">
                    &ldquo;{SITE.scripture.text}&rdquo;
                </p>
                <p className="mt-1 eyebrow">{SITE.scripture.ref}</p>

                <p className="mt-6 max-w-sm font-body text-[1.02rem] text-ink/85 leading-relaxed">
                    {SITE.welcome}
                </p>
                <p className="mt-3 max-w-sm font-hand text-terracotta text-2xl leading-snug">
                    {SITE.prayer}
                </p>

                <Link href="/messages" className="mt-8 btn-washi">
                    Leave Rosette a note 💌
                </Link>
            </div>
        </section>
    );
}
