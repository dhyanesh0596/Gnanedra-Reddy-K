import { ArrowRight, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { Accordion } from '@/components/Accordion'
import { Seo } from '@/components/Seo'
import { faqs } from '@/data/faqs'
import { services } from '@/data/services'
import { scrollToId } from '@/lib/scroll'

export function ServicesPage() {
  const [activeService, setActiveService] = useState('new-builds')
  const featured = useMemo(() => services.find((service) => service.id === activeService) ?? services[0], [activeService])
  return <><Seo title="Services" description="Explore GRNR Constructions Ltd services across new builds, extensions, loft conversions, renovations, fit-outs and external works." path="/services" /><Section className="pt-10"><Container><div className="max-w-3xl space-y-4"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Services</p><h1 className="site-heading text-5xl font-semibold tracking-tight text-text text-balance sm:text-6xl">A disciplined service menu for homes that need careful, premium delivery.</h1><p className="text-lg leading-8 text-text-muted">Use the cards and detail sections below to explore each service. The navigation chips scroll the page to the matching content.</p></div><div className="mt-8 flex flex-wrap gap-3">{services.map((service) => <button key={service.id} type="button" onClick={() => { setActiveService(service.id); scrollToId(service.id) }} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-text shadow-sm transition hover:border-accent hover:text-accent-strong">{service.name}<ChevronRight className="ml-2 inline size-4" /></button>)}</div></Container></Section><Section><Container><SectionHeading eyebrow="Featured service" title={featured.name} description={featured.description} action={<Button to="/contact">Start a conversation <ArrowRight className="ml-2 size-4" /></Button>} /><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><div className="rounded-3xl border border-line bg-white p-6 shadow-soft"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">What’s included</p><ul className="mt-4 space-y-3 text-sm leading-7 text-text-muted">{featured.highlights.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-accent" /><span>{item}</span></li>)}</ul></div><img src={featured.image} alt={featured.name} className="h-full min-h-[24rem] w-full rounded-3xl object-cover shadow-soft" /></div></Container></Section><Section><Container><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{services.map((service) => <div key={service.id} id={service.id}><ServiceCard service={service} /></div>)}</div></Container></Section><Section tone="accent"><Container><SectionHeading eyebrow="FAQ" title="Questions that are especially useful on the services page." /><Accordion items={faqs} /></Container></Section></>
}