import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { BackToTop } from '@/components/layout/BackToTop'
import { Portfolio } from '@/pages/Portfolio'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </main>
      <BackToTop />
    </>
  )
}

export default App
