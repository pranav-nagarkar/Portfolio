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
  title: "Paushtikk Switch | Pranav Nagarkar",
  description:
    "Brand positioning for a wellness company helping people make daily improvements to their health through proper nutrition.",
};

export default function PaushtikkSwitch() {
  const slideshowImages = [
    "/images/pausw.jpeg",
    "/images/ps1.jpeg",
    "/images/ps2.jpeg",
    "/images/ps3.jpeg",
  ];

  return (
    <main>
      <Navigation />

      <CaseStudyHero
        title="Paushtikk Switch"
        subtitle="Brand positioning for a wellness company redefining how India thinks about daily nutrition and sustainable health."
        tags={["Brand Strategy", "Health & Wellness", "Positioning"]}
        image="/images/ps2.jpeg"
      />

      <ImageSlideshow
        images={slideshowImages}
        alt="Paushtikk Switch brand visuals"
      />

      <ProjectOverview
        role="Brand Strategist"
        timeline="2022"
        industry="Health & Wellness"
        client="Paushtikk Switch"
      />

      <ContentSection title="The Brief">
        <p>
          Paushtikk Switch is a wellness and fitness services company founded in
          2020, focused on helping individuals make daily improvements to their
          health through proper nutrition. They needed strategic positioning
          that would differentiate them in an increasingly crowded wellness
          market.
        </p>
        <p>
          The challenge was to move beyond the typical wellness industry
          language — detox, transformation, new you — and find something more
          honest, more sustainable, and more aligned with how real people
          actually change their habits.
        </p>
      </ContentSection>

      <ContentSection title="The Problem">
        <p>
          The wellness industry in India suffers from a credibility problem.
          Every brand promises transformation. Every product claims to be the
          answer. The language is loud, absolute, and often divorced from how
          actual behavior change works.
        </p>
        <p>
          Most people {"don't"} need a complete life overhaul. They need small,
          consistent changes that compound over time. They need to feel
          supported, not pressured. They need a brand that meets them where they
          are, not where the industry wishes they were.
        </p>
        <p>
          Paushtikk Switch had built something genuinely different —
          customizable meal plans, accessible subscriptions, a focus on daily
          betterment rather than dramatic transformation. The strategy needed to
          make that difference legible and compelling.
        </p>
      </ContentSection>

      <ContentSection title="" variant="highlight">
        <i>
          {
            "Evolution is about consistent betterment, not achieving a singular 'best' version of yourself."
          }
        </i>
      </ContentSection>

      <VisualBreak
        image="/images/ps7.jpeg"
        alt="Paushtikk Switch nutrition planning"
        caption="Customizable meal planning designed for real daily life"
      />

      <ContentSection title="The Insight">
        <p>
          Evolution is about consistent betterment, not achieving a singular{" "}
          {"'best'"} version of yourself.
        </p>
        <p>
          The insight came from observing how sustainable change actually works.
          The people who successfully improve their health {"aren't"} the ones
          who make dramatic overnight shifts. {"They're"} the ones who make
          small adjustments, day after day, until those adjustments become
          automatic.
        </p>
        <p>
          This reframe changed everything. Paushtikk Switch {"wasn't"} selling
          transformation. It was selling consistency. Not a destination, but a
          direction. Not perfection, but progress.
        </p>
      </ContentSection>

      <ContentSection title="The Strategy">
        <p>
          The central positioning: make the switch from aspiration to action.
        </p>
        <p>
          The brand voice was built around three principles: accessibility over
          exclusivity, progress over perfection, and support over pressure. The
          communication framework emphasized daily wins rather than distant
          goals.
        </p>
        <p>
          The digital expansion — including the mobile application with workout
          tracking, diet analysis, and live sessions — was positioned as a
          companion rather than a coach. Something that walks beside you rather
          than stands above you.
        </p>
        <p>
          Visual identity followed the same philosophy: warm, inviting, human.
          Not the cold precision of clinical nutrition, but the comfortable
          familiarity of a kitchen you want to spend time in.
        </p>
      </ContentSection>

      <ContentSection title="The Outcome">
        <p>
          The brand positioning has supported {"Paushtikk Switch's"} significant
          growth, including a 100% year-over-year increase in team size and
          consistent monthly user growth. The app expansion has brought the
          brand philosophy into daily touchpoints with users, reinforcing the
          message of consistent, supported improvement.
        </p>
      </ContentSection>

      <ContentSection title="Reflection">
        <p>
          The wellness category is full of brands that promise everything and
          deliver friction. {"Paushtikk Switch's"}
          positioning works because it promises less — but delivers it
          consistently. Sometimes the most powerful brand strategy is
          permission. Permission to be imperfect. Permission to progress slowly.
          Permission to make the switch at your own pace.
        </p>
      </ContentSection>

      <NextProject
        title="Untie"
        subtitle="Standing Out on a Crowded Shelf — Brand Strategy for a Curl Care Brand in India's Most Competitive Beauty Category"
        href="/untie"
        image="/images/untie5.jpg"
      />

      <Footer />
    </main>
  );
}
