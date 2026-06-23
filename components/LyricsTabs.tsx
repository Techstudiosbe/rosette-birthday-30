"use client";

import { useState } from "react";
import type { LyricsSet } from "@/lib/content";

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
        className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-1"
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
              className="relative flex shrink-0 flex-col items-center gap-1 rounded-2xl px-4 py-3 transition-all duration-200"
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
                className="whitespace-nowrap font-hand text-[0.88rem] font-semibold leading-none"
                style={{ color: isActive ? set.accentColor : "#1a1a1a99" }}
              >
                {set.label}
              </span>
              {isActive && (
                <span
                  className="absolute -bottom-[3px] left-1/2 h-[3px] w-8 -translate-x-1/2 rounded-full"
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
              className="paper-card paper-card--clean overflow-hidden rounded-2xl"
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
                  <h3 className="font-display text-xl leading-tight text-ink">
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
                  className="whitespace-pre-wrap font-hand text-[1.1rem] leading-relaxed text-ink/85"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  {song.lyrics}
                </pre>
              </div>

              {/* Washi tape decoration */}
              <span
                className="washi pointer-events-none absolute -top-3 right-10 -rotate-2"
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
