import { IconType } from '@icons-pack/react-simple-icons'
import { ReactElement } from 'react'

export interface Experience {
  name: string
  descriptions: DescriptionForExperience[]
  techs?: string[]
  joinedAt: string | Date
  seperatedAt: string | Date
  url?: string
  projects: Detail[]
}

export interface DescriptionForExperience {
  title: string
  details?: string[]
}

export interface Detail {
  title: string
  descriptions: string[]
  information?: string
}

export interface Education {
  name: string
  descriptions: DescriptionForExperience[]
  joinedAt: string | Date
  seperatedAt: string | Date
  url?: string
  curriculums: Detail[]
}

export interface Skill {
  name: string
  Icon: ReactElement<IconType>
  description?: string
  url?: string
}
