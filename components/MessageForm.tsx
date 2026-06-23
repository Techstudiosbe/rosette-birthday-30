"use client";

import { useRef, useState } from "react";
import { MESSAGES_FORM } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";
import ScrapbookCard from "./ScrapbookCard";

const F = MESSAGES_FORM.fields;

type Status = "idle" | "sending" | "sent" | "error";

export default function MessageForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") return <SuccessCard />;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <Field name="name" label={F.name} required>
        <input name="name" required maxLength={80} className="field-paper" placeholder="e.g. Grace" />
      </Field>

      <Field name="favourite" label={F.favourite} required>
        <textarea name="favourite" required rows={3} maxLength={1200} className="field-paper resize-y" />
      </Field>

      <Field name="funny" label={F.funny}>
        <textarea name="funny" rows={3} maxLength={1200} className="field-paper resize-y" />
      </Field>

      <Field name="blessing" label={F.blessing} required>
        <textarea name="blessing" required rows={3} maxLength={1500} className="field-paper resize-y" />
      </Field>

      <Field name="anything" label={F.anything}>
        <textarea name="anything" rows={2} maxLength={1200} className="field-paper resize-y" />
      </Field>

      {status === "error" && (
        <p className="font-body text-sm text-terracotta" role="alert">
          {error}
        </p>
      )}

      <div className="flex justify-center pt-1">
        <button type="submit" disabled={status === "sending"} className="btn-washi">
          {status === "sending" ? "Sending…" : "Send with love 💛"}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  required,
  children,
}: {
  name: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <ScrapbookCard rotate={0} className="px-4 py-4 sm:px-5 sm:py-5">
      <label htmlFor={name} className="mb-2 block font-display text-base text-ink">
        {label} {required && <span className="text-terracotta">*</span>}
      </label>
      {children}
    </ScrapbookCard>
  );
}

function SuccessCard() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const burst = ref.current?.querySelectorAll(".burst");
      if (burst?.length) {
        gsap.fromTo(
          burst,
          { opacity: 0, scale: 0, x: 0, y: 0 },
          {
            opacity: 1,
            scale: 1,
            x: () => gsap.utils.random(-130, 130),
            y: () => gsap.utils.random(-120, 30),
            rotate: () => gsap.utils.random(-40, 40),
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.05,
          }
        );
        gsap.to(burst, { opacity: 0, duration: 0.6, delay: 1.2, stagger: 0.03 });
      }
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.9, y: 16 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(1.5)" }
      );
    },
    { scope: ref }
  );

  const emojis = ["💛", "✨", "🙏", "🤍", "⭐", "💛", "✨"];

  return (
    <div ref={ref} className="relative mx-auto max-w-md text-center">
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2">
        {emojis.map((e, i) => (
          <span key={i} className="burst absolute text-2xl">
            {e}
          </span>
        ))}
      </div>
      <ScrapbookCard tape="top" tapeTone="washi--coral" className="px-7 py-10">
        <p className="mb-2 text-4xl">🙏</p>
        <h2 className="font-display text-3xl text-ink">Thank you!</h2>
        <p className="mx-auto mt-3 max-w-xs font-body text-ink/80">
          Your words have been sent straight to Rosette. May God bless you for blessing her. 💛
        </p>
        <p className="mt-4 font-hand text-2xl text-terracotta">You are ever so loved.</p>
      </ScrapbookCard>
    </div>
  );
}
