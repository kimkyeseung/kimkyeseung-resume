import { FC, PropsWithChildren } from 'react'

type Props = { leftSide: JSX.Element } & PropsWithChildren

export const TwoColumnRow: FC<Props> = ({ leftSide, children }) => {
  return (
    <div className="container flex gap-10">
      <div className="basis-1/4 relative shrink-0">
        <div className="sticky top-2">{leftSide}</div>
      </div>
      <div className="basis-auto">{children}</div>
    </div>
  )
}
