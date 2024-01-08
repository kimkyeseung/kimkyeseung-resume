import { DISPLAY_DATE_FORAMT } from '@/constants'
import { Experience } from '@/types'
import { Caption, CompanyName, Url } from '@/typography'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import dayjs from 'dayjs'
import { FC } from 'react'

type Props = Pick<Experience, 'name' | 'joinedAt' | 'seperatedAt' | 'url'>

export const CompanyInfo: FC<Props> = ({
  name,
  joinedAt,
  seperatedAt,
  url,
}) => (
  <div>
    <div className="flex gap-2 items-center">
      <CompanyName>{name}</CompanyName>
      <Caption>
        {dayjs(joinedAt).format(DISPLAY_DATE_FORAMT)} ~
        {dayjs(seperatedAt).format(DISPLAY_DATE_FORAMT)}
      </Caption>
    </div>

    {url && (
      <a target="_blank" href={url}>
        <Url className="flex gap-1 items-center">
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          {url}
        </Url>
      </a>
    )}
  </div>
)
