import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center'; action?: ReactNode }

export function SectionHeading({ eyebrow, title, description, align = 'left', action }: Props) {
  return (
    <div className={cn('mb-8 flex flex-col gap-4', align === 'center' && 'items-center text-center')}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p> : null}
      <div className={cn('flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between', align === 'center' && 'sm:justify-center')}>
        <div className={cn('max-w-3xl', align === 'center' && 'mx-auto')}>
          <h2 className="site-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl text-balance">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  )
}