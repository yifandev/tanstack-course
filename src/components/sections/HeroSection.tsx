import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Users } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-linear-to-b from-background to-secondary/5">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Web Content Summarization
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl">
                Summarize Any Web Content{' '}
                <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Instantly
                </span>
              </h1>

              <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
                Extract key insights from articles, blogs, research papers, and
                websites in seconds. Powered by Firecrawl for accurate content
                extraction and advanced AI for smart summarization.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to="/dashboard" className="group">
                  Start Summarizing
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 hover:border-primary/50 transition-colors"
              >
                <Link to="/dashboard/import">Watch Demo</Link>
              </Button>
            </div>

            {/* User Stats */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xs font-semibold text-primary"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-semibold">
                  <Users className="h-4 w-4" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Trusted by 10,000+ users</p>
                <p className="text-xs text-muted-foreground">
                  Saving hours every week
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Placeholder for hero image/illustration */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 p-8 border border-border/50 shadow-2xl">
              <div className="aspect-video rounded-xl bg-linear-to-br from-primary/5 to-secondary/5 border border-border/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      Live Preview
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Your summarized content will appear here
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/10 blur-xl" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-secondary/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
