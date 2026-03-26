"use client";

import { useInView } from "@/hooks/use-in-view";

const projects = [
  {
    num: "01",
    title: "GoChanakya",
    description:
      "Rebranding a financial education firm for India's first-time earners — 15% sales uplift post-launch.",
    tags: ["Financial Services", "Rebranding"],
    href: "/gochanakya",
  },
  {
    num: "02",
    title: "Paushtikk Switch",
    description:
      "Full brand relaunch for a wellness brand — 40% engagement uplift and 12% new customer growth.",
    tags: ["Wellness", "Rebranding"],
    href: "/paushtikk-switch",
  },
  {
    num: "03",
    title: "Untie",
    description:
      "End-to-end brand strategy for a curl care brand competing in India's most crowded beauty shelf. Confidential.",
    tags: ["Beauty", "Strategy"],
    href: "/untie",
  },
  {
    num: "04",
    title: "Aeter",
    description:
      "Brand strategy for a new luxury perfume house entering the US and Gulf markets. Confidential.",
    tags: ["Luxury Fragrance", "Strategy"],
    href: "/aeter",
  },
  {
    num: "05",
    title: "Up & Run",
    description:
      "Research and strategy for a children's hydration supplement — reframing a supplement as fuel for the way kids already live.",
    tags: ["FMCG", "Research", "Strategy"],
    href: "/uprun",
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className={`flex justify-between items-baseline mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-black tracking-tight">
            Selected Work
          </h2>
          <span className="text-sm tracking-wider uppercase text-muted-foreground">
            05 Projects
          </span>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <a
              key={project.num}
              href={project.href}
              className={`group relative flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 md:py-8 border-b border-border overflow-hidden transition-all duration-500 cursor-pointer no-underline text-foreground hover:bg-accent hover:border-l-4 hover:border-l-foreground hover:pl-6 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Yellow sweep on hover */}
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Number */}
              <span className="font-serif text-sm italic text-muted-foreground w-8 flex-shrink-0">
                {project.num}
              </span>

              {/* Title + Description */}
              <div className="flex-1">
                <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight mb-1 transition-transform duration-300 group-hover:translate-x-2">
                  {project.title}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </div>
              </div>

              {/* Tags */}
              <div className="hidden md:flex gap-2 flex-wrap justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wider uppercase bg-foreground/5 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className="hidden md:block text-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
