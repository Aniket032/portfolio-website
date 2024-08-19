'use client'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Get the navigation entries
    const navigationEntry = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming

    // Check if the navigation type is a reload
    if (navigationEntry && navigationEntry.type === 'reload') {
      router.replace('/#home')
    }
  }, [router])
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  )
}
