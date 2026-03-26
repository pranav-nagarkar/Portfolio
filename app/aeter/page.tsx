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
  title: "Aeter | Pranav Nagarkar",
  description:
    "Brand strategy for a new luxury perfume house entering the US and Gulf markets. Complete positioning and identity framework.",
};

export default function Aeter() {
  const slideshowImages = [
    "/images/aeter-cover.jpg",
    "/images/aeter-slide-1.jpg",
    "/images/aeter-slide-2.jpg",
    "/images/aeter-slide-3.jpg",
  ];

  return (
    <main>
      <Navigation />

      <CaseStudyHero
        title="Aeter"
        subtitle="Brand Strategy for a New Luxury Perfume House Entering the US and Gulf Markets — Confidential, Brand in Pre-Launch"
        tags={["Brand Strategy", "Luxury", "Fragrance"]}
        image="/images/aeter-cover.jpg"
      />

      <ImageSlideshow
        images={slideshowImages}
        alt="Aeter luxury perfume brand"
      />

      <ProjectOverview
        role="Brand Strategist"
        timeline="2024"
        industry="Luxury Fragrance"
        client="Confidential"
      />

      <ContentSection title="The Brief">
        <p>
          A new luxury perfume brand preparing to enter the US market, with
          planned expansion into Gulf countries. Price range: $100–$600. No
          existing brand equity, no inherited legacy, no name recognition. Built
          entirely from strategic intent.
        </p>
        <p>
          The scope was complete — positioning, brand philosophy, naming
          architecture, communication framework, and identity direction. This is
          one of the most creatively and strategically ambitious projects I have
          worked on.
        </p>
        <p className="italic text-sm">
          Full case study — including the complete positioning framework, naming
          system, and visual identity — will be published upon brand launch.
        </p>
      </ContentSection>

      <ContentSection title="The Strategic Challenge">
        <p>
          A $100–$600 price range is uncomfortable territory for a new entrant
          in luxury fragrance.
        </p>
        <p>
          At $100 you are accessible luxury — competing with Maison Margiela
          Replica, Jo Malone, and a growing wave of niche indie perfumers. At
          $600 you are competing with heritage houses — Creed, Amouage, Roja
          Parfums — brands with decades of mythology, provenance, and cultural
          weight behind every bottle.
        </p>
        <p>
          Most brands pick one end of that range and build toward it. This brand
          needed to hold both simultaneously, as a newcomer with nothing but the
          strength of its idea.
        </p>
        <p>
          The question {"wasn't"} just "how do we position this brand?" It was
          "what kind of idea is large enough, deep enough, and true enough to
          justify a $600 bottle from a brand nobody has heard of yet?"
        </p>
      </ContentSection>

      <ContentSection title="" variant="highlight">
        {
          "Fragrance is the only luxury product that disappears completely when you use it — yet it is the one people remember most about you."
        }
      </ContentSection>

      <VisualBreak
        image="/images/aeter-slide-1.jpg"
        alt="Aeter perfume collection"
        caption="Luxury fragrance designed for multitudes"
      />

      <ContentSection title="The Insight">
        <p>
          Fragrance is the only luxury product that disappears completely when
          you use it — yet it is the one people remember most about you.
        </p>
        <p>
          It is not what you wear. It is what you leave behind. The invisible
          signature of a person in a room they have already left. In that sense,
          fragrance is not a product at all. It is the most intangible
          expression of self that luxury has ever sold.
        </p>
        <p>
          The second insight came from human behaviour rather than the category.
          People do not have one self. The version of you at a dinner party is
          not the version of you in a boardroom. The person you are on a first
          date is not the person you are on a hiking trail. We move through the
          world presenting different facets of ourselves to different moments —
          and we do it naturally, fluently, without thinking of it as
          performance.
        </p>
        <p>
          Fragrance is one of the few products people already choose differently
          for different versions of themselves. They just {"don't"} have a brand
          that speaks to that multiplicity directly. Nobody in luxury fragrance
          had claimed this truth as their positioning. That was the opening.
        </p>
      </ContentSection>

      <ContentSection title="The Strategic Direction">
        <p>The central concept: Presence.</p>
        <p>
          Not as a word that means confidence or dominance — but as a
          philosophical idea. Presence is what you bring to a moment. It is the
          intangible experience of you that others feel when you are in a room.
          It is personal, it is chosen, and it is different depending on which
          version of yourself you decide to bring.
        </p>
        <p>
          The brand was built around one core belief: every person contains
          multitudes, and every moment deserves the right one.
        </p>
        <p>
          The fragrance architecture, naming system, and communication framework
          were all built from this foundation — designed to give customers not
          just a scent, but a language for the different ways they move through
          the world.
        </p>
        <p className="italic text-sm">
          The complete naming system and brand architecture are withheld pending
          launch.
        </p>
      </ContentSection>

      <ContentSection title="" variant="highlight">
        {
          "Every person contains multitudes, and every moment deserves the right one."
        }
      </ContentSection>

      <ContentSection title="Reflection">
        <p>
          This founder came to the brief with something most clients {"don't"}{" "}
          have: genuine, personal product knowledge. She {"hadn't"} assumed what
          her customer felt — she was her customer. My job {"wasn't"} to tell
          her what problem she was solving. It was to find the language that
          made that problem, and that solution, resonate beyond just herself.
        </p>
        <p>
          The best brand strategies are often acts of translation — taking what
          a founder knows in their bones and making it legible to a stranger in
          a supermarket aisle. {"That's"} what this was.
        </p>
      </ContentSection>

      <NextProject
        title="Up & Run"
        subtitle="Research and strategy for a children's hydration supplement — finding the insight that reframed a supplement as fuel."
        href="/uprun"
        image="/images/ur.jpeg"
      />

      <Footer />
    </main>
  );
}
