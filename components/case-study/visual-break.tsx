'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

interface VisualBreakProps {
  image: string
  alt: string
  caption?: string
  variant?: 'full' | 'contained'
}

export function VisualBreak({ image, alt, caption, variant = 'contained' }: VisualBreakProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-20 ${variant === 'full' ? '' : 'px-6 md:px-12'}`}
    >
      <div className={variant === 'full' ? '' : 'max-w-6xl mx-auto'}>
        <div 
          className={`relative aspect-[16/9] overflow-hidden bg-secondary transition-all duration-1000 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${variant === 'contained' ? 'rounded-sm' : ''}`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
        {caption && (
          <p 
            className={`mt-4 text-sm text-muted-foreground text-center transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {caption}
          </p>
        )}
      </div>
    </section>
  )
}
