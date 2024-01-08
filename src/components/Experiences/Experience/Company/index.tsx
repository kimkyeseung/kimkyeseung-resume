import { CompanyName, Url } from '@/typography'
import type { Experience } from '@/types'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

type Props = Omit<Experience, 'projects'>

export const Company: FC<Props> = ({
  name,
  joinedAt,
  seperatedAt,
  description,
  techs = [],
  url,
}) => {
  return (
    <div>
      <CompanyName>{name}</CompanyName>
      <div>{description}</div>
      {url && (
        <a target="_blank" href={url}>
          <Url className="flex gap-1 items-center">
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            {url}
          </Url>
        </a>
      )}
      {techs.length ? (
        <ul>
          {techs.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
