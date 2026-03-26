'use client'

import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Intro Label */}
        <div 
          className={`mb-8 transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-sm tracking-wider uppercase text-muted-foreground">
            Brand Strategist
          </span>
          <div className="w-16 h-px bg-accent mt-4" />
        </div>

        {/* Main Headline */}
        <h1 
          className={`font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] max-w-5xl mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          I help brands find the words for what they already are.
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Strategic positioning, brand voice, and communication systems that 
          help businesses connect with the people they were built to serve.
        </p>

        {/* Scroll Indicator */}
        <div 
          className={`mt-16 md:mt-24 flex items-center gap-4 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-px h-16 bg-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-pulse" />
          </div>
          <span className="text-xs tracking-wider uppercase text-muted-foreground">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  )
}
