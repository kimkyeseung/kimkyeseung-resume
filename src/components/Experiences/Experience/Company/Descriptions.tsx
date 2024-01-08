import { Experience } from '@/types'
import { Caption } from '@/typography'
import { isEmpty } from 'lodash'
import { FC } from 'react'

interface Props {
  items: Experience['descriptions']
}

export const Descriptions: FC<Props> = ({ items }) => {
  return items.map((d, index) => (
    <div key={index}>
      <div>{d.title}</div>
      {!isEmpty(d.details) && (
        <ul>
          {d.details?.map((t, index) => (
            <li key={index}>
              <Caption>{t}</Caption>
            </li>
          ))}
        </ul>
      )}
    </div>
  ))
}
