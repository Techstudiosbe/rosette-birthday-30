import { WALL_NOTES } from "@/lib/content";
import ScrapbookCard from "./ScrapbookCard";
import Reveal from "./Reveal";

const ROT = [-3, 2.5, -1.5, 3, -2, 1.5];
const TONES = ["", "washi--coral", "washi--plum"] as const;

export default function MessageWall() {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
      {WALL_NOTES.map((note, i) => (
        <Reveal key={i} delay={i * 0.05} y={20}>
          <ScrapbookCard
            rotate={ROT[i % ROT.length]}
            tape={i % 2 === 0 ? "top-left" : "top-right"}
            tapeTone={TONES[i % TONES.length]}
            className="px-5 py-5"
          >
            <p className="font-body text-[0.98rem] leading-snug text-ink/90">&ldquo;{note.text}&rdquo;</p>
            <p className="mt-3 font-hand text-2xl text-terracotta">— {note.name}</p>
          </ScrapbookCard>
        </Reveal>
      ))}
    </div>
  );
}
