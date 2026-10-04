import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { cn } from '@/lib/cn'
import { company } from '@/data/company'
import { site } from '@/data/site'
import { scrollToId } from '@/lib/scroll'

export function Header({ onHomeSectionRequest }: { onHomeSectionRequest?: string | null }) {
  const [isOpen, setIsOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => { const onScroll = () => setSolid(window.scrollY > 12); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  useEffect(() => { if (!onHomeSectionRequest) return; if (location.pathname !== '/') void navigate('/'); const timer = window.setTimeout(() => scrollToId(onHomeSectionRequest), 60); return () => window.clearTimeout(timer) }, [location.pathname, navigate, onHomeSectionRequest])
  return <header className={cn('sticky top-0 z-50 border-b border-transparent transition-all duration-300', solid ? 'border-line bg-white/90 shadow-soft backdrop-blur-xl' : 'bg-transparent')}><Container className="flex items-center justify-between gap-4 py-4"><Link to="/" className="flex items-center gap-3"><div className="grid size-11 place-items-center rounded-2xl bg-accent text-white shadow-soft"><span className="site-heading text-sm font-bold">GRNR</span></div><div><p className="site-heading text-sm font-semibold text-text sm:text-base">{company.name}</p><p className="text-xs text-text-muted">Premium construction in London</p></div></Link><nav className="hidden items-center gap-2 lg:flex">{site.navItems.map((item) => <NavLink key={item.path} to={item.path} className={({ isActive }) => cn('rounded-full px-4 py-2 text-sm font-medium transition hover:bg-surface-muted', isActive && 'bg-surface-muted text-accent-strong')}>{item.label}</NavLink>)}</nav><div className="hidden items-center gap-3 lg:flex"><Button href={`tel:${company.phoneDigits}`} variant="secondary"><Phone className="mr-2 size-4" />Call now</Button><Button to="/contact">Get a free quote</Button></div><button type="button" className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white lg:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'} onClick={() => setIsOpen((value) => !value)}>{isOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button></Container><div className={cn('fixed inset-x-0 top-[73px] z-40 border-b border-line bg-white px-4 py-6 shadow-2xl transition duration-300 lg:hidden', isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 pointer-events-none opacity-0')}><div className="mx-auto flex max-w-7xl flex-col gap-3">{site.navItems.map((item) => <NavLink key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={({ isActive }) => cn('rounded-2xl border border-line px-4 py-3 text-sm font-medium text-text', isActive && 'border-accent bg-accent-soft text-accent-strong')}>{item.label}</NavLink>)}<div className="grid grid-cols-2 gap-3 pt-2"><Button href={`tel:${company.phoneDigits}`} variant="secondary" className="justify-center">Call now</Button><Button to="/contact" className="justify-center" onClick={() => setIsOpen(false)}>Free quote</Button></div></div></div></header>
}