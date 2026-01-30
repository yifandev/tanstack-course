import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/web/navbar'
import LandingPage from '@/components/LandingPage'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  )
}
