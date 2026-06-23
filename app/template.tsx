"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      // "Dreamy cloudy" enter transition: fade in, slightly float up, remove blur
      gsap.fromTo(
        container.current,
        { opacity: 0, y: 20, filter: "blur(12px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
        }
      );
    },
    { dependencies: [pathname] }
  );

  return (
    <div ref={container} className="min-h-full">
      {children}
    </div>
  );
}
