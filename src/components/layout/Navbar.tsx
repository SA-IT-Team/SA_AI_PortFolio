import { Link, useNavigate } from 'react-router-dom'
import { LogOut, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'
import { useAuth } from '@/contexts/AuthContext'

export function Navbar() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  async function handleSignOut() {
    await signOut()
    navigate('/login', { replace: true })
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-sky-200/70 bg-white/95 shadow-sm shadow-sky-100/50 backdrop-blur-md transition-colors duration-300"
      role="banner"
    >
      <Container>
        <nav className="flex h-14 sm:h-16 items-center justify-between gap-3" aria-label="Main navigation">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-lg font-semibold text-slate-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:text-primary"
          >
            <Sparkles className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            <span>{company.name}</span>
          </Link>

          {user && (
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden max-w-[180px] truncate text-sm text-slate-secondary sm:inline">
                {user.email}
              </span>
              <button
                type="button"
                onClick={handleSignOut}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-sky-300/70 bg-white/80 px-3 py-2 text-sm font-medium text-slate-primary shadow-sm transition-all duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <LogOut className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">Sign out</span>
              </button>
            </div>
          )}
        </nav>
      </Container>
    </header>
  )
}
