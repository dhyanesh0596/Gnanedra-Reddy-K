import { Helmet } from 'react-helmet-async'
import { company } from '@/data/company'
import { site } from '@/data/site'

export function Seo({ title, description, path = '/', image = '/images/og.jpg' }: { title: string; description: string; path?: string; image?: string }) {
  const canonical = `${company.siteUrl.replace(/\/$/, '')}${path === '/' ? '' : path}`
  const fullTitle = `${title} | ${site.title}`
  const schema = { '@context': 'https://schema.org', '@type': ['GeneralContractor', 'LocalBusiness'], name: company.name, description, telephone: company.phone, email: company.email, url: company.siteUrl, areaServed: company.serviceArea, address: { '@type': 'PostalAddress', streetAddress: '47 Morden Court, London Road', addressLocality: 'Morden', postalCode: 'SM4 5HN', addressCountry: 'GB' } }
  return <Helmet><title>{fullTitle}</title><meta name="description" content={description} /><link rel="canonical" href={canonical} /><meta property="og:title" content={fullTitle} /><meta property="og:description" content={description} /><meta property="og:type" content="website" /><meta property="og:url" content={canonical} /><meta property="og:image" content={`${company.siteUrl.replace(/\/$/, '')}${image}`} /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={fullTitle} /><meta name="twitter:description" content={description} /><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
}