import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/cn'
import type { Faq } from '@/data/faqs'

export function Accordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex
        return (
          <div key={item.question} className="rounded-2xl border border-line bg-white shadow-soft">
            <button type="button" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
              <span className="font-semibold text-text">{item.question}</span>
              <ChevronDown className={cn('size-5 shrink-0 transition-transform', isOpen && 'rotate-180')} />
            </button>
            <div className={cn('grid overflow-hidden px-5 transition-all duration-300', isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] pb-0 opacity-0')}>
              <p className="min-h-0 overflow-hidden text-sm leading-7 text-text-muted">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}