import { Info, Title } from '..'
import Image from 'next/image'
import { DOCUMENT_DESCRIPTION, PROFILE_IMAGE_URL } from '@/constants'

export const Header = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-8 md:gap-12">
        <Title />
        <Info />
      </div>
      <div className="rounded-full overflow-hidden h-fit print:scale-50 origin-top-right">
        <Image
          src={PROFILE_IMAGE_URL}
          alt={DOCUMENT_DESCRIPTION}
          title={DOCUMENT_DESCRIPTION}
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}
