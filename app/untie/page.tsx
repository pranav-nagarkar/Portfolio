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
  title: "Untie | Pranav Nagarkar",
  description:
    "Standing Out on a Crowded Shelf — Brand Strategy for a Curl Care Brand in India's Most Competitive Beauty Category",
};

export default function Untie() {
  const slideshowImages = [
    "/images/Untie.jpeg",
    "/images/Untie1.jpg",
    "/images/untie4.jpg",
    "/images/untie5.jpg",
  ];

  return (
    <main>
      <Navigation />

      <CaseStudyHero
        title="Untie"
        subtitle="Standing Out on a Crowded Shelf — Brand Strategy for a Curl Care Brand in India's Most Competitive Beauty Category"
        tags={["Brand Strategy", "Hair Care", "Identity"]}
        image="/images/untie6.jpg"
      />

      <ImageSlideshow images={slideshowImages} alt="Untie brand visuals" />

      <ProjectOverview
        role="Brand Strategist"
        timeline="2023"
        industry="Lifestyle"
        client="Untie"
      />

      <ContentSection title="The Brief">
        <p>
          Untie came to me with a name and a feeling, but not yet a fully
          articulated brand. They knew they wanted to create something that
          stood for freedom from convention — a lifestyle brand that gave people
          permission to be themselves, unedited and unapologetic.
        </p>
        <p>
          The challenge was to take this intuition and build it into a complete
          brand system — positioning, philosophy, voice, visual direction — that
          could hold the weight of the idea without diluting it.
        </p>
      </ContentSection>

      <ContentSection title="The Problem">
        <p>
          The lifestyle category is saturated with brands that claim
          authenticity while selling aspiration. They use the language of
          individuality to sell conformity. They promise freedom while creating
          new standards to live up to.
        </p>
        <p>
          Untie needed to be different — not in what it claimed, but in what it
          actually delivered. The brand {"couldn't"} just talk about breaking
          free. It needed to embody that freedom in every touchpoint, every
          piece of communication, every interaction with its audience.
        </p>
        <p>
          The strategic challenge was finding the line between a brand that
          stands for something and a brand that becomes prescriptive. How do you
          build a philosophy around freedom without telling people what freedom
          should look like?
        </p>
      </ContentSection>

      <ContentSection title="" variant="highlight">
        <i>
          {
            "The opposite of being tied down isn't floating aimlessly — it's choosing your own anchor."
          }
        </i>
      </ContentSection>

      <VisualBreak
        image="/images/untie6.jpg"
        alt="Untie lifestyle imagery"
        caption="Brand photography that captures authentic self-expression"
      />

      <ContentSection title="The Insight">
        <p>
          The opposite of being tied down {"isn't"} floating aimlessly —{" "}
          {"it's"} choosing your own anchor.
        </p>
        <p>
          The insight came from understanding what people actually mean when
          they say they want to break free. {"They're"} not seeking chaos or
          directionlessness. {"They're"} seeking the right to define their own
          terms. To choose what matters to them. To build a life that reflects
          their values, not
          {"someone else's"}.
        </p>
        <p>
          Untie {"isn't"} about having no commitments — {"it's"} about choosing
          which commitments to make. {"It's"} not about rejecting all structure
          — {"it's"} about building your own. The brand became about intentional
          choice rather than rebellion for {"rebellion's"} sake.
        </p>
      </ContentSection>

      <ContentSection title="The Strategy">
        <p>
          The central positioning: permission to be yourself, without apology or
          explanation.
        </p>
        <p>
          The brand philosophy was built around the idea of intentional
          liberation — the understanding that real freedom comes from knowing
          yourself well enough to choose your own path. Not freedom from all
          constraint, but freedom to choose your constraints.
        </p>
        <p>
          The brand voice was designed to be calm rather than loud, inviting
          rather than demanding. It
          {"doesn't"} shout about individuality — it simply demonstrates it.
          Every piece of communication was crafted to feel like a conversation,
          not a manifesto.
        </p>
        <p>
          Visual identity followed the same principle: clean, open, breathing
          room. Nothing cluttered or aggressive. Space to be. The aesthetic
          itself became an expression of the philosophy — less is more, and
          empty space is permission.
        </p>
      </ContentSection>

      <ContentSection title="The Outcome">
        <p>
          The complete brand system — positioning, philosophy, voice, visual
          identity, and guidelines — was delivered to support {"Untie's"} market
          launch. The brand architecture was designed to scale across product
          categories while maintaining philosophical consistency.
        </p>
      </ContentSection>

      <ContentSection title="Reflection">
        <p>
          Working on Untie taught me something about the difference between
          brands that claim values and brands that embody them. The most
          powerful thing about this project {"wasn't"} the positioning statement
          or the visual system — it was the discipline required to let the brand
          breathe. To resist the urge to over-define, over-explain,
          over-prescribe. Sometimes the best brand strategy is knowing when to
          step back and let space do the talking.
        </p>
      </ContentSection>

      <NextProject
        title="Aeter"
        subtitle="Brand strategy for a luxury perfume house entering the US and Gulf markets."
        href="/aeter"
        image="/images/aeter-cover.jpg"
      />

      <Footer />
    </main>
  );
}
