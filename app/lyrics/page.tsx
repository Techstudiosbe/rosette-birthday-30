import type { Metadata } from "next";
import { LYRICS } from "@/content";
import Reveal from "@/components/Reveal";
import LyricsTabs from "@/components/LyricsTabs";

export const metadata: Metadata = {
    title: "Songs of the Night · Rosette's 30th",
    description: "Lyrics for the worship and praise sets.",
};

export default function LyricsPage() {
    return (
        <div className="pt-8">
            <Reveal className="mb-8 text-center">
                <p className="eyebrow">Songs of the Night</p>
                <h1 className="mt-2 font-display text-ink text-4xl sm:text-5xl">Sing with us</h1>
                <p className="mx-auto mt-3 max-w-md font-body text-ink/75">
                    Follow along with the lyrics as we lift up praise and thanksgiving.
                </p>
            </Reveal>

            <Reveal delay={0.15}>
                <LyricsTabs sets={LYRICS} />
            </Reveal>
        </div>
    );
}
