import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";

export const metadata: Metadata = {
  title: "Itinerary · Rosette's 30th",
  description: "The order of the evening.",
};

export default function ItineraryPage() {
  return (
    <div className="relative pt-8">
      <Sticker name="starYellow" size={90} className="absolute right-2 top-2 opacity-80" />
      <Sticker name="flowerPressed" size={84} className="absolute left-0 top-6 hidden sm:block" />

      <Reveal className="mb-10 text-center">
        <p className="eyebrow">The evening</p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Order of the night</h1>
        <p className="mx-auto mt-3 max-w-sm font-body text-ink/75">
          A little plan for our celebration. Times are a guide — come ready to praise, feast and dance. 💛
        </p>
      </Reveal>

      <Timeline />

      <Reveal className="mt-12 text-center">
        <p className="font-hand text-2xl text-terracotta">Can&rsquo;t wait to celebrate with you!</p>
      </Reveal>
    </div>
  );
}
