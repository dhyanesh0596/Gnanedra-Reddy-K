import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Seo } from '@/components/Seo'
import { privacyPolicy } from '@/data/legal'

export function PrivacyPage() {
  return <><Seo title="Privacy Policy" description="UK GDPR-friendly privacy policy for GRNR Constructions Ltd." path="/privacy" /><Section className="pt-10"><Container><h1 className="site-heading text-5xl font-semibold tracking-tight text-text">Privacy Policy</h1><div className="mt-8 space-y-6 rounded-3xl border border-line bg-white p-8 shadow-soft">{privacyPolicy.map((item) => <section key={item.heading} className="space-y-2"><h2 className="site-heading text-xl font-semibold text-text">{item.heading}</h2><p className="text-sm leading-7 text-text-muted">{item.body}</p></section>)}</div></Container></Section></>
}