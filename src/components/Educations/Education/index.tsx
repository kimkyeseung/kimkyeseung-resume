import { FC } from 'react'
import { Education as E } from '@/types'
import { Institution } from './Institution'
import { TwoColumnRow, Details } from '@/components'

interface Props extends E {}

export const Education: FC<Props> = ({ curriculums, ...institutionProps }) => {
  return (
    <TwoColumnRow leftSide={<Institution {...institutionProps} />}>
      <Details items={curriculums} />
    </TwoColumnRow>
  )
}
