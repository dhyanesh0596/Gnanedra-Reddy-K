import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Seo } from '@/components/Seo'

export function NotFoundPage() {
  return <><Seo title="Page not found" description="The requested page could not be found." path="/404" /><Section className="pt-10"><Container><div className="max-w-2xl rounded-3xl border border-line bg-white p-10 shadow-soft"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">404</p><h1 className="site-heading mt-3 text-5xl font-semibold tracking-tight text-text">This page does not exist.</h1><p className="mt-4 text-lg leading-8 text-text-muted">Use the navigation to continue or return to the home page.</p><div className="mt-6"><Button to="/"><ArrowLeft className="mr-2 size-4" />Back home</Button></div></div></Container></Section></>
}