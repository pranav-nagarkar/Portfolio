import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { AboutSection } from "@/components/home/about-section";
import { WritingSection } from "@/components/home/writing-section";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WritingSection />
      <Footer />
    </main>
  );
}
