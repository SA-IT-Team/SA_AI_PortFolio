import { FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Lock, LogIn, Mail, Sparkles } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const BUBBLES = [
  { size: 44, left: '12%', top: '18%', delay: '0s', duration: '11s' },
  { size: 32, left: '88%', top: '14%', delay: '1.2s', duration: '13s' },
  { size: 48, left: '78%', top: '68%', delay: '0.6s', duration: '12s' },
]

export function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const { isConfigured, signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const redirectPath =
    typeof location.state === 'object' &&
    location.state !== null &&
    'from' in location.state &&
    typeof location.state.from === 'string'
      ? location.state.from
      : '/'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSubmitting(true)

    const result = await signIn(email.trim(), password)
    setSubmitting(false)

    if (result.error) {
      setError(result.error)
      return
    }

    navigate(redirectPath, { replace: true })
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-10 sm:py-14">
      {BUBBLES.map((bubble, index) => (
        <div
          key={index}
          className="bubble animate-float-slow"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
          aria-hidden
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" aria-hidden />

      <Container className="relative">
        <div className="mx-auto w-full max-w-md animate-fade-in-up">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-surface-lighter shadow-inner ring-1 ring-primary/20">
              <Sparkles className="h-6 w-6 text-primary" aria-hidden />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Welcome back</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-primary sm:text-3xl">
              Sign in to your account
            </h1>
            <p className="mt-1 text-sm text-slate-secondary">
              Access your SA AI Projects workspace
            </p>
          </div>

          <Card className="p-6 sm:p-8">
            {!isConfigured ? (
              <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-amber-900">
                <p className="font-medium">Supabase is not configured</p>
                <p className="mt-1 text-amber-800/90">
                  Copy <code className="rounded bg-amber-100 px-1">.env.example</code> to{' '}
                  <code className="rounded bg-amber-100 px-1">.env</code> and add your Supabase URL and anon key.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-primary">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70"
                      aria-hidden
                    />
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-sky-300/70 bg-white/90 py-2.5 pl-10 pr-3 text-sm text-slate-primary shadow-sm outline-none transition-all duration-300 placeholder:text-slate-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-primary">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70"
                      aria-hidden
                    />
                    <input
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-sky-300/70 bg-white/90 py-2.5 pl-10 pr-3 text-sm text-slate-primary shadow-sm outline-none transition-all duration-300 placeholder:text-slate-secondary/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200/80 bg-red-50/90 px-4 py-3 text-sm text-red-700"
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-300/40 transition-all duration-300 hover:from-primary-dark hover:to-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <LogIn className="h-4 w-4" aria-hidden />
                  {submitting ? 'Signing in...' : 'Sign in'}
                </button>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  )
}
