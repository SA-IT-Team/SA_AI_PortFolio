import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-surface-light px-2.5 py-0.5 text-xs font-medium text-slate-secondary border border-sky-200/60 transition-colors duration-300 ${className}`}
    >
      {children}
    </span>
  )
}
