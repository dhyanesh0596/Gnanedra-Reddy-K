import { useState } from 'react'
import { cn } from '@/lib/cn'

export function BeforeAfterSlider({ before, after, title, className }: { before: string; after: string; title: string; className?: string }) {
  const [value, setValue] = useState(50)
  return (
    <div className={cn('relative overflow-hidden rounded-3xl border border-line bg-surface shadow-soft', className)}>
      <div className="relative aspect-[4/3]">
        <img src={before} alt={`${title} before`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <img src={after} alt={`${title} after`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-sm font-medium text-white"><span>Before</span><span>After</span></div>
      </div>
      <input className="absolute inset-x-5 bottom-5 h-1 w-[calc(100%-2.5rem)] appearance-none rounded-full bg-white/50 accent-accent" type="range" min={0} max={100} value={value} aria-label={`Compare before and after for ${title}`} onChange={(event) => setValue(Number(event.target.value))} />
    </div>
  )
}