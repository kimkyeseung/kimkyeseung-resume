import { forwardRef } from 'react'
import { Section, Summary, Experiences, Educations, Skills, Header } from '..'

// eslint-disable-next-line react/display-name
export const Contents = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="bg-white shadow w-full md:w-[350mm] print-area">
      <div
        ref={ref}
        className="container p-4 md:p-24 print:p-0 flex flex-col gap-8 md:gap-12"
      >
        <Header />

        <Section title="Principal Summary">
          <Summary />
        </Section>

        <Section title="Skills">
          <Skills />
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
