import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { Container } from '@/components/ui/Container'

export function GuestRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <Container>
          <p className="text-center text-sm text-slate-secondary">Loading...</p>
        </Container>
      </section>
    )
  }

  if (user) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
