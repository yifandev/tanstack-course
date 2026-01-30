import { Link } from '@tanstack/react-router'
import { Button, buttonVariants } from '../ui/button'
import { ModeToggle } from './theme-toggle'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Keluar akun succesfully')
        },
        onError: ({ error }) => {
          toast.error(error.message)
        },
      },
    })
  }
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-380 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Logo container dengan gradient border */}
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary opacity-20 rounded-xl blur-sm" />
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-background to-background/80 border border-border/50 shadow-sm backdrop-blur-sm">
              {/* Logo dengan gradient */}
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="oklch(0.4341 0.0392 41.9938)"
                    />
                    <stop
                      offset="100%"
                      stopColor="oklch(0.9247 0.0524 66.1732)"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="url(#logoGradient)"
                  stroke="url(#logoGradient)"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 17L12 22L22 17"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          {/* Text dengan design modern */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <h1 className="text-xl font-bold tracking-tight text-foreground">
                <span className="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Firecrawl
                </span>
              </h1>
              <span className="rounded-full bg-linear-to-r from-primary/10 to-secondary/10 px-2 py-0.5 text-xs font-medium text-primary">
                AI
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />

          {isPending ? null : session ? (
            <>
              <Link to="/dashboard" className={buttonVariants()}>
                Dashboard
              </Link>
              <Button onClick={handleSignOut} variant="secondary">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                to={'/login'}
                className={buttonVariants({ variant: 'secondary' })}
              >
                Login
              </Link>
              <Link to={'/signup'} className={buttonVariants()}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
