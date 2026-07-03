import type { ReactNode } from 'react'

type BadgeVariant = 'blue' | 'gray'

const variantStyles: Record<BadgeVariant, string> = {
  blue: 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300',
  gray: 'bg-gray-100 dark:bg-gray-800',
}

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <span className={`text-xs rounded-full ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
