"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/content";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-3">
      <div
        className="flex w-full max-w-md items-stretch justify-around rounded-2xl border border-[rgba(120,80,40,0.18)] bg-[rgba(255,248,238,0.72)] px-2 py-1.5 shadow-[0_8px_30px_-10px_rgba(60,40,20,0.45)] backdrop-blur-md"
      >
        {NAV.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="group relative flex min-h-[48px] min-w-[48px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1 transition-colors"
            >
              <span
                className={`text-xl transition-transform duration-200 ${
                  active ? "scale-110" : "opacity-70 group-hover:opacity-100"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`font-serif-d text-[0.62rem] uppercase tracking-[0.14em] ${
                  active ? "text-terracotta" : "text-ink/55"
                }`}
              >
                {item.label}
              </span>
              {active && (
                <span className="absolute -bottom-0.5 h-[3px] w-7 rounded-full bg-gold" aria-hidden />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
