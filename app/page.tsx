// import Link from "next/link";
import Hero from "@/components/Hero";
// import MessageWall from "@/components/MessageWall";
// import Reveal from "@/components/Reveal";

export default function Home() {
    return (
        <>
            <Hero />

            {/* <section className="mt-10 sm:mt-16">
        <Reveal className="text-center">
          <p className="eyebrow">A wall of love</p>
          <h2 className="mt-2 font-display text-ink text-3xl sm:text-4xl">Words from those who love her</h2>
          <p className="mx-auto mt-2 max-w-md font-body text-ink/70">
            A few notes already left for Rosette. Add yours to the pile.
          </p>
        </Reveal>

        <div className="mt-8">
          <MessageWall />
        </div>

        <Reveal className="flex justify-center mt-8">
          <Link href="/messages" className="btn-washi">
            Add your words 💛
          </Link>
        </Reveal>
      </section> */}
        </>
    );
}
