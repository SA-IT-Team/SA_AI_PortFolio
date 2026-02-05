import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-5 lg:px-6 xl:px-8 ${className}`}>
      {children}
    </div>
  )
}
