import { useMemo, useState } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Lightbox } from '@/components/Lightbox'
import { ProjectCard } from '@/components/ProjectCard'
import { Section } from '@/components/Section'
import { SectionHeading } from '@/components/SectionHeading'
import { Seo } from '@/components/Seo'
import { projectCategories, projects, type Project } from '@/data/projects'

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const [galleryProject, setGalleryProject] = useState<Project | null>(null)
  const filtered = useMemo(() => activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter])
  return <><Seo title="Projects" description="Browse a curated portfolio of premium construction placeholders, case-study cards and before/after visuals." path="/projects" /><Section className="pt-10"><Container><p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Projects</p><h1 className="site-heading mt-3 text-5xl font-semibold tracking-tight text-text text-balance sm:text-6xl">Portfolio layout with filters, gallery lightbox and project detail modal.</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-text-muted">All project entries are data-driven from src/data/projects.ts. Replace the placeholder location, scope and duration fields when real case studies are ready.</p><div className="mt-8 flex flex-wrap gap-3">{projectCategories.map((category) => <Button key={category} variant={category === activeFilter ? 'primary' : 'secondary'} onClick={() => setActiveFilter(category)}>{category}</Button>)}</div></Container></Section><Section><Container><SectionHeading eyebrow="Portfolio" title="Filterable project cards." description="Open a card for project details or the gallery lightbox." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((project) => <ProjectCard key={project.id} project={project} onOpenDetails={setSelected} onOpenGallery={setGalleryProject} />)}</div></Container></Section><Lightbox open={Boolean(selected)} title={selected?.name ?? ''} images={selected?.gallery ?? []} details={selected ? [{ label: 'Location', value: selected.location }, { label: 'Scope', value: selected.scope }, { label: 'Duration', value: selected.duration }] : undefined} onClose={() => setSelected(null)} /><Lightbox open={Boolean(galleryProject)} title={galleryProject?.name ?? ''} images={galleryProject?.gallery ?? []} details={galleryProject ? [{ label: 'Location', value: galleryProject.location }, { label: 'Scope', value: galleryProject.scope }, { label: 'Duration', value: galleryProject.duration }] : undefined} onClose={() => setGalleryProject(null)} /></>
}