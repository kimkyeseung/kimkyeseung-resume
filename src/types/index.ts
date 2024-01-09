export interface Experience {
  name: string
  descriptions: DescriptionForExperience[]
  techs?: string[]
  joinedAt: string | Date
  seperatedAt: string | Date
  url?: string
  projects: Project[]
}

export interface DescriptionForExperience {
  title: string
  details?: string[]
}

export interface Project {
  title: string
  details: string[]
  description?: string
}

export interface Curriculum {
  title: string
  description: string
}

export interface Education {
  name: string
  descriptions: DescriptionForExperience[]
  joinedAt: string | Date
  seperatedAt: string | Date
  url?: string
  curriculums: Curriculum[]
}
