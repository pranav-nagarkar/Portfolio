'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CaseStudyHeroProps {
  title: string
  subtitle: string
  tags: string[]
  image: string
}

export function CaseStudyHero({ title, subtitle, tags, image }: CaseStudyHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[70vh] md:h-[85vh] min-h-[500px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className={`object-cover transition-transform duration-1000 ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-20 w-full">
        {/* Tags */}
        <div 
          className={`flex flex-wrap gap-3 mb-6 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs tracking-wider uppercase bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 
          className={`font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-4 max-w-4xl transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}
