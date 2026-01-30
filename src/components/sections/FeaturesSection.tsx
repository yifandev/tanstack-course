import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Zap, Globe, Brain, Shield, Clock, BarChart } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Any Website',
    description:
      'Summarize content from any website, blog, article, or research paper. No limitations on sources.',
    color: 'text-blue-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Get summaries in seconds, not minutes. Process multiple URLs simultaneously for team workflows.',
    color: 'text-amber-500',
  },
  {
    icon: Brain,
    title: 'Smart AI',
    description:
      'Advanced LLMs understand context and extract key points while maintaining original meaning.',
    color: 'text-purple-500',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description:
      'Your data is encrypted and never stored. Enterprise-grade security for sensitive content.',
    color: 'text-green-500',
  },
  {
    icon: Clock,
    title: 'Time Saver',
    description:
      'Save 80% of your reading time. Focus on insights instead of skimming through lengthy articles.',
    color: 'text-rose-500',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description:
      'Track your summarization history, frequently visited sources, and time saved over weeks.',
    color: 'text-cyan-500',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful Features for{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Everything you need to extract insights from web content efficiently
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div
                  className={`mb-4 inline-flex rounded-lg p-3 ${feature.color.replace('text-', 'bg-')}/10`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-1 w-0 group-hover:w-full bg-linear-to-r from-primary to-secondary transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
