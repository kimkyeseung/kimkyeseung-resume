import { ADDRESS, EMAIL, GITHUB_URL, PHONE_NUMBER } from '@/constants'
import {
  CodeBracketSquareIcon,
  EnvelopeIcon,
  PhoneIcon,
  HomeModernIcon,
} from '@heroicons/react/24/solid'

const iconColor = 'text-blue-600'

export const Info = () => {
  return (
    <ul className="flex gap-1 flex-col">
      <li className="flex gap-2">
        <CodeBracketSquareIcon className={`h-6 w-6 ${iconColor}`} />
        <a href={GITHUB_URL} target="_blank">
          {GITHUB_URL}
        </a>
      </li>
      <li className="flex gap-2">
        <EnvelopeIcon className={`h-6 w-6 ${iconColor}`} />
        <a href={`mailto:${EMAIL}`} target="_blank">
          {EMAIL}
        </a>
      </li>
      <li className="flex gap-2">
        <PhoneIcon className={`h-6 w-6 ${iconColor}`} />
        <a href={`tel:${EMAIL}`} target="_blank">
          {PHONE_NUMBER}
        </a>
      </li>
      <li className="flex gap-2">
        <HomeModernIcon className={`h-6 w-6 ${iconColor}`} />
        {ADDRESS}
      </li>
    </ul>
  )
}
