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
  title: "Up & Run | Pranav Nagarkar",
  description:
    "Research and strategy for Up & Run's children's hydration supplement — finding the insight that reframed a supplement as fuel for the way kids already live.",
};

export default function UpRun() {
  const slideshowImages = [
    "/images/ur.jpg",
    "/images/ur4.jpg",
    "/images/ur1.jpg",
  ];

  return (
    <main>
      <Navigation />

      <CaseStudyHero
        title="Up & Run"
        subtitle="Research and strategy for a children's hydration supplement — finding the insight that reframed a supplement as fuel for the way kids already live."
        tags={["Brand Strategy", "Consumer Goods", "Research"]}
        image="/images/ur2.jpg"
      />

      <ImageSlideshow
        images={slideshowImages}
        alt="Up & Run children's hydration"
      />

      <ProjectOverview
        role="Brand Strategist"
        timeline="2023"
        industry="Consumer Health"
        client="Up & Run"
      />

      <ContentSection title="The Brief">
        <p>
          Up & Run came to us with a specific challenge. They had built a
          credible hydration brand for active adults — gym goers, athletes,
          everyday movers. Now they wanted to extend into a new and very
          different audience: children.
        </p>
        <p>
          The product was a clean, need-based hydration supplement designed to
          support kids through their days. The brief was to find the central
          idea that the communication could be built on — something that worked
          for the new product while staying true to what Up & Run already stood
          for.
        </p>
      </ContentSection>

      <ContentSection title="The Problem">
        <p>
          The {"children's"} supplement space in India has a perception problem
          that goes deeper than most brands acknowledge.
        </p>
        <p>
          Parents are comfortable with what they know — Horlicks, Bournvita,
          sugary drinks, milk. These
          {"aren't"} necessarily good choices nutritionally, but {"they're"}{" "}
          familiar. They {"don't"} feel like interventions. They feel like food.
        </p>
        <p>
          Supplements, on the other hand — regardless of how clean or honest
          their formulations are — carry a different association. They feel like
          something that changes a child from the inside. Something medicinal.
          Something that implies the child is lacking. That perception{" "}
          {"doesn't"} disappear with better packaging or cleaner ingredient
          lists. It has to be reframed entirely.
        </p>
        <p>
          The second tension was category awareness. Most parents in the target
          audience knew something was off — their kids were tired too quickly,
          drained after school, sluggish in the heat — but they
          {"hadn't"} connected that problem to hydration. They were problem
          aware but solution unaware. Telling them about electrolytes and clean
          formulations {"wouldn't"} land until they understood why hydration was
          the answer in the first place.
        </p>
      </ContentSection>

      <ContentSection title="" variant="highlight">
        <i>{"Kids don't need to be fixed. They're already moving."}</i>
      </ContentSection>

      <VisualBreak
        image="/images/uprun-slide-2.jpg"
        alt="Active children playing"
        caption="Children are already the most active demographic there is"
      />

      <ContentSection title="The Research">
        <p>
          To understand how parents were actually thinking about their{" "}
          {"children's"} energy, fatigue, and daily nutrition — I designed a
          qualitative research questionnaire that mapped their relationship with
          {"children's"} supplements and hydration.
        </p>
        <p>
          The questions were built around four areas: what parents noticed about
          their {"children's"} energy through the day, what they were currently
          giving them and why, what their associations with supplements were,
          and what would make them trust a new product in this space.
        </p>
        <p>
          What came back was consistent. Parents {"weren't"} thinking about
          hydration at all. They were thinking about energy — and solving it
          with familiar, sugar-heavy products because the alternatives felt
          clinical or unnecessary. Nobody was connecting afternoon fatigue,
          post-sport exhaustion, or heat-related sluggishness to hydration
          specifically.
        </p>
        <p>
          I also conducted qualitative research on how global and domestic
          competitors were approaching
          {"children's"} packaging — mapping what brands like Cure Hydration,
          Welle Kids, and Hiya were communicating and to whom. What emerged was
          a consistent pattern: most brands were speaking to parents through
          clinical and functional language, while trying to attract children
          through colour and character. Very few were doing both well.
        </p>
      </ContentSection>

      <ContentSection title="The Insight">
        <p>
          Kids {"don't"} need to be fixed. {"They're"} already moving.
        </p>
        <p>
          When you spend time in the {"children's"} supplement category, you
          notice that almost every brand is speaking to a deficit. Your child
          lacks immunity. Your child lacks nutrition. Your child lacks focus.
          The communication is built around {"what's"} missing.
        </p>
        <p>
          But {"that's"} not how children experience themselves. Children{" "}
          {"don't"} think about what they lack. They think about what{" "}
          {"they're"} doing next. School. Sports. Running around. The next
          thing.
        </p>
        <p>
          The insight came from observing that simple truth — children are
          already the most active demographic there is. They have more on their
          plates than most adults. More movement, more energy expenditure, more
          heat exposure, more physical output. The hydration they need {"isn't"}{" "}
          corrective. {"It's"} fuel.
        </p>
        <p>
          This reframe changed everything. The product {"wasn't"} a supplement
          that filled a gap. It was hydration that kept up with kids who never
          slow down. Movement became the central idea.
        </p>
      </ContentSection>

      <ContentSection title="" variant="highlight">
        <i>
          {
            "They have more on their plates than most adults. More movement, more energy expenditure, more heat exposure, more physical output. The hydration they need isn't corrective. It's fuel."
          }
        </i>
      </ContentSection>

      <ContentSection title="The Strategy">
        <p>The central idea — Movement — anchored everything that followed.</p>
        <p>
          The brand personality drew on the Hero and the Explorer in deliberate
          combination. The Hero spoke to parents — it said your child is
          capable, and this supports that capability. The Explorer spoke to
          children — it said the world is yours to run through, and this keeps
          you running. Both archetypes served the same product but met their
          respective audiences exactly where they were.
        </p>
        <p>
          The positioning reflected the dual audience reality: For active
          individuals who refuse to slow down, Up & Run is a hydration brand
          with clean, need-based formulations that help your body stay hydrated,
          so you can keep moving.
        </p>
        <p>
          The tone — confident, warm, functional, empowering — made the brand
          feel like an ally rather than an authority. Not a lab. Not a doctor.
          Something closer to a coach who knows your kid better than the
          category does.
        </p>
        <p>
          The five communication pillars built from the same foundation —
          product truth, movement as purpose, everyday encouragement, education
          that simplified rather than intimidated, and community built around
          real stories of real kids in motion.
        </p>
      </ContentSection>

      <ContentSection title="Reflection">
        <p>
          This project taught me something specific about entering a new
          audience with an existing brand.
        </p>
        <p>
          The temptation is always to build something new — a new identity, a
          new voice, a new set of values — to speak to a new audience. But the
          more honest and often more powerful move is to find the thread that
          already exists in the brand and follow it somewhere new.
        </p>
        <p>
          Up & Run was already about movement. Children are already movers. The
          insight {"wasn't"} invented. It was recognised.
        </p>
        <p>
          {"That's"} the work I find most interesting — not building a brand
          idea from nothing, but finding the one that was already there, waiting
          to be seen.
        </p>
      </ContentSection>

      <NextProject
        title="GoChanakya"
        subtitle="Rebranding a financial education firm for India's first-time earners."
        href="/gochanakya"
        image="/images/GC.jpeg"
      />

      <Footer />
    </main>
  );
}
