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
  "/images/Untie.jpeg",
  "/images/Untiemessages.jpg",
  "/images/untienarrative.jpg",
  "/images/UntiePackaging.jpg",
];

export default function UntiePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-24">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
          Brand Strategy · Curl Care · Hair &amp; Beauty ·
        </p>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-[108px] leading-none tracking-tight mb-6">
          Untie.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
          Standing out on a crowded shelf — brand strategy for a curl care brand
          in India&apos;s most competitive beauty category. Confidential.
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-8">
          {[
            { label: "Category", value: "Hair Care / Beauty" },
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
      </section>

      {/* Slideshow */}
      <ImageSlideshow
        images={slideshowImages}
        alt="Untie curl care brand visuals"
      />

      {/* Body content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 01 — The Brief */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>01 — The Brief</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            A name and a feeling. Not yet a brand.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Untie came to me knowing they wanted to build something in the curl
            care space — but with a specific conviction that most of the
            category was getting it wrong. Too many products. Too many steps.
            Too much pressure on people who just wanted their hair to cooperate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The challenge was to take this intuition and build it into a
            complete brand system — positioning, philosophy, voice, product
            architecture — that could hold the weight of the idea without
            diluting it. The scope was full: competitive research, audience
            mapping, singular idea, brand strategy, and naming.
          </p>
        </Section>

        {/* 02 — The Problem */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>02 — The Problem</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                Curl care taught people that complexity equals commitment.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Curly hair genuinely is more complex than straight hair — it is
                more porous, more reactive, more sensitive to humidity and
                climate. The science behind it is real. But the category used
                that science to justify longer routines, more products, more
                steps, more decisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over time, care stopped being something you do. It became
                something you manage. Routines became hard to repeat. When
                routines are hard to repeat, results become unreliable. And
                unreliable results lead to abandonment — then starting over with
                a new product that promises to fix everything.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  What the category was doing
                </p>
                <p className="text-foreground leading-relaxed">
                  Every brand justified complexity with science. The explanation
                  allowed the routine to expand — not because it needed to, but
                  because the logic permitted it.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  What people were actually experiencing
                </p>
                <p className="text-foreground leading-relaxed">
                  Overwhelm. Fatigue. Doubt. Pressure. Care had become an
                  obligation rather than something that fit into life.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 03 — The Insight */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>03 — The Insight</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Simplicity isn&apos;t about doing less. It&apos;s about doing what
            works.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The insight didn&apos;t come from rejecting the science. It came
            from following it further. When you actually understand what affects
            curl health — porosity, protein-moisture balance, cuticle behaviour
            — a lot of the additional steps fall away. Not because they
            don&apos;t exist, but because they don&apos;t all matter equally for
            every person, every day.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Simplicity, in this context, isn&apos;t minimalism or aesthetic
            restraint. It&apos;s clarity after understanding. When care becomes
            clear, it becomes consistent. And when it becomes consistent, it
            works.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The emotional dimension was equally important. The real result of
            simplifying a routine isn&apos;t just healthier curls. It&apos;s
            relief. Relief from planning. Relief from the anxiety of missing a
            step. Relief from feeling like you&apos;re never doing enough.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;Care is simple when you know what matters.&rdquo;
          </blockquote>
        </Section>

        {/* 04 — The Singular Idea */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>04 — The Singular Idea</SectionLabel>

          <div className="bg-secondary py-20 md:py-32 flex flex-col items-center justify-center text-center mb-10 rounded-sm">
            <span className="font-serif text-7xl md:text-9xl italic leading-none mb-3">
              Relief
            </span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Brand Essence
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not relief as a product claim. Relief as an emotional outcome. The
              feeling of finally not having to carry the weight of a routine
              that demands more than it gives. The feeling of doing exactly what
              is needed — nothing more, nothing less — and knowing that is
              enough.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This single word anchored every downstream decision: what products
              to make, how many steps to include, what to say and — crucially —
              what not to say.
            </p>
          </div>
        </Section>

        {/* 05 — Brand Architecture */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>05 — Brand Architecture</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            A system built on one act of discipline.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                title: "Brand Philosophy",
                body: "Care is simple when you know what matters. The inward-facing belief that every product, every claim, and every communication must justify its presence.",
              },
              {
                title: "Brand Anchor",
                body: "Care, the way it's meant to be. The outward-facing promise — not a feature claim, but a standard. This is what care should have always felt like.",
              },
              {
                title: "Brand Values",
                body: "Restraint. Efficacy. Simplicity. Conviction. Care. Knowledge. Each value exists to prevent the brand from becoming what it was built against.",
              },
              {
                title: "Brand Personality",
                body: "The Sage (wisdom, clarity, truth) balanced by The Everywoman (relatability, realism, accessibility). One earns trust. The other removes pressure.",
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
            The dual archetype was a deliberate structural decision. The Sage
            alone risks feeling inaccessible — knowledgeable but cold. The
            Everywoman alone risks feeling too casual to be trusted with
            something as personal as hair health. Together, they create a brand
            that knows what it&apos;s talking about and still feels like it was
            built by someone who has been in the same situation as the person
            using it.
          </p>
        </Section>

        {/* 06 — Naming */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>06 — The Name</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Untie.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            From a shortlist of seven name options — including Hairspace,
            Plentiful, Hair Over Heels, and Whelm — Untie emerged as the
            strongest because it worked on every level simultaneously.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Functionally, it describes what the product does: it untangles. The
            literal curl care reference is immediate and honest. Emotionally, it
            speaks to the relief at the heart of the brand — untying yourself
            from the pressure of overcare, from the anxiety of missing a step,
            from the belief that more is always better.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Philosophically, there&apos;s a quiet freedom in it. Not rebellion.
            Not noise. Just the calm of letting go of what wasn&apos;t
            necessary.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;Hair care, untangled.&rdquo;
          </blockquote>
        </Section>

        {/* 07 — Positioning */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>07 — Positioning</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Where Untie lives in the mind.
          </h2>
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-snug border-l-2 border-foreground pl-6 mb-8">
            &ldquo;For people tired of complex curl care, Untie is a hair care
            brand that provides relief through simplification — because
            healthier curls come from doing exactly what is necessary. Nothing
            more, nothing less.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            The positioning is built around a specific emotional state — tired
            of complexity — rather than a demographic. That choice was
            deliberate. The curl care market is already over-segmented by hair
            type, texture, and porosity. Untie needed to cut across those
            segments and speak to the shared frustration underneath all of them.
          </p>
        </Section>

        {/* 08 — Communication Pillars */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>08 — Communication Pillars</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            Five territories. One consistent promise.
          </h2>

          <div className="flex flex-col divide-y divide-border">
            {[
              {
                name: "Simple Routine",
                tag: "Product territory",
                desc: "An easy 3-step solution for curly hair. We highlight the function, the benefit, and the specific need each product solves. Clear, simple, purposeful. A simple 3-step process to make your curls shine.",
              },
              {
                name: "Indian Botanicals",
                tag: "Product truth",
                desc: "Plant-derived formulations and antioxidant-rich Indian botanical ingredients suited to Indian conditions — climate, humidity, hard water. The product earns its place through specificity, not promise.",
              },
              {
                name: "Relief is the Real Result",
                tag: "Emotion territory",
                desc: "The real benefit isn't healthy hair — it's mental relief. Relief from long routines, relief from scheduling care, relief from never feeling like you're doing enough. Less thinking. Less second-guessing.",
              },
              {
                name: "Simplification for Consistency",
                tag: "Philosophy territory",
                desc: "At the core is doing exactly what is necessary. We build hair care to make the routine simple, sustainable and repeatable. We didn't simplify for aesthetics. We simplified because this is enough.",
              },
              {
                name: "We Understand Your Experience",
                tag: "Community territory",
                desc: "We speak from shared experience — not authority. Your curls don't need a perfect routine. They just need one you'll come back to.",
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
            Calm, confident, candid, human. The clarity of the Sage with the
            warmth of someone who has been through the same thing. Never
            preachy. Never clinical. Always in service of making the person feel
            like they already have enough.
          </p>

          <div className="flex flex-col divide-y divide-border">
            {[
              {
                mode: "Calm",
                line: "Care shouldn't feel like effort you have to prepare for. It should fit into your day, not take it over.",
              },
              {
                mode: "Confident",
                line: "Your hair deserves more attention. We make sure you can give it that.",
              },
              {
                mode: "Candid",
                line: "You don't need to plan your wash day. You just need to wash your hair.",
              },
              {
                mode: "Human",
                line: "Tired of long exhausting routines? 3 steps is all you need.",
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
              Hair care, <span className="italic">untangled.</span>
            </p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-6">
              Brand essence → tagline. Relief made legible.
            </p>
          </div>
        </Section>

        {/* Closing reflection */}
        <Section className="mb-28 md:mb-40 max-w-3xl">
          <SectionLabel>What this project shows</SectionLabel>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Untie is a case study in discipline. The hardest part of this
            project wasn&apos;t finding the insight — it was resisting the urge
            to add to it. The most powerful thing about a brand built around
            simplicity is that the strategy itself has to embody the same
            principle. Every claim that doesn&apos;t earn its place, every
            product that doesn&apos;t justify its step, every line of copy that
            explains what the reader already understands — all of it works
            against the idea.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Sometimes the best brand strategy is knowing when to stop. To let
            space do the talking. To trust that the person on the other side
            will feel the relief before they&apos;ve read a single word.
          </p>
        </Section>
      </div>

      {/* Previous project */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Link
          href="/paushtikk-switch"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">
            Previous: Paushtikk Switch
          </span>
        </Link>
      </div>

      {/* Next project */}
      <NextProject
        title="Aeter"
        subtitle="Brand strategy for a new luxury perfume house entering the US and Gulf markets."
        href="/aeter"
        image="/images/aeter-cover.jpg"
      />
    </main>
  );
}
