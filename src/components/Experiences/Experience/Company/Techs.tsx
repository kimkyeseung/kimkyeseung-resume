import { Experience } from '@/types'
import { Caption } from '@/typography'
import { isEmpty } from 'lodash'
import { FC } from 'react'

interface Props {
  items: Required<Experience>['techs']
}

export const Techs: FC<Props> = ({ items }) => {
  return (
    <div>
      <div>사용 기술</div>
      <ul>
        {items.map((t, index) => (
          <li key={index}>
            <Caption>{t}</Caption>
          </li>
        ))}
      </ul>
    </div>
  )
}
