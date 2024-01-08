export interface Experience {
  name: string
  description: string
  techs?: string[]
  joinedAt: string | Date
  seperatedAt: string | Date
  url?: string
  projects: Project[]
}

export interface Project {
  title: string
  details: string[]
  description?: string
}