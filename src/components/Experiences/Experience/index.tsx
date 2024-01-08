import { FC } from 'react'
import { Projects } from './Projects'
import { Experience as E } from '@/types'
import { Company } from './Company'

interface Props extends E {}

export const Experience: FC<Props> = ({ projects, ...companyProps }) => {
  return (
    <div className="container flex gap-10">
      <div className="basis-1/4">
        <Company {...companyProps} />
      </div>
      <div className="basis-auto">
        <Projects items={projects} />
      </div>
    </div>
  )
}
