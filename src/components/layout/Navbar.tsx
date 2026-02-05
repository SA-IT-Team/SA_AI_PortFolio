import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-sky-200/70 bg-white/95 shadow-sm shadow-sky-100/50 backdrop-blur-md transition-colors duration-300"
      role="banner"
    >
      <Container>
        <nav className="flex h-14 sm:h-16 items-center justify-center" aria-label="Main navigation">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-lg font-semibold text-slate-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:text-primary"
          >
            <Sparkles className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            <span>{company.name}</span>
          </Link>
        </nav>
      </Container>
    </header>
  )
}
