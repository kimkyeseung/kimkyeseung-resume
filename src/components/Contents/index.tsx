import { forwardRef } from 'react'
import {
  Header,
  Info,
  Section,
  Summary,
  Experiences,
  Educations,
  Skills,
} from '..'
import Image from 'next/image'
import { DOCUMENT_DESCRIPTION, PROFILE_IMAGE_URL } from '@/constants'

// eslint-disable-next-line react/display-name
export const Contents = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div className="bg-white shadow w-full md:w-[350mm] print-area">
      <div
        ref={ref}
        className="container p-4 md:p-24 print:p-0 flex flex-col gap-8 md:gap-12"
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-8 md:gap-12">
            <Header />
            <Info />
          </div>
          <div className="rounded-full overflow-hidden h-fit print:scale-50 origin-top-right">
            <Image
              src={PROFILE_IMAGE_URL}
              alt={DOCUMENT_DESCRIPTION}
              title={DOCUMENT_DESCRIPTION}
              width={200}
              height={200}
            />
          </div>
        </div>

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
