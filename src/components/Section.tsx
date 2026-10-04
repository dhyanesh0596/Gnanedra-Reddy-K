import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type SectionProps = HTMLAttributes<HTMLElement> & { tone?: 'light' | 'dark' | 'accent' }

export function Section({ className, tone = 'light', ...props }: SectionProps) {
  const toneClass =
    tone === 'dark'
      ? 'dark-panel'
      : tone === 'accent'
        ? 'bg-[linear-gradient(135deg,hsl(var(--accent-soft))_0%,white_62%)]'
        : 'bg-transparent'

  return <section className={cn('py-18 sm:py-22', toneClass, className)} {...props} />
}