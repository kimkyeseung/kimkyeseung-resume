import {
  SUB_TITLE,
  TITLE,
  TRANSLATED_SUB_TITLE,
  TRANSLATED_TITLE,
} from '@/constants'

export const Header = () => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <h1 className="text-title-mobile md:text-title" title={TRANSLATED_TITLE}>
        {TITLE}
      </h1>
      <h2
        className="text-subtitle-mobile md:text-subtitle"
        title={TRANSLATED_SUB_TITLE}
      >
        {SUB_TITLE}
      </h2>
    </div>
  )
}
