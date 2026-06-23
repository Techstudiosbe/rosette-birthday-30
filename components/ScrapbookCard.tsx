import type { CSSProperties, ReactNode } from "react";

type Tape = "top" | "top-left" | "top-right" | "none";

type Props = {
  children: ReactNode;
  className?: string;
  rotate?: number;
  tape?: Tape;
  tapeTone?: "" | "washi--coral" | "washi--plum";
  clean?: boolean; // straight edge instead of torn
  style?: CSSProperties;
};

/** Torn-paper card with optional washi tape, slightly rotated like a real scrap. */
export default function ScrapbookCard({
  children,
  className = "",
  rotate = 0,
  tape = "none",
  tapeTone = "",
  clean = false,
  style,
}: Props) {
  return (
    <div
      className={`paper-card ${clean ? "paper-card--clean" : ""} ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}
    >
      {tape !== "none" && (
        <span
          aria-hidden
          className={`washi ${tapeTone}`}
          style={
            tape === "top"
              ? { top: -12, left: "50%", marginLeft: -48, transform: "rotate(-3deg)" }
              : tape === "top-left"
                ? { top: -10, left: 14, transform: "rotate(-18deg)" }
                : { top: -10, right: 14, transform: "rotate(16deg)" }
          }
        />
      )}
      {children}
    </div>
  );
}
