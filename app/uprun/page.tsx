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

const slideshowImages = [
  "/images/ur.jpeg",
  "/images/ur4.jpg",
  "/images/urprod.jpg",
  "/images/urprod2.jpg",
];

export default function UpRunPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-24">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
          Brand Strategy · Research · Hydration ·
        </p>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-[108px] leading-none tracking-tight mb-6">
          Up &amp; Run.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
          Research and strategy for a children&apos;s hydration supplement —
          finding the insight that reframed a supplement as fuel for the way
          kids already live.
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-8">
          {[
            { label: "Category", value: "Hydration / FMCG" },
            { label: "Scope", value: "Research & brand strategy" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                {label}
              </span>
              <span className="text-sm text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Slideshow */}
      <ImageSlideshow images={slideshowImages} alt="Up and Run brand visuals" />

      {/* Body content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 01 — The Brief */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>01 — The Brief</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            An established brand. A completely new audience.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Up &amp; Run had built a credible hydration brand for active adults
            — gym goers, athletes, everyday movers. Now they wanted to extend
            into a new and very different audience: children aged 3–14.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The product was a clean, need-based hydration supplement designed to
            support kids through their days. The brief was to find the central
            idea that communication could be built on — something that worked
            for the new product while staying true to what Up &amp; Run already
            stood for.
          </p>
        </Section>

        {/* 02 — The Problem */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>02 — The Problem</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                The supplement perception problem goes deeper than most brands
                acknowledge.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Parents are comfortable with what they know — Horlicks,
                Bournvita, sugary drinks, milk. These aren&apos;t necessarily
                good choices nutritionally, but they&apos;re familiar. They
                don&apos;t feel like interventions. They feel like food.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Supplements carry a different association — something medicinal,
                something that implies the child is lacking. That perception
                doesn&apos;t disappear with better packaging or cleaner
                ingredient lists. It has to be reframed entirely.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Tension one
                </p>
                <p className="text-foreground leading-relaxed">
                  Supplements feel medicinal. Parents associate them with
                  deficiency, not daily life. The product needed to feel like
                  fuel, not a fix.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Tension two
                </p>
                <p className="text-foreground leading-relaxed">
                  Parents were problem aware but solution unaware. They knew
                  something was off — afternoon fatigue, post-sport exhaustion —
                  but hadn&apos;t connected it to hydration specifically.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 03 — The Research */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>03 — The Research</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Designed to map what parents were actually thinking.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I designed a qualitative research questionnaire built around four
            areas: what parents noticed about their children&apos;s energy
            through the day, what they were currently giving them and why, what
            their associations with supplements were, and what would make them
            trust a new product in this space.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What came back was consistent. Parents weren&apos;t thinking about
            hydration at all. They were thinking about energy — and solving it
            with familiar, sugar-heavy products because the alternatives felt
            clinical or unnecessary.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I also mapped how global and domestic competitors were approaching
            children&apos;s packaging — Cure Hydration, Welle Kids, Hiya, Liquid
            IV. A consistent pattern emerged: most brands spoke to parents
            through clinical and functional language while trying to attract
            children through colour and character. Very few were doing both
            well. Nobody in India was doing it at all.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;No brands in the kids hydration space in India. That was the
            opening.&rdquo;
          </blockquote>
        </Section>

        {/* 04 — The Insight */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>04 — The Insight</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Kids don&apos;t need to be fixed. They&apos;re already moving.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Almost every brand in the children&apos;s supplement category speaks
            to a deficit. Your child lacks immunity. Your child lacks nutrition.
            Your child lacks focus. The communication is built around
            what&apos;s missing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            But that&apos;s not how children experience themselves. Children
            don&apos;t think about what they lack. They think about what
            they&apos;re doing next. School. Sports. Running around. The next
            thing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Children are already the most active demographic there is. They have
            more on their plates than most adults — more movement, more energy
            expenditure, more heat exposure, more physical output. The hydration
            they need isn&apos;t corrective. It&apos;s fuel. This reframe
            changed everything.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;The product wasn&apos;t a supplement that filled a gap. It
            was hydration that kept up with kids who never slow down.&rdquo;
          </blockquote>
        </Section>

        {/* 05 — The Singular Idea */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>05 — The Singular Idea</SectionLabel>

          <div className="bg-secondary py-20 md:py-32 flex flex-col items-center justify-center text-center mb-10 rounded-sm">
            <span className="font-serif text-7xl md:text-9xl italic leading-none mb-3">
              Movement
            </span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Brand Essence
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Movement is the proof of life — it is how we grow, adapt, and feel
              alive. For Up &amp; Run, movement became the thread that connected
              the adult product and the children&apos;s product without forcing
              either into an uncomfortable fit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Athletes move to perform. Adults move to keep pace. Kids move
              because that&apos;s just what kids do. One idea. Three audiences.
              One brand.
            </p>
          </div>
        </Section>

        {/* 06 — Brand Architecture */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>06 — Brand Architecture</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            A system built to serve two audiences simultaneously.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                title: "Brand Philosophy",
                body: "Movement is the proof of life — it is how we grow, adapt, and feel alive. The inward-facing belief that every product decision flows from.",
              },
              {
                title: "Brand Anchor",
                body: "We support every kind of movement, through everyday hydration. The outward-facing promise that works for athletes, adults, and children alike.",
              },
              {
                title: "Brand Values",
                body: "Simplicity. Integrity. Functionality. Empathy. Community. Resilience. Each value serves the person behind the product — not the product itself.",
              },
              {
                title: "Brand Personality",
                body: "The Hero (capability, progress, confidence) balanced by The Explorer (freedom, curiosity, everyday adventure). One says you can. The other says go find out.",
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
            The dual archetype served the dual audience. The Hero spoke to
            parents — your child is capable, and this supports that capability.
            The Explorer spoke to children — the world is yours to run through,
            and this keeps you running. Both archetypes served the same product
            but met their respective audiences exactly where they were.
          </p>
        </Section>

        {/* 07 — Positioning */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>07 — Positioning</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Where Up &amp; Run lives in the mind.
          </h2>
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-snug border-l-2 border-foreground pl-6 mb-8">
            &ldquo;For active individuals who refuse to slow down, Up &amp; Run
            is a hydration brand with clean, need-based formulations that help
            your body stay hydrated, so you can keep moving.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            The positioning centres on behaviour, not demographics.
            &ldquo;Active individuals who refuse to slow down&rdquo; describes a
            mindset that applies equally to a parent watching their child sprint
            through a school sports day and to the child doing the sprinting.
            That elasticity is what makes the idea work across the full brand
            architecture.
          </p>
        </Section>

        {/* 08 — Communication Pillars */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>08 — Communication Pillars</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            Five territories. One consistent idea.
          </h2>

          <div className="flex flex-col divide-y divide-border">
            {[
              {
                name: "Need-Based Hydration",
                tag: "Product territory",
                desc: "We highlight what makes each product unique — the function, the benefit, the flavour, and the specific need it solves. Clear, simple, purposeful. Hydration built for your needs, not the other way round.",
              },
              {
                name: "Movement & Everyday Hydration",
                tag: "Philosophy territory",
                desc: "At the core of Up & Run is movement — physical, mental, emotional. We build hydration that keeps people going through their every day, across age and intensity.",
              },
              {
                name: "Everyday Support & Encouragement",
                tag: "Emotion territory",
                desc: "We speak to the human behind the hustle, warmly and honestly. Encouraging people to listen to their bodies, take breaks, drink up, and keep going.",
              },
              {
                name: "Simple Hydration Science",
                tag: "Education territory",
                desc: "We simplify the science. Making it easy to understand what's in your mix, why it matters, and how to use it. ORS was made for emergencies. We're made for every day.",
              },
              {
                name: "Real Movement Stories",
                tag: "Community territory",
                desc: "Stories from the movers, thinkers, parents, and kids who show how hydration fits into real life. Everyone here is pushing for something. That's what we have in common.",
              },
            ].map(({ name, tag, desc }) => (
              <div
                key={name}
                className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-6 md:py-8"
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

        {/* 09 — Tone of Voice */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>09 — Tone of Voice</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4 max-w-2xl">
            How the brand sounds.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Bold, clear, encouraging, human. The confidence of the Hero with the
            openness of the Explorer — never overhyped, never preachy, always in
            service of the person moving.
          </p>

          <div className="flex flex-col divide-y divide-border">
            {[
              {
                mode: "Confident",
                line: "Your day moves fast, and right hydration helps you move with it.",
              },
              {
                mode: "Human",
                line: "Tired mid-meeting or mid-marathon? A sachet, some water, and you're back at it.",
              },
              {
                mode: "Functional",
                line: "Electrolytes your body loses. Hydration your day needs. What's inside? Exactly what helps, and nothing that doesn't.",
              },
              {
                mode: "Empowering",
                line: "You've got places to be. We've got hydration that keeps up.",
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
            <p className="font-serif text-5xl md:text-7xl leading-none">
              Hydration that <span className="italic">keeps you moving.</span>
            </p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-6">
              Brand essence → tagline. Movement made simple.
            </p>
          </div>
        </Section>

        {/* Closing reflection */}
        <Section className="mb-28 md:mb-40 max-w-3xl">
          <SectionLabel>What this project shows</SectionLabel>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Up &amp; Run taught me something specific about entering a new
            audience with an existing brand. The temptation is always to build
            something entirely new to speak to a new audience. But the more
            honest and often more powerful move is to find the thread that
            already exists in the brand and follow it somewhere new.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Up &amp; Run was already about movement. Children are already
            movers. The insight wasn&apos;t invented. It was recognised.
            That&apos;s the work I find most interesting — not building a brand
            idea from nothing, but finding the one that was already there,
            waiting to be seen.
          </p>
        </Section>
      </div>

      {/* Next project */}
      <NextProject
        title="Richbear"
        subtitle="A brand strategy for a multi-city café chain entering a market where coffee has been commoditised."
        href="/Richbear"
        image="/images/richbearcover.jpg"
      />
      {/* Previous project */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Link
          href="/aeter"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">
            Previous: Aeter
          </span>
        </Link>
      </div>
    </main>
  );
}
