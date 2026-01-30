import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const benefits = [
  'No credit card required',
  'Free 100 summaries/month',
  'All AI models included',
  'Team collaboration features',
  'API access available',
]

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-secondary/5 to-primary/5"></div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Start Summarizing{' '}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Today
            </span>
          </h2>

          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Join thousands of researchers, students, and professionals who save
            hours every week
          </p>

          <Card className="mt-10 border-2">
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6 text-left">
                  <h3 className="text-2xl font-bold">Free Forever Plan</h3>
                  <div className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <div className="text-4xl font-bold">Free</div>
                    <p className="text-muted-foreground">
                      forever for basic usage
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button size="lg" className="w-full gap-2" asChild>
                      <Link to="/signup">
                        Get Started Free
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>No setup required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
