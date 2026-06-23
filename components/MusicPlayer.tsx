"use client";

import { useEffect, useRef, useState } from "react";

const TRACK = "/audio/worship-ambient.mp3";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);
    const [available, setAvailable] = useState(true);

    useEffect(() => {
        const a = new Audio(TRACK);
        a.loop = true;
        a.volume = 0.45;
        a.preload = "auto";
        a.addEventListener("error", () => setAvailable(false));
        audioRef.current = a;

        const startOnInteraction = () => {
            a.play().then(() => setPlaying(true)).catch(() => {});
            window.removeEventListener("click", startOnInteraction);
            window.removeEventListener("touchstart", startOnInteraction);
            window.removeEventListener("keydown", startOnInteraction);
        };

        a.play().then(() => setPlaying(true)).catch(() => {
            window.addEventListener("click", startOnInteraction);
            window.addEventListener("touchstart", startOnInteraction);
            window.addEventListener("keydown", startOnInteraction);
        });

        return () => {
            a.pause();
            audioRef.current = null;
            window.removeEventListener("click", startOnInteraction);
            window.removeEventListener("touchstart", startOnInteraction);
            window.removeEventListener("keydown", startOnInteraction);
        };
    }, []);

    async function toggle() {
        const a = audioRef.current;
        if (!a) return;
        if (playing) {
            a.pause();
            setPlaying(false);
        } else {
            try {
                await a.play();
                setPlaying(true);
            } catch {
                setAvailable(false);
            }
        }
    }

    return (
        <button
            onClick={toggle}
            aria-label={playing ? "Pause music" : "Play music"}
            title={
                available
                    ? playing
                        ? "Pause music"
                        : "Play worship music"
                    : "Add /public/audio/worship-ambient.mp3"
            }
            className="right-4 bottom-24 z-50 fixed flex justify-center items-center bg-[rgba(255,248,238,0.85)] shadow-[0_8px_22px_-8px_rgba(60,40,20,0.5)] backdrop-blur-md border border-[rgba(120,80,40,0.2)] rounded-full w-12 h-12 text-terracotta hover:scale-105 active:scale-95 transition-transform"
        >
            {playing && (
                <span
                    className="absolute inset-0 bg-gold/30 rounded-full animate-ping"
                    aria-hidden
                />
            )}
            <span className="relative text-lg">{playing ? "♪" : "♫"}</span>
        </button>
    );
}
