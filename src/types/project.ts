export type ProjectCategory = 'Product' | 'Agent' | 'Platform' | 'Solution'
export type ProjectStatus = 'Live' | 'Pilot' | 'Internal'
export type ProjectTheme = 'sky' | 'violet' | 'emerald' | 'amber' | 'rose' | 'indigo' | 'teal' | 'orange'

export interface Project {
  id: string
  slug: string
  name: string
  category: ProjectCategory
  shortDescription: string
  longDescription: string
  features: string[]
  useCases: string[]
  tags: string[]
  icon: string
  theme: ProjectTheme
  url?: string
  status?: ProjectStatus
}
