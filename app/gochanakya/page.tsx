import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CaseStudyHero } from "@/components/case-study/hero";
import { ImageSlideshow } from "@/components/case-study/image-slideshow";
import { ProjectOverview } from "@/components/case-study/project-overview";
import { ContentSection } from "@/components/case-study/content-section";
import { VisualBreak } from "@/components/case-study/visual-break";
import { NextProject } from "@/components/case-study/next-project";

export const metadata: Metadata = {
  title: "GoChanakya | Pranav Nagarkar",
  description:
    "Rebranding a financial education firm for India's first-time earners. Moving from aspiration to empowerment.",
};

export default function GoChanakya() {
  const slideshowImages = [
    "/images/GC.jpeg",
    "/images/gc1.jpeg",
    "/images/gc2.jpeg",
    "/images/gc3.jpeg",
  ];

  return (
    <main>
      <Navigation />

      <CaseStudyHero
        title="GoChanakya"
        subtitle="Empowering Your Today and Tomorrow — Rebranding a Financial Education Firm for India's First-Time Earners"
        tags={["Brand Strategy", "Financial Education", "Rebrand"]}
        image="/images/gc4.jpeg"
      />

      <ImageSlideshow images={slideshowImages} alt="GoChanakya brand visuals" />

      <ProjectOverview
        role="Brand Strategist"
        timeline="2023"
        industry="Financial Services"
        client="GoChanakya"
      />

      <ContentSection title="The Brief">
        <p>
          GoChanakya came to me with a name, a basic logo, and a clear new
          direction. A group of personal financial advisors, they had decided to
          shift their focus toward goal-based financial education — targeting
          students in their final two years of graduation and young
          professionals entering the workforce for the first time.
        </p>
        <p>
          They knew what they wanted to do. They needed to know how to tell the
          world about it. Everything else — positioning, communication strategy,
          brand voice, services naming, visual identity, design systems, and
          brand book — was built from zero.
        </p>
      </ContentSection>

      <ContentSection title="The Problem">
        <p>
          Financial services in India has a language problem. Every advisor,
          every educator, every content creator in the space speaks the same
          dialect: wealth, luxury, early retirement, financial freedom. The
          aspiration economy of money is loud, consistent, and almost universal.
        </p>
        <p>
          The problem is that it only speaks to one kind of person — someone who
          already feels financially confident enough to dream big.{" "}
          {"GoChanakya's"} target audience is a different person entirely. A
          final-year student who has never earned a salary. A 23-year-old in
          their first job trying to figure out what a mutual fund actually is.
          Someone for whom money is more anxiety than opportunity.
        </p>
        <p>
          For this audience, the language of wealth aspiration {"doesn't"} just
          miss — it alienates. The brand needed to speak to people where they
          actually are, not where the industry wishes they were.
        </p>
      </ContentSection>

      <ContentSection title="" variant="highlight">
        <i>
          {
            "Not everyone wants to be rich. But everyone wants to feel in control of their money."
          }
        </i>
      </ContentSection>

      <VisualBreak
        image="/images/gc5.jpeg"
        alt="GoChanakya product naming"
        caption="Brand identity system designed for warmth and approachability"
      />

      <ContentSection title="The Insight">
        <p>
          Not everyone wants to be rich. But everyone wants to feel in control.
        </p>
        <p>
          The word empowerment gets overused in marketing — but in the context
          of financial education for young Indians, it carries precise meaning.
          Empowerment {"isn't"} about becoming wealthy. {"It's"} about
          understanding your money well enough that it stops feeling like
          something happening to you and starts feeling like something{" "}
          {"you're"} directing.
        </p>
        <p>
          The second insight was about the Chanakya name itself. Chanakya —{" "}
          {"ancient India's"} greatest strategist and economist — was never
          associated with inherited wealth or luxury. He was associated with
          practical wisdom, strategic thinking, and building something durable.
          The name was already telling a story. The brand just needed to align
          with it.
        </p>
      </ContentSection>

      <ContentSection title="The Strategy">
        <p>
          The central positioning: move the category conversation from
          aspiration to empowerment.
        </p>
        <p>
          The tagline — {"'Empowering Your Today and Tomorrow'"} — was built on
          a simple but true observation about money: it exists in two timeframes
          simultaneously. What you do with it today — how you spend it, save it,
          understand it — directly shapes what you have tomorrow. For a young
          person just entering financial life, both timeframes matter equally.
        </p>
        <p>
          The brand voice was built to be warm, clear, and confidence-giving
          rather than impressive or transactional. The philosophy: if your
          audience is anxious about money, the worst thing you can do is make
          them feel stupid. The best thing you can do is make the complex feel
          manageable.
        </p>
        <p>
          Services were named to reflect approachability rather than jargon.
          Visual identity and design systems were built to feel credible without
          being cold — trustworthy enough for a parent to recommend, accessible
          enough for a 22-year-old to engage with. A full brand book was
          delivered to ensure consistency across every touchpoint as the
          business scaled.
        </p>
      </ContentSection>

      <ContentSection title="" variant="highlight">
        <i>
          {
            "The tagline — 'Empowering Your Today and Tomorrow' — was built on a simple but true observation about money: it exists in two timeframes simultaneously."
          }
        </i>
      </ContentSection>

      <ContentSection title="The Outcome">
        <p>
          Following the rebrand, GoChanakya achieved a 15% increase in sales —
          attributed to stronger brand clarity and positioning alignment with
          their new target audience. A phased 5-year brand direction plan was
          delivered alongside the brand book to guide future growth as the
          platform expands into corporate training and new audience segments.
        </p>
      </ContentSection>

      <ContentSection title="Reflection">
        <p>
          The financial services category is proof that the loudest voice in a
          market is not always speaking to everyone in it. The most powerful
          strategic move available to GoChanakya {"wasn't"} to shout louder — it
          was to speak differently. Finding the audience that the dominant
          narrative was leaving behind, and building a brand that genuinely
          spoke to them, was both the insight and the solution.
        </p>
      </ContentSection>

      <NextProject
        title="Paushtikk Switch"
        subtitle="Brand positioning for a wellness company helping people make daily improvements to their health."
        href="/paushtikk-switch"
        image="/images/ps2.jpeg"
      />

      <Footer />
    </main>
  );
}
