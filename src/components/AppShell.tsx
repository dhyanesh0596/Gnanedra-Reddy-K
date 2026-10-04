import type { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'
import { AnalyticsGate } from '@/components/AnalyticsGate'
import { Button } from '@/components/Button'
import { CookieBanner } from '@/components/CookieBanner'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { company } from '@/data/company'

export function AppShell({ children }: PropsWithChildren) {
  return <>
    <a href="#main-content" className="absolute left-4 top-4 z-[70] -translate-y-[200%] rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0">Skip to content</a>
    <AnalyticsGate consentKey="grnr-cookie-consent" />
    <Header />
    <main id="main-content" className="min-h-screen">{children ?? <Outlet />}</main>
    <Footer />
    <CookieBanner />
    <div className="fixed inset-x-0 bottom-0 z-[55] flex items-center justify-between gap-3 border-t border-line bg-white/95 px-4 py-3 shadow-2xl backdrop-blur md:hidden"><Button href={`tel:${company.phoneDigits}`} className="flex-1 justify-center">Call now</Button><Button href={company.whatsappUrl} variant="secondary" className="flex-1 justify-center">WhatsApp</Button></div>
  </>
}