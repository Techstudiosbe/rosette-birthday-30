import type { Metadata } from "next";
import { PHOTOS, MEMES } from "@/content";
import FlipCard from "@/components/FlipCard";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import GalleryMemesClient from "./GalleryMemesClient";

export const metadata: Metadata = {
    title: "Rosette Over the Years · Rosette's 30th",
    description: "A scrapbook of 30 years of God's faithfulness.",
};

// gentle vertical stagger so the pile feels hand-placed
const OFFSET = [0, 28, 8, 36, 4, 24, 0, 30];

export default function GalleryPage() {
    return (
        <div className="pt-8">
            <Reveal className="mb-8 text-center">
                <p className="eyebrow">Rosette over the years</p>
                <h1 className="mt-2 font-display text-ink text-4xl sm:text-5xl">
                    30 years on the table
                </h1>
                <p className="mx-auto mt-3 max-w-md font-body text-ink/75">
                    Every year, His faithfulness.
                </p>
            </Reveal>

            {/* the table surface */}
            <div
                className="relative shadow-[0_18px_40px_-22px_rgba(50,30,15,0.6)] px-3 sm:px-8 py-10 rounded-2xl overflow-hidden"
                style={{
                    backgroundColor: "#caa274",
                    backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(120,82,45,0.16) 0 2px, transparent 2px 26px)," +
                        "repeating-linear-gradient(90deg, rgba(255,240,220,0.10) 0 1px, transparent 1px 13px)," +
                        "linear-gradient(180deg, #d2ab7d, #bd9568)",
                }}
            >
                {/* scattered table objects */}
                <Sticker
                    name="champagne"
                    size={64}
                    className="hidden sm:block top-4 left-4 absolute opacity-90"
                    rotate={-8}
                />
                <Sticker
                    name="bowRed"
                    size={92}
                    className="top-6 right-3 absolute opacity-95"
                    rotate={10}
                />
                <Sticker
                    name="flowerPressed"
                    size={80}
                    className="hidden sm:block bottom-4 left-6 absolute opacity-90"
                    rotate={-6}
                />
                <Sticker
                    name="starRed"
                    size={70}
                    className="right-8 bottom-6 absolute opacity-90"
                    rotate={8}
                />

                <div className="relative flex flex-wrap justify-center items-start gap-x-3 gap-y-6 sm:gap-x-6">
                    {PHOTOS.map((photo, i) => (
                        <Reveal
                            key={photo.id}
                            delay={(i % 4) * 0.05}
                            y={24}
                            rotate={photo.rotation / 2}
                        >
                            <div style={{ marginTop: OFFSET[i % OFFSET.length] }}>
                                <FlipCard photo={photo} rotate={photo.rotation} width={188} />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* ── Memes Section ── */}
            <Reveal className="mt-28 text-center" delay={0.1}>
                <p className="eyebrow">The Many Moods of</p>
                <h2 className="mt-2 font-display text-ink text-4xl">Our Favorite Girl</h2>
                <p className="mx-auto mt-2 max-w-sm font-body text-[0.95rem] text-ink/70">
                    A collection of pinterest finds and memes that basically sum her up.
                </p>
            </Reveal>

            {/* Full width Marquee container */}
            <div className="left-1/2 relative mt-12 -ml-[50vw] py-16 w-[100vw] overflow-hidden">
                <GalleryMemesClient memes={MEMES} />
            </div>

            <Reveal className="mt-16 text-center">
                <p className="font-hand text-terracotta text-2xl">
                    &ldquo;Surely goodness and mercy shall follow me…&rdquo;
                </p>
            </Reveal>
        </div>
    );
}
