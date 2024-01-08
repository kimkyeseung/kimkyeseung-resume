import type { Experience } from '@/types'
import { FC } from 'react'
import { isEmpty } from 'lodash'
import { Descriptions } from './Descriptions'
import { Techs } from './Techs'
import { CompanyInfo } from './CompanyInfo'

type Props = Omit<Experience, 'projects'>

export const Company: FC<Props> = ({
  descriptions,
  techs = [],
  ...companyInfoProps
}) => {
  return (
    <div className="flex flex-col gap-2">
      <CompanyInfo {...companyInfoProps} />
      <Descriptions items={descriptions} />
      {!isEmpty(techs) && <Techs items={techs} />}
    </div>
  )
}
