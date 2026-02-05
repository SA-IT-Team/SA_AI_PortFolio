export type ProjectCategory = 'Product' | 'Agent' | 'Platform' | 'Solution'
export type ProjectStatus = 'Live' | 'Pilot' | 'Internal'

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
  url: string
  status?: ProjectStatus
}
