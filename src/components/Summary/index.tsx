import { SUMMARIES } from '@/constants/summary'
import { ProjectTitle } from '@/typography'

export const Summary = () => {
  return (
    <div className="flex flex-col gap-3">
      {SUMMARIES.map((s, index) => (
        <div key={index} className="flex gap-2 flex-col">
          <ProjectTitle>{s.title}</ProjectTitle>
          <div className="break-keep">{s.description}</div>
        </div>
      ))}
    </div>
  )
}
