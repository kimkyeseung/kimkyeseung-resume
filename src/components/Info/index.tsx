import { ADDRESS, EMAIL, GITHUB_URL, PHONE_NUMBER } from '@/constants'
import {
  CodeBracketSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid'

const iconColor = 'text-indigo-400'

export const Info = () => {
  return (
    <div className="flex gap-1 flex-col">
      <div className="flex gap-2">
        <CodeBracketSquareIcon className={`h-6 w-6 ${iconColor}`} />
        <a href={GITHUB_URL} target="_blank">
          {GITHUB_URL}
        </a>
      </div>
      <div className="flex gap-2">
        <EnvelopeIcon className={`h-6 w-6 ${iconColor}`} />
        <a href={`mailto:${EMAIL}`} target="_blank">
          {EMAIL}
        </a>
      </div>
      <div className="flex gap-2">
        <PhoneIcon className={`h-6 w-6 ${iconColor}`} />
        <a href={`tel:${EMAIL}`} target="_blank">
          {PHONE_NUMBER}
        </a>
      </div>
      <div className="flex gap-2">
        <HomeModernIcon className={`h-6 w-6 ${iconColor}`} />
        {ADDRESS}
      </div>
      <div className="flex gap-2">
        <AcademicCapIcon className={`h-6 w-6 ${iconColor}`} />
        국립 부경대학교 시각디자인 전공
      </div>
    </div>
  )
}
