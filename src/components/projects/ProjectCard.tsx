import { ExternalLink, CheckCircle2, Target } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { Project } from '@/types/project'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText: LucideIcons.FileText,
  Users: LucideIcons.Users,
  MessageSquare: LucideIcons.MessageSquare,
  FolderOpen: LucideIcons.FolderOpen,
  FileSearch: LucideIcons.FileSearch,
  Trophy: LucideIcons.Trophy,
  ShieldCheck: LucideIcons.ShieldCheck,
  Workflow: LucideIcons.Workflow,
}

const FEATURE_LINES = 2
const TAG_MAX = 5

export function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon] ?? LucideIcons.Box
  const features = project.features.slice(0, FEATURE_LINES)
  const useCasesLine = project.useCases.slice(0, 2).join(' \u2022 ')
  const tags = project.tags.slice(0, TAG_MAX)

  return (
    <Card className="group relative flex h-full min-h-[300px] flex-col overflow-hidden p-5">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end opacity-[0.08] sm:opacity-[0.1]">
        <Icon className="h-28 w-28 text-primary sm:h-36 sm:w-36" aria-hidden />
      </div>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/80 text-primary shadow-inner transition-transform duration-400 ease-smooth group-hover:scale-105 ring-1 ring-primary/10">
          <Icon className="h-5 w-5 transition-transform duration-400" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate card-reveal-truncate text-lg font-semibold text-slate-primary">{project.name}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            <Badge>{project.category}</Badge>
            {project.status && <Badge>{project.status}</Badge>}
          </div>
        </div>
      </div>
      <p className="card-reveal mt-3 line-clamp-1 text-sm text-slate-secondary transition-[overflow,display] duration-200">
        {project.shortDescription}
      </p>
      <p className="card-reveal mt-1.5 line-clamp-2 text-sm text-slate-secondary/90 transition-[overflow,display] duration-200">
        {project.longDescription}
      </p>
      {features.length > 0 && (
        <div className="mt-3">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <CheckCircle2 className="h-3 w-3" />
            Features
          </p>
          <ul className="mt-1.5 space-y-0.5 text-sm text-slate-secondary">
            {features.map((f, i) => (
              <li key={i} className="flex gap-1.5">
                <span className="text-primary shrink-0">&#8226;</span>
                <span className="card-reveal-truncate min-w-0 truncate text-sm text-slate-secondary">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {useCasesLine && (
        <div className="mt-2">
          <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Target className="h-3 w-3" />
            Use cases
          </p>
          <p className="card-reveal mt-1 line-clamp-1 text-sm text-slate-secondary transition-[overflow,display] duration-200">
            {useCasesLine}
          </p>
        </div>
      )}
      <div className="mt-3 flex min-h-[28px] flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <div className="mt-auto border-t border-sky-200/80 pt-3">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 touch-manipulation"
        >
          Visit App
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      </div>
    </Card>
  )
}
