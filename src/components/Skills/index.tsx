import { skillSets } from '@/constants'
import { Skill } from './Skill'

export const Skills = () => {
  const { frontEnds, backEnds, devOps } = skillSets
  return (
    <div className="flex flex-col gap-6">
      {[
        { title: 'Front End', items: frontEnds },
        { title: 'Back End', items: backEnds },
        { title: 'Dev Ops / Others', items: devOps },
      ].map(({ title, items }, index) => (
        <div key={index}>
          <div className="text-base font-bold text-gray-700">{title}</div>
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-5 mt-3">
            {items.map((s, index) => (
              <Skill key={index} item={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
