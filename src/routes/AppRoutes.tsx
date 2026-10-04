import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { CookiesPage } from '@/pages/CookiesPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { TermsPage } from '@/pages/TermsPage'

export function AppRoutes() {
  return <Routes><Route path="/" element={<HomePage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/privacy" element={<PrivacyPage />} /><Route path="/cookies" element={<CookiesPage />} /><Route path="/terms" element={<TermsPage />} /><Route path="*" element={<NotFoundPage />} /></Routes>
}