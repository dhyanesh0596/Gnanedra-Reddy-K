import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { cn } from '@/lib/cn'
import type { Testimonial } from '@/data/testimonials'

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % items.length), 6000)
    return () => window.clearInterval(timer)
  }, [items.length])
  const testimonial = items[index]
  return <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft"><div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]"><div className="flex flex-col justify-between gap-8 p-8 lg:p-10"><Quote className="size-10 text-accent" /><blockquote className="site-heading text-2xl font-medium leading-10 text-text text-balance">{testimonial.quote}</blockquote><div><p className="font-semibold text-text">{testimonial.name}</p><p className="text-sm text-text-muted">{testimonial.context}</p></div><div className="flex gap-3"><Button variant="secondary" onClick={() => setIndex((value) => (value - 1 + items.length) % items.length)}><ChevronLeft className="size-4" /></Button><Button variant="secondary" onClick={() => setIndex((value) => (value + 1) % items.length)}><ChevronRight className="size-4" /></Button></div></div><div className="relative bg-[linear-gradient(160deg,hsl(var(--surface-muted))_0%,hsl(28_70%_92%)_100%)] p-8 lg:p-10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.18),transparent_45%)]" /><div className="relative space-y-4">{items.map((item, itemIndex) => <button key={item.name} type="button" className={cn('w-full rounded-2xl border px-4 py-4 text-left transition', itemIndex === index ? 'border-accent bg-white shadow-soft' : 'border-line bg-white/60 hover:bg-white')} onClick={() => setIndex(itemIndex)}><p className="text-sm font-semibold text-text">{item.name}</p><p className="mt-1 text-sm text-text-muted line-clamp-2">{item.quote}</p></button>)}</div></div></div></div>
}