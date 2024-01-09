import { Inter } from 'next/font/google'
import {
  Summary,
  Header,
  Section,
  Experiences,
  Info,
  Educations,
} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-0 md:p-24 ${inter.className} bg-gray-100 w-screen`}
    >
      <div className="bg-white shadow container p-4 md:p-32 flex flex-col gap-12">
        <Header />
        <Info />
        <Section title="Principal Summary">
          <Summary />
        </Section>

        <Section title="Experience">
          <Experiences />
        </Section>

        <Section title="Education">
          <Educations />
        </Section>
      </div>
    </main>
  )
}
