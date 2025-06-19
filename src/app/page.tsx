import { Section } from '@/components/ui/section'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <div className='flex flex-col flex-1'>
      <Section id='about' className='pb-24'>
        <Hero />
        <Skills />
      </Section>
    </div>
  )
}
