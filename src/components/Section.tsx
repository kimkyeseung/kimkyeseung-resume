import { FC, PropsWithChildren } from 'react'

type Props = { title?: string } & PropsWithChildren

export const Section: FC<Props> = ({ title, children }) => {
  return (
    <div>
      {title && <h3 className="text-section-title text-gray-500">{title}</h3>}
      <hr className="mt-1 mb-5 border-t border-indigo-200" />
      {children}
    </div>
  )
}
