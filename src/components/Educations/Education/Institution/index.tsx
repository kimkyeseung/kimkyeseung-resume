import type { Education } from '@/types'
import { FC } from 'react'
import { Descriptions } from './Descriptions'
import { InstitutionInfo } from './InstitutionInfo'

type Props = Omit<Education, 'curriculums'>

export const Institution: FC<Props> = ({
  descriptions,
  ...InstitutionInfoProps
}) => {
  return (
    <div className="flex flex-col gap-2">
      <InstitutionInfo {...InstitutionInfoProps} />
      <Descriptions items={descriptions} />
    </div>
  )
}
