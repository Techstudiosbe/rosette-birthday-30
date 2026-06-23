import type { Metadata } from "next";
import { MESSAGES_FORM } from "@/lib/content";
import MessageForm from "@/components/MessageForm";
import ScrapbookCard from "@/components/ScrapbookCard";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";

export const metadata: Metadata = {
  title: "Talk to Me Nice · Rosette's 30th",
  description: "Pour your heart out for Rosette's 30th birthday.",
};

export default function MessagesPage() {
  return (
    <div className="relative mx-auto max-w-xl pt-8">
      <Sticker name="hearts" size={96} className="absolute -left-2 top-2 hidden sm:block" rotate={-10} />
      <Sticker name="pansy" size={80} className="absolute right-0 top-2 hidden sm:block" rotate={8} />

      <Reveal className="mb-7 text-center">
        <p className="eyebrow">Talk to me nice</p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">Pour your heart out</h1>
      </Reveal>

      <Reveal className="mb-8">
        <ScrapbookCard tape="top" tapeTone="washi--coral" rotate={-1} className="px-6 py-6 text-center">
          <p className="font-hand text-2xl leading-snug text-ink">{MESSAGES_FORM.intro}</p>
        </ScrapbookCard>
      </Reveal>

      <MessageForm />
    </div>
  );
}
