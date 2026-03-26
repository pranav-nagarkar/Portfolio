'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'
import { ArrowRight } from 'lucide-react'

interface NextProjectProps {
  title: string
  subtitle: string
  href: string
  image: string
}

export function NextProject({ title, subtitle, href, image }: NextProjectProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary">
      <Link href={href} className="group block">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div 
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <p className="text-sm tracking-wider uppercase text-muted-foreground mb-4">
                Next Project
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 group-hover:text-accent transition-colors duration-300">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                {subtitle}
              </p>
              <div className="flex items-center gap-3 text-foreground group-hover:gap-5 transition-all duration-300">
                <span className="font-medium">View Project</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Image Preview */}
            <div 
              className={`relative aspect-[4/3] overflow-hidden bg-muted rounded-sm transition-all duration-700 delay-200 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
