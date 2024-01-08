import { Experience } from './Experience'
import { experiences } from './experiences'

export const Experiences = () => {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map((e, index) => (
        <Experience key={index} {...e} />
      ))}
    </div>
  )
}
