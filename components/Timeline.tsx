import { ITINERARY } from "@/content";
import ScrapbookCard from "./ScrapbookCard";
import Sticker from "./Sticker";
import Reveal from "./Reveal";

const ROT = [-2, 1.5, -1.5, 2, -1, 1.5];

export default function Timeline() {
    return (
        <div className="relative mx-auto pl-12 max-w-xl">
            {/* the thread */}
            <span
                aria-hidden
                className="top-2 bottom-2 left-[22px] absolute bg-[repeating-linear-gradient(to_bottom,rgba(155,58,45,0.5)_0_8px,transparent_8px_16px)] rounded w-[2px]"
            />
            <div className="flex flex-col gap-7">
                {ITINERARY.map((ev, i) => (
                    <Reveal key={i} delay={i * 0.04} y={18}>
                        <div className="relative">
                            {/* node sticker */}
                            <span className="top-1 -left-12 absolute flex justify-center items-center w-11 h-11">
                                <Sticker name={ev.sticker} size={40} rotate={ROT[i] ?? 0} />
                            </span>
                            <ScrapbookCard
                                rotate={ROT[i % ROT.length]}
                                tape={i % 2 ? "top-right" : "top-left"}
                                className="px-5 py-4"
                            >
                                <p className="eyebrow">{ev.time}</p>
                                <h3 className="font-display text-ink text-xl">{ev.title}</h3>
                                {ev.note && (
                                    <p className="mt-1 font-body text-ink/75 text-sm">{ev.note}</p>
                                )}
                            </ScrapbookCard>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}
