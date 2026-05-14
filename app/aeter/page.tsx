"use client";

import { useInView } from "@/hooks/use-in-view";
import { NextProject } from "@/components/case-study/next-project";
import { ImageSlideshow } from "@/components/case-study/image-slideshow";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";

// Section wrapper with scroll-in animation
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
  "/images/aeter-cover.jpg",
  "/images/aeter-slide-1.jpg",
  "/images/aeter-slide-2.jpg",
  "/images/aeter-slide-3.jpg",
];

export default function AeterPage() {
  return (
    <main className="min-h-screen bg-background">
      export default function RichbearPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      {/*Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-24">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
          Brand Strategy · Luxury Fragrance · US & Gulf Markets · FondofDesign
        </p>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-[108px] leading-none tracking-tight mb-6">
          Aeter.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
          Brand strategy for a new luxury perfume house entering the US and Gulf
          markets — built entirely from strategic intent, with no inherited
          legacy and no name recognition. Confidential. Brand in pre-launch.
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-8">
          {[
            { label: "Category", value: "Luxury Fragrance" },
            { label: "Scope", value: "Full brand strategy" },
            { label: "Markets", value: "US & Gulf" },
            { label: "Price Range", value: "$100 – $600" },
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

      {/*Slideshow*/}
      <ImageSlideshow
        images={slideshowImages}
        alt="Aeter luxury perfume brand visuals"
      />

      {/*Body content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 01 — The Brief */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>01 — The Brief</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            No legacy. No name recognition. Just the strength of an idea.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A new luxury perfume brand preparing to enter the US market, with
            planned expansion into the Gulf. Price range: $100–$600. The scope
            was complete — positioning, brand philosophy, naming architecture,
            communication framework, and identity direction.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The founder came to the brief with something most clients don&apos;t
            have: genuine, personal product knowledge. She hadn&apos;t assumed
            what her customer felt — she was her customer. My job wasn&apos;t to
            tell her what problem she was solving. It was to find the language
            that made that problem, and that solution, resonate beyond just
            herself.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Full case study — including the complete naming system and visual
            identity — will be published upon brand launch.
          </p>
        </Section>

        {/* 02 — The Strategic Challenge */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>02 — The Strategic Challenge</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                $100–$600 is uncomfortable territory for a new entrant.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At $100 you are accessible luxury — competing with Maison
                Margiela Replica, Jo Malone, and a growing wave of niche indie
                perfumers. At $600 you are competing with heritage houses —
                Creed, Amouage, Roja Parfums — brands with decades of mythology,
                provenance, and cultural weight behind every bottle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most brands pick one end of that range and build toward it. This
                brand needed to hold both simultaneously, as a newcomer with
                nothing but the strength of its idea. The question wasn&apos;t
                just &ldquo;how do we position this brand?&rdquo; It was
                &ldquo;what kind of idea is large enough, deep enough, and true
                enough to justify a $600 bottle from a brand nobody has heard of
                yet?&rdquo;
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  What the market looked like
                </p>
                <p className="text-foreground leading-relaxed">
                  Every brand chasing the same codes: black and white, legacy,
                  luxury, timelessness. The key differentiator had become the
                  brand story — not the product.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  The opening
                </p>
                <p className="text-foreground leading-relaxed">
                  Nobody in luxury fragrance had claimed the truth of human
                  multiplicity as their positioning. People don&apos;t have one
                  self. That was the space.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 03 — The Insight */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>03 — The Insight</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Fragrance is the only luxury product that disappears completely when
            you use it.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Yet it is the one people remember most about you. It is not what you
            wear. It is what you leave behind. The invisible signature of a
            person in a room they have already left. In that sense, fragrance is
            not a product at all — it is the most intangible expression of self
            that luxury has ever sold.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The second insight came from human behaviour rather than the
            category. People do not have one self. The version of you at a
            dinner party is not the version of you in a boardroom. We move
            through the world presenting different facets of ourselves to
            different moments — and we do it naturally, fluently, without
            thinking of it as performance.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;Fragrance is the intangible experience of you.&rdquo;
          </blockquote>
        </Section>

        {/* 04 — The Singular Idea */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>04 — The Singular Idea</SectionLabel>

          <div className="bg-secondary py-20 md:py-32 flex flex-col items-center justify-center text-center mb-10 rounded-sm">
            <span className="font-serif text-7xl md:text-9xl italic leading-none mb-3">
              Presence
            </span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Brand Essence
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not as a word that means confidence or dominance — but as a
              philosophical idea. Presence is what you bring to a moment. It is
              the intangible experience of you that others feel when you are in
              a room. It is personal, it is chosen, and it is different
              depending on which version of yourself you decide to bring.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The brand was built around one core belief: every person contains
              multitudes, and every moment deserves the right one. The fragrance
              architecture, naming system, and communication framework were all
              built from this foundation.
            </p>
          </div>
        </Section>

        {/* Divider */}
        <div className="border-t border-border mb-20 md:mb-28" />

        {/* 05 — Brand Architecture */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>05 — Brand Architecture</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            A system built around one philosophical idea.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                title: "Brand Philosophy",
                body: "Fragrance is the medium that establishes presence. The inward-facing belief that shapes every product and creative decision.",
              },
              {
                title: "Brand Anchor",
                body: "Fragrance is the intangible experience of what you can be. The outward-facing promise that connects the product to the person.",
              },
              {
                title: "Brand Values",
                body: "Intention. Individuality. Depth. Self-Awareness. Confidence. Choice. Each value earns its place by serving the idea of presence — not decorating it.",
              },
              {
                title: "Brand Personality",
                body: "The Magician (charismatic, transformational, visionary) balanced by The Explorer (adventurous, curious, authentic). One creates mystique. The other creates discovery.",
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
        </Section>

        {/* 06 — Naming Architecture */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>06 — Naming Architecture</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            The name as a philosophical statement.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Aeter — derived from <em>aeterna</em>, Latin for eternal. The kind
            of impression we want our fragrances to leave. Not a scent that
            announces itself, but one that quietly alters a room, lingers in
            memory, and becomes inseparable from who you are in that moment.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6 mb-8">
            &ldquo;The Alchemy of You.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            The fragrance naming system was built around three conceptual
            territories — Archetypes, Dreams, and Time — each representing a
            different way of experiencing the self. Each territory contains
            ranges. Each range contains scents. The architecture creates a world
            that expands over time, inviting return rather than replacement.
          </p>
          <p className="text-sm text-muted-foreground italic mt-4">
            The complete naming system is withheld pending launch.
          </p>
        </Section>

        {/* 07 — Positioning */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>07 — Positioning</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Where Aeter lives in the mind.
          </h2>
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-snug border-l-2 border-foreground pl-6 mb-8">
            &ldquo;For people who see perfumes as an extension of themselves, we
            are a brand that helps establish presence through scent — because
            fragrance is the intangible experience of what you can be.&rdquo;
          </blockquote>
          <p className="text-muted-foreground leading-relaxed">
            The positioning is built around recognition, not aspiration. It does
            not tell customers to become someone else. It tells them that
            what&apos;s already there deserves to come forward. That distinction
            — self-validation over self-improvement — is what separates Aeter
            from every other brand in the category.
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
                name: "Presence Over Performance",
                tag: "Primary territory",
                desc: "We talk about how something is felt, not how it appears. Fragrances that announce your arrival without you saying a word.",
              },
              {
                name: "Choice as Empowerment",
                tag: "Multiplicity",
                desc: "We believe people are infinite. The brand empowers them to bring the version of themselves a moment deserves — not to become someone else, but to be felt more precisely as themselves.",
              },
              {
                name: "Clarity, Not Complexity",
                tag: "Product truth",
                desc: "One fragrance. One intention. Nothing to decode. The product doesn't need to be explained — it needs to be experienced.",
              },
              {
                name: "Self-Awareness Over Aspiration",
                tag: "Recognition",
                desc: "We speak to recognition, not improvement. This doesn't make you someone else. It lets what's already there come forward.",
              },
              {
                name: "Restraint as Confidence",
                tag: "Brand character",
                desc: "Nothing is over-explained. Nothing is spoon-fed. We assume the consumer wants to think. Meaning doesn't need instructions — that creates participation, not consumption.",
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
            Intimate, reflective, reframing, charming. The voice of a Magician
            with the openness of an Explorer — never preachy, never dull, always
            leaving something unsaid.
          </p>

          <div className="flex flex-col divide-y divide-border">
            {[
              {
                mode: "Intimate",
                line: "We aren't meant to be understood by everyone. That doesn't mean we aren't noticed.",
              },
              {
                mode: "Reflective",
                line: "This doesn't introduce you. It recognizes you.",
              },
              {
                mode: "Reframing",
                line: "Fragrance isn't what you wear. It's how you remain.",
              },
              {
                mode: "Charming",
                line: "The fragrance that makes conversations linger.",
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
              The Alchemy <span className="italic">of You.</span>
            </p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-6">
              Brand essence → tagline. Presence made personal.
            </p>
          </div>
        </Section>

        {/* Closing reflection */}
        <Section className="mb-28 md:mb-40 max-w-3xl">
          <SectionLabel>What this project shows</SectionLabel>
          <p className="text-muted-foreground leading-relaxed">
            Aeter is a case study in concept-led brand building — where the idea
            precedes the product and the strategy creates a world rather than a
            product description. The best brand strategies are acts of
            translation: taking what a founder knows in their bones and making
            it legible to a stranger. That&apos;s what this was.
          </p>
        </Section>
      </div>

      {/*Previous project link */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Link
          href="/untie"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">
            Previous: Untie
          </span>
        </Link>
      </div>

      {/*Next project*/}
      <NextProject
        title="Up & Run"
        subtitle="Research and strategy for a children's hydration supplement — finding the insight that reframed a supplement as fuel."
        href="/uprun"
        image="/images/ur.jpeg"
      />
    </main>
  );
}
