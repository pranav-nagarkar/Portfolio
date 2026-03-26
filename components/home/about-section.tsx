"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Left Column - Image */}
          <div className="flex flex-col">
            <span
              className={`text-sm tracking-wider uppercase text-muted-foreground block mb-4 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              About
            </span>
            <div
              className={`w-16 h-px bg-accent mb-8 transition-all duration-700 delay-100 ${
                isInView
                  ? "opacity-100 scale-x-100 origin-left"
                  : "opacity-0 scale-x-0"
              }`}
            />
            <div
              className={`relative aspect-[4/5] w-full max-w-md overflow-hidden transition-all duration-1000 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Image
                src="/images/Pranav.jpeg"
                alt="Pranav Nagarkar - Brand Strategist"
                fill
                className="object-cover hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 mt-8 items=start">
            <p
              className={`font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Brand strategy is the art of making the invisible visible — taking
              what a business already knows about itself and making it legible
              to everyone else.
            </p>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-700 delay-400 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                I work with founders and teams who have built something
                meaningful but
                {"haven't"} yet found the language to communicate it. My role is
                to listen deeply, find the strategic truth at the core of what
                they do, and translate it into positioning, voice, and systems
                that work.
              </p>
              <p>
                The best brand strategies {"aren't"} invented — {"they're"}{" "}
                discovered. {"They're"}
                already there, waiting to be articulated. My job is to find
                them.
              </p>
            </div>

            {/* Contact CTA */}
            <div
              className={`pt-8 transition-all duration-700 delay-600 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="mailto:pranavnagarkar8@gmail.com"
                className="inline-flex items-center gap-3 group"
              >
                <span className="w-8 h-px bg-foreground transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
