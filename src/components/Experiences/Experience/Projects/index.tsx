import { Project } from '@/types'
import { ProjectTitle } from '@/typography'
import { FC } from 'react'

interface Props {
  items: Project[]
}

export const Projects: FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((p, index) => (
        <div key={index}>
          <ProjectTitle>{p.title}</ProjectTitle>
          <div className="mt-1">
            {p.details.map((d, index) => (
              <div key={index} className="text-gray-700">
                {d}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
