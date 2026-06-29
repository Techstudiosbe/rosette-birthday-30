"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/content";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="bottom-0 z-50 fixed inset-x-0 flex justify-center px-3 pb-3">
            <div className="flex justify-around items-stretch bg-[rgba(255,248,238,0.72)] shadow-[0_8px_30px_-10px_rgba(60,40,20,0.45)] backdrop-blur-md px-2 py-1.5 border border-[rgba(120,80,40,0.18)] rounded-2xl w-full max-w-md">
                {NAV.map((item) => {
                    const active =
                        item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className="group relative flex flex-col flex-1 justify-center items-center gap-0.5 px-1 py-1 rounded-xl min-w-[48px] min-h-[48px] transition-colors"
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
                                <span
                                    className="-bottom-0.5 absolute bg-gold rounded-full w-7 h-[3px]"
                                    aria-hidden
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
