import Image from 'next/image'
import NavBar from './components/NavBar'
import FirstSection from './components/sections/FirstSection'

export default function Home() {
  return (
    <main>
      <NavBar />
      <FirstSection />
    </main>
  )
}
