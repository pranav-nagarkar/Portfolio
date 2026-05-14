"use client";

import { useInView } from "@/hooks/use-in-view";
import { NextProject } from "@/components/case-study/next-project";
import { Navigation } from "@/components/navigation";
import { ImageSlideshow } from "@/components/case-study/image-slideshow";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function Section({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  className = className || "";
  delay = delay || 0;
  const { ref, isInView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 pb-3 border-b border-border">
      {children}
    </p>
  );
}

export default function RichbearPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-24">
        <div
          className="transition-all duration-700 opacity-100 translate-y-0"
          style={{ animationFillMode: "both" }}
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
            Brand Strategy · F&amp;B · Café Chain ·
          </p>

          <h1 className="font-serif text-6xl md:text-8xl lg:text-[108px] leading-none tracking-tight mb-6">
            Come Alive.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            A brand strategy for Richbear — a multi-city café chain entering a
            market where coffee has been commoditised and every competitor is
            chasing the same emotional territory.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-8">
            {[
              { label: "Category", value: "F&B / Cafés" },
              { label: "Scope", value: "Full brand strategy" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  {label}
                </span>
                <span className="text-sm text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Slideshow */}
      <ImageSlideshow
        images={[
          "/images/richbearcover.jpg",
          "/images/richbear2.jpg",
          "/images/richbear.jpg",
        ]}
        alt="Richbear brand visuals"
      />

      {/* Body content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 01 — The Problem */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>01 — The Problem</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Coffee is everywhere. Being relevant is the hard part.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Richbear operates in one of India&apos;s most crowded markets. Café
            Coffee Day pioneered the category. Starbucks owns aspiration. Blue
            Tokai and Subko own craft. Third Wave has community. Every brand in
            the space is chasing the same educated, urban, coffee-literate
            consumer — and most are saying the same things to get there.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            For a new multi-city entrant, differentiation couldn&apos;t come
            from product quality alone. Quality is assumed. Ambience is
            expected. Even speed is table stakes. The question wasn&apos;t what
            to put on the menu. It was what to put in people&apos;s minds.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;Coffee is commoditised. Brands now compete on daily relevance
            — not taste, not ambience, not storytelling, but fit.&rdquo;
          </blockquote>
        </Section>

        {/* 02 — The Insight */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>02 — The Insight</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                Most people move through their days on autopilot.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The market had split into two clear roles: occasion-led brands
                (coffee as destination, as experience, as indulgence) and
                habit-led brands (coffee as ritual, as fuel, as commodity). Both
                were crowded. Both were loud.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                But there was a third space — quieter and underowned. A brand
                built around the feeling of being genuinely present in your own
                day. Not dramatic aliveness. Not Instagram aliveness. The small,
                grounded, deeply satisfying moment when the autopilot switches
                off.
              </p>
            </div>

            {/* Gap cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  The overcrowded space
                </p>
                <p className="text-foreground leading-relaxed">
                  Destination cafés chasing experience. Grab-and-go brands
                  chasing speed. Both performing at the extremes.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  The open space
                </p>
                <p className="text-foreground leading-relaxed">
                  A brand that is functional, dependable, and present — a calm
                  constant in a noisy, accelerated day.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 03 — The Singular Idea */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>03 — The Singular Idea</SectionLabel>

          {/* Essence hero */}
          <div className="bg-secondary py-20 md:py-32 flex flex-col items-center justify-center text-center mb-10 rounded-sm">
            <span className="font-serif text-7xl md:text-9xl italic leading-none mb-3">
              Aliveness
            </span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Brand Essence
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every brand needs one idea it can fully own. For Richbear, that
              idea is aliveness — not as a marketing claim, but as a design
              principle. It determines what the food tastes like, how the space
              feels, how staff interact with customers, and how the brand
              speaks. It is the singular standard against which every decision
              gets measured.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Richbear is the place where you come alive. Not by selling you a
              product, but by creating the conditions for a moment of genuine
              presence.
            </p>
          </div>
        </Section>

        {/* 04 — Brand Architecture */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>04 — Brand Architecture</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            A system built around one feeling.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                title: "Brand Philosophy",
                body: "Life becomes richer when you're alive to it. The inward-facing belief that shapes every internal decision.",
              },
              {
                title: "Brand Anchor",
                body: "To make every moment worth showing up for. The outward-facing purpose customers experience in every visit.",
              },
              {
                title: "Brand Values",
                body: "Warmth. Energy. Abundance. Authenticity. Each value earns its place by directly serving the essence — not decorating it.",
              },
              {
                title: "Brand Personality",
                body: "The Hero (bold, purposeful, reliable) balanced by The Jester (playful, warm, unbothered). One earns trust. The other creates affection.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="border border-border p-6 md:p-8 rounded-sm"
              >
                <h3 className="font-serif text-xl mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            The dual archetype was a deliberate structural choice. A brand built
            entirely on purpose risks becoming preachy. A brand built entirely
            on wit risks becoming forgettable. The Hero gives Richbear its
            mission. The Jester keeps it human.
          </p>
        </Section>

        {/* 05 — Positioning */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>05 — Positioning</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Where Richbear lives in the mind.
          </h2>
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-snug border-l-2 border-foreground pl-6 mb-8">
            &ldquo;For urban Indians moving through their days on autopilot,
            Richbear is the F&amp;B brand that interrupts the routine and brings
            you back to life.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            The positioning statement does two things at once: it defines the
            audience precisely (urban Indians on autopilot — a behavioural
            state, not a demographic), and it gives the brand a clear functional
            role in their lives. It is not aspirational in the conventional
            sense. It is emotionally specific, which is more durable.
          </p>
        </Section>

        {/* 06 — Communication Pillars */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>06 — Communication Pillars</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            Four territories. One consistent feeling.
          </h2>

          <div className="flex flex-col divide-y divide-border">
            {[
              {
                name: "The Alive Moment",
                tag: "Primary territory",
                desc: "Content that captures real, recognisable moments of genuine presence — the 3pm rescue, the first sip that makes you stop, the conversation that goes somewhere unexpected. Not aspirational. Everyday.",
              },
              {
                name: "Real Food, Real Good",
                tag: "Product truth",
                desc: "The food and beverage isn't a backdrop — it's the vehicle for aliveness. Communicated through sensory, grounded language. Not through ingredient lists or wellness claims.",
              },
              {
                name: "The Richbear Community",
                tag: "Belonging",
                desc: "Every location has its regulars, its corner table conversations, its 7am faces. Richbear isn't just somewhere you go — it's somewhere you belong.",
              },
              {
                name: "Bear Necessities",
                tag: "The playful side",
                desc: "Not everything needs to mean something. This is the Jester's pillar — light, self-aware, absolutely unbothered by the pressure to be profound.",
              },
            ].map(({ name, tag, desc }) => (
              <div
                key={name}
                className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-6 md:py-8"
              >
                <div>
                  <p className="text-foreground font-medium mb-1">{name}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">
                    {tag}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 07 — Tone of Voice */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>07 — Tone of Voice</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4 max-w-2xl">
            How the brand sounds.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Warm, alive, grounded, playful. The voice balances the Hero&apos;s
            inspiration with the Jester&apos;s wit — honest, specific, never
            overhyped.
          </p>

          <div className="flex flex-col divide-y divide-border">
            {[
              {
                mode: "Warm",
                line: "Some days you need someone in your corner. Today, that's us. Come in.",
              },
              {
                mode: "Alive",
                line: "3pm. The day isn't over. Neither are you.",
              },
              {
                mode: "Authentic",
                line: "We don't do complicated. We do good. Every single time.",
              },
              {
                mode: "Playful",
                line: "Mondays are just Fridays that got lost. We'll help you find your way.",
              },
            ].map(({ mode, line }) => (
              <div
                key={mode}
                className="grid md:grid-cols-[120px_1fr] gap-4 py-5 md:py-6 items-baseline"
              >
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  {mode}
                </span>
                <span className="font-serif text-xl md:text-2xl italic leading-snug">
                  &ldquo;{line}&rdquo;
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Tagline hero */}
        <Section className="mb-20 md:mb-28">
          <div className="py-20 md:py-32 border-t border-b border-border text-center">
            <p className="font-serif text-6xl md:text-8xl leading-none">
              Richbear. <span className="italic">Come Alive.</span>
            </p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-6">
              Brand essence → tagline. The same idea, made human.
            </p>
          </div>
        </Section>

        {/* Closing reflection */}
        <Section className="mb-28 md:mb-40 max-w-3xl">
          <SectionLabel>What this project shows</SectionLabel>
          <p className="text-muted-foreground leading-relaxed">
            Richbear is a case study in competitive white-space mapping —
            finding the gap not through feature differentiation but through
            emotional territory. The insight (autopilot interruption), the
            architecture (dual archetype), and the communication system all flow
            from a single strategic premise. That coherence is the work.
          </p>
        </Section>
      </div>

      {/* Next project */}
      <NextProject
        title="GoChanakya"
        subtitle="Rebranding a financial education firm for India's first-time earners — 15% sales uplift post-launch."
        href="/gochanakya"
        image="/images/gc4.jpeg"
      />
      {/* Previous project */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Link
          href="/uprun"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">
            Previous: Up &amp; Run
          </span>
        </Link>
      </div>
    </main>
  );
}
