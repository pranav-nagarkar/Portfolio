'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href: string
  image: string
  index: number
  priority?: boolean
}

export function ProjectCard({ title, description, tags, href, image, index, priority = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link 
      href={href}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article 
        className="relative overflow-hidden"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-6">
          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className={`object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          <div 
            className={`absolute inset-0 bg-foreground/10 transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Hover Arrow */}
          <div 
            className={`absolute bottom-4 right-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs tracking-wider uppercase text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Underline animation */}
          <div className="relative h-px bg-border overflow-hidden mt-6">
            <div 
              className={`absolute inset-y-0 left-0 bg-foreground transition-all duration-500 ${
                isHovered ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        </div>
      </article>
    </Link>
  )
}
