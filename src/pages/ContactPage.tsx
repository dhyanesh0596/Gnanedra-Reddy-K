import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/Button'
import { CheckboxField, SelectField, TextAreaField, TextField } from '@/components/FormField'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Seo } from '@/components/Seo'
import { company } from '@/data/company'
import { contactSchema, type ContactFormValues } from '@/lib/contactSchema'

const projectOptions = ['New build', 'Extension', 'Loft conversion', 'Renovation', 'Kitchen or bathroom', 'Garage conversion', 'Structural alteration', 'Groundworks / landscaping', 'Commercial fit-out']
const budgetOptions = ['Under £25k', '£25k - £50k', '£50k - £100k', '£100k - £250k', '£250k+']

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [mailtoLink, setMailtoLink] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema), defaultValues: { name: '', email: '', phone: '', projectType: '', budget: '', message: '', consent: false } })
  const submitForm = handleSubmit((values) => {
    void onSubmit(values)
  })

  const onSubmit = async (values: ContactFormValues) => {
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    const subject = encodeURIComponent(`Quote request from ${values.name}`)
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nProject type: ${values.projectType}\nBudget: ${values.budget}\n\n${values.message}`)
    const mailtoUrl = `mailto:${company.email}?subject=${subject}&body=${body}`
    setMailtoLink(mailtoUrl)
    if (!endpoint) { window.location.assign(mailtoUrl); return }
    setStatus('submitting')
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(values) })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return <><Seo title="Contact" description="Request a quote from GRNR Constructions Ltd with a clear static contact form and click-to-call details." path="/contact" /><Section className="pt-10"><Container><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contact</p><h1 className="site-heading mt-3 text-5xl font-semibold tracking-tight text-text text-balance sm:text-6xl">Request a quote.</h1></Container></Section><Section><Container><div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"><form className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8" onSubmit={(event) => { void submitForm(event) }}><div className="grid gap-5 md:grid-cols-2"><TextField label="Name" placeholder="Your name" error={errors.name} {...register('name')} /><TextField label="Email" type="email" placeholder="you@example.com" error={errors.email} {...register('email')} /><TextField label="Phone" placeholder="+44 ..." error={errors.phone} {...register('phone')} /><SelectField label="Project type" error={errors.projectType} {...register('projectType')}><option value="">Select a project</option>{projectOptions.map((option) => <option key={option} value={option}>{option}</option>)}</SelectField><SelectField label="Budget range" error={errors.budget} {...register('budget')}><option value="">Select a budget</option>{budgetOptions.map((option) => <option key={option} value={option}>{option}</option>)}</SelectField><div /><div className="md:col-span-2"><TextAreaField label="Project details" placeholder="Tell us about the space, timing and any constraints." error={errors.message} {...register('message')} /></div><div className="md:col-span-2"><CheckboxField label="I consent to being contacted about this enquiry." error={errors.consent} {...register('consent')} /></div></div><div className="mt-6 flex flex-wrap items-center gap-3"><Button type="submit">{status === 'submitting' ? 'Sending...' : 'Send enquiry'} <ArrowRight className="ml-2 size-4" /></Button>{status === 'success' ? <p className="text-sm font-medium text-emerald-700">Message sent successfully.</p> : null}{status === 'error' ? <p className="text-sm font-medium text-red-700">We could not send the form. Use the email link below.</p> : null}</div>{mailtoLink ? <p className="mt-4 text-sm text-text-muted">Fallback email: <a href={mailtoLink} className="font-semibold text-accent-strong underline decoration-accent/40 underline-offset-4">Open email draft</a></p> : null}</form><div className="space-y-6"><div className="rounded-3xl border border-line bg-white p-6 shadow-soft"><h2 className="site-heading text-2xl font-semibold text-text">Direct contact</h2><div className="mt-5 space-y-4 text-sm text-text-muted"><a href={`tel:${company.phoneDigits}`} className="flex items-center gap-3 rounded-2xl border border-line px-4 py-4 transition hover:border-accent"><Phone className="size-5 text-accent" /><span>{company.phone}</span></a><a href={`mailto:${company.email}`} className="flex items-center gap-3 rounded-2xl border border-line px-4 py-4 transition hover:border-accent"><Mail className="size-5 text-accent" /><span>{company.email}</span></a><div className="flex items-start gap-3 rounded-2xl border border-line px-4 py-4"><MapPin className="mt-0.5 size-5 text-accent" /><span>{company.address}</span></div></div></div><div className="rounded-3xl border border-line bg-[linear-gradient(135deg,hsl(var(--surface-strong))_0%,hsl(var(--bg-dark))_100%)] p-6 text-white shadow-lift"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/65">Opening hours</p><p className="mt-3 site-heading text-2xl font-semibold">{company.openingHours}</p><p className="mt-3 text-sm leading-7 text-white/80">Replace this with a fuller availability note if you want a different service rhythm.</p></div></div></div></Container></Section></>
}