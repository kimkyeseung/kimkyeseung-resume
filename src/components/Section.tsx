import { SectionTitle } from '@/typography'
import { FC, ReactElement } from 'react'

interface Props {
  title?: string
  children: ReactElement
}

export const Section: FC<Props> = ({ title, children }) => {
  return (
    <div>
      {title && (
        <SectionTitle className="text-xl font-bold">{title}</SectionTitle>
      )}
      <hr className="my-4 border-t border-gray-300" />
      {children}
    </div>
  )
}
