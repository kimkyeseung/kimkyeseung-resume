import { FC, PropsWithChildren } from 'react'

type Props = { leftSide: JSX.Element } & PropsWithChildren

export const TwoColumnRow: FC<Props> = ({ leftSide, children }) => {
  return (
    <div className="container flex gap-10 flex-wrap md:flex-nowrap">
      <div className="basis:auto md:basis-1/4 relative md:shrink-0">
        <div className="sticky top-2">{leftSide}</div>
      </div>
      <div className="basis-auto">{children}</div>
    </div>
  )
}
