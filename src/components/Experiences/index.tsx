import { EXPERIENCES } from '@/constants'
import { Experience } from './Experience'

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-14">
      {EXPERIENCES.map((e, index) => (
        <Experience key={index} {...e} />
      ))}
    </div>
  )
}
