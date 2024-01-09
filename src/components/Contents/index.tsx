import { forwardRef } from 'react'
import { Header, Info, Section, Summary, Experiences, Educations } from '..'

export const Contents = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="bg-white shadow">
      <div
        ref={ref}
        className="container p-4 md:p-32 print:p-12 flex flex-col gap-12 print:gap-6"
      >
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
    </div>
  )
})
