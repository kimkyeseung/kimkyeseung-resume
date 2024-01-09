import { FC } from 'react'
import { Education as E } from '@/types'
import { Institution } from './Institution'
import { TwoColumnRow } from '@/components'
import { Curriculums } from './Curriculums'

interface Props extends E {}

export const Education: FC<Props> = ({ curriculums, ...institutionProps }) => {
  return (
    <TwoColumnRow leftSide={<Institution {...institutionProps} />}>
      <Curriculums items={curriculums} />
    </TwoColumnRow>
  )
}
