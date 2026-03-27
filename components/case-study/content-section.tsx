"use client";

import { useInView } from "@/hooks/use-in-view";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "highlight";
}

export function ContentSection({
  title,
  children,
  variant = "default",
}: ContentSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  if (variant === "highlight") {
    return (
      <section ref={ref} className="py-20 md:py-32 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <blockquote
            className={`font-serif text-2xl md:text-4xl lg:text-5xl leading-relaxed text-center transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {children}
          </blockquote>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2
          className={`font-serif text-3xl md:text-4xl mb-8 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </h2>
        <div
          className={`prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-3 md:space-y-5 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
