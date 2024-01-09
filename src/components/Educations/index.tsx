import { EDUCATIONS } from '@/constants'
import { Education } from './Education'

export const Educations = () => (
  <div className="flex flex-col gap-14">
    {EDUCATIONS.map((e, index) => (
      <Education key={index} {...e} />
    ))}
  </div>
)
