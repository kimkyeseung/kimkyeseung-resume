import { Inter } from 'next/font/google'
import { Summary, Header, Section, Experiences, Info } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-gray-100`}
    >
      <div className="bg-white shadow container p-32 flex flex-col gap-12">
        <Header />
        <Info />
        <Section title="Principal Summary">
          <Summary />
        </Section>

        <Section title="Experience">
          <Experiences />
        </Section>
      </div>
    </main>
  )
}
