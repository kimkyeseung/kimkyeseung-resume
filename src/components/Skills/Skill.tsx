import { Caption } from '@/typography'
import { Skill as S } from '@/types'
import { FC } from 'react'

interface Props {
  item: S
}

export const Skill: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col items-center w-16 md:w-28">
      {item.Icon}
      <Caption className="mt-2 text-center whitespace-pre-wrap md:whitespace-pre">
        {item.name}
      </Caption>
    </div>
  )
}
