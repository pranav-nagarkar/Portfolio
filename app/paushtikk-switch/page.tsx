"use client";

import { useInView } from "@/hooks/use-in-view";
import { NextProject } from "@/components/case-study/next-project";
import { Navigation } from "@/components/navigation";
import { ImageSlideshow } from "@/components/case-study/image-slideshow";
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
  "/images/pausw.jpeg",
  "/images/ps1.jpeg",
  "/images/ps2.jpeg",
  "/images/ps3.jpeg",
];

export default function PaushtikkSwitchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-24">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
          Brand Strategy · Health &amp; Wellness · Positioning
        </p>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-[108px] leading-none tracking-tight mb-6">
          Paushtikk Switch.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
          Brand positioning for a wellness company redefining how India thinks
          about daily nutrition — 40% engagement uplift and 12% new customer
          growth post-relaunch.
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-8">
          {[
            { label: "Category", value: "Health & Wellness" },
            { label: "Scope", value: "Brand strategy & positioning" },
            { label: "Market", value: "India" },
            { label: "Outcome", value: "40% engagement uplift" },
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
        alt="Paushtikk Switch brand visuals"
      />

      {/* Body content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 01 — The Brief */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>01 — The Brief</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Something genuinely different. Not yet legible.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Paushtikk Switch is a wellness and fitness services company founded
            in 2020, focused on helping individuals make daily improvements to
            their health through proper nutrition. They needed strategic
            positioning that would differentiate them in an increasingly crowded
            wellness market.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The challenge was to move beyond the typical wellness industry
            language — detox, transformation, new you — and find something more
            honest, more sustainable, and more aligned with how real people
            actually change their habits.
          </p>
        </Section>

        {/* 02 — The Problem */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>02 — The Problem</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                The wellness industry promises transformation. Real change
                doesn&apos;t work that way.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every brand promises transformation. Every product claims to be
                the answer. The language is loud, absolute, and often divorced
                from how actual behaviour change works.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most people don&apos;t need a complete life overhaul. They need
                small, consistent changes that compound over time. They need to
                feel supported, not pressured. A brand that meets them where
                they are, not where the industry wishes they were.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  What the category was doing
                </p>
                <p className="text-foreground leading-relaxed">
                  Dramatic transformation. The language of complete overhaul —
                  loud, absolute, and disconnected from how sustainable change
                  actually works.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  What Paushtikk Switch had built
                </p>
                <p className="text-foreground leading-relaxed">
                  Customisable meal plans, accessible subscriptions, a focus on
                  daily betterment. Genuinely different — just not yet legible.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 03 — The Insight */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>03 — The Insight</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Evolution is consistent betterment, not achieving a singular best
            version of yourself.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The insight came from observing how sustainable change actually
            works. The people who successfully improve their health aren&apos;t
            the ones who make dramatic overnight shifts. They&apos;re the ones
            who make small adjustments, day after day, until those adjustments
            become automatic.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            This reframe changed everything. Paushtikk Switch wasn&apos;t
            selling transformation. It was selling consistency. Not a
            destination, but a direction. Not perfection, but progress.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;Sometimes the most powerful brand strategy is permission.
            Permission to be imperfect. Permission to progress slowly.&rdquo;
          </blockquote>
        </Section>

        {/* 04 — The Singular Idea */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>04 — The Singular Idea</SectionLabel>

          <div className="bg-secondary py-20 md:py-32 flex flex-col items-center justify-center text-center mb-10 rounded-sm">
            <span className="font-serif text-7xl md:text-9xl italic leading-none mb-3">
              The Switch
            </span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Brand Essence
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              A switch is not a transformation. It&apos;s a single, deliberate
              change — small enough to make today, meaningful enough to matter
              tomorrow. The name was already holding the idea. The brand just
              needed to commit to it fully.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Make the switch from aspiration to action. From pressure to
              progress. From a best version of yourself that doesn&apos;t exist
              yet to a better version that you&apos;re already becoming.
            </p>
          </div>
        </Section>

        {/* 05 — Brand Architecture */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>05 — Brand Architecture</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            Built around three principles.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                title: "Accessibility over Exclusivity",
                body: "Wellness shouldn't feel like it's for people who already have it together. The brand was built to meet people at the beginning of their journey, not at an imagined destination.",
              },
              {
                title: "Progress over Perfection",
                body: "Every touchpoint — copy, product naming, communication — was built to celebrate movement rather than arrival. Daily wins over distant goals.",
              },
              {
                title: "Support over Pressure",
                body: "The digital app positioned as a companion, not a coach. Something that walks beside you rather than stands above you.",
              },
              {
                title: "Visual Identity",
                body: "Warm, inviting, human. Not the cold precision of clinical nutrition — the comfortable familiarity of a kitchen you want to spend time in.",
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

        {/* 06 — The Outcome */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>06 — The Outcome</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            40% engagement uplift. 12% new customer growth.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The brand positioning supported significant growth — including a 40%
            uplift in engagement and 12% new customer growth post-relaunch. A
            100% year-over-year increase in team size followed as the business
            scaled.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The app expansion brought the brand philosophy into daily
            touchpoints with users, reinforcing the message of consistent,
            supported improvement. Workout tracking, diet analysis, and live
            sessions — all framed not as tools to fix you, but to support you.
          </p>
        </Section>

        {/* Tagline hero */}
        <Section className="mb-20 md:mb-28">
          <div className="py-20 md:py-32 border-t border-b border-border text-center">
            <p className="font-serif text-5xl md:text-7xl leading-none">
              Make <span className="italic">the switch.</span>
            </p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-6">
              Not transformation. Direction.
            </p>
          </div>
        </Section>

        {/* Closing reflection */}
        <Section className="mb-28 md:mb-40 max-w-3xl">
          <SectionLabel>What this project shows</SectionLabel>
          <p className="text-muted-foreground leading-relaxed">
            Paushtikk Switch is a case study in honest positioning — finding
            what a brand actually delivers and building the strategy around that
            truth rather than the category convention. The wellness industry is
            full of brands that promise everything and deliver friction.
            Paushtikk Switch works because it promises less — but delivers it
            consistently. That restraint is the strategy.
          </p>
        </Section>
      </div>

      {/* Next project */}
      <NextProject
        title="Untie"
        subtitle="Standing out on a crowded shelf — brand strategy for a curl care brand in India's most competitive beauty category."
        href="/untie"
        image="/images/untie6.jpg"
      />

      {/* Previous project */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Link
          href="/gochanakya"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">
            Previous: GoChanakya
          </span>
        </Link>
      </div>
    </main>
  );
}
