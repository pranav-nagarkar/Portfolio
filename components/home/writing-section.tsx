"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const essays = [
  {
    title: "God of the Gaps",
    hook: "What the Dhurandhar films reveal when read through narrative transportation theory: not just a hit franchise, but a propaganda template.",
    tags: ["Propaganda", "Film"],
    readTime: "6 min read",
    image: "/images/writing/god-of-the-gaps.jpg",
    href: "https://pennyformywhats.substack.com/p/god-of-the-gaps",
  },
  {
    title: "We've All Cried Wolf",
    hook: "AI discourse runs on a quiet asymmetry: doomers get credibility for free, optimists have to earn it. A look at who actually profits from the fear.",
    tags: ["AI", "Culture"],
    readTime: "8 min read",
    image: "/images/writing/weve-all-cried-wolf.jpg",
    href: "https://pennyformywhats.substack.com/p/weve-all-cried-wolf",
  },
];

const SUBSTACK_URL = "https://pennyformywhats.substack.com";

export function WritingSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="writing"
      ref={ref}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tight">
            Essays
          </h2>
          <span className="text-sm tracking-wider uppercase text-muted-foreground">
            02 Essays
          </span>
        </div>

        <p
          className={`font-serif text-lg md:text-xl italic text-muted-foreground max-w-xl mb-12 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Same instinct, different format: finding the argument underneath the
          noise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl">
          {essays.map((essay, index) => (
            <a
              key={essay.title}
              href={essay.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:border-foreground/40 hover:-translate-y-1 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={essay.image}
                  alt={essay.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <span className="text-xs tracking-wider uppercase text-accent block mb-2">
                  {essay.readTime}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight leading-snug mb-2">
                  {essay.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {essay.hook}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {essay.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-wider uppercase bg-foreground/5 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 group mt-10"
        >
          <span className="text-sm tracking-wider uppercase text-muted-foreground transition-colors group-hover:text-foreground">
            More on Substack
          </span>
          <span className="w-8 h-px bg-foreground transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
        </a>
      </div>
    </section>
  );
}
