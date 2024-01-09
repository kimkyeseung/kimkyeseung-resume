import { FC } from 'react'
import { Projects } from './Projects'
import { Experience as E } from '@/types'
import { Company } from './Company'
import { TwoColumnRow } from '@/components'

interface Props extends E {}

export const Experience: FC<Props> = ({ projects, ...companyProps }) => {
  return (
    <TwoColumnRow leftSide={<Company {...companyProps} />}>
      <Projects items={projects} />
    </TwoColumnRow>
  )
}
