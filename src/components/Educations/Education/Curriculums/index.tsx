import { Curriculum } from '@/types'
import { ProjectTitle } from '@/typography'
import { FC } from 'react'

interface Props {
  items: Curriculum[]
}

export const Curriculums: FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((p, index) => (
        <div key={index}>
          <ProjectTitle>{p.title}</ProjectTitle>
          <div className="mt-1">{p.description}</div>
        </div>
      ))}
    </div>
  )
}
