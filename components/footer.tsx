import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              {"Let's work together"}
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-md">
              Looking for a brand strategist who can help you find your voice and connect with your audience?
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <a
                href="mailto:pranavnagarkar8@gmail.com"
                className="block text-lg md:text-xl hover:text-accent transition-colors"
              >
                iampranavnagarkar@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/pranavnagarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/70 hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-12 md:mt-0">
              <p className="text-primary-foreground/50 text-sm">
                © {new Date().getFullYear()} Pranav Nagarkar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
