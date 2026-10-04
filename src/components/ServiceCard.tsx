import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { cn } from '@/lib/cn'
import type { Service } from '@/data/services'

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <article className={cn('group overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift', className)}>
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        <img src={service.image} alt={service.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text">{service.category}</span>
      </div>
      <div className="flex h-full flex-col gap-4 p-6">
        <h3 className="site-heading text-xl font-semibold text-text">{service.name}</h3>
        <p className="text-sm leading-7 text-text-muted">{service.summary}</p>
        <ul className="space-y-2 text-sm text-text-muted">{service.highlights.map((item) => <li key={item} className="flex items-start gap-2"><span className="mt-2 size-1.5 rounded-full bg-accent" /><span>{item}</span></li>)}</ul>
        <div className="mt-auto pt-2"><Button to="/contact" variant="secondary" className="w-full justify-between">Discuss this service<ArrowRight className="size-4" /></Button></div>
      </div>
    </article>
  )
}