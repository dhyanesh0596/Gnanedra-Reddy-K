import { Eye, GalleryVertical } from 'lucide-react'
import { Button } from '@/components/Button'
import { cn } from '@/lib/cn'
import type { Project } from '@/data/projects'

export function ProjectCard({ project, onOpenDetails, onOpenGallery, className }: { project: Project; onOpenDetails: (project: Project) => void; onOpenGallery: (project: Project) => void; className?: string }) {
  return (
    <article className={cn('overflow-hidden rounded-3xl border border-line bg-white shadow-soft', className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        <img src={project.afterImage} alt={project.name} className="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3 text-white"><span className="rounded-full bg-black/35 px-3 py-1 text-xs font-medium backdrop-blur">{project.category}</span><span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">{project.location}</span></div>
      </div>
      <div className="space-y-4 p-6">
        <div><h3 className="site-heading text-xl font-semibold text-text">{project.name}</h3><p className="mt-2 text-sm leading-7 text-text-muted">{project.summary}</p></div>
        <div className="flex flex-wrap gap-3"><Button variant="secondary" onClick={() => onOpenDetails(project)}><Eye className="mr-2 size-4" />Details</Button><Button variant="ghost" onClick={() => onOpenGallery(project)}><GalleryVertical className="mr-2 size-4" />Gallery</Button></div>
      </div>
    </article>
  )
}