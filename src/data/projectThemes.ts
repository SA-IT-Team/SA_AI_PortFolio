import type { ProjectTheme } from '@/types/project'

export interface ProjectThemeStyle {
  cardBorder: string
  cardShadow: string
  cardHoverBorder: string
  cardGradient: string
  iconText: string
  iconBg: string
  iconRing: string
  accentText: string
  watermarkText: string
  buttonBg: string
  buttonHover: string
  divider: string
}

export const PROJECT_THEMES: Record<ProjectTheme, ProjectThemeStyle> = {
  sky: {
    cardBorder: 'border-sky-300/70',
    cardShadow: 'shadow-sky-200/40',
    cardHoverBorder: 'hover:border-sky-400/50',
    cardGradient: 'from-white via-sky-50/80 to-sky-100/60',
    iconText: 'text-sky-600',
    iconBg: 'bg-white/80',
    iconRing: 'ring-sky-200/80',
    accentText: 'text-sky-600',
    watermarkText: 'text-sky-600',
    buttonBg: 'bg-sky-600',
    buttonHover: 'hover:bg-sky-700',
    divider: 'border-sky-200/80',
  },
  violet: {
    cardBorder: 'border-violet-300/70',
    cardShadow: 'shadow-violet-200/40',
    cardHoverBorder: 'hover:border-violet-400/50',
    cardGradient: 'from-white via-violet-50/80 to-violet-100/50',
    iconText: 'text-violet-600',
    iconBg: 'bg-white/80',
    iconRing: 'ring-violet-200/80',
    accentText: 'text-violet-600',
    watermarkText: 'text-violet-600',
    buttonBg: 'bg-violet-600',
    buttonHover: 'hover:bg-violet-700',
    divider: 'border-violet-200/80',
  },
  emerald: {
    cardBorder: 'border-emerald-300/70',
    cardShadow: 'shadow-emerald-200/40',
    cardHoverBorder: 'hover:border-emerald-400/50',
    cardGradient: 'from-white via-emerald-50/80 to-emerald-100/50',
    iconText: 'text-emerald-600',
    iconBg: 'bg-white/80',
    iconRing: 'ring-emerald-200/80',
    accentText: 'text-emerald-600',
    watermarkText: 'text-emerald-600',
    buttonBg: 'bg-emerald-600',
    buttonHover: 'hover:bg-emerald-700',
    divider: 'border-emerald-200/80',
  },
  amber: {
    cardBorder: 'border-amber-300/70',
    cardShadow: 'shadow-amber-200/40',
    cardHoverBorder: 'hover:border-amber-400/50',
    cardGradient: 'from-white via-amber-50/80 to-amber-100/50',
    iconText: 'text-amber-600',
    iconBg: 'bg-white/80',
    iconRing: 'ring-amber-200/80',
    accentText: 'text-amber-600',
    watermarkText: 'text-amber-600',
    buttonBg: 'bg-amber-600',
    buttonHover: 'hover:bg-amber-700',
    divider: 'border-amber-200/80',
  },
  rose: {
    cardBorder: 'border-rose-300/70',
    cardShadow: 'shadow-rose-200/40',
    cardHoverBorder: 'hover:border-rose-400/50',
    cardGradient: 'from-white via-rose-50/80 to-rose-100/50',
    iconText: 'text-rose-600',
    iconBg: 'bg-white/80',
    iconRing: 'ring-rose-200/80',
    accentText: 'text-rose-600',
    watermarkText: 'text-rose-600',
    buttonBg: 'bg-rose-600',
    buttonHover: 'hover:bg-rose-700',
    divider: 'border-rose-200/80',
  },
  indigo: {
    cardBorder: 'border-indigo-300/70',
    cardShadow: 'shadow-indigo-200/40',
    cardHoverBorder: 'hover:border-indigo-400/50',
    cardGradient: 'from-white via-indigo-50/80 to-indigo-100/50',
    iconText: 'text-indigo-600',
    iconBg: 'bg-white/80',
    iconRing: 'ring-indigo-200/80',
    accentText: 'text-indigo-600',
    watermarkText: 'text-indigo-600',
    buttonBg: 'bg-indigo-600',
    buttonHover: 'hover:bg-indigo-700',
    divider: 'border-indigo-200/80',
  },
  teal: {
    cardBorder: 'border-teal-300/70',
    cardShadow: 'shadow-teal-200/40',
    cardHoverBorder: 'hover:border-teal-400/50',
    cardGradient: 'from-white via-teal-50/80 to-teal-100/50',
    iconText: 'text-teal-600',
    iconBg: 'bg-white/80',
    iconRing: 'ring-teal-200/80',
    accentText: 'text-teal-600',
    watermarkText: 'text-teal-600',
    buttonBg: 'bg-teal-600',
    buttonHover: 'hover:bg-teal-700',
    divider: 'border-teal-200/80',
  },
  orange: {
    cardBorder: 'border-orange-300/70',
    cardShadow: 'shadow-orange-200/40',
    cardHoverBorder: 'hover:border-orange-400/50',
    cardGradient: 'from-white via-orange-50/80 to-orange-100/50',
    iconText: 'text-orange-600',
    iconBg: 'bg-white/80',
    iconRing: 'ring-orange-200/80',
    accentText: 'text-orange-600',
    watermarkText: 'text-orange-600',
    buttonBg: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700',
    divider: 'border-orange-200/80',
  },
}

export function getProjectTheme(theme: ProjectTheme = 'sky'): ProjectThemeStyle {
  return PROJECT_THEMES[theme]
}
