import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-sky-300/70 bg-gradient-to-br from-white via-surface-muted/80 to-surface-light shadow-lg shadow-sky-200/40 transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-300/30 hover:border-primary/30 ${className}`}
    >
      {children}
    </div>
  )
}
