'use client'

import { useInView } from '@/hooks/use-in-view'

interface ProjectOverviewProps {
  role: string
  timeline: string
  industry: string
  client?: string
}

export function ProjectOverview({ role, timeline, industry, client }: ProjectOverviewProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const items = [
    { label: 'Role', value: role },
    { label: 'Timeline', value: timeline },
    { label: 'Industry', value: industry },
    ...(client ? [{ label: 'Client', value: client }] : []),
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {items.map((item, index) => (
            <div 
              key={item.label}
              className={`transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-xs tracking-wider uppercase text-muted-foreground mb-2">
                {item.label}
              </p>
              <p className="font-serif text-xl md:text-2xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
