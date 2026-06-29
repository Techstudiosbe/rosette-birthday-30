"use client";

import { useState } from "react";
import type { LyricsSet } from "@/content";

type Props = { sets: LyricsSet[] };

export default function LyricsTabs({ sets }: Props) {
    const [activeId, setActiveId] = useState(sets[0]?.id ?? "");
    const active = sets.find((s) => s.id === activeId) ?? sets[0];

    return (
        <div>
            {/* ── Tab bar ──────────────────────────────────────────────── */}
            <div
                role="tablist"
                aria-label="Performer sets"
                className="flex gap-2 mb-6 pb-1 overflow-x-auto no-scrollbar"
            >
                {sets.map((set) => {
                    const isActive = set.id === activeId;
                    return (
                        <button
                            key={set.id}
                            id={`tab-${set.id}`}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`panel-${set.id}`}
                            onClick={() => setActiveId(set.id)}
                            className="relative flex flex-col items-center gap-1 px-4 py-3 rounded-2xl transition-all duration-200 shrink-0"
                            style={{
                                background: isActive ? set.bgColor : "rgba(255,248,238,0.6)",
                                border: `2px solid ${isActive ? set.accentColor : "rgba(120,80,40,0.15)"}`,
                                boxShadow: isActive
                                    ? `0 4px 16px -4px ${set.accentColor}55`
                                    : "0 2px 8px -4px rgba(60,40,20,0.18)",
                            }}
                        >
                            <span className="text-2xl leading-none">{set.emoji}</span>
                            <span
                                className="font-hand font-semibold text-[0.88rem] leading-none whitespace-nowrap"
                                style={{ color: isActive ? set.accentColor : "#1a1a1a99" }}
                            >
                                {set.label}
                            </span>
                            {isActive && (
                                <span
                                    className="-bottom-[3px] left-1/2 absolute rounded-full w-8 h-[3px] -translate-x-1/2"
                                    style={{ background: set.accentColor }}
                                    aria-hidden
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* ── Song panels ──────────────────────────────────────────── */}
            {sets.map((set) => (
                <div
                    key={set.id}
                    id={`panel-${set.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${set.id}`}
                    hidden={set.id !== activeId}
                    className="space-y-6"
                >
                    {set.songs.map((song, i) => (
                        <div
                            key={song.id}
                            className="rounded-2xl overflow-hidden paper-card paper-card--clean"
                            style={{
                                transform: `rotate(${i % 2 === 0 ? -0.4 : 0.5}deg)`,
                            }}
                        >
                            {/* Song header strip */}
                            <div
                                className="flex items-center gap-3 px-5 py-3"
                                style={{
                                    background: `linear-gradient(120deg, ${set.accentColor}22, ${set.accentColor}08)`,
                                    borderBottom: `2px solid ${set.accentColor}33`,
                                }}
                            >
                                <span className="text-2xl">{set.emoji}</span>
                                <div>
                                    <h3 className="font-display text-ink text-xl leading-tight">
                                        {song.title}
                                    </h3>
                                    {song.artist && (
                                        <p
                                            className="font-serif-d text-[0.65rem] uppercase tracking-[0.2em]"
                                            style={{ color: set.accentColor }}
                                        >
                                            {song.artist}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Lyrics body */}
                            <div className="px-5 py-5">
                                <pre
                                    className="font-hand text-[1.1rem] text-ink/85 leading-relaxed whitespace-pre-wrap"
                                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                                >
                                    {song.lyrics}
                                </pre>
                            </div>

                            {/* Washi tape decoration */}
                            <span
                                className="-top-3 right-10 absolute -rotate-2 pointer-events-none washi"
                                style={{
                                    background: `repeating-linear-gradient(45deg, ${set.accentColor}55 0 8px, ${set.accentColor}33 8px 16px)`,
                                }}
                                aria-hidden
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
