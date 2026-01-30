import { Card, CardContent } from '@/components/ui/card'
import {
  Link as LinkIcon,
  FileText,
  Sparkles,
  Download,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '../ui/input'

const steps = [
  {
    step: '01',
    icon: LinkIcon,
    title: 'Paste URL',
    description:
      'Copy and paste any webpage URL. Our Firecrawl integration extracts clean content automatically.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'AI Processing',
    description:
      'Advanced AI analyzes content, identifies key points, and generates concise, accurate summaries.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Get Summary',
    description:
      'Receive structured summaries with main points, key takeaways, and actionable insights.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    step: '04',
    icon: Download,
    title: 'Export & Share',
    description:
      'Download as PDF, Markdown, or share directly with your team via secure links.',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6 border border-primary/20">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Simple 4-Step Process
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl">
            How It{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            From URL to insights in just a few clicks
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Desktop Connection Lines */}
          <div className="hidden lg:block absolute top-20 left-10 right-10 h-0.5">
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10"></div>
            <div className="absolute inset-0 bg-linear-to-r from-primary/30 via-secondary/30 to-primary/30 blur-sm"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="relative border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 md:p-8">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r ${step.color} text-white font-bold text-lg shadow-lg`}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={`mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r ${step.color} bg-opacity-10 border border-border/30`}
                    >
                      <div
                        className={`bg-linear-to-r ${step.color} bg-clip-text`}
                      >
                        <step.icon className="h-7 w-7 text-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Try It Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-primary"></div>

            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 mb-4">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Try It Now
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  See the Magic Yourself
                </h3>
                <p className="text-muted-foreground">
                  Paste a URL below and get an instant preview
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="https://example.com/article"
                      className="h-12 px-4 text-base border-2 border-border/50 focus:border-primary/50 rounded-lg"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="gap-2 min-w-35 h-12 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Sparkles className="h-4 w-4" />
                    Summarize
                  </Button>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-px flex-1 bg-border/50"></div>
                  <span className="whitespace-nowrap">
                    Or try with a sample URL
                  </span>
                  <div className="h-px flex-1 bg-border/50"></div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    'Tech Article',
                    'Research Paper',
                    'News Report',
                    'Blog Post',
                  ].map((type, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="border-border/50 hover:border-primary/50"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">
                Websites Processed
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">99.8%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2.5s</div>
              <div className="text-sm text-muted-foreground">
                Average Processing
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">
                Languages Supported
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
