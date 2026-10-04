import { useState } from 'react'
import { Button } from '@/components/Button'

const consentKey = 'grnr-cookie-consent'

export function CookieBanner() {
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(() => {
    const stored = window.localStorage.getItem(consentKey)
    return stored === 'accepted' || stored === 'rejected' ? stored : null
  })

  const acceptConsent = () => {
    window.localStorage.setItem(consentKey, 'accepted')
    setConsent('accepted')
  }

  const rejectConsent = () => {
    window.localStorage.setItem(consentKey, 'rejected')
    setConsent('rejected')
  }

  if (consent) return null

  return <div className="fixed inset-x-4 bottom-4 z-[60] rounded-3xl border border-line bg-white p-5 shadow-2xl sm:left-6 sm:right-auto sm:max-w-xl"><p className="site-heading text-sm font-semibold text-text">Essential cookies only by default</p><p className="mt-2 text-sm leading-6 text-text-muted">We keep tracking disabled unless you opt in. Essential storage is used only for cookie preferences and form interactions.</p><div className="mt-4 flex flex-col gap-3 sm:flex-row"><Button className="sm:flex-1" onClick={acceptConsent}>Allow optional cookies</Button><Button variant="secondary" className="sm:flex-1" onClick={rejectConsent}>Essential only</Button></div></div>
}