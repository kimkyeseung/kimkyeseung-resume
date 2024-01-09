import { SectionTitle } from '@/typography'
import { FC, PropsWithChildren } from 'react'

type Props = { title?: string } & PropsWithChildren

export const Section: FC<Props> = ({ title, children }) => {
  return (
    <div>
      {title && (
        <SectionTitle className="text-xl font-bold">{title}</SectionTitle>
      )}
      <hr className="mt-1 mb-5 print:mt-0 print:mb-3 border-t border-blue-200" />
      {children}
    </div>
  )
}
