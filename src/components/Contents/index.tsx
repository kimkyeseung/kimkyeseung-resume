import { forwardRef } from 'react'
import { Header, Info, Section, Summary, Experiences, Educations } from '..'

// eslint-disable-next-line react/display-name
export const Contents = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="bg-white shadow w-[350mm] print-area">
      <div ref={ref} className="container p-4 md:p-24 flex flex-col gap-12">
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
