import { STICKERS, type StickerKey } from "@/lib/content";

type Props = {
  name: StickerKey;
  /** width in px (height auto) */
  size: number;
  className?: string;
  rotate?: number;
  style?: React.CSSProperties;
  alt?: string;
};

/** A decorative Canva sticker. Absolutely position it via `className`. */
export default function Sticker({ name, size, className = "", rotate = 0, style, alt = "" }: Props) {
  // Deterministic pseudo-random values to prevent hydration mismatches
  const hash = name.length * 13 + Math.abs(rotate) * 7;
  const delay = -1 * (hash % 6); // Between -6s and 0s
  const duration = 5 + (hash % 4); // Between 5s and 8s
  const isReversed = hash % 2 === 0;

  return (
    <div
      className={`sticker-wrapper ${className} z-10`}
      style={{ width: size, transform: `rotate(${rotate}deg)`, ...style }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={STICKERS[name]}
        alt={alt}
        aria-hidden={alt ? undefined : true}
        width={size}
        className={`sticker block w-full h-auto animate-slow-float`}
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          animationDirection: isReversed ? "reverse" : "normal",
        }}
        draggable={false}
      />
    </div>
  );
}
