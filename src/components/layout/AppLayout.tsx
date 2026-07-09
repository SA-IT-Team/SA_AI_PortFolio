import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { BackToTop } from '@/components/layout/BackToTop'

export function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BackToTop />
    </>
  )
}
