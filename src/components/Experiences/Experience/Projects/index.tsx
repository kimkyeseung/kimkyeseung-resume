import { Project } from '@/types'
import { Caption, ProjectTitle } from '@/typography'
import { FC } from 'react'

interface Props {
  items: Project[]
}

export const Projects: FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((p, index) => (
        <div key={index}>
          <ProjectTitle className="flex items-baseline flex-wrap gap-2">
            {p.title}
            {p.description && <Caption>{p.description}</Caption>}
          </ProjectTitle>
          <ul className="mt-1">
            {p.details.map((d, index) => (
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
