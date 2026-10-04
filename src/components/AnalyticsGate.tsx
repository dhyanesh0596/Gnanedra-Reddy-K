import { useEffect } from 'react'

export function AnalyticsGate({ consentKey }: { consentKey: string }) {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID
    if (!gaId || window.localStorage.getItem(consentKey) !== 'accepted') return
    if (document.getElementById('ga-script')) return
    const script = document.createElement('script')
    script.id = 'ga-script'
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)
    const inline = document.createElement('script')
    inline.text = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`
    document.head.appendChild(inline)
  }, [consentKey])
  return null
}