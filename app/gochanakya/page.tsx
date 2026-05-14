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
  "/images/GC.jpeg",
  "/images/gc1.jpeg",
  "/images/gc2.jpeg",
  "/images/gc3.jpeg",
];

export default function GoChanakyaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-16 md:pb-24">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
          Brand Strategy · Financial Education · Rebrand
        </p>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-[108px] leading-none tracking-tight mb-6">
          GoChanakya.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
          Empowering Your Today and Tomorrow — rebranding a financial education
          firm for India&apos;s first-time earners. 15% sales uplift
          post-launch.
        </p>

        <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-8">
          {[
            { label: "Category", value: "Financial Services" },
            { label: "Scope", value: "Full brand strategy & identity" },
            { label: "Market", value: "India" },
            { label: "Outcome", value: "15% sales uplift post-rebrand" },
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

      {/* Cover image */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <div className="relative w-full aspect-[16/7]">
          <Image
            src="/images/gc4.jpeg"
            alt="GoChanakya brand identity"
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </section>

      {/* Slideshow */}
      <ImageSlideshow images={slideshowImages} alt="GoChanakya brand visuals" />

      {/* Body content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 01 — The Brief */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>01 — The Brief</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            A name, a logo, and a clear new direction.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            GoChanakya came to me with a name, a basic logo, and a clear new
            direction. A group of personal financial advisors, they had decided
            to shift their focus toward goal-based financial education —
            targeting students in their final two years of graduation and young
            professionals entering the workforce for the first time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            They knew what they wanted to do. They needed to know how to tell
            the world about it. Everything else — positioning, communication
            strategy, brand voice, services naming, visual identity, design
            systems, and brand book — was built from zero.
          </p>
        </Section>

        {/* 02 — The Problem */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>02 — The Problem</SectionLabel>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                Financial services in India has a language problem.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every advisor, every educator, every content creator in the
                space speaks the same dialect: wealth, luxury, early retirement,
                financial freedom. The aspiration economy of money is loud,
                consistent, and almost universal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It only speaks to one kind of person — someone who already feels
                financially confident enough to dream big. GoChanakya&apos;s
                target audience is a different person entirely. A final-year
                student who has never earned a salary. A 23-year-old in their
                first job trying to figure out what a mutual fund actually is.
                Someone for whom money is more anxiety than opportunity.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  What the category was doing
                </p>
                <p className="text-foreground leading-relaxed">
                  Wealth aspiration. Early retirement. Financial freedom. A
                  language that only works if you already feel confident about
                  money.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-sm">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  What the audience actually felt
                </p>
                <p className="text-foreground leading-relaxed">
                  Anxiety, not aspiration. For this audience, the language of
                  wealth doesn&apos;t just miss — it alienates.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 03 — The Insight */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>03 — The Insight</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Not everyone wants to be rich. But everyone wants to feel in
            control.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Empowerment gets overused in marketing — but in the context of
            financial education for young Indians, it carries precise meaning.
            Empowerment isn&apos;t about becoming wealthy. It&apos;s about
            understanding your money well enough that it stops feeling like
            something happening to you and starts feeling like something
            you&apos;re directing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The second insight was about the Chanakya name itself. Chanakya —
            ancient India&apos;s greatest strategist and economist — was never
            associated with inherited wealth or luxury. He was associated with
            practical wisdom, strategic thinking, and building something
            durable. The name was already telling a story. The brand just needed
            to align with it.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;The brand needed to speak to people where they actually are,
            not where the industry wishes they were.&rdquo;
          </blockquote>
        </Section>

        {/* 04 — The Singular Idea */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>04 — The Singular Idea</SectionLabel>

          <div className="bg-secondary py-20 md:py-32 flex flex-col items-center justify-center text-center mb-10 rounded-sm">
            <span className="font-serif text-7xl md:text-9xl italic leading-none mb-3">
              Empowerment
            </span>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Brand Essence
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not empowerment as a buzzword. Empowerment as a strategic reframe
              — moving the category conversation from aspiration to
              understanding, from dreaming about wealth to actually directing
              your money.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For a 22-year-old earning their first salary, this distinction is
              everything. They don&apos;t need someone to show them a life they
              could have. They need someone to help them understand the one
              they&apos;re already living.
            </p>
          </div>
        </Section>

        {/* 05 — Brand Architecture */}
        <Section className="mb-20 md:mb-28">
          <SectionLabel>05 — Brand Architecture</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 max-w-2xl">
            Built to feel credible without being cold.
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              {
                title: "Brand Positioning",
                body: "Move the category conversation from aspiration to empowerment. For young Indians entering financial life, both timeframes matter — what you do with money today directly shapes what you have tomorrow.",
              },
              {
                title: "Brand Voice",
                body: "Warm, clear, confidence-giving rather than impressive or transactional. If your audience is anxious about money, the worst thing you can do is make them feel stupid. The best is to make the complex feel manageable.",
              },
              {
                title: "Services Naming",
                body: "Products and services named to reflect approachability rather than jargon. Every name was tested against one question: would a first-time earner feel invited or intimidated?",
              },
              {
                title: "Visual Identity & Brand Book",
                body: "Credible without being cold. Trustworthy enough for a parent to recommend, accessible enough for a 22-year-old to engage with. A full brand book delivered for consistency at scale.",
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

        {/* 06 — The Tagline */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>06 — The Tagline</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            Empowering Your Today and Tomorrow.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Built on a simple but true observation about money: it exists in two
            timeframes simultaneously. What you do with it today — how you spend
            it, save it, understand it — directly shapes what you have tomorrow.
            For a young person just entering financial life, both timeframes
            matter equally.
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug border-l-2 border-foreground pl-6">
            &ldquo;The loudest voice in a market is not always speaking to
            everyone in it.&rdquo;
          </blockquote>
        </Section>

        {/* 07 — The Outcome */}
        <Section className="mb-20 md:mb-28 max-w-3xl">
          <SectionLabel>07 — The Outcome</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            15% increase in sales post-rebrand.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Following the rebrand, GoChanakya achieved a 15% increase in sales —
            attributed to stronger brand clarity and positioning alignment with
            their new target audience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A phased 5-year brand direction plan was delivered alongside the
            brand book to guide future growth as the platform expands into
            corporate training and new audience segments.
          </p>
        </Section>

        {/* Tagline hero */}
        <Section className="mb-20 md:mb-28">
          <div className="py-20 md:py-32 border-t border-b border-border text-center">
            <p className="font-serif text-4xl md:text-6xl leading-tight">
              Empowering Your{" "}
              <span className="italic">Today and Tomorrow.</span>
            </p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-6">
              Brand essence → tagline. Aspiration replaced by understanding.
            </p>
          </div>
        </Section>

        {/* Closing reflection */}
        <Section className="mb-28 md:mb-40 max-w-3xl">
          <SectionLabel>What this project shows</SectionLabel>
          <p className="text-muted-foreground leading-relaxed">
            GoChanakya is a case study in audience-first positioning — finding
            the people the dominant narrative was leaving behind and building
            something that genuinely spoke to them. The most powerful strategic
            move available wasn&apos;t to shout louder. It was to speak
            differently. That distinction — aspiration versus empowerment,
            dreaming versus directing — was both the insight and the solution.
          </p>
        </Section>
      </div>

      {/* Next project */}
      <NextProject
        title="Paushtikk Switch"
        subtitle="Brand positioning for a wellness company helping people make daily improvements to their health."
        href="/paushtikk-switch"
        image="/images/ps2.jpeg"
      />

      {/* Previous project */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <Link
          href="/richbear"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm tracking-wider uppercase">
            Previous: Richbear
          </span>
        </Link>
      </div>
    </main>
  );
}
