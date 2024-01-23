import { Detail } from '@/types'
import { Caption, ProjectTitle } from '@/typography'
import { FC } from 'react'

interface Props {
  items: Detail[]
}

export const Details: FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col gap-6">
      {items.map((p, index) => (
        <div key={index} className="break-inside-avoid-page">
          <ProjectTitle className="flex items-baseline flex-wrap gap-2">
            {p.title}
            {p.information && <Caption>{p.information}</Caption>}
          </ProjectTitle>
          <ul className="mt-1">
            {p.descriptions.map((d, index) => (
              <li key={index} className="text-gray-700">
                {d}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
